import Image from "next/image";

export default function PastOrderCard({ order }: any) {
  return (
    <div
      className="
        bg-white
        rounded-3xl
        overflow-hidden
        shadow-sm
      "
    >
      <Image
        src={order.image}
        alt={order.name}
        width={400}
        height={300}
      />

      <div className="p-6">

        <h3 className="font-serif text-xl text-[#7A1D22]">
          {order.name}
        </h3>

        <p className="mt-2 text-[#564240]">
          Delivered
        </p>

        <div className="flex gap-3 mt-5">

          <button
            className="
              bg-[#7A1D22]
              text-white
              px-4
              py-2
              rounded-lg
            "
          >
            Reorder
          </button>

          <button
            className="
              border
              border-[#D5C1A0]
              px-4
              py-2
              rounded-lg
            "
          >
            Invoice
          </button>

        </div>

      </div>
    </div>
  );
}