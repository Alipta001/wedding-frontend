// import Pagination from "@/components/common/pagination";
// import ProductGrid from "@/components/shop/productGrid";
// import ShippingFeatures from "@/components/shop/shippingFeatures";
// import ShopHero from "@/components/shop/shopHero";
// import ShopToolbar from "@/components/shop/shopToolbar";


// export default function ShopPage() {
//   return (
//     <>
//       <ShopHero />

//       <section className="bg-[#FAF6F0] pt-16">
//         <div className="max-w-[1320px] mx-auto px-4 lg:px-6">
//           <ShopToolbar />
//         </div>
//       </section>

//       <section className="bg-[#FAF6F0]">
//         <ProductGrid />

//         <div className="pb-24">
//           <Pagination
//             currentPage={1}
//             totalPages={5}
//           />
//         </div>
//       </section>

//       <ShippingFeatures />
//     </>
//   );
// }

// "use client";

// import { useState } from "react";

// import Pagination from "@/components/common/pagination";
// import ProductGrid from "@/components/shop/productGrid";
// import ShippingFeatures from "@/components/shop/shippingFeatures";
// import ShopHero from "@/components/shop/shopHero";
// import ShopToolbar from "@/components/shop/shopToolbar";

// export default function ShopPage() {
//   const [search, setSearch] = useState("");

//   return (
//     <>
//       <ShopHero />

//       <section className="bg-[#FAF6F0] pt-16">
//         <div className="max-w-[1320px] mx-auto px-4 lg:px-6">
//           <ShopToolbar
//             search={search}
//             setSearch={setSearch}
//           />
//         </div>
//       </section>

//       <section className="bg-[#FAF6F0]">
//         <div className="max-w-[1320px] mx-auto px-4 lg:px-6">
//           <ProductGrid search={search} />
//         </div>

//         <div className="pb-24">
//           <Pagination
//             currentPage={1}
//             totalPages={5}
//           />
//         </div>
//       </section>

//       <ShippingFeatures />
//     </>
//   );
// }



"use client";

import { useState } from "react";

import Pagination from "@/components/common/pagination";
import ProductGrid from "@/components/shop/productGrid";
import ShippingFeatures from "@/components/shop/shippingFeatures";
import ShopHero from "@/components/shop/shopHero";
import ShopToolbar from "@/components/shop/shopToolbar";

// ✅ NEW SECTIONS
import { TrendingProducts } from "@/components/shop/trendingProducts";
import { RitualStories } from "@/components/shop/ritualStories";

export default function ShopPage() {
  const [search, setSearch] = useState("");

  return (
    <>
      {/* HERO */}
      <ShopHero />

      {/* 🔥 TRENDING SECTION (NEW) */}
      <section className="bg-[#FAF6F0]">
        <TrendingProducts />
      </section>

      {/* TOOLBAR */}
      <section className="bg-[#FAF6F0] pt-16">
        <div className="max-w-[1320px] mx-auto px-4 lg:px-6">
          <ShopToolbar search={search} setSearch={setSearch} />
        </div>
      </section>

      {/* PRODUCTS GRID */}
      <section className="bg-[#FAF6F0]">
        <div className="max-w-[1320px] mx-auto px-4 lg:px-6">
          <ProductGrid search={search} />
        </div>

        <div className="pb-24">
          <Pagination currentPage={1} totalPages={5} />
        </div>
      </section>

      {/* 🌿 RITUAL STORIES (NEW) */}
      <RitualStories />

      {/* SHIPPING FEATURES */}
      <ShippingFeatures />
    </>
  );
}