// import Link from "next/link";

// export default function RitualGuideHero() {
//   return (
//     <section
//       className="
//       relative
//       min-h-[calc(100vh-90px)]
//       flex
//       items-center
//       bg-cover
//       bg-center
//       "
//       style={{
//         backgroundImage:
//           "linear-gradient(to right, rgba(255,248,241,.92) 25%, rgba(255,248,241,.4) 60%, rgba(0,0,0,.15)), url('/images/ritualGuide/banner-bg.png')",
//       }}
//     >
//       <div className="max-w-[1320px] mx-auto px-5 w-full pt-20 pb-20">
//         <div className="max-w-[620px]">
//           <span className="uppercase tracking-[2px] text-[#A57C33] text-sm font-semibold">
//             THE MODERN HERITAGE SERIES
//           </span>

//           <h1 className="mt-6 font-serif text-[#5B060C] text-6xl lg:text-7xl leading-tight">
//             Not just products.
//             <br />
//             But <span className="italic">presence.</span>
//           </h1>

//           <p className="mt-8 text-[#564240] text-lg leading-8">
//             Bengali weddings are a symphony of sacred moments. We curate the
//             essentials to help you honor every tradition with intentionality and
//             grace.
//           </p>

//           <div className="flex gap-4 mt-10 flex-wrap">
//             <Link
//               href="#"
//               className="bg-[#5B060C] text-white px-8 py-4 rounded-lg"
//             >
//               Start Planning
//             </Link>

//             <Link
//               href="#"
//               className="border border-[#A57C33] text-[#A57C33] px-8 py-4 rounded-lg"
//             >
//               View Collections
//             </Link>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }



