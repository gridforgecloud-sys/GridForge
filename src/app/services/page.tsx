"use client";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { FadeIn } from "@/components/animations/FadeIn";
import { services } from "@/config/services";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export default function ServicesPage() {
  return (
    <>
      <Section background="primary" className="pt-24">
        <Container>
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our Services
              </h1>
              <p className="text-xl text-gray-600">
                Comprehensive infrastructure solutions for your AI projects
              </p>
            </div>
          </FadeIn>
        </Container>
      </Section>

      <Section background="white">
        <Container>
          <div className="space-y-24">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={service.id} id={service.id} className="scroll-mt-24">
                  <FadeIn delay={index * 0.1}>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                      <div>
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
                      <Card className="h-full">
                        <div className="p-8">
                          <div className="aspect-video bg-gradient-to-br from-primary-50 to-primary-100 rounded-lg flex items-center justify-center mb-6">
                            <Icon className="h-16 w-16 text-primary-600" />
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

