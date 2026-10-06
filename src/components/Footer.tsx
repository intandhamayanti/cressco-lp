'use client';

import React from 'react';
import Link from 'next/link';

const APP_LOGIN_URL = 'https://app-cressco.vercel.app/login';

export default function Footer() {
  return (
    <footer className="relative bg-[#111113] text-white overflow-hidden border-t border-white/[0.08] font-sans">
      {/* Background Ambient Glow tailored to Cressco Brand (Warm Terracotta / Charcoal) */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Warm Cressco Brand Glow */}
        <div className="absolute -bottom-28 -right-20 w-[550px] h-[550px] bg-brand-500/15 rounded-full blur-[140px]" />
        <div className="absolute -bottom-36 left-1/4 w-[600px] h-[450px] bg-brand-600/10 rounded-full blur-[160px]" />
        <div className="absolute top-0 right-1/3 w-[350px] h-[250px] bg-white/[0.02] rounded-full blur-[100px]" />
        
        {/* Subtle grid texture */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-16 sm:pt-20 pb-6 sm:pb-10">
        
        {/* Top Content Row: Brand Statement & Structured Links */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 pb-14 sm:pb-20">
          
          {/* Brand Info & Tagline (Left Column) */}
          <div className="lg:col-span-5 max-w-md">
            <a href={APP_LOGIN_URL} className="inline-flex items-center gap-2.5 mb-4 group">
              <img
                src="/images/cressco-logo.png"
                alt="Cressco Logo"
                className="w-8 h-8 object-contain transition-transform group-hover:scale-105"
              />
              <span className="text-xl font-bold tracking-tight text-white">
                Cressco
              </span>
            </a>
            
            <p className="text-sm sm:text-[15px] text-zinc-400 font-normal leading-relaxed mb-6">
              Sistem operasional dan manajemen bimbel modern terpadu. Kelola multi-cabang, jadwal kelas, absensi tutor & siswa, serta laporan keuangan dalam satu platform.
            </p>

            <div className="flex flex-col gap-2">
              <div className="inline-flex items-center gap-2 text-xs text-zinc-400 font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Dirancang khusus untuk Bimbel Indonesia</span>
              </div>
              <p className="text-xs text-zinc-400">
                © 2026 Cressco. Hak cipta dilindungi.
              </p>
            </div>
          </div>

          {/* Links Columns (Right Columns) */}
          <div className="lg:col-span-7 grid grid-cols-3 gap-6 sm:gap-8">
            
            {/* 1. Produk */}
            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 text-zinc-200">
                Produk
              </h4>
              <ul className="space-y-3 text-sm text-zinc-400">
                <li>
                  <Link href="#features" className="hover:text-brand-400 transition-colors duration-150">
                    Fitur Utama
                  </Link>
                </li>
                <li>
                  <Link href="#roles" className="hover:text-brand-400 transition-colors duration-150">
                    Akses Role
                  </Link>
                </li>
                <li>
                  <Link href="#workflow" className="hover:text-brand-400 transition-colors duration-150">
                    Alur Operasional
                  </Link>
                </li>
                <li>
                  <Link href="#pricing" className="hover:text-brand-400 transition-colors duration-150">
                    Paket & Harga
                  </Link>
                </li>
              </ul>
            </div>

            {/* 2. Solusi */}
            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 text-zinc-200">
                Solusi
              </h4>
              <ul className="space-y-3 text-sm text-zinc-400">
                <li>
                  <Link href="#roles" className="hover:text-brand-400 transition-colors duration-150">
                    Untuk Owner
                  </Link>
                </li>
                <li>
                  <Link href="#roles" className="hover:text-brand-400 transition-colors duration-150">
                    Untuk Admin Cabang
                  </Link>
                </li>
                <li>
                  <Link href="#roles" className="hover:text-brand-400 transition-colors duration-150">
                    Untuk Tutor
                  </Link>
                </li>
                <li>
                  <a href={APP_LOGIN_URL} className="hover:text-brand-400 transition-colors duration-150">
                    Multi-Cabang
                  </a>
                </li>
              </ul>
            </div>

            {/* 3. Bantuan & Akun */}
            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 text-zinc-200">
                Layanan
              </h4>
              <ul className="space-y-3 text-sm text-zinc-400">
                <li>
                  <a href={APP_LOGIN_URL} className="hover:text-brand-400 transition-colors duration-150">
                    Masuk Dashboard
                  </a>
                </li>
                <li>
                  <Link href="#faq" className="hover:text-brand-400 transition-colors duration-150">
                    Tanya Jawab (FAQ)
                  </Link>
                </li>
                <li>
                  <a 
                    href="https://wa.me/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:text-brand-400 transition-colors duration-150 inline-flex items-center gap-1.5"
                  >
                    <span>Hubungi CS</span>
                  </a>
                </li>
                <li>
                  <a href={APP_LOGIN_URL} className="hover:text-brand-400 transition-colors duration-150">
                    Privasi Data
                  </a>
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* Bottom Giant Brand Typography + Cressco Dot Matrix Graphic */}
        <div className="pt-6 sm:pt-10 flex items-center justify-between border-t border-white/[0.08] select-none overflow-hidden">
          <div className="w-full flex items-center justify-between gap-4 sm:gap-8">
            
            {/* Giant CRESSCO Typography with subtle Cressco brand-tinted gradient */}
            <span className="font-extrabold tracking-[-0.04em] uppercase text-[12vw] sm:text-[13vw] lg:text-[14.5vw] leading-[0.82] bg-gradient-to-b from-white via-stone-200 to-brand-500/25 bg-clip-text text-transparent">
              CRESSCO
            </span>

            {/* Dot Matrix Arrow Graphic in Cressco Brand Glow */}
            <div className="shrink-0 flex items-center justify-center pl-2 sm:pl-6">
              <svg 
                className="w-14 h-14 sm:w-20 sm:h-20 md:w-28 md:h-28 lg:w-36 lg:h-36" 
                viewBox="0 0 150 150" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <radialGradient id="cresscoDotGlow" cx="35%" cy="35%" r="65%">
                    <stop offset="0%" stopColor="#FFFFFF" />
                    <stop offset="45%" stopColor="#F5DBD4" />
                    <stop offset="100%" stopColor="#CE482A" />
                  </radialGradient>
                </defs>

                {/* Diagonal Arrow Dot Matrix in Cressco Terracotta Glow */}
                {/* Row 1 (y=20): Top-Left and Top-Right */}
                <circle cx="20" cy="20" r="7.5" fill="url(#cresscoDotGlow)" fillOpacity="0.85" />
                <circle cx="128" cy="20" r="7.5" fill="url(#cresscoDotGlow)" fillOpacity="0.85" />

                {/* Row 2 (y=56): Diagonal and Right */}
                <circle cx="56" cy="56" r="8" fill="url(#cresscoDotGlow)" fillOpacity="0.9" />
                <circle cx="128" cy="56" r="8" fill="url(#cresscoDotGlow)" fillOpacity="0.9" />

                {/* Row 3 (y=92): Diagonal and Right */}
                <circle cx="92" cy="92" r="8.5" fill="url(#cresscoDotGlow)" fillOpacity="0.95" />
                <circle cx="128" cy="92" r="8.5" fill="url(#cresscoDotGlow)" fillOpacity="0.95" />

                {/* Row 4 (y=128): Full bottom row */}
                <circle cx="20" cy="128" r="7.5" fill="url(#cresscoDotGlow)" fillOpacity="0.85" />
                <circle cx="56" cy="128" r="8" fill="url(#cresscoDotGlow)" fillOpacity="0.9" />
                <circle cx="92" cy="128" r="8.5" fill="url(#cresscoDotGlow)" fillOpacity="0.95" />
                <circle cx="128" cy="128" r="9" fill="url(#cresscoDotGlow)" fillOpacity="1" />
              </svg>
            </div>

          </div>
        </div>

      </div>
    </footer>
  );
}
