
import React from 'react';
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";

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
          <h3 className="text-xl font-semibold mb-4">Payment Structure</h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <Check className="h-5 w-5 text-green-500 mt-1 mr-2" />
              <span>1-39 emails: ₹1 per email</span>
            </li>
            <li className="flex items-start">
              <Check className="h-5 w-5 text-green-500 mt-1 mr-2" />
              <span>40-49 emails: ₹2 per email</span>
            </li>
            <li className="flex items-start">
              <Check className="h-5 w-5 text-green-500 mt-1 mr-2" />
              <span>50+ emails: ₹500 per day (permanent opportunity)</span>
            </li>
          </ul>
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
