import Image from "next/image";
import Link from "next/link";

export default function RitualKits() {
  return (
    <section className="py-20 lg:py-20 bg-[#FAF6F0]">
      <div className="max-w-[1320px] mx-auto px-4 lg:px-6">

        {/* Section Header */}

        <div className="mb-14">
          <span className="uppercase tracking-[3px] text-[#9A7B3E] text-sm font-semibold">
            Curated Collections
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-serif text-[#5B060C]">
            Ritual Kits
          </h2>

          <p className="mt-4 text-[#564240] max-w-2xl leading-8">
            Thoughtfully assembled kits containing everything required
            for sacred ceremonies, weddings, pujas, and traditional
            celebrations.
          </p>
        </div>

        {/* Masonry Layout */}

        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-[1.15fr_0.85fr]
            gap-6
          "
        >
          {/* Featured Large Card */}

          <div
            className="
              relative
              overflow-hidden
              rounded-[28px]
              min-h-[600px]
              group
            "
          >
            <Image
              src="/images/home/ritualimg3.png"
              alt="Wedding Ritual Kit"
              fill
              className="
                object-cover
                transition
                duration-700
                group-hover:scale-105
              "
            />

            <div
              className="
                absolute
                inset-0
                bg-gradient-to-t
                from-black/70
                via-black/20
                to-transparent
              "
            />

            <div
              className="
                absolute
                bottom-0
                left-0
                p-8
                lg:p-12
                text-white
              "
            >
              <span
                className="
                  text-xs
                  tracking-[3px]
                  uppercase
                "
              >
                Signature Collection
              </span>

              <h3
                className="
                  mt-3
                  text-3xl
                  md:text-5xl
                  font-serif
                "
              >
                Wedding
                <br />
                Samagri Kit
              </h3>

              <p
                className="
                  mt-5
                  max-w-md
                  text-white/90
                  leading-7
                "
              >
                Complete wedding essentials curated by
                experienced priests and artisans.
              </p>

              <Link
                href="#"
                className="
                  inline-flex
                  mt-8
                  px-7
                  py-3
                  bg-[#9A7B3E]
                  rounded-lg
                  font-medium
                "
              >
                Explore Collection
              </Link>
            </div>
          </div>

          {/* Right Side Cards */}

          <div className="flex flex-col gap-6">

            {/* Card 1 */}

            <div
              className="
                bg-white
                rounded-[28px]
                overflow-hidden
                shadow-sm
                border
                border-[#EFE4D9]
              "
            >
              <div className="grid md:grid-cols-2 h-full">

                <div className="relative min-h-[260px]">
                  <Image
                    src="/images/home/ritualimg1.png"
                    alt="Grihapravesh Kit"
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-7 flex flex-col justify-center">
                  <span
                    className="
                      uppercase
                      tracking-[3px]
                      text-xs
                      text-[#9A7B3E]
                    "
                  >
                    Sacred Essentials
                  </span>

                  <h3
                    className="
                      mt-3
                      text-2xl
                      font-serif
                      text-[#5B060C]
                    "
                  >
                    Grihapravesh Kit
                  </h3>

                  <p
                    className="
                      mt-4
                      text-[#564240]
                      leading-7
                    "
                  >
                    Traditional housewarming rituals with
                    premium quality samagri.
                  </p>

                  <Link
                    href="#"
                    className="
                      mt-5
                      text-[#9A7B3E]
                      font-semibold
                    "
                  >
                    Learn More →
                  </Link>
                </div>
              </div>
            </div>

            {/* Card 2 */}

            <div
  className="
    relative
    bg-[#722020]
    text-white
    rounded-[28px]
    p-8
    lg:p-10
    flex
    flex-col
    justify-center
    min-h-[280px]
    overflow-hidden
  "
>
  {/* Background Image */}
  <div className="absolute inset-0 z-0">
    <Image
      src="/images/home/ritualimg2.png"
      alt="Monthly Ritual Box background"
      fill
      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      className="object-cover object-center"
    />
  </div>

  {/* Overlay Tint for Readability */}
  <div className="absolute inset-0 z-10 bg-[#722020]/85 mix-blend-multiply" />

  {/* Content */}
  <div className="relative z-20 flex flex-col justify-center h-full">
    <span
      className="
        uppercase
        tracking-[3px]
        text-xs
        text-[#D7BE85]
      "
    >
      Priest Approved
    </span>

    <h3
      className="
        mt-4
        text-3xl
        font-serif
      "
    >
      Monthly
      <br />
      Ritual Box
    </h3>

    <p
      className="
        mt-5
        text-white/80
        leading-8
      "
    >
      Receive carefully selected ritual essentials every month according to the
      auspicious calendar.
    </p>

    <div className="mt-8">
      <Link
        href="#"
        className="
          inline-flex
          items-center
          gap-2
          text-[#D7BE85]
          font-semibold
        "
      >
        Subscribe Now →
      </Link>
    </div>
  </div>
</div>

          </div>
        </div>

      </div>
    </section>
  );
}