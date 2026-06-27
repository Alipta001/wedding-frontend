export default function AddressHeader() {
  return (
    <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-r from-[#5B060C] to-[#7E1018] p-6 md:p-10 text-white shadow-lg">
      
      {/* glow */}
      <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-white/10 blur-3xl" />

      <div className="relative">
        <h1 className="font-serif text-3xl md:text-5xl tracking-tight">
          Saved Addresses
        </h1>

        <p className="mt-3 md:mt-4 text-sm md:text-base text-white/80 max-w-2xl leading-relaxed">
          Manage your delivery locations for seamless checkout during your rituals and purchases.
        </p>

        <div className="mt-6 flex flex-wrap gap-3 text-xs md:text-sm text-white/70">
          <span className="rounded-full bg-white/10 px-4 py-1">
            Secure Storage
          </span>
          <span className="rounded-full bg-white/10 px-4 py-1">
            One-click Checkout
          </span>
          <span className="rounded-full bg-white/10 px-4 py-1">
            Multiple Locations
          </span>
        </div>
      </div>
    </div>
  );
}