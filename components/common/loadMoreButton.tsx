import { ChevronDown } from "lucide-react";

interface LoadMoreButtonProps {
  onClick: () => void;
  label?: string;
  disabled?: boolean;
  className?: string;
}

export default function LoadMoreButton({
  onClick,
  label = "View More",
  disabled = false,
  className = "",
}: LoadMoreButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        inline-flex
        items-center
        gap-2

        px-6 py-3

        rounded-full

        text-sm
        font-medium

        transition-all duration-300

        border border-[#E8DDD0]
        bg-white
        text-[#7A1D22]

        hover:bg-[#F6F1EA]
        hover:gap-3

        disabled:opacity-50
        disabled:cursor-not-allowed

        ${className}
      `}
    >
      {label}
      <ChevronDown size={16} />
    </button>
  );
}