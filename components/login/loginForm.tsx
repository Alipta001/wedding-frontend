// "use client";

// import Link from "next/link";
// import { useState } from "react";

// import {
//   Mail,
//   Lock,
//   ArrowRight,
//   Eye,
//   EyeOff,
// } from "lucide-react";

// import { useForm } from "react-hook-form";

// import * as yup from "yup";

// import { yupResolver } from "@hookform/resolvers/yup";

// const loginSchema = yup.object({
//   email: yup
//     .string()
//     .email("Enter a valid email")
//     .required("Email is required"),

//   password: yup
//     .string()
//     .min(
//       6,
//       "Password must be at least 6 characters"
//     )
//     .required("Password is required"),

//   remember: yup.boolean(),
// });

// type LoginFormData = yup.InferType<
//   typeof loginSchema
// >;

// export default function LoginForm() {
//   const [showPassword, setShowPassword] =
//     useState(false);

//   const {
//     register,
//     handleSubmit,
//     formState: {
//       errors,
//       isSubmitting,
//     },
//   } = useForm<LoginFormData>({
//     resolver: yupResolver(loginSchema),
//   });

//   const onSubmit = async (
//     data: LoginFormData
//   ) => {
//     console.log(data);

//     /*
//       Login API Call
//     */
//   };

//   return (
//     <div
//       className="
//       bg-white/90
//       backdrop-blur-xl

//       rounded-[40px]

//       p-8
//       lg:p-10

//       border
//       border-white

//       shadow-[0_20px_80px_rgba(0,0,0,0.08)]
//     "
//     >
//       {/* Logo */}

//       <div className="flex justify-center mb-8">
//         <img
//           src="/images/logo.png"
//           alt="Rituo"
//           className="h-14 object-contain"
//         />
//       </div>

//       {/* Heading */}

//       <div className="text-center">
//         <h1
//           className="
//           text-4xl
//           font-serif
//           text-[#2F1D1B]
//         "
//         >
//           Welcome Back
//         </h1>

//         <p
//           className="
//           mt-3
//           text-[#6B5B57]
//         "
//         >
//           Sign in to continue your ritual
//           journey.
//         </p>
//       </div>

//       {/* Google Login */}

//       <button
//         type="button"
//         className="
//         w-full
//         mt-8

//         flex
//         items-center
//         justify-center
//         gap-3

//         py-4

//         rounded-2xl

//         border
//         border-[#E8DCCF]

//         hover:bg-[#FAF7F2]

//         transition
//       "
//       >
//         <img
//           src="https://www.svgrepo.com/show/475656/google-color.svg"
//           alt="Google"
//           className="w-5 h-5"
//         />

//         <span className="font-medium">
//           Continue with Google
//         </span>
//       </button>

//       {/* Divider */}

//       <div className="relative my-8">
//         <div className="border-t border-[#E8DCCF]" />

//         <span
//           className="
//           absolute
//           left-1/2
//           -translate-x-1/2
//           -top-3

//           bg-white

//           px-4

//           text-xs

//           tracking-[2px]

//           text-[#9A8A7D]
//         "
//         >
//           OR CONTINUE WITH EMAIL
//         </span>
//       </div>

//       {/* Form */}

//       <form
//         onSubmit={handleSubmit(onSubmit)}
//         className="space-y-5"
//       >
//         {/* Email */}

//         <div>
//           <label
//             className="
//             text-sm
//             font-medium
//             text-[#4B3937]
//           "
//           >
//             Email Address
//           </label>

//           <div className="relative mt-2">
//             <Mail
//               size={18}
//               className="
//               absolute
//               left-4
//               top-1/2
//               -translate-y-1/2
//               text-[#A08977]
//             "
//             />

//             <input
//               {...register("email")}
//               type="email"
//               placeholder="name@example.com"
//               className="
//               w-full

//               rounded-2xl

//               border
//               border-[#E7DBCF]

//               bg-[#FCFAF7]

//               py-4
//               pl-12
//               pr-4

//               outline-none

//               focus:border-[#A57C33]
//             "
//             />
//           </div>

//           {errors.email && (
//             <p
//               className="
//               mt-2
//               text-sm
//               text-red-500
//             "
//             >
//               {errors.email.message}
//             </p>
//           )}
//         </div>

//         {/* Password */}

//         <div>
//           <div className="flex justify-between mb-2">
//             <label
//               className="
//               text-sm
//               font-medium
//               text-[#4B3937]
//             "
//             >
//               Password
//             </label>

//             <Link
//               href="/forgot-password"
//               className="
//               text-sm
//               text-[#A57C33]
//               hover:underline
//             "
//             >
//               Forgot Password?
//             </Link>
//           </div>

//           <div className="relative">
//             <Lock
//               size={18}
//               className="
//               absolute
//               left-4
//               top-1/2
//               -translate-y-1/2
//               text-[#A08977]
//             "
//             />

