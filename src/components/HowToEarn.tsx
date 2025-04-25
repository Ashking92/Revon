
import React from 'react';
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const HowToEarn = () => {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">How to Earn with RevON</h2>
        <p className="text-xl text-gray-600">Follow these simple steps to start earning</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-4">Getting Started</h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <Check className="h-5 w-5 text-green-500 mt-1 mr-2" />
              <span>Submit your Gmail accounts with passwords (completely secure)</span>
            </li>
            <li className="flex items-start">
              <Check className="h-5 w-5 text-green-500 mt-1 mr-2" />
              <span>Ensure all emails are genuine and active</span>
            </li>
            <li className="flex items-start">
              <Check className="h-5 w-5 text-green-500 mt-1 mr-2" />
              <span>Provide accurate payment details (UPI/Paytm)</span>
            </li>
          </ul>
        </Card>

        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-4">Job Opportunity</h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <Check className="h-5 w-5 text-green-500 mt-1 mr-2" />
              <span>Create 50 email IDs within 3 days to qualify for a job</span>
            </li>
            <li className="flex items-start">
              <Check className="h-5 w-5 text-green-500 mt-1 mr-2" />
              <span>Even if you create only 10-20 emails, you'll still get paid for those</span>
            </li>
            <li className="flex items-start">
              <Check className="h-5 w-5 text-green-500 mt-1 mr-2" />
              <span>For job inquiries, contact our admin directly</span>
            </li>
          </ul>
          <div className="mt-4">
            <Button onClick={() => window.location.href = "https://wa.me/7385066631"} className="w-full bg-green-600 hover:bg-green-700">
              Contact Admin for Job
            </Button>
          </div>
        </Card>
      </div>

      <Card className="p-6 bg-blue-50">
        <h3 className="text-xl font-semibold mb-4">Important Information</h3>
        <ul className="space-y-3">
          <li className="flex items-start">
            <Check className="h-5 w-5 text-blue-500 mt-1 mr-2" />
            <span>All submissions are manually reviewed for quality</span>
          </li>
          <li className="flex items-start">
            <Check className="h-5 w-5 text-blue-500 mt-1 mr-2" />
            <span>Payments processed within 24 hours after verification</span>
          </li>
          <li className="flex items-start">
            <Check className="h-5 w-5 text-blue-500 mt-1 mr-2" />
            <span>One submission allowed per day per user</span>
          </li>
          <li className="flex items-start">
            <Check className="h-5 w-5 text-blue-500 mt-1 mr-2" />
            <span>Fake or inactive emails will result in permanent ban</span>
          </li>
        </ul>
      </Card>
    </div>
  );
};

export default HowToEarn;
