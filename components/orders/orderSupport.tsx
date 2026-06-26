import Link from "next/link";

export default function OrderSupport() {
  return (
    <section className="py-24 bg-[#7A1D22]">

      <div className="max-w-4xl mx-auto px-5 text-center">

        <h2 className="text-4xl font-serif text-white">
          Need Assistance?
        </h2>

        <p className="mt-5 text-white/80 leading-8">
          Our wedding concierge team is available to help
          with deliveries, returns and custom ritual requirements.
        </p>

<Link href='/contact-us'>
        <button
          className="
            mt-8
            bg-[#A57C33]
            text-white
            px-8
            py-4
            rounded-xl
            cursor-pointer
          "
        >
          Contact Support
        </button>
        </Link>

      </div>

    </section>
  );
}