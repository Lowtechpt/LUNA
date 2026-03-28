import { motion, AnimatePresence } from "motion/react";
import { Trash2, ArrowLeft, CheckCircle2, Send } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "../contexts/CartContext";
import { useLanguage } from "../contexts/LanguageContext";
import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

export default function Cart() {
  const { items, removeItem, clearCart } = useCart();
  const { t } = useLanguage();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    clearCart();
  };

  if (isSubmitted) {
    return (
      <div className="pt-48 pb-32 bg-[#050505] text-white min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 atmosphere opacity-30 pointer-events-none" />
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full px-6 text-center relative z-10"
        >
          <div className="w-20 h-20 bg-brand/20 rounded-full flex items-center justify-center mx-auto mb-8 text-brand">
            <CheckCircle2 size={40} />
          </div>
          <h1 className="text-cinematic text-4xl mb-4">{t('cart.success.title')}</h1>
          <p className="opacity-50 font-sans mb-12">{t('cart.success.desc')}</p>
          <Link 
            to="/solucoes" 
            className="inline-flex items-center gap-3 px-8 py-4 bg-brand text-white rounded-sm font-sans text-xs tracking-widest uppercase font-medium hover:bg-brand/80 transition-all"
          >
            <ArrowLeft size={14} /> {t('cart.back')}
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pt-48 pb-32 bg-[#050505] text-white min-h-screen relative">
      <Helmet>
        <title>{t('cart.title')} | LUNA by RSB</title>
      </Helmet>
      <div className="absolute inset-0 atmosphere opacity-30 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <header className="mb-16">
          <Link to="/solucoes" className="inline-flex items-center gap-2 text-brand text-xs tracking-widest uppercase font-medium mb-8 hover:opacity-70 transition-opacity">
            <ArrowLeft size={14} /> {t('cart.back')}
          </Link>
          <h1 className="text-cinematic text-5xl md:text-7xl">{t('cart.title')}</h1>
        </header>

        {items.length === 0 ? (
          <div className="py-24 text-center glass-panel rounded-sm">
            <p className="opacity-40 font-sans text-lg mb-8">{t('cart.empty')}</p>
            <Link 
              to="/solucoes" 
              className="inline-flex items-center gap-3 px-8 py-4 border border-white/10 rounded-sm font-sans text-xs tracking-widest uppercase font-medium hover:border-brand hover:text-brand transition-all"
            >
              {t('cart.back')}
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Items List */}
            <div className="lg:col-span-2 space-y-4">
              <AnimatePresence mode="popLayout">
                {items.map((item) => (
                  <motion.div 
                    key={item.id}
                    layout
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className="glass-panel p-6 rounded-sm flex items-center gap-6 group"
                  >
                    <div className="w-24 h-24 rounded-sm overflow-hidden flex-shrink-0 border border-white/5">
                      <img src={item.image} alt={item.title} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-xl font-display font-bold mb-1">{item.title}</h3>
                      <p className="text-xs opacity-40 font-sans line-clamp-1">{item.description}</p>
                    </div>
                    <button 
                      onClick={() => removeItem(item.id)}
                      className="p-3 text-white/20 hover:text-brand transition-colors"
                      title={t('cart.remove')}
                    >
                      <Trash2 size={20} />
                    </button>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* Request Form */}
            <div className="lg:col-span-1">
              <div className="glass-panel p-8 rounded-sm sticky top-40 border-brand/20">
                <h2 className="text-2xl font-display font-bold mb-4">{t('cart.form.title')}</h2>
                <p className="text-sm opacity-50 font-sans mb-8 leading-relaxed">
                  {t('cart.form.desc')}
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-white/40 font-bold">{t('cart.form.name')}</label>
                    <input 
                      required
                      type="text" 
                      className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-brand transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-white/40 font-bold">{t('cart.form.email')}</label>
                    <input 
                      required
                      type="email" 
                      className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-brand transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-white/40 font-bold">{t('cart.form.phone')}</label>
                    <input 
                      required
                      type="tel" 
                      className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-brand transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-white/40 font-bold">{t('cart.form.message')}</label>
                    <textarea 
                      rows={4}
                      className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-brand transition-colors resize-none"
                      defaultValue={`${t('contact.form.default_msg')} ${items.map(i => i.title).join(', ')}.`}
                    ></textarea>
                  </div>
                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-brand text-white rounded-sm font-sans text-xs tracking-widest uppercase font-bold hover:bg-brand/80 transition-all flex items-center justify-center gap-3 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>
                        {t('cart.form.submit')} <Send size={14} />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
