
import { Smartphone, Map, Whatsapp } from "lucide-react";

const HeroSection = () => (
  <section className="relative bg-white overflow-hidden pt-8 sm:pt-16 pb-8 sm:pb-20 rounded-xl shadow-lg mb-8">
    {/* Background SVG Icons */}
    <div className="pointer-events-none absolute inset-0 flex justify-between opacity-10 z-0">
      <Smartphone size={160} className="text-green-200 -translate-y-6 -translate-x-8 hidden md:block" />
      <Map size={180} className="text-green-100 translate-y-8 translate-x-10 hidden md:block" />
    </div>
    <div className="relative z-10 flex flex-col items-center text-center max-w-2xl mx-auto px-4">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
        Genuine App Reviews – iOS, Android & Google Maps
      </h1>
      <p className="text-lg sm:text-xl text-gray-600 mb-7 font-medium">
        Boost your app visibility with <span className="text-green-700 font-semibold">100% real user reviews</span>
      </p>
      <a
        href="https://wa.me/917385066631"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-green-600 text-white hover:bg-green-700 transition font-semibold text-lg shadow-lg"
      >
        <span role="img" aria-label="envelope">📩</span> Place Order on WhatsApp
        <Whatsapp size={22} className="ml-1" />
      </a>
    </div>
  </section>
);

export default HeroSection;
