import { motion, useScroll, useTransform, AnimatePresence, useMotionValue, useSpring } from "motion/react";
import { ArrowRight, Zap, Layers, Cpu, Grid, X } from "lucide-react";
import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { CLIENTS } from "../constants";
import { useLanguage } from "../contexts/LanguageContext";

const CustomWordmark = ({ text }: { text: string }) => {
  const length = text.length;
  // Dynamically adjust font size based on text length to prevent cut-offs
  let textSize = "text-sm";
  if (length > 15) textSize = "text-[9px] md:text-[10px]";
  else if (length > 10) textSize = "text-[10px] md:text-xs";

  return (
    <div className="w-full h-full flex items-center justify-center px-2">
      <span className={`font-sans font-bold ${textSize} tracking-[0.15em] uppercase text-center opacity-50 group-hover:opacity-100 group-hover:text-white transition-all duration-500 leading-tight break-words`}>
        {text}
      </span>
    </div>
  );
};

const TiltCard = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className={className}
    >
      <div style={{ transform: "translateZ(30px)" }} className="w-full h-full">
        {children}
      </div>
    </motion.div>
  );
};

const ClientLogo = ({ client }: { client: { name: string, logo: string } }) => {
  const [imgError, setImgError] = useState(false);
  
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {client.logo && !imgError ? (
        <img 
          src={client.logo} 
          alt={client.name} 
          className="max-h-16 max-w-[90%] object-contain opacity-50 group-hover:opacity-100 transition-opacity duration-500 drop-shadow-[0_0_2px_rgba(255,255,255,0.5)] filter brightness-[1.5] contrast-[1.2]"
          onError={() => setImgError(true)}
          referrerPolicy="no-referrer"
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center px-2">
          <span className="font-sans font-bold text-[10px] tracking-[0.15em] uppercase text-center opacity-50 group-hover:opacity-100 group-hover:text-white transition-all duration-500 leading-tight break-words">
            {client.name}
          </span>
        </div>
      )}
    </div>
  );
};

