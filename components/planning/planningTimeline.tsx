// import TimelineCard from "./timelineCard";

// export default function PlanningTimeline() {
//   return (
//     <section className="bg-[#F8F3EE] pb-24">
//       <div className="max-w-[1320px] mx-auto px-5">

//         <div className="grid lg:grid-cols-3 gap-5">

//           {/* Large Card */}

//           <div className="lg:col-span-2">
//             <TimelineCard
//               title="3 Months Before"
//               tasks={[
//                 "Finalize Guest List & Invitations",
//                 "Book Traditional Musicians (Shehnai)",
//                 "Selection of Tatta Gifts",
//               ]}
//             />
//           </div>

//           {/* Dark Card */}

//           <TimelineCard
//             title="1 Week Before"
//             variant="dark"
//             tasks={[
//               "Confirm Henna Artist",
//               "Pick Up Wedding Saree",
//               "Organize Gaye Holud Materials",
//             ]}
//           />

//           {/* Wide Card */}

//           <div className="lg:col-span-3">
//             <TimelineCard
//               title="1 Month Before"
//               tasks={[
//                 "Final Menu Tasting",
//                 "Confirm Floral Decorator",
//                 "Jewelry Inspection",
//               ]}
//             />
//           </div>

//           {/* Bottom Left */}

//           <TimelineCard
//             title="Wedding Day"
//             variant="linen"
//             tasks={[
//               "Morning Shanti Rituals",
//               "Makeup & Saree Draping",
//               "Photography Session",
//             ]}
//           />

//           {/* Bottom Right */}

//           <TimelineCard
//             title="Artisan Support"
//             variant="support"
//             tasks={[
//               "Verified Artisans",
//               "24/7 Planning Assistance",
//               "Curated Vendor Recommendations",
//             ]}
//           />

//         </div>

//       </div>
//     </section>
//   );
// }

import TimelineCard from "./timelineCard";

export default function PlanningTimeline() {
  return (
    <section className="bg-[#F8F3EE] py-12 lg:py-16">
      <div className="max-w-[1320px] mx-auto px-5">
        <div className="grid lg:grid-cols-[2fr_1fr] gap-5">
          {/* LEFT LARGE CARD */}

          <div className="h-[360px] lg:h-[390px]">
            <TimelineCard
              title="3 Months Before"
              variant="default"
              tasks={[
                "Finalize Guest List & Invitations",
                "Book Traditional Musicians (Shehnai)",
                "Selection of Tatta Gifts",
              ]}
            />
          </div>

          {/* RIGHT COLUMN */}

          <div className="flex flex-col gap-5">
            <div className="h-[220px] lg:h-[250px]">
              <TimelineCard
                title="1 Week Before"
                variant="dark"
                tasks={[
                  "Confirm Henna Artist",
                  "Pick Up Wedding Saree",
                  "Organize Gaye Holud Materials",
                ]}
              />
            </div>

            <div
              className="
    bg-white
    border
    border-[#D5B06B]/70
    rounded-[20px]

    px-6
    py-5

    flex
    items-center
    gap-4

    h-[100px]
    lg:h-[110px]
  "
            >
              {/* Icon */}

              <div
                className="
      w-14
      h-14

      rounded-full

      bg-[#8A6500]

      flex
      items-center
      justify-center

      shrink-0
    "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-6 h-6 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3l2.4 4.86 5.36.78-3.88 3.78.92 5.34L12 15.96l-4.8 2.52.92-5.34L4.24 8.64l5.36-.78L12 3z"
                  />
                </svg>
              </div>

              {/* Content */}

              <div>
                <h4 className="font-semibold text-[#2B2520] text-lg">
                  Artisan Support
                </h4>

                <p className="text-[#6D5A50] text-sm tracking-[1px] uppercase mt-1">
                  24/7 Planning Assistance
                </p>
              </div>
            </div>
          </div>

          {/* SECOND ROW LEFT */}

          <div className="h-[240px] lg:h-[260px]">
            <TimelineCard
              title="1 Month Before"
              variant="cream"
              tasks={[
                "Final Menu Tasting with Caterer",
                "Confirm Floral Decorator",
                "Jewelry Inspection",
              ]}
            />
          </div>

          {/* SECOND ROW RIGHT */}

          <div className="h-[240px] lg:h-[260px]">
            <TimelineCard
              title="The Wedding Day"
              variant="linen"
              tasks={[
                "Morning Shanti Rituals",
                "Makeup & Saree Draping",
                "Photography Session",
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
