
import React from 'react';
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { UseFormReturn } from 'react-hook-form';
import { FormValues } from '../MultiStepReviewForm';

interface AppStepTwoProps {
  form: UseFormReturn<FormValues>;
}

export const AppStepTwo: React.FC<AppStepTwoProps> = ({ form }) => {
  const categories = [
    "Games",
    "Business",
    "Education",
    "Social",
    "Entertainment",
    "Productivity",
    "Utilities",
    "Shopping",
    "Travel",
    "Health & Fitness",
    "Finance",
    "Lifestyle",
    "Food & Drink",
    "Sports",
    "Music",
    "Weather",
    "Photo & Video",
    "News",
    "Books",
    "Medical",
    "Other"
  ];

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium">Review Information</h3>
      
      <FormField
        control={form.control}
        name="category"
        render={({ field }) => (
          <FormItem>
            <FormLabel>App Category</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Select a category" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                {categories.map(category => (
                  <SelectItem key={category} value={category.toLowerCase()}>{category}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />
      
      <FormField
        control={form.control}
        name="reviewObjective"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Review Objective</FormLabel>
            <FormControl>
              <Textarea
                placeholder="What would you like us to focus on during the review? E.g., UI/UX, performance, features, etc."
                className="min-h-[120px]"
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};
