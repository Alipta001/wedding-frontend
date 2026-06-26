import { Award } from "lucide-react";

export default function OrderSummary() {
  return (
    <aside className="sticky top-24">
      <div className="bg-white rounded-[32px] p-8 border border-[#EFE4D8]">
        <h2 className="text-3xl font-serif text-[#6B0F1A] mb-8">
          Order Summary
        </h2>

        <div className="space-y-5">
          <div className="flex gap-4">
            <img
              src="/images/products/product1.jpg"
              className="w-20 h-20 rounded-xl object-cover"
            />

            <div>
              <h3 className="font-medium">
                Banarasi Saree
              </h3>

              <p className="text-sm text-[#777]">
                Deep Maroon Silk
              </p>

              <p className="text-[#6B0F1A] font-semibold mt-2">
                ₹24,500
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <img
              src="/images/products/product2.jpg"
              className="w-20 h-20 rounded-xl object-cover"
            />

            <div>
              <h3 className="font-medium">
                Shankha Pola Set
              </h3>

              <p className="text-sm text-[#777]">
                Authentic Conch
              </p>

              <p className="text-[#6B0F1A] font-semibold mt-2">
                ₹5,200
              </p>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 space-y-4">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>₹29,700</span>
          </div>

          <div className="flex justify-between">
            <span>Shipping</span>
            <span className="text-green-600">FREE</span>
          </div>

          <div className="flex justify-between">
            <span>Ritual Insurance</span>
            <span>₹450</span>
          </div>

          <div className="flex justify-between text-xl font-semibold text-[#6B0F1A]">
            <span>Total</span>
            <span>₹30,150</span>
          </div>
        </div>

        <div className="mt-8 flex items-center gap-3 bg-[#FFF6E6] p-4 rounded-xl">
          <Award size={18} />
          <span className="text-sm">
            Verified Handcrafted Artisan Product
          </span>
        </div>

        <button className="w-full mt-8 h-14 rounded-full bg-[#6B0F1A] text-white font-medium">
          Complete Purchase
        </button>
      </div>
    </aside>
  );
}