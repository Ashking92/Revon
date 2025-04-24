
import React from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50 to-white">
      <Navbar />
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-8">About RevON</h1>
        <div className="prose lg:prose-xl mx-auto">
          <p className="text-lg text-gray-700 mb-6">
            RevON is a leading platform that helps businesses grow their online presence through genuine reviews and ratings. We connect businesses with real users who provide authentic feedback and reviews.
          </p>
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-lg text-gray-700 mb-6">
            Our mission is to help businesses build trust and credibility online while providing opportunities for users to earn by contributing meaningful reviews.
          </p>
          <h2 className="text-2xl font-semibold mb-4">Why Choose RevON?</h2>
          <ul className="list-disc pl-6 text-lg text-gray-700 mb-6">
            <li>100% Genuine Reviews</li>
            <li>Quick Payment Processing</li>
            <li>24/7 Customer Support</li>
            <li>User-Friendly Platform</li>
            <li>Transparent Process</li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
