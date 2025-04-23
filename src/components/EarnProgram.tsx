
import React from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const EarnProgram = () => {
  return (
    <div className="space-y-8">
      {/* Earning Tiers */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="p-6 bg-white shadow-lg">
          <h3 className="text-xl font-bold mb-4 text-blue-600">Basic Tier</h3>
          <ul className="space-y-2 mb-4">
            <li>✓ 20 Email IDs = ₹1/email</li>
            <li>✓ Total Earning: ₹20</li>
            <li>✓ Daily Payout</li>
          </ul>
          <p className="text-sm text-gray-600">Perfect for beginners</p>
        </Card>
        
        <Card className="p-6 bg-white shadow-lg border-2 border-blue-500">
          <div className="absolute -top-3 right-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm">Popular</div>
          <h3 className="text-xl font-bold mb-4 text-blue-600">Premium Tier</h3>
          <ul className="space-y-2 mb-4">
            <li>✓ 40 Email IDs = ₹2/email</li>
            <li>✓ Total Earning: ₹80</li>
            <li>✓ Daily Payout</li>
          </ul>
          <p className="text-sm text-gray-600">Recommended choice</p>
        </Card>
        
        <Card className="p-6 bg-white shadow-lg">
          <h3 className="text-xl font-bold mb-4 text-blue-600">Pro Tier</h3>
          <ul className="space-y-2 mb-4">
            <li>✓ 50+ Email IDs = ₹5/email</li>
            <li>✓ Total Earning: ₹250+</li>
            <li>✓ Daily ₹500 bonus</li>
            <li>✓ Permanent job opportunity</li>
          </ul>
          <p className="text-sm text-gray-600">For serious earners</p>
        </Card>
      </div>

      {/* Registration Form */}
      <Card className="p-6 bg-white shadow-lg max-w-md mx-auto">
        <h3 className="text-xl font-bold mb-4">Start Earning Now</h3>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Your Name</label>
            <Input type="text" placeholder="Enter your full name" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <Input type="email" placeholder="Enter your email" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <Input type="password" placeholder="Create a password" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Referral Code (Optional)</label>
            <Input type="text" placeholder="Enter referral code if you have one" />
          </div>
          <Button className="w-full bg-blue-600 hover:bg-blue-700">Register & Start Earning</Button>
        </form>
      </Card>

      {/* Additional Info */}
      <div className="max-w-2xl mx-auto text-center">
        <h3 className="text-xl font-bold mb-4">How It Works</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          <div>
            <h4 className="font-semibold mb-2">1. Register</h4>
            <p className="text-sm text-gray-600">Sign up with your details and get your unique referral ID</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">2. Submit Emails</h4>
            <p className="text-sm text-gray-600">Provide valid email IDs within 7 days</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">3. Get Paid</h4>
            <p className="text-sm text-gray-600">Receive 100% guaranteed payment for your work</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EarnProgram;
