"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function Navbar() {
  const pathname = usePathname();
  const navigations = [
    {
      name: "home",
      href: "/",
      index: 1,
    },
    {
      name: "about",
      href: "/About",
      index: 2,
    },
    {
      name: "contact",
      href: "/Contact",
      index: 3,
    },
  ];

  return (
    <div className="max-w-[500px] lg:px-0 sm:px-3 px-3 flex  mx-auto mt-[40px]">
      <nav className=" gap-4 flex flex-row items-center text-white  ">
        {navigations.map((navs) => (
          <Link
            key={navs.index}
            href={navs.href}
            className={`${
              pathname === navs.href
                ? "bg-white/50 py-[2px] px-2 rounded-lg"
                : "bg-none"
            }`}
          >
            {navs.name}
          </Link>
        ))}
      </nav>
    </div>
  );
}
