"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/animations/FadeIn";
import { siteConfig } from "@/config/site";
import { Mail, Phone, MapPin, Send, User } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
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
      setFormData({ name: "", email: "", company: "", message: "" });
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

  return (
    <>
      <Section background="primary" className="pt-24">
        <Container>
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Contact Us
              </h1>
              <p className="text-xl text-gray-600">
                We&apos;d love to hear from you and are ready to help
              </p>
            </div>
          </FadeIn>
        </Container>
      </Section>

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
                          href="tel:+60197720526"
                          className="text-primary-600 hover:text-primary-700 transition-colors"
                        >
                          +60197720526
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

