"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const menu = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Lab", path: "/lab" },
  ];

  return (
    <header className="flex items-center justify-between px-8 py-4 bg-transparent fixed w-full top-0 z-50">
      {/* Logo */}
      <Link
        href="/"
        className="text-2xl font-bold text-purple-400 hover:text-white transition"
      >
        <span>VIXTRUONG</span>
      </Link>

      {/* Menu */}
      <nav className="flex gap-8">
        {menu.map((item) => (
          <Link
            key={item.path}
            href={item.path}
            className={`hover:text-purple-400 transition ${
              pathname === item.path
                ? "text-purple-300 font-semibold"
                : "text-gray-200"
            }`}
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </header>
  );
}
