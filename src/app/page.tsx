'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import SocialProof from '@/components/SocialProof';
import CoreFeatures from '@/components/CoreFeatures';
import RoleExperience from '@/components/RoleExperience';
import PricingSection from '@/components/PricingSection';
import RealOperations from '@/components/RealOperations';
import WorkflowSection from '@/components/WorkflowSection';
import FaqSection from '@/components/FaqSection';
import FinalCta from '@/components/FinalCta';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-[#FAFAF9] selection:bg-brand-100 selection:text-brand-900">
      {/* 1. Navbar */}
      <Navbar />

      {/* 2. Hero Section */}
      <Hero />

      {/* 3. Social Proof Client Logos Marquee */}
      <SocialProof />

      {/* 4. Core Features */}
      <CoreFeatures />

      {/* 5. Role-Based Experience */}
      <RoleExperience />

      {/* 6. Pricing */}
      <PricingSection />

      {/* 8. Real Bimbel Operations */}
      <RealOperations />

      {/* 9. Workflow Organization */}
      <WorkflowSection />

      {/* FAQ Section */}
      <FaqSection />

      {/* 10. Final CTA */}
      <FinalCta />

      {/* 11. Footer */}
      <Footer />
    </main>
  );
}
