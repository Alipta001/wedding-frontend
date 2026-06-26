// import LoginForm from "./loginForm";
// import BrandPanel from "./brandPanel";
// export default function LoginLayout() {
//   return (
//     <section
//       className="
//       min-h-screen
//       bg-[#F8F3EC]
//       relative
//       overflow-hidden
//       flex
//       items-center
//       justify-center
//       px-6
//       py-10
//     "
//     >
//       {/* background blobs */}

//       <div
//         className="
//         absolute
//         top-0
//         right-0
//         w-[500px]
//         h-[500px]
//         bg-[#D8B27A]/10
//         rounded-full
//         blur-[120px]
//       "
//       />

//       <div
//         className="
//         absolute
//         bottom-0
//         left-0
//         w-[450px]
//         h-[450px]
//         bg-[#7A1D22]/10
//         rounded-full
//         blur-[120px]
//       "
//       />

//       <div
//         className="
//         max-w-6xl
//         w-full
//         grid
//         lg:grid-cols-2
//         gap-10
//         items-center
//       "
//       > 
//         <BrandPanel />

//         <LoginForm />
//       </div>
//     </section>
//   );
// }


"use client";
import LoginBrandPanel from "./loginBrandPanel";
import LoginForm from "./loginForm";


export default function LoginLayout() {
  return (
    <section className="min-h-screen bg-[#F8F3EC]">
      <div className="grid lg:grid-cols-2 min-h-screen">
        {/* Left Side */}
        <LoginBrandPanel />

        {/* Right Side */}
        <div
          className="
            flex
            items-center
            justify-center

            min-h-screen

            lg:min-h-screen
          "
        >
          <LoginForm />
        </div>
      </div>
    </section>
  );
}