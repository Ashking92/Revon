
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Filter } from 'lucide-react';
import { Badge } from "@/components/ui/badge";

const reviewsData = [
  {
    id: 'app1',
    name: 'MindCalm Meditation',
    description: 'Guided meditation app with sleep stories and relaxation tracks.',
    image: 'https://placehold.co/300x300/e4f3ff/0369a1?text=MindCalm',
    rating: 4.8,
    platform: 'android',
    category: 'Health & Fitness',
    date: '2023-06-15',
  },
  {
    id: 'app2',
    name: 'CryptoTrack Pro',
    description: 'Real-time cryptocurrency tracking and portfolio management.',
    image: 'https://placehold.co/300x300/eef5e6/166534?text=CryptoTrack',
    rating: 4.5,
    platform: 'ios',
    category: 'Finance',
    date: '2023-07-22',
  },
  {
    id: 'app3',
    name: 'TaskFlow',
    description: 'Productivity app with smart task management and team collaboration.',
    image: 'https://placehold.co/300x300/fef2f2/991b1b?text=TaskFlow',
    rating: 4.7,
    platform: 'android',
    category: 'Productivity',
    date: '2023-08-05',
  },
  {
    id: 'app4',
    name: 'RecipeBook',
    description: 'Digital cookbook with thousands of recipes and meal planning.',
    image: 'https://placehold.co/300x300/f8fafc/0f172a?text=RecipeBook',
    rating: 4.6,
    platform: 'ios',
    category: 'Food & Drink',
    date: '2023-09-11',
  },
  {
    id: 'app5',
    name: 'FitTrack Pro',
    description: 'Workout tracking with AI-powered form correction and progress analytics.',
    image: 'https://placehold.co/300x300/fef9c3/854d0e?text=FitTrack',
    rating: 4.9,
    platform: 'android',
    category: 'Health & Fitness',
    date: '2023-10-03',
  },
  {
    id: 'app6',
    name: 'PixelEdit',
    description: 'Professional photo editing with filters and advanced tools.',
    image: 'https://placehold.co/300x300/f3e8ff/6b21a8?text=PixelEdit',
    rating: 4.7,
    platform: 'ios',
    category: 'Photo & Video',
    date: '2023-11-19',
  },
];

const Reviews = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [platformFilter, setPlatformFilter] = useState<string | null>(null);
  
  const filteredReviews = reviewsData.filter(review => {
    const matchesSearch = review.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                        review.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        review.description.toLowerCase().includes(searchQuery.toLowerCase());
                        
    const matchesPlatform = platformFilter ? review.platform === platformFilter : true;
    
    return matchesSearch && matchesPlatform;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50 to-white">
      <Navbar />
      <div className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">
          App <span className="text-blue-700">Reviews</span>
        </h1>
        
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                placeholder="Search reviews by app name, category..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <div className="flex gap-2">
              <Button
                variant={platformFilter === null ? "default" : "outline"}
                onClick={() => setPlatformFilter(null)}
              >
                All
              </Button>
              <Button
                variant={platformFilter === 'android' ? "default" : "outline"}
                onClick={() => setPlatformFilter('android')}
              >
                Android
              </Button>
              <Button
                variant={platformFilter === 'ios' ? "default" : "outline"}
                onClick={() => setPlatformFilter('ios')}
              >
                iOS
              </Button>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReviews.map((review) => (
            <Link key={review.id} to={`/reviews/${review.id}`} className="block">
              <div className="bg-white rounded-xl shadow-md overflow-hidden h-full hover:shadow-lg transition-shadow">
                <div className="relative">
                  <img 
                    src={review.image} 
                    alt={review.name} 
                    className="w-full h-40 object-cover"
                  />
                  <Badge 
                    className={`absolute top-2 right-2 ${
                      review.platform === 'android' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                    }`}
                  >
                    {review.platform === 'android' ? 'Android' : 'iOS'}
                  </Badge>
                </div>
                
                <div className="p-4">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-semibold text-lg">{review.name}</h3>
                    <div className="flex items-center">
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="h-4 w-4 text-yellow-400" 
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.799-2.034c-.784-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span className="ml-1 text-sm font-medium">{review.rating}</span>
                    </div>
                  </div>
                  
                  <p className="text-sm text-gray-600 line-clamp-2 mb-4">{review.description}</p>
                  
                  <div className="flex justify-between items-center text-xs text-gray-500">
                    <span>{review.category}</span>
                    <span>Reviewed: {review.date}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link to="/app-review">
            <Button className="bg-blue-600 hover:bg-blue-700">
              Submit Your App for Review
            </Button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Reviews;
