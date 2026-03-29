import { motion, AnimatePresence } from "motion/react";
import { ChevronRight, ChevronLeft, Play, X, ShoppingBag, ArrowRight } from "lucide-react";
import { getCategories, getProducts } from "../constants";
import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Product } from "../types";
import { useLanguage } from "../contexts/LanguageContext";
import { useCart } from "../contexts/CartContext";

const ProductCard = React.memo(({ product, i, onPlay, onAdd, categories }: { product: Product & { categoryId: string }, i: number, onPlay: (p: Product & { categoryId: string }) => void, onAdd: (p: Product & { categoryId: string }) => void, categories: any[] }) => {
  const { t } = useLanguage();
  const { isInCart } = useCart();
  const inCart = isInCart(product.id);
  
  return (
    <motion.div 
      key={product.id}
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay: i * 0.05 }}
      className="group glass-panel rounded-sm overflow-hidden flex flex-col h-full hover:bg-white/[0.02] transition-colors duration-500"
    >
      <div className="aspect-[4/3] overflow-hidden relative group/video bg-cover bg-center" style={{ backgroundImage: `url(${product.image})` }}>
        {product.videoUrls && product.videoUrls.length > 0 ? (
          <>
            <iframe 
              src={`${product.videoUrls[0]}&title=0&byline=0&portrait=0&controls=0&background=1&autoplay=1&loop=1&autopause=0`}
              className="w-full h-full absolute inset-0 z-10 pointer-events-none scale-[1.15]"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture" 
              title={product.title}
              loading="lazy"
            />
            <div 
              className="absolute inset-0 z-20 bg-black/10 group-hover/video:bg-black/40 transition-colors duration-300 flex items-center justify-center cursor-pointer"
              onClick={() => onPlay(product)}
            >
              <div className="w-16 h-16 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white/80 group-hover/video:scale-110 group-hover/video:bg-brand group-hover/video:text-white group-hover/video:border-brand transition-all duration-300">
                <Play size={24} className="ml-1" fill="currentColor" />
              </div>
              {product.videoUrls.length > 1 && (
                <div className="absolute top-4 right-4 px-2 py-1 bg-brand text-[10px] font-bold rounded-sm uppercase tracking-wider">
                  +{product.videoUrls.length - 1} {t('solutions.card.videos')}
                </div>
              )}
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
      </div>
      <div className="p-8 flex flex-col flex-grow border-t border-white/5">
        <div className="text-technical text-white/40 mb-4">
          {categories.find(c => c.id === product.categoryId)?.name}
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

        <button 
          onClick={() => onAdd(product)}
          className={`w-full py-4 border rounded-sm font-sans text-xs tracking-widest uppercase font-medium transition-all duration-500 flex items-center justify-center gap-3 ${
            inCart 
              ? "border-brand bg-brand text-white" 
              : "border-white/10 hover:border-brand hover:text-brand"
          }`}
        >
          {inCart ? t('solutions.card.added') : t('solutions.card.request_info')} <ChevronRight size={14} />
        </button>
      </div>
    </motion.div>
  );
});

