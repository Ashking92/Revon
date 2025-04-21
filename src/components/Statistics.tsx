
import { useState, useEffect } from 'react';

const Statistics = () => {
  const [stats, setStats] = useState({
    totalClients: 0,
    totalReviews: 0,
    todayOrders: 0,
    monthlyOrders: 0
  });

  useEffect(() => {
    // Generate random statistics for demonstration purposes
    const baseClients = 120;
    const baseReviews = 1200;
    const baseTodayOrders = 15;
    const baseMonthlyOrders = 280;

    // Update stats every 10 seconds with slight variations
    const updateStats = () => {
      setStats({
        totalClients: baseClients + Math.floor(Math.random() * 5),
        totalReviews: baseReviews + Math.floor(Math.random() * 20),
        todayOrders: baseTodayOrders + Math.floor(Math.random() * 3),
        monthlyOrders: baseMonthlyOrders + Math.floor(Math.random() * 10)
      });
    };
    
    updateStats();
    const interval = setInterval(updateStats, 10000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="max-w-6xl mx-auto mb-10 px-4 py-8 bg-white rounded-xl shadow-md">
      <h2 className="text-2xl font-bold text-gray-900 text-center mb-6">Our Impact</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
        <div className="bg-green-50 p-4 rounded-lg">
          <p className="text-3xl font-bold text-green-700">{stats.totalClients}+</p>
          <p className="text-gray-600 font-medium">Happy Clients</p>
        </div>
        <div className="bg-green-50 p-4 rounded-lg">
          <p className="text-3xl font-bold text-green-700">{stats.totalReviews}+</p>
          <p className="text-gray-600 font-medium">Reviews Delivered</p>
        </div>
        <div className="bg-green-50 p-4 rounded-lg">
          <p className="text-3xl font-bold text-green-700">{stats.todayOrders}</p>
          <p className="text-gray-600 font-medium">Today's Orders</p>
        </div>
        <div className="bg-green-50 p-4 rounded-lg">
          <p className="text-3xl font-bold text-green-700">{stats.monthlyOrders}</p>
          <p className="text-gray-600 font-medium">This Month</p>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
