const categories = [
  "Brasssmiths",
  "Weavers",
  "Potters",
  "Woodcraft",
  "Jewelry",
  "Textiles",
];

export default function Categories() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-5">

        <h2 className="text-center text-4xl font-serif text-[#7A1D22]">
          Explore By Craft
        </h2>

        <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-5 mt-12">
          {categories.map((item) => (
            <div
              key={item}
              className="bg-white rounded-2xl p-8 text-center hover:shadow-lg transition"
            >
              {item}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}