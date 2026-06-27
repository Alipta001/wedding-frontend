export default function AddressBanner() {
  return (
    <section className="bg-[#FFF8F2] border-b border-[#EFE2D6]">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex items-center gap-2 text-sm font-medium text-gray-500">
          <span>MY ACCOUNT</span>
          <span>{">"}</span>
          <span className="text-[#6A0D14]">ADDRESS</span>
        </div>

        <div className="mt-6 max-w-2xl">
          <h1 className="text-5xl font-serif text-[#5B060C]">
            Saved Addresses
          </h1>

          <p className="mt-4 text-gray-600 leading-8">
            Manage your delivery locations for a seamless checkout experience
            during your upcoming rituals.
          </p>
        </div>
      </div>
    </section>
  );
}
