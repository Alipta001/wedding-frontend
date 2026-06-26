export default function OrderTimeline() {
  return (
    <section className="py-20 bg-[#EFE4D7]">

      <div className="max-w-5xl mx-auto px-5 text-center">

        <h2 className="text-4xl font-serif text-[#7A1D22] mb-14">
          Order Journey
        </h2>

        <div className="grid grid-cols-4 gap-4">

          {[
            "Placed",
            "Packed",
            "Shipped",
            "Delivered",
          ].map((step) => (
            <div key={step}>
              <div
                className="
                  w-14
                  h-14
                  rounded-full
                  bg-[#A57C33]
                  mx-auto
                  mb-4
                "
              />

              <p className="font-medium">
                {step}
              </p>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}