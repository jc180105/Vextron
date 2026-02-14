import { useState } from 'react';
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
    {
        question: "O Agente consegue agendar horários?",
        answer: "Sim, ele se integra à sua agenda e reserva horários sem conflitos, garantindo total sincronia com sua disponibilidade."
    },
    {
        question: "Como funcionam os lembretes?",
        answer: "O agente monitora prazos e envia avisos automáticos para garantir a presença do seu cliente, reduzindo o no-show drasticamente."
    },
    {
        question: "Ele pode fazer cobranças?",
        answer: "Sim, ele gerencia pendências financeiras e facilita o recebimento de forma profissional, com abordagens humanizadas e eficazes."
    },
    {
        question: "Preciso de conhecimentos técnicos?",
        answer: "Não. A Vextron entrega a solução chave na mão (Turnkey), pronta para gerar resultados imediatos sem complexidade para você."
    }
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    return (
        <section className="py-24 px-4 bg-black">
            <div className="max-w-3xl mx-auto">
                <h2 className="text-4xl font-bold text-center mb-12">Perguntas Frequentes</h2>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="border border-white/10 rounded-xl overflow-hidden bg-white/[0.02]">
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-6 text-left hover:bg-white/[0.02] transition-colors"
                                aria-expanded={openIndex === index}
                            >
                                <span className="font-medium text-lg">{faq.question}</span>
                                {openIndex === index ? (
                                    <Minus className="w-5 h-5 text-[var(--color-electric-blue)]" />
                                ) : (
                                    <Plus className="w-5 h-5 text-gray-500" />
                                )}
                            </button>

                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="px-6 pb-6 text-gray-400 border-t border-white/5 pt-4">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
