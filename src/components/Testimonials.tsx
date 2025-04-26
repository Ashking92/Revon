
import { User } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const testimonials = [
  {
    name: "Arjun Mehta",
    title: "App Developer",
    comment: "RevON delivered genuine reviews for my fitness app within 24 hours. Saw an immediate boost in rankings!",
    app: "FitTrack Pro",
    rating: 5,
  },
  {
    name: "Priya Shah",
    title: "Startup Founder",
    comment: "The comprehensive app analysis helped us identify critical UX issues we were overlooking. Our user retention improved by 30% after implementing their suggestions.",
    app: "TaskFlow",
    rating: 4.5,
  },
  {
    name: "Rahul Kapoor",
    title: "Marketing Manager",
    comment: "We've tried many review services, but RevON stands out with detailed performance benchmarks and actionable insights. Worth every rupee!",
    app: "MarketPulse",
    rating: 5,
  },
  {
    name: "Neha Verma",
    title: "Business Owner",
    comment: "The PDF report was incredibly detailed and professional. It gave us exactly what we needed to improve our app's conversion rate.",
    app: "QuickShop",
    rating: 4.5,
  }
];

const Testimonials = () => (
  <section className="max-w-6xl mx-auto mb-10 px-4 py-8">
    <h2 className="text-2xl font-bold text-gray-900 text-center mb-6">What Our Clients Say</h2>
    
    <Carousel className="w-full max-w-5xl mx-auto">
      <CarouselContent>
        {testimonials.map((item, idx) => (
          <CarouselItem key={idx} className="md:basis-1/2 lg:basis-1/3">
            <div className="bg-white p-6 rounded-xl shadow-md h-full flex flex-col">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-2 rounded-full mr-3">
                  <User size={20} className="text-blue-700" />
                </div>
                <div>
                  <p className="font-medium">{item.name}</p>
                  <p className="text-xs text-gray-500">{item.title}</p>
                </div>
              </div>
              
              <div className="bg-gray-50 px-3 py-2 rounded-lg mb-4">
                <p className="text-sm font-medium">App: {item.app}</p>
                <div className="flex items-center">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg 
                      key={i}
                      xmlns="http://www.w3.org/2000/svg" 
                      className={`h-4 w-4 ${i < Math.floor(item.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.799-2.034c-.784-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="ml-1 text-sm text-gray-600">{item.rating}</span>
                </div>
              </div>
              
              <p className="text-gray-700 italic flex-grow mb-4">"{item.comment}"</p>
              
              <div className="text-right">
                <Link to="/reviews" className="text-sm text-blue-600 hover:underline">
                  View Full Review
                </Link>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="flex justify-center mt-4">
        <CarouselPrevious className="relative static mr-2" />
        <CarouselNext className="relative static ml-2" />
      </div>
    </Carousel>
    
    <div className="text-center mt-8">
      <Link to="/app-review">
        <Button className="bg-blue-600 hover:bg-blue-700">
          Submit Your App for Review
        </Button>
      </Link>
    </div>
  </section>
);

export default Testimonials;
