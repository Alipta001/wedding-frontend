// import Link from "next/link";
// import Image from "next/image";

// export default function Hero() {
//   return (
//     <section
//       className="
//         relative
//         min-h-[calc(100svh-90px)]
//         grid
//         grid-cols-1
//         lg:grid-cols-2
//         bg-[#FAF6F0]
//         overflow-hidden
//       "
//     >
//       {/* Left Column: Content */}
//       <div
//         className="
//           flex
//           items-center
//           px-4
//           sm:px-8
//           md:px-12
//           lg:px-16
//           xl:px-24
//           py-12
//           lg:py-0
//           z-10
//           order-2
//           lg:order-1
//         "
//       >
//         <div className="max-w-[620px] mx-auto lg:mx-0">
//           <span
//             className="
//               uppercase
//               tracking-[3px]
//               text-[#9A7B3E]
//               font-semibold
//               text-sm
//             "
//           >
//             AUSPICIOUS LUXURY
//           </span>

//           <h1
//             className="
//               mt-5
//               text-[#5B060C]
//               font-serif
//               text-5xl
//               md:text-6xl
//               xl:text-7xl
//               leading-tight
//             "
//           >
//             Every Ritual.
//             <br />
//             <span className="italic">Made Easy.</span>
//           </h1>

//           <p
//             className="
//               mt-8
//               text-[#564240]
//               text-lg
//               leading-8
//               max-w-[550px]
//             "
//           >
//             From sacred puja essentials to beautifully curated wedding samagri
//             kits, discover everything needed for your celebrations.
//           </p>

//           <div
//             className="
//               mt-10
//               flex
//               flex-col
//               sm:flex-row
//               gap-4
//             "
//           >
//             <Link
//               href="#"
//               className="
//                 bg-[#722020]
//                 text-white
//                 px-8
//                 py-4
//                 rounded-lg
//                 font-medium
//                 text-center
//                 transition-colors
//                 hover:bg-[#5b1a1a]
//               "
//             >
//               Explore Kits
//             </Link>

//             <Link
//               href="#"
//               className="
//                 border
//                 border-[#9A7B3E]
//                 text-[#9A7B3E]
//                 px-8
//                 py-4
//                 rounded-lg
//                 font-medium
//                 text-center
//                 transition-colors
//                 hover:bg-[#9A7B3E]/10
//               "
//             >
//               View Artists
//             </Link>
//           </div>
//         </div>
//       </div>

//       {/* Right Column: Image Container */}
//       <div
//         className="
//           relative
//           h-[350px]
//           sm:h-[450px]
//           lg:h-full
//           w-full
//           order-1
//           lg:order-2
//         "
//       >
//         <Image
//           src="/images/home/hero.jpeg"
//           alt="Auspicious luxury ritual setup background"
//           fill
//           priority
//           sizes="(max-width: 1024px) 100vw, 50vw"
//           className="object-cover object-center"
//         />

//         {/* Subtle gradient overlay for smooth transition to the image on desktop */}
//         <div
//           className="
//             absolute
//             inset-0
//             bg-gradient-to-t
//             lg:bg-gradient-to-r
//             from-[#FAF6F0]
//             via-transparent
//             to-transparent
//           "
//         />
//       </div>
//     </section>
//   );
// }


// import Image from "next/image";
// import Link from "next/link";
// import { Star } from "lucide-react";

// export default function Hero() {
//   return (
//     <section className="bg-[#F6F1EA] overflow-hidden">
//       <div className="max-w-[1320px] mx-auto px-5 lg:px-8">
//         <div
//           className="
//             grid
//             lg:grid-cols-2
//             items-center
//             gap-10 lg:gap-16

//             min-h-[700px]
//             lg:min-h-[calc(100vh-90px)]

//             py-12
//           "
//         >
//           {/* LEFT CONTENT */}

//           <div
//             className="
//               order-2
//               lg:order-1
//               max-w-[520px]
//             "
//           >
//             <span
//               className="
//                 uppercase
//                 tracking-[4px]
//                 text-[#A57C33]
//                 text-sm
//                 font-medium
//               "
//             >
//               AUSPICIOUS LUXURY
//             </span>

//             <h1
//               className="
//                 mt-5
//                 font-serif
//                 leading-[0.95]
//               "
//             >
//               <span
//                 className="
//                   block
//                   text-[#7A1D22]

