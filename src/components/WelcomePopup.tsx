
import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const WelcomePopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [orderCount, setOrderCount] = useState(0);

  useEffect(() => {
    // Show popup after 2 seconds
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 2000);

    // Generate random order count between 5-15
    setOrderCount(5 + Math.floor(Math.random() * 10));

    return () => clearTimeout(timer);
  }, []);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-xl text-green-700">Welcome to RevON!</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <p className="text-gray-700">
            Thank you for visiting RevON - your trusted app review service!
          </p>
          <div className="bg-green-50 p-3 rounded-md">
            <p className="font-medium text-green-800">
              🎉 {orderCount} orders completed today!
            </p>
            <p className="text-sm text-gray-600 mt-2">
              Join our growing list of satisfied customers and boost your app visibility today.
            </p>
          </div>
          <div className="flex justify-center">
            <a
              href="https://wa.me/917385066631"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-green-600 text-white hover:bg-green-700 transition font-semibold"
            >
              <span role="img" aria-label="envelope">📩</span> Place Your Order Now
            </a>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default WelcomePopup;

