import OrderSummary from "@/components/cart/orderSummary";
import CheckoutTimeline from "@/components/checkout/checkoutTimeline";
import OrderReviewPlaceholder from "@/components/checkout/orderReviewPlaceholder";
import PaymentMethods from "@/components/checkout/paymentMethods";
import ShippingForm from "@/components/checkout/shippingForm";

export default function CheckoutPage() {
  return (
    <main className="bg-[#F8F4EE] min-h-screen py-16">
      <div className="max-w-[1320px] mx-auto px-5">
        <div className="grid lg:grid-cols-[1fr_420px] gap-8">
          <div>
            <CheckoutTimeline />

            <div className="mt-8">
              <ShippingForm />
            </div>

            <div className="mt-8">
              <OrderReviewPlaceholder />
            </div>
          </div>

          <OrderSummary />
        </div>

        <div className="mt-10">
          <PaymentMethods />
        </div>
      </div>
    </main>
  );
}