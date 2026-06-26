import RecentOrderCard from "./recentOrderCard";


const recentOrders = [
  {
    id: "RT1001",
    name: "Wedding Ritual Kit",
    date: "12 June 2026",
    status: "Shipped",
    image: "/images/orders/order1.png",
  },
  {
    id: "RT1002",
    name: "Brass Puja Set",
    date: "18 June 2026",
    status: "Processing",
    image: "/images/orders/order4.png",
  },
];

export default function RecentOrders() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-5">

        <h2 className="text-4xl font-serif text-[#7A1D22] mb-10">
          Recent Orders
        </h2>

        <div className="space-y-8">
          {recentOrders.map((order) => (
            <RecentOrderCard
              key={order.id}
              order={order}
            />
          ))}
        </div>

      </div>
    </section>
  );
}