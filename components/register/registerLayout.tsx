"use client";

import RegisterBrandPanel from "./registerBrandPanel";
import RegisterForm from "./registerForm";


export default function RegisterLayout() {
  return (
    <section className="min-h-screen bg-[#F8F3EC]">
      <div className="grid lg:grid-cols-2 min-h-screen">
        {/* Left Side */}
        <RegisterBrandPanel />

        {/* Right Side */}
        <div
          className="
            flex
            items-center
            justify-center

            min-h-screen

            px-4
            sm:px-6
            lg:px-10
          "
        >
          <RegisterForm />
        </div>
      </div>
    </section>
  );
}