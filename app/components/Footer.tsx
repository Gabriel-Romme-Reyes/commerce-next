"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const links = [
  { name: "Home", href: "/" },
  { name: "Shirts", href: "/Shirt" },
  { name: "Pants", href: "/Pants" },
  { name: "Shoes", href: "/Shoes" },
];

const Footer = () => {
  const pathname = usePathname();
  return (
    <footer className="bg-black mt-24">
      <div className="flex items-start justify-between mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl text-white py-8">
        <Link href="/">
          <h1 className="text-2xl md:text-4xl font-bold">
            Drip<span className="text-primary">Commerce</span>
          </h1>
        </Link>

        <nav className="hidden gap-8 lg:flex flex-col 2xl:ml-16">
          {links.map((link, idx) => (
            <div key={idx}>
              {pathname === link.href ? (
                <Link
                  className="text-lg font-semibold text-primary"
                  href={link.href}
                >
                  {link.name}
                </Link>
              ) : (
                <Link
                  href={link.href}
                  className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-primary"
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}
        </nav>
      </div>
      <div className="px-4 sm:px-6 py-6 border-t text-white">
        <h1 className="text-center">@2024 Gabriel Romme Reyes</h1>
      </div>
    </footer>
  );
};

export default Footer;
