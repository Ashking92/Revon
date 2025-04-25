
import React, { useState, useEffect } from 'react';
import { Loader2 } from 'lucide-react';
import { 
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Badge,
} from "@/components/ui/badge";
import { supabase } from '@/lib/supabase';
import { formatDistanceToNow } from 'date-fns';

// Define the Order type with a specific status
type OrderStatus = "pending" | "processing" | "completed";

type Order = {
  id: string;
  customer_name: string;
  platform: string;
  quantity: number;
  amount: number;
  created_at: string;
  status: OrderStatus;
};

// Function to safely map any status string to our OrderStatus type
const mapToOrderStatus = (status: string): OrderStatus => {
  if (status === "pending" || status === "processing" || status === "completed") {
    return status as OrderStatus;
  }
  return "pending"; // Default fallback
};

// Helper function to get badge variant based on status
const getStatusBadge = (status: OrderStatus) => {
  switch (status) {
    case "pending": return "bg-yellow-100 text-yellow-800";
    case "processing": return "bg-blue-100 text-blue-800";
    case "completed": return "bg-green-100 text-green-800";
    default: return "bg-gray-100 text-gray-800";
  }
};

// Sample data for when no orders are available
const sampleOrders: Order[] = [
  {
    id: "sample-1",
    customer_name: "Rajesh Kumar",
    platform: "google-maps",
    quantity: 5,
    amount: 100,
    created_at: new Date().toISOString(),
    status: "pending"
  },
  {
    id: "sample-2",
    customer_name: "Priya Sharma",
    platform: "ios",
    quantity: 10,
    amount: 250,
    created_at: new Date(Date.now() - 3600000).toISOString(),
    status: "processing"
  },
  {
    id: "sample-3",
    customer_name: "Amit Patel",
    platform: "android",
    quantity: 3,
    amount: 45,
    created_at: new Date(Date.now() - 7200000).toISOString(),
    status: "completed"
  }
];

const LiveOrders = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const { data, error } = await supabase
          .from('orders')
          .select('*')
          .order('created_at', { ascending: false })
          .limit(10);
          
        if (error) throw error;
        
        if (data && data.length > 0) {
          // Convert data and ensure status is of the correct type
          const typedOrders = data.map(order => ({
            ...order,
            amount: Number(order.amount), // Ensure amount is a number
            status: mapToOrderStatus(order.status)
          }));
          setOrders(typedOrders);
        } else {
          // Use sample data if no orders found
          setOrders(sampleOrders);
        }
      } catch (error) {
        console.error('Error fetching orders:', error);
        // Use sample data on error
        setOrders(sampleOrders);
      } finally {
        setLoading(false);
      }
    };
    
    fetchOrders();
  }, []);
  
  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Loader2 className="h-8 w-8 animate-spin text-blue-500" />
      </div>
    );
  }
  
  return (
    <div className="bg-white rounded-lg shadow-md">
      <Table>
        <TableCaption>Recent customer orders and their status.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Customer</TableHead>
            <TableHead>Platform</TableHead>
            <TableHead className="text-right">Amount</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Time</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {orders.map((order) => (
            <TableRow key={order.id}>
              <TableCell className="font-medium">{order.customer_name}</TableCell>
              <TableCell>{order.platform} ({order.quantity})</TableCell>
              <TableCell className="text-right">₹{order.amount}</TableCell>
              <TableCell>
                <Badge className={getStatusBadge(order.status)}>
                  {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                </Badge>
              </TableCell>
              <TableCell className="text-gray-500 text-sm">
                {formatDistanceToNow(new Date(order.created_at), { addSuffix: true })}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default LiveOrders;
