import { useEffect, useState } from 'react';
import { supabase } from './supabaseClient';  // Make sure you have configured Supabase client

interface Order {
  id: string;
  customer_name: string;
  platform: string;
  quantity: number;
  amount: string;
  created_at: string;
  status: "pending" | "processing" | "completed";
}

const isWithinBusinessHours = () => {
  const currentHour = new Date().getHours();
  return currentHour >= 9 && currentHour <= 18;  // Example: 9 AM to 6 PM
};

const App = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  
  const updateStats = (orders: Order[]) => {
    // Logic to update stats based on the fetched orders.
  };

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
          customer_name: 'Ashish More',
          platform: 'Android App Review',
          quantity: 3,
          amount: '300',
          created_at: new Date(Date.now() - 30 * 60000).toISOString(),
          status: 'processing'
        },
        {
          id: '3',
          customer_name: 'Mansi Sonal',
          platform: 'Google Maps Review',
          quantity: 2,
          amount: '250',
          created_at: new Date(Date.now() - 120 * 60000).toISOString(),
          status: 'completed'
        },
        {
          id: '4',
          customer_name: 'Rajesh Patil',
          platform: 'Web Portal',
          quantity: 8,
          amount: '800',
          created_at: new Date(Date.now() - 240 * 60000).toISOString(),
          status: 'pending'
        },
        {
          id: '5',
          customer_name: 'Sonia Deshmukh',
          platform: 'Windows App Review',
          quantity: 4,
          amount: '400',
          created_at: new Date(Date.now() - 60 * 60000).toISOString(),
          status: 'completed'
        },
        {
          id: '6',
          customer_name: 'Amit Kumar',
          platform: 'iOS App Review',
          quantity: 10,
          amount: '1000',
          created_at: new Date(Date.now() - 300 * 60000).toISOString(),
          status: 'processing'
        },
        {
          id: '7',
          customer_name: 'Neha Shah',
          platform: 'Android App Review',
          quantity: 7,
          amount: '700',
          created_at: new Date(Date.now() - 180 * 60000).toISOString(),
          status: 'completed'
        },
        {
          id: '8',
          customer_name: 'Vikas Yadav',
          platform: 'iOS App Review',
          quantity: 2,
          amount: '200',
          created_at: new Date(Date.now() - 360 * 60000).toISOString(),
          status: 'pending'
        },
        {
          id: '9',
          customer_name: 'Rani Patel',
          platform: 'Web Portal',
          quantity: 5,
          amount: '500',
          created_at: new Date(Date.now() - 480 * 60000).toISOString(),
          status: 'processing'
        },
        {
          id: '10',
          customer_name: 'Manoj Gupta',
          platform: 'Windows App Review',
          quantity: 9,
          amount: '900',
          created_at: new Date(Date.now() - 600 * 60000).toISOString(),
          status: 'completed'
        },
        {
          id: '11',
          customer_name: 'Aarti Reddy',
          platform: 'Google Maps Review',
          quantity: 4,
          amount: '400',
          created_at: new Date(Date.now() - 720 * 60000).toISOString(),
          status: 'pending'
        },
        {
          id: '12',
          customer_name: 'Nitin Agarwal',
          platform: 'iOS App Review',
          quantity: 6,
          amount: '600',
          created_at: new Date(Date.now() - 840 * 60000).toISOString(),
          status: 'processing'
        },
        {
          id: '13',
          customer_name: 'Kavita Sharma',
          platform: 'Android App Review',
          quantity: 1,
          amount: '100',
          created_at: new Date(Date.now() - 960 * 60000).toISOString(),
          status: 'completed'
        },
        {
          id: '14',
          customer_name: 'Suresh Kumar',
          platform: 'Web Portal',
          quantity: 8,
          amount: '800',
          created_at: new Date(Date.now() - 1080 * 60000).toISOString(),
          status: 'pending'
        },
        {
          id: '15',
          customer_name: 'Jasmin Kaur',
          platform: 'Windows App Review',
          quantity: 3,
          amount: '300',
          created_at: new Date(Date.now() - 1200 * 60000).toISOString(),
          status: 'completed'
        },
        {
          id: '16',
          customer_name: 'Sandeep Bhatt',
          platform: 'Google Maps Review',
          quantity: 5,
          amount: '500',
          created_at: new Date(Date.now() - 1320 * 60000).toISOString(),
          status: 'processing'
        },
        {
          id: '17',
          customer_name: 'Ritu Singh',
          platform: 'iOS App Review',
          quantity: 2,
          amount: '200',
          created_at: new Date(Date.now() - 1440 * 60000).toISOString(),
          status: 'pending'
        },
        {
          id: '18',
          customer_name: 'Ashok Joshi',
          platform: 'Android App Review',
          quantity: 7,
          amount: '700',
          created_at: new Date(Date.now() - 1560 * 60000).toISOString(),
          status: 'completed'
        },
        {
          id: '19',
          customer_name: 'Pooja Verma',
          platform: 'Web Portal',
          quantity: 4,
          amount: '400',
          created_at: new Date(Date.now() - 1680 * 60000).toISOString(),
          status: 'processing'
        },
        {
          id: '20',
          customer_name: 'Ravi Mishra',
          platform: 'Windows App Review',
          quantity: 10,
          amount: '1000',
          created_at: new Date(Date.now() - 1800 * 60000).toISOString(),
          status: 'completed'
        },
        {
          id: '21',
          customer_name: 'Rekha Sharma',
          platform: 'Google Maps Review',
          quantity: 3,
          amount: '300',
          created_at: new Date(Date.now() - 1920 * 60000).toISOString(),
          status: 'pending'
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

  useEffect(() => {
    fetchInitialOrders();
  }, []);

  return (
    <div>
      <h1>Recent Orders</h1>
      <table>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Customer Name</th>
            <th>Platform</th>
            <th>Quantity</th>
            <th>Amount</th>
            <th>Created At</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.customer_name}</td>
              <td>{order.platform}</td>
              <td>{order.quantity}</td>
              <td>{order.amount}</td>
              <td>{new Date(order.created_at).toLocaleString()}</td>
              <td>{order.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
