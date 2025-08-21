"use client";

export default function Header() {
  const menu = [
    { name: "Home", path: "home" },
    { name: "About", path: "about" },
    { name: "Experiences", path: "experiences" },
    { name: "Projects", path: "projects" },
    { name: "Skills", path: "skills" },
    { name: "Contact", path: "contact" },
  ];

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="flex items-center justify-between py-4 px-[15%] bg-transparent fixed w-full top-0 z-50">
      <span
        onClick={() => scrollToSection("home")}
        className="cursor-pointer text-2xl font-bold text-blue-400 hover:text-white transition"
      >
        VIXTRUONG
      </span>

      <nav className="flex gap-12 text-xl">
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
    </header>
  );
}
