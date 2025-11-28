"use client";

import { FadeIn } from "@/components/animations/FadeIn";
import { Zap, Shield, Globe, TrendingUp } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "High Performance Computing",
    description: "Optimized hardware configurations and software stacks ensure your AI workloads achieve peak performance",
    color: "from-yellow-400 to-orange-500",
  },
  {
    icon: Shield,
    title: "Enterprise-Grade Security",
    description: "Multi-layered security protection, industry-standard compliance, safeguarding your data and infrastructure",
    color: "from-green-400 to-emerald-500",
  },
  {
    icon: Globe,
    title: "EMEA Regional Coverage",
    description: "Localized services in the EMEA region with low latency and high availability",
    color: "from-blue-400 to-cyan-500",
  },
  {
    icon: TrendingUp,
    title: "Scalable Architecture",
    description: "From startup to enterprise scale, our solutions grow with your business",
    color: "from-purple-400 to-pink-500",
  },
];

export function Features() {
  return (
    <section id="features" className="relative py-24 md:py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="mb-16">
            <div className="inline-block mb-4">
              <span className="text-sm font-semibold text-primary-400 uppercase tracking-wider">Advantages</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Why GridForge
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl">
              Four pillars of excellence in AI infrastructure
            </p>
          </div>
        </FadeIn>

        {/* Asymmetric grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isLarge = index === 0 || index === 3;
            
            return (
              <FadeIn key={feature.title} delay={index * 0.15}>
                <div className={`group relative ${isLarge ? 'md:col-span-1' : 'md:col-span-1'}`}>
                  <div className="relative h-full bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-2xl p-8 hover:border-primary-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary-500/20">
                    {/* Gradient accent */}
                    <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${feature.color} opacity-20 blur-3xl rounded-full`}></div>
                    
                    <div className="relative z-10">
                      <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} mb-6 shadow-lg`}>
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-3">
                        {feature.title}
                      </h3>
                      <p className="text-gray-400 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>

                    {/* Hover effect line */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}

