import { motion } from "motion/react";
import { Helmet } from "react-helmet-async";
import { useLanguage } from "../contexts/LanguageContext";

export default function Technology() {
  const { t } = useLanguage();
  
  return (
    <div className="pt-32 pb-32 bg-[#050505] text-white min-h-screen relative">
      <Helmet>
        <title>Tecnologia LUNA | Engenharia de Precisão | RSB</title>
        <meta name="description" content="Conheça a tecnologia por trás da LUNA. Engenharia de precisão, ótica avançada e produção de conteúdos 3D para experiências holográficas." />
        <meta name="keywords" content="Soluções de Visualização Tridimensional, Ativações de Marca Tecnológicas, Display LED Transparente 4K, Holografia 3D, Engenharia de Precisão, Ótica Avançada" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TechArticle",
            "headline": "Tecnologia LUNA: Engenharia de Precisão e Soluções de Visualização Tridimensional",
            "description": "Explicação técnica sobre a engenharia de precisão, ótica avançada e produção de conteúdos 3D por trás dos sistemas holográficos LUNA.",
            "author": {
              "@type": "Organization",
              "name": "RSB"
            },
            "publisher": {
              "@type": "Organization",
              "name": "LUNA by RSB"
            },
            "keywords": "Soluções de Visualização Tridimensional, Ativações de Marca Tecnológicas, Display LED Transparente 4K, Holografia 3D",
            "about": [
              {
                "@type": "Thing",
                "name": "Soluções de Visualização Tridimensional"
              },
              {
                "@type": "Thing",
                "name": "Ativações de Marca Tecnológicas"
              },
              {
                "@type": "Thing",
                "name": "Display LED Transparente 4K"
              }
            ]
          })}
        </script>
      </Helmet>
      <div className="absolute inset-0 atmosphere opacity-30 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-technical text-brand mb-6 block">{t('tech.subtitle')}</span>
            <h1 className="text-cinematic text-5xl md:text-7xl mb-12">
              {t('tech.title1')} <br />
              <span className="italic text-white/60">{t('tech.title2')}</span>
            </h1>
            <div className="space-y-6 text-base opacity-60 font-light font-sans leading-relaxed">
              <p>
                {t('tech.desc')}
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative aspect-square rounded-sm overflow-hidden glass-panel p-1"
          >
            <img 
              src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000" 
              alt="LUNA Technology" 
              className="w-full h-full object-cover rounded-sm opacity-80"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-10 glass-panel rounded-sm group hover:bg-white/[0.02] transition-colors duration-500">
            <h3 className="text-cinematic text-2xl mb-4 group-hover:text-brand transition-colors duration-500">{t('tech.hologram.title')}</h3>
            <p className="font-sans text-sm opacity-50 leading-relaxed font-light mb-6">{t('tech.hologram.desc')}</p>
            <ul className="space-y-2 font-sans text-sm opacity-70">
              <li>• {t('tech.hologram.f1')}</li>
              <li>• {t('tech.hologram.f2')}</li>
              <li>• {t('tech.hologram.f3')}</li>
            </ul>
          </div>
          <div className="p-10 glass-panel rounded-sm group hover:bg-white/[0.02] transition-colors duration-500">
            <h3 className="text-cinematic text-2xl mb-4 group-hover:text-brand transition-colors duration-500">{t('tech.interactive.title')}</h3>
            <p className="font-sans text-sm opacity-50 leading-relaxed font-light mb-6">{t('tech.interactive.desc')}</p>
            <ul className="space-y-2 font-sans text-sm opacity-70">
              <li>• {t('tech.interactive.f1')}</li>
              <li>• {t('tech.interactive.f2')}</li>
              <li>• {t('tech.interactive.f3')}</li>
            </ul>
          </div>
        </div>

        {/* Process Section */}
        <section className="mt-40">
          <div className="text-center mb-24">
            <span className="text-technical text-brand mb-6 block">{t('tech.method.subtitle')}</span>
            <h2 className="text-cinematic text-5xl md:text-7xl">
              {t('tech.method.title1')} <span className="italic text-white/60">{t('tech.method.title2')}</span>.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-8 left-0 w-full h-px bg-white/10 -z-10" />
            {[
              { step: "01", title: t('tech.method.step1.title'), desc: t('tech.method.step1.desc') },
              { step: "02", title: t('tech.method.step2.title'), desc: t('tech.method.step2.desc') },
              { step: "03", title: t('tech.method.step3.title'), desc: t('tech.method.step3.desc') },
              { step: "04", title: t('tech.method.step4.title'), desc: t('tech.method.step4.desc') }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center text-center gap-8 group"
              >
                <div className="w-16 h-16 rounded-sm bg-[#050505] border border-white/10 flex items-center justify-center text-technical text-brand relative z-10 group-hover:border-brand transition-all duration-500">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-cinematic text-2xl mb-4">{item.title}</h3>
                  <p className="font-sans text-sm opacity-50 leading-relaxed font-light">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
