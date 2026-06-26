import OrderHero from "@/components/orders/orderHero";
import OrderStats from "@/components/orders/orderStats";
import OrderSupport from "@/components/orders/orderSupport";
import OrderTimeline from "@/components/orders/orderTimeline";
import PastOrders from "@/components/orders/pastOrders";
import RecentOrders from "@/components/orders/recentOrders";

export default function OrdersPage() {
  return (
    <>
      <OrderHero />
      <OrderStats />
      <RecentOrders />
      <PastOrders />
      <OrderTimeline />
      <OrderSupport />
    </>
  );
}