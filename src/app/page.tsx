import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Features } from "@/components/sections/Features";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <div className="pt-20">
        <Hero />
      </div>
      <Services />
      <Features />
      <About />
      <Contact />
    </>
  );
}

