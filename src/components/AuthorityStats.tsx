import React from 'react';
import { Award, GraduationCap, Sparkles, UserCheck } from 'lucide-react';

export const AuthorityStats: React.FC = () => {
  const stats = [
    {
      icon: Award,
      value: '20 Anos',
      label: 'de experiência em estética avançada e vivência clínica',
    },
    {
      icon: GraduationCap,
      value: 'Pós-Graduada',
      label: 'em Dermato-Funcional, Ortopedia e Injetáveis',
    },
    {
      icon: Sparkles,
      value: 'Resultados Naturais',
      label: 'como princípio inegociável de cada protocolo',
    },
    {
      icon: UserCheck,
      value: 'Atendimento Personalizado',
      label: 'desenhado sob medida para cada história e fisionomia',
    },
  ];

  return (
    <section id="autoridade" className="relative py-12 bg-[#12100E] border-y border-[#D4AF37]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="flex items-start gap-4 p-4 rounded-xl bg-[#181512] border border-[#D4AF37]/15 hover:border-[#D4AF37]/40 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl border border-[#D4AF37]/30 bg-[#1D1914] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <Icon className="w-6 h-6 text-[#D4AF37]" />
                </div>
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl font-normal gold-gradient-text">
                    {stat.value}
                  </h3>
                  <p className="text-xs text-[#A8A196] font-light leading-relaxed mt-1">
                    {stat.label}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
