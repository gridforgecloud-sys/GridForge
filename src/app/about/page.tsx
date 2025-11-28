import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { FadeIn } from "@/components/animations/FadeIn";
import { companyInfo } from "@/lib/constants";
import { siteConfig } from "@/config/site";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: `Learn about ${companyInfo.name} - Leading AI infrastructure solutions provider for the EMEA region`,
};

export default function AboutPage() {
  return (
    <>
      <Section background="primary" className="pt-24">
        <Container>
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                About GridForge
              </h1>
              <p className="text-xl text-gray-600">
                {companyInfo.name}
              </p>
            </div>
          </FadeIn>
        </Container>
      </Section>

      <Section background="white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <div className="prose prose-lg max-w-none">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Company Overview</h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  {companyInfo.description}
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Our Mission</h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  {companyInfo.mission}
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Our Vision</h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  {companyInfo.vision}
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">What GridForge Means</h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  &ldquo;Grid&rdquo; represents our powerful grid computing capabilities, enabling us to integrate distributed computing resources into unified, powerful computational force.
                  &ldquo;Forge&rdquo; symbolizes our commitment—meticulously crafting and optimizing computing solutions that transform raw computational resources into your strategic advantage.
                </p>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Just as a blacksmith forges steel, we forge computational power, providing a solid technical foundation for your AI projects.
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Service Region</h2>
                <div className="bg-primary-50 rounded-xl p-6 mb-6">
                  <p className="text-lg text-gray-700 mb-2">
                    <strong className="text-gray-900">Headquarters: </strong>
                    {companyInfo.location.country}
                  </p>
                  <p className="text-lg text-gray-700">
                    <strong className="text-gray-900">Service Region: </strong>
                    {companyInfo.location.region}
                  </p>
                </div>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Contact Us</h2>
                <p className="text-lg text-gray-600 mb-4">
                  If you&apos;re interested in our services or would like to learn more, please don&apos;t hesitate to reach out to us.
                </p>
                <p className="text-lg text-gray-600">
                  Email:{" "}
                  <a
                    href={`mailto:${siteConfig.links.email}`}
                    className="text-primary-600 hover:text-primary-700 font-medium"
                  >
                    {siteConfig.links.email}
                  </a>
                </p>
              </div>
            </FadeIn>
          </div>
        </Container>
      </Section>
    </>
  );
}

