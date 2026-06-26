// "use client";

// import Link from "next/link";
// import {
//   LayoutGrid,
//   Package,
//   Heart,
//   MapPin,
//   Download,
//   Settings,
//   LogOut,
// } from "lucide-react";

// const menu = [
//   {
//     icon: LayoutGrid,
//     label: "Overview",
//     href: "/account",
//     active: true,
//   },
//   {
//     icon: Package,
//     label: "Orders",
//     href: "/account/orders",
//   },
//   {
//     icon: Heart,
//     label: "Wishlist",
//     href: "/account/wishlist",
//   },
//   {
//     icon: MapPin,
//     label: "Addresses",
//     href: "/account/addresses",
//   },
//   {
//     icon: Download,
//     label: "Downloads",
//     href: "/account/downloads",
//   },
// ];

// export default function AccountSidebar() {
//   return (
//     <aside className="w-full">
//       <div className="space-y-2">
//         {menu.map((item) => (
//           <Link
//             key={item.label}
//             href={item.href}
//             className={`
//               flex items-center gap-4
//               px-5 py-4
//               rounded-2xl
//               transition
//               ${
//                 item.active
//                   ? "bg-[#8D1D1D] text-white"
//                   : "text-[#5E4A47] hover:bg-white"
//               }
//             `}
//           >
//             <item.icon size={18} />
//             {item.label}
//           </Link>
//         ))}
//       </div>

//       <div className="mt-10 border-t border-[#E8DDD3] pt-8">
//         <Link
//           href="/settings"
//           className="flex items-center gap-4 px-5 py-4 text-[#5E4A47]"
//         >
//           <Settings size={18} />
//           Settings
//         </Link>

//         <button className="flex items-center gap-4 px-5 py-4 text-[#D23B31]">
//           <LogOut size={18} />
//           Logout
//         </button>
//       </div>
//     </aside>
//   );
// }


// "use client";

// import Link from "next/link";
// import { usePathname } from "next/navigation";

// import {
//   LayoutGrid,
//   Package,
//   Heart,
//   MapPin,
//   Download,
//   Settings,
//   LogOut,
// } from "lucide-react";

// const menu = [
//   {
//     icon: LayoutGrid,
//     label: "Overview",
//     href: "/account",
//   },
//   {
//     icon: Package,
//     label: "Orders",
//     href: "/orders",
//   },
//   {
//     icon: Heart,
//     label: "Wishlist",
//     href: "/wishlist",
//   },
//   {
//     icon: MapPin,
//     label: "Addresses",
//     href: "/address",
//   },
//   {
//     icon: Download,
//     label: "Downloads",
//     href: "/downloads",
//   },
// ];

// export default function AccountSidebar() {
//   const pathname = usePathname();

//   return (
//     <aside className="w-full">
//       <div className="space-y-2">
//         {menu.map((item) => {
//           const isActive = pathname === item.href;

//           return (
//             <Link
//               key={item.label}
//               href={item.href}
//               className={`
//                 flex items-center gap-4
//                 px-5 py-4
//                 rounded-2xl
//                 transition-all duration-200

//                 ${
//                   isActive
//                     ? "bg-[#8D1D1D] text-white shadow-md"
//                     : "text-[#5E4A47] hover:bg-white"
//                 }
//               `}
//             >
//               <item.icon size={18} />
//               <span>{item.label}</span>
//             </Link>
//           );
//         })}
//       </div>

//       <div className="mt-10 border-t border-[#E8DDD3] pt-8">
//         <Link
//           href="/settings"
//           className={`
//             flex items-center gap-4
//             px-5 py-4
//             rounded-2xl
//             transition-all duration-200

//             ${
//               pathname === "/settings"
//                 ? "bg-[#8D1D1D] text-white shadow-md"
//                 : "text-[#5E4A47] hover:bg-white"
//             }
//           `}
//         >
//           <Settings size={18} />
//           <span>Settings</span>
//         </Link>

//         <button
//           className="
//             flex items-center gap-4
//             px-5 py-4
//             text-[#D23B31]
//             hover:bg-white
//             rounded-2xl
//             transition-all duration-200
//             w-full
//           "
//         >
//           <LogOut size={18} />
//           <span>Logout</span>
//         </button>
//       </div>
//     </aside>
//   );
// }


"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  LayoutGrid,
  Package,
  Heart,
  MapPin,
  Download,
  Settings,
  LogOut,
} from "lucide-react";

const menu = [
  { icon: LayoutGrid, label: "Overview", href: "/account" },
  { icon: Package, label: "Orders", href: "/orders" },
  { icon: Heart, label: "Wishlist", href: "/wishlist" },
  { icon: MapPin, label: "Addresses", href: "/address" },
  { icon: Download, label: "Downloads", href: "/downloads" },
];

export default function AccountSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-full">
      {/* MENU GRID */}
      <div className="grid grid-cols-2 md:grid-cols-1 gap-2">
        {menu.map((item) => {
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.label}
              href={item.href}
              className={`
                flex items-center gap-3 md:gap-4
                px-4 md:px-5 py-3 md:py-4
                rounded-2xl
                transition-all duration-200

                ${
                  isActive
                    ? "bg-[#8D1D1D] text-white shadow-md"
                    : "text-[#5E4A47] hover:bg-white"
                }
              `}
            >
              <item.icon size={18} />
              <span className="text-sm md:text-base">
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>

      {/* FOOTER ACTIONS */}
      <div className="mt-8 md:mt-10 border-t border-[#E8DDD3] pt-6 md:pt-8">
        <div className="grid grid-cols-2 md:grid-cols-1 gap-2">
          <Link
            href="/settings"
            className={`
              flex items-center gap-3 md:gap-4
              px-4 md:px-5 py-3 md:py-4
              rounded-2xl
              transition-all duration-200

              ${
                pathname === "/settings"
                  ? "bg-[#8D1D1D] text-white shadow-md"
                  : "text-[#5E4A47] hover:bg-white"
              }
            `}
          >
            <Settings size={18} />
            <span className="text-sm md:text-base">
              Settings
            </span>
          </Link>

          <button
            className="
              flex items-center gap-3 md:gap-4
              px-4 md:px-5 py-3 md:py-4
              text-[#D23B31]
              hover:bg-white
              rounded-2xl
              transition-all duration-200
              w-full
            "
          >
            <LogOut size={18} />
            <span className="text-sm md:text-base">
              Logout
            </span>
          </button>
        </div>
      </div>
    </aside>
  );
}