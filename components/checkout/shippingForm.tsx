export default function ShippingForm() {
  return (
    <div className="bg-white rounded-[28px] p-8 border border-[#EFE4D8]">
      <h2 className="text-3xl text-[#6B0F1A] font-serif mb-8">
        Shipping Address
      </h2>

      <div className="space-y-5">
        <input
          placeholder="Full Name"
          className="w-full h-14 rounded-xl border px-4"
        />

        <div className="grid md:grid-cols-2 gap-5">
          <input
            placeholder="Phone"
            className="h-14 rounded-xl border px-4"
          />

          <input
            placeholder="Pincode"
            className="h-14 rounded-xl border px-4"
          />
        </div>

        <input
          placeholder="Address"
          className="w-full h-14 rounded-xl border px-4"
        />

        <div className="grid md:grid-cols-2 gap-5">
          <input
            placeholder="City"
            className="h-14 rounded-xl border px-4"
          />

          <select className="h-14 rounded-xl border px-4">
            <option>West Bengal</option>
          </select>
        </div>
      </div>
    </div>
  );
}