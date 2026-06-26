// interface TimelineCardProps {
//   title: string;
//   tasks: string[];
//   variant?: "default" | "dark" | "linen" | "support";
// }

// export default function TimelineCard({
//   title,
//   tasks,
//   variant = "default",
// }: TimelineCardProps) {
//   return (
//     <div
//       className={`
//         rounded-[28px]
//         p-8
//         transition-all
//         duration-300
//         hover:-translate-y-1

//         ${
//           variant === "dark"
//             ? "bg-[#5B060C] text-white"
//             : variant === "linen"
//             ? "bg-[#EBE1DA]"
//             : variant === "support"
//             ? "bg-white border border-[#D5B06B]"
//             : "bg-white"
//         }
//       `}
//     >
//       <h3
//         className={`
//           font-serif
//           text-3xl
//           mb-8

//           ${
//             variant === "dark"
//               ? "text-white"
//               : "text-[#5B060C]"
//           }
//         `}
//       >
//         {title}
//       </h3>

//       <div className="space-y-5">
//         {tasks.map((task, index) => (
//           <div
//             key={index}
//             className="flex items-start gap-3"
//           >
//             <div
//               className={`
//                 w-5
//                 h-5
//                 rounded-full
//                 border
//                 mt-1
//                 shrink-0

//                 ${
//                   variant === "dark"
//                     ? "border-white/50"
//                     : "border-[#B6A18F]"
//                 }
//               `}
//             />

//             <p
//               className={`
//                 leading-7

//                 ${
//                   variant === "dark"
//                     ? "text-white/80"
//                     : "text-[#564240]"
//                 }
//               `}
//             >
//               {task}
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }



interface TimelineCardProps {
  title: string;
  tasks: string[];
  variant?:
    | "default"
    | "dark"
    | "linen"
    | "cream"
    | "support";
}

export default function TimelineCard({
  title,
  tasks,
  variant = "default",
}: TimelineCardProps) {
  const isSupport = variant === "support";

  return (
    <div
      className={`
        h-full
        rounded-[24px]
        p-6 lg:p-8

        ${
          variant === "dark"
            ? "bg-[#7A0008]"
            : variant === "linen"
            ? "bg-[#EBE1DA]"
            : variant === "cream"
            ? "bg-[#F3EEE7]"
            : variant === "support"
            ? "bg-white border border-[#D5B06B]"
            : "bg-white shadow-sm"
        }
      `}
    >
      <h3
        className={`
          font-serif
          ${
            isSupport
              ? "text-[24px] lg:text-[28px]"
              : "text-[28px] lg:text-[36px]"
          }
          mb-5

          ${
            variant === "dark"
              ? "text-white"
              : "text-[#5B060C]"
          }
        `}
      >
        {title}
      </h3>

      <div className="space-y-4">
        {tasks.map((task, index) => (
          <div
            key={index}
            className="flex items-start gap-3"
          >
            <div
              className={`
                mt-[5px]
                w-4
                h-4
                rounded-full
                border-2
                shrink-0

                ${
                  variant === "dark"
                    ? "border-white"
                    : "border-[#A08E7E]"
                }
              `}
            />

            <p
              className={`
                text-[15px]
                leading-6

                ${
                  variant === "dark"
                    ? "text-white/90"
                    : "text-[#564240]"
                }
              `}
            >
              {task}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}