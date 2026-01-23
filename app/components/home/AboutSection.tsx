import { motion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";

const benefits = [
    "Cutting-edge technology stack",
    "Agile development process",
    "24/7 Support & maintenance",
    "Transparent communication",
    "On-time project delivery",
    "Scalable architecture",
];

const AboutSection = () => {
    return (
        <section id="about" className="py-32 relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 grid-pattern opacity-30" />
            <div className="noise-overlay" />

            {/* Large background text */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.05 }}
                viewport={{ once: true }}
                className="absolute right-0 top-1/3 text-[12rem] font-display leading-none select-none pointer-events-none hidden xl:block"
            >
                ABOUT
            </motion.div>

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
                            04
                        </span>
                        <div className="w-16 h-px bg-foreground/30" />
                        <span className="text-xs font-mono uppercase tracking-[0.3em] text-muted-foreground">
                            About Us
                        </span>
                    </div>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-20 items-start">
                    {/* Left side - Visual */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        {/* Geometric owl - minimal lines */}
                        <div className="relative aspect-square max-w-md mx-auto">
                            <svg
                                viewBox="0 0 400 400"
                                fill="none"
                                className="w-full h-full"
                            >
                                {/* Outer square */}
                                <motion.rect
                                    x="50"
                                    y="50"
                                    width="300"
                                    height="300"
                                    stroke="currentColor"
                                    strokeWidth="1"
                                    className="text-foreground/20"
                                    initial={{ pathLength: 0 }}
                                    whileInView={{ pathLength: 1 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        duration: 2,
                                        ease: "easeOut",
                                    }}
                                />

                                {/* Inner circle */}
                                <motion.circle
                                    cx="200"
                                    cy="200"
                                    r="120"
                                    stroke="currentColor"
                                    strokeWidth="1"
                                    className="text-foreground/30"
                                    fill="none"
                                    initial={{ pathLength: 0 }}
                                    whileInView={{ pathLength: 1 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        duration: 1.5,
                                        delay: 0.3,
                                        ease: "easeOut",
                                    }}
                                />

                                {/* Eyes */}
                                <motion.circle
                                    cx="150"
                                    cy="180"
                                    r="30"
                                    className="fill-none stroke-foreground"
                                    strokeWidth="2"
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.8 }}
                                />
                                <motion.circle
                                    cx="250"
                                    cy="180"
                                    r="30"
                                    className="fill-none stroke-foreground"
                                    strokeWidth="2"
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.9 }}
                                />

                                {/* Pupils */}
                                <motion.circle
                                    cx="150"
                                    cy="180"
                                    r="10"
                                    className="fill-foreground"
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.3, delay: 1.1 }}
                                />
                                <motion.circle
                                    cx="250"
                                    cy="180"
                                    r="10"
                                    className="fill-foreground"
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.3, delay: 1.2 }}
                                />

                                {/* Beak */}
                                <motion.path
                                    d="M180 240 L200 280 L220 240"
                                    className="stroke-foreground"
                                    strokeWidth="2"
                                    strokeLinecap="square"
                                    fill="none"
                                    initial={{ pathLength: 0 }}
                                    whileInView={{ pathLength: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 1.3 }}
                                />

                                {/* Crown lines */}
                                <motion.path
                                    d="M120 100 L150 70 L200 50 L250 70 L280 100"
                                    className="stroke-foreground/50"
                                    strokeWidth="1"
                                    strokeLinecap="square"
                                    fill="none"
                                    initial={{ pathLength: 0 }}
                                    whileInView={{ pathLength: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8, delay: 0.5 }}
                                />

                                {/* Decorative lines */}
                                <motion.line
                                    x1="50"
                                    y1="350"
                                    x2="150"
                                    y2="350"
                                    className="stroke-foreground/20"
                                    strokeWidth="1"
                                    initial={{ pathLength: 0 }}
                                    whileInView={{ pathLength: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 1.5 }}
                                />
                                <motion.line
                                    x1="250"
                                    y1="350"
                                    x2="350"
                                    y2="350"
                                    className="stroke-foreground/20"
                                    strokeWidth="1"
                                    initial={{ pathLength: 0 }}
                                    whileInView={{ pathLength: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 1.6 }}
                                />
                            </svg>

                            {/* Corner decorations */}
                            <div className="absolute top-0 left-0 w-12 h-12 border-t border-l border-foreground/20" />
                            <div className="absolute bottom-0 right-0 w-12 h-12 border-b border-r border-foreground/20" />
                        </div>
                    </motion.div>

                    {/* Right side - Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-display tracking-tight mb-8">
                            Why Choose
                            <br />
                            <span className="text-outline-thick">
                                Strix Dev
                            </span>
                            ?
                        </h2>

                        <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                            Strix Dev is a smart, professional, and reliable web
                            development agency dedicated to helping startups and
                            small businesses succeed in the digital landscape.
                        </p>

                        <p className="text-muted-foreground mb-12 leading-relaxed">
                            Our owl-inspired name reflects our commitment to
                            wisdom and insight—seeing opportunities where others
                            see challenges, and delivering solutions that stand
                            the test of time.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
                            {benefits.map((benefit, index) => (
                                <motion.div
                                    key={benefit}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        delay: 0.1 * index,
                                        duration: 0.4,
                                    }}
                                    className="flex items-center gap-4 py-3 border-b border-border"
                                >
                                    <div className="w-1 h-1 bg-foreground" />
                                    <span className="text-sm">{benefit}</span>
                                </motion.div>
                            ))}
                        </div>

                        <motion.a
                            href="#contact"
                            onClick={(e) => {
                                e.preventDefault();
                                document
                                    .querySelector("#contact")
                                    ?.scrollIntoView({ behavior: "smooth" });
                            }}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="btn-primary inline-flex items-center gap-3"
                        >
                            <span>Work With Us</span>
                            <ArrowDownRight className="w-4 h-4" />
                        </motion.a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
