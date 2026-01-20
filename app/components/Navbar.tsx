import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Work", href: "#work" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
];

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("home");
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);

            // Determine active section
            const sections = navLinks.map((link) => link.href.slice(1));
            for (const section of sections.reverse()) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 150) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleNavClick = (href: string) => {
        setIsMobileMenuOpen(false);
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <>
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: [0.4, 0, 0, 1] }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
                    isScrolled ? "glass py-4" : "py-6"
                }`}
            >
                <div className="container mx-auto px-6 flex items-center justify-between">
                    {/* Logo */}
                    <motion.a
                        href="#home"
                        onClick={(e) => {
                            e.preventDefault();
                            handleNavClick("#home");
                        }}
                        className="flex items-center gap-3 group"
                        whileHover={{ scale: 1.02 }}
                    >
                        <div className="relative">
                            {/* Minimal owl / S abstract */}
                            <svg
                                viewBox="0 0 40 40"
                                fill="none"
                                className="w-10 h-10"
                            >
                                <rect
                                    x="2"
                                    y="2"
                                    width="36"
                                    height="36"
                                    className="stroke-foreground"
                                    strokeWidth="1"
                                    fill="none"
                                />
                                <circle
                                    cx="14"
                                    cy="16"
                                    r="4"
                                    className="fill-foreground"
                                />
                                <circle
                                    cx="26"
                                    cy="16"
                                    r="4"
                                    className="fill-foreground"
                                />
                                <path
                                    d="M14 28 L20 34 L26 28"
                                    className="stroke-foreground"
                                    strokeWidth="1.5"
                                    strokeLinecap="square"
                                    fill="none"
                                />
                            </svg>
                        </div>
                        <span className="text-xl font-display tracking-tight">
                            STRIX
                            <span className="text-muted-foreground font-body font-light ml-1">
                                DEV
                            </span>
                        </span>
                    </motion.a>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-10">
                        {navLinks.map((link, index) => (
                            <motion.a
                                key={link.name}
                                href={link.href}
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleNavClick(link.href);
                                }}
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    delay: 0.1 * index + 0.3,
                                    duration: 0.5,
                                }}
                                className={`relative text-xs font-mono uppercase tracking-[0.2em] transition-all duration-300 ${
                                    activeSection === link.href.slice(1)
                                        ? "text-foreground"
                                        : "text-muted-foreground hover:text-foreground"
                                }`}
                            >
                                {link.name}
                                {activeSection === link.href.slice(1) && (
                                    <motion.div
                                        layoutId="activeNav"
                                        className="absolute -bottom-1 left-0 right-0 h-px bg-foreground"
                                        transition={{ duration: 0.3 }}
                                    />
                                )}
                            </motion.a>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <motion.a
                        href="#contact"
                        onClick={(e) => {
                            e.preventDefault();
                            handleNavClick("#contact");
                        }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8, duration: 0.5 }}
                        className="hidden md:block btn-outline text-xs"
                    >
                        Get in Touch
                    </motion.a>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden p-2 text-foreground hover:text-muted-foreground transition-colors"
                    >
                        {isMobileMenuOpen ? (
                            <X size={24} />
                        ) : (
                            <Menu size={24} />
                        )}
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-40 bg-background md:hidden"
                    >
                        <div className="flex flex-col items-center justify-center h-full gap-8">
                            {navLinks.map((link, index) => (
                                <motion.a
                                    key={link.name}
                                    href={link.href}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleNavClick(link.href);
                                    }}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ delay: 0.05 * index }}
                                    className={`text-3xl font-display tracking-tight transition-colors ${
                                        activeSection === link.href.slice(1)
                                            ? "text-foreground"
                                            : "text-muted-foreground"
                                    }`}
                                >
                                    {link.name}
                                </motion.a>
                            ))}
                            <motion.a
                                href="#contact"
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleNavClick("#contact");
                                }}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.4 }}
                                className="btn-primary mt-8"
                            >
                                <span>Start a Project</span>
                            </motion.a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
