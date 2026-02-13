import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ShieldCheck } from 'lucide-react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Highlights', href: '#highlights' },
        { name: 'Why Attend', href: '#why-attend' },
        { name: 'Venue', href: '#venue' },
    ];

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6 }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                    ? 'bg-[#0f1926]/80 backdrop-blur-md border-b border-white/5 py-4 shadow-lg'
                    : 'bg-transparent py-6'
                    }`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
                    {/* Logo Area */}
                    <div className="flex items-center gap-3">
                        <img src="/logo.jpg" alt="Logo" className="w-10 h-10 rounded-full object-cover border border-[#c5a059]/30" />
                        <div className="leading-none">
                            <span className="block text-white font-bold tracking-tight text-lg">MH Jodhpur</span>
                            <span className="block text-[#c5a059] text-[10px] uppercase tracking-widest font-semibold">Conference 2026</span>
                        </div>
                    </div>

                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-sm font-medium text-gray-300 hover:text-[#c5a059] transition-colors uppercase tracking-wider"
                            >
                                {link.name}
                            </a>
                        ))}
                        <button className="px-5 py-2 bg-[#c5a059] text-[#0f1926] font-bold text-sm rounded-lg hover:bg-[#d4af63] transition-colors flex items-center gap-2">
                            <ShieldCheck size={16} />
                            Register
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-white p-2 hover:bg-white/10 rounded-full transition-colors"
                        onClick={() => setIsOpen(true)}
                    >
                        <Menu size={24} />
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Sidebar Navigation */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 md:hidden"
                            onClick={() => setIsOpen(false)}
                        />

                        {/* Sidebar */}
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="fixed inset-y-0 right-0 w-[80%] max-w-sm bg-[#0f1926] border-l border-white/10 z-50 p-6 flex flex-col shadow-2xl md:hidden"
                        >
                            <div className="flex justify-between items-center mb-10">
                                <span className="text-xl font-bold text-white">Menu</span>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="p-2 bg-white/5 rounded-full text-gray-400 hover:text-white transition-colors"
                                >
                                    <X size={20} />
                                </button>
                            </div>

                            <div className="flex flex-col gap-6">
                                {navLinks.map((link) => (
                                    <a
                                        key={link.name}
                                        href={link.href}
                                        onClick={() => setIsOpen(false)}
                                        className="text-lg font-medium text-gray-300 hover:text-[#c5a059] border-b border-white/5 pb-4 flex items-center justify-between group"
                                    >
                                        {link.name}
                                        <span className="text-[#c5a059] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all">→</span>
                                    </a>
                                ))}
                            </div>

                            <div className="mt-auto">
                                <button className="w-full py-4 bg-[#c5a059] text-[#0f1926] font-bold text-lg rounded-xl flex items-center justify-center gap-3">
                                    <ShieldCheck size={20} />
                                    Register Now
                                </button>
                                <p className="text-center text-gray-600 text-xs mt-6">
                                    © 2026 Dept of Psychiatry, MH Jodhpur
                                </p>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
