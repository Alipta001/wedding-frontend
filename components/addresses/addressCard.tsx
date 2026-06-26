import { Home, Building2, Phone, Pencil, Trash2 } from "lucide-react";
import { Address } from "./types";

interface Props {
  address: Address;
}

export default function AddressCard({ address }: Props) {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm flex flex-col justify-between">

      <div className="p-7">

        <div className="flex items-center gap-3 mb-6">

          {address.type === "Home" ? (
            <Home className="w-5 h-5 text-[#5B060C]" />
          ) : (
            <Building2 className="w-5 h-5 text-[#5B060C]" />
          )}

          <h3 className="text-2xl font-serif text-[#222]">
            {address.type}
          </h3>

        </div>

        <h4 className="font-semibold">
          {address.name}
        </h4>

        <div className="mt-3 space-y-1 text-gray-600">

          {address.address.map((line) => (
            <p key={line}>{line}</p>
          ))}

        </div>

        <div className="mt-5 flex items-center gap-2 text-gray-600">
          <Phone size={16} />
          {address.phone}
        </div>

      </div>

      <div className="border-t px-7 py-4 flex justify-between">

        <button className="flex items-center gap-2 text-amber-700 hover:text-amber-900">
          <Pencil size={16} />
          Edit
        </button>

        <button className="flex items-center gap-2 text-gray-500 hover:text-red-600">
          <Trash2 size={16} />
          Remove
        </button>

      </div>

    </div>
  );
}