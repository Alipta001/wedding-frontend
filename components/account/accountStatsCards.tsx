// export default function AccountStatsCards() {
//   return (
//     <div className="grid grid-cols-3 gap-6 mt-10">
//       <div className="bg-[#F4EEE8] rounded-3xl p-8">
//         <p className="text-xs tracking-wider font-semibold text-[#A67B18]">
//           RITUAL LOYALTY
//         </p>

//         <h3 className="text-5xl font-serif text-[#6E0E15] mt-4">
//           2,450
//         </h3>

//         <p className="mt-4 text-[#6F5C58]">
//           Maroon Tier Member
//         </p>
//       </div>

//       <div className="bg-[#F4EEE8] rounded-3xl p-8">
//         <p className="text-xs tracking-wider font-semibold text-[#A67B18]">
//           ACTIVE PLANNING
//         </p>

//         <h3 className="text-5xl font-serif text-[#6E0E15] mt-4">
//           03
//         </h3>

//         <div className="mt-5 h-1.5 rounded-full bg-[#DDD5CF]">
//           <div className="w-[65%] h-full bg-[#A67B18] rounded-full" />
//         </div>

//         <p className="mt-4 italic text-[#6F5C58]">
//           65% of Haldi Ritual complete
//         </p>
//       </div>

//       <div className="bg-[#F4EEE8] rounded-3xl p-8">
//         <p className="text-xs tracking-wider font-semibold text-[#A67B18]">
//           SAVED TREASURES
//         </p>

//         <h3 className="text-5xl font-serif text-[#6E0E15] mt-4">
//           12
//         </h3>

//         <button className="mt-5 text-[#6E0E15] font-medium">
//           View Wishlist →
//         </button>
//       </div>
//     </div>
//   );
// }


export default function AccountStatsCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 mt-8 md:mt-10">
      {/* Card 1 */}
      <div className="bg-[#F4EEE8] rounded-3xl p-6 md:p-8">
        <p className="text-xs tracking-wider font-semibold text-[#A67B18]">
          RITUAL LOYALTY
        </p>

        <h3 className="text-4xl md:text-5xl font-serif text-[#6E0E15] mt-3 md:mt-4">
          2,450
        </h3>

        <p className="mt-3 md:mt-4 text-sm md:text-base text-[#6F5C58]">
          Maroon Tier Member
        </p>
      </div>

      {/* Card 2 */}
      <div className="bg-[#F4EEE8] rounded-3xl p-6 md:p-8">
        <p className="text-xs tracking-wider font-semibold text-[#A67B18]">
          ACTIVE PLANNING
        </p>

        <h3 className="text-4xl md:text-5xl font-serif text-[#6E0E15] mt-3 md:mt-4">
          03
        </h3>

        <div className="mt-4 md:mt-5 h-1.5 rounded-full bg-[#DDD5CF]">
          <div className="w-[65%] h-full bg-[#A67B18] rounded-full" />
        </div>

        <p className="mt-3 md:mt-4 italic text-sm md:text-base text-[#6F5C58]">
          65% of Haldi Ritual complete
        </p>
      </div>

      {/* Card 3 */}
      <div className="bg-[#F4EEE8] rounded-3xl p-6 md:p-8">
        <p className="text-xs tracking-wider font-semibold text-[#A67B18]">
          SAVED TREASURES
        </p>

        <h3 className="text-4xl md:text-5xl font-serif text-[#6E0E15] mt-3 md:mt-4">
          12
        </h3>

        <button className="mt-4 md:mt-5 text-[#6E0E15] font-medium">
          View Wishlist →
        </button>
      </div>
    </div>
  );
}