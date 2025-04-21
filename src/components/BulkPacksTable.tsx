
const packs = [
  { name: "Starter Pack", includes: "10 iOS + 10 Android + 5 Maps", price: "₹1,500" },
  { name: "Booster Pack", includes: "20 iOS + 30 Android + 10 Maps", price: "₹3,000" },
  { name: "Pro Pack", includes: "30 iOS + 70 Android + 20 Maps", price: "₹5,500" },
  { name: "Ultra Pack", includes: "50 iOS + 150 Android + 50 Maps", price: "₹9,500" },
];

const BulkPacksTable = () => (
  <section className="max-w-2xl mx-auto mb-10 px-4">
    <h2 className="text-lg font-bold text-center mb-3 text-gray-900">
      📦 Bulk Packs <span className="text-gray-700">(All Platforms)</span>
    </h2>
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white rounded-lg border shadow-sm text-sm">
        <thead className="bg-green-50 font-bold border-b text-gray-800">
          <tr>
            <th className="py-2 px-4 text-left">Pack Name</th>
            <th className="py-2 px-4 text-center">Includes</th>
            <th className="py-2 px-4 text-center">Price</th>
          </tr>
        </thead>
        <tbody>
          {packs.map((row) => (
            <tr key={row.name} className="even:bg-green-50">
              <td className="py-2 px-4 font-semibold">{row.name}</td>
              <td className="py-2 px-4 text-center">{row.includes}</td>
              <td className="py-2 px-4 text-center font-semibold text-green-700">{row.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </section>
);

export default BulkPacksTable;
