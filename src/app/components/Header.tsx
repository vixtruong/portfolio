"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const menu = [
    { name: "Home", path: "home" },
    { name: "About", path: "about" },
    { name: "Experience", path: "experience" },
    { name: "Projects", path: "projects" },
    { name: "Skills", path: "skills" },
    { name: "Contact", path: "contact" },
  ];

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <header className="flex items-center justify-between py-4 px-[5%] md:px-[15%] bg-transparent fixed w-full top-0 z-50">
      <span
        onClick={() => scrollToSection("home")}
        className="cursor-pointer text-2xl font-bold text-blue-400 hover:text-white transition"
      >
        VIXTRUONG
      </span>

      {/* Desktop Menu */}
      <nav className="hidden md:flex gap-12 text-xl">
        {menu.map((item) => (
          <span
            key={item.path}
            onClick={() => scrollToSection(item.path)}
            className="cursor-pointer text-gray-200 hover:text-blue-400 transition"
          >
            {item.name}
          </span>
        ))}
      </nav>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-gray-200 hover:text-blue-400 transition"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="absolute top-16 right-5 bg-gray-900 rounded-xl shadow-lg p-5 flex flex-col gap-4 md:hidden">
          {menu.map((item) => (
            <span
              key={item.path}
              onClick={() => scrollToSection(item.path)}
              className="cursor-pointer text-gray-200 hover:text-blue-400 transition"
            >
              {item.name}
            </span>
          ))}
        </div>
      )}
    </header>
  );
}
