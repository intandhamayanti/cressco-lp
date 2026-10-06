'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';

interface FinalCtaProps {
  onOpenAuth?: (mode: 'login' | 'register') => void;
}

export default function FinalCta({ onOpenAuth }: FinalCtaProps) {
  return (
    <section className="py-20 sm:py-28 bg-surface-50 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Glowing Box / Banner Container (Trackio style) */}
        <div className="relative rounded-3xl bg-white border border-brand-200/80 p-8 sm:p-14 md:p-16 text-center shadow-soft-xl overflow-hidden">
          
          {/* Subtle warm brand glow inside */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-48 bg-brand-500/[0.08] blur-3xl pointer-events-none rounded-full" />
          <div className="absolute -bottom-10 right-10 w-44 h-44 bg-brand-500/[0.05] blur-2xl pointer-events-none rounded-full" />

          <div className="relative z-10 max-w-2xl mx-auto">
            
            {/* Badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-50 border border-brand-200 text-brand-700 text-xs font-semibold mb-6">
              <Sparkles size={13} />
              <span>Modern Bimbel Operating Platform</span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-charcoal-900 leading-tight mb-5">
              Ready to Run Your Bimbel Smarter?
            </h2>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-charcoal-100 font-normal leading-relaxed mb-10 max-w-xl mx-auto">
              Stop juggling spreadsheets, chats, and scattered records. Bring your bimbel operations into one simple system with Cressco.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4">
              <button
                onClick={() => onOpenAuth?.('register')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-brand-500 hover:bg-brand-600 text-white font-semibold text-base shadow-soft hover:shadow-brand-glow transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Try for free</span>
                <ArrowRight size={18} />
              </button>
              <button
                onClick={() => onOpenAuth?.('login')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-white hover:bg-surface-100 text-charcoal-900 font-semibold text-base border border-black/[0.09] shadow-soft-sm transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Login</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
