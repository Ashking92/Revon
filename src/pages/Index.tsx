
import HeroSection from "../components/HeroSection";
import WhyChooseSection from "../components/WhyChooseSection";
import InfoCards from "../components/InfoCards";
import PriceTable from "../components/PriceTable";
import BulkPacksTable from "../components/BulkPacksTable";
import Statistics from "../components/Statistics";
import Testimonials from "../components/Testimonials";
import HowToOrder from "../components/HowToOrder";
import AboutContact from "../components/AboutContact";
import Footer from "../components/Footer";
import WelcomePopup from "../components/WelcomePopup";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-green-50 to-white">
      <WelcomePopup />
      {/* Hero Section */}
      <HeroSection />
      
      {/* Statistics Section */}
      <Statistics />
      
      {/* Why Choose Us Section */}
      <WhyChooseSection />
      
      {/* Info Cards Section */}
      <InfoCards />
      
      {/* Pricing Section */}
      <PriceTable />
      <BulkPacksTable />
      
      {/* Testimonials Section */}
      <Testimonials />
      
      {/* How to Order Section */}
      <HowToOrder />
      
      {/* About & Contact Section */}
      <AboutContact />
      
      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default Index;
