import type { Route } from "./+types/home";
import HeroSection from "~/components/services/HeroSection";
import ServiceProcess from "~/components/services/ServiceProcess";
import ServiceCTA from "~/components/services/ServiceCTA";
import ServicesSection from "~/components/services/Services";

export function meta({}: Route.MetaArgs) {
    return [
        { title: "Strix Dev || Services " },
        { name: "description", content: "Welcome to Strix Dev" },
    ];
}

export default function Services() {

    return (
        <main className="pt-24">
            {/* Hero Section */}
            <HeroSection />

            {/* Services Grid */}
            <ServicesSection />

            {/* Process Section */}
            <ServiceProcess />

            {/* CTA Section */}
            <ServiceCTA />
        </main>
    );
}
