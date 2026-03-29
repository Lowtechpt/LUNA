import { MapPin, Phone, Mail, Globe, ChevronRight, Facebook, Linkedin, Instagram, Youtube } from "lucide-react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import { useLanguage } from "../contexts/LanguageContext";

const VimeoIcon = () => (
  <svg 
    viewBox="0 0 24 24" 
    width="20" 
    height="20" 
    stroke="currentColor" 
    strokeWidth="2" 
    fill="none" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
  </svg>
);

const VimeoLogo = ({ size = 20 }: { size?: number }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor"
  >
    <path d="M22.396 7.117c-.088 1.962-1.466 4.643-4.136 8.046-2.775 3.565-5.122 5.346-7.041 5.346-1.197 0-2.208-1.1-3.033-3.301-.551-2.02-1.102-4.04-1.654-6.06-.606-2.242-1.259-3.363-1.957-3.363-.147 0-.661.312-1.542.937l-.918-1.175c.918-.808 1.819-1.616 2.703-2.424 1.231-1.065 2.15-1.634 2.755-1.708 1.415-.147 2.297.827 2.646 2.921.386 2.314.661 3.746.827 4.297.46 1.983.974 2.975 1.542 2.975.422 0 1.065-.68 1.929-2.039.863-1.359 1.322-2.388 1.377-3.086.11-1.084-.312-1.634-1.267-1.653.459-1.488 1.341-2.222 2.646-2.203 1.965.037 2.884 1.341 2.755 3.919z"/>
  </svg>
);

export default function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="bg-black border-t border-white/[0.03] pt-32 pb-16 relative overflow-hidden">
      <div className="absolute inset-0 atmosphere opacity-20 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-12 mb-32">
          <div className="space-y-10">
            <div className="-ml-4">
              <Logo imgClassName="h-20 md:h-24 brightness-110" />
            </div>
            <p className="text-sm opacity-40 leading-relaxed font-light max-w-xs">
              {t('footer.desc')}
            </p>
            <div className="pt-4 flex items-center gap-8">
              <img 
                src="https://rsb.pt/wp-content/uploads/2023/12/Logo-RSB.png" 
                alt="RSB" 
                className="h-12 opacity-100 transition-all duration-500" 
                referrerPolicy="no-referrer" 
              />
              <img 
                src="https://rsb.pt/wp-content/uploads/2021/04/RSB-513734082-Selo-TOP5-2025.png" 
                alt="Selo TOP 5 2025" 
                className="h-32 md:h-40 opacity-100 transition-all duration-500" 
                referrerPolicy="no-referrer" 
              />
            </div>
            
            <div className="flex gap-3 pt-4">
              <a href="https://www.facebook.com/rsbcomunicacao/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-black hover:bg-brand hover:text-white transition-all duration-300" aria-label="Facebook">
                <Facebook size={18} fill="currentColor" stroke="none" />
              </a>
              <a href="https://pt.linkedin.com/company/rsb---comunica%C3%A7%C3%A3o-na-imagem" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-black hover:bg-brand hover:text-white transition-all duration-300" aria-label="LinkedIn">
                <Linkedin size={18} fill="currentColor" stroke="none" />
              </a>
              <a href="https://vimeo.com/user49488458" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-black hover:bg-brand hover:text-white transition-all duration-300" aria-label="Vimeo">
                <VimeoLogo size={18} />
              </a>
              <a href="https://www.youtube.com/@RSB-ComunicacaonaImagem" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-black hover:bg-brand hover:text-white transition-all duration-300" aria-label="YouTube">
                <Youtube size={18} fill="currentColor" stroke="none" />
              </a>
              <a href="https://www.instagram.com/rsbcomunicacao/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-black hover:bg-brand hover:text-white transition-all duration-300" aria-label="Instagram">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          <div className="space-y-10">
            <h4 className="text-technical text-brand">{t('footer.locations')}</h4>
            <div className="space-y-6 text-sm opacity-40 font-light">
              <div className="flex gap-3 group cursor-default">
                <MapPin size={16} className="shrink-0 text-brand group-hover:scale-110 transition-transform" />
                <p className="group-hover:opacity-100 transition-opacity">{t('footer.porto')}</p>
              </div>
              <div className="flex gap-3 group cursor-default">
                <MapPin size={16} className="shrink-0 text-brand group-hover:scale-110 transition-transform" />
                <p className="group-hover:opacity-100 transition-opacity">{t('footer.lisbon')}</p>
              </div>
              <div className="flex gap-3 group cursor-default">
                <MapPin size={16} className="shrink-0 text-brand group-hover:scale-110 transition-transform" />
                <p className="group-hover:opacity-100 transition-opacity">{t('footer.australia')}</p>
              </div>
            </div>
          </div>

          <div className="space-y-10">
            <h4 className="text-technical text-brand">{t('footer.contacts')}</h4>
            <div className="space-y-6 text-sm opacity-40 font-light">
              <div className="flex items-center gap-3 group">
                <Phone size={16} className="text-brand group-hover:scale-110 transition-transform" />
                <a href="tel:+351223210450" className="hover:text-brand transition-colors group-hover:opacity-100">{t('footer.phone_label') || "+351 223 210 450"}</a>
              </div>
              <div className="flex items-center gap-3 group">
                <Mail size={16} className="text-brand group-hover:scale-110 transition-transform" />
                <a href="mailto:geral@rsb.pt" className="hover:text-brand transition-colors group-hover:opacity-100">geral@rsb.pt</a>
              </div>
              <div className="flex items-center gap-3 group">
                <Globe size={16} className="text-brand group-hover:scale-110 transition-transform" />
                <a href="https://www.rsb.pt" target="_blank" rel="noopener noreferrer" className="hover:text-brand transition-colors group-hover:opacity-100">www.rsb.pt</a>
              </div>
            </div>
          </div>

          <div className="space-y-10">
            <h4 className="text-technical text-brand">{t('footer.newsletter')}</h4>
            <p className="text-sm opacity-40 font-light leading-relaxed">{t('footer.newsletter_desc')}</p>
            <div className="relative group">
              <input 
                type="email" 
                placeholder={t('footer.email_placeholder')}
                aria-label="Endereço de email para newsletter"
                className="w-full bg-white/[0.03] border border-white/10 rounded-full px-6 py-4 text-sm focus:outline-none focus:border-brand/50 transition-all group-hover:bg-white/[0.05]"
              />
              <button 
                className="absolute right-2 top-2 bottom-2 aspect-square bg-brand text-white rounded-full flex items-center justify-center hover:scale-105 active:scale-95 transition-all"
                aria-label={t('footer.newsletter_submit') || "Subscrever newsletter"}
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-16 border-t border-white/[0.03] gap-8 text-[10px] uppercase tracking-[0.2em] opacity-30 font-bold">
          <p>© {new Date().getFullYear()} LUNA BY RSB. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-12">
            <Link to="/privacidade" className="hover:text-brand transition-colors">{t('footer.privacy')}</Link>
            <Link to="/cookies" className="hover:text-brand transition-colors">{t('footer.cookies')}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
