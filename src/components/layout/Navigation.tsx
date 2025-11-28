"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="hidden md:flex items-center space-x-1">
      {navItems.map((item) => {
        const isActive = pathname === item.href;
        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "px-4 py-2 text-sm font-semibold transition-all duration-200 rounded-lg",
              isActive
                ? "text-primary-400 bg-primary-500/20"
                : "text-gray-300 hover:text-white hover:bg-gray-800"
            )}
          >
            {item.title}
          </Link>
        );
      })}
    </nav>
  );
}

