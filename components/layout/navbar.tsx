// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import { Menu, X, Heart, ShoppingBag, User } from "lucide-react";

// export default function Navbar() {
//   const [open, setOpen] = useState(false);

//   const navItems = [
//     {
//       name: "Home",
//       href: "/home",
//     },
//     {
//       name: "Ritual Guide",
//       href: "/ritual-guide",
//     },
//     {
//       name: "Shop",
//       href: "/shop",
//     },
//     {
//       name: "Artists",
//       href: "/artists",
//     },
//     // {
//     //   name: "Gifts",
//     //   href: "/gifts",
//     // },
//     {
//       name: "Planning",
//       href: "/planning",
//     },
//     {
//       name: "Contact Us",
//       href: "/contact-us",
//     },
//   ];

//   return (
//     <header className="border-b border-[#E8D8C9] bg-[#FAF6F0] sticky top-0 z-50">
//       <div className="max-w-[1280px] mx-auto px-4 lg:px-6">
//         <div className="h-[90px] flex items-center justify-between">
//           {/* Logo */}
//           <Link href="/">
//             <h2 className="text-3xl font-serif text-[#722020]">Rituo</h2>
//           </Link>

//           {/* Desktop Nav */}
//           <nav className="hidden lg:flex items-center gap-8">
//             {navItems.map((item) => (
//               <Link
//                 key={item.name}
//                 href={item.href}
//                 className="
//                   text-[15px]
//                   font-medium
//                   tracking-wider
//                   hover:text-[#9A7B3E]
//                   transition
//                 "
//               >
//                 {item.name}
//               </Link>
//             ))}
//           </nav>

//           {/* Icons */}
//           <div className="hidden lg:flex items-center gap-5">
//             {/* Wishlist Link */}
//             <Link href="/wishlist" aria-label="Wishlist">
//               <button className="hover:text-gray-600 transition-colors">
//                 <Heart size={20} className="cursor-pointer"/>
//               </button>
//             </Link>

//             {/* Cart Link */}
//             <Link href="/cart" aria-label="Shopping Cart">
//               <button className="hover:text-gray-600 transition-colors">
//                 <ShoppingBag size={20} className="cursor-pointer"/>
//               </button>
//             </Link>

//             {/* Account Link */}
//             <Link href="/account" aria-label="Account">
//               <button className="hover:text-gray-600 transition-colors">
//                 <User size={20} className="cursor-pointer"/>
//               </button>
//             </Link>
//           </div>

//           {/* Mobile */}
//           <button className="lg:hidden" onClick={() => setOpen(!open)}>
//             {open ? <X /> : <Menu />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {/* <div
//         className={`
//           lg:hidden
//           overflow-hidden
//           transition-all
//           duration-300
//           ${open ? "max-h-[400px]" : "max-h-0"}
//         `}
//       >
//         <div className="px-6 pb-6 flex flex-col gap-5">
//           {navItems.map((item) => (
//             <Link key={item.name} href={item.href} className="font-medium">
//               {item.name}
//             </Link>
//           ))}
//         </div>
//       </div> */}

//       {/* Mobile Backdrop */}
// <div
//   className={`
//     fixed inset-0 z-40 bg-black/40 backdrop-blur-sm
//     transition-opacity duration-300 lg:hidden
//     ${open ? "opacity-100 visible" : "opacity-0 invisible"}
//   `}
//   onClick={() => setOpen(false)}
// />

// {/* Mobile Drawer */}
// <div
//   className={`
//     fixed top-0 right-0 h-screen w-[300px]
//     bg-[#FAF6F0]
//     z-50

//     shadow-[-10px_0_40px_rgba(0,0,0,0.12)]

//     transform
//     transition-transform
//     duration-300
//     ease-out

//     lg:hidden

//     ${open ? "translate-x-0" : "translate-x-full"}
//   `}
// >
//   {/* Drawer Header */}
//   <div className="h-[90px] px-6 flex items-center justify-between border-b border-[#E8D8C9]">
//     <h2 className="text-2xl font-serif text-[#722020]">
//       Rituo
//     </h2>

//     <button onClick={() => setOpen(false)}>
//       <X size={24} />
//     </button>
//   </div>

//   {/* Navigation */}
//   <div className="p-6 flex flex-col">
//     {navItems.map((item) => (
//       <Link
//         key={item.name}
//         href={item.href}
//         onClick={() => setOpen(false)}
//         className="
//           py-4
//           border-b
//           border-[#EEE5DC]

//           text-[#4F3A38]
//           font-medium

//           hover:text-[#9A7B3E]
//           transition-colors
//         "
//       >
//         {item.name}
//       </Link>
//     ))}

