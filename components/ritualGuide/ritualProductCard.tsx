// import Image from "next/image";

// interface Props {
//   item: any;
// }

// export default function RitualProductCard({
//   item,
// }: Props) {
//   return (
//     <div
//       className="
//         bg-white
//         rounded-[24px]
//         p-5
//         border
//         border-[#E8DDD0]
//       "
//     >
//       <div className="flex items-center gap-3">
//         <Image
//           src={item.image}
//           alt={item.title}
//           width={50}
//           height={50}
//           className="rounded-full"
//         />

//         <div>
//           <h4 className="font-serif text-[#5B060C]">
//             {item.title}
//           </h4>

//           <p className="text-[#A68445] font-semibold mt-1">
//             {item.price}
//           </p>
//         </div>
//       </div>

//       <button
//         className="
//           w-full
//           mt-5
//           bg-[#A68445]
//           text-white
//           py-3
//           rounded-lg
//           text-sm
//         "
//       >
//         ADD TO RITUAL
//       </button>
//     </div>
//   );
// }

import Image from "next/image";

interface RitualProductCardProps {
  title: string;
  price: string;
  image: string;
}

export default function RitualProductCard({
  title,
  price,
  image,
}: RitualProductCardProps) {
  return (
    <div
      className="
        bg-white
        rounded-[24px]
        p-5
        border
        border-[#E8DDD0]
        h-full

        flex
        flex-col
        justify-between
      "
    >
      <div>
        <div className="flex items-center gap-4">
          <Image
            src={image}
            alt={title}
            width={58}
            height={58}
            className="
              rounded-full
              object-cover
              border
              border-[#E8DDD0]
            "
          />

          <div>
            <span
              className="
                inline-block
                text-[10px]
                uppercase
                tracking-[1px]
                px-2
                py-1
                rounded-full
                bg-[#F7F1E8]
                text-[#A68445]
              "
            >
              Artisan Curated
            </span>

            <h4
              className="
                mt-2
                font-serif
                text-[#5B060C]
                text-lg
              "
            >
              {title}
            </h4>
          </div>
        </div>

        <p
          className="
            mt-4
            text-[#A68445]
            font-semibold
            text-lg
          "
        >
          {price}
        </p>
      </div>

      <button
        className="
          w-full
          mt-5
          bg-[#A68445]
          hover:bg-[#8D6D35]
          transition-colors

          text-white
          py-3
          rounded-lg

          text-sm
          font-medium
        "
      >
        ADD TO RITUAL
      </button>
    </div>
  );
}