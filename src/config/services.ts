import { Server, Cloud, Database, Settings, Grid3x3 } from "lucide-react";

export interface Service {
  id: string;
  title: string;
  shortTitle: string;
  description: string;
  longDescription: string;
  icon: React.ComponentType<{ className?: string }>;
  features: string[];
  color: string;
}

export const services: Service[] = [
  {
    id: "server-compute",
    title: "Server / Compute",
    shortTitle: "Server Compute",
    description: "High-performance server infrastructure and compute resources for AI workloads.",
    longDescription: "We provide cutting-edge server infrastructure and compute resources optimized for AI and machine learning workloads. Our solutions ensure maximum performance, reliability, and scalability for your most demanding computational needs.",
    icon: Server,
    features: [
      "High-performance GPU servers",
      "Scalable compute clusters",
      "Custom hardware configurations",
      "24/7 monitoring and support",
      "Optimized for AI/ML workloads",
    ],
    color: "blue",
  },
  {
    id: "cloud-hosting",
    title: "Cloud Hosting",
    shortTitle: "Cloud Hosting",
    description: "Reliable and scalable cloud hosting solutions tailored for enterprise needs.",
    longDescription: "Our cloud hosting services offer enterprise-grade reliability, security, and scalability. Whether you need public, private, or hybrid cloud solutions, we provide the infrastructure to support your business growth.",
    icon: Cloud,
    features: [
      "Multi-cloud deployment options",
      "Auto-scaling capabilities",
      "Enterprise-grade security",
      "99.9% uptime SLA",
      "Global data center presence",
    ],
    color: "cyan",
  },
  {
    id: "data-pipeline",
    title: "Data Layer & Pipeline",
    shortTitle: "Data Pipeline",
    description: "End-to-end data infrastructure and pipeline solutions for modern data workflows.",
    longDescription: "Build robust data pipelines that transform, process, and deliver data at scale. Our data layer solutions ensure seamless data flow from ingestion to analytics, enabling real-time insights and decision-making.",
    icon: Database,
    features: [
      "Real-time data processing",
      "ETL/ELT pipeline design",
      "Data warehouse solutions",
      "Stream processing",
      "Data quality and governance",
    ],
    color: "purple",
  },
  {
    id: "devops",
    title: "DevOps / Deployment",
    shortTitle: "DevOps",
    description: "Comprehensive DevOps services and automated deployment pipelines.",
    longDescription: "Streamline your development and deployment processes with our DevOps expertise. From CI/CD pipelines to infrastructure as code, we help you achieve faster releases and higher reliability.",
    icon: Settings,
    features: [
      "CI/CD pipeline automation",
      "Infrastructure as Code",
      "Container orchestration",
      "Monitoring and logging",
      "Security best practices",
    ],
    color: "green",
  },
  {
    id: "grid-computing",
    title: "High-Performance Grid Computing",
    shortTitle: "Grid Computing",
    description: "Distributed computing power forged for the most intensive computational challenges.",
    longDescription: "Our high-performance grid computing solutions harness distributed computing power to tackle the most intensive computational challenges. The 'Forge' in our name represents our commitment to crafting powerful computing solutions that transform raw computational resources into strategic advantages.",
    icon: Grid3x3,
    features: [
      "Distributed computing clusters",
      "Load balancing and optimization",
      "Fault tolerance and resilience",
      "Parallel processing capabilities",
      "Custom grid architectures",
    ],
    color: "orange",
  },
];

