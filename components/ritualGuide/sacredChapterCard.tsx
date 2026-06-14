// import SacredChapterCard from "./sacredChapters";


// const sacredChapters = [
//   {
//     id: 1,
//     chapter: "CHAPTER 01",
//     title: "Aashirbaad",
//     description:
//       "The sacred blessings that begin the wedding journey.",
//     image: "/images/ritual-guide/chapter1.jpg",
//   },
//   {
//     id: 2,
//     chapter: "CHAPTER 02",
//     title: "Gaye Holud",
//     description:
//       "The joyful turmeric ceremony filled with music and laughter.",
//     image: "/images/ritual-guide/chapter2.jpg",
//   },
//   {
//     id: 3,
//     chapter: "CHAPTER 03",
//     title: "Saat Paak",
//     description:
//       "The bride circles the groom seven times before the sacred union.",
//     image: "/images/ritual-guide/chapter3.jpg",
//   },
//   {
//     id: 4,
//     chapter: "CHAPTER 04",
//     title: "Biye",
//     description:
//       "The main wedding ceremony and sacred vows.",
//     image: "/images/ritual-guide/chapter4.jpg",
//   },
// ];

// export default function SacredChapters() {
//   return (
//     <section className="py-24 bg-white">
//       <div className="max-w-[1320px] mx-auto px-5">
//         <div className="text-center mb-14">
//           <h2 className="font-serif text-[#5B060C] text-5xl">
//             The Sacred Chapters
//           </h2>

//           <p className="mt-4 text-[#564240]">
//             Explore the essential rituals of a traditional
//             Bengali union.
//           </p>
//         </div>

//         <div className="grid lg:grid-cols-3 gap-6">
//           {sacredChapters.map((item) => (
//             <SacredChapterCard
//               key={item.id}
//               item={item}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


// import Image from "next/image";

// interface Props {
//   chapter?: string;
//   title: string;
//   description?: string;
//   image: string;
//   variant?: "featured" | "vertical" | "small";
// }

// export default function SacredChapterCard({
//   chapter,
//   title,
//   description,
//   image,
//   variant = "featured",
// }: Props) {
//   return (
//     <div
//       className={`
//         relative
//         overflow-hidden
//         rounded-[24px]

//         ${
//           variant === "featured"
//             ? "h-[230px]"
//             : variant === "vertical"
//             ? "h-[475px]"
//             : "h-[230px]"
//         }
//       `}
//     >
//       <Image
//         src={image}
//         alt={title}
//         fill
//         className="object-cover"
//       />

//       <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

//       <div className="absolute bottom-6 left-6 right-6 text-white">
//         {chapter && (
//           <span className="text-[10px] uppercase tracking-[2px]">
//             {chapter}
//           </span>
//         )}

//         <h3 className="font-serif text-3xl mt-2">
//           {title}
//         </h3>

//         {description && (
//           <p className="mt-2 text-sm opacity-90">
//             {description}
//           </p>
//         )}
//       </div>
//     </div>
//   );
// }


import Image from "next/image";

interface Props {
  chapter?: string;
  title: string;
  description?: string;
  image: string;
  variant?: "featured" | "rightTop" | "rightBottom";
}

export default function SacredChapterCard({
  chapter,
  title,
  description,
  image,
  variant = "featured",
}: Props) {
  const heightClass =
    variant === "featured"
      ? "h-[380px] lg:h-[520px]"
      : "h-[250px] lg:h-[250px]";

  return (
    <div
      className={`
        relative
        overflow-hidden
        rounded-[30px]
        ${heightClass}
      `}
    >
      <Image
        src={image}
        alt={title}
        fill
        sizes="(max-width:1024px) 100vw, 50vw"
        className="
          object-cover
          transition-transform
          duration-700
          hover:scale-105
        "
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

      <div className="absolute bottom-6 left-6 right-6 text-white">
        {chapter && (
          <span className="uppercase tracking-[2px] text-[11px]">
            {chapter}
          </span>
        )}

        <h3
          className={`
            font-serif
            mt-2

            ${
              variant === "featured"
                ? "text-3xl lg:text-5xl"
                : "text-2xl"
            }
          `}
        >
          {title}
        </h3>

        {description && (
          <p className="mt-3 text-sm leading-7 opacity-90 max-w-md">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}