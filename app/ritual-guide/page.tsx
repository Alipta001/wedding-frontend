
import ArtisanGuide from "@/components/ritualGuide/artisanGuide";
import EssentialCollections from "@/components/ritualGuide/essentialCollections";
import RitualCTA from "@/components/ritualGuide/ritualCTA";
import RitualGuideHero from "@/components/ritualGuide/ritualGuideHero";
import SacredChapters from "@/components/ritualGuide/sacredChapters";


export default function RitualGuidePage() {
  return (
    <>
      <RitualGuideHero />
      <SacredChapters />
      <ArtisanGuide />
      <EssentialCollections />
      <RitualCTA />
    </>
  );
}