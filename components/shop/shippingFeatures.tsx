import {
  Truck,
  ShieldCheck,
  RotateCcw,
  Gem,
} from "lucide-react";

const features = [
  {
    icon: Truck,
    title: "Free Shipping",
    description:
      "Complimentary delivery on all ritual collections.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Payments",
    description:
      "Protected transactions with trusted gateways.",
  },
  {
    icon: Gem,
    title: "Handcrafted Quality",
    description:
      "Authentic artisan-made sacred products.",
  },
  {
    icon: RotateCcw,
    title: "Easy Returns",
    description:
      "Hassle-free return and replacement policy.",
  },
];

export default function ShippingFeatures() {
  return (
    <section className="bg-[#F4ECE3] py-20">
      <div className="max-w-[1320px] mx-auto px-4 lg:px-6">
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-4
            gap-8
          "
        >
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="
                  bg-white
                  rounded-[28px]
                  p-8
                  text-center
                  border
                  border-[#E8DDD0]
                "
              >
                <div
                  className="
                    w-16
                    h-16
                    mx-auto
                    rounded-full
                    bg-[#FAF6F0]
                    flex
                    items-center
                    justify-center
                  "
                >
                  <Icon
                    size={28}
                    className="text-[#722020]"
                  />
                </div>

                <h3
                  className="
                    mt-6
                    text-[#5B060C]
                    text-2xl
                    font-serif
                  "
                >
                  {feature.title}
                </h3>

                <p
                  className="
                    mt-3
                    text-[#564240]
                    leading-7
                  "
                >
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}