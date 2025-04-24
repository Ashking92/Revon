"use client";

import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "@/components/ui/use-toast";
import { supabase } from "@/lib/supabase"; // ✅ make sure your supabase client is here

const MIN_QUANTITY = 1;
const MAX_QUANTITY = 100;
const unitPrice = 5;

const formSchema = z.object({
  name: z.string().min(2, { message: "Name is required" }),
  phone: z.string().min(10, { message: "Phone number is required" }),
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

export default function ReviewOrderForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      platform: "android",
      quantity: 1,
      reviewText: "",
      useCustomAmount: false,
      customAmount: undefined,
      appLink: "",
    },
  });

  const handleSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    try {
      const { error } = await supabase.from("orders").insert({
        customer_name: data.name,
        phone: data.phone,
        platform: data.platform,
        quantity: data.quantity,
        amount:
          data.useCustomAmount && data.customAmount
            ? data.customAmount * data.quantity
            : unitPrice * data.quantity,
        status: "pending",
      });

      if (error) throw error;

      toast({
        title: "Order submitted successfully!",
        description: "We'll process your order soon.",
      });

      form.reset();
    } catch (error) {
      toast({
        title: "Error submitting order",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">

        {/* Name Field */}
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Your Name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Phone Field */}
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone Number</FormLabel>
              <FormControl>
                <Input placeholder="e.g. 9876543210" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Platform Selection */}
        <FormField
          control={form.control}
          name="platform"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Select Platform</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex flex-col space-y-1"
                >
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="android" />
                    </FormControl>
                    <FormLabel className="font-normal">Android</FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="ios" />
                    </FormControl>
                    <FormLabel className="font-normal">iOS</FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="google-maps" />
                    </FormControl>
                    <FormLabel className="font-normal">Google Maps</FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Quantity */}
        <FormField
          control={form.control}
          name="quantity"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Quantity</FormLabel>
              <FormControl>
                <Input type="number" placeholder="Enter quantity" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Review Text */}
        <FormField
          control={form.control}
          name="reviewText"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Review Text</FormLabel>
              <FormControl>
                <Input placeholder="Write your review..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* App Link */}
        <FormField
          control={form.control}
          name="appLink"
          render={({ field }) => (
            <FormItem>
              <FormLabel>App Link</FormLabel>
              <FormControl>
                <Input type="url" placeholder="https://example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Use Custom Amount */}
        <FormField
          control={form.control}
          name="useCustomAmount"
          render={({ field }) => (
            <FormItem className="flex items-center space-x-2">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <FormLabel>Use Custom Amount</FormLabel>
            </FormItem>
          )}
        />

        {/* Custom Amount Input */}
        {form.watch("useCustomAmount") && (
          <FormField
            control={form.control}
            name="customAmount"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Custom Amount (per unit)</FormLabel>
                <FormControl>
                  <Input type="number" placeholder="Amount per unit" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        )}

        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Submit Order"}
        </Button>
      </form>
    </Form>
  );
}
