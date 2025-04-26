
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

const featuredApps = [
  {
    id: 'app1',
    name: 'MindCalm Meditation',
    description: 'Guided meditation app with sleep stories and relaxation tracks.',
    image: 'https://placehold.co/300x300/e4f3ff/0369a1?text=MindCalm',
    rating: 4.8,
    platform: 'android',
    category: 'Health & Fitness',
  },
  {
    id: 'app2',
    name: 'CryptoTrack Pro',
    description: 'Real-time cryptocurrency tracking and portfolio management.',
    image: 'https://placehold.co/300x300/eef5e6/166534?text=CryptoTrack',
    rating: 4.5,
    platform: 'ios',
    category: 'Finance',
  },
  {
    id: 'app3',
    name: 'TaskFlow',
    description: 'Productivity app with smart task management and team collaboration.',
    image: 'https://placehold.co/300x300/fef2f2/991b1b?text=TaskFlow',
    rating: 4.7,
    platform: 'android',
    category: 'Productivity',
  },
  {
    id: 'app4',
    name: 'RecipeBook',
    description: 'Digital cookbook with thousands of recipes and meal planning.',
    image: 'https://placehold.co/300x300/f8fafc/0f172a?text=RecipeBook',
    rating: 4.6,
    platform: 'ios',
    category: 'Food & Drink',
  },
  {
    id: 'app5',
    name: 'FitTrack Pro',
    description: 'Workout tracking with AI-powered form correction and progress analytics.',
    image: 'https://placehold.co/300x300/fef9c3/854d0e?text=FitTrack',
    rating: 4.9,
    platform: 'android',
    category: 'Health & Fitness',
  },
  {
    id: 'app6',
    name: 'PixelEdit',
    description: 'Professional photo editing with filters and advanced tools.',
    image: 'https://placehold.co/300x300/f3e8ff/6b21a8?text=PixelEdit',
    rating: 4.7,
    platform: 'ios',
    category: 'Photo & Video',
  },
];

const FeaturedApps = () => {
  const [filter, setFilter] = useState<string | null>(null);
  
  const filteredApps = filter 
    ? featuredApps.filter(app => app.platform === filter) 
    : featuredApps;

  return (
    <section className="max-w-6xl mx-auto mb-10 px-4 py-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 md:mb-0">Featured App Reviews</h2>
        
        <div className="flex space-x-2">
          <Button
            variant={filter === null ? "default" : "outline"}
            size="sm"
            onClick={() => setFilter(null)}
          >
            All
          </Button>
          <Button
            variant={filter === 'android' ? "default" : "outline"}
            size="sm"
            onClick={() => setFilter('android')}
          >
            Android
          </Button>
          <Button
            variant={filter === 'ios' ? "default" : "outline"}
            size="sm"
            onClick={() => setFilter('ios')}
          >
            iOS
          </Button>
        </div>
      </div>
      
      <Carousel className="w-full">
        <CarouselContent>
          {filteredApps.map((app) => (
            <CarouselItem key={app.id} className="md:basis-1/2 lg:basis-1/3 p-1">
              <Link to={`/reviews/${app.id}`} className="block">
                <div className="bg-white rounded-xl shadow-md overflow-hidden h-full">
                  <div className="relative">
                    <img 
                      src={app.image} 
                      alt={app.name} 
                      className="w-full h-40 object-cover"
                    />
                    <Badge 
                      className={`absolute top-2 right-2 ${
                        app.platform === 'android' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                      }`}
                    >
                      {app.platform === 'android' ? 'Android' : 'iOS'}
                    </Badge>
                  </div>
                  
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-lg line-clamp-1">{app.name}</h3>
                      <div className="flex items-center">
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          className="h-4 w-4 text-yellow-400" 
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.799-2.034c-.784-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <span className="ml-1 text-sm">{app.rating}</span>
                      </div>
                    </div>
                    
                    <p className="text-sm text-gray-600 line-clamp-2 mb-3">{app.description}</p>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">{app.category}</span>
                      <Badge variant="outline" className="text-xs border-blue-300 text-blue-800">
                        Reviewed by RevON
                      </Badge>
                    </div>
                  </div>
                </div>
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex justify-center mt-4">
          <CarouselPrevious className="relative static mr-2" />
          <CarouselNext className="relative static ml-2" />
        </div>
      </Carousel>
      
      <div className="text-center mt-8">
        <Link to="/reviews">
          <Button variant="outline">
            View All Reviews
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default FeaturedApps;
