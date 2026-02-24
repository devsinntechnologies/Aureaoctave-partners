
"use client";


import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function NavBar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "HOME", href: "/" },
    // { name: "TEAM", href: "/team" },
    // { name: "FOUNDERS", href: "/founders" },
    { name: "WHO WE ARE", href: "/who-we-are" },
    { name: "DISCLOSURES", href: "/disclosures" },
    { name: "CONTACT US", href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
        ${scrolled ? "bg-[#0B1116]/90 shadow-lg backdrop-blur-sm" : "bg-transparent"}
      `}
    >
      <div className="max-w-7xl mx-auto px-8 py-6 flex justify-between items-center">
        {/* Logo */}
        <div className="text-white text-2xl font-bold tracking-widest">
          Aurea Octave Partners
        </div>
        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-10">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`relative text-sm tracking-widest transition-colors duration-300 ${isActive
                  ? "text-white"
                  : "text-gray-400 hover:text-white"
                  }`}
              >
                {item.name}
                {/* Active underline */}
                {isActive && (
                  <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-[#3AF5C4]" />
                )}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
