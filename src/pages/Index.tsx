import { useEffect } from "react";
import { Link } from "react-router-dom";
import HeroSection from "../components/HeroSection";
import Statistics from "../components/Statistics";
import LiveOrders from "../components/LiveOrders";
import HowToOrder from "../components/HowToOrder";
import AboutContact from "../components/AboutContact";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Testimonials from "../components/Testimonials";
import FeaturedApps from "../components/FeaturedApps";
import { Button } from "@/components/ui/button";

const Index = () => {
  useEffect(() => {
    // Add Tawk.to script only on the home page
    const s1 = document.createElement("script");
    s1.async = true;
    s1.src = "https://embed.tawk.to/680897d12db46a190e06aa06/default";
    s1.charset = 'UTF-8';
    s1.setAttribute('crossorigin', '*');
    const s0 = document.getElementsByTagName("script")[0];
    if (s0 && s0.parentNode) {
      s0.parentNode.insertBefore(s1, s0);
    } else {
      document.body.appendChild(s1);
    }
    return () => {
      s1.remove();
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50 to-white">
      <Navbar />
      <div className="max-w-6xl mx-auto px-4">
        {/* --- HERO SECTION: Only brief info --- */}
        <section className="mt-12 mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Take Your Online Reputation <span className="text-blue-700">to the Next Level</span>
          </h1>
          <p className="text-gray-600 max-w-xl mx-auto">
            Boost your app or business with authentic, high-quality reviews. Explore our full range of services designed to grow your brand's trust and visibility!
          </p>
          
          <div className="mt-8">
            <Link to="/app-review">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg px-8 py-6">
                Get Your App Reviewed
              </Button>
            </Link>
          </div>
        </section>
        
        {/* Featured Apps Section */}
        <FeaturedApps />
        
        {/* --- DYNAMIC: Redirect to other pages for service info --- */}
        <section className="my-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">
              Our <span className="text-blue-600">Services</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose a service below to explore details and pricing.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link to="/ios-reviews" className="block">
              <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition p-6 text-center flex flex-col">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-lg mb-2">iOS App Reviews</h3>
                <Button variant="outline" className="w-full border-blue-300 hover:bg-blue-50">See Details</Button>
              </div>
            </Link>
            <Link to="/android-reviews" className="block">
              <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition p-6 text-center flex flex-col">
                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-lg mb-2">Android App Reviews</h3>
                <Button variant="outline" className="w-full border-green-300 hover:bg-green-50">See Details</Button>
              </div>
            </Link>
            <Link to="/google-maps-reviews" className="block">
              <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition p-6 text-center flex flex-col">
                <div className="bg-red-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-lg mb-2">Google Maps Reviews</h3>
                <Button variant="outline" className="w-full border-red-300 hover:bg-red-50">See Details</Button>
              </div>
            </Link>
            <Link to="/web-development" className="block">
              <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition p-6 text-center flex flex-col">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </div>
                <h3 className="font-semibold text-lg mb-2">Web Development</h3>
                <Button variant="outline" className="w-full border-blue-300 hover:bg-blue-50">See Details</Button>
              </div>
            </Link>
            {/* App Development Closed */}
            <div className="relative block">
              <div className="bg-gray-100 rounded-lg shadow-md p-6 text-center flex flex-col opacity-60 cursor-not-allowed">
                <div className="flex items-center justify-center mb-3">
                  <div className="bg-gray-300 rounded-full w-16 h-16 flex items-center justify-center mx-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6M9 16h6M12 8v8m4-10a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                </div>
                <h3 className="font-semibold text-lg mb-2 text-gray-500">App Development</h3>
                <span className="mb-2 inline-block bg-red-100 text-red-700 rounded py-1 px-3 text-xs font-bold">Closed for 2 Weeks</span>
                <Button disabled variant="outline" className="w-full border-gray-300 text-gray-500">Unavailable</Button>
              </div>
            </div>
            <Link to="/wordpress-development" className="block">
              <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition p-6 text-center flex flex-col">
                <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <circle cx="12" cy="12" r="10" strokeWidth="2" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h8" />
                  </svg>
                </div>
                <h3 className="font-semibold text-lg mb-2">WordPress Development</h3>
                <Button variant="outline" className="w-full border-orange-300 hover:bg-orange-50">See Details</Button>
              </div>
            </Link>
          </div>
          <div className="mt-12 text-center">
            <Link to="/services">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg">View All Services</Button>
            </Link>
          </div>
        </section>
        
        {/* Testimonials Section */}
        <Testimonials />
        
        {/* HowToOrder and Live orders Section */}
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
