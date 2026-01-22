import type { Route } from "./+types/home";
import HeroSection from "~/components/contact/HeroSection";
import ContactForm from "~/components/contact/ContactForm";
import FAQ from "~/components/contact/FAQ";

export function meta({}: Route.MetaArgs) {
    return [
        { title: "Strix Dev || Home " },
        { name: "description", content: "Welcome to Strix Dev" },
    ];
}

export default function Contact() {
    return (
        <main>
            <HeroSection />
            <ContactForm />
            <FAQ/>
        </main>
    );
}
