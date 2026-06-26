interface CheckoutLayoutProps {
  left: React.ReactNode;
  right: React.ReactNode;
}

export default function CheckoutLayout({
  left,
  right,
}: CheckoutLayoutProps) {
  return (
    <div className="grid lg:grid-cols-[1fr_420px] gap-8">
      <div>{left}</div>

      <aside className="sticky top-24 h-fit">
        {right}
      </aside>
    </div>
  );
}