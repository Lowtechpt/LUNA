import { motion } from "motion/react";
import { MapPin, Phone, Mail, Globe } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Contact() {
  const location = useLocation();
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
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

  const mailtoLink = `mailto:geral@rsb.pt?subject=Contacto via Website - ${formData.name}&body=Nome: ${formData.name}%0D%0AEmpresa: ${formData.company}%0D%0AEmail: ${formData.email}%0D%0A%0D%0AMensagem:%0D%0A${encodeURIComponent(formData.message)}`;

  return (
    <div className="pt-32 pb-32 bg-[#050505] text-white min-h-screen relative">
      <Helmet>
        <title>Contactos | Fale com a LUNA by RSB</title>
        <meta name="description" content="Entre em contacto com a equipa da LUNA by RSB. Estamos prontos para elevar a sua marca ao próximo nível com tecnologia holográfica." />
      </Helmet>
      <div className="absolute inset-0 atmosphere opacity-30 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <header className="mb-20 text-center">
          <span className="text-technical text-brand mb-6 block">01 // CONTACTO</span>
          <h1 className="text-cinematic text-5xl md:text-7xl mb-6">VENHA DIZER <span className="italic text-white/60">OLÁ!</span></h1>
          <p className="max-w-2xl mx-auto text-lg opacity-50 font-light font-sans">
            Estamos prontos para elevar a sua marca ao próximo nível.
          </p>
          <p className="max-w-2xl mx-auto text-lg opacity-50 font-light font-sans">
            Visite-nos ou entre em contacto para uma demonstração.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="glass-panel p-10 rounded-sm space-y-8">
              <h2 className="text-cinematic text-2xl">Informações de Contacto</h2>
              
              <div className="space-y-6">
                  <div className="flex gap-6 items-center group">
                    <div className="w-12 h-12 border border-white/10 rounded-sm flex items-center justify-center shrink-0 group-hover:border-brand transition-colors duration-500">
                      <Phone size={18} className="text-brand" />
                    </div>
                    <div>
                      <p className="text-technical text-white/40 mb-1">Telefone</p>
                      <a href="tel:+351223210450" className="font-sans text-lg font-light hover:text-brand transition-colors">+351 223 210 450</a>
                      <p className="text-xs text-white/30 mt-1 font-sans">(Chamada para a rede fixa nacional)</p>
                    </div>
                  </div>

                  <div className="flex gap-6 items-center group">
                    <div className="w-12 h-12 border border-white/10 rounded-sm flex items-center justify-center shrink-0 group-hover:border-brand transition-colors duration-500">
                      <Mail size={18} className="text-brand" />
                    </div>
                    <div>
                      <p className="text-technical text-white/40 mb-1">Email</p>
                      <a href="mailto:geral@rsb.pt" className="font-sans text-lg font-light hover:text-brand transition-colors">geral@rsb.pt</a>
                    </div>
                  </div>

                <div className="flex gap-6 items-center group">
                  <div className="w-12 h-12 border border-white/10 rounded-sm flex items-center justify-center shrink-0 group-hover:border-brand transition-colors duration-500">
                    <Globe size={18} className="text-brand" />
                  </div>
                  <div>
                    <p className="text-technical text-white/40 mb-1">Website</p>
                    <p className="font-sans text-lg font-light">www.rsb.pt</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-panel p-10 rounded-sm space-y-8">
              <h2 className="text-cinematic text-2xl">As Nossas Sedes</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-brand text-technical">
                    <MapPin size={14} /> Porto
                  </div>
                  <p className="font-sans text-sm opacity-50 leading-relaxed font-light">
                    Rua do Covelo nº232,<br />
                    4200 – 238 Porto
                  </p>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-brand text-technical">
                    <MapPin size={14} /> Lisboa
                  </div>
                  <p className="font-sans text-sm opacity-50 leading-relaxed font-light">
                    Av. Gago Coutinho, N.77 – 2B,<br />
                    2700 – 405 Lisboa
                  </p>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-brand text-technical">
                    <MapPin size={14} /> Austrália
                  </div>
                  <p className="font-sans text-sm opacity-50 leading-relaxed font-light">
                    B5 297 West Coast HWY,<br />
                    6019 Scarborough
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-panel p-10 rounded-sm">
            <h2 className="text-cinematic text-2xl mb-10">Envie-nos uma Mensagem</h2>
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-technical text-white/40">Nome</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-white/20 px-0 py-3 font-sans font-light focus:outline-none focus:border-brand transition-colors" 
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-technical text-white/40">Empresa</label>
                  <input 
                    type="text" 
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-white/20 px-0 py-3 font-sans font-light focus:outline-none focus:border-brand transition-colors" 
                  />
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-technical text-white/40">Email</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-white/20 px-0 py-3 font-sans font-light focus:outline-none focus:border-brand transition-colors" 
                />
              </div>
              <div className="space-y-3">
                <label className="text-technical text-white/40">Mensagem</label>
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
                Enviar Mensagem
              </a>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
