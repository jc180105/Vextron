import { Calendar, DollarSign, MessageSquare, Filter } from "lucide-react";
import { motion } from "framer-motion";

const features = [
    {
        title: "Agendamento Inteligente",
        description: "Sincronização em tempo real com calendários para marcação de reuniões e serviços.",
        icon: Calendar,
        className: "md:col-span-2",
    },
    {
        title: "Recuperação e Cobrança",
        description: "Gestão de inadimplência e lembretes de pagamento de forma automática e humanizada.",
        icon: DollarSign,
        className: "md:col-span-1",
    },
    {
        title: "Lembretes de Compromissos",
        description: "Redução drástica de faltas através de avisos estratégicos via chat.",
        icon: MessageSquare,
        className: "md:col-span-1",
    },
    {
        title: "Qualificação de Leads",
        description: "Filtro inteligente de contatos para entregar apenas clientes prontos para fechar negócio.",
        icon: Filter,
        className: "md:col-span-2",
    },
];

const BentoGridFeatures = () => {
    return (
        <section className="py-24 px-4 bg-black/40">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 font-[family-name:var(--font-display)]">
                        O que o Agente Vextron faz?
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Substitua tarefas repetitivas por inteligência artificial de alta performance.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`p-8 rounded-3xl bg-white/5 border border-white/5 hover:border-[var(--color-electric-blue)]/30 hover:bg-white/[0.07] transition-all group ${feature.className}`}
                        >
                            <div className="w-12 h-12 rounded-2xl bg-[var(--color-electric-blue)]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <feature.icon className="w-6 h-6 text-[var(--color-electric-blue)]" />
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
                            <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BentoGridFeatures;
