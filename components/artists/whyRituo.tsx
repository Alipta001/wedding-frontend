const features = [
  "Verified Artisans",
  "Fair Trade Practices",
  "Authentic Craftsmanship",
  "Heritage Preservation",
];

export default function WhyRituo() {
  return (
    <section className="py-24 bg-[#FAF6F0]">
      <div className="max-w-7xl mx-auto px-5">

        <h2 className="text-center text-4xl font-serif text-[#7A1D22]">
          Why Rituo Artisans
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">

          {features.map((item) => (
            <div
              key={item}
              className="bg-[#F6F1EA] rounded-3xl p-8 text-center"
            >
              {item}
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}