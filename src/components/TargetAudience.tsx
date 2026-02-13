
import { motion } from 'framer-motion';
import { Check, Users2 } from 'lucide-react';

const TargetAudience = () => {
    return (
        <section className="py-24 bg-[#e2e8f0] relative overflow-hidden">
            {/* Background shape */}
            <div className="absolute -left-32 -top-32 w-96 h-96 bg-[#c5a059]/10 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="absolute right-0 bottom-0 w-1/2 h-full bg-gradient-to-l from-white/20 to-transparent pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-16">

                    <div className="w-full lg:w-1/2">
                        <motion.span
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-[#c5a059] font-bold tracking-widest uppercase text-sm mb-2 block"
                        >
                            Who Should Attend?
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-5xl font-bold text-[#1a2c42] mb-8 leading-tight"
                        >
                            A Forum for <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1a2c42] to-[#3b82f6]">Change Makers</span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="text-lg text-gray-600 mb-10 leading-relaxed font-light"
                        >
                            This conference is a unique convergence of medical expertise and military leadership. We invite those who shape policy, culture, and the future of the Armed Forces.
                        </motion.p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {[
                                "Specialist Officers",
                                "Medical Officers",
                                "Nursing Officers",
                                "Local Military Commanders"
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.4 + (index * 0.1) }}
                                    className="flex items-center space-x-3 bg-white/60 backdrop-blur-sm px-6 py-4 rounded-xl shadow-sm border border-white/50 hover:shadow-md transition-shadow group"
                                >
                                    <div className="w-8 h-8 rounded-full bg-[#c5a059]/20 flex items-center justify-center text-[#c5a059] group-hover:bg-[#c5a059] group-hover:text-white transition-colors">
                                        <Check size={16} strokeWidth={3} />
                                    </div>
                                    <span className="text-[#1a2c42] font-semibold">{item}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8, rotate: -3 }}
                            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                            viewport={{ once: true }}
                            transition={{ ease: "circOut", duration: 1 }}
                            className="relative"
                        >
                            <div className="absolute inset-0 bg-gradient-to-tr from-[#c5a059] to-[#1a2c42] rounded-[2rem] transform rotate-3 blur-sm opacity-30"></div>
                            <div className="glass-panel p-12 rounded-[2rem] shadow-2xl border border-white/60 relative bg-white/40 backdrop-blur-xl w-full max-w-md aspect-square flex flex-col items-center justify-center text-center">
                                <Users2 size={120} className="text-[#1a2c42]/80 mb-6 drop-shadow-sm" strokeWidth={1} />
                                <h3 className="text-6xl font-bold text-[#1a2c42] mb-2 tracking-tighter">500+</h3>
                                <p className="text-[#c5a059] font-bold uppercase tracking-widest text-sm">Delegates Expected</p>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default TargetAudience;
