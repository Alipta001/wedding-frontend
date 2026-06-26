import { ArrowRight } from "lucide-react";

export default function CompletePurchaseButton() {
  return (
    <button
      className="
        w-full
        h-14

        mt-8

        rounded-full

        bg-[#6B0F1A]
        text-white

        font-medium

        flex
        items-center
        justify-center
        gap-2

        hover:bg-[#5A0C15]
        transition-all
      "
    >
      Complete Purchase

      <ArrowRight size={18} />
    </button>
  );
}