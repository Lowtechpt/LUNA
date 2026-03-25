import { motion } from "motion/react";
import { Helmet } from "react-helmet-async";

export default function Technology() {
  return (
    <div className="pt-32 pb-32 bg-[#050505] text-white min-h-screen relative">
      <Helmet>
        <title>Tecnologia LUNA | Engenharia de Precisão | RSB</title>
        <meta name="description" content="Conheça a tecnologia por trás da LUNA. Engenharia de precisão, ótica avançada e produção de conteúdos 3D para experiências holográficas." />
      </Helmet>
      <div className="absolute inset-0 atmosphere opacity-30 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-technical text-brand mb-6 block">01 // CORE TECHNOLOGY</span>
            <h1 className="text-cinematic text-5xl md:text-7xl mb-12">
              É científica, <br />
              <span className="italic text-white/60">mas já não é ficção.</span>
            </h1>
            <div className="space-y-6 text-base opacity-60 font-light font-sans leading-relaxed">
              <p>
                Durante décadas, os hologramas foram o expoente máximo do cinema de ficção científica. Hoje, através da engenharia de precisão da RSB, tornámos o impossível numa realidade tangível para a sua marca.
              </p>
              <p>
                A linha <span className="font-logo font-bold tracking-widest text-brand">LUNA</span> utiliza princípios avançados de ótica e tecnologia digital para criar experiências que desafiam a lógica. Não é apenas tecnologia; é a materialização da imaginação no mundo real.
              </p>
              <p>
                Dispomos de uma equipa multidisciplinar de produção de vídeo, áudio, holograma e animação 2D/3D/360ºVR que apresentam as mais criativas soluções de conteúdos para cada solução digital.
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Engenharia de Precisão", desc: "Equipamentos calibrados para máxima nitidez e fidelidade de cor." },
            { title: "Conteúdo Personalizado", desc: "Produção própria de animações 3D otimizadas para cada dispositivo." },
            { title: "Suporte Especializado", desc: "Acompanhamento técnico desde a instalação à gestão de conteúdos." }
          ].map((item, i) => (
            <div key={i} className="p-10 glass-panel rounded-sm group hover:bg-white/[0.02] transition-colors duration-500">
              <h3 className="text-cinematic text-2xl mb-4 group-hover:text-brand transition-colors duration-500">{item.title}</h3>
              <p className="font-sans text-sm opacity-50 leading-relaxed font-light">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <section className="mt-40">
          <div className="text-center mb-24">
            <span className="text-technical text-brand mb-6 block">02 // METHODOLOGY</span>
            <h2 className="text-cinematic text-5xl md:text-7xl">
              Do Conceito à <span className="italic text-white/60">Realidade</span>.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-8 left-0 w-full h-px bg-white/10 -z-10" />
            {[
              { step: "01", title: "Análise", desc: "Estudamos o espaço e os objetivos da sua marca." },
              { step: "02", title: "Design", desc: "Criamos o conceito visual e a solução técnica ideal." },
              { step: "03", title: "Produção", desc: "Desenvolvemos os conteúdos 3D personalizados." },
              { step: "04", title: "Ativação", desc: "Instalação e suporte para um impacto memorável." }
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
