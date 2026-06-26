// "use client";

// export default function RegisterBrandPanel() {
//   return (
//     <div
//       className="
//         hidden
//         lg:flex

//         relative
//         overflow-hidden
//       "
//     >
//       <img
//         src="/images/orders/order1.png"
//         alt="Wedding"
//         className="
//           absolute
//           inset-0

//           h-full
//           w-full

//           object-cover
//         "
//       />

//       <div className="absolute inset-0 bg-black/30" />

//       <div
//         className="
//           relative
//           z-10

//           flex
//           flex-col
//           justify-end

//           p-14

//           text-white
//         "
//       >
//         <span className="tracking-[4px] text-sm uppercase">
//           Rituo
//         </span>

//         <h2
//           className="
//             mt-4

//             text-5xl

//             font-serif
//             leading-tight
//           "
//         >
//           Plan Every Ritual
//           <br />
//           With Confidence
//         </h2>

//         <p
//           className="
//             mt-6

//             text-white/90

//             max-w-lg
//           "
//         >
//           Discover authentic wedding
//           rituals, trusted vendors, and
//           curated essentials for your
//           special day.
//         </p>
//       </div>
//     </div>
//   );
// }


"use client";

export default function RegisterBrandPanel() {
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
    src="/images/orders/order1.png"
    alt="Wedding"
    className="
      absolute
      inset-0

      h-full
      w-full

      object-cover
      scale-105
    "
  />

  {/* Premium Gradient Overlay */}

  <div
    className="
      absolute
      inset-0

      bg-gradient-to-b
      from-black/20
      via-black/40
      to-black/75
    "
  />

  {/* Decorative Blur */}

  <div
    className="
      absolute
      top-20
      left-20

      h-52
      w-52

      rounded-full

      bg-[#D4A54C]/20

      blur-3xl
    "
  />

  <div
    className="
      absolute
      bottom-20
      right-20

      h-64
      w-64

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

          px-4
          py-2

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
        ✦ Premium Wedding Experience
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
          text-[#D4A54C]
          uppercase
          tracking-[5px]
          text-sm
        "
      >
        Rituo
      </span>

      <h2
        className="
          mt-6

          text-6xl

          font-serif
          leading-[1.1]

          text-white
        "
      >
        Plan Every
        <br />
        Ritual With
        <br />
        Confidence
      </h2>

      <p
        className="
          mt-6

          text-lg
          leading-8

          text-white/85
        "
      >
        Discover authentic wedding
        rituals, trusted vendors,
        curated essentials, and
        timeless traditions — all in
        one beautifully crafted
        platform.
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
        "Every wedding tells a story.
        Let Rituo help you write yours."
      </div>
    </div>

    {/* Bottom Stats */}

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
          1000+
        </h3>

        <p className="text-white/70">
          Happy Families
        </p>
      </div>

      <div>
        <h3 className="text-3xl font-bold">
          50+
        </h3>

        <p className="text-white/70">
          Wedding Experts
        </p>
      </div>
    </div>
  </div>
</div>


);
}
