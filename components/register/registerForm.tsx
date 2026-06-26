"use client";

import Link from "next/link";
import { useState } from "react";
import {
User,
Mail,
Lock,
ArrowRight,
Eye,
EyeOff,
} from "lucide-react";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const registerSchema = yup.object({
fullName: yup
.string()
.required("Full name is required"),

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

type RegisterFormData = yup.InferType<
typeof registerSchema

> ;

export default function RegisterForm() {
const [showPassword, setShowPassword] =
useState(false);

const {
register,
handleSubmit,
formState: {
errors,
isSubmitting,
},
} = useForm<RegisterFormData>({
resolver: yupResolver(registerSchema),
});

const onSubmit = async (
data: RegisterFormData
) => {
console.log(data);
};

return (
<div
className="
w-full
max-w-md

```
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
      Create Account
    </h1>

    <p
      className="
        hidden
        md:block

        mt-4

        text-[#6B5B57]
      "
    >
      Start planning your wedding
      journey today.
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

        text-[11px]

        tracking-[2px]

        text-[#9A8A7D]
      "
    >
      OR REGISTER WITH EMAIL
    </span>
  </div>

  <form
    onSubmit={handleSubmit(onSubmit)}
    className="space-y-5"
  >
    {/* Full Name */}

    <div>
      <label className="text-sm font-medium text-[#4B3937]">
        Full Name
      </label>

      <div className="relative mt-2">
        <User
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
          {...register("fullName")}
          type="text"
          placeholder="Enter your full name"
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

      {errors.fullName && (
        <p className="mt-2 text-sm text-red-500">
          {errors.fullName.message}
        </p>
      )}
    </div>

    {/* Email */}

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

    {/* Password */}

    <div>
      <label className="text-sm font-medium text-[#4B3937]">
        Password
      </label>

      <div className="relative mt-2">
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
        ? "Creating Account..."
        : "Create Account"}

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
    Already have an account?{" "}
    <Link
      href="/login"
      className="
        text-[#7A1D22]
        font-semibold
        hover:underline
      "
    >
      Sign In
    </Link>
  </p>
</div>

);
}
