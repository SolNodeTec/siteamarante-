import React from 'react';
import { MessageCircle } from 'lucide-react';
import { WHATSAPP_LINK } from '../data/siteData';

export const WhatsAppButton: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 group">
      {/* Direct Label on Hover / Always visible on sm */}
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="hidden sm:flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#16130F]/95 border border-[#D4AF37]/40 shadow-2xl backdrop-blur-md text-xs font-medium text-[#F7F4EE] hover:text-[#D4AF37] transition-all group-hover:scale-105"
      >
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
        <span>Atendimento Direto (11) 99879-5833</span>
      </a>

      {/* Main Direct Trigger Button */}
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="relative group/btn w-14 h-14 rounded-full gold-gradient-bg shadow-2xl flex items-center justify-center text-[#0B0A09] hover:scale-110 active:scale-95 transition-all gold-glow-button"
        aria-label="Falar no WhatsApp (11) 99879-5833"
      >
        {/* Pulse Ring */}
        <span className="absolute -inset-1 rounded-full bg-[#D4AF37]/30 animate-ping pointer-events-none" />

        {/* Online Indicator */}
        <span className="absolute top-1 right-1 w-3.5 h-3.5 bg-emerald-500 border-2 border-[#0B0A09] rounded-full" />

        <MessageCircle className="w-7 h-7 fill-[#0B0A09] text-[#0B0A09]" />
      </a>
    </div>
  );
};
