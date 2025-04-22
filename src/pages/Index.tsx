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
import ReviewOrderForm from "../components/ReviewOrderForm";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-green-50 to-white">
      <WelcomePopup />
      <HeroSection />
      <Statistics />
      <WhyChooseSection />
      
      <section className="max-w-6xl mx-auto my-12 px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          Choose Your <span className="text-green-700">Platform</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link to="/ios-reviews" className="block">
            <Button variant="outline" className="w-full h-24 text-lg hover:bg-blue-50">
              iOS App Store Reviews
            </Button>
          </Link>
          <Link to="/android-reviews" className="block">
            <Button variant="outline" className="w-full h-24 text-lg hover:bg-green-50">
              Android Play Store Reviews
            </Button>
          </Link>
          <Link to="/google-maps-reviews" className="block">
            <Button variant="outline" className="w-full h-24 text-lg hover:bg-red-50">
              Google Maps Reviews
            </Button>
          </Link>
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
