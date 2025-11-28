"use client";

import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/animations/FadeIn";
import { siteConfig } from "@/config/site";
import { Mail, ArrowRight, Sparkles } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="relative py-24 md:py-32 bg-gradient-to-br from-primary-600 via-primary-700 to-blue-600 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <FadeIn>
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 border border-white/30 mb-6">
                <Sparkles className="h-4 w-4 text-white" />
                <span className="text-sm font-medium text-white">Get Started Today</span>
              </div>
              
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Ready to Forge
                <span className="block">Your AI Future?</span>
              </h2>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Contact our team to discover how we can transform your computational infrastructure
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link href="/contact">
                  <Button size="lg" className="bg-white text-primary-600 hover:bg-gray-100 border-0 shadow-xl">
                    <Mail className="mr-2 h-5 w-5" />
                    Send Email
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10">
                    Get in Touch
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>

              <div className="flex items-center gap-3 text-white/80">
                <Mail className="h-5 w-5" />
                <a
                  href={`mailto:${siteConfig.links.email}`}
                  className="text-white hover:text-white/80 font-medium underline"
                >
                  {siteConfig.links.email}
                </a>
              </div>
            </div>
          </FadeIn>

          {/* Right side - Visual element */}
          <FadeIn delay={0.3}>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/20">
                <div className="space-y-6">
                  <div className="text-6xl font-black text-white/20">"</div>
                  <p className="text-xl text-white leading-relaxed">
                    Transform your AI infrastructure with GridForge's cutting-edge solutions. From compute to cloud, we forge the foundation for your success.
                  </p>
                  <div className="flex items-center gap-4 pt-6 border-t border-white/20">
                    <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                      <Sparkles className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="text-white font-semibold">GridForge Technology</p>
                      <p className="text-white/70 text-sm">EMEA Region</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-white/10 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-400/20 rounded-full blur-2xl"></div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

