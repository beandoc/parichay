import { motion } from 'framer-motion';
import { ShieldCheck, MapPin } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative w-full min-h-screen bg-[#0f1926] text-white flex flex-col justify-center items-center overflow-hidden py-20 px-4">
            {/* Dynamic Background */}
            <div className="absolute inset-0 z-0">
                {/* Gradient Mesh */}
                <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full bg-[#1a2c42] opacity-40 blur-[120px] animate-pulse-slow"></div>
                <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] rounded-full bg-[#c5a059] opacity-10 blur-[120px] animate-pulse-slow delay-1000"></div>

                {/* Subtle Grid Overlay */}
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03]"></div>
            </div>

            <div className="z-10 w-full max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative">

                {/* Left Content */}
                <div className="flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1">

                    {/* Glass Badge */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="mb-6 inline-flex items-center gap-2 px-6 py-2 rounded-full glass-panel-dark text-[#c5a059] text-sm font-semibold tracking-widest uppercase shadow-[0_8px_32px_rgba(0,0,0,0.1)] border border-[#c5a059]/20"
                    >
                        <span className="w-2 h-2 rounded-full bg-[#c5a059] animate-pulse"></span>
                        MH Jodhpur • 19-20 March 2026
                    </motion.div>

                    {/* Main Heading with Typewriter Effect */}
                    <div className="mb-6 relative z-10 text-center lg:text-left">
                        <motion.h1
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={{
                                hidden: {},
                                visible: {
                                    transition: {
                                        staggerChildren: 0.05,
                                        delayChildren: 0.2
                                    }
                                }
                            }}
                            className="font-bold font-heading tracking-tight leading-[1.1]"
                        >
                            <span className="block text-5xl md:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-[#c5a059] via-[#e6c985] to-[#c5a059] pb-2 drop-shadow-sm">
                                {Array.from("Resilience, Strength").map((char, index) => (
                                    <motion.span
                                        key={index}
                                        variants={{
                                            hidden: { opacity: 0, y: 10 },
                                            visible: { opacity: 1, y: 0 }
                                        }}
                                    >
                                        {char}
                                    </motion.span>
                                ))}
                            </span>
                            <span className="block text-4xl md:text-6xl text-gray-100 tracking-tight mt-1">
                                {Array.from("& Spirits").map((char, index) => (
                                    <motion.span
                                        key={index}
                                        variants={{
                                            hidden: { opacity: 0, y: 10 },
                                            visible: { opacity: 1, y: 0 }
                                        }}
                                    >
                                        {char}
                                    </motion.span>
                                ))}
                            </span>
                        </motion.h1>
                    </div>

                    {/* Subheading */}
                    <motion.h2
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.8 }}
                        className="text-xl md:text-2xl text-gray-400 font-light mb-8 tracking-wide max-w-lg"
                    >
                        Redefining Military Culture
                    </motion.h2>

                    {/* Tagline */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.2, delay: 1 }}
                        className="mb-10 text-lg font-serif italic text-[#c5a059]/90 border-l-2 border-[#c5a059]/50 pl-4"
                    >
                        "Sankalp": Swasthya, Sahas, Aur Samman
                    </motion.div>

                    {/* CTAs */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1.2 }}
                        className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
                    >
                        <button className="group relative px-8 py-4 bg-[#c5a059] hover:bg-[#d4af63] text-[#0f172a] font-bold rounded-xl transition-all shadow-[0_4px_20px_rgba(197,160,89,0.25)] hover:shadow-[0_8px_30px_rgba(197,160,89,0.4)] hover:-translate-y-1 overflow-hidden">
                            <span className="relative z-10 flex items-center justify-center gap-2">
                                <ShieldCheck size={20} strokeWidth={2.5} />
                                Register Now
                            </span>
                        </button>

                        <button className="group px-8 py-4 glass-panel-dark hover:bg-white/5 text-white font-medium rounded-xl transition-all flex items-center justify-center gap-2 hover:-translate-y-1 hover:border-white/30">
                            <MapPin size={20} className="text-[#c5a059]" />
                            Venue
                        </button>
                    </motion.div>

                    {/* Scientific Programme Placeholder */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 1.4 }}
                        className="mt-6"
                    >
                        <button className="text-[#c5a059] hover:text-white underline underline-offset-4 decoration-[#c5a059]/50 hover:decoration-white transition-all text-sm uppercase tracking-widest font-semibold flex items-center gap-2">
                            Scientific Programme (Coming Soon)
                        </button>
                    </motion.div>
                </div>

                {/* Right Content - Floating 3D Logo */}
                <div className="flex justify-center items-center order-1 lg:order-2">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ duration: 1.5, type: "spring", bounce: 0.4 }}
                        className="relative group"
                    >
                        {/* Glowing Backdrops */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#c5a059] blur-[100px] opacity-20 rounded-full animate-pulse-slow"></div>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] bg-[#1a2c42] blur-[80px] opacity-40 rounded-full mix-blend-multiply"></div>

                        {/* Glass Container for Logo */}
                        <div className="relative glass-panel-dark p-12 rounded-[2rem] border border-white/10 shadow-2xl backdrop-blur-xl bg-white/5 transform transition-transform duration-700 hover:scale-105 hover:rotate-1">
                            <img
                                src="/logo.jpg"
                                alt="Conference Logo"
                                className="w-64 h-64 md:w-80 md:h-80 object-contain drop-shadow-2xl"
                            />
                            {/* Decorative Corner Accents */}
                            <div className="absolute top-6 left-6 w-8 h-8 border-t-2 border-l-2 border-[#c5a059]/30 rounded-tl-lg"></div>
                            <div className="absolute bottom-6 right-6 w-8 h-8 border-b-2 border-r-2 border-[#c5a059]/30 rounded-br-lg"></div>
                        </div>
                    </motion.div>
                </div>
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
