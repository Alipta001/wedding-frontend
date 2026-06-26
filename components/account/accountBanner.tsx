// export default function AccountBanner() {
//   return (
//     <div
//       className="
//         mt-14

//         bg-gradient-to-r
//         from-[#8B1518]
//         to-[#701012]

//         rounded-3xl

//         px-10
//         py-8

//         flex
//         items-center
//         justify-between
//       "
//     >
//       <div>
//         <h3 className="text-white text-3xl font-serif">
//           Your Heritage Concierge
//         </h3>

//         <p className="text-[#F7C2A2] mt-2">
//           Need help coordinating your ritual elements?
//           Mira is available for a 1:1 consultation.
//         </p>
//       </div>

//       <button
//         className="
//           bg-[#FFC107]
//           text-[#4B2400]

//           px-8
//           py-4

//           rounded-2xl
//           font-semibold
//         "
//       >
//         Book Session
//       </button>
//     </div>
//   );
// }

export default function AccountBanner() {
  return (
    <div
      className="
        mt-10 md:mt-14

        bg-gradient-to-r
        from-[#8B1518]
        to-[#701012]

        rounded-3xl

        px-6 md:px-10
        py-6 md:py-8

        flex
        flex-col md:flex-row
        gap-6 md:gap-0

        items-start md:items-center
        justify-between
      "
    >
      <div>
        <h3 className="text-white text-2xl md:text-3xl font-serif">
          Your Heritage Concierge
        </h3>

        <p className="text-[#F7C2A2] mt-2 text-sm md:text-base">
          Need help coordinating your ritual elements? Mira is available for a 1:1 consultation.
        </p>
      </div>

      <button
        className="
          bg-[#FFC107]
          text-[#4B2400]

          px-6 md:px-8
          py-3 md:py-4

          rounded-2xl
          font-semibold

          w-full md:w-auto
        "
      >
        Book Session
      </button>
    </div>
  );
}