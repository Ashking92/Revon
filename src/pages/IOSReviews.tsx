
import { useIsMobile } from "@/hooks/use-mobile";
import ReviewOrderForm from "../components/ReviewOrderForm";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const IOSReviews = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50 to-white">
      <Navbar />
      <div className="max-w-4xl mx-auto p-4">
        <h1 className="text-3xl font-bold text-center mb-8">
          Buy <span className="text-blue-600">iOS App Store</span> Reviews
        </h1>
        
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Why Choose Our iOS App Store Reviews?</h2>
          <div className={`grid ${isMobile ? 'grid-cols-1' : 'grid-cols-2'} gap-4`}>
            <div>
              <ul className="space-y-3 list-disc pl-5">
                <li className="flex items-center gap-2">
                  <span className="text-blue-600">✓</span> 100% Real iOS Users
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-600">✓</span> Worldwide Coverage
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-600">✓</span> Fast Delivery
                </li>
              </ul>
            </div>
            <div>
              <ul className="space-y-3 list-disc pl-5">
                <li className="flex items-center gap-2">
                  <span className="text-blue-600">✓</span> No Password Required
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-600">✓</span> Money-Back Guarantee
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-600">✓</span> Budget Friendly
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-xl font-semibold mb-6 text-center">Our Pricing vs Market Pricing</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded-lg">
              <thead className="bg-blue-50">
                <tr>
                  <th className="py-2 px-3 text-left">Service</th>
                  <th className="py-2 px-3 text-center">Market Rate</th>
                  <th className="py-2 px-3 text-center">Our Price</th>
                  <th className="py-2 px-3 text-center">Savings</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2 px-3">iOS App Review</td>
                  <td className="py-2 px-3 text-center">₹50</td>
                  <td className="py-2 px-3 text-center font-semibold text-blue-700">₹25</td>
                  <td className="py-2 px-3 text-center text-green-600">50%</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-2 px-3">Bulk (10+ Reviews)</td>
                  <td className="py-2 px-3 text-center">₹45</td>
                  <td className="py-2 px-3 text-center font-semibold text-blue-700">₹20</td>
                  <td className="py-2 px-3 text-center text-green-600">55%</td>
                </tr>
                <tr>
                  <td className="py-2 px-3">Bulk (50+ Reviews)</td>
                  <td className="py-2 px-3 text-center">₹40</td>
                  <td className="py-2 px-3 text-center font-semibold text-blue-700">₹17.5</td>
                  <td className="py-2 px-3 text-center text-green-600">56%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <ReviewOrderForm defaultPlatform="ios" />
      </div>
      <Footer />
    </div>
  );
};

export default IOSReviews;
