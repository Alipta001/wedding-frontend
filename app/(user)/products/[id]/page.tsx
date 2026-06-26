import CuratedProducts from "@/components/curated/curatedProducts";
import ProductHero from "@/components/productDetails/productHero";
import ProductSpecs from "@/components/productDetails/productSpecs";


export default function ProductDetailsPage() {
  return (
    <>
      <ProductHero />
      <ProductSpecs />
      <CuratedProducts />
    </>
  );
}