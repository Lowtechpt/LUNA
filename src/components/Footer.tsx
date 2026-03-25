import { MapPin, Phone, Mail, Globe, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/5 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-24">
          <div className="space-y-4">
            <div className="-ml-4">
              <Logo imgClassName="h-16 md:h-20" />
            </div>
            <p className="text-sm opacity-40 leading-relaxed">
              Líderes em soluções digitais interativas e holográficas. 
              Transformamos espaços e eventos em experiências memoráveis com tecnologia de vanguarda.
            </p>
          </div>

          <div className="space-y-6">
            <h4 className="font-bold text-sm uppercase tracking-widest">Localizações</h4>
            <div className="space-y-4 text-sm opacity-50">
              <div className="flex gap-3">
                <MapPin size={18} className="shrink-0 text-brand" />
                <p>Porto: Rua do Covelo nº232, 4200-238</p>
              </div>
              <div className="flex gap-3">
                <MapPin size={18} className="shrink-0 text-brand" />
                <p>Lisboa: Av. Gago Coutinho, N.77-2B, 2700-405</p>
              </div>
              <div className="flex gap-3">
                <MapPin size={18} className="shrink-0 text-brand" />
                <p>Austrália: Scarborough, 6019</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="font-bold text-sm uppercase tracking-widest">Contactos</h4>
            <div className="space-y-4 text-sm opacity-50">
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-brand" />
                <p>+351 223 210 450</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-brand" />
                <p>geral@rsb.pt</p>
              </div>
              <div className="flex items-center gap-3">
                <Globe size={18} className="text-brand" />
                <p>www.rsb.pt</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="font-bold text-sm uppercase tracking-widest">Newsletter</h4>
            <p className="text-sm opacity-40">Subscreva para receber as últimas inovações tecnológicas.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="O seu email" 
                aria-label="Endereço de email para newsletter"
                className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm w-full focus:outline-none focus:border-brand"
              />
              <button className="p-2 bg-brand rounded-lg hover:bg-brand/80 transition-colors">
                <ChevronRight />
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/5 gap-6">
          <p className="text-xs opacity-30">© 2026 LUNA by RSB. Todos os direitos reservados.</p>
          <div className="flex gap-8 text-xs opacity-30">
            <Link to="/privacidade" className="hover:opacity-100 transition-opacity">Privacidade</Link>
            <Link to="/termos" className="hover:opacity-100 transition-opacity">Termos</Link>
            <Link to="/cookies" className="hover:opacity-100 transition-opacity">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
