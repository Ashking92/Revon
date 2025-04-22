
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import HeroSection from "../components/HeroSection";
import WhyChooseSection from "../components/WhyChooseSection";
import InfoCards from "../components/InfoCards";
import PriceTable from "../components/PriceTable";
import BulkPacksTable from "../components/BulkPacksTable";
import Statistics from "../components/Statistics";
import HowToOrder from "../components/HowToOrder";
import AboutContact from "../components/AboutContact";
import Footer from "../components/Footer";
import WelcomePopup from "../components/WelcomePopup";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-green-50 to-white">
      <WelcomePopup />
      <HeroSection />
      <Statistics />
      <WhyChooseSection />
      
      <section className="max-w-6xl mx-auto my-12 px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          Our <span className="text-green-700">Services</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold mb-3 text-center">App Reviews</h3>
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
            <h3 className="text-xl font-bold mb-3 text-center">Development Services</h3>
            <p className="mb-6 text-gray-600 text-center">
              Professional development services at competitive rates
            </p>
            <Link to="/web-development" className="block">
              <Button className="w-full h-16 text-base bg-blue-600 hover:bg-blue-700">
                View Web & App Development Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      <InfoCards />
      <PriceTable />
      <BulkPacksTable />
      <HowToOrder />
      <AboutContact />
      <Footer />
    </div>
  );
};

export default Index;
