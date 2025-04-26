
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
import Earn from "./pages/Earn";
import About from "./pages/About";
import AppReview from "./pages/AppReview";
import Reviews from "./pages/Reviews";
import ReviewDetail from "./pages/ReviewDetail";

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    // Prevent text selection and copying
    document.addEventListener('selectstart', (e) => e.preventDefault());
    document.addEventListener('copy', (e) => {
      e.preventDefault();
      e.clipboardData?.setData('text/plain', 'bidu meri website main se kuch bhi copy karna impossible hain');
    });

    // Prevent screenshots from showing content
    const style = document.createElement('style');
    style.textContent = `
      html {
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
      }
      body * {
        visibility: visible;
      }
      body {
        background: #fff;
      }
      @media print {
        body * {
          visibility: hidden;
        }
      }
      @media screen and (min-resolution: 2dppx) {
        body * {
          visibility: visible !important;
        }
      }
    `;
    document.head.appendChild(style);

    // Add Tawk.to widget
    const tawk = document.createElement("script");
    tawk.async = true;
    tawk.src = "https://embed.tawk.to/65fe1eb00ff6374032cffe95/1hoadlb52";
    tawk.charset = "UTF-8";
    tawk.setAttribute("crossorigin", "*");
    document.body.appendChild(tawk);

    return () => {
      document.body.removeChild(tawk);
      document.head.removeChild(style);
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
            <Route path="/earn" element={<Earn />} />
            <Route path="/about" element={<About />} />
            <Route path="/app-review" element={<AppReview />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/reviews/:appId" element={<ReviewDetail />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