//                   text-[42px]
//                   sm:text-[58px]
//                   lg:text-[72px]
//                 "
//               >
//                 Every Ritual.
//               </span>

//               <span
//                 className="
//                   block
//                   italic
//                   text-[#A57C33]

//                   text-[42px]
//                   sm:text-[58px]
//                   lg:text-[72px]

//                   mt-2
//                 "
//               >
//                 Made Easy.
//               </span>
//             </h1>

//             <p
//               className="
//                 mt-8
//                 text-[#564240]

//                 text-base
//                 md:text-lg

//                 leading-8
//                 max-w-[500px]
//               "
//             >
//               From sacred puja essentials to curated wedding samagri kits, we
//               bring the soul of Indian traditions to your modern doorstep with
//               editorial elegance.
//             </p>

//             <div className="flex flex-wrap gap-4 mt-10">
//               <Link
//                 href="#"
//                 className="
//                   bg-[#7A1D22]
//                   text-white

//                   px-10
//                   py-4

//                   rounded-xl
//                   font-medium

//                   hover:bg-[#66161A]
//                   transition
//                 "
//               >
//                 Explore Kits
//               </Link>

//               <Link
//                 href="#"
//                 className="
//                   border
//                   border-[#D5C1A0]

//                   text-[#A57C33]

//                   px-10
//                   py-4

//                   rounded-xl
//                   font-medium

//                   hover:bg-white
//                   transition
//                 "
//               >
//                 View Artists
//               </Link>
//             </div>
//           </div>

//           {/* RIGHT IMAGE */}

//           <div
//             className="
//               relative
//               flex
//               justify-center

//               order-1
//               lg:order-2
//             "
//           >
//             {/* Main Image Card */}

//             <div
//               className="
//                 relative

//                 bg-white

//                 w-full
//                 max-w-[600px]

//                 overflow-hidden

//                 rounded-t-[80px]
//                 rounded-b-none

//                 shadow-[0_20px_60px_rgba(0,0,0,0.08)]
//               "
//             >
//               <Image
//                 src="/images/home/hero.jpeg"
//                 alt="Rituo"
//                 width={600}
//                 height={700}
//                 priority
//                 className="
//                   w-full
//                   h-auto
//                   block
//                 "
//               />
//             </div>

//             {/* Floating Badge */}

//             {/* <div
//               className="
//     absolute

//     left-[-80px]
//     bottom-[-20px]

//     bg-white
//     opacity-80

//     rounded-3xl

//     px-5
//     py-4

//     max-w-[250px]

//     shadow-[0_12px_40px_rgba(0,0,0,0.10)]

//     z-20
//   "
//             >
//               <div className="flex items-center gap-2">
//                 <Star
//                   size={14}
//                   className="
//                     fill-[#A57C33]
//                     text-[#A57C33]
//                   "
//                 />

//                 <span
//                   className="
//                     text-[11px]
//                     font-semibold
//                     tracking-[1px]
//                     text-[#333]
//                   "
//                 >
//                   HANDCRAFTED SEAL
//                 </span>
//               </div>

//               <p
//                 className="
//                   mt-3
//                   text-sm
//                   text-[#666]
//                   leading-6
//                 "
//               >
//                 Authentic items, curated by experts for your sacred journey.
//               </p>
//             </div> */}
//             <div
//   className="
//     absolute

//     left-1/2
//     -translate-x-1/2

//     -bottom-12

//     lg:left-[-80px]
//     lg:translate-x-0
//     lg:bottom-[-20px]

//     bg-white/95
//     backdrop-blur-md

//     rounded-3xl

//     px-5
//     py-4

//     w-[90%]
//     max-w-[300px]

//     lg:w-auto
//     lg:max-w-[250px]

//     shadow-[0_12px_40px_rgba(0,0,0,0.10)]

//     z-20
//   "
// >
//   <div className="flex items-center gap-2">
//     <Star
//       size={14}
//       className="fill-[#A57C33] text-[#A57C33]"
//     />

//     <span
//       className="
//         text-[11px]
//         font-semibold
//         tracking-[1px]
//         text-[#333]
//       "
//     >
//       HANDCRAFTED SEAL
//     </span>
//   </div>

//   <p
//     className="
//       mt-3
//       text-sm
//       text-[#666]
//       leading-6
//     "
//   >
//     Authentic items, curated by experts for your sacred journey.
//   </p>
// </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }




import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";

