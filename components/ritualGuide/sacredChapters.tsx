// import Image from "next/image";

// import RitualInfoCard from "./ritualInfoCard";
// import RitualProductCard from "./ritualProductCard";
// import SacredChapterCard from "./sacredChapterCard";

// interface Props {
//   item: {
//     chapter: string;
//     title: string;
//     description: string;
//     image: string;
//   };
// }

// export default function SacredChapterCard({
//   item,
// }: Props) {
//   return (
//     <div className="relative rounded-[32px] overflow-hidden h-[500px]">
//       <Image
//         src={item.image}
//         alt={item.title}
//         fill
//         className="object-cover"
//       />

//       <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

//       <div className="absolute bottom-8 left-8 right-8 text-white">
//         <span className="text-xs tracking-[2px] uppercase">
//           {item.chapter}
//         </span>

//         <h3 className="font-serif text-3xl mt-3">
//           {item.title}
//         </h3>

//         <p className="mt-3 opacity-90">
//           {item.description}
//         </p>
//       </div>
//     </div>
//   );
// }

// import RitualInfoCard from "./ritualInfoCard";
// import RitualProductCard from "./ritualProductCard";
// import SacredChapterCard from "./sacredChapterCard";

// const featuredChapter = {
//   chapter: "CHAPTER 04",
//   title: "Biye: The Union",
//   description:
//     "From the Saat Paak to the Sindoor Daan, discover the soul of the wedding day.",
//   image: "/images/ritualGuide/sacred1.png",
// };

// const sideChapter = {
//   chapter: "CHAPTER 03",
//   title: "Gaye Holud",
//   description:
//     "The purifying ritual of turmeric and joy.",
//   image: "/images/ritualGuide/sacred2.png",
// };

// const infoCard = {
//   chapter: "CHAPTER 01",
//   title: "Aiburobhaat",
//   description:
//     "The final celebratory meal before marriage.",
// };

// const productCard = {
//   title: "Biye Samagri Kit",
//   price: "₹12,500",
//   image: "/images/ritualGuide/collections3.png",
// };

// const extraImageCard = {
//   title: "Bor Jatri",
//   image: "/images/ritualGuide/collections3.png",
// };

// export default function SacredChapters() {
//   return (
//     <section className="py-24 bg-[#F8F3EE]">
//       <div className="max-w-[1320px] mx-auto px-5">
//         <div className="text-center mb-14">
//           <h2 className="font-serif text-[#5B060C] text-5xl">
//             The Sacred Chapters
//           </h2>

//           <p className="mt-4 text-[#564240]">
//             Explore the essential rituals of a traditional Bengali union.
//           </p>
//         </div>

//         <div
//           className="
//             grid
//             gap-5

//             lg:grid-cols-[2fr_1fr]
//             lg:auto-rows-[230px]
//           "
//         >
//           {/* Top Large Card */}

//           <SacredChapterCard
//             chapter={featuredChapter.chapter}
//             title={featuredChapter.title}
//             description={featuredChapter.description}
//             image={featuredChapter.image}
//             variant="featured"
//           />

//           {/* Right Tall Card */}

//           <SacredChapterCard
//             chapter={sideChapter.chapter}
//             title={sideChapter.title}
//             description={sideChapter.description}
//             image={sideChapter.image}
//             variant="vertical"
//           />

//           {/* Bottom Left */}

//           <div className="grid grid-cols-2 gap-5">
//             <RitualInfoCard {...infoCard} />
//             <RitualProductCard {...productCard} />
//           </div>

//           {/* Bottom Right */}

//           <SacredChapterCard
//             title={extraImageCard.title}
//             image={extraImageCard.image}
//             variant="small"
//           />
//         </div>
//       </div>
//     </section>
//   );
// }


import RitualInfoCard from "./ritualInfoCard";
import RitualProductCard from "./ritualProductCard";
import SacredChapterCard from "./sacredChapterCard";

const featuredChapter = {
  chapter: "CHAPTER 04",
  title: "Biye: The Union",
  description:
    "From the Saat Paak to the Sindoor Daan, discover the soul of the wedding day.",
  image: "/images/ritualGuide/sacred1.png",
};

const sideTop = {
  chapter: "CHAPTER 03",
  title: "Gaye Holud",
  description:
    "The purifying ritual of turmeric and joy.",
  image: "/images/ritualGuide/sacred2.png",
};

const sideBottom = {
  chapter: "CHAPTER 05",
  title: "Bor Jatri",
  description:
    "The grand arrival of the groom’s procession.",
  image: "/images/ritualGuide/collections3.png",
};

const infoCard = {
  chapter: "CHAPTER 01",
  title: "Aiburobhaat",
  description:
    "The final celebratory meal before marriage.",
};

const productCard = {
  title: "Biye Samagri Kit",
  price: "₹12,500",
  image: "/images/ritualGuide/collections3.png",
};

export default function SacredChapters() {
  return (
    <section className="py-24 bg-[#F8F3EE]">
      <div className="max-w-[1320px] mx-auto px-5">
        {/* Header */}

        <div className="text-center mb-16">
          <h2
            className="
              font-serif
              text-[#5B060C]
              text-4xl
              md:text-5xl
              lg:text-6xl
            "
          >
            The Sacred Chapters
          </h2>

          <p
            className="
              mt-4
              text-[#564240]
              max-w-2xl
              mx-auto
            "
          >
            Explore the essential rituals of a traditional
            Bengali union.
          </p>
        </div>

        {/* Layout */}

        <div className="grid lg:grid-cols-[1.8fr_1fr] gap-6">
          {/* LEFT */}

          <div className="flex flex-col gap-6">
            <SacredChapterCard
              chapter={featuredChapter.chapter}
              title={featuredChapter.title}
              description={featuredChapter.description}
              image={featuredChapter.image}
              variant="featured"
            />

            <div className="grid md:grid-cols-2 gap-6">
              <RitualInfoCard {...infoCard} />
              <RitualProductCard {...productCard} />
            </div>
          </div>

          {/* RIGHT */}

          <div className="flex flex-col gap-6">
            <SacredChapterCard
              chapter={sideTop.chapter}
              title={sideTop.title}
              description={sideTop.description}
              image={sideTop.image}
              variant="rightTop"
            />

            <SacredChapterCard
              chapter={sideBottom.chapter}
              title={sideBottom.title}
              description={sideBottom.description}
              image={sideBottom.image}
              variant="rightBottom"
            />
          </div>
        </div>
      </div>
    </section>
  );
}