import Image from "next/image";

export default function ArtisanSection() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-[1320px] mx-auto px-5">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div className="relative h-[500px] rounded-[32px] overflow-hidden">
            <Image
              src="/images/planning/pot.png"
              alt="Artisan"
              fill
              className="object-cover"
            />
          </div>

          <div>

            <span className="uppercase tracking-[4px] text-[#A68445] text-sm">
              Artisan Network
            </span>

            <h2 className="mt-5 font-serif text-[#5B060C] text-5xl">
              The Artisan's Touch
            </h2>

            <p className="mt-6 text-[#564240] leading-8 max-w-xl">
              Every checklist item is an opportunity for ritual.
              Connect with verified artisans, decorators,
              musicians, priests, and ceremonial experts who
              bring authenticity to every sacred moment.
            </p>

            <button
              className="
                mt-10
                bg-[#5B060C]
                text-white
                px-8
                py-4
                rounded-xl
                hover:bg-[#741018]
                transition
              "
            >
              Explore Directory
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}