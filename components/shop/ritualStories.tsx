export function RitualStories() {
  return (
    <section className="py-20 bg-[#F6F1EA]">
      <div className="max-w-[1320px] mx-auto px-5 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="uppercase tracking-[3px] text-xs text-[#A57C33]">
            From Tradition
          </span>

          <h2 className="mt-3 text-3xl md:text-5xl font-serif text-[#2F1D1B]">
            Ritual Stories
          </h2>

          <p className="mt-4 text-[#6F5C58]">
            Every product carries a story of craftsmanship, heritage, and sacred intent.
          </p>
        </div>

        {/* Story Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="bg-white rounded-3xl p-6 shadow-sm">
            <h3 className="text-xl font-serif text-[#5B060C]">
              The Brass Tradition
            </h3>
            <p className="mt-3 text-[#6F5C58] text-sm leading-6">
              Brass has been used in Indian rituals for centuries, symbolizing purity and strength.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 shadow-sm">
            <h3 className="text-xl font-serif text-[#5B060C]">
              Sacred Flames
            </h3>
            <p className="mt-3 text-[#6F5C58] text-sm leading-6">
              Diya lighting represents the victory of light over darkness in every ceremony.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 shadow-sm">
            <h3 className="text-xl font-serif text-[#5B060C]">
              Wedding Rituals
            </h3>
            <p className="mt-3 text-[#6F5C58] text-sm leading-6">
              Every wedding kit is curated to preserve cultural authenticity with modern elegance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}