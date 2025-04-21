
import HeroSection from "../components/HeroSection";
import WhyChooseSection from "../components/WhyChooseSection";
import InfoCards from "../components/InfoCards";
import PriceTable from "../components/PriceTable";
import BulkPacksTable from "../components/BulkPacksTable";
import HowToOrder from "../components/HowToOrder";
import AboutContact from "../components/AboutContact";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-green-50 to-white">
      <HeroSection />
      <WhyChooseSection />
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
