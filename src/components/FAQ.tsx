import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const FAQItem = ({ question, answer, isOpen, onClick }: { question: string; answer: string, isOpen: boolean, onClick: () => void }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            layout
            transition={{ duration: 0.3 }}
            className={`border border-[#e2e8f0] rounded-xl overflow-hidden mb-4 bg-white/50 backdrop-blur-sm transition-all duration-300 hover:shadow-md ${isOpen ? 'shadow-lg bg-white box-border border-[#c5a059]/30' : ''}`}
        >
            <button
                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
                onClick={onClick}
            >
                <span className={`text-lg font-medium text-[#1a2c42] transition-colors ${isOpen ? 'text-[#c5a059]' : ''}`}>
                    {question}
                </span>
                <span className={`flex-shrink-0 ml-4 p-2 rounded-full ${isOpen ? 'bg-[#c5a059]/10 text-[#c5a059]' : 'text-gray-400 bg-gray-100'} transition-all duration-300`}>
                    {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                </span>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                        <div className="px-6 pb-6 pt-0 text-gray-600 leading-relaxed font-light border-t border-transparent">
                            <p className="border-l-2 border-[#c5a059]/30 pl-4">{answer}</p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const faqs = [
        {
            question: "What is 'Primordial Prevention'?",
            answer: "It is preventing risk factors (like cultural normalization of alcohol) from emerging in the first place, rather than just treating the symptoms after they appear. We aim to reshape the environment itself to foster resilience naturally."
        },
        {
            question: "Is this only for doctors?",
            answer: "No, it is critical for Commanders and administrative heads to attend. The goal is to help shape unit culture and leadership messages, which requires a collaborative effort beyond just the medical community."
        }
    ];

    const handleToggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    }

    return (
        <section className="py-24 bg-[#f8fafc] relative">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-white to-transparent pointer-events-none"></div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center justify-center p-3 rounded-full bg-[#c5a059]/10 text-[#c5a059] mb-4">
                        <HelpCircle size={24} />
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-[#1a2c42] mb-3">Common Questions</h2>
                    <p className="text-gray-500 max-w-lg mx-auto">Clarifying the mission and audience for this groundbreaking event.</p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <FAQItem
                            key={index}
                            question={faq.question}
                            answer={faq.answer}
                            isOpen={openIndex === index}
                            onClick={() => handleToggle(index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
