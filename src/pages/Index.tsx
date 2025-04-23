
import { Link } from "react-router-dom";
import HeroSection from "../components/HeroSection";
import Statistics from "../components/Statistics";
import LiveOrders from "../components/LiveOrders";
import HowToOrder from "../components/HowToOrder";
import AboutContact from "../components/AboutContact";
import Footer from "../components/Footer";
import WelcomePopup from "../components/WelcomePopup";
import Navbar from "../components/Navbar";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50 to-white">
      <WelcomePopup />
      <Navbar />
      
      <div className="max-w-6xl mx-auto px-4">
        <HeroSection />
        <Statistics />
        
        <section className="my-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">
              Our <span className="text-blue-600">Services</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We offer a wide range of services to help boost your online presence and grow your business.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link to="/ios-reviews" className="block">
              <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition p-6 text-center h-full flex flex-col">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-lg mb-2">iOS App Reviews</h3>
                <p className="text-gray-600 mb-4 flex-grow">Get authentic reviews for your iOS applications</p>
                <Button variant="outline" className="w-full border-blue-300 hover:bg-blue-50">Learn More</Button>
              </div>
            </Link>
            
            <Link to="/android-reviews" className="block">
              <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition p-6 text-center h-full flex flex-col">
                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-lg mb-2">Android App Reviews</h3>
                <p className="text-gray-600 mb-4 flex-grow">Boost your Play Store presence with genuine reviews</p>
                <Button variant="outline" className="w-full border-green-300 hover:bg-green-50">Learn More</Button>
              </div>
            </Link>
            
            <Link to="/google-maps-reviews" className="block">
              <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition p-6 text-center h-full flex flex-col">
                <div className="bg-red-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-lg mb-2">Google Maps Reviews</h3>
                <p className="text-gray-600 mb-4 flex-grow">Improve local search visibility with map reviews</p>
                <Button variant="outline" className="w-full border-red-300 hover:bg-red-50">Learn More</Button>
              </div>
            </Link>
          </div>
          
          <div className="mt-8 text-center">
            <Link to="/services">
              <Button className="bg-blue-600 hover:bg-blue-700">
                View All Services
              </Button>
            </Link>
          </div>
        </section>
        
        <div className="my-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <HowToOrder />
            </div>
            <div>
              <div className="sticky top-24">
                <LiveOrders />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <AboutContact />
      <Footer />
    </div>
  );
};

export default Index;
