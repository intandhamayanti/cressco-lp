'use client';

import React from 'react';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';

const APP_LOGIN_URL = 'https://app-cressco.vercel.app/login';

export default function FinalCta() {
  return (
    <section className="py-20 sm:py-28 bg-[#FAFAF9] relative overflow-hidden font-sans">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Premium Glowing Banner Card */}
        <div className="relative rounded-3xl bg-gradient-to-br from-[#D94E2F] via-[#CE482A] to-[#9E2A12] text-white p-8 sm:p-12 md:p-14 text-center shadow-[0_24px_60px_-15px_rgba(206,72,42,0.38)] overflow-hidden border border-white/20">
          
          {/* Subtle Ambient Glows & Grid */}
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[550px] h-[350px] bg-white/[0.14] rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute -bottom-24 -right-16 w-80 h-80 bg-black/20 rounded-full blur-[80px] pointer-events-none" />
          <div className="absolute inset-0 bg-grid-pattern opacity-10 mix-blend-overlay pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto">
            
            {/* Minimalist Section Badge */}
            <span className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider font-bold text-white/90 bg-white/15 backdrop-blur-md px-3.5 py-1 rounded-full border border-white/25 mb-4 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-300 animate-pulse" />
              /08 MULAI SEKARANG
            </span>

            {/* Headline */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white mb-3 leading-tight">
              Siap Otomatisasi Operasional Bimbel Anda?
            </h2>

            {/* Concise Supporting Copy */}
            <p className="text-sm sm:text-base text-white/90 font-normal leading-relaxed mb-8 max-w-lg mx-auto">
              Tinggalkan cara manual. Kelola jadwal, presensi, hingga tagihan SPP dalam satu platform modern yang terhubung langsung.
            </p>

            {/* CTA Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-3.5">
              <a
                href={APP_LOGIN_URL}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-white text-brand-700 hover:bg-stone-100 font-bold text-sm sm:text-base shadow-[0_8px_25px_rgba(0,0,0,0.2)] hover:shadow-2xl hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer"
              >
                <span>Try for free</span>
                <ArrowUpRight size={16} strokeWidth={2.5} className="text-brand-600" />
              </a>
              <a
                href={APP_LOGIN_URL}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-sm sm:text-base border border-white/25 backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Login</span>
              </a>
            </div>

            {/* Micro Assurances Bar */}
            <div className="flex flex-wrap items-center justify-center gap-y-2 gap-x-6 mt-8 pt-6 border-t border-white/15 text-[11px] sm:text-xs text-white/85 font-medium">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 size={13} className="text-white/90 shrink-0" />
                <span>Setup Cepat 5 Menit</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 size={13} className="text-white/90 shrink-0" />
                <span>Tanpa Biaya Tersembunyi</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 size={13} className="text-white/90 shrink-0" />
                <span>WhatsApp Pendampingan</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
