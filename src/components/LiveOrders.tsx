
import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "@/lib/toast";
import { supabase } from "@/lib/supabase";

type Order = {
  id: string;
  customer_name: string;
  platform: string;
  quantity: number;
  amount: string;
  created_at: string;
  status: "pending" | "processing" | "completed";
};

const isWithinBusinessHours = () => {
  const now = new Date();
  const hours = now.getHours();
  return hours >= 7 && hours < 19; // 7 AM to 7 PM
};

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
  const [orders, setOrders] = useState<Order[]>([]);
  const [newOrder, setNewOrder] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(isWithinBusinessHours());
  const [stats, setStats] = useState({
    todayOrders: 0,
    completionRate: 0,
    todayRevenue: 0,
    pendingOrders: 0
  });
  
  useEffect(() => {
    const fetchInitialOrders = async () => {
      if (!isWithinBusinessHours()) return;

      const { data, error } = await supabase
        .from('orders')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(5);

      if (error) {
        console.error('Error fetching orders:', error);
        return;
      }
      
      // Create dummy data if no orders are returned
      let ordersData = data;
      if (!data || data.length === 0) {
        ordersData = [
          {
            id: '1',
            customer_name: 'Prem Sankhe',
            platform: 'iOS App Review',
            quantity: 5,
            amount: '500',
            created_at: new Date().toISOString(),
            status: 'pending'
          },
          {
            id: '2',
            customer_name: 'Ashish more',
            platform: 'Android App Review',
            quantity: 3,
            amount: '300',
            created_at: new Date(Date.now() - 30 * 60000).toISOString(),
            status: 'processing'
          },
          {
            id: '3',
            customer_name: 'mansi sonal',
            platform: 'Google Maps Review',
            quantity: 2,
            amount: '250',
            created_at: new Date(Date.now() - 120 * 60000).toISOString(),
            status: 'completed'
          }
        ];
      }

      const ordersWithValidStatus = ordersData.map(order => ({
        ...order,
        amount: order.amount.toString(),
        status: (order.status === 'pending' || order.status === 'processing' || order.status === 'completed') 
          ? order.status as "pending" | "processing" | "completed" 
          : 'pending'
      }));

      setOrders(ordersWithValidStatus);
      updateStats(ordersWithValidStatus);
    };

    const updateStats = (orderData: Order[]) => {
      const today = new Date().toISOString().split('T')[0];
      const todayOrders = orderData.filter(order => 
        order.created_at.startsWith(today)
      );

      const completed = orderData.filter(order => order.status === 'completed').length;
      const total = orderData.length || 1;

      setStats({
        todayOrders: todayOrders.length,
        completionRate: Math.round((completed / total) * 100),
        todayRevenue: todayOrders.reduce((sum, order) => sum + parseFloat(order.amount), 0),
        pendingOrders: orderData.filter(order => order.status === 'pending').length
      });
    };

    fetchInitialOrders();

    const channel = supabase
      .channel('public:orders')
      .on('postgres_changes', 
        { event: '*', schema: 'public', table: 'orders' },
        payload => {
          if (payload.eventType === 'INSERT') {
            const status = payload.new.status;
            const validStatus = (status === 'pending' || status === 'processing' || status === 'completed') 
              ? status as "pending" | "processing" | "completed"
              : 'pending';
              
            const newOrder = {
              ...(payload.new as any),
              amount: (payload.new as any).amount.toString(),
              status: validStatus
            };
            
            setOrders(prev => [newOrder, ...prev.slice(0, 4)]);
            setNewOrder(true);
            setTimeout(() => setNewOrder(false), 3000);
            
            setStats(prev => ({
              ...prev,
              todayOrders: prev.todayOrders + 1,
              todayRevenue: prev.todayRevenue + parseFloat(newOrder.amount),
              pendingOrders: prev.pendingOrders + 1
            }));

            toast({
              title: "New order received!",
              description: `${newOrder.customer_name} ordered ${newOrder.quantity} ${newOrder.platform}`,
            });
          }
        }
      )
      .subscribe();

    const hourCheckInterval = setInterval(() => {
      const open = isWithinBusinessHours();
      setIsOpen(open);
      
      if (!open) {
        setOrders([]);
        toast({
          title: "Service Hours Ended",
          description: "Live orders will resume tomorrow at 7:00 AM",
        });
      }
    }, 60000);

    return () => {
      supabase.removeChannel(channel);
      clearInterval(hourCheckInterval);
    };
  }, []);

  if (!isOpen) {
    return (
      <Card>
        <CardHeader className="bg-gradient-to-r from-green-50 to-blue-50 border-b">
          <CardTitle className="text-xl">Live Orders</CardTitle>
        </CardHeader>
        <CardContent className="p-6 text-center">
          <p className="text-gray-600">
            Our live order system is currently closed.
            <br />
            Operating hours: 7:00 AM - 7:00 PM IST
          </p>
        </CardContent>
      </Card>
    );
  }

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
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
          <div className="bg-blue-50 p-4 rounded-lg text-center">
            <p className="text-2xl font-bold text-blue-700">{stats.todayOrders}</p>
            <p className="text-gray-600 font-medium">Today's Orders</p>
          </div>
          <div className="bg-green-50 p-4 rounded-lg text-center">
            <p className="text-2xl font-bold text-green-700">{stats.completionRate}%</p>
            <p className="text-gray-600 font-medium">Completion Rate</p>
          </div>
          <div className="bg-amber-50 p-4 rounded-lg text-center">
            <p className="text-2xl font-bold text-amber-700">₹{stats.todayRevenue.toLocaleString()}</p>
            <p className="text-gray-600 font-medium">Today's Revenue</p>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg text-center">
            <p className="text-2xl font-bold text-purple-700">{stats.pendingOrders}</p>
            <p className="text-gray-600 font-medium">Pending Orders</p>
          </div>
        </div>
        <div className="divide-y divide-gray-100 max-h-[400px] overflow-y-auto">
          {orders.map((order) => (
            <div key={order.id} className="p-4 hover:bg-gray-50 transition-colors">
              <div className="flex justify-between">
                <div>
                  <p className="font-medium text-sm">{order.customer_name}</p>
                  <div className="flex items-center space-x-2 mt-1">
                    <span className="text-xs text-gray-500">{order.id}</span>
                    <span className="h-1 w-1 rounded-full bg-gray-300"></span>
                    <span className="text-xs">{formatTime(order.created_at)}</span>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold text-green-700">₹{order.amount}</p>
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
