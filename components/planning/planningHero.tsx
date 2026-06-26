// export default function PlanningHero() {
//   return (
//     <section className="bg-[#F8F3EE] pt-24 pb-20">
//       <div className="max-w-[1320px] mx-auto px-5">

//         <div className="text-center max-w-3xl mx-auto">

//           <span className="uppercase tracking-[4px] text-[#A68445] text-sm">
//             Wedding Planning
//           </span>

//           <h1 className="mt-5 font-serif text-[#5B060C] text-5xl md:text-6xl">
//             Your Ritual Timeline
//           </h1>

//           <p className="mt-6 text-[#564240] leading-8">
//             Experience the grace of planning.
//             A curated journey through your heritage,
//             ensuring every sacred detail is honored.
//           </p>

//           <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-8">

//             <div className="w-[220px]">
//               <div className="h-[5px] bg-[#E4D7CA] rounded-full overflow-hidden">
//                 <div className="w-[35%] h-full bg-[#A68445]" />
//               </div>

//               <p className="mt-3 text-xs tracking-[2px] text-[#A68445]">
//                 35% COMPLETED
//               </p>
//             </div>

//             <button
//               className="
//                 bg-[#FEB700]
//                 text-[#5B060C]
//                 px-8
//                 py-4
//                 rounded-full
//                 font-medium
//                 hover:bg-[#C9A45E]
//                 transition
//               "
//             >
//               Download Planner
//             </button>

//           </div>

//         </div>

//       </div>
//     </section>
//   );
// }



import { Download } from "lucide-react";

export default function PlanningHero() {
  return (
    <section className="relative bg-[#F8F3EE] overflow-hidden">
      {/* Decorative Glow */}

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#D5B06B]/10 blur-3xl rounded-full" />

      <div className="relative max-w-[1320px] mx-auto px-5">
        <div className="text-center max-w-3xl mx-auto">

          {/* Eyebrow */}

          <span className="uppercase tracking-[5px] text-[#A68445] text-sm font-medium">
            Wedding Planning
          </span>

          {/* Heading */}

          <h1 className="mt-5 font-serif text-[#5B060C] text-[46px] md:text-[64px] leading-tight">
            Your Ritual Timeline
          </h1>

          {/* Decorative Divider */}

          <div className="mt-6 flex justify-center">
            <div className="w-24 h-[2px] bg-[#D5B06B]" />
          </div>

          {/* Description */}

          <p className="mt-6 text-[#564240] text-lg leading-8 max-w-2xl mx-auto">
            Experience the grace of planning.
            A curated journey through your heritage,
            ensuring every sacred detail is honored with
            elegance, authenticity, and ease.
          </p>

          {/* Actions */}

          <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-10">

            {/* Progress */}

            <div className="w-[240px]">
              <div className="h-[6px] bg-[#E4D7CA] rounded-full overflow-hidden">
                <div className="w-[35%] h-full bg-gradient-to-r from-[#A68445] to-[#D5B06B]" />
              </div>

              <div className="flex justify-between mt-3">
                <p className="text-xs tracking-[2px] text-[#A68445] font-medium">
                  35% COMPLETED
                </p>

                <p className="text-xs text-[#8C7767]">
                  Progress
                </p>
              </div>
            </div>

            {/* Download Button */}

            <button
              className="
                inline-flex
                items-center
                gap-3

                bg-[#FEB700]
                text-[#5B060C]

                px-8
                py-4

                rounded-full

                font-semibold

                shadow-[0_10px_25px_rgba(166,132,69,0.25)]

                transition-all
                duration-300

                hover:-translate-y-1
                hover:shadow-[0_15px_35px_rgba(166,132,69,0.35)]
              "
            >
              <Download size={18} />

              Download Planner
            </button>

          </div>
        </div>
      </div>
    </section>
  );
}