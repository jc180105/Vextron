import { useState, useEffect } from "react";
import { Menu, X, Zap } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Soluções", href: "/#features" },
        { name: "Benefícios", href: "/#benefits" },
        { name: "FAQ", href: "/#faq" },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 py-4 ${scrolled ? "bg-black/80 backdrop-blur-md border-b border-white/10" : "bg-transparent border-b border-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
                {/* Logo */}
                <Link to="/">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="flex items-center gap-2 cursor-pointer group"
                    >
                        <div className="w-8 h-8 bg-[var(--color-electric-blue)] rounded-lg flex items-center justify-center relative overflow-hidden transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_20px_var(--color-electric-blue)]">
                            <Zap className="w-5 h-5 text-black fill-current relative z-10 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" />
                        </div>
                        <span className="text-xl font-bold font-[family-name:var(--font-display)] tracking-tight text-white transition-colors duration-300 group-hover:text-[var(--color-electric-blue)] group-hover:drop-shadow-[0_0_5px_rgba(0,255,255,0.8)]">
                            VEXTRON
                        </span>
                    </motion.div>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link, index) => (
                        <motion.a
                            key={link.name}
                            href={link.href}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ scale: 1.05, color: "var(--color-electric-blue)" }}
                            className="text-sm font-medium text-gray-300 transition-colors relative group"
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--color-electric-blue)] transition-all duration-300 group-hover:w-full" />
                        </motion.a>
                    ))}

                    <motion.button
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(0, 255, 255, 0.4)" }}
                        whileTap={{ scale: 0.95 }}
                        className="px-6 py-2.5 bg-[var(--color-electric-blue)] text-black rounded-lg text-sm font-bold transition-all relative overflow-hidden group cursor-pointer"
                    >
                        <span className="relative z-10">Começar Agora</span>
                        <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 ease-in-out skew-x-12" />
                    </motion.button>
                </div>

                {/* Mobile Menu Button */}
                <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="md:hidden p-2 text-gray-300"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X /> : <Menu />}
                </motion.button>
            </div>

            {/* Mobile Dropdown */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-black/95 backdrop-blur-xl border-b border-white/10 overflow-hidden"
                    >
                        <div className="px-4 py-6 space-y-4 flex flex-col">
                            {navLinks.map((link, index) => (
                                <motion.a
                                    key={link.name}
                                    href={link.href}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="text-lg font-medium text-gray-300 hover:text-[var(--color-electric-blue)] block"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </motion.a>
                            ))}
                            <hr className="border-white/10 my-2" />
                            <motion.button
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="w-full py-3 bg-[var(--color-electric-blue)] text-black rounded-xl text-center font-bold"
                            >
                                Começar Agora
                            </motion.button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
