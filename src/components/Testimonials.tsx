
import { User } from "lucide-react";

const testimonials = [
  {
    name: "Arjun Mehta",
    title: "App Developer",
    comment: "Black Bean delivered genuine reviews for my fitness app within 24 hours. Saw an immediate boost in rankings!",
  },
  {
    name: "Priya Shah",
    title: "Startup Founder",
    comment: "The regional targeting feature helped us get reviews from our target market. Great service and communication!",
  },
  {
    name: "Rahul Kapoor",
    title: "Marketing Manager",
    comment: "We've tried many review services, but Black Bean stands out with real users and lasting reviews. No bots, no nonsense.",
  },
  {
    name: "Neha Verma",
    title: "Business Owner",
    comment: "Their bulk packages saved us a lot of money while boosting our Google Maps visibility significantly.",
  }
];

const Testimonials = () => (
  <section className="max-w-6xl mx-auto mb-10 px-4 py-8 bg-white rounded-xl shadow-md">
    <h2 className="text-2xl font-bold text-gray-900 text-center mb-6">What Our Clients Say</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {testimonials.map((item, idx) => (
        <div key={idx} className="bg-green-50 p-4 rounded-lg">
          <div className="flex items-center mb-2">
            <div className="bg-green-100 p-2 rounded-full mr-2">
              <User size={18} className="text-green-700" />
            </div>
            <div>
              <p className="font-medium">{item.name}</p>
              <p className="text-xs text-gray-500">{item.title}</p>
            </div>
          </div>
          <p className="text-gray-700 italic">"{item.comment}"</p>
        </div>
      ))}
    </div>
  </section>
);

export default Testimonials;
