'use client';

import React from 'react';
import { Star } from 'lucide-react';

const indonesianAvatars = [
  { src: '/images/avatars/avatar-1.jpg', alt: 'Budi - Bimbel Owner' },
  { src: '/images/avatars/avatar-2.jpg', alt: 'Sarah - Admin Bimbel' },
  { src: '/images/avatars/avatar-3.jpg', alt: 'Rian - Koordinator Tutor' },
  { src: '/images/avatars/avatar-4.jpg', alt: 'Dewi - Head of Academic' },
];

const clientLogos = [
  { src: '/images/clients/client-1.png', alt: 'Codecraft' },
  { src: '/images/clients/client-2.png', alt: 'Boltshift' },
  { src: '/images/clients/client-3.png', alt: 'Acme Corp' },
  { src: '/images/clients/client-4.png', alt: 'Calescence' },
  { src: '/images/clients/client-5.png', alt: 'Catalxg' },
];

export default function SocialProof() {
  return (
    <section className="py-7 sm:py-9 border-y border-black/[0.06] bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-12">
          
          {/* Left: Indonesian Avatar stack + Stars + Text */}
          <div className="flex items-center gap-3.5 shrink-0">
            {/* Indonesian Avatars Stack */}
            <div className="flex -space-x-2.5 overflow-hidden">
              {indonesianAvatars.map((av, idx) => (
                <div 
                  key={idx} 
                  className="relative inline-block h-9 w-9 rounded-full ring-2 ring-white overflow-hidden bg-surface-200 shrink-0 shadow-sm"
                >
                  <img
                    src={av.src}
                    alt={av.alt}
                    className="h-full w-full object-cover"
                  />
                </div>
              ))}
            </div>

            {/* Stars & Text */}
            <div>
              <div className="flex items-center gap-0.5 text-amber-500 mb-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-xs font-bold text-charcoal-900 tracking-tight">
                Dipercaya 500+ Bimbel di Indonesia
              </p>
            </div>
          </div>

          {/* Right: Smooth Infinite Animated Marquee Ticker ("Efek Berjalan") */}
          <div className="relative w-full lg:max-w-xl overflow-hidden py-1">
            {/* Left and Right gradient fade masks */}
            <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

            {/* Moving Track */}
            <div className="animate-marquee flex items-center gap-12 sm:gap-16">
              {/* Set 1 */}
              {clientLogos.map((logo, idx) => (
                <div 
                  key={`set1-${idx}`} 
                  className="flex items-center justify-center shrink-0 opacity-80 hover:opacity-100 transition-opacity cursor-pointer"
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="h-6 sm:h-7 w-auto max-w-[140px] object-contain block"
                  />
                </div>
              ))}

              {/* Set 2 (for seamless infinite loop) */}
              {clientLogos.map((logo, idx) => (
                <div 
                  key={`set2-${idx}`} 
                  className="flex items-center justify-center shrink-0 opacity-80 hover:opacity-100 transition-opacity cursor-pointer"
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="h-6 sm:h-7 w-auto max-w-[140px] object-contain block"
                  />
                </div>
              ))}

              {/* Set 3 (ensures seamless scrolling on wider monitors) */}
              {clientLogos.map((logo, idx) => (
                <div 
                  key={`set3-${idx}`} 
                  className="flex items-center justify-center shrink-0 opacity-80 hover:opacity-100 transition-opacity cursor-pointer"
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="h-6 sm:h-7 w-auto max-w-[140px] object-contain block"
                  />
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
