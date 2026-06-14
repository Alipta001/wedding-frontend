

import Image from "next/image";
import Link from "next/link";

interface CuratedCardProps {
  product: {
    slug: string;
    name: string;
    image: string;
    price: number;
  };
}

export default function CuratedCard({
  product,
}: CuratedCardProps) {
  return (
    <article
      className="
        group
        bg-white
        rounded-[30px]
        overflow-hidden
        border
        border-[#E8DDD0]
        transition-all
        duration-500
        hover:-translate-y-2
        hover:shadow-xl
      "
    >
      <div className="relative h-[320px] overflow-hidden">
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

      <div className="p-6">
        <h3
          className="
            text-[#5B060C]
            text-2xl
            font-serif
          "
        >
          {product.name}
        </h3>

        <div
          className="
            mt-4
            flex
            items-center
            justify-between
          "
        >
          <span
            className="
              text-[#A68445]
              text-lg
              font-medium
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