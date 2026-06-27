export default function ExpertCTA() {
  return (
    <div className="relative mt-14 overflow-hidden rounded-3xl bg-[#7a1f1f] p-10 md:p-14 shadow-xl">
      {/* pattern overlay */}
      <div className="absolute right-0 top-0 h-full w-48 opacity-10 bg-[radial-gradient(circle_at_center,_white_1px,_transparent_1px)] bg-[length:18px_18px]" />

      <div className="relative flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
        {/* Text */}
        <div className="max-w-xl">
          <p className="text-[#ffb3ae] text-base md:text-lg leading-relaxed">
            Our artisan planning team can create bespoke digital collections
            tailored to your family's specific ancestral traditions.
          </p>
        </div>

        {/* Button */}
        <button className="rounded-full bg-[#feb700] px-10 py-4 text-base font-semibold text-[#6b4b00] transition hover:scale-[1.02] hover:bg-[#e5a400]">
          Consult an <br /> Expert
        </button>
      </div>
    </div>
  );
}