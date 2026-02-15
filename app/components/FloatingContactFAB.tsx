import { useState } from "react";
import { Linkedin, Facebook, Plus, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const FloatingContactFAB = () => {
    const [open, setOpen] = useState(false);
    const encodedWhatsAppMessage = encodeURIComponent(
        "Hi! I want to connect with you.",
    );
    const whatsappUrl = `https://wa.me/+8801518933208?text=${encodedWhatsAppMessage}`;
    // const messengerUrl = `https://m.me/yourpageusername`;

    const links = [
        {
            href: whatsappUrl,
            icon: Phone,
            label: "WhatsApp",
            bg: "bg-green-500",
        },
        // {
        //     href: messengerUrl,
        //     icon: Facebook,
        //     label: "Messenger",
        //     bg: "bg-blue-500",
        // },
        {
            href: "https://www.linkedin.com/company/strix-dev",
            icon: Linkedin,
            label: "LinkedIn",
            bg: "bg-blue-700",
        },
    ];

    return (
        <div className="fixed bottom-10 right-10 flex flex-col items-end gap-3 z-50">
            <AnimatePresence>
                {open &&
                    links.map((link, i) => (
                        <motion.a
                            key={link.label}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 20, scale: 0.8 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.8 }}
                            transition={{ delay: i * 0.05, duration: 0.2 }}
                            className={`flex items-center gap-2 ${link.bg} text-white px-4 py-2 rounded-full shadow-lg hover:scale-105 transition-transform font-mono text-xs uppercase tracking-wider`}
                        >
                            <link.icon className="w-4 h-4" />
                            {link.label}
                        </motion.a>
                    ))}
            </AnimatePresence>

            <motion.button
                onClick={() => setOpen(!open)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                animate={{ rotate: open ? 45 : 0 }}
                transition={{ duration: 0.2 }}
                className="glass p-2 rounded-full border border-foreground/20 text-foreground"
                aria-label={
                    open ? "Close contact options" : "Open contact options"
                }
            >
                <Plus className="w-5 h-5" />
            </motion.button>
        </div>
    );
};

export default FloatingContactFAB;
