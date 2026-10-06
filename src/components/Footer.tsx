'use client';

import React from 'react';
import Link from 'next/link';

interface FooterProps {
  onOpenDemo?: () => void;
  onOpenContact?: () => void;
}

export default function Footer({ onOpenDemo, onOpenContact }: FooterProps) {
  return (
    <footer className="bg-white border-t border-black/[0.06] pt-16 pb-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 pb-12 border-b border-black/[0.06]">
          
          {/* Brand Col */}
          <div className="md:col-span-4">
            <Link href="#" className="flex items-center gap-2.5 mb-3.5 group">
              <div className="w-8 h-8 rounded-lg bg-brand-500 flex items-center justify-center text-white font-bold text-lg shadow-sm">
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
            
            <p className="text-sm text-charcoal-100 font-normal leading-relaxed max-w-xs mb-6">
              Smarter management for growing bimbels.
            </p>

            <div className="inline-flex items-center gap-2 text-xs text-charcoal-50 font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>Indonesia B2B SaaS Platform</span>
            </div>
          </div>

          {/* Links Columns */}
          <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-8">
            
            {/* Product */}
            <div>
              <h4 className="text-xs font-bold text-charcoal-900 uppercase tracking-wider mb-4">
                Product
              </h4>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <Link href="#features" className="text-charcoal-100 hover:text-brand-600 transition-colors">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#pricing" className="text-charcoal-100 hover:text-brand-600 transition-colors">
                    Pricing
                  </Link>
                </li>
                <li>
                  <button onClick={onOpenDemo} className="text-charcoal-100 hover:text-brand-600 transition-colors text-left">
                    Dashboard
                  </button>
                </li>
                <li>
                  <Link href="#roles" className="text-charcoal-100 hover:text-brand-600 transition-colors">
                    Roles
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-xs font-bold text-charcoal-900 uppercase tracking-wider mb-4">
                Company
              </h4>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <button onClick={onOpenContact} className="text-charcoal-100 hover:text-brand-600 transition-colors text-left">
                    About
                  </button>
                </li>
                <li>
                  <button onClick={onOpenContact} className="text-charcoal-100 hover:text-brand-600 transition-colors text-left">
                    Contact
                  </button>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="text-xs font-bold text-charcoal-900 uppercase tracking-wider mb-4">
                Resources
              </h4>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <button onClick={onOpenContact} className="text-charcoal-100 hover:text-brand-600 transition-colors text-left">
                    Help Center
                  </button>
                </li>
                <li>
                  <button onClick={onOpenContact} className="text-charcoal-100 hover:text-brand-600 transition-colors text-left">
                    Documentation
                  </button>
                </li>
                <li>
                  <Link href="#faq" className="text-charcoal-100 hover:text-brand-600 transition-colors">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>

          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-charcoal-50 font-normal">
          <p>© 2026 Cressco. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>Dirancang untuk Bimbel Indonesia</span>
            <span>•</span>
            <span>Keamanan & Privasi Terjamin</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
