import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
  product: {
    slug: string;
    name: string;
    image: string;
    price: number;
    badge?: string;
  };
}

export default function ProductCard({
  product,
}: ProductCardProps) {
  return (
    <article
      className="
        group
        bg-white
        rounded-[28px]
        overflow-hidden
        border
        border-[#E8DDD0]
        transition-all
        duration-500
        hover:-translate-y-2
        hover:shadow-2xl
      "
    >
      {/* Image */}

      <div className="relative overflow-hidden">
        <div className="relative h-[350px]">
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

        {product.badge && (
          <span
            className="
              absolute
              top-4
              left-4
              bg-[#722020]
              text-white
              text-xs
              tracking-[1px]
              px-4
              py-2
              rounded-full
            "
          >
            {product.badge}
          </span>
        )}
      </div>

      {/* Content */}

      <div className="p-6">
        <h3
          className="
            text-[#5B060C]
            text-2xl
            font-serif
            leading-snug
          "
        >
          {product.name}
        </h3>

        <div
          className="
            mt-5
            flex
            items-center
            justify-between
          "
        >
          <span
            className="
              text-[#A68445]
              text-lg
              font-semibold
            "
          >
            ₹{product.price.toLocaleString()}
          </span>

          <Link
            href={`/products/${product.slug}`}
            className="
              text-[#722020]
              font-medium
              hover:text-[#A68445]
              transition
            "
          >
            View →
          </Link>
        </div>
      </div>
    </article>
  );
}