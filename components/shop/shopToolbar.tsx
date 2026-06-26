// "use client";

// import { ChevronDown } from "lucide-react";
// import { useState } from "react";

// const filters = [
//   "All",
//   "Wedding",
//   "Puja",
//   "Brassware",
//   "Decor",
//   "Gifting",
// ];

// export default function ShopToolbar() {
//   const [active, setActive] = useState("All");

//   return (
//   <div
//     className="
//       flex
//       flex-col
//       gap-6
//       mb-12
//     "
//   >
//     {/* Search Bar */}

//     <div className="w-full flex justify-center">
//       <div
//         className="
//           relative
//           w-full
//           max-w-2xl
//         "
//       >
//         <Search
//           size={20}
//           className="
//             absolute
//             left-5
//             top-1/2
//             -translate-y-1/2
//             text-[#9A8A7D]
//           "
//         />

//         <input
//           type="text"
//           value={search}
//           onChange={(e) =>
//             setSearch(e.target.value)
//           }
//           placeholder="Search rituals, puja kits, brassware..."
//           className="
//             w-full

//             h-14

//             rounded-full

//             bg-white

//             border
//             border-[#E8DDD0]

//             pl-14
//             pr-5

//             text-[#564240]

//             shadow-sm

//             outline-none

//             focus:border-[#5B060C]
//             focus:ring-4
//             focus:ring-[#5B060C]/10

//             transition
//           "
//         />
//       </div>
//     </div>

//     {/* Filters + Sort */}

//     <div
//       className="
//         flex
//         flex-col
//         lg:flex-row
//         lg:items-center
//         lg:justify-between
//         gap-5
//       "
//     >
//       {/* Categories */}

//       <div
//         className="
//           flex
//           gap-3
//           overflow-x-auto
//           pb-2
//           scrollbar-hide
//         "
//       >
//         {filters.map((item) => (
//           <button
//             key={item}
//             onClick={() => setActive(item)}
//             className={`
//               whitespace-nowrap
//               px-5
//               py-3
//               rounded-full
//               border
//               text-sm
//               transition

//               ${
//                 active === item
//                   ? "bg-[#5B060C] text-white border-[#5B060C]"
//                   : "bg-white text-[#564240] border-[#E8DDD0]"
//               }
//             `}
//           >
//             {item}
//           </button>
//         ))}
//       </div>

//       {/* Sort */}

//       <div
//         className="
//           bg-white
//           rounded-xl

//           px-4
//           py-3

//           flex
//           items-center
//           gap-3

//           border
//           border-[#E8DDD0]

//           w-fit
//         "
//       >
//         <span className="text-[#564240] text-sm">
//           Sort By:
//         </span>

//         <button className="flex items-center gap-2">
//           <span className="font-semibold text-[#5B060C]">
//             Featured
//           </span>

//           <ChevronDown size={16} />
//         </button>
//       </div>
//     </div>
//   </div>
// );
// }


// "use client";

// import { ChevronDown, Search } from "lucide-react";
// import { Dispatch, SetStateAction, useState } from "react";

// const filters = [
//   "All",
//   "Wedding",
//   "Puja",
//   "Brassware",
//   "Decor",
//   "Gifting",
// ];

// interface ShopToolbarProps {
//   search: string;
//   setSearch: Dispatch<SetStateAction<string>>;
// }

// export default function ShopToolbar({
//   search,
//   setSearch,
// }: ShopToolbarProps) {
//   const [active, setActive] = useState("All");

//   return (
//     <div className="mb-12">
//       {/* Search Bar */}

//       <div className="flex justify-center mb-8">
//         <div className="relative w-full max-w-2xl">
//           <Search
//             size={20}
//             className="
//               absolute
//               left-5
//               top-1/2
//               -translate-y-1/2
//               text-[#9A8A7D]
//             "
//           />

//           <input
//             type="text"
//             value={search}
//             onChange={(e) =>
//               setSearch(e.target.value)
//             }
//             placeholder="Search rituals, puja kits, brassware..."
//             className="
//               w-full
//               h-14

//               rounded-full

//               bg-white

//               border
//               border-[#E8DDD0]

//               pl-14
//               pr-5

//               text-[#564240]

//               shadow-sm

//               outline-none

//               transition

//               focus:border-[#5B060C]
//               focus:ring-4
//               focus:ring-[#5B060C]/10
//             "
//           />
//         </div>
//       </div>

