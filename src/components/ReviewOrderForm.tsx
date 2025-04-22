
import React, { useState } from 'react';
import { 
  Card, 
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Check, Send } from "lucide-react";
import { Checkbox } from "./ui/checkbox";

const formSchema = z.object({
  platform: z.enum(["ios", "android", "google_maps"]),
  quantity: z.coerce.number().min(1).max(1000),
  appLink: z.string().url("Please enter a valid URL"),
  email: z.string().email("Please enter a valid email"),
  region: z.string().optional(),
  rating: z.enum(["4", "5"]).optional(),
  customMessage: z.boolean().default(false),
});

type FormValues = z.infer<typeof formSchema>;

interface ReviewOrderFormProps {
  defaultPlatform?: "ios" | "android" | "google_maps";
}

const ReviewOrderForm: React.FC<ReviewOrderFormProps> = ({ defaultPlatform = "ios" }) => {
  const [unitPrice, setUnitPrice] = useState(50);
  const [total, setTotal] = useState(50);
  const [orderNumber, setOrderNumber] = useState("");

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      platform: defaultPlatform,
      quantity: 1,
      appLink: "",
      email: "",
      rating: "5",
      customMessage: false,
    },
  });

  const watchPlatform = form.watch("platform");
  const watchQuantity = form.watch("quantity");

  React.useEffect(() => {
    // Calculate price based on platform and quantity
    let price = 0;
    
    if (watchPlatform === "ios") {
      if (watchQuantity >= 50) price = 35;
      else if (watchQuantity >= 10) price = 40;
      else price = 50;
    } else if (watchPlatform === "android") {
      if (watchQuantity >= 50) price = 20;
      else if (watchQuantity >= 10) price = 25;
      else price = 30;
    } else if (watchPlatform === "google_maps") {
      if (watchQuantity >= 50) price = 40;
      else if (watchQuantity >= 10) price = 50;
      else price = 60;
    }
    
    setUnitPrice(price);
    setTotal(price * watchQuantity);
  }, [watchPlatform, watchQuantity]);

  function generateOrderId() {
    const randomId = Math.floor(100000 + Math.random() * 900000);
    const date = new Date();
    const dateStr = `${date.getFullYear()}${String(date.getMonth() + 1).padStart(2, '0')}${String(date.getDate()).padStart(2, '0')}`;
    return `REV-${dateStr}-${randomId}`;
  }

  const onSubmit = (data: FormValues) => {
    const newOrderNumber = generateOrderId();
    setOrderNumber(newOrderNumber);

    // Create WhatsApp message
    let message = `🔥 *NEW REVIEW ORDER* 🔥\n\n`;
    message += `*Order ID:* ${newOrderNumber}\n`;
    message += `*Platform:* ${data.platform === "ios" ? "iOS" : data.platform === "android" ? "Android" : "Google Maps"}\n`;
    message += `*Quantity:* ${data.quantity} reviews\n`;
    message += `*App Link:* ${data.appLink}\n`;
    message += `*Email:* ${data.email}\n`;
    
    if (data.region) {
      message += `*Region:* ${data.region}\n`;
    }
    
    if (data.rating) {
      message += `*Rating:* ${data.rating} stars\n`;
    }
    
    if (data.customMessage) {
      message += `*Custom Messages:* Yes\n`;
    }
    
    message += `\n*Total Amount:* ₹${total}\n\n`;
    message += `Thank you for ordering with RevON!`;

    // Encode the message for WhatsApp URL
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/917385066631?text=${encodedMessage}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank');
  };

  return (
    <Card className="w-full max-w-lg mx-auto">
      <CardHeader>
        <CardTitle className="text-center text-xl text-gray-800">
          Order {defaultPlatform === "ios" ? "iOS" : 
                 defaultPlatform === "android" ? "Android" : 
                 "Google Maps"} Reviews
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="platform"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Platform</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select platform" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="ios">iOS App Store</SelectItem>
                      <SelectItem value="android">Android Play Store</SelectItem>
                      <SelectItem value="google_maps">Google Maps</SelectItem>
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="quantity"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Number of Reviews</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="Enter quantity"
                      min={1}
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="appLink"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>App/Store Link</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="https://..."
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Contact Email</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="your@email.com"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="region"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Preferred Region (Optional)</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="e.g., US, India, Global"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="rating"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Desired Rating</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select rating" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="5">5 Stars ⭐⭐⭐⭐⭐</SelectItem>
                      <SelectItem value="4">4 Stars ⭐⭐⭐⭐</SelectItem>
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="customMessage"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0 py-2">
                  <FormControl>
                    <Checkbox 
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>
                      Include custom review messages
                    </FormLabel>
                  </div>
                </FormItem>
              )}
            />
            
            <div className="bg-gray-50 p-3 rounded-lg">
              <div className="flex justify-between mb-2">
                <span>Unit Price:</span>
                <span className="font-semibold">₹{unitPrice}</span>
              </div>
              <div className="flex justify-between border-t pt-2">
                <span className="font-bold">Total:</span>
                <span className="font-bold text-green-700">₹{total}</span>
              </div>
            </div>
            
            <Button 
              type="submit" 
              className="w-full bg-green-600 hover:bg-green-700"
            >
              <Send className="mr-2 h-4 w-4" /> 
              Order via WhatsApp
            </Button>
          </form>
        </Form>
      </CardContent>
      <CardFooter className="text-center text-sm text-gray-500 flex-col">
        <p>50% advance payment required to start the order</p>
        <div className="flex items-center justify-center mt-2">
          <Check className="h-4 w-4 text-green-500 mr-1" />
          <span>Safe & Secure Transaction</span>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ReviewOrderForm;
