
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

const queryClient = new QueryClient();

const App = () => (
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
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
