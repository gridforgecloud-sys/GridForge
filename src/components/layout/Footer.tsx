import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/config/site";
import { navItems } from "@/lib/constants";
import { Mail } from "lucide-react";

export function Footer() {
  const currentYear = 2025;

  return (
    <footer className="relative border-t border-gray-800 bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      <Container>
        <div className="relative z-10 py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="col-span-1 md:col-span-2">
              <Link href="/" className="flex items-center space-x-2 mb-4 group">
                <img
                  src="/images/logo(1).png"
                  alt="GridForge Logo"
                  className="h-14 md:h-16 w-auto brightness-0 invert transition-opacity group-hover:opacity-80 scale-[1.1]"
                />
              </Link>
              <p className="text-gray-400 text-sm mb-4 max-w-md">
                {siteConfig.fullName}
              </p>
              <p className="text-gray-400 text-sm mb-4">
                Leading AI infrastructure solutions provider for the EMEA region
              </p>
              <div className="flex items-center space-x-2 text-gray-400 text-sm">
                <Mail size={16} className="text-primary-400" />
                <a
                  href={`mailto:${siteConfig.links.email}`}
                  className="hover:text-primary-400 transition-colors"
                >
                  {siteConfig.links.email}
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-bold text-white mb-4">Quick Links</h3>
              <ul className="space-y-3">
                {navItems.map((item) => (
                  <li key={item.href || item.title}>
                    {item.disabled ? (
                      <span className="text-sm text-gray-500 cursor-not-allowed select-none">
                        {item.title}
                      </span>
                    ) : (
                      <Link
                        href={item.href}
                        className="text-sm text-gray-400 hover:text-primary-400 transition-colors"
                      >
                        {item.title}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-bold text-white mb-4">Services</h3>
              <ul className="space-y-3 text-sm text-gray-400">
                <li className="hover:text-primary-400 transition-colors cursor-default">Server / Compute</li>
                <li className="hover:text-primary-400 transition-colors cursor-default">Cloud Hosting</li>
                <li className="hover:text-primary-400 transition-colors cursor-default">Data Pipeline</li>
                <li className="hover:text-primary-400 transition-colors cursor-default">DevOps</li>
                <li className="hover:text-primary-400 transition-colors cursor-default">Grid Computing</li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 pt-8 border-t border-gray-800">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-sm text-gray-400">
                © {currentYear} {siteConfig.fullName}. All rights reserved.
              </p>
              <p className="text-sm text-gray-400">
                {siteConfig.location.country} • {siteConfig.location.region}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}

