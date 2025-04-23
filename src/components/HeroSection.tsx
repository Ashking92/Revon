
import { Smartphone, Map } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";

const HeroSection = () => {
  const isMobile = useIsMobile();
  
  return (
    <section className="relative bg-gradient-to-br from-white via-blue-50 to-white overflow-hidden pt-8 sm:pt-16 pb-8 sm:pb-20 rounded-xl shadow-lg mb-8">
      {/* Background SVG Icons */}
      <div className="pointer-events-none absolute inset-0 flex justify-between opacity-10 z-0">
        <Smartphone size={isMobile ? 100 : 160} className="text-blue-300 -translate-y-6 -translate-x-8 hidden md:block" />
        <Map size={isMobile ? 120 : 180} className="text-blue-200 translate-y-8 translate-x-10 hidden md:block" />
      </div>
      <div className="relative z-10 flex flex-col items-center text-center max-w-2xl mx-auto px-4">
        <p className="text-blue-600 font-medium mb-2">Welcome to RevON</p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-tight font-playfair">
          Genuine App Reviews – iOS, Android & Google Maps
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 mb-7 font-medium">
          Boost your app visibility with <span className="text-blue-700 font-semibold">100% real user reviews</span>
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="https://wa.me/917385066631"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition font-semibold text-lg shadow-lg"
          >
            <span role="img" aria-label="envelope">📩</span> Place Order on WhatsApp
          </a>
          <Link to="/services" className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-blue-600 text-blue-600 hover:bg-blue-50 transition font-semibold text-lg">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
