import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { FadeIn } from "@/components/animations/FadeIn";
import { companyInfo } from "@/lib/constants";
import { siteConfig } from "@/config/site";

export const metadata = {
  title: "About Us",
  description: `Learn about ${companyInfo.name} - Leading AI infrastructure solutions provider for the EMEA region`,
};

export default function AboutPage() {
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
                About GridForge
              </h1>
                <p className="text-xl md:text-2xl text-gray-300">
                {companyInfo.name}
              </p>
            </div>
          </FadeIn>
        </Container>
        </div>
      </div>

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

