const faqs = [
  {
    q: "Can you help with complete wedding planning?",
    a: "Yes, we offer curated planning tools, artisan recommendations, and ritual guidance.",
  },
  {
    q: "Do you deliver ritual products across India?",
    a: "Yes, our collections are shipped nationwide.",
  },
  {
    q: "Can I connect with verified artisans?",
    a: "Absolutely. We maintain a curated directory of trusted artisans.",
  },
];

export default function ContactFAQ() {
  return (
    <section className="pb-24">
      <div className="max-w-[1320px] mx-auto px-5">

        <div className="text-center mb-14">
          <h2 className="font-serif text-[#5B060C] text-5xl">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">

          {faqs.map((faq) => (
            <div
              key={faq.q}
              className="bg-white rounded-[28px] p-8"
            >
              <h3 className="text-[#5B060C] font-semibold text-lg">
                {faq.q}
              </h3>

              <p className="mt-4 text-[#564240] leading-7">
                {faq.a}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}