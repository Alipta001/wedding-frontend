import ArtistHero from "@/components/artists/artistHero";
import ArtistsGrid from "@/components/artists/artistsGrid";
import ArtistsNewsletter from "@/components/artists/artistsNewsletter";
import ArtistStats from "@/components/artists/artistStats";
import Categories from "@/components/artists/categories";
import FeaturedArtisan from "@/components/artists/featuredArtisan";
import WhyRituo from "@/components/artists/whyRituo";
import WorkshopStories from "@/components/artists/workshopStories";
import Testimonials from "@/components/home/testimonals";

export default function ArtistsPage() {
  return (
    <main className="bg-[#F6F1EA]">
      <ArtistHero />
      <ArtistStats />
      <ArtistsGrid />
      <FeaturedArtisan />
      {/* <Categories /> */}
      <WorkshopStories />
      <Testimonials />
      <WhyRituo />
      {/* <ArtistsNewsletter /> */}
    </main>
  );
}