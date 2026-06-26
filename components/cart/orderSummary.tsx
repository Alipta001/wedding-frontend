"use client"
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

export default function OrderSummary() {
    const router = useRouter()
  return (
    <div className="bg-white rounded-2xl p-8 sticky top-24">
      <h2 className="font-serif text-4xl text-[#5B060C] mb-8">
        Order Summary
      </h2>

      <div className="space-y-4 border-b pb-6">
        <div className="flex justify-between">
          <span className="text-[#A49694]">Subtotal</span>
          <span>₹12,700</span>
        </div>

        <div className="flex justify-between">
          <span className="text-[#A49694]">Shipping</span>
          <span>Free</span>
        </div>

        <div className="flex justify-between">
          <span className="text-[#A49694]">Taxes</span>
          <span>₹635</span>
        </div>
      </div>

      <div className="flex justify-between py-6">
        <span className="font-serif text-xl text-[#5B060C]">
          Total
        </span>

        <span className="font-serif text-4xl text-[#5B060C]">
          ₹13,335
        </span>
      </div>

      <button className="w-full bg-[#5B060C] text-white rounded-full py-4 flex justify-center items-center gap-3 cursor-pointer" onClick={()=> router.push('/checkout')}>
        Proceed To Checkout
        <ArrowRight size={18} />
      </button>

      <div className="mt-8 pt-6 border-t">
        <p className="text-[#9C845C] font-semibold uppercase text-xs tracking-widest">
          Secure Checkout
        </p>

        <p className="text-[#A49694] text-sm mt-2">
          Your payment information is encrypted and protected.
        </p>
      </div>
    </div>
  );
}