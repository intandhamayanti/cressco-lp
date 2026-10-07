'use client';

import React from 'react';
import Image from 'next/image';
import { Check, Zap } from 'lucide-react';

const APP_LOGIN_URL = 'https://app-cressco.vercel.app/login';

export default function FinalCta() {
  return (
    <section className="py-16 sm:py-24 bg-[#FAFAF9] relative overflow-hidden font-sans border-t border-black/[0.04]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Banner Card (Exact Reference Architecture) */}
        <div className="relative rounded-3xl bg-[#F6ECE7]/70 border border-[#EBD6CC] shadow-sm overflow-hidden grid grid-cols-1 lg:grid-cols-12 items-stretch min-h-[440px]">
          
          {/* Left Column: Breathable Headline, Short Copy & Checklist */}
          <div className="lg:col-span-6 p-7 sm:p-10 lg:p-12 flex flex-col justify-center z-10">
            
            {/* Section Badge */}
            <span className="font-mono text-xs uppercase tracking-wider font-bold text-brand-600 mb-3 block">
              /08 MULAI SEKARANG
            </span>

            {/* Main Headline */}
            <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-bold tracking-tight text-charcoal-900 leading-[1.2] mb-3">
              Siap Tingkatkan Efisiensi Bimbel Anda?
            </h2>

            {/* Breathable & Concise Subtitle */}
            <p className="text-xs sm:text-sm text-charcoal-100 font-normal leading-relaxed mb-6 max-w-md">
              Satukan data siswa, jadwal, presensi, hingga tagihan SPP dalam satu sistem terpadu yang otomatis dan mudah digunakan.
            </p>

            {/* 3 Short Value Bullet Points */}
            <div className="space-y-2.5 mb-7">
              <div className="flex items-center gap-2.5">
                <div className="w-5 h-5 rounded-md bg-charcoal-900 text-white flex items-center justify-center shrink-0 shadow-xs">
                  <Check size={12} strokeWidth={3} />
                </div>
                <span className="text-xs sm:text-[13px] font-semibold text-charcoal-900">
                  Bebas rekap spreadsheet manual
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-5 h-5 rounded-md bg-charcoal-900 text-white flex items-center justify-center shrink-0 shadow-xs">
                  <Check size={12} strokeWidth={3} />
                </div>
                <span className="text-xs sm:text-[13px] font-semibold text-charcoal-900">
                  Hemat 20+ jam kerja admin per bulan
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-5 h-5 rounded-md bg-charcoal-900 text-white flex items-center justify-center shrink-0 shadow-xs">
                  <Check size={12} strokeWidth={3} />
                </div>
                <span className="text-xs sm:text-[13px] font-semibold text-charcoal-900">
                  Tagihan SPP otomatis via WhatsApp
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-3">
              <a
                href={APP_LOGIN_URL}
                className="inline-flex items-center gap-2 px-6 sm:px-7 py-3 rounded-xl bg-charcoal-900 hover:bg-black text-white font-bold text-xs sm:text-sm shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer"
              >
                <Zap size={14} className="text-amber-400 fill-amber-400 shrink-0" />
                <span>Try for free</span>
              </a>
              <a
                href={APP_LOGIN_URL}
                className="inline-flex items-center px-5 sm:px-6 py-3 rounded-xl bg-white hover:bg-stone-50 text-charcoal-900 font-semibold text-xs sm:text-sm border border-stone-200/90 shadow-2xs hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer"
              >
                <span>Login</span>
              </a>
            </div>

          </div>

          {/* Right Column: Solid Terracotta Canvas with Bleeding Dashboard Corner (Reference) */}
          <div className="lg:col-span-6 relative min-h-[300px] sm:min-h-[380px] lg:min-h-full bg-[#CE482A] overflow-hidden rounded-b-3xl lg:rounded-b-none lg:rounded-l-3xl">
            
            {/* Dashboard Mockup - Top Left Corner Anchor peeking into view */}
            <div className="absolute top-6 left-6 sm:top-8 sm:left-8 lg:top-9 lg:left-9 w-[600px] sm:w-[680px] lg:w-[740px] max-w-none rounded-2xl bg-white shadow-2xl border border-white/70 overflow-hidden select-none pointer-events-none">
              <Image
                src="/images/cressco-dashboard-cta.png"
                alt="Cressco Executive Dashboard Preview"
                width={1080}
                height={580}
                className="w-full h-auto object-cover object-top"
                priority
              />
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
