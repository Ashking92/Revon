
import ReviewOrderForm from "../components/ReviewOrderForm";

const AndroidReviews = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-green-50 to-white p-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">
          Buy <span className="text-green-600">Android Play Store</span> Reviews
        </h1>
        
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Why Choose Our Android Reviews?</h2>
          <ul className="space-y-3 list-disc pl-5">
            <li>Genuine Play Store Accounts</li>
            <li>Global Coverage</li>
            <li>Quick Delivery</li>
            <li>Safe & Secure</li>
            <li>24/7 Support</li>
          </ul>
        </div>

        <ReviewOrderForm defaultPlatform="android" />
      </div>
    </div>
  );
};

export default AndroidReviews;
