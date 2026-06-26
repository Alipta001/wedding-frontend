import {
  CreditCard,
  Landmark,
  QrCode,
  Truck,
} from "lucide-react";

const methods = [
  {
    title: "UPI",
    sub: "GPAY, PHONEPE, PAYTM",
    icon: QrCode,
  },
  {
    title: "Credit / Debit Card",
    sub: "VISA, MASTERCARD, RUPAY",
    icon: CreditCard,
  },
  {
    title: "Net Banking",
    sub: "ALL MAJOR BANKS",
    icon: Landmark,
  },
  {
    title: "Cash on Delivery",
    sub: "PAY AT YOUR DOORSTEP",
    icon: Truck,
  },
];

export default function PaymentMethods() {
  return (
    <div className="bg-white rounded-[32px] p-8 border border-[#EFE4D8]">
      <h2 className="text-3xl font-serif text-[#6B0F1A] mb-8">
        Payment Method
      </h2>

      <div className="space-y-4">
        {methods.map((item) => (
          <label
            key={item.title}
            className="flex items-center justify-between border rounded-2xl p-5 cursor-pointer"
          >
            <div className="flex items-center gap-4">
              <input
                type="radio"
                name="payment"
              />

              <div>
                <h3 className="font-medium">
                  {item.title}
                </h3>

                <p className="text-xs text-[#777]">
                  {item.sub}
                </p>
              </div>
            </div>

            <item.icon size={22} />
          </label>
        ))}
      </div>
    </div>
  );
}