import React from 'react';
import { X, MessageCircle, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';
import { Treatment } from '../types';
import { PHONE_NUMBER_WHATSAPP } from '../data/siteData';

interface TreatmentModalProps {
  treatment: Treatment | null;
  onClose: () => void;
}

export const TreatmentModal: React.FC<TreatmentModalProps> = ({ treatment, onClose }) => {
  if (!treatment) return null;

  const whatsappMessage = encodeURIComponent(
    `Olá! Gostaria de obter mais informações e agendar uma avaliação para o procedimento: *${treatment.name}* no Studio Amarante.`
  );
  const whatsappUrl = `https://wa.me/${PHONE_NUMBER_WHATSAPP}?text=${whatsappMessage}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-[#14120E] border border-[#D4AF37]/40 rounded-2xl p-6 sm:p-8 shadow-2xl gold-border-glow"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-[#A8A196] hover:text-[#D4AF37] hover:bg-white/5 rounded-full transition-colors"
          aria-label="Fechar"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] text-[#D4AF37] font-medium mb-2">
          <Sparkles className="w-3.5 h-3.5" />
          <span>{treatment.category} • Studio Amarante</span>
        </div>

        <h3 className="text-2xl sm:text-3xl font-serif text-[#F7F4EE] font-light mb-3">
          {treatment.name}
        </h3>

        <p className="text-sm text-[#A8A196] font-light leading-relaxed mb-6 border-b border-[#D4AF37]/15 pb-4">
          {treatment.fullDescription}
        </p>

        {/* Benefits Section */}
        <div className="mb-6">
          <h4 className="text-xs uppercase tracking-[0.15em] text-[#D4AF37] font-semibold mb-3">
            Principais Benefícios do Protocolo:
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {treatment.benefits.map((benefit, idx) => (
              <div key={idx} className="flex items-start gap-2.5 bg-[#1B1813] p-3 rounded-lg border border-[#D4AF37]/10">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <span className="text-xs text-[#F7F4EE] font-light leading-snug">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Indications Section */}
        <div className="mb-6 bg-[#1B1813] p-4 rounded-xl border-l-2 border-[#D4AF37]">
          <h4 className="text-xs font-semibold text-[#F7F4EE] uppercase tracking-wider mb-1">
            Indicação do Tratamento:
          </h4>
          <p className="text-xs text-[#A8A196] font-light leading-relaxed">
            {treatment.indications}
          </p>
        </div>

        {/* Safety Note */}
        <div className="flex items-center gap-2 text-[11px] text-[#A8A196] mb-6">
          <ShieldCheck className="w-4 h-4 text-[#D4AF37] shrink-0" />
          <span>Procedimento realizado exclusivamente por Katia Amarante com protocolo individualizado.</span>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 gold-gradient-bg gold-glow-button text-[#0B0A09] font-medium text-xs uppercase tracking-[0.18em] py-3.5 px-6 rounded-full flex items-center justify-center gap-2 hover:opacity-95 transition-all text-center"
          >
            <MessageCircle className="w-4 h-4 fill-[#0B0A09]" />
            <span>Agendar este procedimento</span>
          </a>

          <button
            onClick={onClose}
            className="px-6 py-3.5 border border-white/10 hover:border-white/20 text-[#A8A196] text-xs uppercase tracking-[0.15em] rounded-full transition-colors"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
};
