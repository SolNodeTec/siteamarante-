import React from 'react';
import { SERVICE_STEPS_DATA } from '../data/siteData';
import { Sparkles, CalendarCheck, FileText, Activity, HeartPulse } from 'lucide-react';

export const ServiceProcess: React.FC = () => {
  const getStepIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return CalendarCheck;
      case 1:
        return FileText;
      case 2:
        return Activity;
      case 3:
        return HeartPulse;
      default:
        return Sparkles;
    }
  };

  return (
    <section className="relative py-24 bg-[#12100E] border-t border-[#D4AF37]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#D4AF37]/30 bg-[#16130F] mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#E2C06B]">
              Jornada do Paciente
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#F7F4EE] font-light">
            Seu cuidado começa antes do procedimento.
          </h2>
          <p className="text-sm sm:text-base text-[#A8A196] font-light leading-relaxed mt-4">
            Um fluxo transparente e estruturado para garantir máxima segurança, conforto e previsibilidade de resultados.
          </p>
        </div>

        {/* 4 Steps Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          
          {SERVICE_STEPS_DATA.map((step, idx) => {
            const Icon = getStepIcon(idx);

            return (
              <div
                key={step.number}
                className="rounded-2xl p-6 bg-[#16130F] border border-[#D4AF37]/15 hover:border-[#D4AF37]/40 transition-all duration-300 relative group flex flex-col justify-between"
              >
                <div>
                  {/* Step Header */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-serif text-2xl font-light text-[#D4AF37]">
                      {step.number}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-[#221D17] border border-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37] group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="font-serif text-xl font-light text-[#F7F4EE] mb-2 group-hover:text-[#D4AF37] transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-xs text-[#F7F4EE] font-normal leading-relaxed mb-3">
                    "{step.description}"
                  </p>

                  <p className="text-[11px] text-[#A8A196] font-light leading-relaxed border-t border-white/5 pt-3">
                    {step.details}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#D4AF37]/10 flex items-center gap-2 text-[10px] uppercase tracking-wider text-[#D4AF37]">
                  <span className="w-1.5 h-1.5 rounded-full gold-gradient-bg" />
                  <span>Etapa {idx + 1} de 4</span>
                </div>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
};
