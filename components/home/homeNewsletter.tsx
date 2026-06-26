"use client";

export default function HomeNewsletter() {
  return (
    <section className="bg-[#7A0008] py-20 lg:py-20">
      <div className="max-w-[900px] mx-auto px-6 text-center">
        <h2
          className="
            text-white
            text-5xl
            md:text-6xl
            lg:text-7xl
            font-serif
            leading-tight
          "
        >
          Join the Ritual Circle
        </h2>

        <p
          className="
            mt-6
            text-white/85
            text-lg
            max-w-2xl
            mx-auto
            leading-8
          "
        >
          Receive curation notes, artisan stories,
          and exclusive previews directly in your
          inbox.
        </p>

        <form
          className="
            mt-12
            flex
            flex-col
            md:flex-row
            justify-center
            gap-4
            max-w-[760px]
            mx-auto
          "
        >
          <input
            type="email"
            placeholder="Your email address"
            className="
              flex-1
              h-[64px]
              px-6
              rounded-lg
              bg-[#8B1A21]
              border
              border-[#A43A40]
              text-white
              placeholder:text-white/60
              outline-none
            "
          />

          <button
            type="submit"
            className="
              h-[64px]
              px-12
              rounded-lg
              bg-[#F4B400]
              text-[#5B060C]
              font-semibold
              hover:opacity-90
              transition
            "
          >
            Subscribe
          </button>
        </form>

        <p
          className="
            mt-8
            text-sm
            text-white/60
          "
        >
          By subscribing, you agree to our{" "}
          <span className="underline cursor-pointer">
            Privacy Policy
          </span>{" "}
          and{" "}
          <span className="underline cursor-pointer">
            Terms of Service
          </span>.
        </p>
      </div>
    </section>
  );
}