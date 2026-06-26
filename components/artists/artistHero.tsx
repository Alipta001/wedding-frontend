import Image from "next/image";

export default function ArtistHero() {
  return (
    <section className="py-12 lg:py-24">
      <div className="max-w-7xl mx-auto px-5">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div>
            <span className="uppercase tracking-[4px] text-[#A57C33] text-sm">
              DISCOVER OUR ARTISANS
            </span>

            <h1 className="mt-6 text-5xl lg:text-7xl font-serif text-[#7A1D22] leading-tight">
              Meet The Masters Behind Every Ritual
            </h1>

            <p className="mt-8 text-lg text-[#564240] leading-8">
              Discover India's finest traditional craftsmen preserving
              centuries-old techniques.
            </p>

            <button className="mt-10 px-8 py-4 bg-[#7A1D22] text-white rounded-xl">
              Explore Artisans
            </button>
          </div>

          <div>
            <Image
              src="/images/home/artisan1.png"
              alt=""
              width={700}
              height={800}
              className="rounded-[40px]"
            />
          </div>

        </div>
      </div>
    </section>
  );
}