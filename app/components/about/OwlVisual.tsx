import { motion } from "framer-motion";
const values = [
    {
        title: "Quality First",
        description:
            "We never compromise on quality. Every line of code is crafted with care and attention to detail.",
    },
    {
        title: "Client Partnership",
        description:
            "We work alongside you as partners, not just vendors. Your success is our success.",
    },
    {
        title: "Innovation",
        description:
            "We stay ahead of the curve, embracing new technologies that deliver real value.",
    },
    {
        title: "Transparency",
        description:
            "Open communication and honest timelines. No surprises, just results.",
    },
];
const OwlVisual = () => {
    return (
        <section className="py-20 relative overflow-hidden bg-card">
            <div className="absolute inset-0 grid-pattern opacity-30" />
            <div className="noise-overlay" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Geometric Owl */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative aspect-square max-w-md mx-auto"
                    >
                        <svg
                            viewBox="0 0 400 400"
                            fill="none"
                            className="w-full h-full"
                        >
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
                                transition={{ duration: 1.5, delay: 0.3 }}
                            />
                            <motion.circle
                                cx="150"
                                cy="180"
                                r="30"
                                className="fill-none stroke-foreground"
                                strokeWidth="2"
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.8 }}
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
                                transition={{ delay: 0.9 }}
                            />
                            <motion.circle
                                cx="150"
                                cy="180"
                                r="10"
                                className="fill-foreground"
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 1.1 }}
                            />
                            <motion.circle
                                cx="250"
                                cy="180"
                                r="10"
                                className="fill-foreground"
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 1.2 }}
                            />
                            <motion.path
                                d="M180 240 L200 280 L220 240"
                                className="stroke-foreground"
                                strokeWidth="2"
                                strokeLinecap="square"
                                fill="none"
                                initial={{ pathLength: 0 }}
                                whileInView={{ pathLength: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 1.3 }}
                            />
                        </svg>
                    </motion.div>

                    {/* Values */}
                    <div>
                        <h2 className="text-3xl md:text-4xl font-display tracking-tight mb-10">
                            Our Values
                        </h2>
                        <div className="space-y-8">
                            {values.map((value, index) => (
                                <motion.div
                                    key={value.title}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="border-l-2 border-foreground/20 pl-6 hover:border-foreground transition-colors"
                                >
                                    <h3 className="text-xl font-display mb-2">
                                        {value.title}
                                    </h3>
                                    <p className="text-muted-foreground text-sm">
                                        {value.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OwlVisual;