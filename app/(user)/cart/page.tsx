import CartBanner from "@/components/cart/cartBanner";
import CartLayout from "@/components/cart/cartLayout";
import RecommendedGifts from "@/components/cart/recommendedGifts";

export default function CartPage() {
  return (
    <main className="bg-[#FFF8F1]">
      <CartBanner />
      <CartLayout />
      <RecommendedGifts />
    </main>
  );
}