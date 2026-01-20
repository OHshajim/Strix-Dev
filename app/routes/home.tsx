import Navbar from "~/components/Navbar";
import type { Route } from "./+types/home";
import CustomCursor from "~/components/CustomCursor";
import Footer from "~/components/Footer";
import HeroSection from "~/components/home/HeroSection";
import PortfolioSection from "~/components/home/PortfolioSection";
import ServicesSection from "~/components/home/ServicesSection";
import AboutSection from "~/components/home/AboutSection";
import ContactSection from "~/components/home/ContactSection";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
   return (
       <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
           <CustomCursor />
           <Navbar />
           <main>
               <HeroSection />
               <ServicesSection />
               <PortfolioSection />
               <AboutSection />
               <ContactSection />
           </main>
           <Footer />
       </div>
   );
}
