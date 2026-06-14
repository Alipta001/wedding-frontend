"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { Star } from "lucide-react";

import "swiper/css";
import "swiper/css/pagination";

interface Testimonial {
  name: string;
  location: string;
  quote: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Priya Sharma",
    location: "BANGALORE",
    quote:
      "The Shanti set brought such a sense of calm to our Griha Pravesh. The quality of the brass items is heirloom-grade. Truly exceptional.",
  },
  {
    name: "Amitav Ghosh",
    location: "KOLKATA",
    quote:
      "Finding a complete, authentic wedding samagri kit was such a relief. Rituo saved us weeks of stressful sourcing. Beautiful packaging too!",
  },
  {
    name: "Meera Nair",
    location: "MUMBAI",
    quote:
      "The attention to detail in the Ritual Guide is incredible. It helped our family reconnect with traditions we had almost forgotten.",
  },
  {
    name: "Amitav Ghosh",
    location: "KOLKATA",
    quote:
      "Finding a complete, authentic wedding samagri kit was such a relief. Rituo saved us weeks of stressful sourcing. Beautiful packaging too!",
  },
  {
    name: "Priya Sharma",
    location: "BANGALORE",
    quote:
      "The Shanti set brought such a sense of calm to our Griha Pravesh. The quality of the brass items is heirloom-grade. Truly exceptional.",
  },
  {
    name: "Amitav Ghosh",
    location: "KOLKATA",
    quote:
      "Finding a complete, authentic wedding samagri kit was such a relief. Rituo saved us weeks of stressful sourcing. Beautiful packaging too!",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-[#F5EEE7] py-20 lg:py-20">
      <div className="max-w-[1320px] mx-auto px-4 lg:px-6">
        {/* Header */}

        <div className="text-center mb-14">
          <span
            className="
              uppercase
              tracking-[4px]
              text-[#A68445]
              text-sm
              font-medium
            "
          >
            KIND WORDS
          </span>

          <h2
            className="
              mt-4
              text-[#5B060C]
              text-4xl
              md:text-5xl
              lg:text-6xl
              font-serif
            "
          >
            Reflections of Joy
          </h2>
        </div>

        {/* Testimonials Slider */}

        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          loop
          spaceBetween={30}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1200: {
              slidesPerView: 3,
            },
          }}
          className="!pb-14"
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div
                className="
                  bg-white
                  border
                  border-[#E9DED2]
                  rounded-[28px]
                  p-8
                  md:p-10
                  min-h-[320px]
                  flex
                  flex-col
                  justify-between
                  transition-all
                  duration-300
                  hover:shadow-xl
                "
              >
                {/* Stars */}

                <div className="flex gap-1.5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      strokeWidth={1.5}
                      className="fill-[#D4A43B] text-[#D4A43B]"
                    />
                  ))}
                </div>

                {/* Quote */}

                <p
                  className="
                    mt-6
                    text-[#564240]
                    leading-8
                    text-base
                    md:text-lg
                  "
                >
                  "{item.quote}"
                </p>

                {/* Client Info */}

                <div className="mt-8">
                  <h3
                    className="
                      text-[#5B060C]
                      text-2xl
                      font-serif
                    "
                  >
                    {item.name}
                  </h3>

                  <span
                    className="
                      mt-2
                      block
                      text-[#A68445]
                      text-xs
                      tracking-[3px]
                      uppercase
                    "
                  >
                    {item.location}
                  </span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}