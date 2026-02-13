import React from 'react';
import { motion } from 'framer-motion';
import { ShieldAlert, TrendingUp, Users, Brain } from 'lucide-react';

const WhyAttend: React.FC = () => {
    const points = [
        {
            title: "Suicide Prevention",
            icon: <ShieldAlert className="w-8 h-8 md:w-10 md:h-10 text-white" />,
            color: "bg-red-500",
            text: "Alcohol is involved in over 50% of attempted suicides presenting at MH Jodhpur. Addressing this is a critical life-saving measure."
        },
        {
            title: "Operational Readiness",
            icon: <TrendingUp className="w-8 h-8 md:w-10 md:h-10 text-white" />,
            color: "bg-blue-600",
            text: "Substance reliance compromises judgment, discipline, and mission efficiency. We must restore peak performance standards."
        },
        {
            title: "Leadership Reform",
            icon: <Users className="w-8 h-8 md:w-10 md:h-10 text-white" />,
            color: "bg-[#c5a059]",
            text: "A unique opportunity for Commanders and Medical Professionals to jointly design new, effective coping strategies for troops."
        },
        {
            title: "Mental Health",
            icon: <Brain className="w-8 h-8 md:w-10 md:h-10 text-white" />,
            color: "bg-purple-600",
            text: "Alcohol often masks deeper issues like PTSD and anxiety. We need to clear the fog to treat the root causes."
        }
    ];

    return (
        <section className="py-24 bg-[#1a2c42] relative">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05]"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold text-white mb-6"
                    >
                        Why This Dialogue Matters Now
                    </motion.h2>
                    <div className="w-32 h-1 bg-[#c5a059] mx-auto rounded-full mix-blend-screen"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {points.map((point, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            className="glass-panel-dark p-6 rounded-2xl hover:bg-white/10 transition-colors duration-300 border border-white/5 group"
                        >
                            <div className={`mb-6 p-4 rounded-xl inline-block ${point.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                {point.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3 tracking-wide">{point.title}</h3>
                            <p className="text-gray-300 text-sm leading-relaxed font-light">{point.text}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyAttend;
