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
    <footer className="bg-black border-t border-white/5 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-24">
          <div className="space-y-6">
            <div className="-ml-4">
              <Logo imgClassName="h-16 md:h-20" />
            </div>
            <p className="text-sm opacity-40 leading-relaxed">
              {t('footer.desc')}
            </p>
            <div className="pt-4 flex items-center gap-6">
              <img 
                src="https://rsb.pt/wp-content/uploads/2023/12/Logo-RSB-inv_.png" 
                alt="RSB" 
                className="h-10 opacity-80" 
                referrerPolicy="no-referrer" 
              />
              <img 
                src="https://rsb.pt/wp-content/uploads/2021/04/RSB-513734082-Selo-TOP5-2025.png" 
                alt="Selo TOP 5 2025" 
                className="h-28 md:h-32 opacity-90" 
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

          <div className="space-y-6">
            <h4 className="font-bold text-sm uppercase tracking-widest">{t('footer.locations')}</h4>
            <div className="space-y-4 text-sm opacity-50">
              <div className="flex gap-3">
                <MapPin size={18} className="shrink-0 text-brand" />
                <p>{t('footer.porto')}</p>
              </div>
              <div className="flex gap-3">
                <MapPin size={18} className="shrink-0 text-brand" />
                <p>{t('footer.lisbon')}</p>
              </div>
              <div className="flex gap-3">
                <MapPin size={18} className="shrink-0 text-brand" />
                <p>{t('footer.australia')}</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="font-bold text-sm uppercase tracking-widest">{t('footer.contacts')}</h4>
            <div className="space-y-4 text-sm opacity-50">
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-brand" />
                <a href="tel:+351223210450" className="hover:text-brand transition-colors">+351 223 210 450</a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-brand" />
                <a href="mailto:geral@rsb.pt" className="hover:text-brand transition-colors">geral@rsb.pt</a>
              </div>
              <div className="flex items-center gap-3">
                <Globe size={18} className="text-brand" />
                <a href="https://www.rsb.pt" target="_blank" rel="noopener noreferrer" className="hover:text-brand transition-colors">www.rsb.pt</a>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="font-bold text-sm uppercase tracking-widest">{t('footer.newsletter')}</h4>
            <p className="text-sm opacity-40">{t('footer.newsletter_desc')}</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder={t('footer.email_placeholder')}
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
          <p className="text-xs opacity-30">{t('footer.rights')}</p>
          <div className="flex gap-8 text-xs opacity-30">
            <Link to="/privacidade" className="hover:opacity-100 transition-opacity">{t('footer.privacy')}</Link>
            <Link to="/cookies" className="hover:opacity-100 transition-opacity">{t('footer.cookies')}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
