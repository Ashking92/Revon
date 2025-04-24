// OrderPage.jsx
import React, { useEffect, useState } from "react";

const names = [
  "Prem Sankhe", "Ashish More", "Mansi Sonal", "Divya Patil", "Yash Pawar", "Neha Jain",
  "Amit Thakur", "Sneha Desai", "Ravi Shetty", "Karan Malhotra", "Rahul Sharma", "Pooja Mehta",
  "Siddharth Roy", "Simran Kaur", "Ankita Rane", "Jayesh Kadam", "Disha Shinde", "Tushar Jadhav",
  "Rekha Bhosale", "Aditya Naik", "Nikita Vaidya", "Rajiv Menon", "Sheetal Patil", "Pratiksha Koli",
  "Akash Verma", "Khushi Agarwal", "Rohan Deshmukh", "Vidya Iyer", "Swapnil Patkar", "Sanya Shah",
  "Chinmay Joshi", "Payal Rana", "Farhan Shaikh", "Tanvi Kulkarni", "Soham Gaikwad", "Zoya Khan",
  "Hardik Pandya", "Megha Dubey", "Viraj Bendre", "Jyoti Yadav", "Anil Khedekar", "Ritika Rao",
  "Sagar Nair", "Pritam Ghosh", "Aayushi Sen", "Dilip Pawaskar", "Manasi Kuldeep", "Bhavesh Jain",
  "Sharvani D", "Anushka Barve", "Omkar Pawar", "Seema Lande", "Kavita Sinha", "Vinod Rathod"
];

const getRandomName = () => names[Math.floor(Math.random() * names.length)];

const getTodayKey = () => {
  const date = new Date().toISOString().split("T")[0];
  return `orders-${date}`;
};

const OrderPage = () => {
  const [name, setName] = useState("");
  const [orderCount, setOrderCount] = useState(0);

  // Set or get name from localStorage
  useEffect(() => {
    let storedName = localStorage.getItem("customerName");
    if (!storedName) {
      storedName = getRandomName();
      localStorage.setItem("customerName", storedName);
    }
    setName(storedName);
  }, []);

  // Get today's order count from localStorage
  useEffect(() => {
    const key = getTodayKey();
    const count = localStorage.getItem(key);
    setOrderCount(count ? parseInt(count) : 0);
  }, []);

  const handleOrder = () => {
    const key = getTodayKey();
    const newCount = orderCount + 1;
    localStorage.setItem(key, newCount.toString());
    setOrderCount(newCount);
  };

  return (
    <div style={{ padding: 20, fontFamily: "sans-serif", textAlign: "center" }}>
      <h1>👋 Hi, {name}</h1>
      <h2>📦 Today's Order Count: {orderCount}</h2>
      <button onClick={handleOrder} style={{ padding: 10, fontSize: 18 }}>
        ➕ Place Dummy Order
      </button>
    </div>
  );
};

export default OrderPage;
