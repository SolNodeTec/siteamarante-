import React from 'react';
import { TESTIMONIALS_DATA, INSTAGRAM_URL, INSTAGRAM_HANDLE } from '../data/siteData';
import { Star, Sparkles, Instagram, Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section className="relative py-24 bg-[#12100E] border-t border-[#D4AF37]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#D4AF37]/30 bg-[#16130F] mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#E2C06B]">
              Depoimentos Reais
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#F7F4EE] font-light">
            Experiências que transformam.
          </h2>
          <p className="text-sm sm:text-base text-[#A8A196] font-light leading-relaxed mt-4">
            A opinião de quem já vivenciou o acolhimento, a segurança e os resultados do Studio Amarante.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {TESTIMONIALS_DATA.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl p-8 bg-[#16130F] border border-[#D4AF37]/15 hover:border-[#D4AF37]/40 transition-all duration-300 relative flex flex-col justify-between group"
            >
              <div>
                {/* Header: Rating & Quote Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#D4AF37] text-[#D4AF37]" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-[#D4AF37]/20 group-hover:text-[#D4AF37]/40 transition-colors" />
                </div>

                {/* Comment */}
                <p className="text-xs sm:text-sm text-[#F7F4EE] font-light leading-relaxed italic mb-6">
                  "{item.comment}"
                </p>
              </div>

              {/* Patient Info Footer */}
              <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full gold-gradient-bg flex items-center justify-center text-[#0B0A09] font-serif font-bold text-xs">
                    {item.avatarInitials}
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-[#F7F4EE]">
                      {item.name}
                    </h4>
                    <span className="text-[10px] text-[#D4AF37]">
                      {item.procedure}
                    </span>
                  </div>
                </div>

                <span className="text-[10px] text-[#A8A196]">
                  {item.date}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Instagram Follow Callout */}
        <div className="text-center bg-[#181511] p-6 rounded-2xl border border-[#D4AF37]/20 max-w-xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full border border-[#D4AF37]/30 bg-[#221D17] flex items-center justify-center text-[#D4AF37] shrink-0">
              <Instagram className="w-5 h-5" />
            </div>
            <div className="text-left">
              <span className="text-xs font-semibold text-[#F7F4EE] block">Acompanhe nosso dia a dia</span>
              <span className="text-[11px] text-[#D4AF37]">{INSTAGRAM_HANDLE} no Instagram</span>
            </div>
          </div>

          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-[#D4AF37]/40 hover:border-[#D4AF37] text-[#D4AF37] font-light text-xs uppercase tracking-[0.15em] px-5 py-2.5 rounded-full hover:bg-[#D4AF37]/10 transition-all shrink-0"
          >
            Ver Instagram
          </a>
        </div>

      </div>
    </section>
  );
};
