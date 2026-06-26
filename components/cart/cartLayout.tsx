import CartItemsList from "./cartItemsList";
import OrderSummary from "./orderSummary";

export default function CartLayout() {
  return (
    <section className="py-12">
      <div className="max-w-[1320px] mx-auto px-5">
        <div className="grid lg:grid-cols-[1.8fr_1fr] gap-8">
          <CartItemsList />
          <OrderSummary />
        </div>
      </div>
    </section>
  );
}