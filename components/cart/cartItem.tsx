"use client";

import { X } from "lucide-react";

interface CartItemProps {
  image: string;
  name: string;
  category: string;
  price: number;
}

export default function CartItem({
  image,
  name,
  category,
  price,
}: CartItemProps) {
  return (
    <div className="bg-white rounded-2xl p-6 flex gap-6 relative">
      <button className="absolute top-4 right-4 text-gray-400">
        <X size={18} />
      </button>

      <div className="w-[130px] h-[130px] rounded-xl overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex flex-col justify-between flex-1">
        <div>
          <h3 className="font-serif text-2xl text-[#5B060C]">
            {name}
          </h3>

          <p className="text-[#A49694] text-sm">
            {category}
          </p>
        </div>

        <div className="flex justify-between items-center">
          <div className="bg-[#F5ECE4] rounded-full px-4 py-2 flex gap-5">
            <button>-</button>
            <span>1</span>
            <button>+</button>
          </div>

          <p className="font-serif text-2xl text-[#5B060C]">
            ₹{price.toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
}