// export default function AccountBannerHeader() {
//   return (
//     <div className="flex items-start justify-between">
//       <div>
//         <h1
//           className="
//             text-[56px]
//             leading-none
//             font-serif
//             text-[#6E0E15]
//           "
//         >
//           Namaste, Aditi
//         </h1>

//         <p className="mt-3 text-[#6F5C58] text-lg">
//           Auspicious beginnings await. Here is your ritual overview.
//         </p>
//       </div>

//       <button
//         className="
//           bg-[#A67700]
//           text-white
//           px-8
//           py-4
//           rounded-full
//           font-medium
//         "
//       >
//         New Ritual Plan
//       </button>
//     </div>
//   );
// }


export default function AccountBannerHeader() {
  return (
    <div
      className="
        flex
        flex-col md:flex-row
        gap-6 md:gap-0

        items-start md:items-center
        justify-between
      "
    >
      <div>
        <h1
          className="
            text-3xl md:text-[56px]
            leading-tight md:leading-none
            font-serif
            text-[#6E0E15]
          "
        >
          Namaste, Aditi
        </h1>

        <p className="mt-3 text-[#6F5C58] text-base md:text-lg">
          Auspicious beginnings await. Here is your ritual overview.
        </p>
      </div>

      <button
        className="
          bg-[#A67700]
          text-white
          px-6 md:px-8
          py-3 md:py-4
          rounded-full
          font-medium

          w-full md:w-auto
        "
      >
        New Ritual Plan
      </button>
    </div>
  );
}