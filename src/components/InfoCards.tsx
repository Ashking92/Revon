
const info = [
  {
    title: "🕒 Review Live Time",
    data: [
      { label: "Android", value: "4 – 12 hours" },
      { label: "iOS", value: "12 – 24 hours" },
      { label: "Google Maps", value: "1 – 2 days" },
    ],
  },
  {
    title: "🛡 Warranty",
    data: [
      { label: "iOS", value: "1 Month" },
      { label: "Android", value: "7 Days" },
      { label: "Google Maps", value: "7 Days" },
    ],
    note: "(Reviews removed within warranty will be replaced for free)",
  },
  {
    title: "🧾 Payment Terms",
    data: [
      { label: "Advance", value: "50% Payment Required" },
      { label: "Remaining", value: "50% After Order Confirmation" },
      { label: "Note", value: "Order starts after first payment only" },
    ],
  },
];

const InfoCards = () => (
  <section className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-10 px-4">
    {info.map((card, idx) => (
      <div
        key={card.title}
        className={`bg-gradient-to-br from-green-50 via-white to-white border border-green-100 rounded-xl shadow-sm p-5 flex flex-col items-center text-center`}
      >
        <h3 className="text-lg font-bold text-green-700 mb-3">{card.title}</h3>
        <ul className="space-y-1 mb-2">
          {card.data.map((d) => (
            <li key={d.label}>
              <span className="font-semibold text-gray-700">{d.label}:</span>{" "}
              <span className="text-gray-600">{d.value}</span>
            </li>
          ))}
        </ul>
        {card.note && <div className="text-xs text-gray-500 italic">{card.note}</div>}
      </div>
    ))}
  </section>
);

export default InfoCards;
