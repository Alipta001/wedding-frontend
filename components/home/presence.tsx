import Image from "next/image";
import Link from "next/link";

export default function Presence() {
  return (
    <section className="bg-[#F4ECE3] py-12 lg:py-20">
      <div className="max-w-[1320px] mx-auto px-4 lg:px-6">
        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-2
            gap-12
            lg:gap-20
            items-center
          "
        >
          {/* Content */}

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
              Our Presence
            </span>

            <h2
              className="
                mt-5
                text-4xl
                md:text-5xl
                lg:text-6xl
                font-serif
                leading-tight
                text-[#5B060C]
              "
            >
              Bringing Sacred
              Traditions To
              Modern Families
            </h2>

            <p
              className="
                mt-8
                text-lg
                leading-8
                text-[#564240]
              "
            >
              Whether you're planning a wedding,
              housewarming ceremony, or festive ritual,
              our carefully curated collections ensure
              every tradition is celebrated authentically.
            </p>

            <div
              className="
                mt-10
                grid
                grid-cols-2
                gap-6
              "
            >
              <div>
                <h3
                  className="
                    text-4xl
                    font-serif
                    text-[#722020]
                  "
                >
                  50K+
                </h3>

                <p className="mt-2 text-[#564240]">
                  Rituals Completed
                </p>
              </div>

              <div>
                <h3
                  className="
                    text-4xl
                    font-serif
                    text-[#722020]
                  "
                >
                  200+
                </h3>

                <p className="mt-2 text-[#564240]">
                  Artisan Partners
                </p>
              </div>

              <div>
                <h3
                  className="
                    text-4xl
                    font-serif
                    text-[#722020]
                  "
                >
                  100+
                </h3>

                <p className="mt-2 text-[#564240]">
                  Cities Served
                </p>
              </div>

              <div>
                <h3
                  className="
                    text-4xl
                    font-serif
                    text-[#722020]
                  "
                >
                  4.9★
                </h3>

                <p className="mt-2 text-[#564240]">
                  Customer Rating
                </p>
              </div>
            </div>

            <Link
              href="#"
              className="
                inline-flex
                mt-10
                bg-[#722020]
                text-white
                px-8
                py-4
                rounded-xl
                font-medium
                hover:bg-[#5B060C]
                transition
              "
            >
              Discover More
            </Link>
          </div>

          {/* Image Grid */}

          <div
            className="
              grid
              grid-cols-2
              gap-4
            "
          >
            <div className="space-y-4">
              <div
                className="
                  relative
                  h-[220px]
                  md:h-[300px]
                  rounded-[28px]
                  overflow-hidden
                "
              >
                <Image
                  src="/images/home/curateimg1.png"
                  alt="Presence"
                  fill
                  className="object-cover"
                />
              </div>

              <div
                className="
                  relative
                  h-[300px]
                  md:h-[380px]
                  rounded-[28px]
                  overflow-hidden
                "
              >
                <Image
                  src="/images/home/curateimg2.png"
                  alt="Presence"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="space-y-4 pt-10">
              <div
                className="
                  relative
                  h-[300px]
                  md:h-[380px]
                  rounded-[28px]
                  overflow-hidden
                "
              >
                <Image
                  src="/images/home/curateimg3.png"
                  alt="Presence"
                  fill
                  className="object-cover"
                />
              </div>

              <div
                className="
                  relative
                  h-[220px]
                  md:h-[300px]
                  rounded-[28px]
                  overflow-hidden
                "
              >
                <Image
                  src="/images/home/productsimg.png"
                  alt="Presence"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}