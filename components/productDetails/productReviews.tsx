import { Star } from "lucide-react";

export default function ProductReviews() {
  const reviews = [
    {
      name: "Priya Sharma",
      city: "Bangalore",
      review:
        "Exceptional craftsmanship and premium quality.",
    },
    {
      name: "Amitav Ghosh",
      city: "Kolkata",
      review:
        "Beautiful packaging and authentic products.",
    },
  ];

  return (
    <div className="pt-14">
      <div className="text-center">
        <h3
          className="
            text-6xl
            font-serif
            text-[#5B060C]
          "
        >
          4.9
        </h3>

        <div className="flex justify-center gap-1 mt-3">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={18}
              className="
                fill-[#D4A43B]
                text-[#D4A43B]
              "
            />
          ))}
        </div>
      </div>

      <div
        className="
          mt-12
          grid
          lg:grid-cols-2
          gap-8
        "
      >
        {reviews.map((review, index) => (
          <div
            key={index}
            className="
              bg-white
              border
              border-[#E5D7C8]
              rounded-[28px]
              p-8
            "
          >
            <p className="text-[#564240] leading-8">
              "{review.review}"
            </p>

            <div className="mt-6">
              <h4
                className="
                  text-xl
                  font-serif
                  text-[#5B060C]
                "
              >
                {review.name}
              </h4>

              <span
                className="
                  text-xs
                  uppercase
                  tracking-[2px]
                  text-[#A68445]
                "
              >
                {review.city}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}