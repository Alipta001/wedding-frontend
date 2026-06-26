import CartItem from "./cartItem";

export default function CartItemsList() {
  return (
    <div className="space-y-6">
      <CartItem
        image="/images/cart/shopping1.png"
        name="Hand-Woven Banarasi Scarf"
        category="Wedding Gift"
        price={8500}
      />

      <CartItem
        image="/images/cart/shopping2.png"
        name="Sacred Puja Thali Set"
        category="Ritual Essentials"
        price={4200}
      />
    </div>
  );
}