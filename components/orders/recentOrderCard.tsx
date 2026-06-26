// import Image from "next/image";

// export default function RecentOrderCard({ order }: any) {
//   return (
//     <div
//       className="
//         bg-white
//         rounded-[30px]
//         overflow-hidden
//         shadow-sm
//         hover:shadow-xl
//         transition
//         flex
//         flex-col
//         lg:flex-row
//       "
//     >
//       <Image
//         src={order.image}
//         alt={order.name}
//         width={300}
//         height={250}
//         className="
//           w-full
//           lg:w-[280px]
//           object-cover
//         "
//       />

//       <div className="flex-1 p-8">

//         <div className="flex justify-between flex-wrap gap-4">

//           <div>
//             <h3 className="text-2xl font-serif text-[#7A1D22]">
//               {order.name}
//             </h3>

//             <p className="mt-2 text-[#564240]">
//               Order #{order.id}
//             </p>

//             <p className="mt-1 text-[#564240]">
//               Ordered on {order.date}
//             </p>
//           </div>

//           <span
//             className="
//               px-4
//               py-2
//               rounded-full
//               bg-blue-100
//               text-blue-700
//               text-sm
//             "
//           >
//             {order.status}
//           </span>

//         </div>

//         <div className="mt-8 flex gap-4 flex-wrap">

//           <button
//             className="
//               bg-[#7A1D22]
//               text-white
//               px-6
//               py-3
//               rounded-xl
//             "
//           >
//             Track Order
//           </button>

//           <button
//             className="
//               border
//               border-[#D5C1A0]
//               px-6
//               py-3
//               rounded-xl
//             "
//           >
//             View Details
//           </button>

//         </div>

//       </div>
//     </div>
//   );
// }


import Image from "next/image";

export default function RecentOrderCard({ order }: any) {
  return (
    <div
      className="
        bg-[#FBF7F2]
        border
        border-[#E8DDD0]

        rounded-[34px]

        overflow-hidden

        shadow-sm
        hover:shadow-2xl
        hover:-translate-y-1

        transition-all
        duration-300

        flex
        flex-col
        lg:flex-row
      "
    >
      {/* IMAGE */}
      <div className="relative w-full lg:w-[280px] h-[220px] lg:h-auto">
        <Image
          src={order.image}
          alt={order.name}
          fill
          className="
            object-cover
          "
        />

        {/* subtle luxury overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
      </div>

      {/* CONTENT */}
      <div className="flex-1 p-6 lg:p-8">
        {/* TOP ROW */}
        <div className="flex justify-between flex-wrap gap-4 items-start">
          <div>
            <h3 className="text-xl lg:text-2xl font-serif text-[#7A1D22] leading-snug">
              {order.name}
            </h3>

            <p className="mt-2 text-sm lg:text-base text-[#6B5B57]">
              Order <span className="font-medium">#{order.id}</span>
            </p>

            <p className="mt-1 text-sm lg:text-base text-[#8B7765]">
              Ordered on {order.date}
            </p>
          </div>

          {/* STATUS BADGE (premium styled) */}
          <span
            className={`
              px-4 py-2
              rounded-full
              text-xs lg:text-sm
              font-medium
              tracking-wide

              ${
                order.status === "Delivered"
                  ? "bg-green-50 text-green-700 border border-green-200"
                  : order.status === "Processing"
                  ? "bg-amber-50 text-amber-700 border border-amber-200"
                  : "bg-[#F0E6DA] text-[#7A1D22] border border-[#E8DDD0]"
              }
            `}
          >
            {order.status}
          </span>
        </div>

        {/* ACTIONS */}
        <div className="mt-6 lg:mt-8 flex gap-3 flex-wrap">
          <button
            className="
              bg-[#7A1D22]
              text-white

              px-5 lg:px-6
              py-2.5 lg:py-3

              rounded-xl

              font-medium

              hover:bg-[#5f1418]

              transition
            "
          >
            Track Order
          </button>

          <button
            className="
              border
              border-[#D5C1A0]

              text-[#7A1D22]

              px-5 lg:px-6
              py-2.5 lg:py-3

              rounded-xl

              font-medium

              hover:bg-white

              transition
            "
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}