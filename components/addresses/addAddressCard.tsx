import { Plus } from "lucide-react";

export default function AddAddressCard() {
  return (
    <button
      className="
      h-full
      min-h-[290px]
      rounded-2xl
      border-2
      border-dashed
      border-[#E5D7CB]
      bg-[#FDF6F2]
      hover:bg-white
      transition
      flex
      flex-col
      justify-center
      items-center
      gap-5
      "
    >
      <div className="w-16 h-16 rounded-full bg-[#FFE8AE] flex items-center justify-center">
        <Plus className="w-6 h-6 text-[#AA7B00]" />
      </div>

      <p className="font-semibold text-[#AA7B00]">
        Add New Address
      </p>
    </button>
  );
}