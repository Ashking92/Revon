
import LiveOrders from "../components/LiveOrders";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const LiveOrdersPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-green-50 to-white">
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">
          Live <span className="text-green-700">Customer Orders</span>
        </h1>
        
        <div className="mb-8">
          <LiveOrders />
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Order Statistics</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg text-center">
              <p className="text-2xl font-bold text-blue-700">32</p>
              <p className="text-gray-600 font-medium">Today's Orders</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg text-center">
              <p className="text-2xl font-bold text-green-700">87%</p>
              <p className="text-gray-600 font-medium">Completion Rate</p>
            </div>
            <div className="bg-amber-50 p-4 rounded-lg text-center">
              <p className="text-2xl font-bold text-amber-700">₹18,450</p>
              <p className="text-gray-600 font-medium">Today's Revenue</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg text-center">
              <p className="text-2xl font-bold text-purple-700">12</p>
              <p className="text-gray-600 font-medium">Pending Orders</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LiveOrdersPage;
