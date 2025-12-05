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
        const isDisabled = item.disabled;
        return (
          isDisabled ? (
            <span
              key={item.title}
              className="px-4 py-2 text-sm font-semibold rounded-lg text-gray-500 cursor-not-allowed select-none"
            >
              {item.title}
            </span>
          ) : (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "px-4 py-2 text-sm font-semibold transition-all duration-300 ease-in-out rounded-lg group",
                isActive
                  ? "text-primary-400 bg-primary-500/20"
                  : "text-gray-300 hover:text-white hover:bg-gray-800"
              )}
            >
              <span className="inline-block transition-transform duration-300 ease-in-out group-hover:scale-105">
                {item.title}
              </span>
            </Link>
          )
        );
      })}
    </nav>
  );
}

