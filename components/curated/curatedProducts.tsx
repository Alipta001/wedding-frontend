import Image from "next/image";
import Link from "next/link";

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
    <section className="bg-[#FAF6F0] py-20 lg:py-20">
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
              Hand-selected sacred essentials, artisan-crafted
              treasures and meaningful ritual products.
            </p>
          </div>

          <Link
            href="#"
            className="
              text-[#9A7B3E]
              font-semibold
              hover:text-[#722020]
              transition
            "
          >
            View All Products →
          </Link>
        </div>

        {/* Product Grid */}

        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            xl:grid-cols-4
            gap-8
          "
        >
          {products.map((product) => (
            <article
              key={product.id}
              className="
                group
                bg-white
                rounded-[24px]
                overflow-hidden
                border
                border-[#EFE4D9]
                hover:shadow-xl
                transition-all
                duration-300
              "
            >
              {/* Image */}

              <div className="relative h-[380px] overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-105
                  "
                />
              </div>

              {/* Content */}

              <div className="p-6">
                <span
                  className="
                    text-xs
                    uppercase
                    tracking-[2px]
                    text-[#9A7B3E]
                  "
                >
                  {product.category}
                </span>

                <h3
                  className="
                    mt-3
                    text-xl
                    font-serif
                    text-[#5B060C]
                  "
                >
                  {product.name}
                </h3>

                <div className="mt-5 flex items-center justify-between">
                  <p
                    className="
                      text-lg
                      font-semibold
                      text-[#722020]
                    "
                  >
                    {product.price}
                  </p>

                  <button
                    className="
                      h-10
                      w-10
                      rounded-full
                      border
                      border-[#D7C4B3]
                      flex
                      items-center
                      justify-center
                      hover:bg-[#722020]
                      hover:text-white
                      transition
                    "
                  >
                    +
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}