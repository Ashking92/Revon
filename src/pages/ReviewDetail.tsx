import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  FileText, 
  Share2, 
  Mail, 
  Download, 
  CheckCircle,
  Star,
  Clock
} from "lucide-react";
import { sampleReviewData, emailPdfReport } from '../utils/pdfGenerator';
import { useToast } from "@/hooks/use-toast";

const ReviewDetail = () => {
  const { appId } = useParams<{ appId: string }>();
  const [email, setEmail] = useState('');
  const [isSending, setIsSending] = useState(false);
  const { toast } = useToast();
  
  // In a real app, you would fetch the app data based on the appId
  // For now, we'll use the sample data
  const reviewData = sampleReviewData;
  
  const handleDownload = () => {
    // In a real implementation, this would trigger the download of the actual PDF
    toast({
      title: "PDF Report Downloaded",
      description: `The review report for ${reviewData.appName} has been downloaded.`,
    });
  };
  
  const handleEmailSend = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Email Required",
        description: "Please enter an email address.",
        variant: "destructive",
      });
      return;
    }
    
    setIsSending(true);
    
    try {
      // Simulate sending the email
      await emailPdfReport(
        email, 
        `/review-reports/${reviewData.appName.replace(/\s+/g, '-').toLowerCase()}-review.pdf`,
        reviewData.appName
      );
      
      toast({
        title: "Report Sent Successfully",
        description: `The review report has been sent to ${email}.`,
      });
      
      setEmail('');
    } catch (error) {
      toast({
        title: "Failed to Send Report",
        description: "There was an error sending the report. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50 to-white">
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-4">
          <Link to="/reviews" className="text-blue-600 hover:underline flex items-center">
            ← Back to Reviews
          </Link>
        </div>
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-6 text-white">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center">
              <div>
                <h1 className="text-3xl font-bold mb-2">{reviewData.appName}</h1>
                <div className="flex items-center mb-1">
                  <span className="bg-white text-blue-800 text-xs px-2 py-1 rounded mr-2">
                    {reviewData.platform}
                  </span>
                  <span className="text-sm">{reviewData.category}</span>
                </div>
              </div>
              
              <div className="mt-4 md:mt-0 flex items-center">
                <div className="bg-white text-blue-800 rounded-full px-4 py-2 flex items-center">
                  <Star className="fill-yellow-400 text-yellow-400 h-5 w-5 mr-1" />
                  <span className="text-xl font-bold">{reviewData.overallRating}</span>
                  <span className="text-sm ml-1">/5.0</span>
                </div>
              </div>
            </div>
            
            <div className="flex items-center mt-4 text-sm">
              <Clock className="h-4 w-4 mr-1" />
              <span>Reviewed on: {reviewData.reviewDate}</span>
            </div>
          </div>
          
          <div className="p-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-blue-50 p-4 rounded-lg text-center">
                <p className="text-2xl font-semibold text-blue-700">{reviewData.designScore}/5</p>
                <p className="text-sm text-gray-600">Design</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg text-center">
                <p className="text-2xl font-semibold text-green-700">{reviewData.performanceScore}/5</p>
                <p className="text-sm text-gray-600">Performance</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg text-center">
                <p className="text-2xl font-semibold text-purple-700">{reviewData.usabilityScore}/5</p>
                <p className="text-sm text-gray-600">Usability</p>
              </div>
              <div className="bg-amber-50 p-4 rounded-lg text-center">
                <p className="text-2xl font-semibold text-amber-700">{reviewData.contentScore}/5</p>
                <p className="text-sm text-gray-600">Content</p>
              </div>
            </div>
            
            <h2 className="text-xl font-bold mb-4">Summary</h2>
            <p className="text-gray-700 mb-8">{reviewData.summary}</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <h3 className="text-lg font-semibold mb-3 text-green-700">Pros</h3>
                <ul className="space-y-2">
                  {reviewData.pros.map((pro, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span>{pro}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-3 text-red-700">Cons</h3>
                <ul className="space-y-2">
                  {reviewData.cons.map((con, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      <span>{con}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-3 text-blue-700">Recommendations</h3>
              <ul className="space-y-2">
                {reviewData.recommendations.map((rec, idx) => (
                  <li key={idx} className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    <span>{rec}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="border-t pt-6">
              <h3 className="text-lg font-semibold mb-4">Download or Share Review Report</h3>
              
              <div className="bg-gray-50 p-4 rounded-lg mb-4 flex flex-col md:flex-row items-center">
                <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6">
                  <FileText className="h-16 w-16 text-red-600" />
                </div>
                <div className="flex-grow">
                  <h4 className="font-medium">{reviewData.appName} - Complete Review Report.pdf</h4>
                  <p className="text-sm text-gray-600 mb-3">
                    This comprehensive report includes detailed analysis, benchmarking data, and actionable recommendations.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Button onClick={handleDownload} className="flex items-center">
                      <Download className="mr-1 h-4 w-4" />
                      Download PDF
                    </Button>
                    <Button variant="outline" className="flex items-center">
                      <Share2 className="mr-1 h-4 w-4" />
                      Share
                    </Button>
                  </div>
                </div>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-medium mb-2">Email Report</h4>
                <form onSubmit={handleEmailSend} className="flex flex-col sm:flex-row gap-2">
                  <Input
                    type="email"
                    placeholder="Enter email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-grow"
                  />
                  <Button type="submit" disabled={isSending} className="whitespace-nowrap">
                    <Mail className="mr-1 h-4 w-4" />
                    {isSending ? "Sending..." : "Send Report"}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ReviewDetail;
