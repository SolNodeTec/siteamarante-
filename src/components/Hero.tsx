import React from 'react';
import { MessageCircle, ChevronDown, Sparkles, Shield, Award } from 'lucide-react';
import { IMAGES } from '../data/assetsData';
import { WHATSAPP_LINK } from '../data/siteData';

interface HeroProps {
  onOpenEvaluation: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenEvaluation }) => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden bg-[#0B0A09]">
      {/* Background Image with Layered Dark & Metallic Gradients */}
      <div className="absolute inset-0 z-0">
        <img
          src={IMAGES.hero}
          alt="Studio Amarante - Estética Avançada"
          className="w-full h-full object-cover opacity-25 scale-105 transition-transform duration-1000"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).src = '/hero.jpg';
          }}
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0A09] via-[#0B0A09]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0A09] via-transparent to-[#0B0A09]/70" />
      </div>

      {/* Decorative Golden Ambient Glows */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#C89F43]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Copy Column */}
          <div className="lg:col-span-7 flex flex-col items-start gap-6">
            
            {/* Tag / Eyebrow */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-[#D4AF37]/30 bg-[#16130F]/80 backdrop-blur-md">
              <Sparkles className="w-4 h-4 text-[#D4AF37]" />
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#E2C06B] font-medium">
                Studio Amarante • Estética Avançada
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-[#F7F4EE] leading-[1.15] font-light">
              Realce a sua beleza.{' '}
              <span className="block gold-gradient-text font-normal italic mt-1">
                Preserve a sua essência.
              </span>
            </h1>

            {/* Subheadline / Motto */}
            <p className="text-lg sm:text-xl text-[#D4AF37] font-serif font-light leading-relaxed border-l-2 border-[#D4AF37]/40 pl-4 py-1">
              "Estética avançada com foco em resultados naturais e personalizados."
            </p>

            {/* Complement Text */}
            <p className="text-sm sm:text-base text-[#A8A196] max-w-2xl font-light leading-relaxed">
              Protocolos desenvolvidos de forma individualizada, unindo experiência, conhecimento técnico e um olhar preciso para valorizar a beleza de cada paciente com total segurança de nível médico.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2 w-full sm:w-auto">
              <button
                onClick={onOpenEvaluation}
                className="gold-gradient-bg gold-glow-button text-[#0B0A09] font-medium text-xs uppercase tracking-[0.18em] px-8 py-4 rounded-full flex items-center justify-center gap-3 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-[#0B0A09]" />
                <span>Agendar minha avaliação</span>
              </button>

              <a
                href="#sobre"
                className="border border-[#D4AF37]/30 hover:border-[#D4AF37] text-[#F7F4EE] hover:text-[#D4AF37] font-light text-xs uppercase tracking-[0.18em] px-8 py-4 rounded-full flex items-center justify-center gap-2 backdrop-blur-sm bg-white/[0.02] transition-all"
              >
                <span>Conhecer o Studio</span>
              </a>
            </div>

            {/* Micro Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-6 border-t border-[#D4AF37]/15 w-full">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#181511] border border-[#D4AF37]/25 flex items-center justify-center shrink-0">
                  <Award className="w-4 h-4 text-[#D4AF37]" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-[#F7F4EE]">20 Anos</div>
                  <div className="text-[11px] text-[#A8A196]">de Experiência</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#181511] border border-[#D4AF37]/25 flex items-center justify-center shrink-0">
                  <Shield className="w-4 h-4 text-[#D4AF37]" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-[#F7F4EE]">Pós-Graduada</div>
                  <div className="text-[11px] text-[#A8A196]">Saúde & Estética</div>
                </div>
              </div>

              <div className="flex items-center gap-3 col-span-2 sm:col-span-1">
                <div className="w-8 h-8 rounded-full bg-[#181511] border border-[#D4AF37]/25 flex items-center justify-center shrink-0">
                  <Sparkles className="w-4 h-4 text-[#D4AF37]" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-[#F7F4EE]">Resultados</div>
                  <div className="text-[11px] text-[#A8A196]">100% Naturais</div>
                </div>
              </div>
            </div>

          </div>

          {/* Hero Visual Card / Badge Column */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-md aspect-[4/5] rounded-2xl overflow-hidden border border-[#D4AF37]/40 p-2 bg-[#F8F7F4] gold-border-glow">
              <img
                src={IMAGES.katia}
                alt="Katia Amarante - Estética Avançada"
                className="w-full h-full object-cover object-top rounded-xl"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = '/katia.png';
                }}
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0A09]/90 via-transparent to-transparent opacity-90 pointer-events-none" />

              {/* Floating Glass Badge */}
              <div className="absolute bottom-6 left-6 right-6 dark-glass rounded-xl p-4 border border-[#D4AF37]/40 shadow-2xl backdrop-blur-md">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full gold-gradient-bg flex items-center justify-center shrink-0 text-[#0B0A09] font-serif font-bold text-base shadow-md">
                    20
                  </div>
                  <div>
                    <h3 className="font-serif text-sm font-semibold text-[#F7F4EE]">
                      Katia Amarante
                    </h3>
                    <p className="text-[11px] text-[#D4AF37] font-medium">
                      Especialista em Autoestima & Monitora de Injetáveis
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Down Scroll Indicator */}
      <a
        href="#autoridade"
        className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-[#A8A196] hover:text-[#D4AF37] transition-colors"
        aria-label="Rolar para baixo"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] font-light">Explorar</span>
        <ChevronDown className="w-4 h-4 animate-bounce text-[#D4AF37]" />
      </a>
    </section>
  );
};
