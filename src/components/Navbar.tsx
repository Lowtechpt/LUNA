import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronRight, ShoppingBag } from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import Logo from "./Logo";
import { useLanguage } from "../contexts/LanguageContext";
import { useCart } from "../contexts/CartContext";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();
  const { items } = useCart();
  const shouldReduceMotion = useReducedMotion();

  const navLinks = [
    { name: t('nav.home'), path: "/" },
    { name: t('nav.solutions'), path: "/solucoes" },
    { name: t('nav.technology'), path: "/tecnologia" },
    { name: t('nav.contact'), path: "/contactos" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 md:h-24 grid grid-cols-3 items-center">
        <div className="flex justify-start">
          <Logo imgClassName="h-12 md:h-16" />
        </div>

        <div className="hidden md:flex items-center justify-center gap-8 lg:gap-12">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase transition-all hover:text-brand ${
                location.pathname === link.path ? "text-brand" : "text-white/60 hover:text-white"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
        
        <div className="flex items-center justify-end gap-4 md:gap-6">
          <Link 
            to="/carrinho" 
            className={`relative p-2 transition-all hover:text-brand ${location.pathname === '/carrinho' ? 'text-brand' : 'text-white/60 hover:text-white'}`}
            aria-label={t('nav.cart')}
          >
            <ShoppingBag size={20} className={items.length > 0 ? "text-brand" : ""} />
            {items.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-brand text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                {items.length}
              </span>
            )}
          </Link>
          <div className="flex items-center gap-3 border-l border-white/10 pl-4 md:pl-6">
            <button 
              onClick={() => setLanguage('pt')}
              className={`transition-opacity hover:opacity-100 ${language === 'pt' ? 'opacity-100' : 'opacity-40'}`}
              aria-label="Português"
            >
              <img src="https://flagcdn.com/w40/pt.png" alt="" className="w-5 md:w-6 h-auto rounded-sm" />
            </button>
            <button 
              onClick={() => setLanguage('en')}
              className={`transition-opacity hover:opacity-100 ${language === 'en' ? 'opacity-100' : 'opacity-40'}`}
              aria-label="English"
            >
              <img src="https://flagcdn.com/w40/gb.png" alt="" className="w-5 md:w-6 h-auto rounded-sm" />
            </button>
          </div>
        </div>

        <button 
          className="md:hidden text-white ml-4" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black border-b border-white/5 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-2xl font-display font-bold"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                <Link 
                  to="/carrinho" 
                  className="flex items-center gap-2 text-sm font-medium opacity-70 hover:opacity-100"
                  onClick={() => setIsOpen(false)}
                >
                  <ShoppingBag size={20} />
                  <span>{t('nav.cart')} ({items.length})</span>
                </Link>
                <button 
                  onClick={() => { setLanguage('pt'); setIsOpen(false); }}
                  className={`flex items-center gap-2 transition-opacity ${language === 'pt' ? 'opacity-100' : 'opacity-40'}`}
                >
                  <img src="https://flagcdn.com/w40/pt.png" alt="PT" className="w-6 h-auto rounded-sm" />
                  <span className="text-sm font-medium">Português</span>
                </button>
                <button 
                  onClick={() => { setLanguage('en'); setIsOpen(false); }}
                  className={`flex items-center gap-2 transition-opacity ${language === 'en' ? 'opacity-100' : 'opacity-40'}`}
                >
                  <img src="https://flagcdn.com/w40/gb.png" alt="EN" className="w-6 h-auto rounded-sm" />
                  <span className="text-sm font-medium">English</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
