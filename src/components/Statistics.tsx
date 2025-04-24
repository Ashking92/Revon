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

// Generate same number daily using date seed
const getDailyRandom = (min, max) => {
  const today = new Date().toDateString();
  const seed = today.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  const rng = (seed * 9301 + 49297) % 233280;
  const rnd = rng / 233280;
  return Math.floor(min + rnd * (max - min + 1));
};

const Statistics = () => {
  const [stats, setStats] = useState({
    totalCustomers: 30,
    totalReviews: 1250,
    LastDayOrders: getDailyRandom(8, 35),
    monthlyOrders: 320
  });
  const [review, setReview] = useState(getRandomReview());

  useEffect(() => {
    // Update stats & review every 5 minutes
    const updateStats = () => {
      setStats({
        totalCustomers: 30 + Math.floor(Math.random() * 6),
        totalReviews: 1200 + Math.floor(Math.random() * 60),
        LastDayOrders: getDailyRandom(8, 35), // stays same for a day
        monthlyOrders: 300 + Math.floor(Math.random() * 40),
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
          <p className="text-3xl font-bold text-green-700">{stats.LastDayOrders}</p>
          <p className="text-gray-600 font-medium">Last Day Orders</p>
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
