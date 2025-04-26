
import React from 'react';
import { UseFormReturn } from 'react-hook-form';
import { FormValues } from '../MultiStepReviewForm';
import { ArrowRight, Check, FileText } from "lucide-react";

interface FormSummaryProps {
  form: UseFormReturn<FormValues>;
  fileData: File | null;
}

export const FormSummary: React.FC<FormSummaryProps> = ({ form, fileData }) => {
  const values = form.getValues();
  
  const renderSummaryItem = (label: string, value: string) => (
    <div className="flex flex-col sm:flex-row sm:justify-between py-2 border-b">
      <span className="font-medium text-gray-600">{label}:</span>
      <span className="mt-1 sm:mt-0">{value}</span>
    </div>
  );

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium">Review Request Summary</h3>
      
      <div className="bg-gray-50 rounded-lg p-4 space-y-2">
        {renderSummaryItem("App Name", values.appName)}
        {renderSummaryItem("App Store Link", values.appStoreLink)}
        {renderSummaryItem("Platform", values.platform === "android" ? "Android" : "iOS")}
        {renderSummaryItem("Category", values.category)}
        {renderSummaryItem("Review Objective", values.reviewObjective)}
        
        <div className="flex flex-col sm:flex-row sm:justify-between py-2 border-b">
          <span className="font-medium text-gray-600">File Upload:</span>
          <span className="mt-1 sm:mt-0">
            {fileData ? (
              <span className="flex items-center text-green-600">
                <FileText size={16} className="mr-1" />
                {fileData.name}
              </span>
            ) : (
              <span className="text-gray-500">No file uploaded</span>
            )}
          </span>
        </div>
        
        <div className="flex flex-col sm:flex-row sm:justify-between py-2 border-b">
          <span className="font-medium text-gray-600">Price:</span>
          <span className="mt-1 sm:mt-0 font-medium">
            ₹{values.platform === "android" ? "1,999" : "2,499"}
          </span>
        </div>
      </div>
      
      <div className="bg-blue-50 p-4 rounded-lg">
        <p className="text-sm text-blue-700">
          By submitting this form, you agree to our terms of service and privacy policy.
          We'll review your application and contact you with the next steps.
        </p>
      </div>
    </div>
  );
};
