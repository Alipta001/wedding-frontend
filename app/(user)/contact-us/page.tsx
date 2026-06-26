import ContactCTA from "@/components/conatctus/contactCTA";
import ContactFAQ from "@/components/conatctus/contactFAQ";
import ContactFormSection from "@/components/conatctus/contactFormSection";
import ContactHero from "@/components/conatctus/contactHero";

export default function ContactPage() {
  return (
    <main className="bg-[#F8F3EE]">
      <ContactHero />
      <ContactFormSection />
      <ContactFAQ />
      <ContactCTA />
    </main>
  );
}