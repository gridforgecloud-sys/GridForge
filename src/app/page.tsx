import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Features } from "@/components/sections/Features";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <div className="pt-20">
        <Hero />
      </div>
      <Services />
      <Features />
      <Contact />
    </>
  );
}

