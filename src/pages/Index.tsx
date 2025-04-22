
import HeroSection from "../components/HeroSection";
import WhyChooseSection from "../components/WhyChooseSection";
import InfoCards from "../components/InfoCards";
import PriceTable from "../components/PriceTable";
import BulkPacksTable from "../components/BulkPacksTable";
import Statistics from "../components/Statistics";
// import Testimonials from "../components/Testimonials";  // Removed import
import HowToOrder from "../components/HowToOrder";
import AboutContact from "../components/AboutContact";
import Footer from "../components/Footer";
import WelcomePopup from "../components/WelcomePopup";
import ReviewOrderForm from "../components/ReviewOrderForm";

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
      
      {/* Review Order Form */}
      <section className="max-w-4xl mx-auto my-12 px-4">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-900">
          Order <span className="text-green-700">Reviews</span> Now
        </h2>
        <ReviewOrderForm />
      </section>
      
      {/* Info Cards Section */}
      <InfoCards />
      
      {/* Pricing Section */}
      <PriceTable />
      <BulkPacksTable />
      
      {/* Removed Testimonials Section */}
      
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
