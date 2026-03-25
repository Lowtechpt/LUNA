import { motion, AnimatePresence } from "motion/react";
import { ChevronRight, Play, X } from "lucide-react";
import { PRODUCTS, CATEGORIES } from "../constants";
import { useState } from "react";
import { Helmet } from "react-helmet-async";

export default function Solutions() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const filteredProducts = activeCategory 
    ? PRODUCTS.filter(p => p.categoryId === activeCategory)
    : PRODUCTS;

  return (
    <div className="pt-32 pb-32 bg-[#050505] text-white min-h-screen relative">
      <Helmet>
        <title>Soluções Digitais e Equipamentos | LUNA by RSB</title>
        <meta name="description" content="Explore a nossa gama completa de equipamentos holográficos e soluções digitais inovadoras da LUNA by RSB." />
      </Helmet>
      <div className="absolute inset-0 atmosphere opacity-30 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <header className="mb-20">
          <span className="text-technical text-brand mb-6 block">01 // EQUIPAMENTOS</span>
          <h1 className="text-cinematic text-5xl md:text-7xl mb-6">SOLUÇÕES <span className="italic text-white/60">DIGITAIS</span></h1>
          <p className="max-w-2xl text-lg opacity-50 font-light font-sans">
            Explore a nossa gama completa de equipamentos inovadores. 
            Desde hologramas suspensos a ecrãs de vapor, temos a solução ideal para o seu projeto.
          </p>
        </header>

        {/* Categories Filter */}
        <div className="flex flex-wrap gap-4 mb-16">
          <button 
            onClick={() => setActiveCategory(null)}
            className={`px-6 py-3 rounded-full text-xs tracking-widest uppercase font-medium transition-all border ${
              activeCategory === null ? "bg-white text-black border-white" : "border-white/10 hover:border-white/30 text-white/70"
            }`}
          >
            Todos
          </button>
          {CATEGORIES.map((cat) => (
            <button 
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-6 py-3 rounded-full text-xs tracking-widest uppercase font-medium transition-all border ${
                activeCategory === cat.id ? "bg-brand text-white border-brand" : "border-white/10 hover:border-white/30 text-white/70"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, i) => (
            <motion.div 
              key={product.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group glass-panel rounded-sm overflow-hidden flex flex-col h-full hover:bg-white/[0.02] transition-colors duration-500"
            >
              <div className="aspect-[4/3] overflow-hidden relative group/video">
                {product.videoUrl ? (
                  <>
                    <iframe 
                      src={`${product.videoUrl}&title=0&byline=0&portrait=0&controls=0&background=1`}
                      className="w-full h-full absolute inset-0 z-10 pointer-events-none scale-[1.15]"
                      frameBorder="0"
                      allow="autoplay; fullscreen; picture-in-picture" 
                      title={product.title}
                    />
                    <div 
                      className="absolute inset-0 z-20 bg-black/10 group-hover/video:bg-black/40 transition-colors duration-300 flex items-center justify-center cursor-pointer"
                      onClick={() => setSelectedVideo(product.videoUrl!)}
                    >
                      <div className="w-16 h-16 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white/80 group-hover/video:scale-110 group-hover/video:bg-brand group-hover/video:text-white group-hover/video:border-brand transition-all duration-300">
                        <Play size={24} className="ml-1" fill="currentColor" />
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                    <img 
                      src={product.image} 
                      alt={product.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2s] ease-out opacity-80 group-hover:opacity-100"
                      referrerPolicy="no-referrer"
                    />
                  </>
                )}
                <div className="absolute top-4 left-4 px-3 py-1 bg-black/80 backdrop-blur-md text-technical text-brand border border-white/10 z-30 pointer-events-none">
                  #{product.number}
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow border-t border-white/5">
                <div className="text-technical text-white/40 mb-4">
                  {CATEGORIES.find(c => c.id === product.categoryId)?.name}
                </div>
                <h3 className="text-cinematic text-2xl mb-4 group-hover:text-brand transition-colors duration-500">{product.title}</h3>
                <p className="font-sans text-sm opacity-50 leading-relaxed mb-8 flex-grow font-light">{product.description}</p>
                
                <div className="space-y-3 mb-10">
                  {product.features?.map((f, idx) => (
                    <div key={idx} className="flex items-center gap-3 font-sans text-xs opacity-60 tracking-wide">
                      <div className="w-1 h-1 bg-brand rounded-full opacity-50" />
                      {f}
                    </div>
                  ))}
                </div>

                <button className="w-full py-4 border border-white/10 rounded-sm font-sans text-xs tracking-widest uppercase font-medium group-hover:border-brand group-hover:text-brand transition-all duration-500 flex items-center justify-center gap-3">
                  Solicitar Informação <ChevronRight size={14} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/95 backdrop-blur-md"
            onClick={() => setSelectedVideo(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors z-50"
              onClick={() => setSelectedVideo(null)}
            >
              <X size={32} />
            </button>
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="w-full max-w-6xl aspect-video bg-black rounded-xl overflow-hidden shadow-2xl border border-white/10 relative"
              onClick={(e) => e.stopPropagation()}
            >
              <iframe 
                src={`${selectedVideo}&autoplay=1&title=0&byline=0&portrait=0`}
                className="w-full h-full absolute inset-0"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture" 
                allowFullScreen
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
