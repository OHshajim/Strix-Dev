import { motion, useInView } from "framer-motion";
import {
    Globe,
    Smartphone,
    ShoppingCart,
    Palette,
    Server,
    Database,
    Cloud,
    Shield,
} from "lucide-react";
import { useRef } from "react";

const services = [
    {
        icon: Globe,
        title: "Web Development",
        description:
            "Custom websites and web applications built with modern technologies. Fast, responsive, and SEO-optimized.",
        features: [
            "React & Next.js",
            "TypeScript",
            "Performance Optimization",
            "SEO Best Practices",
        ],
        number: "01",
    },
    {
        icon: Smartphone,
        title: "Mobile-First Design",
        description:
            "Responsive designs that look stunning on every device. Progressive web apps for native-like experiences.",
        features: [
            "Responsive Layouts",
            "PWA Development",
            "Touch Optimization",
            "Cross-Platform",
        ],
        number: "02",
    },
    {
        icon: ShoppingCart,
        title: "E-Commerce",
        description:
            "Secure online stores with seamless payment integration. Shopify, WooCommerce, and custom solutions.",
        features: [
            "Payment Integration",
            "Inventory Management",
            "Cart & Checkout",
            "Analytics",
        ],
        number: "03",
    },
    {
        icon: Palette,
        title: "UI/UX Design",
        description:
            "Beautiful, intuitive interfaces that convert visitors into customers. User-centered design approach.",
        features: [
            "User Research",
            "Wireframing",
            "Prototyping",
            "Design Systems",
        ],
        number: "04",
    },
    {
        icon: Server,
        title: "Backend & APIs",
        description:
            "Scalable server infrastructure and RESTful APIs. Database design and cloud deployment.",
        features: [
            "Node.js & Python",
            "REST & GraphQL",
            "Cloud Deployment",
            "Microservices",
        ],
        number: "05",
    },
    {
        icon: Database,
        title: "Database Design",
        description:
            "Efficient database architecture for optimal performance. SQL and NoSQL solutions tailored to your needs.",
        features: ["PostgreSQL", "MongoDB", "Redis Caching", "Data Migration"],
        number: "06",
    },
    {
        icon: Cloud,
        title: "Cloud Solutions",
        description:
            "AWS, Google Cloud, and Azure deployment with CI/CD pipelines for seamless development workflows.",
        features: [
            "AWS & GCP",
            "Docker & Kubernetes",
            "CI/CD Pipelines",
            "Auto-scaling",
        ],
        number: "07",
    },
    {
        icon: Shield,
        title: "Security & Compliance",
        description:
            "Enterprise-grade security implementations and compliance audits for peace of mind.",
        features: [
            "SSL/TLS",
            "GDPR Compliance",
            "Security Audits",
            "Data Encryption",
        ],
        number: "08",
    },
];

const ServicesSection = () => {
    const ref = useRef<HTMLDivElement | null>(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    return (
        <section className="py-20 relative">
            <div className="container mx-auto px-6">
                <div ref={ref} className="grid md:grid-cols-2 gap-0">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 40 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{
                                duration: 0.6,
                                delay: index * 0.1,
                                ease: [0.4, 0, 0, 1],
                            }}
                            className="group border border-border p-8 lg:p-12 cursor-hover hover:bg-card transition-colors duration-500"
                        >
                            <div className="flex items-start justify-between mb-6">
                                <div className="w-14 h-14 border border-border flex items-center justify-center group-hover:bg-foreground group-hover:border-foreground transition-all duration-500">
                                    <service.icon className="w-6 h-6 text-foreground group-hover:text-background transition-colors duration-500" />
                                </div>
                                <span className="text-xs font-mono text-muted-foreground">
                                    {service.number}
                                </span>
                            </div>

                            <h3 className="text-2xl md:text-3xl font-display tracking-tight mb-4 group-hover:translate-x-2 transition-transform duration-500">
                                {service.title}
                            </h3>

                            <p className="text-muted-foreground mb-6 leading-relaxed">
                                {service.description}
                            </p>

                            <ul className="space-y-2">
                                {service.features.map((feature) => (
                                    <li
                                        key={feature}
                                        className="flex items-center gap-3 text-sm"
                                    >
                                        <div className="w-1 h-1 bg-foreground" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
