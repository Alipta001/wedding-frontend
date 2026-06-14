"use client";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange?: (page: number) => void;
}

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  const pages = Array.from(
    { length: totalPages },
    (_, i) => i + 1
  );

  return (
    <div className="flex justify-center items-center gap-3">
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange?.(page)}
          className={`
            w-12
            h-12
            rounded-full
            transition-all
            duration-300
            text-sm
            font-medium

            ${
              page === currentPage
                ? "bg-[#722020] text-white shadow-md"
                : "bg-white border border-[#E5D7C8] text-[#564240] hover:border-[#722020] hover:text-[#722020]"
            }
          `}
        >
          {page}
        </button>
      ))}
    </div>
  );
}