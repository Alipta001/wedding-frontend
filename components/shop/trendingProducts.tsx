import Link from "next/link";

const trending = [
  {
    name: "Gold-Plated Puja Thali",
    price: 3499,
    image: "/images/shop/allessentials1.png",
  },
  {
    name: "Temple Bell Premium",
    price: 1999,
    image: "/images/shop/allessentials2.png",
  },
  {
    name: "Wedding Haldi Kit",
    price: 5999,
    image: "/images/shop/allessentials3.png",
  },
  {
    name: "Brass Diya Set",
    price: 2499,
    image: "/images/shop/allessentials4.png",
  },
];

export function TrendingProducts() {
  return (
    <section className="py-16">
      <div className="max-w-[1320px] mx-auto px-5 lg:px-8">
        {/* Header */}
        <div className="flex items-end justify-between mb-8">
          <div>
            <span className="uppercase tracking-[3px] text-xs text-[#A57C33]">
              Most Loved
            </span>
            <h2 className="mt-2 text-3xl md:text-4xl font-serif text-[#2F1D1B]">
              Trending Now
            </h2>
          </div>

          <Link href="/products" className="text-[#7A1D22] font-medium">
            View All →
          </Link>
        </div>

        {/* Scroll Row */}
        <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
          {trending.map((item, i) => (
            <div
              key={i}
              className="
                min-w-[240px]
                bg-white
                border
                border-[#E8DDD0]
                rounded-3xl
                overflow-hidden
                shadow-sm
                hover:shadow-xl
                transition
              "
            >
              <div className="h-[180px] relative">
                <img
                  src={item.image}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-5">
                <h3 className="text-[#5B060C] font-serif text-lg">
                  {item.name}
                </h3>

                <p className="mt-2 text-[#A68445] font-semibold">
                  ₹{item.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}