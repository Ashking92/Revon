
import { Check } from "lucide-react";

const features = [
  "100% Manual Reviews (No Bots)",
  "Real Devices & Genuine Accounts",
  "Same-Day or 24hr Delivery",
  "Region-Based Reviews (Customizable)",
  "Warranty: iOS – 1 Month | Android – 7 Days",
  "Google Maps Reviews Also Available",
  "One-Time & Bulk Orders Accepted",
  "Trusted by Developers",
];

const WhyChooseSection = () => (
  <section className="max-w-3xl mx-auto mb-10 px-4">
    <h2 className="text-2xl font-bold text-gray-900 text-center mb-6">Why Choose <span className="text-green-700">Black Bean</span>?</h2>
    <ul className="grid gap-3 sm:grid-cols-2">
      {features.map((item) => (
        <li key={item} className="flex items-start gap-2">
          <span className="mt-1 text-green-600">
            <Check size={20} strokeWidth={3} />
          </span>
          <span className="text-gray-700 font-medium">{item}</span>
        </li>
      ))}
    </ul>
  </section>
);

export default WhyChooseSection;
