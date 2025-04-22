
import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";

type Order = {
  id: string;
  customer: string;
  platform: string;
  quantity: number;
  amount: string;
  timestamp: string;
  status: "pending" | "processing" | "completed";
};

const DEMO_ORDERS: Order[] = [
  {
    id: "ORD-" + Math.floor(10000 + Math.random() * 90000),
    customer: "John D.",
    platform: "iOS Reviews",
    quantity: 10,
    amount: "₹500",
    timestamp: new Date(Date.now() - 1000 * 60 * 5).toISOString(), // 5 minutes ago
    status: "processing"
  },
  {
    id: "ORD-" + Math.floor(10000 + Math.random() * 90000),
    customer: "Priya S.",
    platform: "Android Reviews",
    quantity: 20,
    amount: "₹500",
    timestamp: new Date(Date.now() - 1000 * 60 * 28).toISOString(), // 28 minutes ago
    status: "pending"
  },
  {
    id: "ORD-" + Math.floor(10000 + Math.random() * 90000),
    customer: "Mike R.",
    platform: "Google Maps",
    quantity: 5,
    amount: "₹300",
    timestamp: new Date(Date.now() - 1000 * 60 * 67).toISOString(), // 67 minutes ago
    status: "completed"
  },
  {
    id: "ORD-" + Math.floor(10000 + Math.random() * 90000),
    customer: "Amit P.",
    platform: "Web Development",
    quantity: 1,
    amount: "₹6,000",
    timestamp: new Date(Date.now() - 1000 * 60 * 120).toISOString(), // 120 minutes ago
    status: "processing"
  },
  {
    id: "ORD-" + Math.floor(10000 + Math.random() * 90000),
    customer: "Sarah L.",
    platform: "Android Reviews",
    quantity: 15,
    amount: "₹375",
    timestamp: new Date(Date.now() - 1000 * 60 * 180).toISOString(), // 3 hours ago
    status: "completed"
  },
];

const formatTime = (timestamp: string): string => {
  const orderTime = new Date(timestamp);
  const now = new Date();
  
  const diffInMinutes = Math.floor((now.getTime() - orderTime.getTime()) / (1000 * 60));
  
  if (diffInMinutes < 60) {
    return `${diffInMinutes} minute${diffInMinutes === 1 ? '' : 's'} ago`;
  } else if (diffInMinutes < 24 * 60) {
    const hours = Math.floor(diffInMinutes / 60);
    return `${hours} hour${hours === 1 ? '' : 's'} ago`;
  } else {
    const days = Math.floor(diffInMinutes / (24 * 60));
    return `${days} day${days === 1 ? '' : 's'} ago`;
  }
};

const statusColors = {
  pending: "bg-yellow-100 text-yellow-800",
  processing: "bg-blue-100 text-blue-800",
  completed: "bg-green-100 text-green-800"
};

const LiveOrders = () => {
  const [orders, setOrders] = useState<Order[]>(DEMO_ORDERS);
  const [newOrder, setNewOrder] = useState<boolean>(false);
  
  useEffect(() => {
    // Simulate receiving new orders
    const interval = setInterval(() => {
      const random = Math.random();
      if (random > 0.7) {
        const platforms = ["iOS Reviews", "Android Reviews", "Google Maps", "Web Development", "WordPress Development"];
        const statuses: ("pending" | "processing" | "completed")[] = ["pending", "processing", "completed"];
        const names = ["Alex", "Ravi", "Nina", "Tom", "Isha", "Wei", "Sofía", "Mohammed"];
        
        const newOrder: Order = {
          id: "ORD-" + Math.floor(10000 + Math.random() * 90000),
          customer: names[Math.floor(Math.random() * names.length)] + " " + "ABCDEFGHIJKLMNOPQRSTUVWXYZ"[Math.floor(Math.random() * 26)] + ".",
          platform: platforms[Math.floor(Math.random() * platforms.length)],
          quantity: Math.floor(Math.random() * 20) + 1,
          amount: "₹" + (Math.floor(Math.random() * 1000) + 100),
          timestamp: new Date().toISOString(),
          status: statuses[Math.floor(Math.random() * statuses.length)]
        };
        
        setOrders(prevOrders => [newOrder, ...prevOrders.slice(0, 4)]);
        setNewOrder(true);
        
        toast({
          title: "New order received!",
          description: `${newOrder.customer} ordered ${newOrder.quantity} ${newOrder.platform}`,
        });
        
        // Reset notification after 3 seconds
        setTimeout(() => {
          setNewOrder(false);
        }, 3000);
      }
    }, 15000); // Every 15 seconds
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <Card>
      <CardHeader className="bg-gradient-to-r from-green-50 to-blue-50 border-b">
        <CardTitle className="text-xl flex items-center">
          <span>Live Orders</span>
          {newOrder && (
            <span className="ml-3 inline-block animate-pulse px-2 py-0.5 text-xs rounded-full bg-red-100 text-red-800">
              New
            </span>
          )}
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="divide-y divide-gray-100 max-h-[400px] overflow-y-auto">
          {orders.map((order) => (
            <div key={order.id} className="p-4 hover:bg-gray-50 transition-colors">
              <div className="flex justify-between">
                <div>
                  <p className="font-medium text-sm">{order.customer}</p>
                  <div className="flex items-center space-x-2 mt-1">
                    <span className="text-xs text-gray-500">{order.id}</span>
                    <span className="h-1 w-1 rounded-full bg-gray-300"></span>
                    <span className="text-xs">{formatTime(order.timestamp)}</span>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold text-green-700">{order.amount}</p>
                  <span className={`text-xs px-2 py-0.5 rounded-full ${statusColors[order.status]}`}>
                    {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                  </span>
                </div>
              </div>
              <div className="mt-2 text-sm">
                <span>{order.quantity}x {order.platform}</span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default LiveOrders;
