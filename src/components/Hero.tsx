'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

const APP_LOGIN_URL = 'https://app-cressco.vercel.app/login';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-[#FAFAF9]">
      
      {/* Pure Subtle Minimalist Ambient Glow (100% Clean CSS - No Background Images) */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden select-none">
        {/* Soft top ambient radial glow */}
        <div 
          className="absolute -top-40 left-1/2 -translate-x-1/2 w-[1100px] h-[600px] pointer-events-none opacity-75"
          style={{
            background: 'radial-gradient(ellipse 900px 500px at 50% 20%, rgba(206, 72, 42, 0.09) 0%, rgba(206, 72, 42, 0.02) 45%, transparent 75%)',
          }}
        />

        {/* Delicate subtle dot texture for premium feel */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.25]" />

        {/* Soft warmth behind product dashboard */}
        <div className="absolute top-[40%] left-1/2 -translate-x-1/2 w-[750px] h-[380px] bg-brand-500/[0.05] blur-[130px] rounded-full pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Centered Content */}
        <div className="text-center max-w-4xl mx-auto pt-2 sm:pt-4">
          
          {/* Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-charcoal-900 leading-[1.08] mb-6">
            Smarter Management for{' '}
            <span className="text-brand-500 relative inline-block">
              Modern Bimbels
            </span>
          </h1>

          {/* Supporting Text */}
          <p className="text-base sm:text-xl text-charcoal-100 font-normal leading-relaxed mb-9 max-w-2xl mx-auto">
            Kelola kelas, siswa, pembayaran, cabang, dan tentor dalam satu platform yang sederhana.
          </p>

          {/* Primary Action Button */}
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
          <div className="absolute -inset-2 bg-gradient-to-b from-brand-500/20 via-brand-500/5 to-transparent rounded-3xl blur-2xl opacity-75 -z-10" />

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
