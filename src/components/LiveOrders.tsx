// AutoOrders.jsx
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
  return `orderCount-${date}`;
};

const AutoOrders = () => {
  const [name, setName] = useState("");
  const [orders, setOrders] = useState(0);

  // Set user name once
  useEffect(() => {
    let storedName = localStorage.getItem("username");
    if (!storedName) {
      storedName = getRandomName();
      localStorage.setItem("username", storedName);
    }
    setName(storedName);
  }, []);

  // Load today's orders
  useEffect(() => {
    const key = getTodayKey();
    const saved = localStorage.getItem(key);
    setOrders(saved ? parseInt(saved) : 0);
  }, []);

  // Auto increase orders every 20 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      const key = getTodayKey();
      const newCount = orders + 1;
      localStorage.setItem(key, newCount.toString());
      setOrders(newCount);
    }, 20000); // 20 seconds

    return () => clearInterval(interval);
  }, [orders]);

  return (
    <div style={{ padding: 20, textAlign: "center", fontFamily: "sans-serif" }}>
      <h1>👤 Welcome, {name}</h1>
      <h2>📦 Today's Orders: {orders}</h2>
      <p style={{ fontSize: 14, color: "gray" }}>Updating every 20 seconds...</p>
    </div>
  );
};

export default AutoOrders;
