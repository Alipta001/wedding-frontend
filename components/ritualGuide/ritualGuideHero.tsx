import Link from "next/link";

export default function RitualGuideHero() {
  return (
    <section
      className="
      relative
      min-h-[calc(100vh-90px)]
      flex
      items-center
      bg-cover
      bg-center
      "
      style={{
        backgroundImage:
          "linear-gradient(to right, rgba(255,248,241,.92) 25%, rgba(255,248,241,.4) 60%, rgba(0,0,0,.15)), url('/images/ritualGuide/banner-bg.png')",
      }}
    >
      <div className="max-w-[1320px] mx-auto px-5 w-full">
        <div className="max-w-[620px]">
          <span className="uppercase tracking-[2px] text-[#A57C33] text-sm font-semibold">
            THE MODERN HERITAGE SERIES
          </span>

          <h1 className="mt-6 font-serif text-[#5B060C] text-6xl lg:text-7xl leading-tight">
            Not just products.
            <br />
            But <span className="italic">presence.</span>
          </h1>

          <p className="mt-8 text-[#564240] text-lg leading-8">
            Bengali weddings are a symphony of sacred moments. We curate the
            essentials to help you honor every tradition with intentionality and
            grace.
          </p>

          <div className="flex gap-4 mt-10 flex-wrap">
            <Link
              href="#"
              className="bg-[#5B060C] text-white px-8 py-4 rounded-lg"
            >
              Start Planning
            </Link>

            <Link
              href="#"
              className="border border-[#A57C33] text-[#A57C33] px-8 py-4 rounded-lg"
            >
              View Collections
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