//             <input
//               {...register("password")}
//               type={
//                 showPassword
//                   ? "text"
//                   : "password"
//               }
//               placeholder="••••••••"
//               className="
//               w-full

//               rounded-2xl

//               border
//               border-[#E7DBCF]

//               bg-[#FCFAF7]

//               py-4
//               pl-12
//               pr-12

//               outline-none

//               focus:border-[#A57C33]
//             "
//             />

//             <button
//               type="button"
//               onClick={() =>
//                 setShowPassword(
//                   !showPassword
//                 )
//               }
//               className="
//               absolute
//               right-4
//               top-1/2
//               -translate-y-1/2

//               text-[#A08977]
//             "
//             >
//               {showPassword ? (
//                 <EyeOff size={18} />
//               ) : (
//                 <Eye size={18} />
//               )}
//             </button>
//           </div>

//           {errors.password && (
//             <p
//               className="
//               mt-2
//               text-sm
//               text-red-500
//             "
//             >
//               {errors.password.message}
//             </p>
//           )}
//         </div>

//         {/* Remember */}

//         <label
//           className="
//           flex
//           items-center
//           gap-3
//         "
//         >
//           <input
//             {...register("remember")}
//             type="checkbox"
//             className="
//             accent-[#7A1D22]
//           "
//           />

//           <span
//             className="
//             text-sm
//             text-[#6B5B57]
//           "
//           >
//             Remember me for 30 days
//           </span>
//         </label>

//         {/* Submit */}

//         <button
//           type="submit"
//           disabled={isSubmitting}
//           className="
//           w-full

//           py-4

//           rounded-2xl

//           bg-[#7A1D22]

//           text-white

//           flex
//           items-center
//           justify-center
//           gap-2

//           hover:bg-[#65171B]

//           transition
//         "
//         >
//           {isSubmitting
//             ? "Signing In..."
//             : "Sign In"}

//           <ArrowRight size={18} />
//         </button>
//       </form>

//       {/* Trust Stats */}

//       <div
//         className="
//         mt-8

//         grid
//         grid-cols-3

//         gap-4

//         text-center

//         border-t
//         border-[#EEE3D7]

//         pt-6
//       "
//       >
//         <div>
//           <h4
//             className="
//             font-semibold
//             text-[#2F1D1B]
//           "
//           >
//             500+
//           </h4>

//           <p
//             className="
//             text-xs
//             text-[#8A7772]
//           "
//           >
//             Artisans
//           </p>
//         </div>

//         <div>
//           <h4
//             className="
//             font-semibold
//             text-[#2F1D1B]
//           "
//           >
//             10K+
//           </h4>

//           <p
//             className="
//             text-xs
//             text-[#8A7772]
//           "
//           >
//             Orders
//           </p>
//         </div>

//         <div>
//           <h4
//             className="
//             font-semibold
//             text-[#2F1D1B]
//           "
//           >
//             4.9★
//           </h4>

//           <p
//             className="
//             text-xs
//             text-[#8A7772]
//           "
//           >
//             Rating
//           </p>
//         </div>
//       </div>

//       {/* Footer */}

//       <p
//         className="
//         text-center
//         mt-8
//         text-[#6B5B57]
//       "
//       >
//         Don't have an account?{" "}
//         <Link
//           href="/register"
//           className="
//           font-semibold
//           text-[#7A1D22]
//           hover:underline
//         "
//         >
//           Join Rituo
//         </Link>
//       </p>
//     </div>
//   );
// }


"use client";

import Link from "next/link";
import { useState } from "react";
import {
Mail,
Lock,
ArrowRight,
Eye,
EyeOff,
} from "lucide-react";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const loginSchema = yup.object({
email: yup
.string()
.email("Enter a valid email")
.required("Email is required"),

password: yup
.string()
.min(
6,
"Password must be at least 6 characters"
)
.required("Password is required"),

remember: yup.boolean(),
});

type LoginFormData = yup.InferType<
typeof loginSchema

> ;

