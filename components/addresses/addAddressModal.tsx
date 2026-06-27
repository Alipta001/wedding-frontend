"use client";

import { useEffect, useState } from "react";

export default function AddAddressModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  const inputClass =
    "w-full px-4 py-3 rounded-xl border border-[#e7d7c9] bg-white text-sm outline-none transition focus:border-[#5B060C] focus:ring-2 focus:ring-[#5B060C]/10";

  return (
    <>
      {/* TRIGGER */}
      <button
        onClick={() => setOpen(true)}
        className="
          w-full rounded-3xl
          border border-dashed border-[#d8c6b6]
          bg-white
          p-6 text-left
          hover:border-[#5B060C]
          hover:bg-[#fffaf6]
          transition
        "
      >
        <p className="font-semibold text-[#5B060C]">
          + Add New Address
        </p>
        <p className="text-sm text-gray-500 mt-1">
          Save a new delivery location for faster checkout
        </p>
      </button>

      {/* MODAL */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
          onClick={() => setOpen(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="
              w-full max-w-xl
              rounded-3xl
              bg-[#FFF8F2]
              border border-[#eaded6]
              shadow-2xl
              overflow-hidden
            "
          >
            {/* HEADER (UPDATED PREMIUM RED THEME) */}
            <div
              className="
                relative
                px-7 py-6
                bg-gradient-to-r from-[#5B060C] to-[#7E1018]
                text-white
                border-b border-white/10
              "
            >
              {/* glow */}
              <div className="absolute -top-10 -right-10 h-24 w-24 rounded-full bg-white/10 blur-2xl" />

              <h2 className="text-2xl font-serif tracking-tight">
                Add Address
              </h2>

              <p className="text-sm text-white/80 mt-1">
                Enter accurate delivery details for seamless service
              </p>
            </div>

            {/* FORM */}
            <div className="p-7 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input className={inputClass} placeholder="Full Name" />
                <input className={inputClass} placeholder="Phone Number" />
              </div>

              <input className={inputClass} placeholder="Address Line 1" />
              <input className={inputClass} placeholder="Address Line 2 (Optional)" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input className={inputClass} placeholder="City" />
                <input className={inputClass} placeholder="Pincode" />
              </div>

              <input className={inputClass} placeholder="State / Province" />
            </div>

            {/* FOOTER */}
            <div className="px-7 py-5 border-t border-[#eaded6] flex justify-end gap-3 bg-white">
              <button
                onClick={() => setOpen(false)}
                className="
                  px-5 py-2.5
                  rounded-full
                  border border-[#d8c6b6]
                  text-sm text-gray-700
                  hover:bg-[#fffaf6]
                  transition
                "
              >
                Cancel
              </button>

              <button
                className="
                  px-6 py-2.5
                  rounded-full
                  bg-[#5B060C]
                  text-white
                  text-sm
                  shadow-sm
                  hover:bg-[#420408]
                  transition
                "
              >
                Save Address
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}