import { motion } from "framer-motion";

const processSteps = [
    {
        step: "01",
        title: "Discovery",
        description:
            "We learn about your business, goals, and target audience.",
    },
    {
        step: "02",
        title: "Strategy",
        description: "We create a roadmap and select the right technologies.",
    },
    {
        step: "03",
        title: "Design",
        description: "We design intuitive interfaces that users love.",
    },
    {
        step: "04",
        title: "Development",
        description: "We build with clean, maintainable code.",
    },
    {
        step: "05",
        title: "Testing",
        description: "We rigorously test across devices and browsers.",
    },
    {
        step: "06",
        title: "Launch",
        description: "We deploy and provide ongoing support.",
    },
];
const ServiceProcess = () => {
    return (
        <section className="py-20 bg-card relative">
            <div className="absolute inset-0 grid-pattern opacity-30" />
            <div className="noise-overlay" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-display tracking-tight mb-6">
                        Our Process
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl">
                        A streamlined approach that ensures quality results on
                        time and within budget.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {processSteps.map((step, index) => (
                        <motion.div
                            key={step.step}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="border-t border-border pt-8"
                        >
                            <span className="text-4xl font-display text-muted-foreground/50 mb-4 block">
                                {step.step}
                            </span>
                            <h3 className="text-xl font-display mb-3">
                                {step.title}
                            </h3>
                            <p className="text-muted-foreground text-sm">
                                {step.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServiceProcess;
