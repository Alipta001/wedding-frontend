// export default function AccountHeader() {
//   return (
//     <div
//       className="
//         bg-gradient-to-r
//         from-[#5B060C]
//         to-[#7E1018]

//         rounded-[32px]

//         p-10

//         text-white
//       "
//     >
//       <h1 className="font-serif text-5xl">
//         Accounts
//       </h1>

//       <p className="mt-4 text-white/80">
//         Manage your luxury wedding ritual experience.
//       </p>
//     </div>
//   );
// }


export default function AccountHeader() {
  return (
    <div
      className="
        bg-gradient-to-r
        from-[#5B060C]
        to-[#7E1018]

        rounded-[32px]

        p-6 md:p-10

        text-white
      "
    >
      <h1 className="font-serif text-3xl md:text-5xl">
        Accounts
      </h1>

      <p className="mt-3 md:mt-4 text-white/80 text-sm md:text-base">
        Manage your luxury wedding ritual experience.
      </p>
    </div>
  );
}