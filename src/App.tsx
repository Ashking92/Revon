
import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import IOSReviews from "./pages/IOSReviews";
import AndroidReviews from "./pages/AndroidReviews";
import GoogleMapsReviews from "./pages/GoogleMapsReviews";
import WebDevelopment from "./pages/WebDevelopment";
import AppDevelopment from "./pages/AppDevelopment";
import WordPressDevelopment from "./pages/WordPressDevelopment";
import WebCertificate from "./pages/WebCertificate";
import Contact from "./pages/Contact";
import LiveOrders from "./pages/LiveOrders";
import ServicesPage from "./pages/ServicesPage";

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    // Add Tawk.to widget (Replace YOUR_TAWKTO_PROPERTY_ID as needed)
    const tawk = document.createElement("script");
    tawk.async = true;
    tawk.src = "https://embed.tawk.to/65fe1eb00ff6374032cffe95/1hoadlb52"; // Use your Tawk.to property ID here!
    tawk.charset = "UTF-8";
    tawk.setAttribute("crossorigin", "*");
    document.body.appendChild(tawk);

    return () => {
      document.body.removeChild(tawk);
    };
  }, []);
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/ios-reviews" element={<IOSReviews />} />
            <Route path="/android-reviews" element={<AndroidReviews />} />
            <Route path="/google-maps-reviews" element={<GoogleMapsReviews />} />
            <Route path="/web-development" element={<WebDevelopment />} />
            <Route path="/app-development" element={<AppDevelopment />} />
            <Route path="/wordpress-development" element={<WordPressDevelopment />} />
            <Route path="/web-certificate" element={<WebCertificate />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/live-orders" element={<LiveOrders />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;

