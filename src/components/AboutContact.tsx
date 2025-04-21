
import { Mail, Instagram, Smartphone } from "lucide-react";

const AboutContact = () => (
  <section className="max-w-2xl mx-auto mb-10 px-4">
    <h2 className="text-xl font-bold text-center text-gray-900 mb-4">About Us</h2>
    <p className="text-gray-700 text-center mb-6">
      <span className="font-semibold text-green-700">RevON</span>, founded by Yash Pawar (Boisar, Maharashtra), provides reliable, fast, and genuine app review services to developers and businesses.
    </p>
    <h2 className="text-lg font-bold text-gray-900 mb-2 text-center">Contact</h2>
    <div className="flex flex-col items-center gap-3 text-gray-700">
      <a
        href="https://wa.me/917385066631"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 hover:text-green-700"
      >
        <Smartphone size={20} /> WhatsApp: <span className="underline">+91 73850 66631</span>
      </a>
      <a
        href="mailto:yash92pawar74@gmail.com"
        className="flex items-center gap-2 hover:text-green-700"
      >
        <Mail size={20} /> yash92pawar74@gmail.com
      </a>
      <a
        href="https://instagram.com/ahhh_its_ash"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 hover:text-green-700"
      >
        <Instagram size={20} /> @ahhh_its_ash
      </a>
    </div>
  </section>
);

export default AboutContact;

