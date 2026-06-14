
import Image from "next/image";
import Link from "next/link";

interface Artisan {
  id: number;
  name: string;
  craft: string;
  image: string;
  description: string;
}

const artisans: Artisan[] = [
  {
    id: 1,
    name: "Anirban Chatterjee",
    craft: "Traditional Brass Artisan",
    image: "/images/home/artisan1.png",
    description:
      "Preserving sacred metal craftsmanship passed down through generations.",
  },
  {
    id: 2,
    name: "Madhuri Devi",
    craft: "Handcrafted Ritual Decor",
    image: "/images/home/artisan2.png",
    description:
      "Creating timeless ceremonial pieces inspired by tradition.",
  },
  {
    id: 3,
    name: "Subhash Das",
    craft: "Temple Wood Carving",
    image: "/images/home/artisan3.png",
    description:
      "Expert in intricate sacred carvings and ritual architecture.",
  },
];

export default function Artisans() {
  return (
    <section className="bg-[#FAF6F0] py-20 lg:py-20">
      <div className="max-w-[1320px] mx-auto px-4 lg:px-6">
        {/* Header */}

        <div className="text-center max-w-3xl mx-auto">
          <span
            className="
              uppercase
              tracking-[3px]
              text-[#9A7B3E]
              text-sm
              font-semibold
            "
          >
            Meet The Makers
          </span>

          <h2
            className="
              mt-5
              text-4xl
              md:text-5xl
              lg:text-6xl
              font-serif
              text-[#5B060C]
              leading-tight
            "
          >
            The Artisans Behind
            <br />
            Every Sacred Piece
          </h2>

          <p
            className="
              mt-6
              text-[#564240]
              leading-8
              max-w-2xl
              mx-auto
            "
          >
            Every ritual item is handcrafted by skilled
            artisans preserving centuries-old traditions.
          </p>
        </div>

        {/* Artisans Grid */}

        <div
          className="
            mt-20
            grid
            grid-cols-1
            md:grid-cols-2
            xl:grid-cols-3
            gap-12
            xl:gap-16
          "
        >
          {artisans.map((artisan) => (
            <article
              key={artisan.id}
              className="
                group
                text-center
              "
            >
              {/* Circular Image */}

              <div
                className="
                  relative
                  mx-auto
                  w-[260px]
                  h-[260px]

                  sm:w-[300px]
                  sm:h-[300px]

                  lg:w-[340px]
                  lg:h-[340px]

                  rounded-full
                  overflow-hidden

                  border-[10px]
                  border-[#F4ECE3]

                  shadow-xl

                  transition-all
                  duration-500

                  group-hover:shadow-2xl
                "
              >
                <Image
                  src={artisan.image}
                  alt={artisan.name}
                  fill
                  className="
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-110
                  "
                />
              </div>

              {/* Content */}

              <div className="mt-8">
                <span
                  className="
                    uppercase
                    tracking-[2px]
                    text-xs
                    text-[#9A7B3E]
                    font-semibold
                  "
                >
                  {artisan.craft}
                </span>

                <h3
                  className="
                    mt-3
                    text-2xl
                    lg:text-3xl
                    font-serif
                    text-[#5B060C]
                  "
                >
                  {artisan.name}
                </h3>

                <p
                  className="
                    mt-5
                    text-[#564240]
                    leading-7
                    max-w-[320px]
                    mx-auto
                  "
                >
                  {artisan.description}
                </p>

                <Link
                  href="#"
                  className="
                    inline-flex
                    mt-6
                    font-semibold
                    text-[#722020]
                    hover:text-[#9A7B3E]
                    transition-colors
                  "
                >
                  View Story →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}