import ArtisanSection from "@/components/planning/artisanSection";
import PlannerCTA from "@/components/planning/plannerCTA";
import PlanningHero from "@/components/planning/planningHero";
import PlanningTimeline from "@/components/planning/planningTimeline";


export default function PlanningPage() {
  return (
    <main className="bg-[#F8F3EE] py-20 sm:py-12 md:py-20">

      <PlanningHero />

      <PlanningTimeline />

      <ArtisanSection />

      <PlannerCTA />

    </main>
  );
}