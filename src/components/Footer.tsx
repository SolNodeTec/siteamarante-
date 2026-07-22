import React from 'react';
import { Sparkles, Instagram, MessageCircle, ArrowUp } from 'lucide-react';
import { WHATSAPP_LINK, INSTAGRAM_URL, INSTAGRAM_HANDLE } from '../data/siteData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#070605] border-t border-[#D4AF37]/20 pt-16 pb-12 text-[#A8A196] text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/5">
          
          {/* Brand Info */}
          <div className="md:col-span-5 flex flex-col items-start gap-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full border border-[#D4AF37]/40 bg-[#171410] flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-[#D4AF37]" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-lg tracking-[0.2em] font-semibold text-[#F7F4EE] uppercase">
                  STUDIO AMARANTE
                </span>
                <span className="text-[9px] tracking-[0.3em] text-[#D4AF37] uppercase font-light -mt-1">
                  Estética Avançada
                </span>
              </div>
            </div>

            <p className="text-xs font-light text-[#A8A196] max-w-sm leading-relaxed italic">
              "Estética avançada com foco em resultados naturais e personalizados."
            </p>

            <p className="text-[11px] text-[#A8A196] font-light">
              Responsabilidade Técnica: Katia Amarante • 20 Anos de Experiência Clínica
            </p>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3 flex flex-col gap-2.5">
            <h4 className="text-xs font-semibold text-[#F7F4EE] uppercase tracking-[0.18em] mb-2">
              Navegação
            </h4>
            <a href="#inicio" className="hover:text-[#D4AF37] transition-colors py-0.5">Início</a>
            <a href="#sobre" className="hover:text-[#D4AF37] transition-colors py-0.5">Sobre Katia Amarante</a>
            <a href="#tratamentos" className="hover:text-[#D4AF37] transition-colors py-0.5">Tratamentos</a>
            <a href="#diferenciais" className="hover:text-[#D4AF37] transition-colors py-0.5">Diferenciais</a>
            <a href="#resultados" className="hover:text-[#D4AF37] transition-colors py-0.5">Resultados</a>
            <a href="#contato" className="hover:text-[#D4AF37] transition-colors py-0.5">Contato & Agendamento</a>
          </div>

          {/* Social & Contact */}
          <div className="md:col-span-4 flex flex-col gap-4">
            <h4 className="text-xs font-semibold text-[#F7F4EE] uppercase tracking-[0.18em] mb-1">
              Redes Sociais & Contato
            </h4>

            <div className="flex items-center gap-3">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#181511] border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] hover:border-[#D4AF37] hover:scale-105 transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>

              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full gold-gradient-bg flex items-center justify-center text-[#0B0A09] hover:scale-105 transition-all shadow-md"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5 fill-[#0B0A09]" />
              </a>
            </div>

            <p className="text-[11px] text-[#A8A196]">
              Acompanhe novidades no Instagram: <strong className="text-[#D4AF37]">{INSTAGRAM_HANDLE}</strong>
            </p>
          </div>

        </div>

        {/* Bottom Disclaimer & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#A8A196]">
          <p className="text-center sm:text-left">
            © {new Date().getFullYear()} Studio Amarante Estética Avançada. Todos os direitos reservados.
          </p>

          <p className="text-[10px] text-center sm:text-right max-w-md">
            Avisos legais: As informações contidas neste site possuem caráter educativo e informativo. Todos os procedimentos necessitam de avaliação presencial prévia.
          </p>

          <button
            onClick={scrollToTop}
            className="p-2 rounded-full border border-[#D4AF37]/30 hover:border-[#D4AF37] text-[#D4AF37] transition-all"
            aria-label="Voltar ao topo"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
};
