import React, { useState } from 'react';
import { UserCheck, Feather, Sparkles, ShieldCheck, ArrowRight } from 'lucide-react';
import { PILLARS_DATA } from '../data/siteData';

export const BeautyPillars: React.FC = () => {
  const [activePillar, setActivePillar] = useState(PILLARS_DATA[0].id);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'UserCheck':
        return UserCheck;
      case 'Feather':
        return Feather;
      case 'Sparkles':
        return Sparkles;
      case 'ShieldCheck':
        return ShieldCheck;
      default:
        return Sparkles;
    }
  };

  return (
    <section className="relative py-24 bg-[#12100E] border-t border-[#D4AF37]/20 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full bg-gradient-to-b from-[#D4AF37]/5 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Box */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[11px] uppercase tracking-[0.3em] text-[#D4AF37] font-medium block mb-3">
            A Sua Beleza Não É Padrão
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#F7F4EE] font-light leading-tight">
            Cada pessoa tem uma história.{' '}
            <span className="gold-gradient-text block italic font-normal">
              Cada protocolo também deve ter.
            </span>
          </h2>
          <p className="text-sm sm:text-base text-[#A8A196] font-light leading-relaxed mt-6">
            No Studio Amarante, acreditamos que estética não deve transformar pessoas em versões iguais. O objetivo é compreender cada paciente, respeitar sua individualidade e criar estratégias personalizadas para alcançar resultados equilibrados, naturais e coerentes com a sua essência.
          </p>
        </div>

        {/* 4 Interactive Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {PILLARS_DATA.map((pillar) => {
            const IconComponent = getIcon(pillar.icon);
            const isActive = activePillar === pillar.id;

            return (
              <div
                key={pillar.id}
                onClick={() => setActivePillar(pillar.id)}
                className={`cursor-pointer rounded-2xl p-6 transition-all duration-300 border flex flex-col justify-between ${
                  isActive
                    ? 'bg-[#1D1914] border-[#D4AF37] gold-border-glow shadow-2xl scale-[1.02]'
                    : 'bg-[#16130F] border-[#D4AF37]/15 hover:border-[#D4AF37]/40 hover:bg-[#1A1712]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${
                        isActive
                          ? 'gold-gradient-bg text-[#0B0A09]'
                          : 'bg-[#221D17] text-[#D4AF37] border border-[#D4AF37]/20'
                      }`}
                    >
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span
                      className={`text-[10px] uppercase tracking-[0.2em] font-medium px-2.5 py-1 rounded-full ${
                        isActive
                          ? 'bg-[#D4AF37]/20 text-[#E2C06B]'
                          : 'bg-white/5 text-[#A8A196]'
                      }`}
                    >
                      {pillar.subtitle}
                    </span>
                  </div>

                  <h3
                    className={`font-serif text-xl sm:text-2xl font-light mb-2 transition-colors ${
                      isActive ? 'text-[#D4AF37]' : 'text-[#F7F4EE]'
                    }`}
                  >
                    {pillar.title}
                  </h3>

                  <p className="text-xs text-[#A8A196] font-light leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-white/5 mt-6 flex items-center justify-between text-[11px] text-[#D4AF37]">
                  <span className="uppercase tracking-wider font-medium">Pilar Fundamental</span>
                  <ArrowRight className={`w-4 h-4 transition-transform ${isActive ? 'translate-x-1 text-[#D4AF37]' : 'text-[#A8A196]'}`} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Highlight Statement Banner */}
        <div className="p-8 rounded-2xl bg-gradient-to-r from-[#171410] via-[#1D1914] to-[#171410] border border-[#D4AF37]/30 text-center shadow-xl">
          <p className="text-sm sm:text-base text-[#F7F4EE] font-serif font-light max-w-4xl mx-auto leading-relaxed">
            "Não buscamos criar traços padronizados ou seguir tendências passageiras de redes sociais. Nosso compromisso é com a{' '}
            <span className="gold-gradient-text font-normal italic">harmonia anatômica, rejuvenescimento real e a preservação da sua identidade</span>."
          </p>
        </div>

      </div>
    </section>
  );
};
