"use client";

import Link from "next/link";
import { FadeIn } from "@/components/animations/FadeIn";
import { services } from "@/config/services";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

export function Services() {
  const serviceImages: Record<string, string> = {
    "server-compute": "/images/services/home-server-compute.jpg",
    "cloud-hosting": "/images/services/home-cloud-hosting.jpg",
    "data-pipeline": "/images/services/home-data-pipeline.jpg",
    devops: "/images/services/home-devops.jpg",
    "grid-computing": "/images/services/home-grid-computing.jpg",
  };

  return (
    <section id="services" className="relative py-24 md:py-32 bg-white">
      {/* Diagonal split background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0 100%)' }}></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="mb-16">
            <div className="inline-block mb-4">
              <span className="text-sm font-semibold text-primary-600 uppercase tracking-wider">Services</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4 max-w-2xl">
              Infrastructure Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl">
              Five core services engineered for AI excellence
            </p>
          </div>
        </FadeIn>

        {/* Timeline-style layout (non-symmetric) */}
        <div className="space-y-8 md:space-y-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isEven = index % 2 === 0;
            
            return (
              <FadeIn key={service.id} delay={index * 0.15}>
                <div className={`relative flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center`}>
                  {/* Content side */}
                  <div className={`flex-1 ${isEven ? 'md:pr-12' : 'md:pl-12'}`}>
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`p-4 rounded-xl bg-gradient-to-br ${isEven ? 'from-primary-500 to-primary-600' : 'from-blue-500 to-blue-600'} text-white shadow-lg`}>
                        <Icon className="h-6 w-6" />
                      </div>
                      <div>
                        <div className="inline-block mb-2">
                          <span className="text-xs font-bold text-gray-500">0{index + 1}</span>
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                          {service.title}
                        </h3>
                        <p className="text-gray-600 mb-4 leading-relaxed">
                          {service.description}
                        </p>
                        <Link
                          href={`/services#${service.id}`}
                          className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold group"
                        >
                          Learn More
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* Visual side */}
                  <div className="flex-1">
                    <div className={`relative ${isEven ? 'md:ml-auto' : 'md:mr-auto'} max-w-md`}>
                      <div className="aspect-square rounded-2xl overflow-hidden border-2 border-gray-200 shadow-md">
                        <img
                          src={serviceImages[service.id] ?? "/images/services/grid-computing.jpg"}
                          alt={service.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent"></div>
                      </div>
                      {/* Decorative element */}
                      <div className={`absolute -z-10 ${isEven ? '-bottom-4 -right-4' : '-bottom-4 -left-4'} w-full h-full bg-gray-200 rounded-2xl`}></div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>

        <FadeIn delay={0.8}>
          <div className="mt-16 text-center">
            <Link href="/services">
              <Button size="lg" variant="outline" className="border-2 border-gray-300 hover:border-primary-600">
                View All Services
              </Button>
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

