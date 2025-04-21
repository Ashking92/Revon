
import { useState, useEffect } from 'react';

const reviews = [
  "Outstanding service! Highly recommend.",
  "Got more downloads after using RevON.",
  "Fast and reliable reviews. Loved it!",
  "Boosted my app ranking within days!",
  "Excellent support, genuine reviews!",
  "Positive experience, will order again.",
  "Genuine customer reviews. 5 stars!",
  "Very happy with the results. Thank you!",
  "Quick response, excellent service!",
  "Impressed with the quality and speed.",
];

const getRandomReview = () => {
  return reviews[Math.floor(Math.random() * reviews.length)];
};

// Timer for 5 minutes in milliseconds
const FIVE_MIN = 5 * 60 * 1000;

const Statistics = () => {
  const [stats, setStats] = useState({
    totalCustomers: 30,
    totalReviews: 1250,
    todayOrders: 13,
    monthlyOrders: 320
  });
  const [review, setReview] = useState(getRandomReview());

  useEffect(() => {
    // Update stats & review every 5 minutes
    const updateStats = () => {
      setStats({
        totalCustomers: 30 + Math.floor(Math.random() * 6), // 30 - 35+
        totalReviews: 1200 + Math.floor(Math.random() * 60), // 1200 - 1259+
        todayOrders: 12 + Math.floor(Math.random() * 5),     // 12 - 16
        monthlyOrders: 300 + Math.floor(Math.random() * 40), // 300 - 339
      });
      setReview(getRandomReview());
    };

    updateStats();
    const interval = setInterval(updateStats, FIVE_MIN);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="max-w-6xl mx-auto mb-10 px-4 py-8 bg-white rounded-xl shadow-md">
      <h2 className="text-2xl font-bold text-gray-900 text-center mb-6">Our Impact</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
        <div className="bg-green-50 p-4 rounded-lg">
          <p className="text-3xl font-bold text-green-700">{stats.totalCustomers}+</p>
          <p className="text-gray-600 font-medium">Happy Customers</p>
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
      <div className="mt-6 flex justify-center">
        <div className="max-w-lg bg-green-100 px-4 py-3 rounded shadow text-green-900 italic text-center text-base">
          <span className="font-semibold">Recent Positive Review:</span>
          <br />
          “{review}”
        </div>
      </div>
    </section>
  );
};

export default Statistics;

