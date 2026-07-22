import React from 'react';
import { IMAGES } from '../data/assetsData';
import { Sparkles, HeartHandshake } from 'lucide-react';

export const Philosophy: React.FC = () => {
  return (
    <section className="relative py-28 bg-[#0B0A09] overflow-hidden">
      {/* Background image with intense dark luxury overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={IMAGES.naturalBeauty}
          alt="Filosofia Studio Amarante"
          className="w-full h-full object-cover opacity-20 filter grayscale scale-105"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).src = '/natural.jpg';
          }}
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0A09] via-[#0B0A09]/90 to-[#0B0A09]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0A09] via-transparent to-[#0B0A09]" />
      </div>

      {/* Golden Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#D4AF37]/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-[#D4AF37]/30 bg-[#16130F]/90 backdrop-blur-md mb-8">
          <HeartHandshake className="w-4 h-4 text-[#D4AF37]" />
          <span className="text-[11px] uppercase tracking-[0.25em] text-[#E2C06B] font-medium">
            Filosofia do Studio Amarante
          </span>
        </div>

        {/* Major Quote */}
        <blockquote className="text-3xl sm:text-5xl lg:text-6xl font-serif text-[#F7F4EE] font-light leading-[1.2] mb-8">
          "Reabilitar o corpo também é{' '}
          <span className="gold-gradient-text italic font-normal block mt-2">
            resgatar identidades.
          </span>"
        </blockquote>

        {/* Complement Text */}
        <p className="text-base sm:text-xl text-[#A8A196] font-light max-w-3xl mx-auto leading-relaxed mb-10">
          Mais do que procedimentos isolados, o Studio Amarante acredita em processos de transformação genuínos que respeitam a individualidade, a história e os objetivos de cada paciente.
        </p>

        {/* Signature Element */}
        <div className="inline-flex flex-col items-center gap-2 border-t border-[#D4AF37]/25 pt-6 px-12">
          <Sparkles className="w-5 h-5 text-[#D4AF37]" />
          <span className="font-serif text-lg tracking-[0.2em] font-semibold text-[#F7F4EE] uppercase">
            STUDIO AMARANTE
          </span>
          <span className="text-[10px] tracking-[0.3em] text-[#D4AF37] uppercase font-light">
            Estética Avançada • Katia Amarante
          </span>
        </div>

      </div>
    </section>
  );
};
