"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Heart,
  ShieldCheck,
  Truck,
  RotateCcw,
} from "lucide-react";

const galleryImages = [
  "/images/details/details-banner1.png",
  "/images/details/details-banner2.png",
  "/images/details/details-banner3.png",
  "/images/details/details-banner1.png",
  "/images/details/details-banner2.png",
];

const colors = [
  {
    name: "Antique Brass",
    code: "#B08D57",
  },
  {
    name: "Copper",
    code: "#B87333",
  },
  {
    name: "Silver",
    code: "#C0C0C0",
  },
];

export default function ProductHero() {
  const [selectedImage, setSelectedImage] = useState(
    galleryImages[0]
  );

  const [selectedColor, setSelectedColor] = useState(
    colors[0]
  );

  return (
    <section className="bg-[#F8F1E9] py-12 lg:py-20">
      <div className="max-w-[1320px] mx-auto px-4 lg:px-6">
        {/* Breadcrumb */}

        <div className="mb-10 text-sm text-[#8A7766]">
          Home / Collections / Ritual Sets /
          <span className="text-[#7A0008] ml-1">
            Shanti Collection
          </span>
        </div>

        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-2
            gap-12
            xl:gap-20
          "
        >
          {/* LEFT SIDE */}

          <div>
            {/* Main Image */}

            <div
              className="
                relative
                aspect-[4/5]
                rounded-[32px]
                overflow-hidden
                bg-white
              "
            >
              <Image
                src={selectedImage}
                alt="Product"
                fill
                className="object-cover"
              />
            </div>

            {/* Thumbnails */}

            <div
              className="
                mt-5
                grid
                grid-cols-5
                gap-3
              "
            >
              {galleryImages.map((image) => (
                <button
                  key={image}
                  onClick={() =>
                    setSelectedImage(image)
                  }
                  className={`
                    relative
                    aspect-square
                    rounded-2xl
                    overflow-hidden
                    border-2
                    ${
                      selectedImage === image
                        ? "border-[#7A0008]"
                        : "border-transparent"
                    }
                  `}
                >
                  <Image
                    src={image}
                    alt="Thumbnail"
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE */}

          <div className="flex flex-col">
            {/* Badge */}

            <div className="flex gap-3 flex-wrap">
              <span
                className="
                  bg-[#F3E4D2]
                  text-[#7A0008]
                  text-xs
                  uppercase
                  tracking-[2px]
                  px-4
                  py-2
                  rounded-full
                "
              >
                Best Seller
              </span>

              <span
                className="
                  bg-[#EFE8DC]
                  text-[#A68445]
                  text-xs
                  uppercase
                  tracking-[2px]
                  px-4
                  py-2
                  rounded-full
                "
              >
                Handcrafted
              </span>
            </div>

            {/* Title */}

            <h1
              className="
                mt-6
                text-[#5B060C]
                font-serif
                text-4xl
                md:text-5xl
              "
            >
              Shanti Ritual Set
            </h1>

            <p
              className="
                mt-3
                text-[#A68445]
                uppercase
                tracking-[3px]
              "
            >
              Sacred Heritage Collection
            </p>

            {/* Price */}

            <div className="mt-8">
              <span
                className="
                  text-[#7A0008]
                  text-4xl
                  font-semibold
                "
              >
                ₹4,999
              </span>

              <span
                className="
                  ml-3
                  text-[#9E8A78]
                  line-through
                "
              >
                ₹6,499
              </span>
            </div>

            {/* Description */}

            <p
              className="
                mt-8
                text-[#5D4C43]
                leading-8
                text-lg
              "
            >
              A beautifully curated ritual collection
              featuring handcrafted brass accessories,
              sacred essentials, and ceremonial pieces
              designed to preserve tradition while
              complementing modern homes.
            </p>

            {/* Color */}

            <div className="mt-10">
              <h3
                className="
                  text-[#5B060C]
                  font-medium
                "
              >
                Select Finish
              </h3>

              <div className="flex gap-4 mt-4">
                {colors.map((color) => (
                  <button
                    key={color.name}
                    onClick={() =>
                      setSelectedColor(color)
                    }
                    className={`
                      w-10
                      h-10
                      rounded-full
                      border-2
                      transition
                      ${
                        selectedColor.name ===
                        color.name
                          ? "border-[#7A0008]"
                          : "border-[#DDD]"
                      }
                    `}
                    style={{
                      backgroundColor: color.code,
                    }}
                  />
                ))}
              </div>

              <p className="mt-3 text-[#666]">
                {selectedColor.name}
              </p>
            </div>

            {/* Buttons */}

            <div
              className="
                mt-10
                flex
                flex-col
                sm:flex-row
                gap-4
              "
            >
              <button
                className="
                  flex-1
                  bg-[#7A0008]
                  text-white
                  py-4
                  rounded-xl
                  font-medium
                  hover:bg-[#600006]
                  transition
                "
              >
                Add To Cart
              </button>

              <button
                className="
                  flex
                  items-center
                  justify-center
                  gap-2

                  border
                  border-[#D7C8B6]

                  px-8
                  py-4
                  rounded-xl

                  text-[#5B060C]
                "
              >
                <Heart size={18} />
                Wishlist
              </button>
            </div>

            {/* Trust */}

            <div
              className="
                mt-12
                grid
                grid-cols-1
                sm:grid-cols-3
                gap-5
              "
            >
              <div className="flex items-center gap-3">
                <ShieldCheck
                  size={22}
                  className="text-[#A68445]"
                />

                <span className="text-sm">
                  Authentic Craftsmanship
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Truck
                  size={22}
                  className="text-[#A68445]"
                />

                <span className="text-sm">
                  Free Shipping
                </span>
              </div>

              <div className="flex items-center gap-3">
                <RotateCcw
                  size={22}
                  className="text-[#A68445]"
                />

                <span className="text-sm">
                  Easy Returns
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}