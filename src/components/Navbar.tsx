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
      setScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pointer-events-none flex justify-center">
      {/* 
        Morphing Header Container:
        - Before scroll: 100% full-width bar at top of screen (mt-0, w-full, rounded-none, border-b)
        - When scrolled: Shrinks ("menciut") into a centered floating capsule (mt-3, max-w-4xl, rounded-full, glass-header)
      */}
      <div
        className={`pointer-events-auto transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] flex items-center justify-between ${
          scrolled
            ? 'w-[92%] sm:w-full max-w-4xl mt-3 sm:mt-4 py-2.5 px-5 sm:px-6 rounded-full glass-header shadow-[0_16px_40px_-8px_rgba(24,24,27,0.14)] border border-white/90'
            : 'w-full max-w-full mt-0 py-4 sm:py-5 px-6 sm:px-12 lg:px-16 rounded-none bg-white/80 backdrop-blur-md border-b border-stone-200/80 shadow-none'
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
          <span className="text-xl font-bold tracking-tight text-charcoal-900">
            Cressco
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-7 lg:gap-8">
          <Link
            href="#features"
            className="text-sm font-medium text-charcoal-100 hover:text-charcoal-900 transition-colors"
          >
            Fitur
          </Link>
          <Link
            href="#roles"
            className="text-sm font-medium text-charcoal-100 hover:text-charcoal-900 transition-colors"
          >
            Solusi
          </Link>
          <Link
            href="#workflow"
            className="text-sm font-medium text-charcoal-100 hover:text-charcoal-900 transition-colors"
          >
            Integrasi
          </Link>
          <Link
            href="#pricing"
            className="text-sm font-medium text-charcoal-100 hover:text-charcoal-900 transition-colors"
          >
            Harga
          </Link>
          <Link
            href="#faq"
            className="text-sm font-medium text-charcoal-100 hover:text-charcoal-900 transition-colors"
          >
            FAQ
          </Link>
        </nav>

        {/* Right Action Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={APP_LOGIN_URL}
            className="text-sm font-semibold text-charcoal-800 hover:text-brand-600 px-3 py-1.5 transition-colors cursor-pointer"
          >
            Login
          </a>
          <a
            href={APP_LOGIN_URL}
            className={`inline-flex items-center gap-1.5 text-sm font-semibold text-white bg-gradient-to-r from-brand-500 to-brand-600 hover:from-brand-600 hover:to-brand-700 active:from-brand-700 px-5 py-2 shadow-sm hover:shadow-brand-glow hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer border border-brand-400/30 ${
              scrolled ? 'rounded-full' : 'rounded-xl'
            }`}
          >
            <span>Try for free</span>
            <ArrowUpRight size={14} className="text-white/80" />
          </a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-charcoal-800 hover:text-charcoal-900 rounded-xl hover:bg-black/5 transition-colors"
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
                className="w-full text-center text-sm font-semibold text-white bg-gradient-to-r from-brand-500 to-brand-600 hover:from-brand-600 hover:to-brand-700 py-2.5 rounded-full shadow-sm block"
              >
                Try for free
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
