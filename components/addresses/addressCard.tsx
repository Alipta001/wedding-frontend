"use client";

import { useState } from "react";
import {
  Home,
  Building2,
  Phone,
  Pencil,
  Trash2,
  Check,
} from "lucide-react";
import { Address } from "./types";
import ConfirmDeleteModal from "../layout/confirmDeleteModal";


interface Props {
  address: Address;
  isDefault?: boolean;
  isSelected?: boolean;
  onSelect?: () => void;
  onSetDefault?: () => void;
  onDelete?: (id: number) => void;
  onEdit?: (address: Address) => void;
}

export default function AddressCard({
  address,
  isDefault = false,
  isSelected = false,
  onSelect,
  onSetDefault,
  onDelete,
  onEdit,
}: Props) {
  const [deleteOpen, setDeleteOpen] = useState(false);

  return (
    <>
      {/* CARD */}
      <div
        onClick={onSelect}
        className={`
          group relative cursor-pointer
          rounded-3xl border
          transition-all duration-300
          flex flex-col justify-between
          overflow-hidden

          ${
            isSelected
              ? "border-[#5B060C] shadow-xl bg-gradient-to-b from-white to-[#fff4ef] -translate-y-1"
              : "border-[#eaded6] bg-gradient-to-b from-white to-[#fffaf6] hover:shadow-lg hover:-translate-y-1"
          }
        `}
      >
        {/* glow */}
        <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-[#5B060C]/5 blur-3xl" />

        {/* DEFAULT BADGE */}
        {isDefault && (
          <div className="absolute top-4 right-4 flex items-center gap-1 rounded-full bg-[#5B060C] px-3 py-1 text-xs text-white shadow-md">
            <Check size={12} />
            Default
          </div>
        )}

        {/* SELECTED RING */}
        {isSelected && (
          <div className="absolute inset-0 rounded-3xl ring-2 ring-[#5B060C]/40 pointer-events-none" />
        )}

        {/* CONTENT */}
        <div className="p-7">
          {/* TYPE */}
          <div className="flex items-center gap-3 mb-5">
            <div className="flex items-center justify-center h-10 w-10 rounded-xl bg-[#5B060C]/10 text-[#5B060C]">
              {address.type === "Home" ? (
                <Home className="w-5 h-5" />
              ) : (
                <Building2 className="w-5 h-5" />
              )}
            </div>

            <div>
              <h3 className="text-lg font-serif text-[#2a1f1c]">
                {address.type}
              </h3>
              <p className="text-xs text-gray-500">Saved Address</p>
            </div>
          </div>

          {/* NAME */}
          <h4 className="text-base font-semibold text-[#3a2b27]">
            {address.name}
          </h4>

          {/* ADDRESS */}
          <div className="mt-3 space-y-1 text-sm text-gray-600 leading-relaxed">
            {address.address.map((line, i) => (
              <p key={i}>{line}</p>
            ))}
          </div>

          {/* PHONE */}
          <div className="mt-5 flex items-center gap-2 text-sm text-gray-600">
            <Phone size={15} className="text-[#5B060C]" />
            <span>{address.phone}</span>
          </div>
        </div>

        {/* ACTIONS */}
        <div className="border-t border-[#f0e6df] bg-white/70 backdrop-blur px-7 py-4">
          <div className="flex items-center justify-between gap-3">
            
            {/* LEFT ACTIONS */}
            <div className="flex items-center gap-5">
              
              {/* EDIT */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onEdit?.(address);
                }}
                className="flex items-center gap-2 text-sm font-medium text-[#8a5a2b] hover:text-[#5B060C] transition"
              >
                <Pencil size={16} />
                Edit
              </button>

              {/* DELETE */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setDeleteOpen(true);
                }}
                className="flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-red-600 transition"
              >
                <Trash2 size={16} />
                Remove
              </button>
            </div>

            {/* RIGHT ACTION */}
            {!isDefault ? (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onSetDefault?.();
                }}
                className="
                  text-xs font-semibold
                  px-4 py-2
                  rounded-full
                  border border-[#5B060C]
                  text-[#5B060C]
                  hover:bg-[#5B060C]
                  hover:text-white
                  transition
                "
              >
                Set Default
              </button>
            ) : (
              <span className="text-xs text-[#5B060C]/60 font-medium flex items-center gap-1">
                <Check size={12} />
                Default Address
              </span>
            )}
          </div>
        </div>
      </div>

      {/* DELETE MODAL */}
      <ConfirmDeleteModal
        open={deleteOpen}
        title="Delete Address?"
        description="This address will be permanently removed from your account. This action cannot be undone."
        onClose={() => setDeleteOpen(false)}
        onConfirm={() => {
          onDelete?.(address.id);
          setDeleteOpen(false);
        }}
      />
    </>
  );
}