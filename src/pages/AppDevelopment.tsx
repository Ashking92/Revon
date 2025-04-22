
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const AppDevelopment = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-purple-50 to-white">
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">
          Professional <span className="text-purple-600">App Development</span> Services
        </h1>
        
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Our App Development Expertise</h2>
          <ul className="space-y-3 list-disc pl-5">
            <li>Native iOS & Android Apps</li>
            <li>Cross-Platform Development (React Native, Flutter)</li>
            <li>UI/UX Design for Mobile</li>
            <li>App Optimization & Performance</li>
            <li>App Store Submission & Optimization</li>
          </ul>
        </div>

        <section className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-xl font-semibold mb-6">Our Services & Pricing</h2>
          
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded-lg border shadow-sm text-sm">
              <thead className="bg-purple-50 font-bold border-b text-gray-800">
                <tr>
                  <th className="py-2 px-3 text-left">Service</th>
                  <th className="py-2 px-3 text-center">Market Rate</th>
                  <th className="py-2 px-3 text-center">Our Price (50% OFF)</th>
                  <th className="py-2 px-3 text-center">Savings</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2 px-3 font-medium">Simple App (Android or iOS)</td>
                  <td className="py-2 px-3 text-center">₹60,000 - ₹100,000</td>
                  <td className="py-2 px-3 text-center font-semibold text-purple-700">₹30,000</td>
                  <td className="py-2 px-3 text-center text-green-600">50%</td>
                </tr>
                <tr className="bg-purple-50">
                  <td className="py-2 px-3 font-medium">Cross-Platform App</td>
                  <td className="py-2 px-3 text-center">₹80,000 - ₹150,000</td>
                  <td className="py-2 px-3 text-center font-semibold text-purple-700">₹40,000</td>
                  <td className="py-2 px-3 text-center text-green-600">50%</td>
                </tr>
                <tr>
                  <td className="py-2 px-3 font-medium">E-commerce App</td>
                  <td className="py-2 px-3 text-center">₹100,000 - ₹200,000</td>
                  <td className="py-2 px-3 text-center font-semibold text-purple-700">₹50,000</td>
                  <td className="py-2 px-3 text-center text-green-600">50%</td>
                </tr>
                <tr className="bg-purple-50">
                  <td className="py-2 px-3 font-medium">App UI/UX Design</td>
                  <td className="py-2 px-3 text-center">₹40,000 - ₹80,000</td>
                  <td className="py-2 px-3 text-center font-semibold text-purple-700">₹20,000</td>
                  <td className="py-2 px-3 text-center text-green-600">50%</td>
                </tr>
                <tr>
                  <td className="py-2 px-3 font-medium">App Maintenance (Annual)</td>
                  <td className="py-2 px-3 text-center">₹30,000 - ₹50,000</td>
                  <td className="py-2 px-3 text-center font-semibold text-purple-700">₹15,000</td>
                  <td className="py-2 px-3 text-center text-green-600">50%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
        
        <section className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Request a Quote</h2>
          <p className="mb-4">Contact us for a detailed quote tailored to your specific app development requirements.</p>
          <div className="flex justify-center">
            <Link to="https://wa.me/+919999999999?text=I'm%20interested%20in%20app%20development%20services" target="_blank">
              <Button className="bg-green-600 hover:bg-green-700">
                Get Quote on WhatsApp
              </Button>
            </Link>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default AppDevelopment;
