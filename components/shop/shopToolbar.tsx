"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

const filters = [
  "All",
  "Wedding",
  "Puja",
  "Brassware",
  "Decor",
  "Gifting",
];

export default function ShopToolbar() {
  const [active, setActive] = useState("All");

  return (
    <div
      className="
        flex
        flex-col
        lg:flex-row
        lg:items-center
        lg:justify-between
        gap-6
        mb-12
      "
    >
      <div
        className="
          flex
          gap-3
          overflow-x-auto
          pb-2
          scrollbar-hide
        "
      >
        {filters.map((item) => (
          <button
            key={item}
            onClick={() => setActive(item)}
            className={`
              whitespace-nowrap
              px-5
              py-3
              rounded-full
              border
              text-sm
              transition

              ${
                active === item
                  ? "bg-[#5B060C] text-white border-[#5B060C]"
                  : "bg-white text-[#564240] border-[#E8DDD0]"
              }
            `}
          >
            {item}
          </button>
        ))}
      </div>

      <div
        className="
          bg-white
          rounded-xl
          px-4
          py-3
          flex
          items-center
          gap-3
          w-fit
        "
      >
        <span className="text-[#564240] text-sm">
          Sort By:
        </span>

        <button className="flex items-center gap-2">
          <span className="font-semibold text-[#5B060C]">
            Featured
          </span>

          <ChevronDown size={16} />
        </button>
      </div>
    </div>
  );
}