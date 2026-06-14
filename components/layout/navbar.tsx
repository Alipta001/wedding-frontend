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

  const navItems = [
    {
      name:"Ritual Guide",
      href: '/ritual-guide'
    },
    {
      name:"Shop",
      href: '/shop'
    },
    {
      name:"Artists",
      href: '/artists'
    },
    {
      name:"Gifts",
      href: '/gifts'
    },
    {
      name:"Planning",
      href: '/planning'
    }
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

          {/* Icons */}
          <div className="hidden lg:flex items-center gap-5">

            <button>
              <Heart size={20} />
            </button>

            <button>
              <ShoppingBag size={20} />
            </button>

            <button>
              <User size={20} />
            </button>

          </div>

          {/* Mobile */}
          <button
            className="lg:hidden"
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </button>

        </div>

      </div>

      {/* Mobile Menu */}

      <div
        className={`
          lg:hidden
          overflow-hidden
          transition-all
          duration-300
          ${open ? "max-h-[400px]" : "max-h-0"}
        `}
      >
        <div className="px-6 pb-6 flex flex-col gap-5">

          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="font-medium"
            >
              {item.name}
            </Link>
          ))}

        </div>
      </div>

    </header>
  );
}