"use client";

import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/animations/FadeIn";
import { ArrowRight, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <div className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img 
          src="/images/hero-bg.svg" 
          alt="GridForge background" 
          className="w-full h-full object-cover"
          style={{ objectPosition: 'center' }}
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-gray-800/70 to-primary-900/80"></div>
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="relative z-10 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Content (non-symmetric positioning) */}
            <FadeIn>
              <div className="lg:pl-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/20 border border-primary-400/30 mb-6">
                  <Sparkles className="h-4 w-4 text-primary-400" />
                  <span className="text-sm font-medium text-primary-300">EMEA Region • AI Infrastructure</span>
                </div>
                
                <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
                  Forge
                  <span className="block text-primary-400">Computational</span>
                  <span className="block">Power</span>
                </h1>
                
                <p className="text-xl md:text-2xl text-gray-300 mb-4 leading-relaxed max-w-xl">
                  Transform raw compute into strategic AI advantage
                </p>
                
                <p className="text-lg text-gray-400 mb-10 max-w-xl">
                  High-performance grid computing, cloud infrastructure, and data pipelines engineered for the EMEA region
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/services">
                    <Button size="lg" className="bg-primary-600 hover:bg-primary-700 text-white border-0">
                      Explore Services
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                  <Link href="/contact">
                    <Button size="lg" variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800">
                      Get Started
                    </Button>
                  </Link>
                </div>
              </div>
            </FadeIn>

            {/* Right side - Visual element (non-symmetric) */}
            <FadeIn delay={0.3}>
              <div className="relative lg:pr-8">
                <div className="relative">
                  {/* Large number/stat */}
                  <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary-500/30 rounded-full blur-2xl"></div>
                  <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-2xl p-8 md:p-12 backdrop-blur-sm">
                    <div className="space-y-6">
                      <div className="flex items-baseline gap-2">
                        <span className="text-6xl md:text-8xl font-black text-primary-400">5</span>
                        <span className="text-2xl text-gray-400">Core Services</span>
                      </div>
                      <div className="h-px bg-gradient-to-r from-transparent via-primary-500 to-transparent"></div>
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 rounded-full bg-primary-400"></div>
                          <span className="text-gray-300">Server Compute</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 rounded-full bg-primary-400"></div>
                          <span className="text-gray-300">Cloud Hosting</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 rounded-full bg-primary-400"></div>
                          <span className="text-gray-300">Data Pipeline</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 rounded-full bg-primary-400"></div>
                          <span className="text-gray-300">DevOps</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 rounded-full bg-primary-400"></div>
                          <span className="text-gray-300">Grid Computing</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 bg-primary-400 rounded-full"></div>
        </div>
      </div>
    </div>
  );
}

