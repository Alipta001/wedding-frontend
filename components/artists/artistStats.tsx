const stats = [
  { value: "500+", label: "Artisans" },
  { value: "20+", label: "Craft Traditions" },
  { value: "50+", label: "Cities" },
  { value: "10K+", label: "Happy Customers" },
];

export default function ArtistStats() {
  return (
    <section className="bg-[#FAF6F0] py-12">
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 bg-white rounded-3xl p-10 shadow-sm">
          {stats.map((item) => (
            <div key={item.label} className="text-center">
              <h3 className="text-4xl font-bold text-[#7A1D22]">
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