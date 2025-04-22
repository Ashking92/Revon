
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const WebCertificate = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-teal-50 to-white">
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">
          Web Development <span className="text-teal-600">Certification</span> Program
        </h1>
        
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Get Certified in Web Development</h2>
          <p className="mb-4">Our comprehensive web development certification program covers everything you need to become a professional web developer. Get industry-recognized certification at an affordable price.</p>
          
          <div className="bg-teal-50 p-4 rounded-lg mb-4">
            <h3 className="font-semibold mb-2">Program Highlights:</h3>
            <ul className="space-y-2 list-disc pl-5">
              <li>Comprehensive curriculum covering HTML, CSS, JavaScript, React and more</li>
              <li>Practical project-based learning</li>
              <li>Industry expert mentorship</li>
              <li>Job placement assistance</li>
              <li>Globally recognized certification</li>
            </ul>
          </div>
        </div>

        <section className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-xl font-semibold mb-6">Certification Programs & Pricing</h2>
          
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded-lg border shadow-sm text-sm">
              <thead className="bg-teal-50 font-bold border-b text-gray-800">
                <tr>
                  <th className="py-2 px-3 text-left">Certificate Program</th>
                  <th className="py-2 px-3 text-center">Market Rate</th>
                  <th className="py-2 px-3 text-center">Our Price (50% OFF)</th>
                  <th className="py-2 px-3 text-center">Duration</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2 px-3 font-medium">Frontend Development Certificate</td>
                  <td className="py-2 px-3 text-center">₹25,000</td>
                  <td className="py-2 px-3 text-center font-semibold text-teal-700">₹12,500</td>
                  <td className="py-2 px-3 text-center">3 months</td>
                </tr>
                <tr className="bg-teal-50">
                  <td className="py-2 px-3 font-medium">Full Stack Development Certificate</td>
                  <td className="py-2 px-3 text-center">₹40,000</td>
                  <td className="py-2 px-3 text-center font-semibold text-teal-700">₹20,000</td>
                  <td className="py-2 px-3 text-center">5 months</td>
                </tr>
                <tr>
                  <td className="py-2 px-3 font-medium">WordPress Development Certificate</td>
                  <td className="py-2 px-3 text-center">₹30,000</td>
                  <td className="py-2 px-3 text-center font-semibold text-teal-700">₹15,000</td>
                  <td className="py-2 px-3 text-center">3 months</td>
                </tr>
                <tr className="bg-teal-50">
                  <td className="py-2 px-3 font-medium">Responsive Web Design Certificate</td>
                  <td className="py-2 px-3 text-center">₹20,000</td>
                  <td className="py-2 px-3 text-center font-semibold text-teal-700">₹10,000</td>
                  <td className="py-2 px-3 text-center">2 months</td>
                </tr>
                <tr>
                  <td className="py-2 px-3 font-medium">MERN Stack Development Certificate</td>
                  <td className="py-2 px-3 text-center">₹35,000</td>
                  <td className="py-2 px-3 text-center font-semibold text-teal-700">₹17,500</td>
                  <td className="py-2 px-3 text-center">4 months</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
        
        <section className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Enroll Now</h2>
          <p className="mb-4">Contact us to enroll in our web development certification programs or get more information.</p>
          <div className="flex justify-center">
            <Link to="https://wa.me/+919999999999?text=I'm%20interested%20in%20web%20development%20certification%20programs" target="_blank">
              <Button className="bg-green-600 hover:bg-green-700">
                Get Details on WhatsApp
              </Button>
            </Link>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default WebCertificate;
