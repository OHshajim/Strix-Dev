import { ArrowUpRight, Clock, Linkedin, Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import { motion } from "framer-motion";
import { useState } from 'react';
const contactInfo = [
    {
        icon: Mail,
        label: "Email",
        value: "hello@strixdev.com",
        href: "mailto:hello@strixdev.com",
    },
    {
        icon: Phone,
        label: "Phone",
        value: "+1 (416) 555-0123",
        href: "tel:+14165550123",
    },
    {
        icon: MessageCircle,
        label: "WhatsApp",
        value: "+1 (416) 555-0123",
        href: "https://wa.me/14165550123",
    },
    {
        icon: Linkedin,
        label: "LinkedIn",
        value: "Strix Dev",
        href: "https://linkedin.com/company/strixdev",
    },
    {
        icon: MapPin,
        label: "Office",
        value: "Toronto, Canada",
        href: "#",
    },
    {
        icon: Clock,
        label: "Hours",
        value: "Mon-Fri 9AM-6PM EST",
        href: "#",
    },
];

const ContactForm = () => {
        const [formData, setFormData] = useState({
            name: "",
            email: "",
            company: "",
            budget: "",
            message: "",
        });
        const [isSubmitting, setIsSubmitting] = useState(false);
        const [isSubmitted, setIsSubmitted] = useState(false);

        const handleSubmit = async (e: React.FormEvent) => {
            e.preventDefault();
            setIsSubmitting(true);
            await new Promise((resolve) => setTimeout(resolve, 1500));
            setIsSubmitting(false);
            setIsSubmitted(true);
            setFormData({
                name: "",
                email: "",
                company: "",
                budget: "",
                message: "",
            });
            setTimeout(() => setIsSubmitted(false), 5000);
        };

        const handleChange = (
            e: React.ChangeEvent<
                HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
            >,
        ) => {
            setFormData({ ...formData, [e.target.name]: e.target.value });
        };
    return (
        <section className="py-20 relative">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-20">
                    {/* Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <h2 className="text-2xl font-display mb-8">
                            Send us a message
                        </h2>

                        <form onSubmit={handleSubmit} className="space-y-8">
                            <div className="grid md:grid-cols-2 gap-8">
                                <div>
                                    <label
                                        htmlFor="name"
                                        className="block text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground mb-3"
                                    >
                                        Your Name *
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-0 py-4 bg-transparent border-0 border-b border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground mb-3"
                                    >
                                        Email Address *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-0 py-4 bg-transparent border-0 border-b border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors"
                                        placeholder="john@company.com"
                                    />
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-8">
                                <div>
                                    <label
                                        htmlFor="company"
                                        className="block text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground mb-3"
                                    >
                                        Company
                                    </label>
                                    <input
                                        type="text"
                                        id="company"
                                        name="company"
                                        value={formData.company}
                                        onChange={handleChange}
                                        className="w-full px-0 py-4 bg-transparent border-0 border-b border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors"
                                        placeholder="Your Company"
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="budget"
                                        className="block text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground mb-3"
                                    >
                                        Budget Range
                                    </label>
                                    <select
                                        id="budget"
                                        name="budget"
                                        value={formData.budget}
                                        onChange={handleChange}
                                        className="w-full px-0 py-4 bg-transparent border-0 border-b border-border text-foreground focus:outline-none focus:border-foreground transition-colors"
                                    >
                                        <option value="">Select budget</option>
                                        <option value="5k-10k">
                                            $5,000 - $10,000
                                        </option>
                                        <option value="10k-25k">
                                            $10,000 - $25,000
                                        </option>
                                        <option value="25k-50k">
                                            $25,000 - $50,000
                                        </option>
                                        <option value="50k+">$50,000+</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label
                                    htmlFor="message"
                                    className="block text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground mb-3"
                                >
                                    Project Details *
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={5}
                                    className="w-full px-0 py-4 bg-transparent border-0 border-b border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors resize-none"
                                    placeholder="Tell us about your project, goals, and timeline..."
                                />
                            </div>

                            <motion.button
                                type="submit"
                                disabled={isSubmitting}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="btn-primary flex items-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                <span>
                                    {isSubmitting
                                        ? "Sending..."
                                        : isSubmitted
                                          ? "Message Sent!"
                                          : "Send Message"}
                                </span>
                                {!isSubmitting && !isSubmitted && (
                                    <ArrowUpRight className="w-4 h-4" />
                                )}
                            </motion.button>
                        </form>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <h2 className="text-2xl font-display mb-8">
                            Contact Information
                        </h2>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-0">
                            {contactInfo.map((info, index) => (
                                <motion.a
                                    key={info.label}
                                    href={info.href}
                                    target={
                                        info.href.startsWith("http")
                                            ? "_blank"
                                            : undefined
                                    }
                                    rel={
                                        info.href.startsWith("http")
                                            ? "noopener noreferrer"
                                            : undefined
                                    }
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="flex items-start gap-4 p-6 border border-border group hover:bg-card transition-colors cursor-hover"
                                >
                                    <div className="w-10 h-10 border border-border flex items-center justify-center group-hover:bg-foreground group-hover:border-foreground transition-all">
                                        <info.icon className="w-4 h-4 text-foreground group-hover:text-background transition-colors" />
                                    </div>
                                    <div>
                                        <div className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground mb-1">
                                            {info.label}
                                        </div>
                                        <div className="text-sm">
                                            {info.value}
                                        </div>
                                    </div>
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;