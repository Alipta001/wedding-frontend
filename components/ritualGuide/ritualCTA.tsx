// import Link from "next/link";
// import { ArrowRight } from "lucide-react";

// export default function RitualCTA() {
//   return (
//     <section className="bg-[#5B060C] py-20 lg:py-28 overflow-hidden">
//       <div className="max-w-[1320px] mx-auto px-5 lg:px-8">
//         <div
//           className="
//             relative

//             bg-[#6D0D14]

//             rounded-[40px]

//             overflow-hidden

//             px-8
//             md:px-14
//             lg:px-20

//             py-16
//             lg:py-24

//             text-center
//           "
//         >
//           {/* Decorative Circles */}

//           <div
//             className="
//               absolute
//               -top-32
//               -left-32

//               w-72
//               h-72

//               rounded-full

//               bg-[#A68445]/10
//             "
//           />

//           <div
//             className="
//               absolute
//               -bottom-32
//               -right-32

//               w-80
//               h-80

//               rounded-full

//               bg-[#A68445]/10
//             "
//           />

//           {/* Content */}

//           <div className="relative z-10 max-w-[900px] mx-auto">
//             <span
//               className="
//                 uppercase
//                 tracking-[4px]
//                 text-[#D5B06B]
//                 text-sm
//                 font-medium
//               "
//             >
//               Begin Your Journey
//             </span>

//             <h2
//               className="
//                 mt-6

//                 text-white
//                 font-serif

//                 text-[42px]
//                 md:text-[58px]
//                 lg:text-[72px]

//                 leading-[1.05]
//               "
//             >
//               Every Sacred Moment
//               <br />

//               <span className="italic text-[#D5B06B]">
//                 Deserves Intention.
//               </span>
//             </h2>

//             <p
//               className="
//                 mt-8

//                 text-white/80

//                 text-lg
//                 lg:text-xl

//                 leading-9

//                 max-w-[720px]
//                 mx-auto
//               "
//             >
//               Explore thoughtfully curated ritual collections,
//               artisan-crafted essentials, and ceremonial guides
//               designed to help you celebrate tradition with
//               authenticity and grace.
//             </p>

//             {/* Buttons */}

//             <div
//               className="
//                 mt-12

//                 flex
//                 flex-col
//                 sm:flex-row

//                 justify-center

//                 gap-4
//               "
//             >
//               <Link
//                 href="/shop"
//                 className="
//                   inline-flex
//                   items-center
//                   justify-center
//                   gap-3

//                   bg-[#D5B06B]
//                   text-[#5B060C]

//                   px-8
//                   py-4

//                   rounded-xl

//                   font-semibold

//                   transition
//                   hover:bg-[#E1BE7A]
//                 "
//               >
//                 Explore Collections

//                 <ArrowRight size={18} />
//               </Link>

//               <Link
//                 href="/planning"
//                 className="
//                   inline-flex
//                   items-center
//                   justify-center

//                   border
//                   border-white/30

//                   text-white

//                   px-8
//                   py-4

//                   rounded-xl

//                   font-semibold

//                   transition
//                   hover:bg-white/10
//                 "
//               >
//                 Start Planning
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function RitualCTA() {
  return (
    <section className="bg-[#F8F3EE] py-12 lg:py-24 overflow-hidden">
      <div className="max-w-[1320px] mx-auto px-5 lg:px-8">
        <div
          className="
            relative
            overflow-hidden

            bg-[#651018]

            rounded-[40px]

            px-6
            md:px-12
            lg:px-16

            py-12
            lg:py-16

            text-center

            shadow-[0_30px_80px_rgba(0,0,0,0.12)]
          "
        >
          {/* Decorative Glow */}

          <div
            className="
              absolute
              -top-20
              -left-20

              w-56
              h-56

              rounded-full
              bg-[#D5B06B]/10

              blur-3xl
            "
          />

          <div
            className="
              absolute
              -bottom-20
              -right-20

              w-64
              h-64

              rounded-full
              bg-[#D5B06B]/10

              blur-3xl
            "
          />

          {/* Center Glow */}

          <div
            className="
              absolute
              inset-0

              bg-[radial-gradient(circle_at_center,rgba(213,176,107,0.08),transparent_65%)]
            "
          />

          {/* Premium Border */}

          <div
            className="
              absolute
              inset-[1px]

              rounded-[39px]

              border
              border-[#D5B06B]/15

              pointer-events-none
            "
          />

          {/* Content */}

          <div className="relative z-10 max-w-[820px] mx-auto">
            <span
              className="
                uppercase
                tracking-[4px]

                text-[#D5B06B]

                text-xs
                md:text-sm

                font-medium
              "
            >
              Begin Your Journey
            </span>

            <h2
              className="
                mt-4

                font-serif
                text-white

                text-[34px]
                md:text-[48px]
                lg:text-[60px]

                leading-[1.05]
              "
            >
              Every Sacred Moment
              <br />

              <span className="italic text-[#D5B06B]">
                Deserves Intention.
              </span>
            </h2>

            <p
              className="
                mt-5

                text-white/75

                text-base
                md:text-lg

                leading-8

                max-w-[650px]
                mx-auto
              "
            >
              Explore thoughtfully curated ritual collections,
              artisan-crafted essentials, and ceremonial guides
              designed to celebrate tradition with authenticity
              and grace.
            </p>

            {/* Buttons */}

            <div
              className="
                mt-8

                flex
                flex-col
                sm:flex-row

                justify-center

                gap-3
              "
            >
              <Link
                href="/shop"
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-2

                  bg-[#D5B06B]
                  text-[#5B060C]

                  px-7
                  py-3.5

                  rounded-xl

                  font-semibold

                  transition-all
                  duration-300

                  hover:scale-[1.02]
                  hover:bg-[#E1BE7A]
                "
              >
                Explore Collections
                <ArrowRight size={18} />
              </Link>

              <Link
                href="/planning"
                className="
                  inline-flex
                  items-center
                  justify-center

                  border
                  border-white/20

                  text-white

                  px-7
                  py-3.5

                  rounded-xl

                  font-semibold

                  transition-all
                  duration-300

                  hover:bg-white/10
                "
              >
                Start Planning
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}