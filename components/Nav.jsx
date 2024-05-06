"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function Navbar() {
  const pathname = usePathname();
  const navigations = [
    {
      name: "home",
      href: "/",
    },
    {
      name: "about",
      href: "/About",
    },
    {
      name: "contact",
      href: "/Contact",
    },
  ];

  return (
    <div className="max-w-[500px] flex  mx-auto mt-[40px]">
      <nav className=" gap-4 flex flex-row items-center text-white  ">
        {navigations.map((navs) => (
          <Link
            href={navs.href}
            className={`${
              pathname === navs.href
                ? "bg-white/50 py-[2px] px-2 rounded-lg"
                : ""
            }`}
          >
            {navs.name}
          </Link>
        ))}
      </nav>
    </div>
  );
}
