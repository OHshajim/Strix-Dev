import { motion, useInView } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useRef, useState } from "react";

const projects = [
    {
        title: "FinFlow Dashboard",
        category: "Web Application",
        description:
            "Modern financial dashboard with real-time data visualization and analytics for fintech startup. Built with a focus on performance and user experience.",
        techStack: ["React", "TypeScript", "D3.js", "Node.js", "PostgreSQL"],
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop&sat=-100",
        year: "2024",
        client: "FinFlow Inc.",
    },
    {
        title: "EcoShop Commerce",
        category: "E-Commerce",
        description:
            "Sustainable products marketplace with Stripe integration and inventory management. Features include real-time stock updates and automated order processing.",
        techStack: ["Next.js", "Supabase", "Stripe", "Tailwind", "Vercel"],
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=500&fit=crop&sat=-100",
        year: "2024",
        client: "EcoShop Ltd.",
    },
    {
        title: "HealthHub Portal",
        category: "Healthcare",
        description:
            "Patient management system with appointment scheduling and telemedicine features. HIPAA compliant with end-to-end encryption.",
        techStack: ["Vue.js", "Python", "PostgreSQL", "AWS", "Docker"],
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=500&fit=crop&sat=-100",
        year: "2023",
        client: "HealthHub Medical",
    },
    {
        title: "TravelMate App",
        category: "Travel & Tourism",
        description:
            "Travel planning platform with AI-powered recommendations, itinerary builder, and real-time flight tracking integration.",
        techStack: [
            "React Native",
            "Node.js",
            "MongoDB",
            "OpenAI",
            "Google Maps API",
        ],
        image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=500&fit=crop&sat=-100",
        year: "2023",
        client: "TravelMate Corp.",
    },
    {
        title: "LearnPath LMS",
        category: "Education",
        description:
            "Learning management system with video streaming, progress tracking, and interactive assessments for online education platform.",
        techStack: ["React", "Django", "Redis", "AWS S3", "Stripe"],
        image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=500&fit=crop&sat=-100",
        year: "2023",
        client: "LearnPath Education",
    },
    {
        title: "PropView Real Estate",
        category: "Real Estate",
        description:
            "Property listing platform with virtual tours, mortgage calculator, and agent booking system for real estate agency.",
        techStack: ["Next.js", "Three.js", "Prisma", "PostgreSQL", "Mapbox"],
        image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=500&fit=crop&sat=-100",
        year: "2022",
        client: "PropView Realty",
    },
];

const categories = [
    "All",
    "Web Application",
    "E-Commerce",
    "Healthcare",
    "Travel & Tourism",
    "Education",
    "Real Estate",
];

const Projects = () => {
    const ref = useRef(null);
      const isInView = useInView(ref, { once: true, margin: "-100px" });
      const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
      const [activeCategory, setActiveCategory] = useState("All");

      const filteredProjects =
          activeCategory === "All"
              ? projects
              : projects.filter((p) => p.category === activeCategory);
    return (
        <div>
            <section className="py-8 border-y border-border">
                <div className="container mx-auto px-6">
                    <div className="flex flex-wrap gap-4">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`px-4 py-2 text-xs font-mono uppercase tracking-wider border transition-all duration-300 ${
                                    activeCategory === category
                                        ? "bg-foreground text-background border-foreground"
                                        : "border-border hover:border-foreground"
                                }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Projects Grid */}
            <section className="py-20 relative">
                <div className="container mx-auto px-6">
                    <div ref={ref} className="space-y-24">
                        {filteredProjects.map((project, index) => (
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
                                    className={`relative overflow-hidden ${index % 2 === 1 ? "lg:col-start-2" : ""}`}
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

                                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-display tracking-tight mb-4 group-hover:translate-x-2 transition-transform duration-500">
                                        {project.title}
                                    </h3>

                                    <p className="text-sm text-muted-foreground mb-2">
                                        Client: {project.client}
                                    </p>

                                    <p className="text-muted-foreground mb-8 max-w-md leading-relaxed">
                                        {project.description}
                                    </p>

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

                                    <motion.button
                                        whileHover={{ x: 5 }}
                                        className="flex items-center gap-3 text-sm font-mono uppercase tracking-wider group/btn"
                                    >
                                        <span className="link-underline">
                                            View Case Study
                                        </span>
                                        <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                                    </motion.button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Projects;
