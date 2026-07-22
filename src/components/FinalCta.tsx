import React from 'react';
import { MessageCircle, Sparkles, Heart } from 'lucide-react';
import { WHATSAPP_LINK } from '../data/siteData';

interface FinalCtaProps {
  onOpenEvaluation: () => void;
}

export const FinalCta: React.FC<FinalCtaProps> = ({ onOpenEvaluation }) => {
  return (
    <section className="relative py-28 bg-[#0B0A09] overflow-hidden border-t border-[#D4AF37]/30">
      {/* Golden Glowing Radial Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#D4AF37]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#D4AF37]/40 bg-[#171410] mb-8">
          <Heart className="w-4 h-4 text-[#D4AF37]" />
          <span className="text-[11px] uppercase tracking-[0.25em] text-[#E2C06B] font-medium">
            Seu Momento De Cuidado
          </span>
        </div>

        {/* Title */}
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif text-[#F7F4EE] font-light leading-[1.2] mb-6">
          Talvez o que você esteja buscando{' '}
          <span className="block text-[#A8A196] font-extralight italic mt-2">
            não seja mudar quem você é.
          </span>
        </h2>

        {/* Subtitle */}
        <p className="text-xl sm:text-3xl font-serif gold-gradient-text italic font-normal leading-relaxed mb-8 max-w-3xl mx-auto">
          "Talvez seja apenas revelar, com mais confiança, a melhor versão de quem você já é."
        </p>

        {/* Complement */}
        <p className="text-sm sm:text-base text-[#A8A196] font-light max-w-2xl mx-auto leading-relaxed mb-10">
          Agende uma avaliação e descubra um cuidado pensado especialmente para você, com acompanhamento dedicado da Dra. Katia Amarante.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto gold-gradient-bg gold-glow-button text-[#0B0A09] font-medium text-xs uppercase tracking-[0.2em] px-10 py-5 rounded-full flex items-center justify-center gap-3 hover:scale-105 transition-all shadow-2xl"
          >
            <MessageCircle className="w-5 h-5 fill-[#0B0A09]" />
            <span>Agendar avaliação pelo WhatsApp</span>
          </a>

          <button
            onClick={onOpenEvaluation}
            className="w-full sm:w-auto border border-[#D4AF37]/40 text-[#F7F4EE] hover:text-[#D4AF37] hover:border-[#D4AF37] font-light text-xs uppercase tracking-[0.18em] px-8 py-5 rounded-full flex items-center justify-center gap-2 backdrop-blur-sm bg-white/[0.02] transition-all"
          >
            <Sparkles className="w-4 h-4 text-[#D4AF37]" />
            <span>Simular Protocolo Ideal</span>
          </button>
        </div>

      </div>
    </section>
  );
};
