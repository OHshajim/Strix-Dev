import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";

const projects = [
    {
        title: "FinFlow Dashboard",
        category: "Web Application",
        description:
            "Modern financial dashboard with real-time data visualization and analytics for fintech startup.",
        techStack: ["React", "TypeScript", "D3.js", "Node.js"],
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop&sat=-100",
        year: "2024",
    },
    {
        title: "EcoShop Commerce",
        category: "E-Commerce",
        description:
            "Sustainable products marketplace with Stripe integration and inventory management.",
        techStack: ["Next.js", "Supabase", "Stripe", "Tailwind"],
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=500&fit=crop&sat=-100",
        year: "2024",
    },
    {
        title: "HealthHub Portal",
        category: "Healthcare",
        description:
            "Patient management system with appointment scheduling and telemedicine features.",
        techStack: ["Vue.js", "Python", "PostgreSQL", "AWS"],
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=500&fit=crop&sat=-100",
        year: "2023",
    },
];

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
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 60 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{
                                duration: 0.8,
                                delay: index * 0.15,
                                ease: [0.4, 0, 0, 1],
                            }}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            className={`group grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${
                                index % 2 === 1 ? "lg:grid-flow-dense" : ""
                            }`}
                        >
                            {/* Image */}
                            <div
                                className={`relative overflow-hidden ${
                                    index % 2 === 1 ? "lg:col-start-2" : ""
                                }`}
                            >
                                <div className="aspect-[4/3] relative overflow-hidden">
                                    <motion.img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                                        animate={{
                                            scale:
                                                hoveredIndex === index
                                                    ? 1.05
                                                    : 1,
                                        }}
                                        transition={{ duration: 0.6 }}
                                    />
                                    {/* Overlay */}
                                    <motion.div
                                        className="absolute inset-0 bg-background/80"
                                        animate={{
                                            opacity:
                                                hoveredIndex === index
                                                    ? 0
                                                    : 0.3,
                                        }}
                                        transition={{ duration: 0.4 }}
                                    />
                                </div>
                                {/* Corner decoration */}
                                <div className="absolute top-4 right-4 w-8 h-8 border-t border-r border-foreground/40" />
                                <div className="absolute bottom-4 left-4 w-8 h-8 border-b border-l border-foreground/40" />
                            </div>

                            {/* Content */}
                            <div
                                className={
                                    index % 2 === 1
                                        ? "lg:col-start-1 lg:row-start-1"
                                        : ""
                                }
                            >
                                <div className="flex items-center gap-4 mb-4">
                                    <span className="text-xs font-mono text-muted-foreground">
                                        {project.year}
                                    </span>
                                    <div className="w-8 h-px bg-foreground/30" />
                                    <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                                        {project.category}
                                    </span>
                                </div>

                                <h3 className="text-3xl md:text-4xl lg:text-5xl font-display tracking-tight mb-6 group-hover:translate-x-2 transition-transform duration-500">
                                    {project.title}
                                </h3>

                                <p className="text-muted-foreground mb-8 max-w-md leading-relaxed">
                                    {project.description}
                                </p>

                                {/* Tech stack */}
                                <div className="flex flex-wrap gap-3 mb-8">
                                    {project.techStack.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-3 py-1 text-xs font-mono uppercase tracking-wider border border-border"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* View button */}
                                <motion.button
                                    whileHover={{ x: 5 }}
                                    className="flex items-center gap-3 text-sm font-mono uppercase tracking-wider group/btn"
                                >
                                    <span className="link-underline">
                                        View Project
                                    </span>
                                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                                </motion.button>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* View all button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="text-center mt-20"
                >
                    <button className="btn-outline">View All Projects</button>
                </motion.div>
            </div>
        </section>
    );
};

export default PortfolioSection;
