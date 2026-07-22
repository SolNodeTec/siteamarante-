import React, { useState } from 'react';
import { CASE_STUDIES_DATA } from '../data/siteData';
import { Sparkles, CheckCircle2, ShieldCheck, Eye, Layers } from 'lucide-react';

export const ResultsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState(CASE_STUDIES_DATA[0].id);

  const selectedCase = CASE_STUDIES_DATA.find((c) => c.id === activeTab) || CASE_STUDIES_DATA[0];

  return (
    <section id="resultados" className="relative py-24 bg-[#0B0A09] border-t border-[#D4AF37]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#D4AF37]/30 bg-[#16130F] mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#E2C06B]">
              Estudos de Caso & Naturalidade
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#F7F4EE] font-light">
            Resultados que respeitam a sua essência.
          </h2>
          <p className="text-sm sm:text-base text-[#A8A196] font-light leading-relaxed mt-4">
            Na estética avançada de alto padrão, os melhores procedimentos são aqueles que todos percebem pela sua radiância, mas ninguém aponta intervenções artificiais.
          </p>
        </div>

        {/* Protocol Case Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          {CASE_STUDIES_DATA.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`px-5 py-2.5 rounded-full text-xs uppercase tracking-[0.15em] font-medium transition-all duration-300 flex items-center gap-2 ${
                activeTab === item.id
                  ? 'gold-gradient-bg text-[#0B0A09] shadow-lg scale-105'
                  : 'bg-[#16130F] text-[#A8A196] hover:text-[#F7F4EE] border border-[#D4AF37]/20'
              }`}
            >
              <Eye className="w-3.5 h-3.5" />
              <span>{item.category}</span>
            </button>
          ))}
        </div>

        {/* Selected Case Breakdown Box */}
        <div className="rounded-2xl bg-[#14120E] border border-[#D4AF37]/30 p-6 sm:p-10 gold-border-glow">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Case Details */}
            <div className="lg:col-span-7 flex flex-col gap-4">
              <div className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-[#D4AF37] font-semibold">
                <Layers className="w-3.5 h-3.5" />
                <span>Protocolo Integrado • {selectedCase.category}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-serif text-[#F7F4EE] font-light">
                {selectedCase.title}
              </h3>

              <p className="text-sm text-[#A8A196] font-light leading-relaxed">
                {selectedCase.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-2">
                <div className="bg-[#1B1813] p-3.5 rounded-xl border border-[#D4AF37]/10">
                  <span className="text-[10px] uppercase tracking-wider text-[#D4AF37] block font-medium">
                    Técnica & Produtos Utilizados
                  </span>
                  <p className="text-xs text-[#F7F4EE] font-light mt-1">
                    {selectedCase.protocolUsed}
                  </p>
                </div>

                <div className="bg-[#1B1813] p-3.5 rounded-xl border border-[#D4AF37]/10">
                  <span className="text-[10px] uppercase tracking-wider text-[#D4AF37] block font-medium">
                    Região & Tempo de Resposta
                  </span>
                  <p className="text-xs text-[#F7F4EE] font-light mt-1">
                    {selectedCase.focusArea} ({selectedCase.timeframe})
                  </p>
                </div>
              </div>

              <div>
                <span className="text-xs uppercase tracking-wider text-[#D4AF37] font-medium block mb-2">
                  Destaques do Resultado:
                </span>
                <div className="flex flex-col gap-2">
                  {selectedCase.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                      <span className="text-xs text-[#F7F4EE] font-light">{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Naturality Guarantee Box */}
            <div className="lg:col-span-5 bg-[#1A1713] p-6 sm:p-8 rounded-xl border border-[#D4AF37]/25 flex flex-col justify-between h-full">
              <div>
                <div className="w-10 h-10 rounded-full gold-gradient-bg flex items-center justify-center text-[#0B0A09] mb-4">
                  <ShieldCheck className="w-5 h-5" />
                </div>

                <h4 className="font-serif text-lg text-[#F7F4EE] font-light mb-2">
                  Garantia de Naturalidade Studio Amarante
                </h4>

                <p className="text-xs text-[#A8A196] font-light leading-relaxed mb-4">
                  Em conformidade rigorosa com a ética profissional e os princípios da Dra. Katia Amarante, cada planejamento é avaliado para impedir qualquer excesso volumétrico.
                </p>

                <p className="text-xs text-[#A8A196] font-light leading-relaxed italic border-t border-white/5 pt-4">
                  "A harmonização verdadeira não transforma a pessoa em outra; ela traz de volta a firmeza, o descanso e o frescor da sua melhor versão."
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#D4AF37]/15 flex items-center justify-between text-[11px] text-[#D4AF37]">
                <span>20 Anos de Segurança Clínica</span>
                <Sparkles className="w-4 h-4" />
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
