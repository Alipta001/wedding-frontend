type MetaItem = {
  icon: string;
  text: string;
};

type Props = {
  icon: string;
  badge: string;
  title: string;
  description: string;
  meta: MetaItem[];
  buttonText: string;
  variant?: "primary" | "secondary";
};

export default function AssetCard({
  icon,
  badge,
  title,
  description,
  meta,
  buttonText,
  variant = "primary",
}: Props) {
  const isPrimary = variant === "primary";

  return (
    <div className="group h-full rounded-2xl border border-[#e8e1da] bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div
          className={`flex h-12 w-12 items-center justify-center rounded-xl border text-lg
          ${
            icon === "manual"
              ? "bg-red-50 text-[#722020]"
              : icon === "creative"
              ? "bg-amber-50 text-[#9a7b3e]"
              : icon === "security"
              ? "bg-stone-100 text-[#722020]"
              : "bg-red-50 text-[#722020]"
          }`}
        >
          <i className={`fa-solid ${icon}`} />
        </div>

        <span className="rounded-full bg-[#fff2d0] px-3 py-1 text-xs font-semibold tracking-wide text-[#6b4b00]">
          {badge}
        </span>
      </div>

      {/* Body */}
      <div className="mt-5">
        <h3 className="text-xl font-semibold text-[#1e1b17] leading-snug">
          {title}
        </h3>

        <p className="mt-2 text-sm leading-relaxed text-[#5c544e]">
          {description}
        </p>

        <div className="mt-4 flex flex-wrap gap-4 text-xs font-medium uppercase tracking-wide text-[#a49694]">
          {meta.map((m, i) => (
            <span key={i} className="flex items-center gap-1">
              <i className={m.icon} />
              {m.text}
            </span>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="mt-6">
        <button
          className={`w-full rounded-xl px-4 py-3 text-sm font-semibold transition-all duration-300
          ${
            isPrimary
              ? "bg-[#5B060C] text-white hover:bg-[#3f0408]"
              : "border border-[#9a7b3e] text-[#9a7b3e] hover:bg-[#fffaf2]"
          }`}
        >
          <i className="fa-solid fa-download mr-2" />
          {buttonText}
        </button>
      </div>
    </div>
  );
}