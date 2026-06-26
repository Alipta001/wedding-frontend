import Link from "next/link";
import RecommendedGiftCard from "./recommendedGiftCard";

export default function RecommendedGifts() {
  return (
    <section className="py-20">
      <div className="max-w-[1320px] mx-auto px-5">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="font-serif text-5xl text-[#5B060C]">
              Thoughtful Gifts
            </h2>

            <p className="text-[#564240] mt-2">
              Complete your ritual collection.
            </p>
          </div>

          <Link href='/shop'>
          <button className="text-[#9C845C] uppercase tracking-wider text-sm border-b border-[#9C845C]">
            View All
          </button>
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <RecommendedGiftCard
            image="/images/cart/gift1.png"
            title="Brass Puja Thali"
            price="2,499"
          />

          <RecommendedGiftCard
            image="/images/cart/gift2.png"
            title="Temple Bell"
            price="1,299"
          />

          <RecommendedGiftCard
            image="/images/cart/gift3.png"
            title="Wedding Hamper"
            price="4,999"
          />

          <RecommendedGiftCard
            image="/images/cart/gift4.png"
            title="Silk Ritual Cloth"
            price="1,899"
          />
        </div>
      </div>
    </section>
  );
}