import type { Route } from "./+types/home";
import HeroSection from "~/components/home/HeroSection";
import PortfolioSection from "~/components/home/PortfolioSection";
import ServicesSection from "~/components/home/ServicesSection";
import AboutSection from "~/components/home/AboutSection";
import ContactSection from "~/components/home/ContactSection";

export function meta({}: Route.MetaArgs) {
    return [
        { title: "Strix Dev || Home " },
        { name: "description", content: "Welcome to Strix Dev" }
    ];
}

export default function Home() {
   return (
       <main >
            <HeroSection />
            <ServicesSection />
            <PortfolioSection />
            <AboutSection />
            <ContactSection />
       </main>
   );
}