export default function Hero() {
  return (
    <section className="bg-[#F6F1EA] overflow-hidden">
      <div className="max-w-[1320px] mx-auto px-5 lg:px-8">
        <div
          className="
            grid
            lg:grid-cols-2
            items-center
            gap-10 lg:gap-16

            min-h-[700px]
            lg:min-h-[calc(100vh-90px)]

            py-12
          "
        >
          {/* LEFT CONTENT */}

          <div
            className="
              order-2
              lg:order-1
              max-w-[520px]
            "
          >
            <span
              className="
                uppercase
                tracking-[4px]
                text-[#A57C33]
                text-sm
                font-medium
              "
            >
              AUSPICIOUS LUXURY
            </span>

            <h1
              className="
                mt-5
                font-serif
                leading-[0.95]
              "
            >
              <span
                className="
                  block
                  text-[#7A1D22]

                  text-[42px]
                  sm:text-[58px]
                  lg:text-[72px]
                "
              >
                Every Ritual.
              </span>

              <span
                className="
                  block
                  italic
                  text-[#A57C33]

                  text-[42px]
                  sm:text-[58px]
                  lg:text-[72px]

                  mt-2
                "
              >
                Made Easy.
              </span>
            </h1>

            <p
              className="
                mt-8
                text-[#564240]

                text-base
                md:text-lg

                leading-8
                max-w-[500px]
              "
            >
              From sacred puja essentials to curated wedding samagri kits, we
              bring the soul of Indian traditions to your modern doorstep with
              editorial elegance.
            </p>

            <div className="flex flex-wrap gap-4 mt-10">
              <Link
                href="#"
                className="
                  bg-[#7A1D22]
                  text-white

                  px-10
                  py-4

                  rounded-xl
                  font-medium

                  hover:bg-[#66161A]
                  transition
                "
              >
                Explore Kits
              </Link>

              <Link
                href="#"
                className="
                  border
                  border-[#D5C1A0]

                  text-[#A57C33]

                  px-10
                  py-4

                  rounded-xl
                  font-medium

                  hover:bg-white
                  transition
                "
              >
                View Artists
              </Link>
            </div>

            {/* MOBILE BADGE */}

            <div
              className="
                lg:hidden

                mt-8

                bg-white

                rounded-3xl

                px-5
                py-4

                shadow-[0_12px_40px_rgba(0,0,0,0.08)]
              "
            >
              <div className="flex items-center gap-2">
                <Star
                  size={14}
                  className="
                    fill-[#A57C33]
                    text-[#A57C33]
                  "
                />

                <span
                  className="
                    text-[11px]
                    font-semibold
                    tracking-[1px]
                    text-[#333]
                  "
                >
                  HANDCRAFTED SEAL
                </span>
              </div>

              <p
                className="
                  mt-3
                  text-sm
                  text-[#666]
                  leading-6
                "
              >
                Authentic items, curated by experts for your sacred journey.
              </p>
            </div>
          </div>

          {/* RIGHT IMAGE */}

          <div
            className="
              relative
              flex
              justify-center

              order-1
              lg:order-2
            "
          >
            {/* Main Image */}

            <div
              className="
                relative

                bg-white

                w-full
                max-w-[600px]

                overflow-hidden

                rounded-t-[80px]
                rounded-b-none

                shadow-[0_20px_60px_rgba(0,0,0,0.08)]
              "
            >
              <Image
                src="/images/home/hero.jpeg"
                alt="Rituo"
                width={600}
                height={700}
                priority
                className="
                  w-full
                  h-auto
                  block
                "
              />
            </div>

            {/* DESKTOP FLOATING BADGE */}

            <div
              className="
                hidden lg:block

                absolute

                left-[-80px]
                bottom-[-20px]

                bg-white/95
                backdrop-blur-md
                opacity-80

                rounded-3xl

                px-5
                py-4

                max-w-[250px]

                shadow-[0_12px_40px_rgba(0,0,0,0.10)]

                z-20
              "
            >
              <div className="flex items-center gap-2">
                <Star
                  size={14}
                  className="
                    fill-[#A57C33]
                    text-[#A57C33]
                  "
                />

                <span
                  className="
                    text-[11px]
                    font-semibold
                    tracking-[1px]
                    text-[#333]
                  "
                >
                  HANDCRAFTED SEAL
                </span>
              </div>

              <p
                className="
                  mt-3
                  text-sm
                  text-[#666]
                  leading-6
                "
              >
                Authentic items, curated by experts for your sacred journey.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}