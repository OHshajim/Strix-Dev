import type { Route } from "./+types/home";
import HeroSection from "~/components/about/HeroSection";
import OwlVisual from "~/components/about/OwlVisual";
import Team from "~/components/about/Team";
import AboutTImeline from "~/components/about/AboutTImeline";
import AboutCTA from "~/components/about/AboutCTA";

export function meta({}: Route.MetaArgs) {
    return [
        { title: "Strix Dev || About Us " },
        { name: "description", content: "Welcome to Strix Dev" },
    ];
}

export default function About() {
    return (
        <main className="pt-24">
            {/* Hero Section */}
            <HeroSection />

            {/* Owl Visual Section */}
            <OwlVisual />

            {/* Team Section */}
            <Team />

            {/* Timeline Section */}
            {/* <AboutTImeline /> */}

            {/* CTA Section */}
            <AboutCTA />
        </main>
    );
}



