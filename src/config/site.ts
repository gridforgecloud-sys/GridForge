export const siteConfig = {
  name: "GridForge Technology",
  fullName: "GridForge Technology Sdn. Bhd.",
  description: "Leading AI infrastructure solutions provider in EMEA region. Specializing in server compute, cloud hosting, data pipelines, DevOps, and high-performance grid computing.",
  url: "https://gridforgeai.com",
  domain: "gridforgeai.com",
  ogImage: "/og-image.jpg",
  links: {
    email: "contact@gridforgeai.com",
    // Add other social links as needed
  },
  location: {
    country: "Malaysia",
    region: "EMEA",
  },
};

export const metadata = {
  title: {
    default: "GridForge Technology | AI Infrastructure Solutions",
    template: "%s | GridForge Technology",
  },
  description: siteConfig.description,
  keywords: [
    "AI infrastructure",
    "cloud computing",
    "grid computing",
    "data pipeline",
    "DevOps",
    "server compute",
    "Malaysia",
    "EMEA",
  ],
  authors: [{ name: "GridForge Technology" }],
  creator: "GridForge Technology",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

