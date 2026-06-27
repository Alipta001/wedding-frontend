export default function DownloadHeader() {
  return (
    <div
      className="
        relative overflow-hidden
        rounded-[24px] md:rounded-[32px]
        bg-gradient-to-r from-[#5B060C] to-[#7E1018]
        p-5 sm:p-6 md:p-10
        text-white shadow-lg
      "
    >
      {/* Decorative glow (smaller on mobile) */}
      <div className="absolute -right-16 -top-16 h-28 w-28 md:h-40 md:w-40 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute -bottom-16 -left-16 h-28 w-28 md:h-40 md:w-40 rounded-full bg-white/10 blur-3xl" />

      <div className="relative">
        {/* Title */}
        <h1 className="font-serif text-2xl sm:text-3xl md:text-5xl tracking-tight leading-tight">
          Digital Library
        </h1>

        {/* Description */}
        <p className="mt-3 md:mt-4 max-w-2xl text-sm md:text-base text-white/80 leading-relaxed">
          Access your ritual guides, digital invitations, certificates, and
          curated heritage assets — all in one elegant place.
        </p>

        {/* Tags */}
        <div className="mt-5 md:mt-6 flex flex-wrap gap-2 md:gap-4 text-[11px] sm:text-xs md:text-sm text-white/70">
          <span className="rounded-full bg-white/10 px-3 py-1 md:px-4 md:py-1">
            Purchased Assets
          </span>
          <span className="rounded-full bg-white/10 px-3 py-1 md:px-4 md:py-1">
            Instant Downloads
          </span>
          <span className="rounded-full bg-white/10 px-3 py-1 md:px-4 md:py-1">
            Lifetime Access
          </span>
        </div>
      </div>
    </div>
  );
}