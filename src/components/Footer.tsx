'use client';

import React from 'react';
import Link from 'next/link';

const APP_LOGIN_URL = 'https://app-cressco.vercel.app/login';

export default function Footer() {
  return (
    <footer className="relative bg-[#05060B] text-white overflow-hidden border-t border-white/[0.08]">
      {/* Background Ambient Glow & Starfield effect */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Deep blue/purple & warm brand ambient gradient at bottom */}
        <div className="absolute -bottom-24 -right-24 w-[500px] h-[500px] bg-blue-600/15 rounded-full blur-[120px]" />
        <div className="absolute -bottom-32 left-1/3 w-[600px] h-[400px] bg-indigo-600/10 rounded-full blur-[140px]" />
        <div className="absolute -bottom-10 left-0 w-[400px] h-[300px] bg-brand-500/10 rounded-full blur-[100px]" />
        
        {/* Subtle Starfield dots */}
        <svg className="absolute inset-0 w-full h-full opacity-35" xmlns="http://www.w3.org/2000/svg">
          <circle cx="8%" cy="18%" r="1" fill="#ffffff" opacity="0.8" />
          <circle cx="15%" cy="38%" r="1" fill="#ffffff" opacity="0.4" />
          <circle cx="28%" cy="14%" r="1.2" fill="#ffffff" opacity="0.7" />
          <circle cx="42%" cy="28%" r="0.8" fill="#ffffff" opacity="0.5" />
          <circle cx="58%" cy="12%" r="1" fill="#ffffff" opacity="0.6" />
          <circle cx="72%" cy="32%" r="1.2" fill="#ffffff" opacity="0.7" />
          <circle cx="86%" cy="16%" r="0.8" fill="#ffffff" opacity="0.4" />
          <circle cx="94%" cy="24%" r="1" fill="#ffffff" opacity="0.8" />
          <circle cx="34%" cy="50%" r="0.8" fill="#ffffff" opacity="0.3" />
          <circle cx="65%" cy="48%" r="1" fill="#ffffff" opacity="0.5" />
          <circle cx="82%" cy="60%" r="1" fill="#ffffff" opacity="0.6" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-16 sm:pt-20 pb-8 sm:pb-12">
        {/* Top Content Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 sm:pb-24">
          
          {/* Brand Info (Left) */}
          <div className="lg:col-span-6 max-w-md">
            <h3 className="text-xl sm:text-2xl font-bold tracking-wider text-white uppercase mb-3.5">
              CRESSCO
            </h3>
            <p className="text-sm sm:text-[15px] text-zinc-400 font-normal leading-relaxed mb-6">
              Modern SaaS platform to connect, automate, and grow your bimbel branches — all in one place.
            </p>
            <p className="text-xs text-zinc-400 font-normal tracking-wide">
              © Copyright 2026 Cressco. All Rights Reserved.
            </p>
          </div>

          {/* Nav Links Columns (Right) */}
          <div className="lg:col-span-6 grid grid-cols-3 gap-6 sm:gap-10">
            
            {/* Product */}
            <div>
              <h4 className="text-sm font-semibold text-white mb-4 tracking-tight">
                Product
              </h4>
              <ul className="space-y-3 text-xs sm:text-sm text-zinc-400">
                <li>
                  <Link href="#features" className="hover:text-white transition-colors duration-150">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#roles" className="hover:text-white transition-colors duration-150">
                    Integrations
                  </Link>
                </li>
                <li>
                  <Link href="#workflow" className="hover:text-white transition-colors duration-150">
                    How It Works
                  </Link>
                </li>
                <li>
                  <Link href="#pricing" className="hover:text-white transition-colors duration-150">
                    Pricing
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-sm font-semibold text-white mb-4 tracking-tight">
                Company
              </h4>
              <ul className="space-y-3 text-xs sm:text-sm text-zinc-400">
                <li>
                  <a href={APP_LOGIN_URL} className="hover:text-white transition-colors duration-150">
                    About
                  </a>
                </li>
                <li>
                  <a href={APP_LOGIN_URL} className="hover:text-white transition-colors duration-150">
                    Careers
                  </a>
                </li>
                <li>
                  <a href={APP_LOGIN_URL} className="hover:text-white transition-colors duration-150">
                    Blog
                  </a>
                </li>
                <li>
                  <a href={APP_LOGIN_URL} className="hover:text-white transition-colors duration-150">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-sm font-semibold text-white mb-4 tracking-tight">
                Legal
              </h4>
              <ul className="space-y-3 text-xs sm:text-sm text-zinc-400">
                <li>
                  <a href={APP_LOGIN_URL} className="hover:text-white transition-colors duration-150">
                    Terms of License
                  </a>
                </li>
                <li>
                  <a href={APP_LOGIN_URL} className="hover:text-white transition-colors duration-150">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href={APP_LOGIN_URL} className="hover:text-white transition-colors duration-150">
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* Bottom Giant Brand Typography + Dot Matrix Graphic */}
        <div className="pt-4 sm:pt-8 flex items-center justify-between border-t border-white/[0.06] select-none">
          <div className="w-full flex items-center justify-between gap-4 overflow-hidden">
            
            {/* Giant CRESSCO Typography */}
            <span className="font-extrabold tracking-tighter uppercase text-[12vw] sm:text-[13vw] lg:text-[14vw] leading-[0.85] bg-gradient-to-b from-white via-zinc-200 to-zinc-600/30 bg-clip-text text-transparent transition-all duration-300">
              CRESSCO
            </span>

            {/* Dot Matrix Arrow Icon Graphic */}
            <div className="shrink-0 flex items-center justify-center pl-4 sm:pl-8">
              <svg 
                className="w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40" 
                viewBox="0 0 160 160" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Diagonal Arrow Dot Matrix (Matching Atomify reference) */}
                {/* Col 1 */}
                <circle cx="20" cy="20" r="7" className="fill-white/80" />
                <circle cx="20" cy="140" r="7" className="fill-white/70" />
                
                {/* Col 2 */}
                <circle cx="55" cy="55" r="7.5" className="fill-white/90" />
                <circle cx="55" cy="140" r="7.5" className="fill-white/85" />
                
                {/* Col 3 */}
                <circle cx="90" cy="90" r="8" className="fill-white" />
                <circle cx="90" cy="140" r="8" className="fill-white/90" />
                
                {/* Col 4 (Arrowhead column) */}
                <circle cx="125" cy="20" r="7" className="fill-white/70" />
                <circle cx="125" cy="55" r="7.5" className="fill-white/85" />
                <circle cx="125" cy="90" r="8" className="fill-white/95" />
                <circle cx="125" cy="125" r="8.5" className="fill-white shadow-lg" />
                <circle cx="125" cy="140" r="7" className="fill-white/80" />
              </svg>
            </div>

          </div>
        </div>

      </div>
    </footer>
  );
}
