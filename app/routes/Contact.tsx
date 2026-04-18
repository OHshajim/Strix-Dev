import type { Route } from "./+types/home";
import HeroSection from "~/components/contact/HeroSection";
import ContactForm from "~/components/contact/ContactForm";
import { FAQ } from "~/components/home/FAQ";

export function meta({}: Route.MetaArgs) {
    return [
        { title: "Strix Devs || Home " },
        { name: "description", content: "Welcome to Strix Devs" },
    ];
}

export default function Contact() {
    return (
        <main className="pt-24">
            <HeroSection />
            <ContactForm />
            <FAQ limit={10} />
        </main>
    );
}
