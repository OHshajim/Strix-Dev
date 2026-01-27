import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Work", href: "/work" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
];

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("home");
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const navigate = useNavigate()
    const location = useLocation();

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
        navigate(href);
    };
    const isActive = (href: string) => {
        if (href === "/") return location.pathname === "/";
        return location.pathname.startsWith(href);
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
                    <Link to="/" className="flex items-center gap-3 group">
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            className="flex items-center gap-3"
                        >
                            <img
                                src="https://i.ibb.co.com/sJM47XhW/icon1.png"
                                className="w-14"
                                loading="lazy"
                            />
                            <span className="text-xl font-display tracking-tight">
                                STRIX
                                <span className="text-muted-foreground font-body font-light ml-1">
                                    DEV
                                </span>
                            </span>
                        </motion.div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-10">
                        {navLinks.map((link, index) => (
                            <motion.div
                                key={link.name}
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    delay: 0.1 * index + 0.3,
                                    duration: 0.5,
                                }}
                            >
                                <Link
                                    to={link.href}
                                    className={`relative text-xs font-mono uppercase tracking-[0.2em] transition-all duration-300 ${
                                        isActive(link.href)
                                            ? "text-foreground"
                                            : "text-muted-foreground hover:text-foreground"
                                    }`}
                                >
                                    {link.name}
                                    {isActive(link.href) && (
                                        <motion.div
                                            layoutId="activeNav"
                                            className="absolute -bottom-1 left-0 right-0 h-px bg-foreground"
                                            transition={{ duration: 0.3 }}
                                        />
                                    )}
                                </Link>
                            </motion.div>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8, duration: 0.5 }}
                        className="hidden md:block"
                    >
                        <Link to="/contact" className="btn-outline text-xs">
                            Get in Touch
                        </Link>
                    </motion.div>

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
                                <motion.div
                                    key={link.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ delay: 0.05 * index }}
                                >
                                    <Link
                                        to={link.href}
                                        onClick={() =>
                                            setIsMobileMenuOpen(false)
                                        }
                                        className={`text-3xl font-display tracking-tight transition-colors ${
                                            isActive(link.href)
                                                ? "text-foreground"
                                                : "text-muted-foreground"
                                        }`}
                                    >
                                        {link.name}
                                    </Link>
                                </motion.div>
                            ))}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.4 }}
                            >
                                <Link
                                    to="/contact"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="btn-primary mt-8"
                                >
                                    <span>Start a Project</span>
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
