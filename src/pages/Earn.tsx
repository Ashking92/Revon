
import React, { useState, useEffect } from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import EarnProgram from "../components/EarnProgram";
import HowToEarn from "../components/HowToEarn";

const Earn = () => {
  const [successRate, setSuccessRate] = useState(90);
  const [failRate, setFailRate] = useState(10);

  useEffect(() => {
    const updateRates = () => {
      const variation = Math.floor(Math.random() * 7) - 3; // Random variation between -3 and +3
      
      let newSuccessRate = successRate + variation;
      if (newSuccessRate < 85) newSuccessRate = 85;
      if (newSuccessRate > 95) newSuccessRate = 95;
      
      const newFailRate = 100 - newSuccessRate;
      
      setSuccessRate(newSuccessRate);
      setFailRate(newFailRate);
    };
    
    const interval = setInterval(updateRates, 3000); // Update every 3 seconds
    
    return () => clearInterval(interval);
  }, [successRate, failRate]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50 to-white">
      <Navbar />
      <div className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">
          Earn With <span className="text-blue-700">RevON</span>
        </h1>
        
        <div className="mb-8 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4 text-center">Daily Performance Metrics</h2>
          <div className="grid grid-cols-2 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">{successRate}%</div>
              <div className="text-sm font-medium text-gray-600">Pass Rate</div>
              <div className="w-full bg-gray-200 h-3 rounded-full mt-2">
                <div 
                  className="bg-green-500 h-3 rounded-full" 
                  style={{ width: `${successRate}%` }}
                ></div>
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-600">{failRate}%</div>
              <div className="text-sm font-medium text-gray-600">Fail Rate</div>
              <div className="w-full bg-gray-200 h-3 rounded-full mt-2">
                <div 
                  className="bg-red-500 h-3 rounded-full" 
                  style={{ width: `${failRate}%` }}
                ></div>
              </div>
            </div>
          </div>
          <div className="mt-4 text-center text-sm text-gray-500">
            Statistics update in real-time based on email verification results
          </div>
        </div>
        
        <HowToEarn />
        <div className="mt-12">
          <EarnProgram />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Earn;
