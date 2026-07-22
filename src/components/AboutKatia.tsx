import React from 'react';
import { Award, GraduationCap, Microscope, Sparkles, CheckCircle2 } from 'lucide-react';
import { IMAGES } from '../data/assetsData';

export const AboutKatia: React.FC = () => {
  const credentials = [
    'Esteticista & Especialista em Autoestima há 20 anos',
    'Pós-graduada em Fisioterapia Dermato-Funcional',
    'Pós-graduada em Ortopedia',
    'Pós-graduada em Injetáveis Avançados',
    'Monitora ativa de Injetáveis & Harmonização',
  ];

  return (
    <section id="sobre" className="relative py-24 bg-[#0B0A09] overflow-hidden">
      {/* Decorative ambient background */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#D4AF37]/30 bg-[#16130F] mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#E2C06B]">
              Autoridade & Experiência
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#F7F4EE] font-light">
            Conheça Katia Amarante
          </h2>
          <p className="text-base sm:text-lg text-[#D4AF37] font-serif font-light italic mt-3">
            "Experiência, ciência e sensibilidade a serviço da sua autoestima."
          </p>
        </div>

        {/* Main Editorial Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Photo & Credential Cards Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-[#D4AF37]/40 bg-[#F8F7F4] p-3 gold-border-glow">
              <img
                src={IMAGES.katia}
                alt="Katia Amarante - Fisioterapeuta Dermato-Funcional e Especialista em Estética"
                className="w-full aspect-[3/4] object-cover object-top rounded-xl"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = '/katia.png';
                }}
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0A09]/80 via-transparent to-transparent opacity-80 pointer-events-none" />
            </div>

            {/* Floating Monitor Role Badge */}
            <div className="mt-4 p-4 rounded-xl dark-glass border border-[#D4AF37]/30 flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg gold-gradient-bg flex items-center justify-center shrink-0">
                <Microscope className="w-5 h-5 text-[#0B0A09]" />
              </div>
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-[#F7F4EE]">
                  Monitora de Injetáveis
                </h4>
                <p className="text-[11px] text-[#A8A196]">
                  Atuação no desenvolvimento de técnicas de excelência em harmonização e bioestimuladores.
                </p>
              </div>
            </div>
          </div>

          {/* Biography & Text Column */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            
            <p className="text-base sm:text-lg text-[#F7F4EE] font-serif leading-relaxed">
              Especialista em Autoestima e Esteticista há <strong className="gold-gradient-text font-normal">20 anos</strong>, Katia Amarante construiu sua trajetória unindo conhecimento técnico, experiência clínica e um olhar profundamente individualizado para cada paciente.
            </p>

            <p className="text-sm sm:text-base text-[#A8A196] font-light leading-relaxed">
              Pós-graduada em <strong className="text-[#F7F4EE] font-medium">Fisioterapia Dermato-Funcional, Ortopedia e Injetáveis</strong>, dedica sua carreira à união precisa entre ciência médica, saúde física e bem-estar estético.
            </p>

            <p className="text-sm sm:text-base text-[#A8A196] font-light leading-relaxed">
              Sua atuação é pautada na constante evolução técnica e científica para entregar sempre o melhor resultado a cada paciente que confia em suas mãos.
            </p>

            <p className="text-sm sm:text-base text-[#A8A196] font-light leading-relaxed">
              Katia também atua ativamente como <strong className="text-[#D4AF37] font-medium">monitora de injetáveis</strong>, auxiliando no desenvolvimento e na prática de excelência em harmonização e bioestimuladores de colágeno.
            </p>

            {/* Key Credentials List */}
            <div className="py-2 flex flex-col gap-2.5">
              {credentials.map((cred, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                  <span className="text-xs sm:text-sm text-[#F7F4EE] font-light">{cred}</span>
                </div>
              ))}
            </div>

            {/* Quote Box */}
            <div className="p-6 rounded-xl bg-[#15120E] border-l-4 border-[#D4AF37] relative mt-2">
              <p className="font-serif text-sm sm:text-base text-[#F7F4EE] italic font-light leading-relaxed">
                "No Studio Amarante, reabilitar o corpo é também resgatar identidades. Cada protocolo é desenhado sob medida para valorizar sua beleza natural com segurança de nível médico e o acolhimento que você merece."
              </p>
              <span className="block text-xs uppercase tracking-[0.2em] text-[#D4AF37] font-medium mt-3">
                — Katia Amarante
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