//       {/* Filters + Sort */}

//       <div
//         className="
//           flex
//           flex-col
//           lg:flex-row
//           lg:items-center
//           lg:justify-between
//           gap-5
//         "
//       >
//         {/* Categories */}

//         <div
//           className="
//             flex
//             gap-3
//             overflow-x-auto
//             pb-2
//             scrollbar-hide
//           "
//         >
//           {filters.map((item) => (
//             <button
//               key={item}
//               onClick={() => setActive(item)}
//               className={`
//                 whitespace-nowrap
//                 px-5
//                 py-3
//                 rounded-full
//                 border
//                 text-sm
//                 transition

//                 ${
//                   active === item
//                     ? "bg-[#5B060C] text-white border-[#5B060C]"
//                     : "bg-white text-[#564240] border-[#E8DDD0]"
//                 }
//               `}
//             >
//               {item}
//             </button>
//           ))}
//         </div>

//         {/* Sort */}

//         <div
//           className="
//             bg-white
//             rounded-xl
//             px-4
//             py-3

//             border
//             border-[#E8DDD0]

//             flex
//             items-center
//             gap-3

//             w-fit
//           "
//         >
//           <span className="text-[#564240] text-sm">
//             Sort By:
//           </span>

//           <button className="flex items-center gap-2">
//             <span className="font-semibold text-[#5B060C]">
//               Featured
//             </span>

//             <ChevronDown size={16} />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }


// "use client";

// import { ChevronDown, Search } from "lucide-react";
// import { Dispatch, SetStateAction, useState } from "react";

// const filters = [
//   "All",
//   "Wedding",
//   "Puja",
//   "Brassware",
//   "Decor",
//   "Gifting",
// ];

// interface ShopToolbarProps {
//   search: string;
//   setSearch: Dispatch<SetStateAction<string>>;
// }

// export default function ShopToolbar({
//   search,
//   setSearch,
// }: ShopToolbarProps) {
//   const [active, setActive] = useState("All");

//   return (
//     <div
//       className="
//         mb-14

//         bg-white/70
//         backdrop-blur-xl

//         rounded-[32px]

//         p-6
//         lg:p-8

//         border
//         border-white

//         shadow-[0_20px_60px_rgba(0,0,0,0.06)]
//       "
//     >
//       {/* Search */}

//       <div className="flex justify-center mb-10">
//         <div className="relative w-full max-w-3xl">
//           <div
//             className="
//               absolute
//               left-3
//               top-1/2
//               -translate-y-1/2

//               h-10
//               w-10

//               rounded-full

//               bg-[#5B060C]/10

//               flex
//               items-center
//               justify-center
//             "
//           >
//             <Search
//               size={18}
//               className="text-[#5B060C]"
//             />
//           </div>

//           <input
//             type="text"
//             value={search}
//             onChange={(e) =>
//               setSearch(e.target.value)
//             }
//             placeholder="Search rituals, wedding kits, brassware..."
//             className="
//               w-full
//               h-[60px]

//               rounded-full

//               bg-white

//               border
//               border-[#E8DDD0]

//               pl-16
//               pr-6

//               text-[#3D2B28]

//               shadow-[0_10px_40px_rgba(0,0,0,0.06)]

//               placeholder:text-[#9A8A7D]

//               outline-none

//               transition-all
//               duration-300

//               focus:border-[#5B060C]
//               focus:ring-4
//               focus:ring-[#5B060C]/10
//               focus:shadow-[0_15px_50px_rgba(91,6,12,0.12)]
//             "
//           />
//         </div>
//       </div>

//       {/* Filters + Sort */}

//       <div
//         className="
//           flex
//           flex-col
//           lg:flex-row
//           lg:items-center
//           lg:justify-between
//           gap-6
//         "
//       >
//         {/* Categories */}

//         <div
//           className="
//             flex
//             gap-3
//             overflow-x-auto
//             pb-2
//             scrollbar-hide
//           "
//         >
//           {filters.map((item) => (
//             <button
//               key={item}
//               onClick={() => setActive(item)}
//               className={`
//                 whitespace-nowrap

//                 px-6
//                 py-3

//                 rounded-full

//                 text-sm
//                 font-medium

//                 transition-all
//                 duration-300

//                 ${
//                   active === item
//                     ? `
//                       bg-[#5B060C]
//                       text-white
//                       shadow-lg
//                       shadow-[#5B060C]/20
//                     `
//                     : `
//                       bg-white
//                       text-[#564240]

