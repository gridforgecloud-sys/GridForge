"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/animations/FadeIn";
import { siteConfig } from "@/config/site";
import { Mail, Phone, MapPin, Send, User } from "lucide-react";
import { services } from "@/config/services";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    requiredServices: [] as string[],
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    // Add actual form submission logic here
    // For example, send to API endpoint or email service
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({ name: "", email: "", company: "", requiredServices: [], message: "" });
    }, 1000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleServiceChange = (serviceId: string) => {
    setFormData((prev) => {
      const services = prev.requiredServices;
      if (services.includes(serviceId)) {
        return {
          ...prev,
          requiredServices: services.filter((id) => id !== serviceId),
        };
      } else {
        return {
          ...prev,
          requiredServices: [...services, serviceId],
        };
      }
    });
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
                  Contact Us
                </h1>
                <p className="text-xl md:text-2xl text-gray-300">
                  We&apos;d love to hear from you and are ready to help
                </p>
              </div>
            </FadeIn>
          </Container>
        </div>
      </div>

      <Section background="white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <FadeIn>
              <Card>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Send a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors"
                      placeholder="Your company name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      Required Services
                    </label>
                    <div className="space-y-2 border border-gray-300 rounded-lg p-4 max-h-64 overflow-y-auto">
                      {services.map((service) => (
                        <label
                          key={service.id}
                          className="flex items-start space-x-3 cursor-pointer hover:bg-gray-50 p-2 rounded transition-colors"
                        >
                          <input
                            type="checkbox"
                            checked={formData.requiredServices.includes(service.id)}
                            onChange={() => handleServiceChange(service.id)}
                            className="mt-1 h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                          />
                          <div className="flex-1">
                            <span className="text-sm font-medium text-gray-900">
                              {service.title}
                            </span>
                            <p className="text-xs text-gray-500 mt-0.5">
                              {service.description}
                            </p>
                          </div>
                        </label>
                      ))}
                      <label
                        className="flex items-start space-x-3 cursor-pointer hover:bg-gray-50 p-2 rounded transition-colors"
                      >
                        <input
                          type="checkbox"
                          checked={formData.requiredServices.includes("others")}
                          onChange={() => handleServiceChange("others")}
                          className="mt-1 h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                        />
                        <div className="flex-1">
                          <span className="text-sm font-medium text-gray-900">
                            Others
                          </span>
                          <p className="text-xs text-gray-500 mt-0.5">
                            Other services or custom requirements
                          </p>
                        </div>
                      </label>
                    </div>
                    {formData.requiredServices.length > 0 && (
                      <p className="mt-2 text-sm text-gray-600">
                        Selected: {formData.requiredServices.length} service(s)
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors resize-none"
                      placeholder="Tell us about your requirements..."
                    />
                  </div>

                  {submitStatus === "success" && (
                    <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-700">
                      Message sent! We&apos;ll get back to you soon.
                    </div>
                  )}

                  {submitStatus === "error" && (
                    <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
                      Failed to send. Please try again later or email us directly at {siteConfig.links.email}
                    </div>
                  )}

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send className="mr-2 h-5 w-5" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </Card>
            </FadeIn>

            {/* Contact Information */}
            <FadeIn delay={0.2}>
              <div className="space-y-6">
                <Card>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="p-3 rounded-lg bg-primary-50 text-primary-600 mr-4">
                        <User className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Contact Person</h3>
                        <p className="text-gray-600">Ethan Ting</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="p-3 rounded-lg bg-primary-50 text-primary-600 mr-4">
                        <Phone className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Contact Number</h3>
                        <a
                          href="tel:+601159571094"
                          className="text-primary-600 hover:text-primary-700 transition-colors"
                        >
                          +601159571094
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="p-3 rounded-lg bg-primary-50 text-primary-600 mr-4">
                        <Mail className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                        <a
                          href={`mailto:${siteConfig.links.email}`}
                          className="text-primary-600 hover:text-primary-700 transition-colors"
                        >
                          {siteConfig.links.email}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="p-3 rounded-lg bg-primary-50 text-primary-600 mr-4">
                        <MapPin className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Office Address</h3>
                        <p className="text-gray-600">
                          5-2 (Level 2, Room 19), Jalan Kuchai Maju 8, Off,<br />
                          Jalan Kuchai Lama, 58200 Kuala Lumpur,<br />
                          Wilayah Persekutuan Kuala Lumpur
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>

                <Card>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Business Hours</h3>
                  <div className="space-y-2 text-gray-600">
                    <p>Monday - Friday: 9:00 - 18:00 (GMT+8)</p>
                    <p>Weekends & Holidays: Emergency support available</p>
                  </div>
                </Card>

                <Card>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Response Time</h3>
                  <div className="space-y-2 text-gray-600">
                    <p>• General inquiries: Within 24 hours</p>
                    <p>• Technical support: Within 4 hours</p>
                    <p>• Emergency cases: Within 1 hour</p>
                  </div>
                </Card>
              </div>
            </FadeIn>
          </div>
        </Container>
      </Section>
    </>
  );
}