export default function LoginForm() {
const [showPassword, setShowPassword] =
useState(false);

const {
register,
handleSubmit,
formState: {
errors,
isSubmitting,
},
} = useForm<LoginFormData>({
resolver: yupResolver(loginSchema),
});

const onSubmit = async (
data: LoginFormData
) => {
console.log(data);
};

return (
<div
  className="
    w-full
    max-w-full
    mx-auto
    px-5
    sm:px-8
  "
>
  {/* Logo */}

  <div className="flex justify-center mb-8">
    <div
      className="
        h-24
        w-24

        md:h-20
        md:w-20

        rounded-full

        bg-white

        shadow-xl

        border
        border-[#E7D9CC]

        flex
        items-center
        justify-center
      "
    >
      <img
        src="/images/logo.jpeg"
        alt="Rituo"
        className="
          h-16
          w-16

          md:h-14
          md:w-14

          rounded-full
          object-cover
        "
      />
    </div>
  </div>

  {/* Heading */}

  <div className="text-center">
    <span
      className="
        uppercase
        tracking-[4px]
        text-[#A57C33]
        text-xs
      "
    >
      Welcome To Rituo
    </span>

    <h1
      className="
        mt-4
        text-4xl
        md:text-5xl

        font-serif

        text-[#2F1D1B]
      "
    >
      Sign In
    </h1>

    <p
      className="
        hidden
        md:block

        mt-4

        text-[#6B5B57]
      "
    >
      Continue planning your wedding
      journey.
    </p>
  </div>

  {/* Google */}

  <button
    type="button"
    className="
      w-full

      mt-8

      h-14

      rounded-2xl

      bg-white

      border
      border-[#E7DBCF]

      flex
      items-center
      justify-center
      gap-3

      hover:bg-[#FAF7F2]

      transition
    "
  >
    <img
      src="https://www.svgrepo.com/show/475656/google-color.svg"
      alt="Google"
      className="w-5 h-5"
    />

    <span className="font-medium">
      Continue with Google
    </span>
  </button>

  {/* Divider */}

  <div className="relative my-8">
    <div className="border-t border-[#E7DBCF]" />

    <span
  className="
    absolute
    left-1/2
    -translate-x-1/2
    -top-3

    bg-[#F8F3EC]

    px-4

    whitespace-nowrap

    text-[10px]
    sm:text-[11px]

    tracking-[1.5px]
    sm:tracking-[2px]

    text-[#9A8A7D]
  "
>
  OR CONTINUE WITH EMAIL
</span>
  </div>

  {/* Form */}

  <form
    onSubmit={handleSubmit(onSubmit)}
    className="space-y-5"
  >
    <div>
      <label className="text-sm font-medium text-[#4B3937]">
        Email Address
      </label>

      <div className="relative mt-2">
        <Mail
          size={18}
          className="
            absolute
            left-4
            top-1/2
            -translate-y-1/2

            text-[#A08977]
          "
        />

        <input
          {...register("email")}
          type="email"
          placeholder="name@example.com"
          className="
            w-full
            h-14

            rounded-2xl

            bg-white

            border
            border-[#E7DBCF]

            pl-12
            pr-4

            outline-none

            focus:border-[#A57C33]
          "
        />
      </div>

      {errors.email && (
        <p className="mt-2 text-sm text-red-500">
          {errors.email.message}
        </p>
      )}
    </div>

    <div>
      <div className="flex justify-between mb-2">
        <label className="text-sm font-medium text-[#4B3937]">
          Password
        </label>

        <Link
          href="/forgot-password"
          className="
            text-sm
            text-[#A57C33]
            hover:underline
          "
        >
          Forgot Password?
        </Link>
      </div>

      <div className="relative">
        <Lock
          size={18}
          className="
            absolute
            left-4
            top-1/2
            -translate-y-1/2

            text-[#A08977]
          "
        />

        <input
          {...register("password")}
          type={
            showPassword
              ? "text"
              : "password"
          }
          placeholder="••••••••"
          className="
            w-full
            h-14

            rounded-2xl

            bg-white

            border
            border-[#E7DBCF]

            pl-12
            pr-12

            outline-none

            focus:border-[#A57C33]
          "
        />

        <button
          type="button"
          onClick={() =>
            setShowPassword(
              !showPassword
            )
          }
          className="
            absolute
            right-4
            top-1/2
            -translate-y-1/2

            text-[#A08977]
          "
        >
          {showPassword ? (
            <EyeOff size={18} />
          ) : (
            <Eye size={18} />
          )}
        </button>
      </div>

      {errors.password && (
        <p className="mt-2 text-sm text-red-500">
          {errors.password.message}
        </p>
      )}
    </div>

    <label className="flex items-center gap-3">
      <input
        {...register("remember")}
        type="checkbox"
        className="accent-[#7A1D22]"
      />

      <span className="text-sm text-[#6B5B57]">
        Remember me
      </span>
    </label>

    <button
      type="submit"
      disabled={isSubmitting}
      className="
        w-full
        h-14

        rounded-2xl

        bg-[#7A1D22]

        text-white

        flex
        items-center
        justify-center
        gap-2

        hover:bg-[#65171B]

        transition
      "
    >
      {isSubmitting
        ? "Signing In..."
        : "Sign In"}

      <ArrowRight size={18} />
    </button>
  </form>

  <p
    className="
      text-center
      mt-8

      text-[#6B5B57]
    "
  >
    Don't have an account?{" "}
    <Link
      href="/register"
      className="
        text-[#7A1D22]
        font-semibold
        hover:underline
      "
    >
      Join Rituo
    </Link>
  </p>
</div>

);
}
