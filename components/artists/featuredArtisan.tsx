import Image from "next/image";

export default function FeaturedArtisan() {
  return (
    <section className="py-24 bg-[#FAF6F0]">
      <div className="max-w-7xl mx-auto px-5">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          <Image
            src="/images/artists/woodcarver.png"
            alt=""
            width={700}
            height={800}
            className="rounded-3xl"
          />

          <div>
            <span className="text-[#A57C33] uppercase tracking-[3px]">
              FEATURED ARTISAN
            </span>

            <h2 className="mt-5 text-5xl font-serif text-[#7A1D22]">
              Shyamlal Sutradhar
            </h2>

            <p className="mt-6 text-[#564240] leading-8">
              Master woodcarver preserving centuries-old traditions through
              handcrafted ceremonial furniture and wedding keepsakes.
            </p>

            <button className="mt-8 px-8 py-4 bg-[#7A1D22] text-white rounded-xl">
              Visit Workshop
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}