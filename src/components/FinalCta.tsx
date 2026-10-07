'use client';

import React from 'react';
import Image from 'next/image';
import { Check, ArrowUpRight } from 'lucide-react';

const APP_LOGIN_URL = 'https://app-cressco.vercel.app/login';

export default function FinalCta() {
  return (
    <section className="py-16 sm:py-24 bg-[#FAFAF9] relative overflow-hidden font-sans border-t border-black/[0.04]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Banner Card (Soft Light Background matching reference) */}
        <div className="relative rounded-3xl sm:rounded-[32px] bg-[#FDF6F2] border border-[#ECD7CE] shadow-[0_12px_40px_-15px_rgba(206,72,42,0.1)] overflow-hidden grid grid-cols-1 lg:grid-cols-12 items-stretch min-h-[460px]">
          
          {/* Left Column: Breathable Headline, Short Copy, Checklist & Cressco Button */}
          <div className="lg:col-span-6 p-7 sm:p-10 lg:p-14 flex flex-col justify-center z-10">
            
            {/* Section Badge */}
            <span className="font-mono text-xs uppercase tracking-wider font-bold text-brand-600 mb-3 block">
              /08 MULAI SEKARANG
            </span>

            {/* Main Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-charcoal-900 leading-[1.15] mb-3.5">
              Siap Tingkatkan Efisiensi Bimbel Anda?
            </h2>

            {/* Breathable Subtitle */}
            <p className="text-sm text-charcoal-100 font-normal leading-relaxed mb-6 max-w-md">
              Satukan data siswa, jadwal, presensi, hingga tagihan SPP dalam satu sistem terpadu yang otomatis dan mudah digunakan.
            </p>

            {/* 3 Value Bullet Points (Black rounded boxes like reference) */}
            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-md bg-charcoal-900 text-white flex items-center justify-center shrink-0 shadow-xs">
                  <Check size={12} strokeWidth={3} />
                </div>
                <span className="text-xs sm:text-sm font-semibold text-charcoal-900">
                  Bebas rekap spreadsheet manual
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-md bg-charcoal-900 text-white flex items-center justify-center shrink-0 shadow-xs">
                  <Check size={12} strokeWidth={3} />
                </div>
                <span className="text-xs sm:text-sm font-semibold text-charcoal-900">
                  Hemat 20+ jam kerja admin per bulan
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-md bg-charcoal-900 text-white flex items-center justify-center shrink-0 shadow-xs">
                  <Check size={12} strokeWidth={3} />
                </div>
                <span className="text-xs sm:text-sm font-semibold text-charcoal-900">
                  Tagihan SPP otomatis via WhatsApp
                </span>
              </div>
            </div>

            {/* Action Buttons (Strict Cressco Brand Identity) */}
            <div className="flex flex-wrap items-center gap-3.5">
              <a
                href={APP_LOGIN_URL}
                className="inline-flex items-center gap-1.5 px-6 sm:px-7 py-3 rounded-full bg-gradient-to-r from-brand-500 to-brand-600 hover:from-brand-600 hover:to-brand-700 active:from-brand-700 text-white font-bold text-xs sm:text-sm shadow-sm hover:shadow-brand-glow hover:-translate-y-0.5 active:translate-y-0 transition-all border border-brand-400/30 cursor-pointer"
              >
                <span>Try for free</span>
                <ArrowUpRight size={14} className="text-white/90" />
              </a>
              <a
                href={APP_LOGIN_URL}
                className="inline-flex items-center px-5 sm:px-6 py-3 rounded-full bg-white hover:bg-stone-50 text-charcoal-900 font-semibold text-xs sm:text-sm border border-stone-200/90 shadow-2xs hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer"
              >
                <span>Login</span>
              </a>
            </div>

          </div>

          {/* Right Column: Framed Terracotta Canvas with Zoomed Top-Left Dashboard Mockup */}
          <div className="lg:col-span-6 relative min-h-[320px] sm:min-h-[380px] lg:min-h-full flex items-end justify-end">
            
            {/* Terracotta Framed Canvas (Doesn't fill 100% height, framed with rounded-tl like reference) */}
            <div className="w-full h-[92%] sm:h-[94%] bg-[#CE482A] bg-gradient-to-br from-[#D94E2F] via-[#CE482A] to-[#B33519] rounded-tl-[36px] sm:rounded-tl-[44px] relative overflow-hidden shadow-[-10px_10px_32px_-8px_rgba(206,72,42,0.22)]">
              
              {/* Zoomed Dashboard Mockup - Showing Top-Left Corner prominently */}
              <div className="absolute top-6 left-6 sm:top-8 sm:left-8 lg:top-9 lg:left-9 w-[860px] sm:w-[940px] lg:w-[1020px] max-w-none rounded-2xl bg-white shadow-2xl border border-white/80 overflow-hidden select-none pointer-events-none">
                <Image
                  src="/images/cressco-dashboard-cta.png"
                  alt="Cressco Executive Dashboard Preview"
                  width={1200}
                  height={650}
                  className="w-full h-auto object-cover object-top"
                  priority
                />
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
