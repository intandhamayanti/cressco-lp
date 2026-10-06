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
  const [authOpen, setAuthOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'register'>('register');
  const [selectedPlan, setSelectedPlan] = useState<string | undefined>(undefined);

  const handleOpenAuth = (mode: 'login' | 'register' = 'register', planId?: string) => {
    setAuthMode(mode);
    setSelectedPlan(planId);
    setAuthOpen(true);
  };

  const handleCloseAuth = () => {
    setAuthOpen(false);
    setSelectedPlan(undefined);
  };

  return (
    <main className="min-h-screen flex flex-col bg-[#FAFAF9] selection:bg-brand-100 selection:text-brand-900">
      {/* 1. Navbar */}
      <Navbar onOpenAuth={(mode) => handleOpenAuth(mode)} />

      {/* 2. Hero Section (with Full Uncropped Dashboard) */}
      <Hero onOpenAuth={(mode) => handleOpenAuth(mode)} />

      {/* 3. Social Proof Ecosystem Logos */}
      <SocialProof />

      {/* 4. Core Features */}
      <CoreFeatures />

      {/* 5. Role-Based Experience */}
      <RoleExperience />

      {/* 6. Security / Access Control */}
      <SecuritySection />

      {/* 7. Pricing */}
      <PricingSection onSelectPlan={(planId) => handleOpenAuth('register', planId)} />

      {/* 8. Real Bimbel Operations */}
      <RealOperations />

      {/* 9. Workflow Organization */}
      <WorkflowSection />

      {/* FAQ Section */}
      <FaqSection />

      {/* 10. Final CTA */}
      <FinalCta onOpenAuth={(mode) => handleOpenAuth(mode)} />

      {/* 11. Footer */}
      <Footer onOpenAuth={(mode) => handleOpenAuth(mode)} />

      {/* Interactive Login & Registration Modal */}
      <ModalDemo
        isOpen={authOpen}
        onClose={handleCloseAuth}
        initialMode={authMode}
        selectedPlan={selectedPlan}
      />
    </main>
  );
}
