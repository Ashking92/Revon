
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const WebDevelopment = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50 to-white">
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">
          Professional <span className="text-blue-600">Web Development</span> Services
        </h1>
        
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Our Web Development Expertise</h2>
          <ul className="space-y-3 list-disc pl-5">
            <li>Responsive Website Design</li>
            <li>E-commerce Development</li>
            <li>WordPress Customization</li>
            <li>Web Application Development</li>
            <li>SEO Optimization</li>
          </ul>
        </div>

        <section className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-xl font-semibold mb-6">Our Services & Pricing</h2>
          
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded-lg border shadow-sm text-sm">
              <thead className="bg-blue-50 font-bold border-b text-gray-800">
                <tr>
                  <th className="py-2 px-3 text-left">Service</th>
                  <th className="py-2 px-3 text-center">Market Rate</th>
                  <th className="py-2 px-3 text-center">Our Price (50% OFF)</th>
                  <th className="py-2 px-3 text-center">Savings</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2 px-3 font-medium">Basic Website (5 pages)</td>
                  <td className="py-2 px-3 text-center">₹15,000 - ₹25,000</td>
                  <td className="py-2 px-3 text-center font-semibold text-blue-700">₹6,000</td>
                  <td className="py-2 px-3 text-center text-green-600">~50%</td>
                </tr>
                <tr className="bg-blue-50">
                  <td className="py-2 px-3 font-medium">WordPress Development</td>
                  <td className="py-2 px-3 text-center">₹20,000 - ₹35,000</td>
                  <td className="py-2 px-3 text-center font-semibold text-blue-700">₹7,500</td>
                  <td className="py-2 px-3 text-center text-green-600">~50%</td>
                </tr>
                <tr>
                  <td className="py-2 px-3 font-medium">E-commerce Website</td>
                  <td className="py-2 px-3 text-center">₹35,000 - ₹60,000</td>
                  <td className="py-2 px-3 text-center font-semibold text-blue-700">₹12,500</td>
                  <td className="py-2 px-3 text-center text-green-600">~50%</td>
                </tr>
                <tr className="bg-blue-50">
                  <td className="py-2 px-3 font-medium">Mobile App Development</td>
                  <td className="py-2 px-3 text-center">₹60,000 - ₹150,000</td>
                  <td className="py-2 px-3 text-center font-semibold text-blue-700">₹22,500</td>
                  <td className="py-2 px-3 text-center text-green-600">~50%</td>
                </tr>
                <tr>
                  <td className="py-2 px-3 font-medium">Web Development Certificate</td>
                  <td className="py-2 px-3 text-center">₹25,000 - ₹40,000</td>
                  <td className="py-2 px-3 text-center font-semibold text-blue-700">₹10,000</td>
                  <td className="py-2 px-3 text-center text-green-600">~50%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
        
        <section className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Request a Quote</h2>
          <p className="mb-4">Contact us for a detailed quote tailored to your specific requirements.</p>
          <div className="flex justify-center">
            <Link to="https://wa.me/+919999999999?text=I'm%20interested%20in%20web%20development%20services" target="_blank">
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

export default WebDevelopment;
