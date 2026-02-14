import { Clock, TrendingDown, Lock } from "lucide-react";

const reasons = [
    {
        icon: Clock,
        title: "Disponibilidade 24/7",
        description: "Seus agentes nunca dormem, garantindo atendimento e vendas a qualquer hora do dia ou da noite.",
        color: "text-[var(--color-electric-blue)]"
    },
    {
        icon: TrendingDown,
        title: "Redução de Custos Operacionais",
        description: "Diminua gastos com equipe de suporte e vendas enquanto aumenta a capacidade de atendimento.",
        color: "text-[var(--color-gold)]"
    },
    {
        icon: Lock,
        title: "Propriedade Total",
        description: "Diferente de SaaS genéricos, a solução é sua. Você tem controle total sobre os dados e a tecnologia.",
        color: "text-[var(--color-electric-blue)]"
    }
];

const WhyVextron = () => {
    return (
        <section className="py-20 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[var(--color-electric-blue)]/5 pointer-events-none" />

            <div className="max-w-6xl mx-auto px-4 relative z-10">
                <div className="mb-16 text-center">
                    <span className="text-[var(--color-gold)] font-bold tracking-wider uppercase text-sm">Por que Vextron?</span>
                    <h2 className="text-4xl font-bold mt-2">A vantagem competitiva definitiva</h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8 md:gap-12">
                    {reasons.map((reason, index) => (
                        <div key={index} className="bg-white/[0.03] border border-white/10 p-8 md:p-10 rounded-3xl hover:bg-white/[0.05] transition-all hover:-translate-y-1">
                            <div className={`w-14 h-14 md:w-16 md:h-16 rounded-xl bg-white/5 flex items-center justify-center mb-6 md:mb-8 ${reason.color}`}>
                                <reason.icon className="w-7 h-7 md:w-8 md:h-8" />
                            </div>
                            <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">{reason.title}</h3>
                            <p className="text-gray-400 leading-relaxed text-sm md:text-base">{reason.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyVextron;
