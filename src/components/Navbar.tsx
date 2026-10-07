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
      setScrolled(window.scrollY > 15);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out pointer-events-none">
      <div className="w-full px-4 sm:px-6 lg:px-8 mx-auto flex justify-center">
        <div
          className={`pointer-events-auto transition-all duration-500 ease-out glass-header ${
            scrolled
              ? 'mt-3 w-full max-w-4xl rounded-full py-2.5 px-5 sm:px-6 shadow-[0_12px_36px_-6px_rgba(0,0,0,0.1)] border-white/90 scale-[0.99]'
              : 'mt-4 sm:mt-5 w-full max-w-6xl rounded-2xl sm:rounded-3xl py-3.5 px-6 sm:px-8 shadow-[0_8px_28px_-4px_rgba(0,0,0,0.06)] border-white/80 scale-100'
          }`}
        >
          <div className="flex items-center justify-between">
            
            {/* Logo */}
            <a href="/" className="flex items-center gap-2.5 group shrink-0">
              <div className="w-8 h-8 rounded-xl bg-white flex items-center justify-center shadow-sm border border-black/[0.05] p-1 group-hover:scale-105 transition-transform">
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
                className="text-sm font-semibold text-charcoal-800 hover:text-brand-600 px-3.5 py-2 transition-colors cursor-pointer"
              >
                Login
              </a>
              <a
                href={APP_LOGIN_URL}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-white bg-gradient-to-r from-brand-500 to-brand-600 hover:from-brand-600 hover:to-brand-700 active:from-brand-700 px-4.5 py-2 rounded-full shadow-sm hover:shadow-brand-glow hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer border border-brand-400/20"
              >
                <span>Coba Gratis</span>
                <ArrowUpRight size={14} className="text-white/80" />
              </a>
            </div>

            {/* Mobile Menu Button */}
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
        </div>
      </div>

      {/* Mobile Dropdown Menu with Glassmorphism */}
      {mobileMenuOpen && (
        <div className="pointer-events-auto md:hidden px-4 pt-2 max-w-lg mx-auto">
          <div className="p-5 glass-header rounded-3xl flex flex-col gap-3.5 shadow-xl animate-in fade-in slide-in-from-top-2 duration-200">
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
                className="w-full text-center text-sm font-semibold text-charcoal-900 bg-white/70 hover:bg-white py-2.5 rounded-xl border border-black/[0.08] block shadow-sm"
              >
                Login
              </a>
              <a
                href={APP_LOGIN_URL}
                className="w-full text-center text-sm font-semibold text-white bg-gradient-to-r from-brand-500 to-brand-600 hover:from-brand-600 hover:to-brand-700 py-2.5 rounded-xl shadow-sm block"
              >
                Coba Gratis Sekarang
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
