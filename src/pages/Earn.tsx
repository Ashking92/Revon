
import React from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import EarnProgram from "../components/EarnProgram";
import HowToEarn from "../components/HowToEarn";

const Earn = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50 to-white">
      <Navbar />
      <div className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">
          Earn With <span className="text-blue-700">RevON</span>
        </h1>
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
