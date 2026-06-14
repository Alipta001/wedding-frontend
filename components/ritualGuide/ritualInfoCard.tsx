// interface Props {
//   item: any;
// }

// export default function RitualInfoCard({ item }: Props) {
//   return (
//     <div
//       className="
//         bg-[#EFE7DD]
//         rounded-[24px]
//         p-6
//         h-full
//       "
//     >
//       <span className="text-xs uppercase tracking-[2px] text-[#A68445]">
//         {item.chapter}
//       </span>

//       <h3 className="font-serif text-[#5B060C] text-2xl mt-3">
//         {item.title}
//       </h3>

//       <p className="mt-3 text-[#564240] text-sm leading-7">
//         {item.description}
//       </p>
//     </div>
//   );
// }

interface RitualInfoCardProps {
  chapter: string;
  title: string;
  description: string;
}

export default function RitualInfoCard({
  chapter,
  title,
  description,
}: RitualInfoCardProps) {
  return (
    <div
      className="
        bg-[#EFE7DD]
        rounded-[24px]
        p-6
        h-full

        flex
        flex-col
        justify-between
      "
    >
      <div>
        <span
          className="
            text-[10px]
            uppercase
            tracking-[2px]
            text-[#A68445]
            font-medium
          "
        >
          {chapter}
        </span>

        <h3
          className="
            font-serif
            text-[#5B060C]
            text-2xl
            mt-4
          "
        >
          {title}
        </h3>

        <p
          className="
            mt-4
            text-[#564240]
            text-sm
            leading-7
          "
        >
          {description}
        </p>
      </div>

      <div
        className="
          mt-6
          text-[#7A1D22]
          font-medium
          text-sm
        "
      >
        ↗
      </div>
    </div>
  );
}