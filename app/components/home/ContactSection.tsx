import { motion } from "framer-motion";
import { useState } from "react";
import {
    ArrowUpRight,
    Mail,
    MessageCircle,
    Linkedin,
    MapPin,
} from "lucide-react";

const ContactSection = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        await new Promise((resolve) => setTimeout(resolve, 1500));

        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormData({ name: "", email: "", message: "" });

        // Reset success message after 5 seconds
        setTimeout(() => setIsSubmitted(false), 5000);
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const contactLinks = [
        {
            icon: Mail,
            label: "Email",
            value: "hello@strixdev.com",
            href: "mailto:hello@strixdev.com",
        },
        {
            icon: MessageCircle,
            label: "WhatsApp",
            value: "+1 (555) 123-4567",
            href: "https://wa.me/15551234567",
        },
        {
            icon: Linkedin,
            label: "LinkedIn",
            value: "Strix Dev",
            href: "https://linkedin.com/company/strixdev",
        },
        {
            icon: MapPin,
            label: "Location",
            value: "Toronto, Canada",
            href: "#",
        },
    ];

    return (
        <section
            id="contact"
            className="py-32 relative overflow-hidden bg-card"
        >
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
                            05
                        </span>
                        <div className="w-16 h-px bg-foreground/30" />
                        <span className="text-xs font-mono uppercase tracking-[0.3em] text-muted-foreground">
                            Contact
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-7xl font-display tracking-tight">
                        Let's Build
                        <br />
                        <span className="text-outline-thick">
                            Something Great
                        </span>
                    </h2>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-20">
                    {/* Contact form */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <form onSubmit={handleSubmit} className="space-y-8">
                            {/* Name field */}
                            <div>
                                <label
                                    htmlFor="name"
                                    className="block text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground mb-3"
                                >
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-0 py-4 bg-transparent border-0 border-b border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors duration-300 text-lg"
                                    placeholder="John Doe"
                                />
                            </div>

                            {/* Email field */}
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground mb-3"
                                >
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-0 py-4 bg-transparent border-0 border-b border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors duration-300 text-lg"
                                    placeholder="john@example.com"
                                />
                            </div>

                            {/* Message field */}
                            <div>
                                <label
                                    htmlFor="message"
                                    className="block text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground mb-3"
                                >
                                    Your Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={4}
                                    className="w-full px-0 py-4 bg-transparent border-0 border-b border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors duration-300 resize-none text-lg"
                                    placeholder="Tell us about your project..."
                                />
                            </div>

                            {/* Submit button */}
                            <motion.button
                                type="submit"
                                disabled={isSubmitting}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="btn-primary flex items-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed mt-10"
                            >
                                <span>
                                    {isSubmitting
                                        ? "Sending..."
                                        : isSubmitted
                                          ? "Message Sent!"
                                          : "Start Your Project"}
                                </span>
                                {!isSubmitting && !isSubmitted && (
                                    <ArrowUpRight className="w-4 h-4" />
                                )}
                            </motion.button>
                        </form>
                    </motion.div>

                    {/* Contact info */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="space-y-10"
                    >
                        <div>
                            <p className="text-muted-foreground leading-relaxed text-lg mb-10">
                                We're here to help bring your vision to life.
                                Reach out through any of these channels and
                                we'll get back to you within 24 hours.
                            </p>
                        </div>

                        {/* Contact links */}
                        <div className="space-y-0">
                            {contactLinks.map((link, index) => (
                                <motion.a
                                    key={link.label}
                                    href={link.href}
                                    target={
                                        link.href.startsWith("http")
                                            ? "_blank"
                                            : undefined
                                    }
                                    rel={
                                        link.href.startsWith("http")
                                            ? "noopener noreferrer"
                                            : undefined
                                    }
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        delay: 0.1 * index,
                                        duration: 0.4,
                                    }}
                                    className="flex items-center gap-6 py-6 border-b border-border group cursor-hover"
                                >
                                    <div className="w-12 h-12 border border-border flex items-center justify-center group-hover:bg-foreground group-hover:border-foreground transition-all duration-300">
                                        <link.icon className="w-5 h-5 text-foreground group-hover:text-background transition-colors duration-300" />
                                    </div>
                                    <div className="flex-1">
                                        <div className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground mb-1">
                                            {link.label}
                                        </div>
                                        <div className="text-lg group-hover:translate-x-2 transition-transform duration-300">
                                            {link.value}
                                        </div>
                                    </div>
                                    <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </motion.a>
                            ))}
                        </div>

                        {/* Business hours */}
                        <div className="pt-10 border-t border-border">
                            <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground mb-4">
                                Business Hours
                            </h4>
                            <p className="text-muted-foreground">
                                Monday - Friday: 9:00 AM - 6:00 PM EST
                                <br />
                                Weekend availability by appointment
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
