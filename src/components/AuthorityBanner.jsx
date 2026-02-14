import { ShieldCheck } from "lucide-react";

const AuthorityBanner = () => {
    return (
        <div className="w-full bg-[#111] border-y border-white/5 py-6 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-left">
                <div className="p-2 bg-[var(--color-gold)]/10 rounded-full">
                    <ShieldCheck className="w-6 h-6 text-[var(--color-gold)]" />
                </div>
                <p className="text-gray-300 text-sm md:text-base font-medium">
                    <span className="text-white font-bold">Soluções Customizadas e Proprietárias:</span>{" "}
                    Tecnologia exclusiva desenvolvida sob medida, sem dependência de ferramentas genéricas de mercado.
                </p>
            </div>
        </div>
    );
};

export default AuthorityBanner;
