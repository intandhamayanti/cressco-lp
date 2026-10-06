'use client';

import React from 'react';
import { Star } from 'lucide-react';

export default function SocialProof() {
  return (
    <section className="py-10 border-y border-black/[0.06] bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          
          {/* Avatar stack + Rating + Social proof label */}
          <div className="flex items-center gap-3.5 shrink-0">
            {/* Avatars */}
            <div className="flex -space-x-2 overflow-hidden">
              <div className="inline-block h-9 w-9 rounded-full ring-2 ring-white bg-amber-600 text-white font-bold text-xs flex items-center justify-center">
                BP
              </div>
              <div className="inline-block h-9 w-9 rounded-full ring-2 ring-white bg-slate-700 text-white font-bold text-xs flex items-center justify-center">
                SN
              </div>
              <div className="inline-block h-9 w-9 rounded-full ring-2 ring-white bg-brand-600 text-white font-bold text-xs flex items-center justify-center">
                RA
              </div>
              <div className="inline-block h-9 w-9 rounded-full ring-2 ring-white bg-emerald-600 text-white font-bold text-xs flex items-center justify-center">
                DW
              </div>
            </div>

            {/* Stars & Text */}
            <div>
              <div className="flex items-center gap-0.5 text-amber-500 mb-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-xs font-semibold text-charcoal-900">
                Dipercaya 500+ Bimbel di Indonesia
              </p>
            </div>
          </div>

          {/* Clean B2B Partner Logos (Trackio Style) */}
          <div className="flex flex-wrap items-center justify-center lg:justify-end gap-7 sm:gap-10 opacity-70 hover:opacity-90 transition-opacity">
            
            {/* Logo 1: Prime Academy */}
            <div className="flex items-center gap-2 text-charcoal-900 font-bold text-sm tracking-tight grayscale hover:grayscale-0 transition-all">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2.5" />
                <path d="M12 6V18M6 12H18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
              <span className="tracking-wide uppercase font-extrabold text-xs">Prime Academy</span>
            </div>

            {/* Logo 2: EduVerse */}
            <div className="flex items-center gap-2 text-charcoal-900 font-bold text-sm tracking-tight grayscale hover:grayscale-0 transition-all">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="3" y="3" width="18" height="18" rx="4" stroke="currentColor" strokeWidth="2.5" />
                <circle cx="12" cy="12" r="4" fill="currentColor" />
              </svg>
              <span className="tracking-wide uppercase font-extrabold text-xs">EduVerse Hub</span>
            </div>

            {/* Logo 3: Sinergi Belajar */}
            <div className="flex items-center gap-2 text-charcoal-900 font-bold text-sm tracking-tight grayscale hover:grayscale-0 transition-all">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="tracking-wide uppercase font-extrabold text-xs">Sinergi Belajar</span>
            </div>

            {/* Logo 4: NeoCampus */}
            <div className="flex items-center gap-2 text-charcoal-900 font-bold text-sm tracking-tight grayscale hover:grayscale-0 transition-all">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 9L12 2L21 9V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V9Z" stroke="currentColor" strokeWidth="2.2" />
                <path d="M9 21V12H15V21" stroke="currentColor" strokeWidth="2.2" />
              </svg>
              <span className="tracking-wide uppercase font-extrabold text-xs">NeoCampus</span>
            </div>

            {/* Logo 5: Talenta Bimbel */}
            <div className="flex items-center gap-2 text-charcoal-900 font-bold text-sm tracking-tight grayscale hover:grayscale-0 transition-all hidden sm:flex">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="tracking-wide uppercase font-extrabold text-xs">Talenta Bimbel</span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
