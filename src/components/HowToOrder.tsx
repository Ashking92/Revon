
import { MessageSquare } from "lucide-react";

const steps = [
  "Click the WhatsApp button below",
  "Send app/store/map link + platform",
  "Make 50% payment to start",
  "Delivery as per time above",
  "Remaining 50% after partial delivery",
];

const HowToOrder = () => (
  <section className="max-w-2xl mx-auto mb-10 px-4">
    <h2 className="text-xl font-bold text-gray-900 text-center mb-3">How to Order</h2>
    <ol className="list-decimal pl-6 space-y-2 text-gray-700 font-medium mb-6">
      {steps.map((step, idx) => (
        <li key={idx}>{step}</li>
      ))}
    </ol>
    <div className="flex justify-center">
      <a
        href="https://wa.me/917385066631"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-green-600 text-white hover:bg-green-700 transition font-semibold text-lg shadow-lg"
      >
        <span role="img" aria-label="envelope">📩</span> Place Order on WhatsApp
        <MessageSquare size={22} className="ml-1" />
      </a>
    </div>
  </section>
);

export default HowToOrder;
