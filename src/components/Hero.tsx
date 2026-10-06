'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowRight, Play, Sparkles, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  onOpenDemo?: () => void;
}

export default function Hero({ onOpenDemo }: HeroProps) {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[620px] pointer-events-none hero-glow -z-10" />
      <div className="absolute top-24 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-brand-500/[0.07] blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Centered Content */}
        <div className="text-center max-w-3xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-50 border border-brand-200/80 text-brand-700 text-xs sm:text-sm font-medium mb-6 shadow-soft-sm animate-in fade-in slide-in-from-bottom-2 duration-500">
            <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse" />
            <span>Built for modern learning centers</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-charcoal-900 leading-[1.12] mb-6">
            Smarter Management for{' '}
            <span className="text-brand-500 relative inline-block">
              Modern Bimbels
            </span>
          </h1>

          {/* Supporting text */}
          <p className="text-lg sm:text-xl text-charcoal-100 font-normal leading-relaxed mb-9 max-w-2xl mx-auto">
            Kelola kelas, siswa, pembayaran, cabang, dan tentor dalam satu platform yang sederhana.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 mb-14">
            <a
              href="#pricing"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-brand-500 hover:bg-brand-600 text-white font-semibold text-base shadow-soft hover:shadow-brand-glow transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Mulai dengan Cressco</span>
              <ArrowRight size={18} />
            </a>
            <button
              onClick={onOpenDemo}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-surface-100 text-charcoal-900 font-medium text-base border border-black/[0.09] shadow-soft-sm transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
            >
              <Play size={16} className="text-brand-500 fill-brand-500" />
              <span>Lihat Demo</span>
            </button>
          </div>
        </div>

        {/* Hero Product Screenshot Frame (Trackio style treatment) */}
        <div className="relative mt-2 max-w-5xl mx-auto">
          {/* Subtle glow behind product card */}
          <div className="absolute -inset-1.5 bg-gradient-to-b from-brand-500/20 via-brand-500/5 to-transparent rounded-3xl blur-xl opacity-75 -z-10" />

          <div className="relative rounded-2xl md:rounded-3xl border border-black/[0.08] bg-white p-2 sm:p-3 md:p-4 shadow-soft-xl">
            {/* Window header simulation for clean SaaS look */}
            <div className="flex items-center justify-between px-3 py-2 border-b border-black/[0.05] mb-2 md:mb-3 bg-surface-50 rounded-t-xl">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#FF5F56] border border-black/10" />
                <div className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-black/10" />
                <div className="w-3 h-3 rounded-full bg-[#27C93F] border border-black/10" />
              </div>
              <div className="flex items-center gap-2 px-3 py-1 bg-white rounded-md border border-black/[0.06] text-xs font-mono text-charcoal-100">
                <span className="text-brand-500">https://</span>app.cressco.id/dashboard
              </div>
              <div className="text-xs text-charcoal-50 font-medium hidden sm:block">
                Cressco OS v2.4
              </div>
            </div>

            {/* Actual Cressco Dashboard Image */}
            <div className="relative w-full aspect-[16/9] sm:aspect-[16/8.8] rounded-xl overflow-hidden bg-surface-100 border border-black/[0.04]">
              <Image
                src="/images/cressco-dashboard.png"
                alt="Cressco Bimbel Executive Dashboard"
                fill
                priority
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1100px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
