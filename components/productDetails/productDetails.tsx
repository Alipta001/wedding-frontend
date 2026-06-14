export default function ProductDetails() {
  const specifications = [
    ["Material", "Premium Brass"],
    ["Finish", "Antique Gold"],
    ["Collection", "Shanti Heritage"],
    ["Handcrafted", "Yes"],
    ["Origin", "India"],
    ["Packaging", "Luxury Gift Box"],
    ["Weight", "2.5 Kg"],
    ["Care", "Dry Cloth Cleaning"],
  ];

  return (
    <div className="pt-14">
      <div
        className="
          overflow-hidden
          rounded-[28px]
          border
          border-[#E5D7C8]
          bg-white
        "
      >
        <table className="w-full">
          <tbody>
            {specifications.map(([label, value]) => (
              <tr
                key={label}
                className="border-b border-[#EFE4D9]"
              >
                <td
                  className="
                    py-5
                    px-8
                    font-medium
                    text-[#5B060C]
                    bg-[#FCF8F3]
                    w-[35%]
                  "
                >
                  {label}
                </td>

                <td
                  className="
                    py-5
                    px-8
                    text-[#564240]
                  "
                >
                  {value}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}