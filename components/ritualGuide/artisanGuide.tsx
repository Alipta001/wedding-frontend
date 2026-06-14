import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ArtisanGuide() {
  return (
    <section className="bg-[#F8F3EE] py-20 lg:py-32 overflow-hidden">
      <div className="max-w-[1320px] mx-auto px-5 lg:px-8">
        <div
          className="
            grid
            lg:grid-cols-2
            gap-16
            lg:gap-24
            items-center
          "
        >
          {/* Image Side */}

          <div className="flex justify-center lg:justify-start">
            <div
              className="
                relative
                w-full
                max-w-[520px]

                rotate-0
                md:-rotate-3

                transition-transform
                duration-500
              "
            >
              <div
                className="
                  relative
                  overflow-hidden
                  rounded-[32px]
                  shadow-[0_25px_60px_rgba(0,0,0,0.08)]
                "
              >
                <Image
                  src="/images/ritualGuide/artisantouch.png"
                  alt="Artisan Touch"
                  width={600}
                  height={700}
                  className="
                    w-full
                    h-auto
                    object-cover
                    transition-transform
                    duration-700
                    hover:scale-[1.03]
                  "
                />
              </div>
            </div>
          </div>

          {/* Content Side */}

          <div>
            <span
              className="
                uppercase
                tracking-[4px]
                text-[#A68445]
                text-sm
                font-semibold
              "
            >
              The Artisan's Touch
            </span>

            <h2
              className="
                mt-5
                font-serif
                text-[#5B060C]

                text-[42px]
                md:text-[56px]

                leading-[1.1]
              "
            >
              Preserving the
              <br />
              <span className="italic text-[#A68445]">
                Sanctity of Form.
              </span>
            </h2>

            <p
              className="
                mt-8
                text-[#564240]
                text-lg
                leading-9
                max-w-[620px]
              "
            >
              Every vessel and wick in our collection is forged
              by master artisans in Bishnupur and Nadia. By
              choosing Rituo, you aren't just buying a product;
              you are supporting a lineage of craft that has
              remained unchanged for centuries.
            </p>

            {/* Metrics */}

            <div
              className="
                flex
                gap-10
                md:gap-16

                mt-10
                py-8

                border-y
                border-[#E7DBCF]
              "
            >
              <div>
                <h3
                  className="
                    text-[#A68445]
                    font-serif
                    text-4xl
                  "
                >
                  100%
                </h3>

                <p
                  className="
                    mt-2
                    text-[11px]
                    tracking-[2px]
                    font-semibold
                    text-[#564240]
                  "
                >
                  SUSTAINABLY SOURCED
                </p>
              </div>

              <div>
                <h3
                  className="
                    text-[#A68445]
                    font-serif
                    text-4xl
                  "
                >
                  24+
                </h3>

                <p
                  className="
                    mt-2
                    text-[11px]
                    tracking-[2px]
                    font-semibold
                    text-[#564240]
                  "
                >
                  VILLAGE COOPERATIVES
                </p>
              </div>
            </div>

            {/* CTA */}

            <Link
              href="/artisans"
              className="
                inline-flex
                items-center
                gap-4
                mt-8

                text-[#A68445]
                font-semibold
                text-lg

                hover:text-[#7C5800]
                transition-colors
              "
            >
              Meet our Artisans

              <span
                className="
                  w-11
                  h-11

                  rounded-full
                  border
                  border-[#A68445]

                  flex
                  items-center
                  justify-center

                  transition-all
                  duration-300

                  hover:bg-[#A68445]
                  hover:text-white
                "
              >
                <ArrowRight size={16} />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}