export default function Home() {
  const heroRef = useRef(null);
  const [showAllClients, setShowAllClients] = useState(false);
  const { t } = useLanguage();
  
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div className="pt-20 bg-[#050505] text-white">
      <Helmet>
        <title>LUNA | Soluções Holográficas e Multimédia | RSB</title>
        <meta name="description" content="Descubra a LUNA, a linha de equipamentos holográficos e tridimensionais da RSB. Transformamos eventos em experiências memoráveis com tecnologia de vanguarda." />
      </Helmet>
      {/* Hero Section */}
      <section ref={heroRef} className="atmosphere relative min-h-screen flex items-center justify-center py-24 md:py-32 overflow-hidden">
        <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050505]/80 to-[#050505] z-20" />
          
          {/* Reliable YouTube Background (The Globe) - Enhanced with Holographic FX */}
          <div className="absolute inset-0 w-[150vw] h-[150vh] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-60 mix-blend-screen z-10 pointer-events-none">
            {/* Holographic Overlays */}
            <div className="absolute inset-0 bg-brand mix-blend-color z-20 opacity-30" />
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:100%_4px] z-20 pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,#050505_65%)] z-20" />
            
            <iframe 
              className="w-full h-full"
              src="https://www.youtube.com/embed/W0LHTWG-UmQ?autoplay=1&mute=1&controls=0&loop=1&playlist=W0LHTWG-UmQ&playsinline=1&rel=0&showinfo=0&modestbranding=1" 
              title="Holographic Background"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              loading="lazy"
            />
          </div>
        </motion.div>

        <div className="relative z-20 max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="inline-block relative group cursor-default mb-8">
              <span className="absolute top-0 left-0 -ml-1 opacity-0 group-hover:opacity-100 group-hover:animate-pulse text-cyan-500 mix-blend-screen blur-[1px] transition-opacity duration-300">[ LUNA SYSTEM // V.01 ]</span>
              <span className="absolute top-0 left-0 ml-1 opacity-0 group-hover:opacity-100 group-hover:animate-pulse text-red-500 mix-blend-screen blur-[1px] transition-opacity duration-300" style={{ animationDelay: '0.1s' }}>[ LUNA SYSTEM // V.01 ]</span>
              <span className="text-technical text-brand relative z-10">
                [ LUNA SYSTEM // V.01 ]
              </span>
            </div>
            <h1 className="text-cinematic text-5xl md:text-8xl lg:text-9xl mb-8">
              <span className="italic font-light text-white/80">{t('home.hero.title1')}</span><br />
              <span className="font-semibold tracking-tight">{t('home.hero.title2')}</span>
            </h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="max-w-3xl mx-auto text-sm md:text-base opacity-80 font-sans leading-relaxed mb-12"
            >
              <span className="text-brand font-bold">LUNA</span> {t('home.hero.desc1')}<br />
              {t('home.hero.desc2')}
            </motion.p>
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex items-center justify-center"
        >
          <Link to="/solucoes" className="group relative px-8 py-4 bg-transparent text-white font-sans text-sm tracking-widest uppercase flex items-center justify-center gap-3 overflow-hidden border border-white/20 rounded-full hover:border-brand transition-colors duration-500">
            <div className="absolute inset-0 bg-brand translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-in-out" />
            <span className="relative z-10 font-medium">{t('home.hero.cta')}</span>
            <ArrowRight size={16} className="relative z-10 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </section>

      {/* Features - Cinematic Museum Display */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#0a0505] to-[#050505] z-0" />
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
          {[
            { icon: <Zap size={20} className="text-brand" />, title: t('home.features.f1.title'), desc: t('home.features.f1.desc') },
            { icon: <Layers size={20} className="text-brand" />, title: t('home.features.f2.title'), desc: t('home.features.f2.desc') },
            { icon: <Cpu size={20} className="text-brand" />, title: t('home.features.f3.title'), desc: t('home.features.f3.desc') }
          ].map((feature, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.2, duration: 0.8, ease: "easeOut" }}
            >
              <TiltCard className="glass-panel p-10 rounded-2xl flex flex-col gap-6 group hover:bg-white/[0.04] transition-colors duration-500 h-full cursor-crosshair">
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center mb-4 group-hover:border-brand/50 group-hover:shadow-[0_0_15px_rgba(242,125,38,0.3)] transition-all duration-500">
                  {feature.icon}
                </div>
                <h3 className="text-cinematic text-2xl group-hover:text-brand transition-colors duration-500">{feature.title}</h3>
                <p className="font-sans text-sm opacity-50 leading-relaxed font-light">{feature.desc}</p>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </section>


      {/* Stats Section */}
      <section className="py-32 relative border-y border-white/5">
        <div className="absolute inset-0 atmosphere opacity-50" />
        <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
          {[
            { label: t('home.stats.projects'), value: "700+" },
            { label: t('home.stats.clients'), value: "27" },
            { label: t('home.stats.years'), value: "10" }
          ].map((stat, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className="flex flex-col gap-4"
            >
              <span className="text-cinematic text-5xl md:text-7xl font-light">{stat.value}</span>
              <span className="text-technical text-brand opacity-80">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-40 bg-[#050505] relative overflow-hidden">
        <div className="absolute inset-0 atmosphere opacity-30" />
        <div className="max-w-7xl mx-auto px-6 text-center mb-24 relative z-10">
          <span className="text-technical text-brand mb-6 block">02 // {t('home.clients.title')}</span>
          <h2 className="text-cinematic text-5xl md:text-7xl mb-12">
            {t('home.clients.subtitle')}
          </h2>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <AnimatePresence mode="wait">
            {!showAllClients ? (
              <motion.div 
                key="featured-grid"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 border-l border-t border-white/5 rounded-2xl overflow-hidden"
              >
                {CLIENTS.slice(0, 12).map((client, i) => (
                  <motion.div 
                    key={client.name}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: i * 0.05 }}
                    className="aspect-[2/1] bg-[#050505] border-r border-b border-white/5 flex items-center justify-center p-8 hover:bg-white/[0.02] transition-colors duration-500 group relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-b from-brand/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <ClientLogo client={client} />
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div 
                key="full-grid"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 border-l border-t border-white/5 rounded-2xl overflow-hidden"
              >
                {CLIENTS.map((client, i) => (
                  <motion.div 
                    key={client.name}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: i * 0.02 }}
                    className="aspect-[3/2] bg-[#050505] border-r border-b border-white/5 flex items-center justify-center p-4 hover:bg-white/[0.02] transition-colors duration-500 group relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-b from-brand/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <ClientLogo client={client} />
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          <div className="mt-16 text-center">
            <button 
              onClick={() => setShowAllClients(!showAllClients)}
              aria-label={showAllClients ? "Reduzir lista de marcas parceiras" : "Expandir lista de marcas parceiras"}
              className="group relative inline-flex items-center justify-center px-8 py-4 bg-transparent text-white font-sans text-xs tracking-widest uppercase font-medium overflow-hidden rounded-full border border-white/20 hover:border-white/50 transition-colors duration-500"
            >
              <span className="relative z-10 flex items-center gap-3">
                {showAllClients ? (
                  <><X size={14} /> {t('home.clients.btn.less')}</>
                ) : (
                  <><Grid size={14} /> {t('home.clients.btn.more')}</>
                )}
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-40 relative overflow-hidden">
        <div className="absolute inset-0 z-0 atmosphere opacity-80" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <span className="text-technical text-brand mb-8 block">03 // {t('home.cta.subtitle')}</span>
          <h2 className="text-cinematic text-5xl md:text-8xl mb-10">
            {t('home.cta.title1')} <br />
            <span className="italic text-white/60">{t('home.cta.title2')}</span>
          </h2>
          <p className="font-sans text-base md:text-lg opacity-50 font-light mb-16 max-w-xl mx-auto">
            {t('home.cta.desc1')} 
            <br />
            {t('home.cta.desc2')}
          </p>
          <a href="mailto:geral@rsb.pt" className="group relative inline-flex items-center justify-center px-12 py-5 bg-white text-black font-sans text-sm tracking-widest uppercase font-medium overflow-hidden rounded-full transition-transform hover:scale-105">
            <div className="absolute inset-0 bg-brand translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-in-out" />
            <span className="relative z-10 group-hover:text-white transition-colors duration-500">{t('home.cta.btn')}</span>
          </a>
        </div>
      </section>
    </div>
  );
}
