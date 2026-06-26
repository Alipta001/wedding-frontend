// export default function BrandPanel() {
//   return (
//     <div
//       className="
//       hidden
//       lg:flex
//       flex-col
//       justify-between

//       h-[700px]

//       rounded-[40px]
//       overflow-hidden
//       relative

//       shadow-2xl
//     "
//     >
//       <img
//         src="/images/ritualGuide/sacred1.png"
//         alt="Wedding"
//         className="
//           absolute
//           inset-0
//           w-full
//           h-full
//           object-cover
//         "
//       />

//       <div
//         className="
//         absolute
//         inset-0
//         bg-gradient-to-b
//         from-black/10
//         via-black/20
//         to-black/70
//       "
//       />

//       <div className="relative z-10 p-10">
//         <span
//           className="
//           bg-white/20
//           backdrop-blur-md
//           px-4
//           py-2
//           rounded-full
//           text-white
//           text-sm
//         "
//         >
//           Est. 2024
//         </span>
//       </div>

//       <div className="relative z-10 p-10 text-white">
//         <h2
//           className="
//           font-serif
//           text-5xl
//           leading-tight
//         "
//         >
//           Rituals Crafted
//           <br />
//           With Heritage
//         </h2>

//         <p
//           className="
//           mt-6
//           text-lg
//           text-white/90
//           max-w-md
//         "
//         >
//           Discover authentic artisans, sacred
//           traditions, and timeless wedding rituals
//           curated for modern families.
//         </p>
//       </div>
//     </div>
//   );
// }

// export default function LoginBrandPanel() {
//   return (
//     <div className="hidden lg:block relative overflow-hidden">
//       <img
//         src="/images/ritualGuide/sacred1.png"
//         alt="Wedding"
//         className="
//           absolute
//           inset-0
//           w-full
//           h-full
//           object-cover
//         "
//       />

//       <div
//         className="
//           absolute
//           inset-0
//           bg-gradient-to-r
//           from-black/20
//           via-black/30
//           to-black/60
//         "
//       />

//       <div
//         className="
//           relative
//           z-10
//           h-full

//           flex
//           flex-col
//           justify-between

//           p-14
//           text-white
//         "
//       >
//         <div>
//           <span
//             className="
//               px-4
//               py-2

//               rounded-full

//               bg-white/15
//               backdrop-blur-md

//               text-sm
//             "
//           >
//             Curated Wedding Experiences
//           </span>
//         </div>

//         <div>
//           <h1
//             className="
//               font-serif
//               text-6xl
//               leading-tight
//               max-w-xl
//             "
//           >
//             Every Ritual,
//             <br />
//             Made Beautiful.
//           </h1>

//           <p
//             className="
//               mt-6
//               max-w-lg
//               text-lg
//               text-white/90
//             "
//           >
//             Discover authentic artisans,
//             sacred traditions, handcrafted gifts
//             and wedding rituals across Bengal.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }



"use client";

export default function LoginBrandPanel() {
return (
<div
className="
hidden
lg:flex

```
    relative
    overflow-hidden

    min-h-screen
  "
>
  {/* Background Image */}

  <img
    src="/images/ritualGuide/sacred1.png"
    alt="Wedding"
    className="
      absolute
      inset-0

      w-full
      h-full

      object-cover
      scale-105
    "
  />

  {/* Luxury Overlay */}

  <div
    className="
      absolute
      inset-0

      bg-gradient-to-br
      from-black/20
      via-black/45
      to-black/80
    "
  />

  {/* Decorative Glow */}

  <div
    className="
      absolute
      top-24
      left-16

      h-64
      w-64

      rounded-full

      bg-[#D4A54C]/20

      blur-3xl
    "
  />

  <div
    className="
      absolute
      bottom-20
      right-16

      h-72
      w-72

      rounded-full

      bg-[#7A1D22]/30

      blur-3xl
    "
  />

  {/* Content */}

  <div
    className="
      relative
      z-10

      flex
      flex-col
      justify-between

      w-full

      p-14
    "
  >
    {/* Top Badge */}

    <div>
      <span
        className="
          inline-flex
          items-center

          px-5
          py-2.5

          rounded-full

          bg-white/10
          backdrop-blur-md

          border
          border-white/20

          text-sm

          tracking-[3px]
          uppercase

          text-[#F4D28C]
        "
      >
        ✦ Curated Wedding Experiences
      </span>
    </div>

    {/* Main Content */}

    <div
      className="
        max-w-xl

        rounded-[32px]

        bg-white/10
        backdrop-blur-xl

        border
        border-white/10

        p-10
      "
    >
      <span
        className="
          uppercase

          tracking-[5px]

          text-sm

          text-[#D4A54C]
        "
      >
        Welcome To Rituo
      </span>

      <h1
        className="
          mt-5

          font-serif

          text-6xl
          leading-[1.1]

          text-white
        "
      >
        Every Ritual,
        <br />
        Made
        <br />
        Beautiful.
      </h1>

      <p
        className="
          mt-6

          text-lg
          leading-8

          text-white/85
        "
      >
        Discover authentic traditions,
        sacred rituals, trusted vendors,
        handcrafted gifts, and timeless
        wedding experiences across Bengal.
      </p>

      <div
        className="
          mt-8

          border-l-2
          border-[#D4A54C]

          pl-5

          italic

          text-white/80
        "
      >
        "Tradition is not the worship of
        ashes, but the preservation of
        fire."
      </div>
    </div>

    {/* Bottom Statistics */}

    <div
      className="
        flex
        gap-12

        text-white
      "
    >
      <div>
        <h3 className="text-3xl font-bold">
          500+
        </h3>

        <p className="text-white/70">
          Ritual Guides
        </p>
      </div>

      <div>
        <h3 className="text-3xl font-bold">
          2K+
        </h3>

        <p className="text-white/70">
          Wedding Products
        </p>
      </div>

      <div>
        <h3 className="text-3xl font-bold">
          1000+
        </h3>

        <p className="text-white/70">
          Happy Families
        </p>
      </div>
    </div>
  </div>
</div>
);
}
