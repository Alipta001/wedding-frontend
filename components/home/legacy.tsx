export default function Legacy() {
  const brands = [
    "VOGUE INDIA",
    "ARCHITECTURAL DIGEST",
    "HARPER'S BAZAAR",
    "ELLE DECOR",
  ];

  return (
    <section className="bg-[#F5EEE7] py-12 lg:py-20">
      <div className="max-w-[1320px] mx-auto px-6">
        <div className="text-center">
          <p
            className="
              uppercase
              tracking-[6px]
              text-[#A68445]
              text-sm
              font-medium
            "
          >
            A Legacy Celebrated
          </p>
        </div>

        <div
          className="
            mt-12
            grid
            grid-cols-2
            lg:grid-cols-4
            gap-y-10
            gap-x-8
            text-center
          "
        >
          {brands.map((brand) => (
            <div
              key={brand}
              className="
                text-[#9C948E]
                text-lg
                md:text-2xl
                font-light
                tracking-wide
              "
            >
              {brand}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}