import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import Logo from "./Logo";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Início", path: "/" },
    { name: "Soluções", path: "/solucoes" },
    { name: "Tecnologia", path: "/tecnologia" },
    { name: "Contactos", path: "/contactos" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/50 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-28 flex items-center justify-between">
        <div className="-ml-4">
          <Logo imgClassName="h-20 md:h-28 scale-110 origin-left" />
        </div>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium transition-all hover:text-brand ${
                location.pathname === link.path ? "text-brand opacity-100" : "opacity-70 hover:opacity-100"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <a href="mailto:geral@rsb.pt" className="px-5 py-2 bg-white text-black text-sm font-bold rounded-full hover:bg-brand hover:text-white transition-all">
            Pedir Orçamento
          </a>
        </div>

        <button 
          className="md:hidden text-white" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Fechar menu de navegação" : "Abrir menu de navegação"}
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
              <a href="mailto:geral@rsb.pt" className="w-full py-4 bg-brand text-white font-bold rounded-xl flex items-center justify-center gap-2">
                Pedir Orçamento <ChevronRight size={18} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
