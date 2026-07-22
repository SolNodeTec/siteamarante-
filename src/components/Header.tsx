import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle, Sparkles } from 'lucide-react';
import { WHATSAPP_LINK } from '../data/siteData';

interface HeaderProps {
  onOpenEvaluation: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenEvaluation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Sobre Katia', href: '#sobre' },
    { label: 'Tratamentos', href: '#tratamentos' },
    { label: 'Diferenciais', href: '#diferenciais' },
    { label: 'Resultados', href: '#resultados' },
    { label: 'Contato', href: '#contato' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0B0A09]/90 backdrop-blur-md border-b border-[#D4AF37]/20 py-3 shadow-2xl'
          : 'bg-gradient-to-b from-[#0B0A09]/80 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Studio Amarante */}
          <a
            href="#inicio"
            className="group flex items-center gap-3 focus:outline-none"
            onClick={(e) => handleNavClick(e, '#inicio')}
          >
            <div className="w-10 h-10 rounded-full border border-[#D4AF37]/40 bg-[#171410] flex items-center justify-center group-hover:border-[#D4AF37] transition-colors shadow-inner">
              <Sparkles className="w-5 h-5 text-[#D4AF37] transition-transform group-hover:scale-110" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg tracking-[0.2em] font-semibold text-[#F7F4EE] group-hover:text-[#D4AF37] transition-colors uppercase">
                STUDIO AMARANTE
              </span>
              <span className="text-[10px] tracking-[0.3em] text-[#D4AF37] uppercase font-light -mt-1">
                Estética Avançada
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-xs uppercase tracking-[0.15em] text-[#A8A196] hover:text-[#D4AF37] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#D4AF37] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Call to Action Button */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenEvaluation}
              className="gold-gradient-bg gold-glow-button text-[#0B0A09] font-medium text-xs uppercase tracking-[0.15em] px-5 py-2.5 rounded-full flex items-center gap-2 hover:opacity-95 transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-[#0B0A09]" />
              <span>Agendar avaliação</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#F7F4EE] hover:text-[#D4AF37] focus:outline-none"
            aria-label="Abrir Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-[#D4AF37]" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[60px] bg-[#0B0A09]/98 border-b border-[#D4AF37]/20 backdrop-blur-xl p-6 shadow-2xl transition-all duration-300 animate-fadeIn">
          <div className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm uppercase tracking-[0.2em] text-[#F7F4EE] hover:text-[#D4AF37] transition-colors py-2 border-b border-white/5"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenEvaluation();
                }}
                className="w-full gold-gradient-bg text-[#0B0A09] font-medium text-xs uppercase tracking-[0.15em] py-3.5 rounded-full flex items-center justify-center gap-2 shadow-lg"
              >
                <MessageCircle className="w-4 h-4 fill-[#0B0A09]" />
                <span>Agendar avaliação</span>
              </button>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center border border-[#D4AF37]/40 text-[#D4AF37] font-light text-xs uppercase tracking-[0.15em] py-3.5 rounded-full hover:bg-[#D4AF37]/10 transition-colors"
              >
                Atendimento no WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
