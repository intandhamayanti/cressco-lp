'use client';

import React from 'react';
import Image from 'next/image';
import { Check, Zap } from 'lucide-react';

const APP_LOGIN_URL = 'https://app-cressco.vercel.app/login';

export default function FinalCta() {
  return (
    <section className="py-16 sm:py-24 bg-[#FAFAF9] relative overflow-hidden font-sans border-t border-black/[0.04]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 2-Column Banner Container (Reference Style) */}
        <div className="relative rounded-3xl bg-[#FDF7F4] border border-[#F4D9CF] shadow-[0_16px_45px_-12px_rgba(206,72,42,0.12)] overflow-hidden grid grid-cols-1 lg:grid-cols-12 items-center">
          
          {/* Left Column: Headline, Copy, Checklist & Action */}
          <div className="lg:col-span-6 p-7 sm:p-10 lg:p-12 z-10">
            
            {/* Section Badge */}
            <span className="font-mono text-xs uppercase tracking-wider font-bold text-brand-600 mb-3.5 inline-block">
              /08 MULAI SEKARANG
            </span>

            {/* Main Headline */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-charcoal-900 leading-[1.2] mb-3.5">
              Siap Tingkatkan Efisiensi Bimbel Anda?
            </h2>

            {/* Concise Subtitle */}
            <p className="text-xs sm:text-sm md:text-base text-charcoal-100 font-normal leading-relaxed mb-6 max-w-lg">
              Sederhanakan seluruh alur operasional bimbel Anda dari manajemen siswa, jadwal, presensi, hingga rekonsiliasi SPP dalam satu platform modern.
            </p>

            {/* 3 Value Checkpoints */}
            <div className="space-y-3 mb-7">
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-md bg-charcoal-900 text-white flex items-center justify-center shrink-0 shadow-sm">
                  <Check size={12} strokeWidth={3} />
                </div>
                <span className="text-xs sm:text-[13px] font-semibold text-charcoal-900">
                  Bebas rekap spreadsheet & presensi manual yang rawan hilang
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-md bg-charcoal-900 text-white flex items-center justify-center shrink-0 shadow-sm">
                  <Check size={12} strokeWidth={3} />
                </div>
                <span className="text-xs sm:text-[13px] font-semibold text-charcoal-900">
                  Hemat hingga 20+ jam kerja operasional admin per bulan
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-md bg-charcoal-900 text-white flex items-center justify-center shrink-0 shadow-sm">
                  <Check size={12} strokeWidth={3} />
                </div>
                <span className="text-xs sm:text-[13px] font-semibold text-charcoal-900">
                  Tagihan SPP & invoice digital terkirim otomatis via WhatsApp
                </span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={APP_LOGIN_URL}
                className="inline-flex items-center gap-2 px-6 sm:px-7 py-3 rounded-xl bg-charcoal-900 hover:bg-black text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer"
              >
                <Zap size={15} className="text-amber-400 fill-amber-400 shrink-0" />
                <span>Try for free</span>
              </a>
              <a
                href={APP_LOGIN_URL}
                className="inline-flex items-center gap-1.5 px-5 sm:px-6 py-3 rounded-xl bg-white hover:bg-stone-50 text-charcoal-900 font-semibold text-xs sm:text-sm border border-stone-200/90 shadow-sm hover:-translate-y-0.5 active:translate-y-0 transition-all"
              >
                <span>Login</span>
              </a>
            </div>

          </div>

          {/* Right Column: Layered Terracotta Backdrop with Real Cressco Dashboard */}
          <div className="lg:col-span-6 relative h-full min-h-[280px] sm:min-h-[360px] lg:min-h-[460px] flex items-end justify-end pl-6 sm:pl-10 lg:pl-0 pt-6 lg:pt-8">
            
            {/* Terracotta Brand Frame Backdrop */}
            <div className="w-full h-full bg-[#CE482A] bg-gradient-to-br from-[#D94E2F] via-[#CE482A] to-[#B33519] rounded-tl-3xl lg:rounded-tl-[36px] p-4 sm:p-6 lg:p-7 flex items-end justify-end shadow-[-12px_12px_36px_-10px_rgba(206,72,42,0.25)]">
              
              {/* Inner Dashboard Card Mockup with Smooth Elevation */}
              <div className="w-full max-w-[500px] rounded-2xl bg-white shadow-2xl border border-white/90 overflow-hidden -mr-4 -mb-4 sm:-mr-6 sm:-mb-6 lg:-mr-10 lg:-mb-8 transition-transform duration-500 hover:scale-[1.01]">
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

      </div>
    </section>
  );
}
