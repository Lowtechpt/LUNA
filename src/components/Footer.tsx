import { MapPin, Phone, Mail, Globe, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import { useLanguage } from "../contexts/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="bg-black border-t border-white/5 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-24">
          <div className="space-y-4">
            <div className="-ml-4">
              <Logo imgClassName="h-16 md:h-20" />
            </div>
            <p className="text-sm opacity-40 leading-relaxed">
              {t('footer.desc')}
            </p>
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
                <p>+351 223 210 450</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-brand" />
                <a href="mailto:geral@rsb.pt" className="hover:text-brand transition-colors">geral@rsb.pt</a>
              </div>
              <div className="flex items-center gap-3">
                <Globe size={18} className="text-brand" />
                <p>www.rsb.pt</p>
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
            <Link to="/termos" className="hover:opacity-100 transition-opacity">{t('footer.terms')}</Link>
            <Link to="/cookies" className="hover:opacity-100 transition-opacity">{t('footer.cookies')}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
