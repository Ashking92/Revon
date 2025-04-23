
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const AppDevelopment = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-purple-50 to-white">
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-lg p-8 text-center">
          <div className="inline-block p-4 bg-red-100 rounded-full mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          
          <h1 className="text-3xl font-bold mb-4">
            App Development Service <span className="text-red-500">Temporarily Unavailable</span>
          </h1>
          
          <p className="text-gray-600 text-lg mb-6">
            We're sorry, but our App Development service is temporarily closed for the next two weeks as we work on improving our development process and infrastructure.
          </p>
          
          <p className="text-gray-600 mb-8">
            Please check back after <strong>May 7th, 2025</strong>. In the meantime, our other services are still available.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/web-development">
              <Button className="bg-blue-600 hover:bg-blue-700 w-full sm:w-auto">
                Web Development Services
              </Button>
            </Link>
            
            <Link to="/wordpress-development">
              <Button className="bg-orange-600 hover:bg-orange-700 w-full sm:w-auto">
                WordPress Development
              </Button>
            </Link>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-6 mt-8">
          <h2 className="text-xl font-semibold mb-6 text-center">Want to be notified when we're back?</h2>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="https://wa.me/+917385066631?text=Notify%20me%20when%20App%20Development%20services%20are%20available%20again" className="w-full sm:w-auto" target="_blank">
              <Button className="w-full bg-green-600 hover:bg-green-700">
                Get Notified on WhatsApp
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AppDevelopment;
