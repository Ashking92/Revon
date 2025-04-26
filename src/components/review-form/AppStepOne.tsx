
import React from 'react';
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { UseFormReturn } from 'react-hook-form';
import { FormValues } from '../MultiStepReviewForm';

interface AppStepOneProps {
  form: UseFormReturn<FormValues>;
}

export const AppStepOne: React.FC<AppStepOneProps> = ({ form }) => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium">Basic App Information</h3>
      
      <FormField
        control={form.control}
        name="appName"
        render={({ field }) => (
          <FormItem>
            <FormLabel>App Name</FormLabel>
            <FormControl>
              <Input placeholder="Enter your app name" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      
      <FormField
        control={form.control}
        name="appStoreLink"
        render={({ field }) => (
          <FormItem>
            <FormLabel>App Store Link</FormLabel>
            <FormControl>
              <Input 
                placeholder="https://play.google.com/store/apps/details?id=..." 
                {...field} 
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      
      <FormField
        control={form.control}
        name="platform"
        render={({ field }) => (
          <FormItem className="space-y-3">
            <FormLabel>Platform</FormLabel>
            <FormControl>
              <RadioGroup
                onValueChange={field.onChange}
                defaultValue={field.value}
                className="flex space-x-4"
              >
                <FormItem className="flex items-center space-x-3 space-y-0">
                  <FormControl>
                    <RadioGroupItem value="android" />
                  </FormControl>
                  <FormLabel className="font-normal">
                    Android
                  </FormLabel>
                </FormItem>
                <FormItem className="flex items-center space-x-3 space-y-0">
                  <FormControl>
                    <RadioGroupItem value="ios" />
                  </FormControl>
                  <FormLabel className="font-normal">
                    iOS
                  </FormLabel>
                </FormItem>
              </RadioGroup>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};
