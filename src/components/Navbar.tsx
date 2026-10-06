'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ArrowRight } from 'lucide-react';

interface NavbarProps {
  onOpenDemo?: () => void;
  onOpenContact?: () => void;
}

export default function Navbar({ onOpenDemo, onOpenContact }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md shadow-soft border-b border-black/[0.06] py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="#" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-lg bg-brand-500 flex items-center justify-center text-white font-bold text-lg shadow-sm transition-transform group-hover:scale-105">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="3" y="3" width="8" height="8" rx="2" fill="white" fillOpacity="0.9" />
                <rect x="13" y="3" width="8" height="8" rx="2" fill="white" fillOpacity="0.6" />
                <rect x="3" y="13" width="8" height="8" rx="2" fill="white" fillOpacity="0.6" />
                <rect x="13" y="13" width="8" height="8" rx="2" fill="white" />
              </svg>
            </div>
            <span className="text-xl font-bold tracking-tight text-charcoal-900">
              Cressco
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="#features"
              className="text-sm font-medium text-charcoal-100 hover:text-charcoal-900 transition-colors"
            >
              Product
            </Link>
            <Link
              href="#roles"
              className="text-sm font-medium text-charcoal-100 hover:text-charcoal-900 transition-colors"
            >
              Solutions
            </Link>
            <Link
              href="#pricing"
              className="text-sm font-medium text-charcoal-100 hover:text-charcoal-900 transition-colors"
            >
              Pricing
            </Link>
            <Link
              href="#workflow"
              className="text-sm font-medium text-charcoal-100 hover:text-charcoal-900 transition-colors"
            >
              Resources
            </Link>
          </nav>

          {/* Right Action Button */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={onOpenDemo}
              className="text-sm font-medium text-charcoal-200 hover:text-charcoal-900 px-3 py-2 rounded-lg transition-colors"
            >
              Lihat Demo
            </button>
            <Link
              href="#pricing"
              className="inline-flex items-center justify-center text-sm font-semibold text-white bg-brand-500 hover:bg-brand-600 px-4 py-2.5 rounded-lg shadow-sm transition-all hover:shadow-brand-glow hover:-translate-y-0.5 active:translate-y-0"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-charcoal-200 hover:text-charcoal-900 rounded-lg hover:bg-black/5"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 pt-4 pb-5 px-4 bg-white rounded-xl border border-black/[0.08] shadow-soft-lg flex flex-col gap-3.5 animate-in fade-in slide-in-from-top-2 duration-200">
            <Link
              href="#features"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-charcoal-200 hover:text-brand-500 py-1"
            >
              Product
            </Link>
            <Link
              href="#roles"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-charcoal-200 hover:text-brand-500 py-1"
            >
              Solutions
            </Link>
            <Link
              href="#pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-charcoal-200 hover:text-brand-500 py-1"
            >
              Pricing
            </Link>
            <Link
              href="#workflow"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-charcoal-200 hover:text-brand-500 py-1"
            >
              Resources
            </Link>
            <div className="pt-3 border-t border-black/[0.06] flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenDemo?.();
                }}
                className="w-full text-center text-sm font-medium text-charcoal-200 bg-surface-100 hover:bg-surface-200 py-2.5 rounded-lg border border-black/[0.06]"
              >
                Lihat Demo
              </button>
              <Link
                href="#pricing"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center text-sm font-semibold text-white bg-brand-500 hover:bg-brand-600 py-2.5 rounded-lg shadow-sm"
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
