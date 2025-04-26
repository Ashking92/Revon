
import React, { useState } from 'react';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { ArrowRight, ArrowLeft, Upload, Check } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { supabase } from "@/lib/supabase";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { AppStepOne } from "./review-form/AppStepOne";
import { AppStepTwo } from "./review-form/AppStepTwo";
import { AppStepThree } from "./review-form/AppStepThree";
import { FormSummary } from "./review-form/FormSummary";

const formSchema = z.object({
  appName: z.string().min(2, {
    message: "App name must be at least 2 characters.",
  }),
  appStoreLink: z.string().url({
    message: "Please enter a valid app store URL.",
  }),
  platform: z.enum(["android", "ios"]),
  category: z.string().min(1, {
    message: "Please select a category.",
  }),
  reviewObjective: z.string().min(10, {
    message: "Please provide review objectives (min 10 characters).",
  }),
  fileUrl: z.string().optional(),
});

export type FormValues = z.infer<typeof formSchema>;

const MultiStepReviewForm = () => {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [fileData, setFileData] = useState<File | null>(null);
  const { toast } = useToast();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      appName: "",
      appStoreLink: "",
      platform: "android",
      category: "",
      reviewObjective: "",
      fileUrl: "",
    },
  });

  const totalSteps = 4;
  
  const nextStep = () => {
    const currentStepFields: Record<number, (keyof FormValues)[]> = {
      1: ["appName", "appStoreLink", "platform"],
      2: ["category", "reviewObjective"],
      3: [], // File upload step, no validation needed
    };
    
    const fieldsToValidate = currentStepFields[step];
    
    if (fieldsToValidate && fieldsToValidate.length > 0) {
      form.trigger(fieldsToValidate).then((isValid) => {
        if (isValid) {
          setStep((s) => Math.min(s + 1, totalSteps));
        }
      });
    } else {
      setStep((s) => Math.min(s + 1, totalSteps));
    }
  };
  
  const prevStep = () => {
    setStep((s) => Math.max(s - 1, 1));
  };
  
  const onFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileData(e.target.files[0]);
    }
  };

  const onSubmit = async (values: FormValues) => {
    setIsSubmitting(true);
    
    try {
      // Upload file if present
      let fileUrl = "";
      if (fileData) {
        const fileName = `${Date.now()}-${fileData.name}`;
        const { data, error } = await supabase.storage
          .from('app-files')
          .upload(fileName, fileData);
          
        if (error) throw error;
        fileUrl = data.path;
      }
      
      // Create a new order in the database
      const { data, error } = await supabase
        .from('orders')
        .insert([
          {
            customer_name: values.appName,
            platform: values.platform,
            quantity: 1,
            amount: values.platform === 'android' ? 1999 : 2499,
            email: values.appStoreLink, // Temporarily store link in email field
            status: "pending",
            app_category: values.category,
            review_objective: values.reviewObjective,
            file_url: fileUrl
          },
        ]);
        
      if (error) throw error;
      
      toast({
        title: "Review Submitted Successfully!",
        description: "We'll review your app and get back to you soon.",
      });
      
      // Reset form after successful submission
      form.reset();
      setStep(1);
      setFileData(null);
      
    } catch (error) {
      console.error("Error submitting review:", error);
      toast({
        title: "Submission Failed",
        description: "There was an error submitting your review. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return <AppStepOne form={form} />;
      case 2:
        return <AppStepTwo form={form} />;
      case 3:
        return <AppStepThree fileData={fileData} onFileChange={onFileChange} />;
      case 4:
        return <FormSummary form={form} fileData={fileData} />;
      default:
        return null;
    }
  };

  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle className="text-center">App Review Request</CardTitle>
        <div className="flex justify-center mt-4">
          <div className="flex items-center">
            {Array.from({ length: totalSteps }).map((_, i) => (
              <React.Fragment key={i}>
                <div
                  className={`rounded-full h-8 w-8 flex items-center justify-center ${
                    step > i
                      ? "bg-green-500 text-white"
                      : step === i + 1
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 text-gray-500"
                  }`}
                >
                  {step > i ? <Check size={16} /> : i + 1}
                </div>
                {i < totalSteps - 1 && (
                  <div
                    className={`h-1 w-10 ${
                      step > i + 1 ? "bg-green-500" : "bg-gray-200"
                    }`}
                  ></div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </CardHeader>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CardContent className="space-y-4 pt-4">
            {renderStep()}
          </CardContent>
          
          <CardFooter className="flex justify-between">
            <Button
              type="button"
              variant="outline"
              onClick={prevStep}
              disabled={step === 1}
            >
              <ArrowLeft className="mr-2 h-4 w-4" /> Previous
            </Button>
            
            {step < totalSteps ? (
              <Button type="button" onClick={nextStep}>
                Next <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            ) : (
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Submit Review Request"}
              </Button>
            )}
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
};

export default MultiStepReviewForm;
