"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  "About",
  "Skills",
  "Projects",
  "Experience",
  "Education",
  "Contact",
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-black/20 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        <h1 className="text-2xl font-bold">
          Ammar<span className="text-cyan-400">.</span>
        </h1>

        <div className="hidden md:flex gap-8">
          {links.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:text-cyan-400 transition"
            >
              {item}
            </a>
          ))}
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-[#10172A]">
          {links.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="block p-5 border-b border-white/10"
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}