import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { CheckCircle, Users, Target, Zap } from "lucide-react";
import { motion } from "framer-motion";

const AboutPage = () => {
    return (
        <div className="min-h-screen bg-[#09090b] text-white selection:bg-[var(--color-electric-blue)] selection:text-black">
            <Navbar />

            <main className="pt-32 pb-20 px-4">
                {/* Header */}
                <section className="max-w-7xl mx-auto text-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-5xl md:text-7xl font-bold font-[family-name:var(--font-display)] mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-gray-500">
                            Nossa Missão é <span className="text-[var(--color-electric-blue)]">Redefinir o Futuro</span>
                        </h1>
                        <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                            A Vextron nasceu para eliminar ineficiências operacionais através de Inteligência Artificial autônoma e proprietária.
                        </p>
                    </motion.div>
                </section>

                {/* Story/Grid */}
                <section className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center mb-32">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <h2 className="text-4xl font-bold">Mais que software, <br />somos <span className="text-[var(--color-gold)]">Inteligência Estratégica</span>.</h2>
                        <div className="space-y-6 text-gray-300 leading-relaxed text-lg">
                            <p>
                                No cenário competitivo atual, automação básica não é mais suficiente. Empresas precisam de sistemas que pensam, agem e evoluem.
                            </p>
                            <p>
                                Diferente de agências que apenas conectam ferramentas de terceiros (como OpenAI fillers), a Vextron desenvolve <b>tecnologia proprietária</b>. Nossos agentes não apenas respondem chats; eles executam processos complexos de vendas, cobrança e triagem com autonomia total.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="bg-zinc-900/50 p-8 rounded-3xl border border-white/10 relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-electric-blue)]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                        <div className="grid grid-cols-2 gap-6 relative z-10">
                            <div className="p-6 bg-black/40 rounded-2xl border border-white/5">
                                <Users className="w-8 h-8 text-[var(--color-electric-blue)] mb-4" />
                                <h4 className="text-2xl font-bold text-white">500+</h4>
                                <p className="text-sm text-gray-500">Empresas Impactadas</p>
                            </div>
                            <div className="p-6 bg-black/40 rounded-2xl border border-white/5">
                                <Zap className="w-8 h-8 text-[var(--color-gold)] mb-4" />
                                <h4 className="text-2xl font-bold text-white">1M+</h4>
                                <p className="text-sm text-gray-500">Operações/Dia</p>
                            </div>
                            <div className="p-6 bg-black/40 rounded-2xl border border-white/5 col-span-2">
                                <Target className="w-8 h-8 text-white mb-4" />
                                <h4 className="text-2xl font-bold text-white">99.9%</h4>
                                <p className="text-sm text-gray-500">Precisão em Automação</p>
                            </div>
                        </div>
                    </motion.div>
                </section>

                {/* Values */}
                <section className="max-w-7xl mx-auto mb-20">
                    <h3 className="text-3xl font-bold text-center mb-12">Nossos Pilares</h3>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { title: "Propriedade Intelectual", desc: "Não dependemos de 'wrappers'. Construímos nossa própria infraestrutura de IA." },
                            { title: "Foco em Resultado", desc: "Nossa métrica não é 'chat respondido', é 'dinheiro no caixa' do cliente." },
                            { title: "Segurança Absoluta", desc: "Arquitetura Enterprise-grade para proteção total dos seus dados." }
                        ].map((item, i) => (
                            <div key={i} className="p-8 border border-white/10 rounded-2xl bg-zinc-900/20 hover:bg-zinc-900/40 transition-colors">
                                <CheckCircle className="w-8 h-8 text-[var(--color-electric-blue)] mb-6" />
                                <h4 className="text-xl font-bold mb-4">{item.title}</h4>
                                <p className="text-gray-400">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default AboutPage;
