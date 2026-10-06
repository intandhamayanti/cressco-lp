'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ArrowRight } from 'lucide-react';

const APP_LOGIN_URL = 'https://app-cressco.vercel.app/login';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 pointer-events-none">
      <div className={`transition-all duration-300 mx-auto ${scrolled ? 'max-w-4xl px-4' : 'w-full max-w-[1400px] px-6 sm:px-10 lg:px-12'}`}>
        <div
          className={`pointer-events-auto transition-all duration-300 ease-out mx-auto ${
            scrolled
              ? 'mt-3 glass-header rounded-full px-6 py-2.5 shadow-soft-lg'
              : 'mt-0 w-full bg-transparent py-5 px-0'
          }`}
        >
          <div className="flex items-center justify-between">
            {/* Logo positioned distinctly to the left */}
            <a href={APP_LOGIN_URL} className="flex items-center gap-2.5 group">
              <img
                src="/images/cressco-logo.png"
                alt="Cressco Logo"
                className="w-8 h-8 object-contain transition-transform group-hover:scale-105 block shrink-0"
              />
              <span className="text-xl font-bold tracking-tight text-charcoal-900">
                Cressco
              </span>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-8">
              <Link
                href="#features"
                className="text-sm font-medium text-charcoal-200 hover:text-charcoal-900 transition-colors"
              >
                Product
              </Link>
              <Link
                href="#roles"
                className="text-sm font-medium text-charcoal-200 hover:text-charcoal-900 transition-colors"
              >
                Solutions
              </Link>
              <Link
                href="#pricing"
                className="text-sm font-medium text-charcoal-200 hover:text-charcoal-900 transition-colors"
              >
                Pricing
              </Link>
              <Link
                href="#workflow"
                className="text-sm font-medium text-charcoal-200 hover:text-charcoal-900 transition-colors"
              >
                Resources
              </Link>
            </nav>

            {/* Right Action Buttons */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href={APP_LOGIN_URL}
                className="text-sm font-semibold text-charcoal-900 hover:text-brand-600 px-4 py-2 transition-colors cursor-pointer"
              >
                Login
              </a>
              <a
                href={APP_LOGIN_URL}
                className={`inline-flex items-center justify-center text-sm font-semibold text-white bg-brand-500 hover:bg-brand-600 px-5 py-2.5 shadow-sm transition-all hover:shadow-brand-glow hover:-translate-y-0.5 active:translate-y-0 cursor-pointer ${
                  scrolled ? 'rounded-full' : 'rounded-xl'
                }`}
              >
                Try for free
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-2">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-charcoal-200 hover:text-charcoal-900 rounded-lg hover:bg-black/5"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown with Glassmorphism */}
        {mobileMenuOpen && (
          <div className="pointer-events-auto md:hidden mt-2 p-4 glass-header rounded-2xl flex flex-col gap-3 animate-in fade-in slide-in-from-top-2 duration-200 max-w-lg mx-auto">
            <Link
              href="#features"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-medium text-charcoal-200 hover:text-brand-500 py-1"
            >
              Product
            </Link>
            <Link
              href="#roles"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-medium text-charcoal-200 hover:text-brand-500 py-1"
            >
              Solutions
            </Link>
            <Link
              href="#pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-medium text-charcoal-200 hover:text-brand-500 py-1"
            >
              Pricing
            </Link>
            <Link
              href="#workflow"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-medium text-charcoal-200 hover:text-brand-500 py-1"
            >
              Resources
            </Link>
            <div className="pt-2 border-t border-black/[0.06] flex flex-col gap-2">
              <a
                href={APP_LOGIN_URL}
                className="w-full text-center text-sm font-semibold text-charcoal-900 bg-white/60 hover:bg-white/90 py-2.5 rounded-xl border border-black/[0.06] block"
              >
                Login
              </a>
              <a
                href={APP_LOGIN_URL}
                className="w-full text-center text-sm font-semibold text-white bg-brand-500 hover:bg-brand-600 py-2.5 rounded-xl shadow-sm block"
              >
                Try for free
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
