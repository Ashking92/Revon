import React, { useState, useRef } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Check, ShieldCheck, CalendarCheck, Ban } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { supabase } from "@/lib/supabase";
import { toast } from "@/lib/toast";

const EarnProgram = () => {
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    
    try {
      const emailList = formData.get('emailList')?.toString().split('\n').filter(email => email.trim());
      
      const { error } = await supabase.from('earn_submissions').insert({
        name: formData.get('name')?.toString(),
        whatsapp_number: formData.get('whatsappNumber')?.toString(),
        total_emails: parseInt(formData.get('totalEmails')?.toString() || '0'),
        email_list: emailList,
        payment_details: formData.get('paymentDetails')?.toString(),
      });

      if (error) throw error;

      setSubmitted(true);
      toast({
        title: "Submission successful!",
        description: "We'll review your submission and process the payment within 24 hours.",
      });

      // Scroll to thank you message
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
    } catch (error) {
      toast({
        title: "Error submitting form",
        description: "Please try again later.",
        variant: "destructive",
      });
    }
  };

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
          Earn Daily with <span className="text-blue-600">Revon</span>
        </h1>
        <p className="text-xl text-gray-600">
          Submit Gmail IDs and start earning — No Login Needed
        </p>
        <Button onClick={scrollToForm} size="lg" className="bg-blue-600 hover:bg-blue-700">
          Submit Now
        </Button>
      </div>

      {submitted && (
        <Card className="p-6 bg-green-50 border-green-200">
          <h3 className="text-xl font-semibold text-green-800 text-center">
            Your submission is under review. Payment within 24 hrs.
          </h3>
        </Card>
      )}

      {/* Payment Chart */}
      <Card className="p-6">
        <h2 className="text-2xl font-bold mb-4">Payment Structure</h2>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Email Count</TableHead>
              <TableHead>Rate</TableHead>
              <TableHead>Benefits</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>1-39 emails</TableCell>
              <TableCell>₹1 per email</TableCell>
              <TableCell>Basic earning</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>40-49 emails</TableCell>
              <TableCell>₹2 per email</TableCell>
              <TableCell>Double earnings</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>50+ emails</TableCell>
              <TableCell>₹500 per day</TableCell>
              <TableCell className="font-medium text-blue-600">
                Permanent job opportunity!
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Card>

      {/* Info Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="p-6 text-center">
          <Check className="mx-auto h-8 w-8 text-green-500 mb-2" />
          <h3 className="font-semibold mb-2">Manual Review</h3>
          <p className="text-sm text-gray-600">Each submission is carefully verified</p>
        </Card>
        <Card className="p-6 text-center">
          <ShieldCheck className="mx-auto h-8 w-8 text-blue-500 mb-2" />
          <h3 className="font-semibold mb-2">Secure Payments</h3>
          <p className="text-sm text-gray-600">Fast and secure payment processing</p>
        </Card>
        <Card className="p-6 text-center">
          <CalendarCheck className="mx-auto h-8 w-8 text-purple-500 mb-2" />
          <h3 className="font-semibold mb-2">1 Submission Per Day</h3>
          <p className="text-sm text-gray-600">Daily earnings opportunity</p>
        </Card>
        <Card className="p-6 text-center">
          <Ban className="mx-auto h-8 w-8 text-red-500 mb-2" />
          <h3 className="font-semibold mb-2">Fake Emails = Blacklist</h3>
          <p className="text-sm text-gray-600">Only submit genuine emails</p>
        </Card>
      </div>

      {/* Submission Form */}
      <Card className="p-6" ref={formRef}>
        <form onSubmit={handleSubmit} className="space-y-6">
          <h2 className="text-2xl font-bold mb-6">Submit Your Emails</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium">Your Name</label>
              <Input required name="name" placeholder="Enter your full name" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">WhatsApp Number</label>
              <Input required name="whatsappNumber" type="tel" placeholder="Enter WhatsApp number" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Total Emails</label>
              <Input required name="totalEmails" type="number" placeholder="Number of emails" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">UPI/Paytm Number</label>
              <Input required name="paymentDetails" placeholder="Payment details" />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Email List with Passwords (One per line)</label>
            <p className="text-sm text-gray-500 mb-2">Format: email:password (example: user@gmail.com:password123)</p>
            <Textarea 
              required
              name="emailList"
              placeholder="Enter email:password (one per line)"
              className="min-h-[200px] font-mono"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Upload File (Optional)</label>
            <Input type="file" accept=".txt,.csv,.xlsx" />
            <p className="text-xs text-gray-500">Supported formats: TXT, CSV, Excel</p>
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox required id="fresh" />
            <label htmlFor="fresh" className="text-sm font-medium">
              I confirm all emails are fresh, working, and I have permission to use them
            </label>
          </div>

          <div className="text-center space-y-4">
            <p className="text-sm text-gray-500">Review goes live within 6-12 hours</p>
            <Button type="submit" className="w-full md:w-auto bg-red-600 hover:bg-red-700">
              Submit for Review
            </Button>
          </div>
        </form>
      </Card>

      {/* WhatsApp CTA */}
      <Card className="p-6 text-center bg-green-50">
        <h3 className="text-xl font-semibold mb-4">Have Doubts? Chat with us on WhatsApp</h3>
        <a
          href="https://wa.me/7385066631"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block"
        >
          <Button className="bg-green-600 hover:bg-green-700">
            Contact on WhatsApp
          </Button>
        </a>
      </Card>

      {/* Footer Info */}
      <div className="text-center space-y-2 text-sm text-gray-600">
        <p>Follow us on Instagram: <a href="https://instagram.com/theitsash" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">@theitsash</a></p>
        <p className="font-medium">Payment after verification only. Emails must be fresh and working.</p>
      </div>
    </div>
  );
};

export default EarnProgram;
