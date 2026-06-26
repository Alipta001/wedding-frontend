import PastOrderCard from "./pastOrderCard";

const orders = [
  {
    name: "Temple Bell",
    image: "/images/orders/order1.png",
  },
  {
    name: "Brass Thali",
    image: "/images/orders/order3.png",
  },
  {
    name: "Wedding Gift Box",
    image: "/images/orders/order4.png",
  },
];

export default function PastOrders() {
  return (
    <section className="py-20 bg-[#FDFBF8]">

      <div className="max-w-7xl mx-auto px-5">

        <h2 className="text-4xl font-serif text-[#7A1D22] mb-10">
          Past Orders
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {orders.map((order) => (
            <PastOrderCard
              key={order.name}
              order={order}
            />
          ))}

        </div>

      </div>

    </section>
  );
}