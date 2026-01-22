import { motion } from "framer-motion";

const faqs = [
    {
        question: "What is your typical project timeline?",
        answer: "Project timelines vary based on scope. A simple website takes 2-4 weeks, while complex web applications can take 2-4 months. We'll provide a detailed timeline after our initial consultation.",
    },
    {
        question: "Do you work with clients outside Canada?",
        answer: "Absolutely! We work with clients globally. Our team is experienced in remote collaboration and we use tools like Slack, Zoom, and project management software to stay connected.",
    },
    {
        question: "What technologies do you specialize in?",
        answer: "We primarily work with React, Next.js, TypeScript, Node.js, and various cloud platforms. We choose the best technology stack based on your project requirements.",
    },
    {
        question: "Do you provide ongoing support after launch?",
        answer: "Yes, we offer maintenance and support packages to ensure your application runs smoothly. This includes bug fixes, security updates, and feature enhancements.",
    },
];

const FAQ = () => {
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
                    <h2 className="text-4xl md:text-5xl font-display tracking-tight">
                        Frequently Asked Questions
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={faq.question}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="border-t border-border pt-8"
                        >
                            <h3 className="text-lg font-display mb-3">
                                {faq.question}
                            </h3>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                                {faq.answer}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
