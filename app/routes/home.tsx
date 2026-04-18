import type { Route } from "./+types/home";
import HeroSection from "~/components/home/HeroSection";
import PortfolioSection from "~/components/home/PortfolioSection";
import ServicesSection from "~/components/home/ServicesSection";
import AboutSection from "~/components/home/AboutSection";
import ContactSection from "~/components/home/ContactSection";
import FloatingContactFAB from "~/components/FloatingContactFAB";
import { Process } from "~/components/home/Process";
import { TechStack } from "~/components/home/TechStack";
import { WhyUs } from "~/components/home/WhyUs";
import { FAQ } from "~/components/home/FAQ";

export function meta({}: Route.MetaArgs) {
    return [
        { title: "Strix Devs || Home " },
        { name: "description", content: "Welcome to Strix Devs" }
    ];
}

export default function Home() {
   return (
       <main>
           <HeroSection />
           <ServicesSection />
           <PortfolioSection />
           <Process />
           <TechStack />
           <WhyUs />
           <AboutSection />
           <FAQ limit={6}/>
           <ContactSection />
           <FloatingContactFAB />
       </main>
   );
}
