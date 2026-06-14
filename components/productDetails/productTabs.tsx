"use client";

interface ProductTabsProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const tabs = [
  "Description",
  "Details",
  "Reviews",
];

export default function ProductTabs({
  activeTab,
  setActiveTab,
}: ProductTabsProps) {
  return (
    <div
      className="
        flex
        justify-center
        border-b
        border-[#E5D7C8]
        overflow-x-auto
      "
    >
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`
            relative
            px-6
            md:px-10
            py-5
            text-sm
            md:text-base
            font-medium
            whitespace-nowrap
            transition

            ${
              activeTab === tab
                ? "text-[#7A0008]"
                : "text-[#7B6A58]"
            }
          `}
        >
          {tab}

          {activeTab === tab && (
            <span
              className="
                absolute
                bottom-0
                left-0
                w-full
                h-[3px]
                bg-[#7A0008]
              "
            />
          )}
        </button>
      ))}
    </div>
  );
}