//     {/* Icons */}
//     <div className="flex gap-6 mt-8 pt-6 border-t border-[#EEE5DC]">
//       <Link href="/wishlist" onClick={() => setOpen(false)}>
//         <Heart size={22} />
//       </Link>

//       <Link href="/cart" onClick={() => setOpen(false)}>
//         <ShoppingBag size={22} />
//       </Link>

//       <Link href="/account" onClick={() => setOpen(false)}>
//         <User size={22} />
//       </Link>
//     </div>
//   </div>
// </div>
//     </header>
//   );
// }


"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Menu,
  X,
  Heart,
  ShoppingBag,
  User,
} from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Replace this with your actual auth state
  const isLoggedIn = false;

  const navItems = [
    {
      name: "Home",
      href: "/home",
    },
    {
      name: "Ritual Guide",
      href: "/ritual-guide",
    },
    {
      name: "Shop",
      href: "/shop",
    },
    {
      name: "Artists",
      href: "/artists",
    },
    {
      name: "Planning",
      href: "/planning",
    },
    {
      name: "Contact Us",
      href: "/contact-us",
    },
  ];

  return (
    <header className="border-b border-[#E8D8C9] bg-[#FAF6F0] sticky top-0 z-50">
      <div className="max-w-[1280px] mx-auto px-4 lg:px-6">
        <div className="h-[90px] flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <h2 className="text-3xl font-serif text-[#722020]">
              Rituo
            </h2>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="
                  text-[15px]
                  font-medium
                  tracking-wider
                  hover:text-[#9A7B3E]
                  transition
                "
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Right Section */}
          <div className="hidden lg:flex items-center gap-5">
            <Link href="/wishlist" aria-label="Wishlist">
              <button className="hover:text-[#9A7B3E] transition-colors">
                <Heart size={20} />
              </button>
            </Link>

            <Link href="/cart" aria-label="Shopping Cart">
              <button className="hover:text-[#9A7B3E] transition-colors">
                <ShoppingBag size={20} />
              </button>
            </Link>

            <Link href="/account" aria-label="Account">
              <button className="hover:text-[#9A7B3E] transition-colors">
                <User size={20} />
              </button>
            </Link>

            {!isLoggedIn && (
              <Link href="/login">
                <button
                  className="
                    px-5
                    py-2.5
                    rounded-full
                    bg-[#722020]
                    text-white
                    text-sm
                    font-medium
                    hover:bg-[#8E2B2B]
                    transition-all
                    duration-300
                  "
                >
                  Login
                </button>
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden"
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Backdrop */}
      <div
        className={`
          fixed inset-0 z-40 bg-black/40 backdrop-blur-sm
          transition-opacity duration-300 lg:hidden
          ${open ? "opacity-100 visible" : "opacity-0 invisible"}
        `}
        onClick={() => setOpen(false)}
      />

      {/* Mobile Drawer */}
      <div
        className={`
          fixed top-0 right-0 h-screen w-[300px]
          bg-[#FAF6F0]
          z-50
          shadow-[-10px_0_40px_rgba(0,0,0,0.12)]
          transform
          transition-transform
          duration-300
          ease-out
          lg:hidden
          ${open ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {/* Drawer Header */}
        <div className="h-[90px] px-6 flex items-center justify-between border-b border-[#E8D8C9]">
          <h2 className="text-2xl font-serif text-[#722020]">
            Rituo
          </h2>

          <button onClick={() => setOpen(false)}>
            <X size={24} />
          </button>
        </div>

        {/* Navigation */}
        <div className="p-6 flex flex-col h-full">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setOpen(false)}
              className="
                py-4
                border-b
                border-[#EEE5DC]
                text-[#4F3A38]
                font-medium
                hover:text-[#9A7B3E]
                transition-colors
              "
            >
              {item.name}
            </Link>
          ))}

          {/* Mobile Icons */}
          <div className="flex gap-6 mt-8 pt-6 border-t border-[#EEE5DC]">
            <Link
              href="/wishlist"
              onClick={() => setOpen(false)}
            >
              <Heart size={22} />
            </Link>

            <Link
              href="/cart"
              onClick={() => setOpen(false)}
            >
              <ShoppingBag size={22} />
            </Link>

            <Link
              href="/account"
              onClick={() => setOpen(false)}
            >
              <User size={22} />
            </Link>
          </div>

          {/* Login Button */}
          {!isLoggedIn && (
            <Link
              href="/auth/login"
              onClick={() => setOpen(false)}
              className="
                mt-8
                w-full
                bg-[#722020]
                text-white
                py-3
                rounded-full
                text-center
                font-medium
                hover:bg-[#8E2B2B]
                transition-all
                duration-300
              "
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}