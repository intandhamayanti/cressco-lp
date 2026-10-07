'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const APP_LOGIN_URL = 'https://app-cressco.vercel.app/login';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop || window.pageYOffset || 0;
      setScrolled(scrollY > 20);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pointer-events-none flex justify-center w-full transition-all duration-500 ease-out">
      {/* 
        Dynamic Morphing Navbar:
        - At Top (scrolled = false): 100% full-width transparent header (mt-0 w-full max-w-full py-5 px-6 sm:px-12 lg:px-16 bg-transparent border-transparent)
        - On Scroll (scrolled = true): Smoothly shrinks into a centered floating glassmorphism pill (mt-3 max-w-3xl lg:max-w-4xl py-2 px-6 rounded-full glass-header shadow-xl)
      */}
      <div
        className={`pointer-events-auto transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] flex items-center justify-between ${
          scrolled
            ? 'mt-4 sm:mt-5 w-[92%] sm:w-full max-w-4xl lg:max-w-5xl py-3 sm:py-3.5 px-6 sm:px-8 rounded-full glass-header shadow-[0_16px_40px_-8px_rgba(24,24,27,0.14)] border border-white/95'
            : 'mt-0 w-full max-w-full py-5 sm:py-6 px-6 sm:px-12 lg:px-16 rounded-none bg-transparent border-b border-transparent shadow-none'
        }`}
      >
        {/* Logo */}
        <a href="/" className="flex items-center gap-2.5 group shrink-0">
          <div className="w-8 h-8 rounded-xl bg-white shadow-sm border border-stone-200/80 p-1 flex items-center justify-center transition-transform group-hover:scale-105">
            <img
              src="/images/cressco-logo.png"
              alt="Cressco Logo"
              className="w-full h-full object-contain"
            />
          </div>
          <span className="text-lg sm:text-xl font-bold tracking-tight text-charcoal-900">
            Cressco
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className={`hidden md:flex items-center transition-all duration-300 ${
          scrolled ? 'gap-6 lg:gap-7' : 'gap-8 lg:gap-9'
        }`}>
          <Link
            href="#features"
            className="text-xs sm:text-sm font-medium text-charcoal-200 hover:text-charcoal-900 transition-colors"
          >
            Fitur
          </Link>
          <Link
            href="#roles"
            className="text-xs sm:text-sm font-medium text-charcoal-200 hover:text-charcoal-900 transition-colors"
          >
            Solusi
          </Link>
          <Link
            href="#workflow"
            className="text-xs sm:text-sm font-medium text-charcoal-200 hover:text-charcoal-900 transition-colors"
          >
            Integrasi
          </Link>
          <Link
            href="#pricing"
            className="text-xs sm:text-sm font-medium text-charcoal-200 hover:text-charcoal-900 transition-colors"
          >
            Harga
          </Link>
          <Link
            href="#faq"
            className="text-xs sm:text-sm font-medium text-charcoal-200 hover:text-charcoal-900 transition-colors"
          >
            FAQ
          </Link>
        </nav>

        {/* Right Action Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={APP_LOGIN_URL}
            className="text-xs sm:text-sm font-semibold text-charcoal-800 hover:text-brand-600 px-2.5 py-1.5 transition-colors cursor-pointer"
          >
            Login
          </a>
          <a
            href={APP_LOGIN_URL}
            className="inline-flex items-center justify-center gap-1.5 text-xs sm:text-sm font-semibold text-white bg-brand-500 hover:bg-brand-600 active:bg-brand-700 px-4 sm:px-5 py-2 rounded-full shadow-sm hover:shadow-brand-glow hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer"
          >
            <span>Try for free</span>
            <ArrowUpRight size={14} className="text-white/90" />
          </a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 text-charcoal-800 hover:text-charcoal-900 rounded-xl hover:bg-black/5 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu with Rounded Glassmorphism */}
      {mobileMenuOpen && (
        <div className="pointer-events-auto fixed top-20 left-4 right-4 z-50 md:hidden max-w-lg mx-auto">
          <div className="p-5 glass-header rounded-3xl flex flex-col gap-3.5 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200">
            <Link
              href="#features"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-semibold text-charcoal-900 hover:text-brand-600 py-1"
            >
              Fitur Utama
            </Link>
            <Link
              href="#roles"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-semibold text-charcoal-900 hover:text-brand-600 py-1"
            >
              Solusi Peran
            </Link>
            <Link
              href="#workflow"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-semibold text-charcoal-900 hover:text-brand-600 py-1"
            >
              Integrasi & Alur Kerja
            </Link>
            <Link
              href="#pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-semibold text-charcoal-900 hover:text-brand-600 py-1"
            >
              Paket Harga
            </Link>
            <Link
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-semibold text-charcoal-900 hover:text-brand-600 py-1"
            >
              Tanya Jawab (FAQ)
            </Link>
            <div className="pt-3 border-t border-black/[0.06] flex flex-col gap-2.5">
              <a
                href={APP_LOGIN_URL}
                className="w-full text-center text-sm font-semibold text-charcoal-900 bg-white/80 hover:bg-white py-2.5 rounded-full border border-black/[0.08] block shadow-sm"
              >
                Login
              </a>
              <a
                href={APP_LOGIN_URL}
                className="w-full inline-flex items-center justify-center gap-1.5 text-sm font-semibold text-white bg-brand-500 hover:bg-brand-600 py-2.5 rounded-full shadow-sm"
              >
                <span>Try for free</span>
                <ArrowUpRight size={14} className="text-white/90" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
