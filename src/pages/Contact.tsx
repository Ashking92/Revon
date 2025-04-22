
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "We'll get back to you soon.",
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: ""
    });
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50 to-white">
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">
          Contact <span className="text-blue-700">RevON</span>
        </h1>
        
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full rounded border-gray-300 px-3 py-2 focus:border-blue-300 focus:ring focus:ring-blue-200"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full rounded border-gray-300 px-3 py-2 focus:border-blue-300 focus:ring focus:ring-blue-200"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-1">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full rounded border-gray-300 px-3 py-2 focus:border-blue-300 focus:ring focus:ring-blue-200"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full rounded border-gray-300 px-3 py-2 focus:border-blue-300 focus:ring focus:ring-blue-200"
                  required
                ></textarea>
              </div>
              
              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                Send Message
              </Button>
            </form>
          </div>
          
          <div>
            <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
              <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
              <div className="space-y-3">
                <p className="flex items-start">
                  <span className="font-medium w-24">Email:</span>
                  <a href="mailto:contact@revon.com" className="text-blue-600 hover:underline">contact@revon.com</a>
                </p>
                <p className="flex items-start">
                  <span className="font-medium w-24">Phone:</span>
                  <a href="tel:+919999999999" className="text-blue-600 hover:underline">+91 9999 999 999</a>
                </p>
                <p className="flex items-start">
                  <span className="font-medium w-24">WhatsApp:</span>
                  <a href="https://wa.me/+919999999999" target="_blank" className="text-green-600 hover:underline">+91 9999 999 999</a>
                </p>
                <p className="flex items-start">
                  <span className="font-medium w-24">Hours:</span>
                  <span>Mon-Sat: 10AM - 7PM IST</span>
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-semibold mb-4">Connect With Us</h2>
              <div className="flex space-x-4">
                <a href="#" className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700">FB</a>
                <a href="#" className="bg-blue-400 text-white p-2 rounded-full hover:bg-blue-500">TW</a>
                <a href="#" className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-2 rounded-full hover:from-purple-600 hover:to-pink-600">IG</a>
                <a href="#" className="bg-red-600 text-white p-2 rounded-full hover:bg-red-700">YT</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
