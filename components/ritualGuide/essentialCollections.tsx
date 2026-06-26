"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import { ChevronLeft, ChevronRight, Plus } from "lucide-react";

import Image from "next/image";

import "swiper/css";
import "swiper/css/navigation";

const collections = [
  {
    id: 1,
    title: "Etched Brass Dhunuchi",
    description: "Limited Edition Heritage Series",
    price: "₹3,200",
    image: "/images/ritualGuide/collections1.png",
    badge: "BEST SELLER",
  },
  {
    id: 2,
    title: "Sacred Sandalwood Candle",
    description: "Hand-poured in small batches",
    price: "₹1,850",
    image: "/images/ritualGuide/collections2.png",
  },
  {
    id: 3,
    title: "Pure Silver Shanka",
    description: "Hallmarked Sterling Silver",
    price: "₹18,000",
    image: "/images/ritualGuide/collections3.png",
  },
  {
    id: 4,
    title: "Sacred Sandalwood Candle",
    description: "Hand-poured in small batches",
    price: "₹1,850",
    image: "/images/ritualGuide/artisantouch.png",
  },
];

export default function EssentialCollections() {
  return (
    <section className="bg-[#F8F3EE] py-12 lg:py-24 overflow-hidden">
      <div className="max-w-[1320px] mx-auto px-5 lg:px-8">
        {/* Header */}

        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 mb-14">
          <div>
            <h2
              className="
                text-[#5B060C]
                font-serif

                text-4xl
                md:text-5xl
                lg:text-6xl
              "
            >
              Essential Collections
            </h2>

            <p
              className="
                mt-4
                text-[#564240]
                text-lg
              "
            >
              Handpicked for your auspicious journey.
            </p>
          </div>

          {/* Navigation */}

          <div className="flex gap-3">
            <button
              className="
                collections-prev

                w-12
                h-12

                rounded-full
                border
                border-[#D8C8B5]

                flex
                items-center
                justify-center

                text-[#5B060C]

                hover:bg-[#5B060C]
                hover:text-white

                transition
              "
            >
              <ChevronLeft size={20} />
            </button>

            <button
              className="
                collections-next

                w-12
                h-12

                rounded-full
                border
                border-[#D8C8B5]

                flex
                items-center
                justify-center

                text-[#5B060C]

                hover:bg-[#5B060C]
                hover:text-white

                transition
              "
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Slider */}

        <Swiper
          modules={[Navigation]}
          navigation={{
            prevEl: ".collections-prev",
            nextEl: ".collections-next",
          }}
          spaceBetween={28}
          breakpoints={{
            320: {
              slidesPerView: 1.1,
            },
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
            1280: {
              slidesPerView: 3,
            },
          }}
        >
          {collections.map((item) => (
            <SwiperSlide key={item.id}>
              <article
                className="
                  group

                  bg-white
                  rounded-[28px]

                  overflow-hidden

                  border
                  border-[#E8DDD0]

                  transition-all
                  duration-300

                  hover:-translate-y-2
                  hover:shadow-xl
                "
              >
                {/* Image */}

                <div
                  className="
                    relative
                    h-[340px]

                    bg-[#F5F0EA]
                  "
                >
                  {item.badge && (
                    <span
                      className="
                        absolute
                        top-5
                        left-5
                        z-10

                        bg-[#5B060C]
                        text-white

                        text-[11px]
                        font-semibold

                        px-3
                        py-2

                        rounded-full

                        tracking-[1px]
                      "
                    >
                      {item.badge}
                    </span>
                  )}

                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="
                      object-cover
                      transition-transform
                      duration-500
                      group-hover:scale-105
                    "
                  />
                </div>

                {/* Content */}

                <div className="p-7">
                  <h3
                    className="
                      text-[#5B060C]
                      font-serif
                      text-2xl
                    "
                  >
                    {item.title}
                  </h3>

                  <p
                    className="
                      mt-3
                      text-[#7A6A5D]
                      leading-7
                    "
                  >
                    {item.description}
                  </p>

                  <div
                    className="
                      mt-6

                      flex
                      items-center
                      justify-between
                    "
                  >
                    <span
                      className="
                        text-[#A68445]
                        font-semibold
                        text-xl
                      "
                    >
                      {item.price}
                    </span>

                    <button
                      className="
                        w-11
                        h-11

                        rounded-full

                        bg-[#5B060C]
                        text-white

                        flex
                        items-center
                        justify-center

                        hover:bg-[#7A0A13]

                        transition
                      "
                    >
                      <Plus size={18} />
                    </button>
                  </div>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
