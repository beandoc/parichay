import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, MapPin, ChevronRight, Play } from 'lucide-react';

const Hero: React.FC = () => {
    return (
        <section className="relative w-full min-h-screen bg-[#0f1926] text-white flex flex-col justify-center items-center overflow-hidden py-20 px-4">
            {/* Dynamic Background */}
            <div className="absolute inset-0 z-0">
                {/* Gradient Mesh */}
                <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full bg-[#1a2c42] opacity-40 blur-[120px] animate-pulse-slow"></div>
                <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] rounded-full bg-[#c5a059] opacity-10 blur-[120px] animate-pulse-slow delay-1000"></div>
                <div className="absolute top-[30%] left-[50%] transform -translate-x-1/2 w-[400px] h-[400px] rounded-full bg-[#354f3b] opacity-10 blur-[100px]"></div>

                {/* Subtle Grid Overlay */}
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03]"></div>
            </div>

            <div className="z-10 w-full max-w-6xl mx-auto flex flex-col items-center relative">

                {/* Logo Image with enhanced glow */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8, y: -20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                    className="mb-10 relative group"
                >
                    <div className="absolute inset-0 bg-[#c5a059] blur-[80px] opacity-15 rounded-full group-hover:opacity-25 transition-opacity duration-700"></div>
                    <img
                        src="/logo.jpg"
                        alt="Conference Logo"
                        className="w-40 h-40 md:w-56 md:h-56 object-contain relative z-10 drop-shadow-2xl transition-transform duration-700 group-hover:scale-105"
                    />
                </motion.div>

                {/* Glass Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="mb-8 inline-flex items-center gap-2 px-6 py-2 rounded-full glass-panel-dark text-[#c5a059] text-sm font-semibold tracking-widest uppercase shadow-[0_8px_32px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_32px_rgba(197,160,89,0.15)] transition-shadow duration-300 border border-[#c5a059]/20"
                >
                    <span className="w-2 h-2 rounded-full bg-[#c5a059] animate-pulse"></span>
                    MH Jodhpur • 19-20 March 2026
                </motion.div>

                {/* Main Heading */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                    className="text-center mb-6 relative z-10"
                >
                    <span className="block text-5xl md:text-7xl lg:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#c5a059] via-[#e6c985] to-[#c5a059] pb-2 drop-shadow-sm font-heading tracking-tight leading-[1.1]">
                        Resilience, Strength
                    </span>
                    <span className="block text-4xl md:text-6xl lg:text-7xl font-bold text-gray-100 tracking-tight">
                        & Spirits
                    </span>
                </motion.h1>

                {/* Subheading */}
                <motion.h2
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="text-xl md:text-2xl text-gray-400 font-light mb-10 tracking-wide"
                >
                    Redefining Military Culture
                </motion.h2>

                {/* Tagline */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.2, delay: 1 }}
                    className="mb-14 text-lg md:text-xl font-serif italic text-[#c5a059]/80 border-l-2 border-[#c5a059]/30 pl-4"
                >
                    "Sankalp": Swasthya, Sahas, Aur Samman
                </motion.div>

                {/* CTAs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                    className="flex flex-col sm:flex-row gap-5 w-full justify-center px-4"
                >
                    <button className="group relative px-8 py-4 bg-[#c5a059] hover:bg-[#d4af63] text-[#0f172a] font-bold rounded-xl transition-all shadow-[0_4px_20px_rgba(197,160,89,0.25)] hover:shadow-[0_8px_30px_rgba(197,160,89,0.4)] hover:-translate-y-1 overflow-hidden">
                        <span className="relative z-10 flex items-center justify-center gap-2">
                            <ShieldCheck size={20} strokeWidth={2.5} />
                            Register Now
                            <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </span>
                        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                    </button>

                    <button className="group px-8 py-4 glass-panel-dark hover:bg-white/5 text-white font-medium rounded-xl transition-all flex items-center justify-center gap-2 hover:-translate-y-1 hover:border-white/30">
                        <MapPin size={20} className="text-[#c5a059]" />
                        Venue Details
                    </button>

                    <button className="px-6 py-4 rounded-full border border-white/10 text-white/60 hover:text-white hover:border-white/30 transition-colors flex items-center justify-center gap-2 text-sm font-medium backdrop-blur-sm">
                        <Play size={14} fill="currentColor" />
                        Watch teaser
                    </button>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 text-white/30"
            >
                <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-white/30 to-transparent"></div>
                <span className="text-[10px] tracking-widest uppercase">Scroll</span>
            </motion.div>
        </section>
    );
};

export default Hero;
