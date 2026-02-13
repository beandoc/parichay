
import { MapPin, Calendar, CreditCard, Landmark, ArrowUp } from 'lucide-react';
import { motion } from 'framer-motion';

const Logistics = () => {
    return (
        <footer className="bg-[#0f1926] text-white pt-24 pb-12 relative overflow-hidden border-t border-white/5">
            {/* Background Effects */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#c5a059] to-transparent opacity-50"></div>
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#c5a059] rounded-full mix-blend-color-dodge filter blur-[100px] opacity-10"></div>
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03]"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Venue */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="group"
                    >
                        <div className="flex items-center gap-3 mb-6 text-[#c5a059]">
                            <div className="p-2 bg-[#c5a059]/10 rounded-lg group-hover:bg-[#c5a059]/20 transition-colors">
                                <MapPin size={24} />
                            </div>
                            <h3 className="text-lg font-bold uppercase tracking-wider">Venue</h3>
                        </div>
                        <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                            MH Jodhpur<br />
                            (Jodhpur Military Station)<br />
                            Rajasthan, India
                        </p>
                    </motion.div>

                    {/* Dates */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="group"
                    >
                        <div className="flex items-center gap-3 mb-6 text-[#c5a059]">
                            <div className="p-2 bg-[#c5a059]/10 rounded-lg group-hover:bg-[#c5a059]/20 transition-colors">
                                <Calendar size={24} />
                            </div>
                            <h3 className="text-lg font-bold uppercase tracking-wider">Dates</h3>
                        </div>
                        <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                            19th - 20th March 2026<br />
                            0900 - 1700 Hours
                        </p>
                    </motion.div>

                    {/* Fees */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="group"
                    >
                        <div className="flex items-center gap-3 mb-6 text-[#c5a059]">
                            <div className="p-2 bg-[#c5a059]/10 rounded-lg group-hover:bg-[#c5a059]/20 transition-colors">
                                <CreditCard size={24} />
                            </div>
                            <h3 className="text-lg font-bold uppercase tracking-wider">Delegate Fees</h3>
                        </div>
                        <ul className="text-gray-400 space-y-3 font-light">
                            <li className="flex justify-between border-b border-white/10 pb-2 group-hover:border-white/20 transition-colors">
                                <span>Outstation</span> <span className="font-semibold text-white">₹ 8,000/-</span>
                            </li>
                            <li className="flex justify-between border-b border-white/10 pb-2 group-hover:border-white/20 transition-colors">
                                <span>Local</span> <span className="font-semibold text-white">₹ 2,000/-</span>
                            </li>
                        </ul>
                    </motion.div>

                    {/* Funding */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="group"
                    >
                        <div className="flex items-center gap-3 mb-6 text-[#c5a059]">
                            <div className="p-2 bg-[#c5a059]/10 rounded-lg group-hover:bg-[#c5a059]/20 transition-colors">
                                <Landmark size={24} />
                            </div>
                            <h3 className="text-lg font-bold uppercase tracking-wider">Support</h3>
                        </div>
                        <p className="text-gray-400 leading-relaxed mb-2">
                            Acknowledging support from:
                        </p>
                        <div className="text-xl font-bold text-white tracking-tight">MCI & ICMR</div>
                    </motion.div>
                </div>

                <div className="border-t border-white/10 pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-center md:text-left">
                        <h4 className="text-2xl font-serif italic text-[#c5a059]/90 mb-2 font-medium">
                            "From Spirits to Spirit: Redefining the Ethos."
                        </h4>
                        <p className="text-gray-600 text-xs uppercase tracking-widest">
                            © 2026 Military Psychiatry Conference. All rights reserved.
                        </p>
                    </div>

                    <button
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="p-4 rounded-full bg-white/5 hover:bg-white/10 text-[#c5a059] transition-all hover:-translate-y-1 border border-white/5"
                    >
                        <ArrowUp size={20} />
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default Logistics;
