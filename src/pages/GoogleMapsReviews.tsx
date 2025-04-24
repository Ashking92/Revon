
import ReviewOrderForm from "../components/ReviewOrderForm";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const GoogleMapsReviews = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-red-50 to-white">
      <Navbar />
      <div className="max-w-4xl mx-auto p-4">
        <h1 className="text-3xl font-bold text-center mb-8">
          Buy <span className="text-red-600">Google Maps</span> Reviews
        </h1>
        
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Why Choose Our Google Maps Reviews?</h2>
          <ul className="space-y-3 list-disc pl-5">
            <li>Verified Google Accounts</li>
            <li>Location-Based Reviews</li>
            <li>Custom Review Text</li>
            <li>Improve Local SEO</li>
            <li>Satisfaction Guaranteed</li>
          </ul>
        </div>

        <ReviewOrderForm defaultPlatform="google-maps" />
      </div>
      <Footer />
    </div>
  );
};

export default GoogleMapsReviews;
