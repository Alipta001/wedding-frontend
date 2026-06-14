// export default function ShopHero() {
//   return (
//     <section className="bg-[#FAF6F0] border-b border-[#E8DDD0]">
//       <div className="max-w-[1320px] mx-auto px-4 lg:px-6 py-16 lg:py-24">
//         <div className="text-center">
//           <span
//             className="
//               uppercase
//               tracking-[4px]
//               text-[#A68445]
//               text-sm
//               font-medium
//             "
//           >
//             Ritual Collections
//           </span>

//           <h1
//             className="
//               mt-4
//               text-[#5B060C]
//               font-serif
//               text-5xl
//               md:text-6xl
//               lg:text-7xl
//             "
//           >
//             The Somahar
//           </h1>

//           <p
//             className="
//               mt-6
//               max-w-[650px]
//               mx-auto
//               text-[#564240]
//               text-lg
//               leading-8
//             "
//           >
//             Discover ritual essentials, sacred décor,
//             handcrafted brassware, and curated ceremony kits.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// }


import Image from "next/image";
import Link from "next/link";

export default function ShopHero() {
  return (
    <section className="bg-[#F6F1EA] overflow-hidden">
      <div
        className="
          max-w-[1320px]
          mx-auto
          px-5
          lg:px-8

          min-h-[700px]
          lg:h-[calc(100vh-90px)]
        "
      >
        <div
          className="
            grid
            lg:grid-cols-2

            items-center

            gap-10
            lg:gap-20

            h-full

            py-12
            lg:py-0
          "
        >
          {/* Left Content */}

          <div className="max-w-[540px]">
            <span
              className="
                uppercase
                tracking-[4px]
                text-[#A57C33]
                text-sm
                font-medium
              "
            >
              Handcrafted Tradition
            </span>

            <h1
              className="
                mt-6
                font-serif
                text-[#7A1D22]

                text-[48px]
                sm:text-[60px]
                lg:text-[82px]

                leading-[0.95]
              "
            >
              Auspicious
              <br />
              Curations
            </h1>

            <p
              className="
                mt-8
                text-[#564240]

                text-base
                md:text-lg

                leading-8
                md:leading-10

                max-w-[520px]
              "
            >
              Elevate your sacred moments with our
              masterfully curated wedding essentials.
              Every piece is a testament to heritage,
              designed for the modern home.
            </p>

            <div
              className="
                mt-10
                flex
                flex-wrap
                gap-4
              "
            >
              <Link
                href="/products"
                className="
                  bg-[#7A1D22]
                  text-white

                  px-8
                  lg:px-10

                  py-4

                  rounded-xl
                  font-medium

                  transition
                  hover:bg-[#65181d]
                "
              >
                Explore Kits
              </Link>

              <Link
                href="/artisans"
                className="
                  border
                  border-[#D5C1A0]

                  text-[#A57C33]

                  px-8
                  lg:px-10

                  py-4

                  rounded-xl
                  font-medium

                  transition
                  hover:bg-white
                "
              >
                View Artists
              </Link>
            </div>
          </div>

          {/* Right Image */}

          <div className="relative">
            <div
              className="
                relative
                overflow-hidden

                rounded-[36px]

                h-[320px]
                sm:h-[420px]
                md:h-[500px]
                lg:h-[580px]

                shadow-xl
              "
            >
              <Image
                src="/images/shop/bannerimg.png"
                alt="Ritual Collection"
                fill
                priority
                className="object-cover"
              />

              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black/10
                  via-transparent
                  to-transparent
                "
              />
            </div>

            {/* Floating Card */}

            <div
              className="
                absolute

                left-4
                bottom-4

                sm:left-6
                sm:bottom-6

                bg-[#F9F2EB]

                rounded-[22px]

                px-5
                py-4

                sm:px-6
                sm:py-5

                max-w-[260px]
                sm:max-w-[320px]

                shadow-xl
                border
                border-[#E9DED2]
              "
            >
              <h3
                className="
                  text-[#7A1D22]
                  font-serif

                  text-xl
                  sm:text-2xl
                "
              >
                The Heritage Kit
              </h3>

              <p
                className="
                  mt-2
                  text-[#564240]

                  text-sm
                  sm:text-base

                  leading-6
                "
              >
                Everything you need for a divine wedding
                ceremony in one box.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}