import React, { useState } from 'react';
import {
  Sparkles,
  Activity,
  Stethoscope,
  Award,
  Heart,
  ShieldCheck,
  Microscope,
  UserCheck,
  ChevronRight,
  MessageCircle,
} from 'lucide-react';
import { TREATMENTS_DATA, WHATSAPP_LINK } from '../data/siteData';
import { Treatment } from '../types';
import { TreatmentModal } from './TreatmentModal';

export const Treatments: React.FC = () => {
  const [selectedTreatment, setSelectedTreatment] = useState<Treatment | null>(null);

  const getTreatmentIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles':
        return Sparkles;
      case 'Activity':
        return Activity;
      case 'Stethoscope':
        return Stethoscope;
      case 'Award':
        return Award;
      case 'Heart':
        return Heart;
      case 'ShieldCheck':
        return ShieldCheck;
      case 'Microscope':
        return Microscope;
      case 'UserCheck':
        return UserCheck;
      default:
        return Sparkles;
    }
  };

  return (
    <section id="tratamentos" className="relative py-24 bg-[#0B0A09] overflow-hidden">
      {/* Decorative glows */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-[#D4AF37]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#D4AF37]/30 bg-[#16130F] mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#E2C06B]">
              Protocolos Exclusivos
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#F7F4EE] font-light">
            Tratamentos pensados para você
          </h2>
          <p className="text-sm sm:text-base text-[#A8A196] font-light leading-relaxed mt-4">
            Cada procedimento é planejado considerando as necessidades, objetivos e características individuais de cada paciente.
          </p>
        </div>

        {/* 8 Treatments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TREATMENTS_DATA.map((item) => {
            const Icon = getTreatmentIcon(item.iconName);

            return (
              <div
                key={item.id}
                className="group relative rounded-2xl bg-[#14120E] border border-[#D4AF37]/15 hover:border-[#D4AF37]/50 p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:bg-[#181511]"
              >
                {/* Popular badge */}
                {item.popular && (
                  <div className="absolute top-4 right-4 text-[9px] uppercase tracking-[0.2em] font-semibold px-2.5 py-0.5 rounded-full gold-gradient-bg text-[#0B0A09]">
                    Destaque
                  </div>
                )}

                <div>
                  {/* Category & Icon */}
                  <div className="w-12 h-12 rounded-xl bg-[#1D1914] border border-[#D4AF37]/25 flex items-center justify-center mb-5 group-hover:border-[#D4AF37] group-hover:scale-110 transition-all">
                    <Icon className="w-6 h-6 text-[#D4AF37]" />
                  </div>

                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#D4AF37] font-medium block mb-1">
                    {item.category}
                  </span>

                  <h3 className="font-serif text-xl font-light text-[#F7F4EE] mb-3 group-hover:text-[#D4AF37] transition-colors">
                    {item.name}
                  </h3>

                  <p className="text-xs text-[#A8A196] font-light leading-relaxed mb-6">
                    {item.shortDescription}
                  </p>
                </div>

                {/* Card Action */}
                <button
                  onClick={() => setSelectedTreatment(item)}
                  className="w-full pt-4 border-t border-white/5 flex items-center justify-between text-xs text-[#F7F4EE] group-hover:text-[#D4AF37] transition-colors"
                >
                  <span className="uppercase tracking-[0.15em] font-medium text-[11px]">
                    Conhecer tratamento
                  </span>
                  <ChevronRight className="w-4 h-4 text-[#D4AF37] group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Custom Protocol Banner */}
        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-[#171410] via-[#1F1A13] to-[#171410] border border-[#D4AF37]/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full border border-[#D4AF37]/40 bg-[#14120E] flex items-center justify-center shrink-0">
              <Sparkles className="w-6 h-6 text-[#D4AF37]" />
            </div>
            <div>
              <h4 className="font-serif text-lg text-[#F7F4EE] font-light">
                Dúvida sobre qual o tratamento ideal para a sua pele?
              </h4>
              <p className="text-xs text-[#A8A196] font-light mt-0.5">
                Em nossa avaliação inicial presencial, Katia Amarante desenha a combinação precisa para os seus objetivos.
              </p>
            </div>
          </div>

          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="gold-gradient-bg text-[#0B0A09] font-medium text-xs uppercase tracking-[0.18em] px-6 py-3.5 rounded-full flex items-center gap-2 shrink-0 hover:opacity-95 transition-all shadow-lg"
          >
            <MessageCircle className="w-4 h-4 fill-[#0B0A09]" />
            <span>Consultar no WhatsApp</span>
          </a>
        </div>

      </div>

      {/* Modal detail */}
      <TreatmentModal
        treatment={selectedTreatment}
        onClose={() => setSelectedTreatment(null)}
      />
    </section>
  );
};
