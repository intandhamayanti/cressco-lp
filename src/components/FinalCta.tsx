'use client';

import React from 'react';
import Image from 'next/image';
import { Check, ArrowUpRight } from 'lucide-react';

const APP_LOGIN_URL = 'https://app-cressco.vercel.app/login';

export default function FinalCta() {
  return (
    <section className="py-20 sm:py-28 lg:py-32 bg-[#FAFAF9] relative overflow-hidden font-sans border-t border-black/[0.04]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Banner Card (Spacious & Breathable Architecture) */}
        <div className="relative rounded-3xl sm:rounded-[36px] bg-[#FDF6F2] border border-[#ECD7CE] shadow-[0_16px_50px_-20px_rgba(206,72,42,0.12)] overflow-hidden grid grid-cols-1 lg:grid-cols-12 items-stretch min-h-[480px] lg:min-h-[520px]">
          
          {/* Left Column: Spacious Headline, Copy, Checklist & Single Brand CTA */}
          <div className="lg:col-span-6 p-8 sm:p-12 lg:p-16 xl:p-18 flex flex-col justify-center z-10">
            
            {/* Section Badge */}
            <span className="font-mono text-xs uppercase tracking-wider font-bold text-brand-600 mb-4 block">
              /08 MULAI SEKARANG
            </span>

            {/* Main Headline (2 Clean Lines) */}
            <h2 className="text-2xl sm:text-3xl lg:text-[38px] xl:text-[40px] font-bold tracking-tight text-charcoal-900 leading-[1.2] mb-4 sm:mb-5 max-w-lg">
              Siap Tingkatkan Efisiensi<br className="hidden sm:inline" /> Bimbel Anda?
            </h2>

            {/* Breathable Subtitle */}
            <p className="text-sm sm:text-base text-charcoal-100 font-normal leading-relaxed mb-7 sm:mb-8 max-w-md">
              Satukan data siswa, jadwal, presensi, hingga tagihan SPP dalam satu sistem terpadu yang otomatis dan mudah digunakan.
            </p>

            {/* 3 Value Bullet Points (Spacious & Clean) */}
            <div className="space-y-3.5 mb-8 sm:mb-10">
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

            {/* Action Button: Single Prominent Cressco Brand CTA */}
            <div>
              <a
                href={APP_LOGIN_URL}
                className="inline-flex items-center gap-2 px-8 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-brand-500 to-brand-600 hover:from-brand-600 hover:to-brand-700 active:from-brand-700 text-white font-bold text-sm sm:text-base shadow-sm hover:shadow-brand-glow hover:-translate-y-0.5 active:translate-y-0 transition-all border border-brand-400/30 cursor-pointer w-fit"
              >
                <span>Try for free</span>
                <ArrowUpRight size={16} className="text-white/90" />
              </a>
            </div>

          </div>

          {/* Right Column: Framed Terracotta Canvas with Zoomed Top-Left Dashboard Mockup */}
          <div className="lg:col-span-6 relative min-h-[340px] sm:min-h-[420px] lg:min-h-full flex items-stretch justify-end">
            
            {/* Terracotta Framed Canvas: Starts below the top edge, flushes completely to the bottom edge */}
            <div className="w-full mt-5 sm:mt-7 lg:mt-9 bg-[#CE482A] bg-gradient-to-br from-[#D94E2F] via-[#CE482A] to-[#B33519] rounded-tl-[36px] sm:rounded-tl-[46px] rounded-tr-none rounded-b-none relative overflow-hidden shadow-[-10px_10px_35px_-8px_rgba(206,72,42,0.22)]">
              
              {/* Zoomed Dashboard Mockup - Top Left Corner rounded, Bottom straight/flush */}
              <div className="absolute top-6 left-6 sm:top-8 sm:left-8 lg:top-9 lg:left-9 w-[880px] sm:w-[980px] lg:w-[1060px] max-w-none rounded-tl-2xl rounded-tr-2xl rounded-b-none bg-white shadow-2xl border-t border-l border-white/80 overflow-hidden select-none pointer-events-none">
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
