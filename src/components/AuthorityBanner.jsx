import { ShieldCheck } from "lucide-react";

const AuthorityBanner = () => {
    return (
        <div className="w-full bg-[#111] border-y border-white/5 py-4 md:py-6 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 text-center md:text-left">
                <div className="p-2 md:p-3 bg-[var(--color-gold)]/10 rounded-full">
                    <ShieldCheck className="w-6 h-6 md:w-8 md:h-8 text-[var(--color-gold)]" />
                </div>
                <p className="text-gray-300 text-sm md:text-lg font-medium max-w-4xl">
                    <span className="text-white font-bold block md:inline">Soluções Customizadas e Proprietárias:</span>{" "}
                    Tecnologia exclusiva desenvolvida sob medida, sem dependência de ferramentas genéricas de mercado.
                </p>
            </div>
        </div>
    );
};

export default AuthorityBanner;
