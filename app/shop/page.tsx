import Pagination from "@/components/common/pagination";
import ProductGrid from "@/components/shop/productGrid";
import ShippingFeatures from "@/components/shop/shippingFeatures";
import ShopHero from "@/components/shop/shopHero";
import ShopToolbar from "@/components/shop/shopToolbar";


export default function ShopPage() {
  return (
    <>
      <ShopHero />

      <section className="bg-[#FAF6F0] pt-16">
        <div className="max-w-[1320px] mx-auto px-4 lg:px-6">
          <ShopToolbar />
        </div>
      </section>

      <section className="bg-[#FAF6F0]">
        <ProductGrid />

        <div className="pb-24">
          <Pagination
            currentPage={1}
            totalPages={5}
          />
        </div>
      </section>

      <ShippingFeatures />
    </>
  );
}