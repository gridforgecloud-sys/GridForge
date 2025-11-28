"use client";

import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/animations/FadeIn";
import { companyInfo } from "@/lib/constants";
import { MapPin, Target, Eye } from "lucide-react";

export function About() {
  return (
    <section id="about" className="relative py-24 md:py-32 bg-white overflow-hidden">
      {/* Diagonal accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-br from-primary-50 to-transparent" style={{ clipPath: 'polygon(30% 0, 100% 0, 100% 100%, 0 100%)' }}></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          {/* Left side - Large text block (non-symmetric) */}
          <FadeIn>
            <div className="lg:col-span-3">
              <div className="inline-block mb-4">
                <span className="text-sm font-semibold text-primary-600 uppercase tracking-wider">About Us</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Forging the Future
                <span className="block text-primary-600">of AI Infrastructure</span>
              </h2>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                {companyInfo.description}
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-primary-100 text-primary-600 mt-1">
                    <Target className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Mission</h3>
                    <p className="text-gray-600">{companyInfo.mission}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-blue-100 text-blue-600 mt-1">
                    <Eye className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Vision</h3>
                    <p className="text-gray-600">{companyInfo.vision}</p>
                  </div>
                </div>
              </div>

              <Link href="/about">
                <Button size="lg" className="bg-primary-600 hover:bg-primary-700">
                  Learn More
                </Button>
              </Link>
            </div>
          </FadeIn>

          {/* Right side - Card stack (non-symmetric) */}
          <FadeIn delay={0.3}>
            <div className="lg:col-span-2 space-y-6">
              {/* Main card */}
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 text-white border-2 border-gray-700 shadow-2xl">
                <h3 className="text-2xl font-bold mb-4">
                  {companyInfo.tagline}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  &ldquo;Forge&rdquo; represents our commitment to crafting powerful computing solutions that transform raw computational resources into strategic advantages.
                </p>
                <div className="pt-6 border-t border-gray-700">
                  <div className="flex items-center gap-3 text-gray-300">
                    <MapPin className="h-5 w-5 text-primary-400" />
                    <div>
                      <p className="text-sm text-gray-400">Service Region</p>
                      <p className="font-semibold">
                        {companyInfo.location.country} • {companyInfo.location.region}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Accent card */}
              <div className="bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl p-6 text-white transform rotate-2 hover:rotate-0 transition-transform">
                <div className="text-4xl font-black mb-2">FORGE</div>
                <p className="text-primary-100 text-sm">Computational Excellence</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

