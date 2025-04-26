
import React from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MultiStepReviewForm from "../components/MultiStepReviewForm";

const AppReview = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50 to-white">
      <Navbar />
      <div className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">
          Request an <span className="text-blue-700">App Review</span>
        </h1>
        
        <div className="my-8">
          <MultiStepReviewForm />
        </div>
        
        <div className="mt-12 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Why Choose Our App Review Service?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col items-center text-center p-4">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-2">Professional Analysis</h3>
              <p className="text-gray-600">Expert review from experienced developers and UX specialists.</p>
            </div>
            
            <div className="flex flex-col items-center text-center p-4">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-2">Fast Turnaround</h3>
              <p className="text-gray-600">Receive your comprehensive review within 24-48 hours.</p>
            </div>
            
            <div className="flex flex-col items-center text-center p-4">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-2">Actionable Insights</h3>
              <p className="text-gray-600">Clear recommendations to improve your app's performance and user experience.</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AppReview;
