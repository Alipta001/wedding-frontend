import ProductCard from "./productCard";

const shopProducts = [
  {
    id: 1,
    slug: "shanti-ritual-set",
    name: "Shanti Ritual Set",
    price: 4999,
    image: "/images/shop/product-1.jpg",
    badge: "Best Seller",
  },
  {
    id: 2,
    slug: "wedding-samagri-kit",
    name: "Wedding Samagri Kit",
    price: 7499,
    image: "/images/shop/product-2.jpg",
    badge: "New Arrival",
  },
  {
    id: 3,
    slug: "brass-puja-thali",
    name: "Brass Puja Thali",
    price: 2999,
    image: "/images/shop/product-3.jpg",
    badge: "",
  },
  {
    id: 4,
    slug: "festive-essentials",
    name: "Festive Essentials Box",
    price: 5299,
    image: "/images/shop/product-4.jpg",
    badge: "",
  },
  {
    id: 5,
    slug: "luxury-diya-set",
    name: "Luxury Diya Set",
    price: 2499,
    image: "/images/shop/product-5.jpg",
    badge: "Popular",
  },
  {
    id: 6,
    slug: "grihapravesh-kit",
    name: "Grihapravesh Kit",
    price: 6499,
    image: "/images/shop/product-6.jpg",
    badge: "",
  },
  {
    id: 7,
    slug: "sacred-brass-kalash",
    name: "Sacred Brass Kalash",
    price: 1999,
    image: "/images/shop/product-7.jpg",
    badge: "",
  },
  {
    id: 8,
    slug: "heritage-puja-box",
    name: "Heritage Puja Box",
    price: 3999,
    image: "/images/shop/product-8.jpg",
    badge: "New",
  },
];
export default function ProductGrid() {
  return (
    <section className="pb-20">
      <div className="max-w-[1320px] mx-auto px-4 lg:px-6">
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
          {shopProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      </div>
    </section>
  );
}