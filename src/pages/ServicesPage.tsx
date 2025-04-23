
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50 to-white">
      <Navbar />
      <div className="max-w-6xl mx-auto my-12 px-4">
        <h1 className="text-3xl font-bold text-center mb-8">
          Our <span className="text-blue-600">Services</span>
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-bold mb-3 text-center">App Reviews</h2>
            <p className="mb-6 text-gray-600 text-center">
              Boost your app visibility and credibility with genuine user reviews
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link to="/ios-reviews" className="block">
                <Button variant="outline" className="w-full h-16 text-base hover:bg-blue-50">
                  iOS App Store
                </Button>
              </Link>
              <Link to="/android-reviews" className="block">
                <Button variant="outline" className="w-full h-16 text-base hover:bg-green-50">
                  Android Play Store
                </Button>
              </Link>
              <Link to="/google-maps-reviews" className="block">
                <Button variant="outline" className="w-full h-16 text-base hover:bg-red-50">
                  Google Maps
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-bold mb-3 text-center">Development Services</h2>
            <p className="mb-6 text-gray-600 text-center">
              Professional development services at competitive rates
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link to="/web-development" className="block">
                <Button className="w-full h-16 text-base bg-blue-600 hover:bg-blue-700">
                  Web Development
                </Button>
              </Link>
              <div className="relative">
                <Button disabled className="w-full h-16 text-base bg-gray-400">
                  App Development
                </Button>
                <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-2 py-1">
                  Closed
                </div>
              </div>
              <Link to="/wordpress-development" className="block">
                <Button className="w-full h-16 text-base bg-orange-600 hover:bg-orange-700">
                  WordPress
                </Button>
              </Link>
              <Link to="/web-certificate" className="block">
                <Button className="w-full h-16 text-base bg-teal-600 hover:bg-teal-700">
                  Web Certificate
                </Button>
              </Link>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-6 mt-10">
          <h2 className="text-xl font-bold mb-6 text-center">Price Comparison</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded-lg border shadow-sm">
              <thead className="bg-blue-50 border-b">
                <tr>
                  <th className="py-3 px-4 text-left text-sm font-medium text-gray-800">Service</th>
                  <th className="py-3 px-4 text-center text-sm font-medium text-gray-800">Market Price</th>
                  <th className="py-3 px-4 text-center text-sm font-medium text-gray-800">Our Price</th>
                  <th className="py-3 px-4 text-center text-sm font-medium text-gray-800">Savings</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                <tr>
                  <td className="py-3 px-4 text-sm font-medium">iOS App Review</td>
                  <td className="py-3 px-4 text-center text-sm">₹50</td>
                  <td className="py-3 px-4 text-center text-sm font-semibold text-blue-700">₹25</td>
                  <td className="py-3 px-4 text-center text-sm text-green-600">50%</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-3 px-4 text-sm font-medium">Android App Review</td>
                  <td className="py-3 px-4 text-center text-sm">₹30</td>
                  <td className="py-3 px-4 text-center text-sm font-semibold text-blue-700">₹15</td>
                  <td className="py-3 px-4 text-center text-sm text-green-600">50%</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-sm font-medium">Google Maps Review</td>
                  <td className="py-3 px-4 text-center text-sm">₹40</td>
                  <td className="py-3 px-4 text-center text-sm font-semibold text-blue-700">₹20</td>
                  <td className="py-3 px-4 text-center text-sm text-green-600">50%</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-3 px-4 text-sm font-medium">Web Development</td>
                  <td className="py-3 px-4 text-center text-sm">₹50,000 - ₹100,000</td>
                  <td className="py-3 px-4 text-center text-sm font-semibold text-blue-700">₹25,000</td>
                  <td className="py-3 px-4 text-center text-sm text-green-600">50%+</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-sm font-medium">WordPress Development</td>
                  <td className="py-3 px-4 text-center text-sm">₹30,000 - ₹60,000</td>
                  <td className="py-3 px-4 text-center text-sm font-semibold text-blue-700">₹15,000</td>
                  <td className="py-3 px-4 text-center text-sm text-green-600">50%+</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ServicesPage;
