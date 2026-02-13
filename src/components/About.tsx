import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, LightbulbIcon, Compass } from 'lucide-react';

const About: React.FC = () => {
    return (
        <section className="bg-[#f8fafc] text-[#0f172a] py-28 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#f8fafc] via-[#f1f5f9] to-[#c5a059]/5 opacity-[0.4] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full animate-fade-in-up">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-4xl md:text-5xl font-bold border-l-8 border-[#c5a059] pl-6 text-[#1a2c42] inline-block shadow-sm">
                        About the Conference
                    </h2>
                    <p className="mt-4 text-xl text-gray-500 font-serif max-w-2xl mx-auto italic tracking-wide">
                        MH Jodhpur, 19th - 20th March 2026
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {/* The Problem */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="glass-panel p-10 rounded-2xl shadow-lg border-t-4 border-red-500 hover:shadow-2xl transition-all hover:scale-105 duration-300 transform group"
                    >
                        <div className="flex items-center gap-4 mb-6 group-hover:scale-110 transition-transform duration-300">
                            <div className="bg-red-50 p-3 rounded-full shadow-inner">
                                <AlertTriangle size={36} className="text-red-600" />
                            </div>
                            <h3 className="text-2xl font-bold uppercase text-[#1a2c42] group-hover:text-red-600 transition-colors">The Problem</h3>
                        </div>
                        <p className="text-gray-700 leading-relaxed font-light text-lg">
                            Alcohol has traditionally been intertwined with military rituals and camaraderie, yet it now poses undeniable risks to operational readiness and discipline. This conference addresses how these traditions have evolved into potential liabilities.
                        </p>
                    </motion.div>

                    {/* The Insight */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="glass-panel p-10 rounded-2xl shadow-lg border-t-4 border-[#c5a059] hover:shadow-2xl transition-all hover:scale-105 duration-300 transform group relative z-10 md:-mt-8 bg-white/80"
                    >
                        <div className="flex items-center gap-4 mb-6 group-hover:scale-110 transition-transform duration-300">
                            <div className="bg-[#c5a059]/10 p-3 rounded-full shadow-inner">
                                <LightbulbIcon size={36} className="text-[#c5a059]" />
                            </div>
                            <h3 className="text-2xl font-bold uppercase text-[#1a2c42] group-hover:text-[#c5a059] transition-colors">The Insight</h3>
                        </div>
                        <p className="text-gray-700 leading-relaxed font-light text-lg">
                            We must move from <span className="font-semibold text-[#1a2c42]">"harm reduction"</span> to <span className="font-semibold text-[#c5a059]">"primordial prevention"</span>—addressing root cultural causes. Shift the dialogue from treating symptoms to redefining the underlying cultural scripts.
                        </p>
                    </motion.div>

                    {/* The Solution */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        viewport={{ once: true }}
                        className="glass-panel p-10 rounded-2xl shadow-lg border-t-4 border-[#354f3b] hover:shadow-2xl transition-all hover:scale-105 duration-300 transform group"
                    >
                        <div className="flex items-center gap-4 mb-6 group-hover:scale-110 transition-transform duration-300">
                            <div className="bg-[#354f3b]/10 p-3 rounded-full shadow-inner">
                                <Compass size={36} className="text-[#354f3b]" />
                            </div>
                            <h3 className="text-2xl font-bold uppercase text-[#1a2c42] group-hover:text-[#354f3b] transition-colors">The Solution</h3>
                        </div>
                        <p className="text-gray-700 leading-relaxed font-light text-lg">
                            A synergy of commanders and doctors to deconstruct old scripts and build a new roadmap based on resilience, strength, and health. Forging reciprocal interaction between Armed Forces experts and civil fraternity stalwarts.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
