import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { projects } from "~/Data/data";
import { Link } from "react-router";
import ProjectCard from "../ProjectCard";

const PortfolioSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <section id="work" className="py-32 relative overflow-hidden bg-card">
            {/* Background */}
            <div className="absolute inset-0 grid-pattern opacity-30" />
            <div className="noise-overlay" />

            <div className="container mx-auto px-6 relative z-10">
                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-20"
                >
                    <div className="flex items-center gap-4 mb-4">
                        <span className="text-xs font-mono uppercase tracking-[0.3em] text-muted-foreground">
                            03
                        </span>
                        <div className="w-16 h-px bg-foreground/30" />
                        <span className="text-xs font-mono uppercase tracking-[0.3em] text-muted-foreground">
                            Portfolio
                        </span>
                    </div>
                    <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-display tracking-tight">
                            Selected Work
                        </h2>
                        <p className="text-muted-foreground max-w-md">
                            A selection of our recent projects. Each crafted
                            with precision and passion.
                        </p>
                    </div>
                </motion.div>

                {/* Projects grid */}
                <div ref={ref} className="space-y-20">
                    {projects.slice(0, 3).map((project, index) => (
                        <motion.div
                            key={project.title}
                        >
                            <ProjectCard project={project} hoveredIndex={hoveredIndex} index={index} isInView={isInView} setHoveredIndex={setHoveredIndex}/>
                        </motion.div>
                    ))}
                </div>

                {/* View all button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="text-center my-20"
                >
                    <Link to={"/work"} className="btn-outline">View All Projects</Link>
                </motion.div>
            </div>
        </section>
    );
};

export default PortfolioSection;
