import type { Route } from "./+types/home";
import HeroSection from "~/components/about/HeroSection";
import OwlVisual from "~/components/about/OwlVisual";
import Team from "~/components/about/Team";
import AboutTImeline from "~/components/about/AboutTImeline";
import AboutCTA from "~/components/about/AboutCTA";

export function meta({}: Route.MetaArgs) {
    return [
        { title: "Strix Devs || About Us " },
        { name: "description", content: "Welcome to Strix Devs" },
    ];
}

export default function About() {
    return (
        <main className="pt-24">
            <HeroSection />
            <OwlVisual />
            <Team />
            <AboutCTA />
        </main>
    );
}



