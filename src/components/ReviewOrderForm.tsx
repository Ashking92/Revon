
import React, { useState } from 'react';
import { 
  Card, 
  CardContent,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Textarea } from "@/components/ui/textarea";
import { Info } from "lucide-react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Checkbox } from "./ui/checkbox";
import { supabase } from "@/lib/supabase";
import { toast } from "@/lib/toast";

const MIN_QUANTITY = 1;
const MAX_QUANTITY = 1000;
const MIN_RATES: Record<string, number> = {
  ios: 25,
  android: 15,
  "google-maps": 20,
};

const formSchema = z.object({
  platform: z.enum(["ios", "android", "google-maps"]),
  quantity: z.coerce.number().min(MIN_QUANTITY).max(MAX_QUANTITY),
  reviewText: z.string().min(10, {
    message: "Review text must be at least 10 characters.",
  }),
  useCustomAmount: z.boolean().default(false),
  customAmount: z.coerce.number().optional(),
  appLink: z.string().url({ message: "Please enter a valid URL" }),
});

type FormValues = z.infer<typeof formSchema>;

const ReviewOrderForm = ({ defaultPlatform = "ios" as "ios" | "android" | "google-maps" }) => {
  const [unitPrice, setUnitPrice] = useState<number>(MIN_RATES[defaultPlatform]);
  const [total, setTotal] = useState<number>(0);
  const [useCustomAmount, setUseCustomAmount] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      platform: defaultPlatform,
      quantity: 1,
      reviewText: "",
      useCustomAmount: false,
      customAmount: MIN_RATES[defaultPlatform],
      appLink: "",
    },
  });

  const watchPlatform = form.watch("platform");
  const watchQuantity = form.watch("quantity");
  const watchCustomAmount = form.watch("customAmount");

  React.useEffect(() => {
    let price = MIN_RATES[watchPlatform];
    if (useCustomAmount && watchCustomAmount) {
      price = Math.max(MIN_RATES[watchPlatform], watchCustomAmount);
    }
    setUnitPrice(price);
    setTotal(price * (watchQuantity || 0));
  }, [useCustomAmount, watchCustomAmount, watchPlatform, watchQuantity]);
  
  const handleSubmit = async (data: FormValues) => {
    try {
      const { error } = await supabase.from('orders').insert({
        customer_name: "Anonymous Customer",
        platform: data.platform,
        quantity: data.quantity,
        amount: data.useCustomAmount && data.customAmount ? data.customAmount * data.quantity : unitPrice * data.quantity,
        status: 'pending'
      });

      if (error) throw error;
      
      toast({
        title: "Order submitted successfully!",
        description: "We'll process your order soon.",
      });
    } catch (error) {
      toast({
        title: "Error submitting order",
        description: "Please try again later.",
        variant: "destructive",
      });
    }
  };

  return (
    <TooltipProvider>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8">
          <Card>
            <CardContent className="grid gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="platform"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Platform</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a platform" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="ios">iOS App Store</SelectItem>
                          <SelectItem value="android">Android Play Store</SelectItem>
                          <SelectItem value="google-maps">Google Maps</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="quantity"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Quantity</FormLabel>
                      <FormControl>
                        <Input type="number" defaultValue={1} placeholder="1" {...field} />
                      </FormControl>
                      <FormDescription>
                        Enter the number of reviews you want to purchase.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="reviewText"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Review Text</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Write your review here"
                        className="resize-none"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      Write the content of the review you want to post.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="appLink"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>App Link</FormLabel>
                    <FormControl>
                      <Input placeholder="https://example.com" {...field} />
                    </FormControl>
                    <FormDescription>
                      Enter the link to your app or business.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <FormField
                    control={form.control}
                    name="useCustomAmount"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={(checked) => {
                              field.onChange(checked);
                              setUseCustomAmount(checked === true);
                            }}
                          />
                        </FormControl>
                        <div className="flex flex-col space-y-1 leading-none">
                          <FormLabel>Use Custom Amount</FormLabel>
                          <FormDescription>
                            Set a custom amount per review.
                          </FormDescription>
                        </div>
                      </FormItem>
                    )}
                  />
                </div>

                {useCustomAmount && (
                  <FormField
                    control={form.control}
                    name="customAmount"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Custom Amount</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            placeholder={MIN_RATES[watchPlatform].toString()}
                            {...field}
                          />
                        </FormControl>
                        <FormDescription>
                          Enter the amount you want to pay per review.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                )}
              </div>
            </CardContent>
          </Card>

          <div className="flex items-center space-x-2 mb-2">
            <label
              htmlFor="useCustomAmount"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Set custom amount per review
            </label>
            <Tooltip>
              <TooltipTrigger asChild>
                <span>
                  <Info className="h-4 w-4 text-muted-foreground cursor-pointer" />
                </span>
              </TooltipTrigger>
              <TooltipContent>
                {`Minimum ₹${MIN_RATES[watchPlatform]} per review`}
              </TooltipContent>
            </Tooltip>
          </div>

          <div className="flex justify-between items-center">
            <div className="space-y-1">
              <div className="text-lg font-semibold">
                Total: ₹{total}
              </div>
              <p className="text-sm text-muted-foreground">
                {unitPrice} x {watchQuantity} reviews
              </p>
            </div>
            <Button type="submit">Place Order</Button>
          </div>
        </form>
      </Form>
    </TooltipProvider>
  );
};

export default ReviewOrderForm;
