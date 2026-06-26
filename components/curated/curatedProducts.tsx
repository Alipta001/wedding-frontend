import Link from "next/link";
import CuratedCard from "./curatedCard";

const products = [
  {
    id: 1,
    name: "Brass Puja Thali",
    price: "₹2,499",
    image: "/images/home/curate1.jpeg",
    category: "Sacred Essentials",
  },
  {
    id: 2,
    name: "Temple Bell",
    price: "₹1,899",
    image: "/images/home/curate2.jpeg",
    category: "Handcrafted",
  },
  {
    id: 3,
    name: "Wedding Samagri Set",
    price: "₹5,499",
    image: "/images/home/curate3.jpeg",
    category: "Wedding Collection",
  },
  {
    id: 4,
    name: "Premium Incense Kit",
    price: "₹1,299",
    image: "/images/home/curate4.jpeg",
    category: "Aromatics",
  },
];

export default function CuratedProducts() {
  return (
    <section className="bg-[#FAF6F0] py-1 2 lg:py-20">
      <div className="max-w-[1320px] mx-auto px-4 lg:px-6">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
          <div>
            <span className="uppercase tracking-[3px] text-[#9A7B3E] text-sm font-semibold">
              Seasonal Collection
            </span>

            <h2 className="mt-4 text-4xl md:text-5xl font-serif text-[#5B060C]">
              Curated For The Season
            </h2>

            <p className="mt-4 text-[#564240] max-w-2xl leading-8">
              Hand-selected sacred essentials, artisan-crafted treasures and meaningful ritual products.
            </p>
          </div>

          <Link
            href="/shop"
            className="text-[#9A7B3E] font-semibold hover:text-[#722020] transition"
          >
            View All Products →
          </Link>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
          {products.map((product) => (
            <CuratedCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}