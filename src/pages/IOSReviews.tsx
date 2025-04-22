
import ReviewOrderForm from "../components/ReviewOrderForm";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const IOSReviews = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50 to-white">
      <Navbar />
      <div className="max-w-4xl mx-auto p-4">
        <h1 className="text-3xl font-bold text-center mb-8">
          Buy <span className="text-blue-600">iOS App Store</span> Reviews
        </h1>
        
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Why Choose Our iOS App Store Reviews?</h2>
          <ul className="space-y-3 list-disc pl-5">
            <li>100% Real iOS Users</li>
            <li>Worldwide Coverage</li>
            <li>Fast Delivery</li>
            <li>No Password Required</li>
            <li>Money-Back Guarantee</li>
          </ul>
        </div>

        <ReviewOrderForm defaultPlatform="ios" />
      </div>
      <Footer />
    </div>
  );
};

export default IOSReviews;
