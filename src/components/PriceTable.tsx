
const data = [
  { platform: "iOS Reviews", qty: "1 – 10", market: "₹60 – ₹80", our: "₹50" },
  { platform: "iOS Reviews", qty: "10 – 50", market: "₹50 – ₹70", our: "₹40" },
  { platform: "iOS Reviews", qty: "50+", market: "₹45 – ₹60", our: "₹35" },
  { platform: "Android", qty: "1 – 10", market: "₹40 – ₹50", our: "₹30" },
  { platform: "Android", qty: "10 – 50", market: "₹35 – ₹45", our: "₹25" },
  { platform: "Android", qty: "50+", market: "₹30 – ₹40", our: "₹20" },
  { platform: "Google Maps", qty: "1 – 10", market: "₹70 – ₹90", our: "₹60" },
  { platform: "Google Maps", qty: "10 – 50", market: "₹60 – ₹80", our: "₹50" },
  { platform: "Google Maps", qty: "50+", market: "₹50 – ₹70", our: "₹40" },
];

const PriceTable = () => (
  <section className="max-w-3xl mx-auto mb-10 px-4">
    <h2 className="text-xl font-bold text-center mb-3 text-gray-900">
      Market Price <span className="text-green-600">vs</span> Our Price
    </h2>
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white rounded-lg border shadow-sm text-sm">
        <thead className="bg-green-50 font-bold border-b text-gray-800">
          <tr>
            <th className="py-2 px-3 text-left">Platform</th>
            <th className="py-2 px-3 text-center">Quantity</th>
            <th className="py-2 px-3 text-center">💼 Market Price</th>
            <th className="py-2 px-3 text-center">💰 Our Price</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={`${row.platform}-${i}`} className={i % 2 === 1 ? "bg-green-50" : ""}>
              <td className="py-2 px-3">{row.platform}</td>
              <td className="py-2 px-3 text-center">{row.qty}</td>
              <td className="py-2 px-3 text-center">{row.market}</td>
              <td className="py-2 px-3 text-center font-semibold text-green-700">{row.our}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </section>
);

export default PriceTable;
