interface SummaryItemProps {
  image: string;
  name: string;
  meta: string;
  price: string;
}

export default function SummaryItem({
  image,
  name,
  meta,
  price,
}: SummaryItemProps) {
  return (
    <div className="flex gap-4">
      <div className="w-20 h-20 rounded-xl overflow-hidden bg-[#F8F4EE]">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex-1">
        <h3 className="text-[#3D2B28] font-medium leading-6">
          {name}
        </h3>

        <p className="text-xs uppercase tracking-wide text-[#8B7A73] mt-1">
          {meta}
        </p>

        <p className="text-[#6B0F1A] font-semibold mt-2">
          {price}
        </p>
      </div>
    </div>
  );
}