'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import SocialProof from '@/components/SocialProof';
import CoreFeatures from '@/components/CoreFeatures';
import RoleExperience from '@/components/RoleExperience';
import SecuritySection from '@/components/SecuritySection';
import PricingSection from '@/components/PricingSection';
import RealOperations from '@/components/RealOperations';
import WorkflowSection from '@/components/WorkflowSection';
import FaqSection from '@/components/FaqSection';
import FinalCta from '@/components/FinalCta';
import Footer from '@/components/Footer';
import ModalDemo from '@/components/ModalDemo';

export default function Home() {
  const [demoOpen, setDemoOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string | undefined>(undefined);

  const handleOpenDemo = (planId?: string) => {
    setSelectedPlan(planId);
    setDemoOpen(true);
  };

  const handleCloseDemo = () => {
    setDemoOpen(false);
    setSelectedPlan(undefined);
  };

  return (
    <main className="min-h-screen flex flex-col bg-[#FAFAF9] selection:bg-brand-100 selection:text-brand-900">
      {/* 1. Navbar */}
      <Navbar 
        onOpenDemo={() => handleOpenDemo()} 
        onOpenContact={() => handleOpenDemo('custom')} 
      />

      {/* 2. Hero Section */}
      <Hero onOpenDemo={() => handleOpenDemo()} />

      {/* 3. Social Proof Ecosystem */}
      <SocialProof />

      {/* 4. Core Features */}
      <CoreFeatures />

      {/* 5. Role-Based Experience */}
      <RoleExperience />

      {/* 6. Security / Access Control */}
      <SecuritySection />

      {/* 7. Pricing */}
      <PricingSection onSelectPlan={(planId) => handleOpenDemo(planId)} />

      {/* 8. Real Bimbel Operations */}
      <RealOperations />

      {/* 9. Workflow Organization */}
      <WorkflowSection />

      {/* FAQ Section */}
      <FaqSection />

      {/* 10. Final CTA */}
      <FinalCta onOpenDemo={() => handleOpenDemo()} />

      {/* 11. Footer */}
      <Footer 
        onOpenDemo={() => handleOpenDemo()}
        onOpenContact={() => handleOpenDemo('custom')}
      />

      {/* Interactive Demo & Registration Modal */}
      <ModalDemo
        isOpen={demoOpen}
        onClose={handleCloseDemo}
        selectedPlan={selectedPlan}
      />
    </main>
  );
}
