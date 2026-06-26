// export default function AccountOrders() {
//   return (
//     <div className="mt-14">
//       <div className="flex justify-between items-center mb-6">
//         <h2 className="font-serif text-[48px] text-[#6E0E15]">
//           Recent Orders
//         </h2>

//         <button className="underline text-[#6F5C58]">
//           View All
//         </button>
//       </div>

//       <div className="space-y-5">
//         <div className="bg-[#F8F3EE] rounded-3xl p-6 flex items-center justify-between">
//           <div className="flex gap-5">
//             <img
//               src="/images/order1.jpg"
//               className="w-20 h-20 rounded-xl object-cover"
//             />

//             <div>
//               <h3 className="text-3xl font-serif text-[#6E0E15]">
//                 Hand-Woven Benarasi Scarf
//               </h3>

//               <p className="text-[#6F5C58]">
//                 Order #RIT-88291 • Nov 12, 2024
//               </p>
//             </div>
//           </div>

//           <div className="text-right">
//             <span className="bg-[#EFC96D] px-4 py-2 rounded-full text-sm">
//               AUSPICIOUSLY SHIPPED
//             </span>

//             <p className="mt-4 text-[#6E0E15] text-xl">
//               ₹8,500
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import Link from "next/link";
export default function AccountOrders() {
  return (
    <div className="mt-10 md:mt-14">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-3 mb-6">
        <h2 className="font-serif text-3xl md:text-[48px] text-[#6E0E15]">
          Recent Orders
        </h2>
<Link href='/orders'>
        <button className="underline text-[#6F5C58] text-sm md:text-base w-fit cursor-pointer">
          View All
        </button>
        </Link>
      </div>

      <div className="space-y-5">
        <div
          className="
            bg-[#F8F3EE]
            rounded-3xl
            p-5 md:p-6

            flex
            flex-col md:flex-row
            gap-4 md:gap-0

            md:items-center
            md:justify-between
          "
        >
          <div className="flex flex-col md:flex-row gap-4 md:gap-5">
            <img
              src="/images/orders/order1.png"
              className="w-16 h-16 md:w-20 md:h-20 rounded-xl object-cover"
            />

            <div>
              <h3 className="text-xl md:text-3xl font-serif text-[#6E0E15]">
                Hand-Woven Benarasi Scarf
              </h3>

              <p className="text-sm md:text-base text-[#6F5C58]">
                Order #RIT-88291 • Nov 12, 2024
              </p>
            </div>
          </div>

          <div className="text-left md:text-right">
            <span className="bg-[#EFC96D] px-3 md:px-4 py-2 rounded-full text-xs md:text-sm inline-block">
              AUSPICIOUSLY SHIPPED
            </span>

            <p className="mt-3 md:mt-4 text-[#6E0E15] text-lg md:text-xl">
              ₹8,500
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}