export default function Solutions() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<(Product & { categoryId: string }) | null>(null);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [showToast, setShowToast] = useState(false);
  const { t, language } = useLanguage();
  const { toggleItem, isInCart } = useCart();

  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => setShowToast(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [showToast]);

  const handleAddToCart = (product: Product & { categoryId: string }) => {
    const wasInCart = isInCart(product.id);
    toggleItem(product);
    if (!wasInCart) {
      setShowToast(true);
    } else {
      setShowToast(false);
    }
  };

  const categories = getCategories(language);
  const products = getProducts(language);

  const handlePlay = React.useCallback((p: Product & { categoryId: string }) => {
    setSelectedProduct(p);
    setCurrentVideoIndex(0);
  }, []);

  const filteredProducts = activeCategory 
    ? products.filter(p => p.categoryId === activeCategory)
    : products;

  return (
    <div className="pt-32 pb-32 bg-[#050505] text-white min-h-screen relative">
      <Helmet>
        <title>Soluções Digitais e Equipamentos | LUNA by RSB</title>
        <meta name="description" content="Explore a nossa gama completa de equipamentos holográficos e soluções digitais inovadoras da LUNA by RSB." />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "itemListElement": products.map((product, index) => ({
              "@type": "ListItem",
              "position": index + 1,
              "item": {
                "@type": "Product",
                "name": product.title,
                "description": product.description,
                "image": product.image,
                "brand": {
                  "@type": "Brand",
                  "name": "LUNA by RSB"
                },
                "keywords": "Soluções de Visualização Tridimensional, Ativações de Marca Tecnológicas, Display LED Transparente 4K"
              }
            }))
          })}
        </script>
      </Helmet>
      <div className="absolute inset-0 atmosphere opacity-30 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <header className="mb-20">
          <span className="text-technical text-brand mb-6 block">{t('solutions.subtitle')}</span>
          <h1 className="text-cinematic text-5xl md:text-7xl mb-6">{t('solutions.title1')} <span className="italic text-white/60">{t('solutions.title2')}</span></h1>
          <p className="max-w-2xl text-lg opacity-50 font-light font-sans">
            {t('solutions.desc')}
          </p>
        </header>

        {/* Categories Filter */}
        <div className="flex flex-col md:flex-row flex-wrap items-start md:items-center gap-4 mb-16">
          <button 
            onClick={() => setActiveCategory(null)}
            className={`px-6 py-3 rounded-full text-xs tracking-widest uppercase font-medium transition-all border ${
              activeCategory === null ? "bg-white text-black border-white" : "border-white/10 hover:border-white/30 text-white/70"
            }`}
          >
            {t('solutions.filter.all')}
          </button>
          {categories.map((cat) => (
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
            <ProductCard 
              key={product.id}
              product={product}
              i={i}
              onPlay={handlePlay}
              onAdd={handleAddToCart}
              categories={categories}
            />
          ))}
        </div>
      </div>

      {/* Toast Notification */}
      <AnimatePresence>
        {showToast && (
          <motion.div 
            initial={{ opacity: 0, y: 50, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, y: 20, x: "-50%" }}
            className="fixed bottom-10 left-1/2 z-[100] w-[90%] md:w-max md:max-w-4xl"
          >
            <div className="bg-brand text-white p-5 rounded-sm shadow-2xl flex items-center justify-between gap-8 border border-white/20 backdrop-blur-lg">
              <div className="flex items-center gap-3">
                <div className="bg-white/20 p-2 rounded-full">
                  <ShoppingBag size={18} />
                </div>
                <div>
                  <p className="text-xs md:text-sm font-bold uppercase tracking-widest">{t('solutions.toast.title')}</p>
                  <p className="text-[10px] md:text-sm opacity-80">{t('solutions.toast.desc')}</p>
                </div>
              </div>
              <Link 
                to="/carrinho" 
                className="bg-white text-brand px-6 py-3 rounded-sm text-[10px] md:text-xs font-bold uppercase tracking-tighter flex items-center gap-2 hover:bg-white/90 transition-colors whitespace-nowrap"
              >
                {t('nav.cart')} <ArrowRight size={12} />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Video Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/95 backdrop-blur-md"
            onClick={() => setSelectedProduct(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors z-50"
              onClick={() => setSelectedProduct(null)}
            >
              <X size={32} />
            </button>
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="w-full max-w-6xl bg-black rounded-xl overflow-hidden shadow-2xl border border-white/10 relative p-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-full flex items-center justify-center">
                {/* Previous Button */}
                <button 
                  className="absolute left-4 z-50 p-2 bg-black/50 rounded-full text-white hover:bg-brand transition-colors"
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentVideoIndex((prev) => (prev === 0 ? selectedProduct.videoUrls!.length - 1 : prev - 1));
                  }}
                >
                  <ChevronLeft size={32} />
                </button>

                {/* Video */}
                <div className="w-full h-full aspect-video">
                  <iframe 
                    key={selectedProduct.videoUrls![currentVideoIndex]}
                    src={`${selectedProduct.videoUrls![currentVideoIndex]}&autoplay=1&title=0&byline=0&portrait=0&autopause=0&loop=1`}
                    className="w-full h-full"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture" 
                    allowFullScreen
                  />
                </div>

                {/* Next Button */}
                <button 
                  className="absolute right-4 z-50 p-2 bg-black/50 rounded-full text-white hover:bg-brand transition-colors"
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentVideoIndex((prev) => (prev === selectedProduct.videoUrls!.length - 1 ? 0 : prev + 1));
                  }}
                >
                  <ChevronRight size={32} />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
