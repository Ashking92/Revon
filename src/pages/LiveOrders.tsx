
import LiveOrders from "../components/LiveOrders";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

const LiveOrdersPage = () => {
  const [stats, setStats] = useState({
    todayOrders: 0,
    completionRate: 0,
    todayRevenue: 0,
    pendingOrders: 0
  });

  useEffect(() => {
    const fetchOrderStats = async () => {
      // Get today's orders
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      const { data: orders } = await supabase
        .from('orders')
        .select('*')
        .gte('created_at', today.toISOString());

      const { data: pendingOrders } = await supabase
        .from('orders')
        .select('*')
        .eq('status', 'pending');

      const { data: completedOrders } = await supabase
        .from('orders')
        .select('*')
        .eq('status', 'completed');

      const todayOrders = orders?.length || 0;
      const totalOrders = (completedOrders?.length || 0) + (pendingOrders?.length || 0);
      const completionRate = totalOrders > 0 
        ? Math.round((completedOrders?.length || 0) / totalOrders * 100)
        : 0;

      const todayRevenue = orders?.reduce((sum, order) => sum + Number(order.amount), 0) || 0;

      setStats({
        todayOrders,
        completionRate,
        todayRevenue,
        pendingOrders: pendingOrders?.length || 0
      });
    };

    fetchOrderStats();
    const interval = setInterval(fetchOrderStats, 30000); // Refresh every 30 seconds

    return () => clearInterval(interval);
  }, []);

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
              <p className="text-2xl font-bold text-blue-700">{stats.todayOrders}</p>
              <p className="text-gray-600 font-medium">Today's Orders</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg text-center">
              <p className="text-2xl font-bold text-green-700">{stats.completionRate}%</p>
              <p className="text-gray-600 font-medium">Completion Rate</p>
            </div>
            <div className="bg-amber-50 p-4 rounded-lg text-center">
              <p className="text-2xl font-bold text-amber-700">₹{stats.todayRevenue}</p>
              <p className="text-gray-600 font-medium">Today's Revenue</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg text-center">
              <p className="text-2xl font-bold text-purple-700">{stats.pendingOrders}</p>
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
