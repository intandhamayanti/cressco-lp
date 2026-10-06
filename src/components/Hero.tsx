'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const APP_LOGIN_URL = 'https://app-cressco.vercel.app/login';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      
      {/* Editorial High-End SaaS Background (Trackio / Linear style architectural mesh) */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        {/* Top radial ambient glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[550px] bg-gradient-to-b from-brand-500/10 via-brand-500/[0.03] to-transparent blur-[90px] rounded-full" />
        
        {/* Subtle geometric dot matrix */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.45]" />

        {/* Crisp vector network lines & nodes (Trackio architectural aesthetic) */}
        <svg
          className="absolute top-8 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] opacity-[0.09] text-brand-700"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 1200 600"
        >
          <path
            d="M100 120 H 450 V 280 H 750 V 120 H 1100"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeDasharray="4 4"
          />
          <path
            d="M200 400 H 500 V 280 H 700 V 400 H 1000"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <circle cx="450" cy="120" r="4" fill="currentColor" />
          <circle cx="750" cy="120" r="4" fill="currentColor" />
          <circle cx="500" cy="280" r="5" fill="currentColor" />
          <circle cx="700" cy="280" r="5" fill="currentColor" />
          <circle cx="200" cy="400" r="4" fill="currentColor" />
          <circle cx="1000" cy="400" r="4" fill="currentColor" />
        </svg>

        {/* Ambient warmth behind product card */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/4 w-[680px] h-[340px] bg-brand-500/[0.08] blur-[120px] rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Centered Content */}
        <div className="text-center max-w-3xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-50/90 border border-brand-200/80 text-brand-700 text-xs sm:text-sm font-medium mb-6 shadow-soft-sm backdrop-blur-sm">
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

          {/* CTA - Direct link to Laravel app */}
          <div className="flex items-center justify-center gap-3.5 mb-14">
            <a
              href={APP_LOGIN_URL}
              className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl bg-brand-500 hover:bg-brand-600 text-white font-semibold text-base shadow-soft hover:shadow-brand-glow transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Mulai dengan Cressco</span>
              <ArrowRight size={18} />
            </a>
          </div>
        </div>

        {/* Hero Product Screenshot Frame (Full Uncropped Dashboard Image) */}
        <div className="relative mt-2 max-w-5xl mx-auto">
          {/* Ambient Glow behind frame */}
          <div className="absolute -inset-2 bg-gradient-to-b from-brand-500/15 via-brand-500/5 to-transparent rounded-3xl blur-2xl opacity-80 -z-10" />

          <div className="relative rounded-2xl md:rounded-3xl border border-black/[0.08] bg-white p-2 sm:p-3 md:p-3.5 shadow-soft-xl">
            {/* macOS / Web App Top Bar */}
            <div className="flex items-center justify-between px-3 py-2 border-b border-black/[0.05] mb-2 bg-surface-50 rounded-t-xl">
              <div className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56] border border-black/10" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E] border border-black/10" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F] border border-black/10" />
              </div>
              <div className="flex items-center gap-1.5 px-3 py-0.5 bg-white rounded-md border border-black/[0.06] text-xs font-mono text-charcoal-100">
                <span className="text-brand-500">https://</span>app-cressco.vercel.app/dashboard
              </div>
              <div className="text-[11px] text-charcoal-50 font-medium hidden sm:block">
                Cressco OS v2.4
              </div>
            </div>

            {/* Complete Full Dashboard Image (Natural dimensions, no cropping) */}
            <div className="relative w-full rounded-xl overflow-hidden bg-[#F8F9FA] border border-black/[0.04]">
              <Image
                src="/images/cressco-dashboard.png"
                alt="Cressco Bimbel Executive Dashboard"
                width={1280}
                height={720}
                priority
                className="w-full h-auto block object-contain"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 95vw, 1150px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
