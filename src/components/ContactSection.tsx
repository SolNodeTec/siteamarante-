import React, { useState } from 'react';
import {
  MessageCircle,
  Instagram,
  MapPin,
  Clock,
  Phone,
  Sparkles,
  Send,
  CheckCircle2,
  Navigation,
} from 'lucide-react';
import {
  PHONE_NUMBER_WHATSAPP,
  WHATSAPP_LINK,
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
} from '../data/siteData';

export const ContactSection: React.FC = () => {
  const [patientName, setPatientName] = useState('');
  const [patientGoal, setPatientGoal] = useState('Harmonização / Sustentação');
  const [patientMessage, setPatientMessage] = useState('');

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Olá Katia! Me chamo ${patientName || 'Paciente'}.\nObjetivo principal: ${patientGoal}.\nMensagem: ${patientMessage || 'Gostaria de agendar uma avaliação presencial.'}`;
    const url = `https://wa.me/${PHONE_NUMBER_WHATSAPP}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="contato" className="relative py-24 bg-[#12100E] border-t border-[#D4AF37]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#D4AF37]/30 bg-[#16130F] mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#E2C06B]">
              Atendimento Exclusivo
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#F7F4EE] font-light">
            Vamos conversar sobre você?
          </h2>
          <p className="text-sm sm:text-base text-[#D4AF37] font-serif font-light italic mt-3">
            "Seu próximo passo começa com uma conversa."
          </p>
        </div>

        {/* 2 Column Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Direct Info Column */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-8">
            <div className="flex flex-col gap-6">
              
              <h3 className="font-serif text-2xl text-[#F7F4EE] font-light">
                Canais de Atendimento
              </h3>

              <p className="text-xs text-[#A8A196] font-light leading-relaxed">
                Nossa equipe e a Dra. Katia Amarante estão à disposição para tirar dúvidas e agendar sua consulta inicial de avaliação.
              </p>

              {/* Contact Cards */}
              <div className="flex flex-col gap-4">
                
                {/* WhatsApp */}
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl bg-[#181511] border border-[#D4AF37]/35 hover:border-[#D4AF37] flex items-center gap-4 group transition-all shadow-lg"
                >
                  <div className="w-11 h-11 rounded-lg gold-gradient-bg flex items-center justify-center text-[#0B0A09] shrink-0 group-hover:scale-105 transition-transform">
                    <MessageCircle className="w-6 h-6 fill-[#0B0A09]" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#D4AF37] block font-semibold">
                      WhatsApp Direto • (11) 99879-5833
                    </span>
                    <span className="text-xs font-medium text-[#F7F4EE] group-hover:text-[#D4AF37] transition-colors">
                      Clique para agendar imediatamente
                    </span>
                  </div>
                </a>

                {/* Instagram */}
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl bg-[#181511] border border-[#D4AF37]/25 hover:border-[#D4AF37] flex items-center gap-4 group transition-all"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#221D17] border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] shrink-0 group-hover:scale-105 transition-transform">
                    <Instagram className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#D4AF37] block font-medium">
                      Instagram Oficial
                    </span>
                    <span className="text-xs font-medium text-[#F7F4EE] group-hover:text-[#D4AF37] transition-colors">
                      {INSTAGRAM_HANDLE}
                    </span>
                  </div>
                </a>

                {/* Horário de Atendimento */}
                <div className="p-4 rounded-xl bg-[#181511] border border-[#D4AF37]/15 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#221D17] border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#D4AF37] block font-medium">
                      Horário de Funcionamento
                    </span>
                    <span className="text-xs font-light text-[#F7F4EE]">
                      Segunda a Sexta: 08:00 às 19:00 • Sábados com agendamento
                    </span>
                  </div>
                </div>

                {/* Endereço / Localização */}
                <div className="p-4 rounded-xl bg-[#181511] border border-[#D4AF37]/15 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#221D17] border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#D4AF37] block font-medium">
                      Localização do Studio
                    </span>
                    <span className="text-xs font-light text-[#F7F4EE]">
                      São Paulo - SP • Estacionamento privativo com manobrista
                    </span>
                  </div>
                </div>

              </div>

            </div>

          </div>

          {/* Interactive Consultation Form */}
          <div className="lg:col-span-7 bg-[#16130F] border border-[#D4AF37]/30 rounded-2xl p-6 sm:p-8 gold-border-glow">
            
            <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-[#D4AF37] font-semibold mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Agendamento Direto</span>
            </div>

            <h3 className="font-serif text-2xl text-[#F7F4EE] font-light mb-2">
              Envie uma mensagem direta
            </h3>

            <p className="text-xs text-[#A8A196] font-light leading-relaxed mb-6">
              Preencha os campos abaixo para ser direcionada(o) imediatamente ao nosso WhatsApp (11) 99879-5833.
            </p>

            <form onSubmit={handleFormSubmit} className="flex flex-col gap-4">
              
              <div>
                <label className="text-xs uppercase tracking-wider text-[#D4AF37] font-medium block mb-1.5">
                  Seu Nome Completo
                </label>
                <input
                  type="text"
                  value={patientName}
                  onChange={(e) => setPatientName(e.target.value)}
                  placeholder="Ex: Maria Silva"
                  required
                  className="w-full bg-[#1F1B16] border border-[#D4AF37]/20 rounded-xl px-4 py-3 text-xs text-[#F7F4EE] focus:outline-none focus:border-[#D4AF37] transition-colors"
                />
              </div>

              <div>
                <label className="text-xs uppercase tracking-wider text-[#D4AF37] font-medium block mb-1.5">
                  Objetivo Principal da Avaliação
                </label>
                <select
                  value={patientGoal}
                  onChange={(e) => setPatientGoal(e.target.value)}
                  className="w-full bg-[#1F1B16] border border-[#D4AF37]/20 rounded-xl px-4 py-3 text-xs text-[#F7F4EE] focus:outline-none focus:border-[#D4AF37] transition-colors"
                >
                  <option value="Harmonização / Sustentação Facial">Harmonização / Sustentação Facial</option>
                  <option value="Bioestimulador de Colágeno / Firmeza">Bioestimulador de Colágeno / Firmeza</option>
                  <option value="Injetáveis / Rugas de Expressão">Injetáveis / Rugas de Expressão</option>
                  <option value="Rejuvenescimento & Viço da Pele">Rejuvenescimento & Viço da Pele</option>
                  <option value="Tratamentos Corporais">Tratamentos Corporais</option>
                  <option value="Pós-Operatório Cirúrgico">Pós-Operatório Cirúrgico</option>
                  <option value="Fisioterapia Dermato-Funcional">Fisioterapia Dermato-Funcional</option>
                  <option value="Outro / Dúvida Geral">Outro / Dúvida Geral</option>
                </select>
              </div>

              <div>
                <label className="text-xs uppercase tracking-wider text-[#D4AF37] font-medium block mb-1.5">
                  Sua Mensagem ou Preferência de Horário (Opcional)
                </label>
                <textarea
                  rows={4}
                  value={patientMessage}
                  onChange={(e) => setPatientMessage(e.target.value)}
                  placeholder="Conte um pouco sobre o que gostaria de cuidar..."
                  className="w-full bg-[#1F1B16] border border-[#D4AF37]/20 rounded-xl px-4 py-3 text-xs text-[#F7F4EE] focus:outline-none focus:border-[#D4AF37] transition-colors resize-none"
                />
              </div>

              <div className="flex items-center gap-2 text-[11px] text-[#A8A196]">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>Atendimento confidencial diretamente no número (11) 99879-5833.</span>
              </div>

              <button
                type="submit"
                className="w-full gold-gradient-bg gold-glow-button text-[#0B0A09] font-medium text-xs uppercase tracking-[0.18em] py-4 rounded-full flex items-center justify-center gap-2 hover:opacity-95 transition-all mt-2"
              >
                <Send className="w-4 h-4 text-[#0B0A09]" />
                <span>Enviar pelo WhatsApp (11) 99879-5833</span>
              </button>

            </form>

          </div>

        </div>

        {/* Large Prominent Google Maps Section */}
        <div id="mapa" className="mt-20 bg-[#16130F] border border-[#D4AF37]/35 rounded-3xl overflow-hidden shadow-2xl gold-border-glow">
          
          {/* Header Bar above Map */}
          <div className="p-6 sm:p-8 border-b border-[#D4AF37]/20 flex flex-col lg:flex-row lg:items-center justify-between gap-6 bg-[#1A1611]">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#D4AF37]/30 bg-[#221D17] text-[10px] uppercase tracking-[0.25em] text-[#D4AF37] font-semibold mb-2">
                <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Localização & Acesso</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#F7F4EE] font-light">
                Google Maps • Studio Amarante
              </h3>
              <p className="text-xs sm:text-sm text-[#A8A196] font-light mt-1">
                Atendimento presencial em ambiente exclusivo de alto padrão em São Paulo - SP com estacionamento privativo e manobrista.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <a
                href="https://maps.google.com/maps?q=Studio+Amarante+Sao+Paulo"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-full border border-[#D4AF37]/40 text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0B0A09] text-xs uppercase tracking-wider font-medium transition-all flex items-center gap-2 shadow-md"
              >
                <Navigation className="w-4 h-4" />
                <span>Abrir Rota no Google Maps</span>
              </a>

              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full gold-gradient-bg text-[#0B0A09] text-xs uppercase tracking-wider font-medium transition-all flex items-center gap-2 hover:opacity-90 shadow-lg"
              >
                <MessageCircle className="w-4 h-4 fill-[#0B0A09]" />
                <span>WhatsApp: (11) 99879-5833</span>
              </a>
            </div>
          </div>

          {/* Large High-Impact Google Maps Frame Container */}
          <div className="relative w-full h-[450px] sm:h-[550px] lg:h-[600px] bg-[#12100E]">
            <iframe
              title="Google Maps Studio Amarante"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.065831163231!2d-46.65390542381283!3d-23.564223261821034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f120ef!2sAv.%20Paulista%20-%20Bela%20Vista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
              className="w-full h-full border-0 filter grayscale-[15%] contrast-[105%] opacity-95 hover:opacity-100 transition-opacity"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

            {/* Overlay Info Card on Map */}
            <div className="absolute top-4 left-4 sm:top-6 sm:left-6 max-w-sm bg-[#0B0A09]/95 border border-[#D4AF37]/50 backdrop-blur-md rounded-2xl p-5 shadow-2xl pointer-events-auto gold-border-glow">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl gold-gradient-bg flex items-center justify-center text-[#0B0A09] shrink-0 font-serif font-bold shadow-md">
                  <MapPin className="w-5 h-5 fill-[#0B0A09]" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-[#F7F4EE] uppercase tracking-wider">
                    Studio Amarante
                  </h4>
                  <span className="text-[10px] text-[#D4AF37] font-medium">Estética Avançada • Dra. Katia Amarante</span>
                </div>
              </div>

              <p className="text-xs text-[#A8A196] font-light leading-relaxed mb-4">
                Atendimento privativo e exclusivo em São Paulo, focado em segurança, conforto e sigilo absoluto.
              </p>

              <div className="pt-3 border-t border-[#D4AF37]/20 flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-[#A8A196] block">Contato Direto</span>
                  <span className="text-xs text-[#D4AF37] font-semibold">(11) 99879-5833</span>
                </div>

                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 rounded-lg gold-gradient-bg text-[#0B0A09] text-[10px] uppercase tracking-wider font-semibold hover:opacity-90 transition-opacity"
                >
                  Agendar
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
