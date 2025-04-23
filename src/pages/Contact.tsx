
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50 to-white">
      <Navbar />
      <div className="max-w-2xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">
          Contact <span className="text-blue-700">RevON</span>
        </h1>
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-xl font-semibold mb-6">Get in Touch</h2>
          <div className="space-y-5 text-base">
            <p>
              <span className="font-medium mr-2">Email:</span>
              <a href="mailto:yash92pawar74@gmail.com" className="text-blue-600 hover:underline">yash92pawar74@gmail.com</a>
            </p>
            <p>
              <span className="font-medium mr-2">Phone:</span>
              <a href="tel:+918856832624" className="text-blue-600 hover:underline">+91 88568 32624</a>
            </p>
            <p>
              <span className="font-medium mr-2">WhatsApp:</span>
              <a href="https://wa.me/917385066631" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:underline">+91 73850 66631</a>
            </p>
            <p>
              <span className="font-medium mr-2">Instagram:</span>
              <a href="https://instagram.com/theitsash" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:underline">@theitsash</a>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;

