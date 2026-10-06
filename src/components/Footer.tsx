'use client';

import React from 'react';
import Link from 'next/link';

const APP_LOGIN_URL = 'https://app-cressco.vercel.app/login';

export default function Footer() {
  return (
    <footer className="relative bg-[#CE482A] bg-gradient-to-b from-[#D44D2F] via-[#CE482A] to-[#B33519] text-white overflow-hidden border-t border-[#DE8C7B]/30 font-sans">
      {/* Subtle Ambient Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 left-1/4 w-[500px] h-[350px] bg-white/10 rounded-full blur-[100px]" />
        <div className="absolute -bottom-20 right-10 w-[450px] h-[450px] bg-[#682213]/40 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-grid-pattern opacity-10 mix-blend-overlay" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-16 sm:pt-20 pb-6 sm:pb-8">
        
        {/* Top Content Row: Brand statement & Nav columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 pb-12 sm:pb-16 border-b border-white/15">
          
          {/* Brand Info (Left Column) */}
          <div className="lg:col-span-5 max-w-md">
            <a href={APP_LOGIN_URL} className="inline-flex items-center gap-3 mb-4 group">
              <div className="w-9 h-9 rounded-xl bg-white flex items-center justify-center p-1.5 shadow-md group-hover:scale-105 transition-transform duration-200">
                <img
                  src="/images/cressco-logo.png"
                  alt="Cressco Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-2xl font-bold tracking-tight text-white">
                Cressco
              </span>
            </a>
            
            <p className="text-sm sm:text-[15px] text-brand-100 font-normal leading-relaxed mb-6">
              Sistem operasional dan manajemen bimbel modern terpadu. Kelola multi-cabang, jadwal kelas, absensi tutor & siswa, serta laporan keuangan dalam satu platform.
            </p>

            <p className="text-xs text-brand-200/90 tracking-wide">
              © 2026 Cressco. Hak cipta dilindungi.
            </p>
          </div>

          {/* Links Columns (Right Columns) */}
          <div className="lg:col-span-7 grid grid-cols-3 gap-6 sm:gap-8">
            
            {/* 1. Produk */}
            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 text-white/90">
                Produk
              </h4>
              <ul className="space-y-3 text-sm text-brand-100">
                <li>
                  <Link href="#features" className="hover:text-white hover:underline transition-colors">
                    Fitur Utama
                  </Link>
                </li>
                <li>
                  <Link href="#roles" className="hover:text-white hover:underline transition-colors">
                    Akses Role
                  </Link>
                </li>
                <li>
                  <Link href="#workflow" className="hover:text-white hover:underline transition-colors">
                    Alur Operasional
                  </Link>
                </li>
                <li>
                  <Link href="#pricing" className="hover:text-white hover:underline transition-colors">
                    Paket & Harga
                  </Link>
                </li>
              </ul>
            </div>

            {/* 2. Solusi */}
            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 text-white/90">
                Solusi
              </h4>
              <ul className="space-y-3 text-sm text-brand-100">
                <li>
                  <Link href="#roles" className="hover:text-white hover:underline transition-colors">
                    Untuk Owner
                  </Link>
                </li>
                <li>
                  <Link href="#roles" className="hover:text-white hover:underline transition-colors">
                    Untuk Admin Cabang
                  </Link>
                </li>
                <li>
                  <Link href="#roles" className="hover:text-white hover:underline transition-colors">
                    Untuk Tutor
                  </Link>
                </li>
                <li>
                  <a href={APP_LOGIN_URL} className="hover:text-white hover:underline transition-colors">
                    Multi-Cabang
                  </a>
                </li>
              </ul>
            </div>

            {/* 3. Layanan */}
            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 text-white/90">
                Layanan
              </h4>
              <ul className="space-y-3 text-sm text-brand-100">
                <li>
                  <a href={APP_LOGIN_URL} className="hover:text-white hover:underline transition-colors">
                    Masuk Dashboard
                  </a>
                </li>
                <li>
                  <Link href="#faq" className="hover:text-white hover:underline transition-colors">
                    Tanya Jawab (FAQ)
                  </Link>
                </li>
                <li>
                  <a 
                    href="https://wa.me/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:text-white hover:underline transition-colors inline-flex items-center gap-1.5"
                  >
                    <span>Hubungi CS</span>
                  </a>
                </li>
                <li>
                  <a href={APP_LOGIN_URL} className="hover:text-white hover:underline transition-colors">
                    Privasi Data
                  </a>
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* Bottom Giant Static CRESSCO Typography (Pojok Kanan, Bold, Gede, Diem) */}
        <div className="pt-6 sm:pt-8 select-none flex justify-end">
          <h2 className="text-[14vw] sm:text-[15vw] md:text-[16vw] font-black uppercase tracking-[-0.05em] leading-[0.8] text-right text-white/90 drop-shadow-[0_4px_24px_rgba(0,0,0,0.15)]">
            CRESSCO
          </h2>
        </div>

      </div>
    </footer>
  );
}
