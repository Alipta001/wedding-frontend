// import Link from "next/link";

// export default function Footer() {
//   return (
//     <footer className="bg-[#2B2520] text-white">
//       <div className="max-w-[1320px] mx-auto px-4 lg:px-6 py-20">
//         <div
//           className="
//             grid
//             grid-cols-1
//             md:grid-cols-2
//             xl:grid-cols-4
//             gap-12
//           "
//         >
//           {/* Brand */}

//           <div>
//             <h2
//               className="
//                 text-4xl
//                 font-serif
//                 text-[#D7BE85]
//               "
//             >
//               Rituo
//             </h2>

//             <p
//               className="
//                 mt-5
//                 text-white/70
//                 leading-8
//               "
//             >
//               Making sacred rituals accessible,
//               beautiful and meaningful for modern
//               families.
//             </p>
//           </div>

//           {/* Collections */}

//           <div>
//             <h3 className="font-semibold mb-5">
//               Collections
//             </h3>

//             <div className="flex flex-col gap-3">
//               <Link href="#">Wedding Kits</Link>
//               <Link href="#">Puja Essentials</Link>
//               <Link href="#">Home Rituals</Link>
//               <Link href="#">Festive Collections</Link>
//             </div>
//           </div>

//           {/* Company */}

//           <div>
//             <h3 className="font-semibold mb-5">
//               Company
//             </h3>

//             <div className="flex flex-col gap-3">
//               <Link href="#">About Us</Link>
//               <Link href="#">Artisans</Link>
//               <Link href="#">Journal</Link>
//               <Link href="#">Contact</Link>
//             </div>
//           </div>

//           {/* Contact */}

//           <div>
//             <h3 className="font-semibold mb-5">
//               Contact
//             </h3>

//             <div className="space-y-3 text-white/70">
//               <p>hello@rituo.com</p>
//               <p>+91 98765 43210</p>
//               <p>
//                 Kolkata, India
//               </p>
//             </div>
//           </div>
//         </div>

//         <div
//           className="
//             mt-16
//             pt-8
//             border-t
//             border-white/10
//             flex
//             flex-col
//             md:flex-row
//             justify-between
//             gap-4
//           "
//         >
//           <p className="text-white/50">
//             © 2026 Rituo. All rights reserved.
//           </p>

//           <div className="flex gap-6 text-white/50">
//             <Link href="#">Privacy</Link>
//             <Link href="#">Terms</Link>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#2B2520] text-white">
      <div className="max-w-[1320px] mx-auto px-4 lg:px-6 py-14 md:py-20">
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            xl:grid-cols-4
            gap-10 md:gap-12
          "
        >
          {/* Brand */}
          <div className="text-center sm:text-left">
            <h2 className="text-3xl md:text-4xl font-serif text-[#D7BE85]">
              Rituo
            </h2>

            <p className="mt-4 md:mt-5 text-sm md:text-base text-white/70 leading-7 md:leading-8">
              Making sacred rituals accessible, beautiful and meaningful for modern
              families.
            </p>
          </div>

          {/* Collections */}
          <div className="text-center sm:text-left">
            <h3 className="font-semibold mb-4 md:mb-5 text-sm md:text-base">
              Collections
            </h3>

            <div className="flex flex-col gap-2 md:gap-3 text-sm md:text-base text-white/80">
              <Link href="#">Wedding Kits</Link>
              <Link href="#">Puja Essentials</Link>
              <Link href="#">Home Rituals</Link>
              <Link href="#">Festive Collections</Link>
            </div>
          </div>

          {/* Company */}
          <div className="text-center sm:text-left">
            <h3 className="font-semibold mb-4 md:mb-5 text-sm md:text-base">
              Company
            </h3>

            <div className="flex flex-col gap-2 md:gap-3 text-sm md:text-base text-white/80">
              <Link href="#">About Us</Link>
              <Link href="#">Artisans</Link>
              <Link href="#">Journal</Link>
              <Link href="#">Contact</Link>
            </div>
          </div>

          {/* Contact */}
          <div className="text-center sm:text-left">
            <h3 className="font-semibold mb-4 md:mb-5 text-sm md:text-base">
              Contact
            </h3>

            <div className="space-y-2 md:space-y-3 text-white/70 text-sm md:text-base">
              <p>hello@rituo.com</p>
              <p>+91 98765 43210</p>
              <p>Kolkata, India</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className="
            mt-12 md:mt-16
            pt-6 md:pt-8
            border-t border-white/10

            flex flex-col md:flex-row
            items-center md:justify-between
            gap-4
          "
        >
          <p className="text-white/50 text-sm md:text-base text-center md:text-left">
            © 2026 Rituo. All rights reserved.
          </p>

          <div className="flex gap-5 md:gap-6 text-white/50 text-sm md:text-base">
            <Link href="#">Privacy</Link>
            <Link href="#">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}