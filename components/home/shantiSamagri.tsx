import Image from "next/image";
import Link from "next/link";

export default function ShantiSamagri() {
  return (
    <section className="bg-[#F4ECE3] py-12 lg:py-20 overflow-hidden">
      <div className="max-w-[1320px] mx-auto px-4 lg:px-6">
        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-2
            gap-10
            lg:gap-20
            items-center
          "
        >
          {/* Image Side */}

          <div className="relative">
            <div
              className="
                relative
                overflow-hidden
                rounded-[32px]
                h-[450px]
                md:h-[600px]
                lg:h-[700px]
              "
            >
              <Image
                src="/images/home/shantiImg1.png"
                alt="Shanti Samagri"
                fill
                className="object-cover"
              />
            </div>

            {/* Floating Badge */}

            <div
              className="
                absolute
                -bottom-6
                right-4
                md:right-8
                lg:-right-10
                bg-white
                rounded-[24px]
                shadow-2xl
                px-6
                py-5
                w-[220px]
                border
                border-[#EFE4D9]
              "
            >
              <p
                className="
                  text-xs
                  uppercase
                  tracking-[2px]
                  text-[#9A7B3E]
                "
              >
                Featured Collection
              </p>

              <h4
                className="
                  mt-2
                  font-serif
                  text-xl
                  text-[#5B060C]
                "
              >
                108 Sacred
                Essentials
              </h4>

              <p className="mt-2 text-sm text-[#564240]">
                Hand-selected ritual items
                for complete ceremonies.
              </p>
            </div>
          </div>

          {/* Content Side */}

          <div>
            <span
              className="
                uppercase
                tracking-[3px]
                text-[#9A7B3E]
                text-sm
                font-semibold
              "
            >
              Editorial Selection
            </span>

            <h2
              className="
                mt-5
                text-4xl
                md:text-5xl
                lg:text-6xl
                leading-tight
                font-serif
                text-[#5B060C]
              "
            >
              The Shanti
              <br />
              Samagri Set
            </h2>

            <p
              className="
                mt-8
                text-[#564240]
                leading-8
                text-lg
              "
            >
              A complete sacred collection curated for
              peace rituals, grihapravesh ceremonies,
              vastu puja, and traditional family
              occasions.
            </p>

            <p
              className="
                mt-6
                text-[#564240]
                leading-8
              "
            >
              Every item is sourced from trusted
              artisans and priests to ensure ritual
              authenticity while maintaining premium
              craftsmanship and presentation.
            </p>

            {/* Features */}

            <div
              className="
                mt-10
                grid
                grid-cols-1
                sm:grid-cols-2
                gap-5
              "
            >
              {[
                "Priest Approved",
                "Premium Packaging",
                "108 Essential Items",
                "Nationwide Delivery",
              ].map((item) => (
                <div
                  key={item}
                  className="
                    flex
                    items-center
                    gap-3
                  "
                >
                  <div
                    className="
                      h-2.5
                      w-2.5
                      rounded-full
                      bg-[#9A7B3E]
                    "
                  />

                  <span className="text-[#2B2520]">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA */}

            <div
              className="
                mt-12
                flex
                flex-col
                sm:flex-row
                gap-4
              "
            >
              <Link
                href="#"
                className="
                  bg-[#722020]
                  text-white
                  px-8
                  py-4
                  rounded-xl
                  text-center
                  font-medium
                  hover:bg-[#5B060C]
                  transition
                "
              >
                Explore Collection
              </Link>

              <Link
                href="#"
                className="
                  border
                  border-[#9A7B3E]
                  text-[#9A7B3E]
                  px-8
                  py-4
                  rounded-xl
                  text-center
                  font-medium
                  hover:bg-[#9A7B3E]
                  hover:text-white
                  transition
                "
              >
                Learn More
              </Link>
            </div>

            {/* Stats */}

            <div
              className="
                mt-14
                grid
                grid-cols-3
                gap-6
                pt-8
                border-t
                border-[#DCCDBE]
              "
            >
              <div>
                <h3
                  className="
                    text-2xl
                    md:text-3xl
                    font-serif
                    text-[#5B060C]
                  "
                >
                  108+
                </h3>

                <p className="mt-2 text-sm text-[#564240]">
                  Ritual Items
                </p>
              </div>

              <div>
                <h3
                  className="
                    text-2xl
                    md:text-3xl
                    font-serif
                    text-[#5B060C]
                  "
                >
                  5k+
                </h3>

                <p className="mt-2 text-sm text-[#564240]">
                  Families Served
                </p>
              </div>

              <div>
                <h3
                  className="
                    text-2xl
                    md:text-3xl
                    font-serif
                    text-[#5B060C]
                  "
                >
                  4.9★
                </h3>

                <p className="mt-2 text-sm text-[#564240]">
                  Customer Rating
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}