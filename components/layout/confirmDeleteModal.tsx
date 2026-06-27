"use client";

import { useEffect } from "react";

interface ConfirmDeleteModalProps {
  open: boolean;
  title?: string;
  description?: string;

  confirmText?: string;
  cancelText?: string;

  onClose: () => void;
  onConfirm: () => void;
}

export default function ConfirmDeleteModal({
  open,
  title = "Delete Item",
  description = "Are you sure you want to delete this item? This action cannot be undone.",
  confirmText = "Delete",
  cancelText = "Cancel",
  onClose,
  onConfirm,
}: ConfirmDeleteModalProps) {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (open) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleEsc);
    }

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleEsc);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="
          w-full max-w-md
          rounded-3xl
          bg-[#FFF8F2]
          border border-[#eaded6]
          shadow-2xl
          overflow-hidden
        "
      >
        {/* HEADER */}
        <div className="px-6 py-5 bg-gradient-to-r from-[#5B060C] to-[#7E1018] text-white">
          <h2 className="text-xl font-serif">{title}</h2>
        </div>

        {/* BODY */}
        <div className="p-6">
          <p className="text-sm text-gray-700 leading-relaxed">
            {description}
          </p>
        </div>

        {/* ACTIONS */}
        <div className="px-6 py-5 border-t border-[#eaded6] flex justify-end gap-3 bg-white">
          <button
            onClick={onClose}
            className="
              px-5 py-2.5
              rounded-full
              border border-[#d8c6b6]
              text-sm text-gray-700
              hover:bg-[#fffaf6]
              transition
            "
          >
            {cancelText}
          </button>

          <button
            onClick={onConfirm}
            className="
              px-6 py-2.5
              rounded-full
              bg-[#B42318]
              text-white
              text-sm
              shadow-sm
              hover:bg-[#8f1a12]
              transition
            "
          >
            {confirmText}
          </button>
        </div>
      </div>
    </div>
  );
}