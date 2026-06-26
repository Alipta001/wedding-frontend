import { Award } from "lucide-react";

export default function MembershipCard() {
  return (
    <div
      className="
        bg-[#5B060C]
        text-white

        rounded-[28px]

        p-6
      "
    >
      <div
        className="
          h-14
          w-14

          rounded-full

          bg-white/10

          flex
          items-center
          justify-center
        "
      >
        <Award size={24} />
      </div>

      <h3 className="mt-6 text-2xl font-serif">
        Heritage Member
      </h3>

      <p className="mt-2 text-white/70">
        Verified Artisan Access
      </p>
    </div>
  );
}