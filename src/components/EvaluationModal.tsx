import React from 'react';
import { X, Sparkles, MessageCircle, Phone } from 'lucide-react';
import { WHATSAPP_LINK, PHONE_NUMBER_WHATSAPP } from '../data/siteData';

interface EvaluationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const EvaluationModal: React.FC<EvaluationModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleOpenDirectWhatsApp = () => {
    window.open(WHATSAPP_LINK, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div
        className="relative w-full max-w-md bg-[#14120E] border border-[#D4AF37]/40 rounded-2xl p-6 sm:p-8 shadow-2xl gold-border-glow"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-[#A8A196] hover:text-[#D4AF37] hover:bg-white/5 rounded-full transition-colors"
          aria-label="Fechar"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] text-[#D4AF37] font-medium mb-2">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Atendimento Direto</span>
        </div>

        <h3 className="text-2xl font-serif text-[#F7F4EE] font-light mb-2">
          Agendar Avaliação
        </h3>

        <p className="text-xs text-[#A8A196] font-light leading-relaxed mb-6">
          Você será direcionada(o) imediatamente ao WhatsApp do Studio Amarante com a Dra. Katia Amarante.
        </p>

        {/* Phone Info Box */}
        <div className="p-4 rounded-xl bg-[#1A1612] border border-[#D4AF37]/25 flex items-center gap-4 mb-6">
          <div className="w-10 h-10 rounded-xl gold-gradient-bg flex items-center justify-center text-[#0B0A09] shrink-0">
            <Phone className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[10px] uppercase tracking-wider text-[#D4AF37] block font-medium">
              WhatsApp Oficial
            </span>
            <span className="text-sm font-semibold text-[#F7F4EE]">
              (11) 99879-5833
            </span>
          </div>
        </div>

        {/* CTA */}
        <button
          onClick={handleOpenDirectWhatsApp}
          className="w-full gold-gradient-bg gold-glow-button text-[#0B0A09] font-medium text-xs uppercase tracking-[0.18em] py-4 rounded-full flex items-center justify-center gap-2 hover:opacity-95 transition-all shadow-xl"
        >
          <MessageCircle className="w-4.5 h-4.5 fill-[#0B0A09]" />
          <span>Iniciar Conversa no WhatsApp</span>
        </button>

        <p className="text-[10px] text-center text-[#A8A196] mt-4 font-light">
          Atendimento personalizado e sem filas de espera.
        </p>

      </div>
    </div>
  );
};
