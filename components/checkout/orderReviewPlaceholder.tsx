// import { Lock } from "lucide-react";

// export default function OrderReviewPlaceholder() {
//   return (
//     <div className="bg-white rounded-[28px] p-8 border border-[#EFE4D8]">
//       <div className="flex items-center justify-between">
//         <h2 className="text-2xl font-serif text-[#6B0F1A]">
//           Order Review
//         </h2>

//         <Lock size={18} />
//       </div>

//       <p className="mt-4 text-[#777]">
//         Complete shipping information to unlock review.
//       </p>
//     </div>
//   );
// }

import { Package, Truck } from "lucide-react";

const items = [
  {
    id: 1,
    name: "Handwoven Banarasi Saree",
    variant: "Maroon Gold • Silk",
    price: "₹24,500",
    qty: 1,
    image: "/images/shop/allessentials1.png",
  },
  {
    id: 2,
    name: "Shankha Pola Set",
    variant: "Traditional Bridal",
    price: "₹5,200",
    qty: 1,
    image: "/images/shop/allessentials2.png",
  },
];

export default function OrderReview() {
  return (
    <div className="bg-white rounded-[28px] p-8 border border-[#EFE4D8]">
      {/* Header */}

      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-3xl font-serif text-[#6B0F1A]">
            Order Review
          </h2>

          <p className="text-sm text-[#7A6B65] mt-1">
            Review your selected ritual essentials
          </p>
        </div>

        <Package
          size={22}
          className="text-[#B8860B]"
        />
      </div>

      {/* Items */}

      <div className="space-y-4">
        {items.map((item) => (
          <div
            key={item.id}
            className="
              flex
              items-center
              gap-5

              p-4

              rounded-2xl

              border
              border-[#EFE4D8]

              hover:shadow-md
              transition-all
            "
          >
            <img
              src={item.image}
              alt={item.name}
              className="
                w-24
                h-24

                rounded-xl

                object-cover
              "
            />

            <div className="flex-1">
              <h3 className="font-medium text-[#3D2B28]">
                {item.name}
              </h3>

              <p className="text-sm text-[#8B7A73] mt-1">
                {item.variant}
              </p>

              <p className="text-sm text-[#8B7A73] mt-2">
                Qty: {item.qty}
              </p>
            </div>

            <div className="text-right">
              <p className="font-semibold text-[#6B0F1A] text-lg">
                {item.price}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Shipping Info */}

      <div
        className="
          mt-8

          flex
          items-center
          gap-3

          bg-[#FFF8EB]

          p-4

          rounded-2xl
        "
      >
        <Truck
          size={18}
          className="text-[#B8860B]"
        />

        <div>
          <p className="font-medium text-[#3D2B28]">
            Estimated Delivery
          </p>

          <p className="text-sm text-[#7A6B65]">
            3 - 5 business days
          </p>
        </div>
      </div>
    </div>
  );
}