//                       border
//                       border-[#E8DDD0]

//                       hover:border-[#5B060C]
//                       hover:text-[#5B060C]
//                       hover:-translate-y-0.5
//                     `
//                 }
//               `}
//             >
//               {item}
//             </button>
//           ))}
//         </div>

//         {/* Sort */}

//         <div
//           className="
//             bg-white

//             rounded-2xl

//             px-5
//             py-3

//             border
//             border-[#E8DDD0]

//             shadow-sm

//             flex
//             items-center
//             gap-3

//             hover:shadow-md

//             transition

//             w-fit
//           "
//         >
//           <span
//             className="
//               text-[#8B7765]
//               text-sm
//             "
//           >
//             Sort By
//           </span>

//           <button
//             className="
//               flex
//               items-center
//               gap-2

//               font-semibold

//               text-[#5B060C]
//             "
//           >
//             Featured
//             <ChevronDown size={16} />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }



"use client";

import { ChevronDown, Search } from "lucide-react";
import { Dispatch, SetStateAction, useState } from "react";

const filters = [
  "All",
  "Wedding",
  "Puja",
  "Brassware",
  "Decor",
  "Gifting",
];

const sortOptions = [
  "Featured",
  "Price: Low to High",
  "Price: High to Low",
  "Newest",
  "Popularity",
];

interface ShopToolbarProps {
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
}

export default function ShopToolbar({
  search,
  setSearch,
}: ShopToolbarProps) {
  const [active, setActive] = useState("All");
  const [sort, setSort] = useState("Featured");
  const [openSort, setOpenSort] = useState(false);

  return (
    <div
      className="
        mb-14
        bg-white/70
        backdrop-blur-xl
        rounded-[32px]
        p-6
        lg:p-8
        border
        border-white
        shadow-[0_20px_60px_rgba(0,0,0,0.06)]
      "
    >
      {/* Search */}
      <div className="flex justify-center mb-10">
        <div className="relative w-full max-w-3xl">
          <div className="absolute left-3 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-[#5B060C]/10 flex items-center justify-center">
            <Search size={18} className="text-[#5B060C]" />
          </div>

          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search rituals, wedding kits, brassware..."
            className="
              w-full h-[60px] rounded-full bg-white border border-[#E8DDD0]
              pl-16 pr-6 text-[#3D2B28]
              shadow-[0_10px_40px_rgba(0,0,0,0.06)]
              placeholder:text-[#9A8A7D]
              outline-none transition-all duration-300
              focus:border-[#5B060C]
              focus:ring-4 focus:ring-[#5B060C]/10
              focus:shadow-[0_15px_50px_rgba(91,6,12,0.12)]
            "
          />
        </div>
      </div>

      {/* Filters + Sort */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
        {/* Categories */}
        <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
          {filters.map((item) => (
            <button
              key={item}
              onClick={() => setActive(item)}
              className={`
                whitespace-nowrap px-6 py-3 rounded-full text-sm font-medium
                transition-all duration-300
                ${
                  active === item
                    ? "bg-[#5B060C] text-white shadow-lg shadow-[#5B060C]/20"
                    : "bg-white text-[#564240] border border-[#E8DDD0] hover:border-[#5B060C] hover:text-[#5B060C] hover:-translate-y-0.5"
                }
              `}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Sort */}
        <div className="relative bg-white rounded-2xl px-5 py-3 border border-[#E8DDD0] shadow-sm flex items-center gap-3 hover:shadow-md transition w-fit">
          <span className="text-[#8B7765] text-sm">Sort By</span>

          <button
            onClick={() => setOpenSort((prev) => !prev)}
            className="flex items-center gap-2 font-semibold text-[#5B060C]"
          >
            {sort}
            <ChevronDown size={16} />
          </button>

          {openSort && (
            <div className="absolute right-0 top-full mt-2 w-56 bg-white border border-[#E8DDD0] rounded-xl shadow-lg overflow-hidden z-50">
              {sortOptions.map((option) => (
                <button
                  key={option}
                  onClick={() => {
                    setSort(option);
                    setOpenSort(false);
                  }}
                  className="w-full text-left px-4 py-3 text-sm text-[#3D2B28] hover:bg-[#5B060C]/5 hover:text-[#5B060C]"
                >
                  {option}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}