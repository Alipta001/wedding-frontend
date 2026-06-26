import { Heart } from "lucide-react";

interface Props {
  image: string;
  title: string;
  price: string;
}

export default function RecommendedGiftCard({
  image,
  title,
  price,
}: Props) {
  return (
    <div>
      <div className="relative rounded-xl overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full aspect-[278/347] object-cover"
        />

        <button className="absolute top-4 right-4 bg-white rounded-full p-2">
          <Heart size={16} />
        </button>
      </div>

      <h3 className="font-serif text-xl mt-4">
        {title}
      </h3>

      <p className="text-[#564240] mt-2">
        ₹{price}
      </p>
    </div>
  );
}