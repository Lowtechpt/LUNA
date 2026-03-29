import { motion } from "motion/react";
import { MapPin, Phone, Mail, Globe } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useLanguage } from "../contexts/LanguageContext";

export default function Contact() {
  const location = useLocation();
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: ""
  });

  useEffect(() => {
    if (location.state?.message) {
      setFormData(prev => ({ ...prev, message: location.state.message }));
    }
  }, [location.state]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const mailtoLink = `mailto:geral@rsb.pt?subject=Contacto via Website - ${formData.name}&body=Nome: ${formData.name}%0D%0AEmpresa: ${formData.company}%0D%0AEmail: ${formData.email}%0D%0ATelefone: ${formData.phone}%0D%0A%0D%0AMensagem:%0D%0A${encodeURIComponent(formData.message)}`;

  return (
    <div className="pt-32 pb-32 bg-[#050505] text-white min-h-screen relative">
      <Helmet>
        <title>Contactos | Fale com a LUNA by RSB</title>
        <meta name="description" content="Entre em contacto com a equipa da LUNA by RSB. Estamos prontos para elevar a sua marca ao próximo nível com tecnologia holográfica." />
        <meta name="keywords" content="Soluções de Visualização Tridimensional, Ativações de Marca Tecnológicas, Display LED Transparente 4K, Hologramas 3D, Contacto RSB" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "LUNA by RSB",
            "alternateName": "LUNA Innovation",
            "description": "Especialistas em Soluções de Visualização Tridimensional e Ativações de Marca Tecnológicas.",
            "image": "https://rsb.pt/wp-content/uploads/2023/12/Logo-RSB-inv_.png",
            "telephone": "+351 223 210 450",
            "email": "geral@rsb.pt",
            "url": "https://www.rsb.pt",
            "knowsAbout": [
              "Soluções de Visualização Tridimensional",
              "Ativações de Marca Tecnológicas",
              "Display LED Transparente 4K",
              "Holografia 3D"
            ],
            "address": [
              {
                "@type": "PostalAddress",
                "streetAddress": "Rua do Covelo nº232",
                "addressLocality": "Porto",
                "postalCode": "4200-238",
                "addressCountry": "PT"
              },
              {
                "@type": "PostalAddress",
                "streetAddress": "Av. Gago Coutinho, N.77 – 2B",
                "addressLocality": "Lisboa",
                "postalCode": "2700-405",
                "addressCountry": "PT"
              }
            ]
          })}
        </script>
      </Helmet>
      <div className="absolute inset-0 atmosphere opacity-30 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <header className="mb-20 text-center">
          <span className="text-technical text-brand mb-6 block">{t('contact.subtitle')}</span>
          <h1 className="text-cinematic text-5xl md:text-7xl mb-6">{t('contact.title1')} <span className="italic text-white/60">{t('contact.title2')}</span></h1>
          <p className="max-w-2xl mx-auto text-lg opacity-50 font-light font-sans">
            {t('contact.desc1')}
          </p>
          <p className="max-w-2xl mx-auto text-lg opacity-50 font-light font-sans">
            {t('contact.desc2')}
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="glass-panel p-10 rounded-sm space-y-8">
              <h2 className="text-cinematic text-2xl">{t('contact.info.title')}</h2>
              
              <div className="space-y-6">
                  <div className="flex gap-6 items-center group">
                    <div className="w-12 h-12 border border-white/10 rounded-sm flex items-center justify-center shrink-0 group-hover:border-brand transition-colors duration-500">
                      <Phone size={18} className="text-brand" />
                    </div>
                    <div>
                      <p className="text-technical text-white/40 mb-1">{t('contact.info.phone')}</p>
                      <a href="tel:+351223210450" className="font-sans text-lg font-light hover:text-brand transition-colors">+351 223 210 450</a>
                      <p className="text-xs text-white/30 mt-1 font-sans">{t('contact.info.phone_desc')}</p>
                    </div>
                  </div>

                  <div className="flex gap-6 items-center group">
                    <div className="w-12 h-12 border border-white/10 rounded-sm flex items-center justify-center shrink-0 group-hover:border-brand transition-colors duration-500">
                      <Mail size={18} className="text-brand" />
                    </div>
                    <div>
                      <p className="text-technical text-white/40 mb-1">{t('contact.info.email')}</p>
                      <a href="mailto:geral@rsb.pt" className="font-sans text-lg font-light hover:text-brand transition-colors">geral@rsb.pt</a>
                    </div>
                  </div>

                <div className="flex gap-6 items-center group">
                  <div className="w-12 h-12 border border-white/10 rounded-sm flex items-center justify-center shrink-0 group-hover:border-brand transition-colors duration-500">
                    <Globe size={18} className="text-brand" />
                  </div>
                  <div>
                    <p className="text-technical text-white/40 mb-1">{t('contact.info.website')}</p>
                    <a href="https://www.rsb.pt" target="_blank" rel="noopener noreferrer" className="font-sans text-lg font-light hover:text-brand transition-colors">www.rsb.pt</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-panel p-10 rounded-sm space-y-8">
              <h2 className="text-cinematic text-2xl">{t('contact.hq.title')}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-brand text-technical">
                    <MapPin size={14} /> {t('contact.hq.porto')}
                  </div>
                  <p className="font-sans text-sm opacity-50 leading-relaxed font-light">
                    Rua do Covelo nº232,<br />
                    4200 – 238 Porto
                  </p>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-brand text-technical">
                    <MapPin size={14} /> {t('contact.hq.lisbon')}
                  </div>
                  <p className="font-sans text-sm opacity-50 leading-relaxed font-light">
                    Av. Gago Coutinho, N.77 – 2B,<br />
                    2700 – 405 Lisboa
                  </p>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-brand text-technical">
                    <MapPin size={14} /> {t('contact.hq.australia')}
                  </div>
                  <p className="font-sans text-sm opacity-50 leading-relaxed font-light">
                    B5 297 West Coast HWY,<br />
                    6019 Scarborough
                  </p>
                </div>
              </div>
              
              <div className="pt-8 border-t border-white/5 flex items-center gap-6">
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
            </div>
          </div>

          <div className="glass-panel p-10 rounded-sm">
            <h2 className="text-cinematic text-2xl mb-10">{t('contact.form.title')}</h2>
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-technical text-white/40">{t('contact.form.name')}</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-white/20 px-0 py-3 font-sans font-light focus:outline-none focus:border-brand transition-colors" 
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-technical text-white/40">{t('contact.form.company')}</label>
                  <input 
                    type="text" 
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-white/20 px-0 py-3 font-sans font-light focus:outline-none focus:border-brand transition-colors" 
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-technical text-white/40">{t('contact.form.email')}</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-white/20 px-0 py-3 font-sans font-light focus:outline-none focus:border-brand transition-colors" 
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-technical text-white/40">{t('contact.form.phone')}</label>
                  <input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-white/20 px-0 py-3 font-sans font-light focus:outline-none focus:border-brand transition-colors" 
                  />
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-technical text-white/40">{t('contact.form.message')}</label>
                <textarea 
                  rows={4} 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-white/20 px-0 py-3 font-sans font-light focus:outline-none focus:border-brand transition-colors resize-none"
                ></textarea>
              </div>
              <a 
                href={mailtoLink} 
                className="w-full py-5 border border-white/20 rounded-sm font-sans text-xs tracking-widest uppercase font-medium hover:border-brand hover:text-brand transition-all duration-500 mt-4 text-center block"
              >
                {t('contact.form.submit')}
              </a>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
