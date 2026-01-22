import type { Route } from "./+types/home";
import HeroSection from "~/components/work/HeroSection";
import Projects from "~/components/work/Projects";
import WorkStats from "~/components/work/WorkStats";
import WorkCTA from "~/components/work/WorkCTA";

export function meta({}: Route.MetaArgs) {
    return [
        { title: "Strix Dev || Work " },
        { name: "description", content: "Welcome to Strix Dev" },
    ];
}


export default function Work() {
    return (
        <main>
            <HeroSection />
            <Projects />
            <WorkStats />
            <WorkCTA />
        </main>
    );
}
