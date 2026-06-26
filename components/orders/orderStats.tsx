const stats = [
  { value: "24", label: "Total Orders" },
  { value: "15", label: "Delivered" },
  { value: "5", label: "Processing" },
  { value: "₹12,500", label: "Saved" },
];

export default function OrderStats() {
  return (
    <section className="bg-[#F6F1EA] pb-20">
      <div className="max-w-7xl mx-auto px-5">

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">

          {stats.map((item) => (
            <div
              key={item.label}
              className="
                bg-white
                rounded-3xl
                p-8
                text-center
                shadow-sm
              "
            >
              <h3 className="text-3xl font-bold text-[#7A1D22]">
                {item.value}
              </h3>

              <p className="mt-2 text-[#564240]">
                {item.label}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}