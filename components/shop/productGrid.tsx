// import ProductCard from "./productCard";

// const shopProducts = [
//   {
//     id: 1,
//     slug: "shanti-ritual-set",
//     name: "Shanti Ritual Set",
//     price: 4999,
//     image: "/images/shop/allessentials1.png",
//     badge: "Best Seller",
//   },
//   {
//     id: 2,
//     slug: "wedding-samagri-kit",
//     name: "Wedding Samagri Kit",
//     price: 7499,
//     image: "/images/shop/allessentials2.png",
//     badge: "New Arrival",
//   },
//   {
//     id: 3,
//     slug: "brass-puja-thali",
//     name: "Brass Puja Thali",
//     price: 2999,
//     image: "/images/shop/allessentials3.png",
//     badge: "",
//   },
//   {
//     id: 4,
//     slug: "festive-essentials",
//     name: "Festive Essentials Box",
//     price: 5299,
//     image: "/images/shop/allessentials4.png",
//     badge: "",
//   },
//   {
//     id: 5,
//     slug: "luxury-diya-set",
//     name: "Luxury Diya Set",
//     price: 2499,
//     image: "/images/shop/allessentials4.png",
//     badge: "Popular",
//   },
//   {
//     id: 6,
//     slug: "grihapravesh-kit",
//     name: "Grihapravesh Kit",
//     price: 6499,
//     image: "/images/shop/allessentials3.png",
//     badge: "",
//   },
//   {
//     id: 7,
//     slug: "sacred-brass-kalash",
//     name: "Sacred Brass Kalash",
//     price: 1999,
//     image: "/images/shop/allessentials2.png",
//     badge: "",
//   },
//   {
//     id: 8,
//     slug: "heritage-puja-box",
//     name: "Heritage Puja Box",
//     price: 3999,
//     image: "/images/shop/allessentials1.png",
//     badge: "New",
//   },
// ];
// export default function ProductGrid() {
//   return (
//     <section className="pb-20">
//       <div className="max-w-[1320px] mx-auto px-4 lg:px-6">
//         <div
//           className="
//             grid
//             grid-cols-1
//             sm:grid-cols-2
//             lg:grid-cols-3
//             xl:grid-cols-4
//             gap-8
//           "
//         >
//           {shopProducts.map((product) => (
//             <ProductCard
//               key={product.id}
//               product={product}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }




"use client";

import ProductCard from "./productCard";

const shopProducts = [
  {
    id: 1,
    slug: "shanti-ritual-set",
    name: "Shanti Ritual Set",
    price: 4999,
    image: "/images/shop/allessentials1.png",
    badge: "Best Seller",
  },
  {
    id: 2,
    slug: "wedding-samagri-kit",
    name: "Wedding Samagri Kit",
    price: 7499,
    image: "/images/shop/allessentials2.png",
    badge: "New Arrival",
  },
  {
    id: 3,
    slug: "brass-puja-thali",
    name: "Brass Puja Thali",
    price: 2999,
    image: "/images/shop/allessentials3.png",
    badge: "",
  },
  {
    id: 4,
    slug: "festive-essentials",
    name: "Festive Essentials Box",
    price: 5299,
    image: "/images/shop/allessentials4.png",
    badge: "",
  },
  {
    id: 5,
    slug: "luxury-diya-set",
    name: "Luxury Diya Set",
    price: 2499,
    image: "/images/shop/allessentials4.png",
    badge: "Popular",
  },
  {
    id: 6,
    slug: "grihapravesh-kit",
    name: "Grihapravesh Kit",
    price: 6499,
    image: "/images/shop/allessentials3.png",
    badge: "",
  },
  {
    id: 7,
    slug: "sacred-brass-kalash",
    name: "Sacred Brass Kalash",
    price: 1999,
    image: "/images/shop/allessentials2.png",
    badge: "",
  },
  {
    id: 8,
    slug: "heritage-puja-box",
    name: "Heritage Puja Box",
    price: 3999,
    image: "/images/shop/allessentials1.png",
    badge: "New",
  },
];

interface ProductGridProps {
  search: string;
}

export default function ProductGrid({
  search,
}: ProductGridProps) {
  const filteredProducts = shopProducts.filter(
    (product) =>
      product.name
        .toLowerCase()
        .includes(search.toLowerCase())
  );

  return (
    <section className="pb-24">
      {/* Premium Header */}

      <div
        className="
          flex
          flex-col
          sm:flex-row
          sm:items-center
          sm:justify-between

          gap-4

          mb-12
        "
      >
        <div>
          <span
            className="
              uppercase
              tracking-[3px]
              text-xs
              text-[#A57C33]
            "
          >
            Curated Collection
          </span>

          <h2
            className="
              mt-2

              text-3xl
              md:text-4xl

              font-serif

              text-[#2F1D1B]
            "
          >
            Sacred Essentials
          </h2>

          <p
            className="
              mt-2
              text-[#8B7765]
            "
          >
            Handpicked ritual items,
            wedding kits and heritage
            brassware.
          </p>
        </div>

        <div
          className="
            w-fit

            px-5
            py-3

            rounded-full

            bg-white

            border
            border-[#E8DDD0]

            shadow-sm
          "
        >
          <span
            className="
              text-sm
              text-[#6B5B57]
            "
          >
            Showing{" "}
            <span className="font-semibold text-[#5B060C]">
              {filteredProducts.length}
            </span>{" "}
            Products
          </span>
        </div>
      </div>

      {/* Products Grid */}

      <div
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          xl:grid-cols-4

          gap-8
        "
      >
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))
        ) : (
          <div className="col-span-full">
            <div
              className="
                bg-white

                rounded-[32px]

                border
                border-[#E8DDD0]

                py-24
                px-8

                text-center

                shadow-sm
              "
            >
              <h3
                className="
                  text-3xl
                  font-serif

                  text-[#2F1D1B]
                "
              >
                No Products Found
              </h3>

              <p
                className="
                  mt-4

                  text-[#7D6A66]

                  max-w-md
                  mx-auto
                "
              >
                We couldn't find any
                products matching your
                search. Try a different
                keyword or browse our
                curated collection.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}