import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AuthorityStats } from './components/AuthorityStats';
import { AboutKatia } from './components/AboutKatia';
import { BeautyPillars } from './components/BeautyPillars';
import { Treatments } from './components/Treatments';
import { Differentials } from './components/Differentials';
import { Philosophy } from './components/Philosophy';
import { ServiceProcess } from './components/ServiceProcess';
import { ResultsSection } from './components/ResultsSection';
import { Testimonials } from './components/Testimonials';
import { FinalCta } from './components/FinalCta';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { EvaluationModal } from './components/EvaluationModal';
import { WhatsAppButton } from './components/WhatsAppButton';

export default function App() {
  const [evaluationModalOpen, setEvaluationModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0B0A09] text-[#F7F4EE] font-sans selection:bg-[#D4AF37] selection:text-[#0B0A09]">
      {/* Header */}
      <Header onOpenEvaluation={() => setEvaluationModalOpen(true)} />

      {/* Main Content Sections */}
      <main>
        {/* 1. Hero Section */}
        <Hero onOpenEvaluation={() => setEvaluationModalOpen(true)} />

        {/* 2. Authority Stats */}
        <AuthorityStats />

        {/* 3. About Katia Amarante */}
        <AboutKatia />

        {/* 4. Beauty Pillars ("A sua beleza não é padrão") */}
        <BeautyPillars />

        {/* 5. Treatments */}
        <Treatments />

        {/* 6. Differentials */}
        <Differentials />

        {/* 7. Studio Philosophy Quote Banner */}
        <Philosophy />

        {/* 8. Service Process Workflow */}
        <ServiceProcess />

        {/* 9. Results & Naturality */}
        <ResultsSection />

        {/* 10. Testimonials */}
        <Testimonials />

        {/* 11. Final Emotional CTA */}
        <FinalCta onOpenEvaluation={() => setEvaluationModalOpen(true)} />

        {/* 12. Contact Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Widget */}
      <WhatsAppButton />

      {/* Interactive Evaluation Modal */}
      <EvaluationModal
        isOpen={evaluationModalOpen}
        onClose={() => setEvaluationModalOpen(false)}
      />
    </div>
  );
}