import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function RitualGuideHero() {
  return (
    <section className="relative overflow-hidden bg-[#FAF6F0]">
      {/* Background Glow */}

      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#D5B06B]/10 rounded-full blur-3xl" />

      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-[#5B060C]/5 rounded-full blur-3xl" />

      <div className="max-w-[1320px] mx-auto px-5">
        <div
          className="
            min-h-screen
            lg:min-h-[calc(100vh-90px)]

            grid
            lg:grid-cols-2

            gap-10
            lg:gap-20

            pt-12
            lg:pt-24

            pb-12
            lg:pb-24

            items-center
          "
        >
          {/* ==========================
              MOBILE LAYOUT
          ========================== */}

          <div className="block lg:hidden relative z-10">
            {/* Eyebrow */}

            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-px bg-[#A68445]" />

              <span className="uppercase tracking-[3px] text-[#A68445] text-[11px] font-medium">
                The Modern Heritage Series
              </span>
            </div>

            {/* Heading */}

            <h1
              className="
                font-serif
                text-[#5B060C]

                text-[48px]
                leading-[0.95]
                tracking-[-1px]
              "
            >
              Rituals,
              <br />
              <span className="italic text-[#A68445]">Reimagined.</span>
            </h1>

            {/* Image immediately after heading */}

            <div className="relative mt-8 mb-8">
              <div
                className="
                  absolute
                  inset-0
                  m-auto

                  w-[280px]
                  h-[280px]

                  rounded-full
                  bg-[#D5B06B]/20

                  blur-3xl
                "
              />

              <img
                src="/images/ritualGuide/banner-bg.png"
                alt="Ritual Guide"
                className="
                  relative
                  z-10

                  w-full
                  rounded-[28px]

                  shadow-[0_25px_60px_rgba(0,0,0,0.15)]
                "
              />

              {/* Badge */}

              <div
                className="
                  absolute
                  top-4
                  right-4

                  bg-white/95
                  backdrop-blur-sm

                  px-4
                  py-2

                  rounded-full
                  shadow-md
                "
              >
                <span className="text-[10px] tracking-[2px] uppercase text-[#A68445]">
                  Heritage Collection
                </span>
              </div>
            </div>

            {/* Description */}

            <p
              className="
                text-[#564240]
                text-base
                leading-8
              "
            >
              A thoughtfully curated guide to Bengali wedding traditions, sacred
              ceremonies, and artisan-crafted essentials designed for modern
              families who wish to celebrate heritage with beauty, meaning, and
              grace.
            </p>

            {/* Buttons */}

            <div className="mt-8 flex flex-col gap-3">
              <Link
                href="/planning"
                className="
                  flex
                  items-center
                  justify-center
                  gap-2

                  bg-[#5B060C]
                  text-white

                  py-4
                  rounded-full
                "
              >
                Start Planning
                <ArrowRight size={18} />
              </Link>

              <Link
                href="/shop"
                className="
                  flex
                  items-center
                  justify-center

                  py-4

                  rounded-full

                  border
                  border-[#D5B06B]

                  text-[#A68445]
                "
              >
                Explore Rituals
              </Link>
            </div>

            {/* Stats */}

            {/* Stats */}

<div
  className="
    mt-8

    bg-white

    rounded-[24px]

    p-6

    shadow-[0_15px_50px_rgba(0,0,0,0.08)]

    relative
    z-50
  "
>
  <div className="flex items-center justify-between">
    <div>
      <p className="font-serif text-3xl text-[#5B060C]">
        25+
      </p>

      <span className="text-xs text-[#564240]">
        Sacred Rituals
      </span>
    </div>

    <div className="w-px h-10 bg-[#E5D8CA]" />

    <div>
      <p className="font-serif text-3xl text-[#5B060C]">
        100+
      </p>

      <span className="text-xs text-[#564240]">
        Artisan Partners
      </span>
    </div>
  </div>
</div>
          </div>

          {/* ==========================
              DESKTOP LEFT
          ========================== */}

          <div className="hidden lg:block relative z-10 lg:-mt-10">
            <div className="flex items-center gap-4 mb-10">
              <div className="w-16 h-px bg-[#A68445]" />

              <span className="uppercase tracking-[4px] text-[#A68445] text-xs font-medium">
                The Modern Heritage Series
              </span>
            </div>

            <h1
              className="
                font-serif
                text-[#5B060C]

                text-[92px]

                leading-[0.92]
                tracking-[-2px]
              "
            >
              Rituals,
              <br />
              <span className="italic text-[#A68445]">Reimagined.</span>
            </h1>

            <p
              className="
                mt-8

                max-w-[560px]

                text-[#564240]

                text-xl

                leading-9
              "
            >
              A thoughtfully curated guide to Bengali wedding traditions, sacred
              ceremonies, and artisan-crafted essentials designed for modern
              families who wish to celebrate heritage with beauty, meaning, and
              grace.
            </p>

            <div className="mt-12 flex gap-4">
              <Link
                href="/planning"
                className="
                  inline-flex
                  items-center
                  gap-3

                  bg-[#5B060C]
                  text-white

                  px-8
                  py-4

                  rounded-full

                  shadow-lg
                "
              >
                Start Planning
                <ArrowRight size={18} />
              </Link>

              <Link
                href="/shop"
                className="
                  px-8
                  py-4

                  rounded-full

                  border
                  border-[#D5B06B]

                  text-[#A68445]
                "
              >
                Explore Rituals
              </Link>
            </div>
          </div>

          {/* ==========================
              DESKTOP IMAGE
          ========================== */}

<div className="hidden lg:flex relative justify-end">
  {/* Glow */}

  <div
    className="
      absolute
      top-1/2
      left-1/2

      -translate-x-1/2
      -translate-y-1/2

      w-[700px]
      h-[700px]

      rounded-full

      bg-[#D5B06B]/15

      blur-3xl
    "
  />

  <div className="relative w-full max-w-[900px]">
    <img
      src="/images/ritualGuide/banner-bg.png"
      alt="Ritual Guide"
      className="
        relative
        z-10

        w-full

        rounded-[40px]

        object-cover

        shadow-[0_40px_100px_rgba(0,0,0,0.18)]
      "
    />

    {/* Floating Stats */}

    <div
      className="
        absolute
        -bottom-10
        -left-10

        bg-white

        rounded-[28px]

        px-8
        py-6

        shadow-[0_25px_80px_rgba(0,0,0,0.12)]

        z-50
      "
    >
      <div className="flex items-center gap-8">
        <div>
          <p className="text-3xl font-serif text-[#5B060C]">
            25+
          </p>

          <span className="text-sm text-[#564240]">
            Sacred Rituals
          </span>
        </div>

        <div className="w-px h-12 bg-[#E5D8CA]" />

        <div>
          <p className="text-3xl font-serif text-[#5B060C]">
            100+
          </p>

          <span className="text-sm text-[#564240]">
            Artisan Partners
          </span>
        </div>
      </div>
    </div>

    {/* Badge */}

    <div
      className="
        absolute
        top-6
        right-6

        bg-white/95
        backdrop-blur-sm

        px-5
        py-3

        rounded-full

        shadow-md

        z-20
      "
    >
      <span className="text-xs tracking-[3px] uppercase text-[#A68445]">
        Heritage Collection
      </span>
    </div>
  </div>
</div>
        </div>
      </div>
    </section>
  );
}
