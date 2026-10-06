'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

const APP_LOGIN_URL = 'https://app-cressco.vercel.app/login';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      
      {/* 100% Full-Width Seamless Canvas Background (Ultra-Wide Obliq Radiant Style) */}
      <div className="absolute inset-0 w-full h-[950px] lg:h-[1150px] pointer-events-none z-0 select-none overflow-hidden">
        <img
          src="/images/hero-bg-radiant.jpg?v=2"
          alt="Radiant Hero Background"
          className="w-full h-full object-cover object-top opacity-90 block"
        />
        {/* Smooth progressive bottom gradient fade into page canvas */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent via-65% to-[#FAFAF9]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Centered Content (No Badge, Big Bold Typography) */}
        <div className="text-center max-w-4xl mx-auto pt-2 sm:pt-4">
          
          {/* Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-charcoal-900 leading-[1.08] mb-6">
            Smarter Management for{' '}
            <span className="text-brand-500 relative inline-block">
              Modern Bimbels
            </span>
          </h1>

          {/* Supporting Text */}
          <p className="text-base sm:text-xl text-charcoal-100 font-normal leading-relaxed mb-8 max-w-2xl mx-auto">
            Kelola kelas, siswa, pembayaran, cabang, dan tentor dalam satu platform yang sederhana.
          </p>

          {/* Primary Action Button (Obliq Style Single Prominent Button) */}
          <div className="flex items-center justify-center mb-14 sm:mb-16">
            <a
              href={APP_LOGIN_URL}
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 sm:py-4 rounded-xl bg-brand-500 hover:bg-brand-600 text-white font-semibold text-base sm:text-lg shadow-soft hover:shadow-brand-glow transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              <span>Mulai dengan Cressco</span>
              <ArrowUpRight size={20} strokeWidth={2.5} />
            </a>
          </div>

        </div>

        {/* Hero Product Screenshot Frame (Full Uncropped Dashboard Image) */}
        <div className="relative mt-2 max-w-5xl mx-auto">
          {/* Ambient Glow behind frame */}
          <div className="absolute -inset-3 bg-gradient-to-b from-brand-500/25 via-brand-500/10 to-transparent rounded-3xl blur-2xl opacity-90 -z-10" />

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
