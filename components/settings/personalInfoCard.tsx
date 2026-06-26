import { IdCard } from "lucide-react";

export default function PersonalInfoCard() {
  return (
    <div className="bg-white rounded-[28px] border border-[#EFE4D8] p-8">
      <div className="flex items-center justify-between mb-8">
        <h2 className="font-serif text-3xl text-[#5B060C]">
          Personal Information
        </h2>

        <div
          className="
            h-12
            w-12
            rounded-full
            bg-[#F8F2EB]

            flex
            items-center
            justify-center
          "
        >
          <IdCard size={20} />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Field
          label="Legal Name"
          value="Arunima Chatterjee"
        />

        <Field
          label="Email Address"
          value="arunima.c@heritage.com"
        />

        <Field
          label="Contact Number"
          value="+880 1712-345678"
        />

        <Field
          label="Wedding Date"
          value="12/15/2024"
        />
      </div>

      <button
        className="
          mt-8

          px-8
          py-4

          rounded-full

          bg-[#5B060C]
          text-white
        "
      >
        Update Profile
      </button>
    </div>
  );
}

function Field({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div>
      <label className="text-sm text-[#777]">
        {label}
      </label>

      <input
        defaultValue={value}
        className="
          mt-2

          w-full

          rounded-xl

          border
          border-[#E8DDD0]

          px-4
          py-3
        "
      />
    </div>
  );
}