import CuratedProducts from "@/components/curated/curatedProducts";
import Artisans from "@/components/home/artisans";
import Hero from "@/components/home/hero";
import Legacy from "@/components/home/legacy";
import Newsletter from "@/components/home/newsletter";
import Presence from "@/components/home/presence";
import RitualKits from "@/components/home/ritualKits";
import ShantiSamagri from "@/components/home/shantiSamagri";
import Testimonials from "@/components/home/testimonals";
import TrustBanner from "@/components/home/trustBanner";

export default function Homepage() {
  return (
    <>
      <Hero />
      <TrustBanner />
      <RitualKits />
      <CuratedProducts />
      <ShantiSamagri />
      <Artisans />
      <Presence />
      <Legacy />
      <Newsletter />
      <Testimonials />
    </>
  );
}
