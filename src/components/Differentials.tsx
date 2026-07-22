import React from 'react';
import { DIFFERENTIALS_DATA } from '../data/siteData';
import { Sparkles } from 'lucide-react';

export const Differentials: React.FC = () => {
  return (
    <section id="diferenciais" className="relative py-24 bg-[#12100E] border-t border-[#D4AF37]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#D4AF37]/30 bg-[#16130F] mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#E2C06B]">
              Exclusividade & Compromisso
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#F7F4EE] font-light">
            Por que escolher o Studio Amarante?
          </h2>
          <p className="text-sm sm:text-base text-[#A8A196] font-light leading-relaxed mt-4">
            Pilares que fundamentam a nossa atuação diária e garantem a sua máxima satisfação e segurança.
          </p>
        </div>

        {/* 5 Differentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {DIFFERENTIALS_DATA.map((item, idx) => (
            <div
              key={item.number}
              className={`rounded-2xl p-8 bg-[#16130F] border border-[#D4AF37]/15 hover:border-[#D4AF37]/40 transition-all duration-300 relative group flex flex-col justify-between ${
                idx === 4 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div>
                {/* Big Number Accent */}
                <span className="font-serif text-4xl sm:text-5xl font-light text-[#D4AF37]/40 group-hover:text-[#D4AF37] transition-colors block mb-4">
                  {item.number}
                </span>

                <h3 className="font-serif text-xl sm:text-2xl font-light text-[#F7F4EE] mb-3 group-hover:text-[#D4AF37] transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#A8A196] font-light leading-relaxed">
                  "{item.description}"
                </p>
              </div>

              {/* Bottom Fine Line Indicator */}
              <div className="w-12 h-[1px] bg-[#D4AF37]/30 group-hover:w-full transition-all duration-500 mt-6" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
