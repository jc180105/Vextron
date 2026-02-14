import { motion } from "framer-motion";
import { ArrowRight, Bot, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8 pt-20">
            {/* ... (background effects unchanged) */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] md:w-[1000px] md:h-[500px] bg-[var(--color-electric-blue)] opacity-10 blur-[80px] md:blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[500px] h-[400px] md:w-[800px] md:h-[600px] bg-[var(--color-gold)] opacity-5 blur-[60px] md:blur-[100px] rounded-full pointer-events-none" />

            <div className="relative z-10 max-w-5xl mx-auto text-center">
                {/* ... (Badge and Title unchanged) */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm md:text-base text-gray-300 mb-8 backdrop-blur-sm"
                >
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-electric-blue)] opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--color-electric-blue)]"></span>
                    </span>
                    Tecnologia de Automação de Próxima Geração
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                    className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60 font-[family-name:var(--font-display)]"
                >
                    Vextron: Sua operação no <br />
                    <span className="text-[var(--color-electric-blue)]">piloto automático</span> com Agentes de IA
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                    className="text-lg sm:text-xl md:text-2xl text-gray-400 max-w-2xl md:max-w-4xl mx-auto mb-12 leading-relaxed"
                >
                    Desenvolvemos agentes inteligentes que vendem, agendam e realizam cobranças 24/7.
                    Tecnologia proprietária para empresas que buscam escala e eficiência sem precedentes.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-6"
                >
                    <button className="w-full sm:w-auto px-8 py-4 bg-[var(--color-electric-blue)] text-black font-bold text-lg rounded-xl hover:bg-[#33FFFF] transition-all shadow-[0_0_20px_rgba(0,255,255,0.3)] hover:shadow-[0_0_30px_rgba(0,255,255,0.5)] flex items-center justify-center gap-3 active:scale-95 cursor-pointer">
                        Solicitar Diagnóstico Gratuito
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>

                    <Link to="/solucoes" className="w-full sm:w-auto px-8 py-4 bg-white/5 border border-white/10 text-white font-medium text-lg rounded-xl hover:bg-white/10 transition-all flex items-center justify-center gap-3 backdrop-blur-sm active:scale-95 cursor-pointer">
                        <Zap className="w-5 h-5 text-[var(--color-gold)]" />
                        Conhecer Soluções
                    </Link>
                </motion.div>
            </div>

            {/* Grid Pattern Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none z-0" />
        </section>
    );
};

export default HeroSection;
