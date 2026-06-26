export default function ArtistsNewsletter() {
  return (
    <section className="py-24">
      <div className="max-w-4xl mx-auto px-5">

        <div className="bg-[#7A1D22] rounded-[40px] p-12 text-center">

          <h2 className="text-4xl font-serif text-white">
            Receive Stories From Workshops
          </h2>

          <div className="flex flex-col md:flex-row gap-4 mt-8">

            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-5 py-4 rounded-xl"
            />

            <button className="bg-[#A57C33] text-white px-8 rounded-xl">
              Subscribe
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}