"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
  { href: "/client-portal", label: "Client Portal" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0f172a] backdrop-blur-sm border-b border-[#1e293b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <Image
              src="/logo.png"
              alt="Social Drive"
              width={160}
              height={48}
              className="object-contain"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-white/80 hover:text-white transition-colors rounded-lg hover:bg-white/10"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://smallbizhq.co"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-3 px-4 py-2 text-sm font-semibold text-white rounded-lg gradient-accent hover:opacity-90 transition-opacity"
            >
              Start Free
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg text-white/80 hover:bg-white/10 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-[#1e293b] bg-[#0f172a]">
          <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="px-4 py-3 text-sm font-medium text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://smallbizhq.co"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="mt-2 px-4 py-3 text-sm font-semibold text-white text-center rounded-lg gradient-accent hover:opacity-90 transition-opacity"
            >
              Start Free with SmallBizHQ
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
