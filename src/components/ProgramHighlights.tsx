
import { motion } from 'framer-motion';
import { Presentation, BrainCircuit, Users } from 'lucide-react';

const ProgramHighlights = () => {
    const highlights = [
        {
            title: "Poster Presentation",
            description: "Showcase your research and innovations. engaging with experts and peers in a dynamic visual forum.",
            icon: <Presentation className="w-10 h-10 text-[#c5a059]" />,
            delay: 0.1
        },
        {
            title: "Mindfulness Workshop",
            description: "A hands-on session dedicated to mindfulness techniques for enhancing mental resilience and operational focus.",
            icon: <BrainCircuit className="w-10 h-10 text-[#c5a059]" />,
            delay: 0.2
        },
        {
            title: "Insightful Sessions",
            description: "Deep dive discussions on Substance Use Disorders, traversing from neurobiology to recovery and resilience.",
            icon: <Users className="w-10 h-10 text-[#c5a059]" />,
            delay: 0.3
        }
    ];

    return (
        <section className="py-24 bg-[#0f1926] relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03]"></div>
            <div className="absolute top-1/2 left-[-10%] w-[40%] h-[40%] bg-[#c5a059] rounded-full blur-[120px] opacity-10"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-[#c5a059] font-bold tracking-widest uppercase text-sm mb-2 block"
                    >
                        Conference Highlights
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-5xl font-bold text-white mb-6"
                    >
                        Engage, Learn, & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c5a059] to-[#e6c985]">Transform</span>
                    </motion.h2>
                    <div className="w-24 h-1 bg-[#c5a059] mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {highlights.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: item.delay, duration: 0.5 }}
                            className="glass-panel-dark p-8 rounded-2xl border border-white/5 hover:border-[#c5a059]/30 transition-all duration-300 group hover:-translate-y-2"
                        >
                            <div className="mb-6 p-4 bg-[#c5a059]/10 rounded-xl inline-block group-hover:bg-[#c5a059]/20 transition-colors">
                                {item.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#c5a059] transition-colors">
                                {item.title}
                            </h3>
                            <p className="text-gray-400 leading-relaxed">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProgramHighlights;
