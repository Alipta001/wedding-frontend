export default function CheckoutTimeline() {
  return (
    <div className="flex items-center gap-10">
      <div className="flex items-center gap-3">
        <div className="w-4 h-4 rounded-full bg-[#6B0F1A]" />
        <span className="font-medium text-[#6B0F1A]">
          Shipping
        </span>
      </div>

      <div className="flex items-center gap-3">
        <div className="w-4 h-4 rounded-full border-2 border-[#D6C8B8]" />
        <span className="text-[#777]">
          Review
        </span>
      </div>

      <div className="flex items-center gap-3">
        <div className="w-4 h-4 rounded-full border-2 border-[#D6C8B8]" />
        <span className="text-[#777]">
          Payment
        </span>
      </div>
    </div>
  );
}