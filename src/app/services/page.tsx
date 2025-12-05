"use client";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { FadeIn } from "@/components/animations/FadeIn";
import { services } from "@/config/services";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export default function ServicesPage() {
  const serviceImages: Record<string, string> = {
    "server-compute": "/images/services/server-compute.jpg",
    "cloud-hosting": "/images/services/cloud-hosting.jpg",
    "data-pipeline": "/images/services/data-pipeline.jpg",
    devops: "/images/services/devops.jpg",
    "grid-computing": "/images/services/grid-computing.jpg",
  };

  return (
    <>
      <div className="relative min-h-[60vh] flex items-center overflow-hidden">
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

        {/* Background accents (static, lower opacity) */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
        </div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

        {/* Center logo overlay */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <img
            src="/images/logo(1).png"
            alt="GridForge Logo"
            className="h-[60%] w-auto opacity-[0.08]"
          />
        </div>

        <div className="relative z-10 w-full">
        <Container>
          <FadeIn>
              <div className="max-w-3xl mx-auto text-center py-20 md:py-32">
                <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
                Our Services
              </h1>
                <p className="text-xl md:text-2xl text-gray-300">
                Comprehensive infrastructure solutions for your AI projects
              </p>
            </div>
          </FadeIn>
        </Container>
        </div>
      </div>

      <Section background="white">
        <Container>
          <div className="space-y-24">
            {services.map((service, index) => {
              const Icon = service.icon;
              const imageFirst = index % 2 === 1; // alternate layout
              const contentOrder = imageFirst ? "order-1 lg:order-2" : "order-1 lg:order-1";
              const imageOrder = imageFirst ? "order-2 lg:order-1" : "order-2 lg:order-2";
              return (
                <div key={service.id} id={service.id} className="scroll-mt-24">
                  <FadeIn delay={index * 0.1}>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                      <div className={contentOrder}>
                        <div className="flex items-center mb-6">
                          <div className="p-4 rounded-xl bg-primary-100 text-primary-600">
                            <Icon className="h-8 w-8" />
                          </div>
                          <h2 className="ml-4 text-3xl md:text-4xl font-bold text-gray-900">
                            {service.title}
                          </h2>
                        </div>
                        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                          {service.longDescription}
                        </p>
                        <div className="space-y-3">
                          <h3 className="text-xl font-semibold text-gray-900 mb-4">
                            Key Features:
                          </h3>
                          <ul className="space-y-2">
                            {service.features.map((feature, idx) => (
                              <li key={idx} className="flex items-start">
                                <span className="text-primary-600 mr-3 mt-1">✓</span>
                                <span className="text-gray-600">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <Card className={imageOrder}>
                        <div className="p-8">
                          <div className="aspect-video rounded-lg overflow-hidden border-2 border-primary-100 mb-6 relative">
                            <img
                              src={serviceImages[service.id] ?? "/images/services/grid-computing.jpg"}
                              alt={service.title}
                              className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                          </div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-4">
                            {service.shortTitle}
                          </h3>
                          <p className="text-gray-600 mb-6">
                            {service.description}
                          </p>
                          <Link href="/contact">
                            <Button>Inquire About This Service</Button>
                          </Link>
                        </div>
                      </Card>
                    </div>
                  </FadeIn>
                </div>
              );
            })}
          </div>
        </Container>
      </Section>

      <Section background="gray">
        <Container>
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Need a Customized Solution?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our team can provide tailored infrastructure solutions based on your specific requirements
              </p>
              <Link href="/contact">
                <Button size="lg">Contact Us</Button>
              </Link>
            </div>
          </FadeIn>
        </Container>
      </Section>
    </>
  );
}

