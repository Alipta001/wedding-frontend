import {
  ShieldCheck,
  Truck,
  Sparkles,
  Leaf,
} from "lucide-react";

export default function TrustBanner() {
  const features = [
    {
      icon: ShieldCheck,
      title: "Trusted By Families",
    },
    {
      icon: Truck,
      title: "Global Delivery",
    },
    {
      icon: Sparkles,
      title: "Premium Ritual Kits",
    },
    {
      icon: Leaf,
      title: "Eco Packaging",
    },
  ];

  return (
    <section className="bg-[#F4ECE3] py-12">

      <div className="max-w-[1320px] mx-auto px-4">

        <div
          className="
            grid
            grid-cols-2
            lg:grid-cols-4
            gap-8
          "
        >
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="
                  flex
                  flex-col
                  items-center
                  text-center
                  gap-3
                "
              >
                <Icon
                  size={28}
                  className="text-[#722020]"
                />

                <p
                  className="
                    text-sm
                    font-semibold
                    tracking-wide
                  "
                >
                  {item.title}
                </p>
              </div>
            );
          })}
        </div>

      </div>

    </section>
  );
}