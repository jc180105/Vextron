import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { MessageSquare, Phone, Calendar, BarChart3, ArrowRight, User, Bot } from "lucide-react";
import { motion } from "framer-motion";

const ChatMessage = ({ text, isBot, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay }}
        className={`flex w-full mb-4 ${isBot ? "justify-start" : "justify-end"}`}
    >
        <div className={`max-w-[80%] p-4 rounded-2xl ${isBot ? "bg-zinc-800 text-gray-200 rounded-tl-none" : "bg-[var(--color-electric-blue)] text-black rounded-tr-none"}`}>
            <div className="flex items-center gap-2 mb-1 opacity-50 text-xs">
                {isBot ? <Bot size={12} /> : <User size={12} />}
                <span>{isBot ? "Vextron Agent" : "Cliente"}</span>
            </div>
            <p className="text-sm">{text}</p>
        </div>
    </motion.div>
);

const SolutionsPage = () => {

    const solutions = [
        {
            id: "sales",
            title: "Agente de Vendas & Triagem",
            description: "Qualifica leads instantaneamente, responde dúvidas técnicas e agenda reuniões apenas com leads quentes.",
            icon: MessageSquare,
            color: "text-blue-400",
            demoType: "chat",
            messages: [
                { isBot: true, text: "Olá! Vi que você se interessou pelo nosso plano Enterprise. Gostaria de saber mais sobre a implementação?" },
                { isBot: false, text: "Sim, quanto tempo leva para configurar?" },
                { isBot: true, text: "Nossa IA configura tudo em menos de 24h. Posso agendar uma demo técnica para amanhã às 10h?" },
                { isBot: false, text: "Perfeito, pode marcar." },
                { isBot: true, text: "Agendado! Enviarei o convite para seu e-mail." }
            ]
        },
        {
            id: "collections",
            title: "Cobrança Inteligente",
            description: "Recupera crédito de forma empática e eficiente, negociando prazos e métodos de pagamento autonomamente.",
            icon: Phone,
            color: "text-red-400",
            demoType: "chat",
            messages: [
                { isBot: true, text: "Olá João. Notamos uma pendência na fatura de vencimento 10/02. Deseja atualizar o boleto para pagamento hoje?" },
                { isBot: false, text: "Oi, estou sem limite agora. Consigo pagar dia 20?" },
                { isBot: true, text: "Entendido. Posso postergar para dia 20 com um pequeno ajuste de juros. O novo valor seria R$ 152,00. Confirma?" },
                { isBot: false, text: "Confirmo sim." },
                { isBot: true, text: "Obrigado! Seu novo boleto foi enviado por SMS." }
            ]
        },
        {
            id: "scheduling",
            title: "Agendamento Automático",
            description: "Coordena agendas complexas, envia lembretes e reagenda cancelamentos sem intervenção humana.",
            icon: Calendar,
            color: "text-green-400",
            demoType: "card",
            stats: [
                { label: "No-shows reduzidos", value: "-80%" },
                { label: "Agendamentos/dia", value: "24/7" },
                { label: "Integração", value: "Google/Outlook" }
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-[#09090b] text-white selection:bg-[var(--color-electric-blue)] selection:text-black">
            <Navbar />

            <main className="pt-32 pb-20 px-4">
                <section className="max-w-7xl mx-auto text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <h1 className="text-4xl md:text-6xl font-bold font-[family-name:var(--font-display)] mb-6">
                            Nossas Soluções em <span className="text-[var(--color-electric-blue)]">Ação</span>
                        </h1>
                        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                            Veja como nossos agentes operam em cenários reais para transformar sua interação com clientes.
                        </p>
                    </motion.div>
                </section>

                <section className="max-w-7xl mx-auto space-y-32">
                    {solutions.map((sol, index) => (
                        <div key={sol.id} className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-12 items-center`}>

                            {/* Info Side */}
                            <div className="flex-1 space-y-6">
                                <div className={`inline-flex p-3 rounded-xl bg-white/5 ${sol.color}`}>
                                    <sol.icon size={32} />
                                </div>
                                <h2 className="text-3xl md:text-4xl font-bold">{sol.title}</h2>
                                <p className="text-gray-400 text-lg leading-relaxed">{sol.description}</p>
                                <button className="flex items-center gap-2 text-[var(--color-electric-blue)] font-bold hover:gap-3 transition-all cursor-pointer">
                                    Solicitar Demo Específica <ArrowRight size={18} />
                                </button>
                            </div>

                            {/* Demo Side */}
                            <div className="flex-1 w-full">
                                <div className="bg-zinc-900 border border-white/10 rounded-3xl p-6 shadow-2xl relative overflow-hidden group">
                                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[var(--color-electric-blue)] to-transparent opacity-50" />

                                    {sol.demoType === "chat" ? (
                                        <div className="space-y-2">
                                            <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-4">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                                    <span className="text-sm font-medium text-gray-400">Live Demo</span>
                                                </div>
                                                <span className="text-xs text-gray-600">Simulação em tempo real</span>
                                            </div>
                                            {sol.messages.map((msg, i) => (
                                                <ChatMessage key={i} {...msg} delay={i * 1.5} />
                                            ))}
                                        </div>
                                    ) : (
                                        <div className="grid grid-cols-2 gap-4">
                                            {sol.stats.map((stat, i) => (
                                                <motion.div
                                                    key={i}
                                                    initial={{ scale: 0.8, opacity: 0 }}
                                                    whileInView={{ scale: 1, opacity: 1 }}
                                                    transition={{ delay: i * 0.2 }}
                                                    className={`p-6 bg-black/40 rounded-2xl border border-white/5 ${i === 2 ? "col-span-2" : ""}`}
                                                >
                                                    <h4 className="text-3xl font-bold text-white mb-2">{stat.value}</h4>
                                                    <p className="text-sm text-gray-500">{stat.label}</p>
                                                </motion.div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>

                        </div>
                    ))}
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default SolutionsPage;
