export default function MilestoneCard() {
  return (
    <div
      className="
        bg-white
        rounded-[28px]
        border border-[#EFE4D8]
        p-6
      "
    >
      <span
        className="
          text-[11px]
          tracking-[2px]
          uppercase
          text-[#A68445]
        "
      >
        Next Milestone
      </span>

      <h3
        className="
          mt-3
          text-2xl
          font-serif
          text-[#5B060C]
        "
      >
        Gaye Holud Setup
      </h3>

      <div
        className="
          mt-6
          h-2
          bg-[#EFE4D8]
          rounded-full
          overflow-hidden
        "
      >
        <div
          className="
            h-full
            w-[65%]
            bg-[#A68445]
          "
        />
      </div>

      <div
        className="
          mt-3

          flex
          justify-between

          text-sm
          text-[#777]
        "
      >
        <span>65% Journey Complete</span>
        <span>Expected Dec 1</span>
      </div>
    </div>
  );
}