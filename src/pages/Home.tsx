import { motion, useScroll, useTransform, AnimatePresence, useMotionValue, useSpring, useReducedMotion } from "motion/react";
import { ArrowRight, Zap, Layers, Cpu, Grid, X } from "lucide-react";
import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { CLIENTS } from "../constants";
import { useLanguage } from "../contexts/LanguageContext";

export default function Home() {
  const heroRef = useRef(null);
  const [showAllClients, setShowAllClients] = useState(false);
  const { t } = useLanguage();
  
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div className="bg-[#050505] text-white">
      <Helmet>
        <title>LUNA | Soluções Holográficas e Multimédia | RSB</title>
        <meta name="description" content="Descubra a LUNA, a linha de equipamentos holográficos e tridimensionais da RSB. Transformamos eventos em experiências memoráveis com tecnologia de vanguarda." />
      </Helmet>

      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/70 z-10" />
          <iframe 
            className="w-full h-full scale-150 pointer-events-none"
            src="https://www.youtube.com/embed/W0LHTWG-UmQ?autoplay=1&mute=1&controls=0&loop=1&playlist=W0LHTWG-UmQ&playsinline=1&rel=0&showinfo=0&modestbranding=1" 
            title="Holographic Background"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          />
        </div>

        <motion.div 
          style={{ opacity }}
          className="relative z-20 max-w-5xl mx-auto px-6 text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <span className="inline-block text-brand font-bold tracking-[0.4em] uppercase text-[10px] md:text-xs mb-8">
              {t('home.hero.subtitle')}
            </span>
            <h1 className="text-7xl md:text-9xl font-bold mb-16 tracking-tighter leading-none">
              LUNA
            </h1>
            
            <div className="flex flex-col items-center gap-24 md:gap-32">
              <p className="max-w-4xl mx-auto text-lg md:text-xl text-white/80 leading-relaxed">
                <span className="text-brand font-bold">LUNA</span> {t('home.hero.desc1')}
                <br className="hidden md:block" />
                {t('home.hero.desc2')}
              </p>
              
              <Link 
                to="/solucoes" 
                className="group inline-flex items-center gap-4 px-14 py-7 bg-brand text-white font-bold text-sm tracking-[0.3em] uppercase rounded-full hover:scale-105 transition-all duration-500 shadow-xl shadow-brand/20"
              >
                {t('home.hero.cta')}
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Features */}
      <section className="py-32 md:py-48 bg-[#080808]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <Zap size={24} />, title: t('home.features.f1.title'), desc: t('home.features.f1.desc') },
              { icon: <Layers size={24} />, title: t('home.features.f2.title'), desc: t('home.features.f2.desc') },
              { icon: <Cpu size={24} />, title: t('home.features.f3.title'), desc: t('home.features.f3.desc') }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-10 md:p-12 bg-white/[0.02] border border-white/[0.05] rounded-3xl hover:bg-white/[0.05] transition-all duration-500 group"
              >
                <div className="w-16 h-16 rounded-2xl bg-brand/10 flex items-center justify-center mb-8 text-brand group-hover:scale-110 transition-transform duration-500">
                  {feature.icon}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-6">{feature.title}</h3>
                <p className="text-white/50 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-32 md:py-48 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">
            {[
              { label: t('home.stats.projects'), value: "700+" },
              { label: t('home.stats.clients'), value: "27" },
              { label: t('home.stats.years'), value: "10" }
            ].map((stat, i) => (
              <div key={i} className="text-center md:text-left">
                <div className="text-6xl md:text-8xl font-bold mb-4 text-brand">{stat.value}</div>
                <div className="text-xs md:text-sm font-bold tracking-[0.3em] uppercase text-white/40">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="py-32 md:py-48">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
            <div className="max-w-2xl">
              <span className="text-brand font-bold tracking-[0.3em] uppercase text-xs mb-4 block">{t('home.clients.title')}</span>
              <h2 className="text-4xl md:text-6xl font-bold">{t('home.clients.subtitle')}</h2>
            </div>
            <button 
              onClick={() => setShowAllClients(!showAllClients)}
              className="inline-flex items-center gap-3 px-8 py-4 border border-white/10 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase hover:bg-white hover:text-black transition-all"
            >
              {showAllClients ? <><X size={16} /> {t('home.clients.btn.less')}</> : <><Grid size={16} /> {t('home.clients.btn.more')}</>}
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-px bg-white/5 border border-white/5 rounded-3xl overflow-hidden">
            {(showAllClients ? CLIENTS : CLIENTS.slice(0, 12)).map((client) => (
              <div key={client.name} className="aspect-video bg-[#050505] flex items-center justify-center p-8 hover:bg-white/[0.02] transition-colors group">
                {client.logo ? (
                  <img 
                    src={client.logo} 
                    alt={client.name} 
                    className="max-h-12 max-w-full object-contain opacity-100 transition-opacity duration-500" 
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <span className="text-[10px] font-bold tracking-widest uppercase opacity-30 group-hover:opacity-100 transition-opacity">{client.name}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-48 md:py-64 bg-brand relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,white_0%,transparent_70%)]" />
        </div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <span className="text-white/80 font-bold tracking-[0.4em] uppercase text-xs mb-8 block">{t('home.cta.subtitle')}</span>
          <h2 className="text-5xl md:text-8xl font-bold mb-12 leading-tight tracking-tighter">
            {t('home.cta.title1')} <br />
            <span className="italic opacity-80">{t('home.cta.title2')}</span>
          </h2>
          <p className="text-lg md:text-xl text-white/70 mb-16 max-w-2xl mx-auto">
            {t('home.cta.desc1')} {t('home.cta.desc2')}
          </p>
          <a 
            href="mailto:geral@rsb.pt" 
            className="inline-flex items-center px-12 py-6 bg-white text-brand font-bold text-xs tracking-[0.3em] uppercase rounded-full hover:scale-105 transition-transform shadow-2xl"
          >
            {t('home.cta.btn')}
          </a>
        </div>
      </section>
    </div>
  );
}
