"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Navigation } from "./Navigation";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { navItems } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="absolute inset-0 bg-gray-900/95 backdrop-blur-md border-b border-gray-800"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <img 
              src="/images/logo(1).png" 
              alt="GridForge Logo" 
              className="h-14 md:h-16 w-auto brightness-0 invert transition-opacity group-hover:opacity-80 scale-[1.1]"
            />
          </Link>

          {/* Desktop Navigation */}
          <Navigation />

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link href="/contact">
              <Button size="sm" className="bg-primary-600 hover:bg-primary-700 text-white border-0">
                Contact Us
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-300 hover:text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-800 py-4 bg-gray-900/98">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) =>
                item.disabled ? (
                  <span
                    key={item.title}
                    className="text-base font-medium text-gray-500 cursor-not-allowed select-none"
                  >
                    {item.title}
                  </span>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-base font-medium text-gray-300 hover:text-primary-400 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.title}
                  </Link>
                )
              )}
              <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="w-full">
                <Button size="sm" className="w-full bg-primary-600 hover:bg-primary-700 text-white">Contact Us</Button>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

