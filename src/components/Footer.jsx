import { Github, Twitter, Linkedin, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="border-t border-white/10 bg-black pt-16 pb-8 px-4">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-12 mb-16">
                <div className="md:w-1/3">
                    <h3 className="text-2xl font-bold font-[family-name:var(--font-display)] mb-4">VEXTRON</h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-6">
                        Pioneiros em automação inteligente e agentes autônomos para empresas que buscam o futuro.
                    </p>
                    <div className="flex gap-4">
                        <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-[var(--color-electric-blue)] hover:text-black transition-colors">
                            <Twitter className="w-5 h-5" />
                        </a>
                        <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-[var(--color-electric-blue)] hover:text-black transition-colors">
                            <Linkedin className="w-5 h-5" />
                        </a>
                        <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-[var(--color-electric-blue)] hover:text-black transition-colors">
                            <Github className="w-5 h-5" />
                        </a>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-8 md:w-2/3 md:pl-20">
                    <div>
                        <h4 className="font-bold text-white mb-6">Soluções</h4>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li><a href="/#features" className="hover:text-[var(--color-electric-blue)] transition-colors">Agentes de Vendas</a></li>
                            <li><a href="/#features" className="hover:text-[var(--color-electric-blue)] transition-colors">Cobrança Automatizada</a></li>
                            <li><a href="/#features" className="hover:text-[var(--color-electric-blue)] transition-colors">Agendamento Inteligente</a></li>
                            <li><a href="/#features" className="hover:text-[var(--color-electric-blue)] transition-colors">Qualificação de Leads</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold text-white mb-6">Empresa</h4>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li><Link to="/sobre" className="hover:text-[var(--color-electric-blue)] transition-colors">Sobre Nós</Link></li>
                            <li><a href="https://wa.me/5548988438860" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-electric-blue)] transition-colors">Contato</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="max-w-6xl mx-auto border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
                <p>&copy; 2024 Vextron AI. Todos os direitos reservados.</p>
                <div className="flex items-center gap-2 text-[var(--color-gold)]">
                    <CheckCircle className="w-4 h-4" />
                    <span>Tecnologia Segura e Escalável</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
