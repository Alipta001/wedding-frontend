import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ContactCTA() {
  return (
    <section className="pb-24">
      <div className="max-w-[1320px] mx-auto px-5">

        <div
          className="
            bg-[#5B060C]
            rounded-[36px]
            px-8
            lg:px-16
            py-14
            text-center
          "
        >
          <h2 className="font-serif text-white text-4xl lg:text-5xl">
            Begin Your Wedding Journey
          </h2>

          <p className="mt-5 text-white/75 max-w-2xl mx-auto">
            Discover ritual guidance, artisan collections,
            and planning tools crafted for meaningful celebrations.
          </p>

          <Link
            href="/planning"
            className="
              mt-8
              inline-flex
              items-center
              gap-2
              bg-[#D5B06B]
              text-[#5B060C]
              px-8
              py-4
              rounded-xl
              font-medium
            "
          >
            Start Planning
            <ArrowRight size={18} />
          </Link>
        </div>

      </div>
    </section>
  );
}