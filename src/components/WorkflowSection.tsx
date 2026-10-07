'use client';

import React from 'react';
import Image from 'next/image';

interface IntegrationTool {
  name: string;
  icon: string;
  category: string;
  xPercent: number; // For responsive orbital layout
  yPercent: number;
}

const leftIntegrations: IntegrationTool[] = [
  { name: 'Google Drive', icon: '/images/integrations/google-drive.svg', category: 'Modul & Dokumen', xPercent: 23, yPercent: 12 },
  { name: 'WhatsApp', icon: '/images/integrations/whatsapp.svg', category: 'Broadcast & Tagihan', xPercent: 10, yPercent: 30 },
  { name: 'Google Calendar', icon: '/images/integrations/google-calendar.svg', category: 'Jadwal Sesi & Ujian', xPercent: 22, yPercent: 50 },
  { name: 'Google Sheets', icon: '/images/integrations/google-sheets.svg', category: 'Impor & Ekspor Data', xPercent: 9, yPercent: 70 },
  { name: 'Zoom', icon: '/images/integrations/zoom.svg', category: 'Kelas Online & Privat', xPercent: 23, yPercent: 88 },
];

const rightIntegrations: IntegrationTool[] = [
  { name: 'Telegram', icon: '/images/integrations/telegram.svg', category: 'Notifikasi Tutor', xPercent: 77, yPercent: 12 },
  { name: 'QRIS', icon: '/images/integrations/qris.svg', category: 'Pembayaran SPP Instan', xPercent: 90, yPercent: 30 },
  { name: 'Microsoft Excel', icon: '/images/integrations/excel.svg', category: 'Rekonsiliasi Kas', xPercent: 78, yPercent: 50 },
  { name: 'Gmail', icon: '/images/integrations/gmail.svg', category: 'Invoice & Surat Resmi', xPercent: 91, yPercent: 70 },
  { name: 'Notion', icon: '/images/integrations/notion.svg', category: 'Kurikulum & Silabus', xPercent: 77, yPercent: 88 },
];

export default function WorkflowSection() {
  return (
    <section id="workflow" className="py-16 sm:py-24 bg-[#CE482A] bg-gradient-to-b from-[#D44D2F] via-[#CE482A] to-[#B33519] text-white relative overflow-hidden font-sans border-t border-white/10">
      
      {/* Background Subtle Ambience & Warm Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[450px] bg-white/[0.08] rounded-full blur-[120px]" />
        <div className="absolute -bottom-20 right-10 w-[400px] h-[400px] bg-[#682213]/40 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-grid-pattern opacity-10 mix-blend-overlay" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 font-sans">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14 font-sans">
          <span className="font-mono text-xs uppercase tracking-wider font-bold text-white/80 mb-3 inline-block">
            /05 INTEGRASI & ALUR KERJA
          </span>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
            Integrasi Mulus untuk Alur Kerja Bimbel Anda
          </h2>
          
          <p className="text-sm sm:text-base text-brand-100 font-normal leading-relaxed max-w-xl mx-auto font-sans">
            Hubungkan seluruh operasional bimbel Anda dengan tools harian yang sudah akrab digunakan dalam satu sistem terpusat.
          </p>
        </div>

        {/* Natural Orbital Integration Visual */}
        <div className="relative max-w-4xl mx-auto h-[320px] sm:h-[370px] md:h-[400px] select-none flex items-center justify-center">
          
          {/* Curved SVG Connectors */}
          <svg 
            className="absolute inset-0 w-full h-full pointer-events-none z-0" 
            viewBox="0 0 1000 400" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Center at x=500, y=200 */}
            {/* Left Connectors into Central Hub */}
            <path d="M 230 48 C 330 48, 400 160, 500 200" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5" strokeDasharray="5 5" />
            <path d="M 100 120 C 260 120, 380 180, 500 200" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5" strokeDasharray="5 5" />
            <path d="M 220 200 L 500 200" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" strokeDasharray="5 5" />
            <path d="M 90 280 C 250 280, 380 220, 500 200" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5" strokeDasharray="5 5" />
            <path d="M 230 352 C 330 352, 400 240, 500 200" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5" strokeDasharray="5 5" />

            {/* Right Connectors from Central Hub */}
            <path d="M 500 200 C 600 160, 670 48, 770 48" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5" strokeDasharray="5 5" />
            <path d="M 500 200 C 620 180, 740 120, 900 120" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5" strokeDasharray="5 5" />
            <path d="M 500 200 L 780 200" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" strokeDasharray="5 5" />
            <path d="M 500 200 C 620 220, 750 280, 910 280" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5" strokeDasharray="5 5" />
            <path d="M 500 200 C 600 240, 670 352, 770 352" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5" strokeDasharray="5 5" />
          </svg>

          {/* Central Cressco Core Hub */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
            <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full bg-white text-brand-600 flex flex-col items-center justify-center shadow-[0_16px_40px_rgba(0,0,0,0.35)] border-4 border-white/40 group hover:scale-105 transition-transform duration-300">
              <Image
                src="/images/cressco-logo.png"
                alt="Cressco Core"
                width={42}
                height={42}
                className="object-contain drop-shadow-sm"
              />
              <span className="text-[9px] font-black uppercase tracking-wider mt-1 text-brand-700">
                CRESSCO
              </span>
            </div>
          </div>

          {/* Left Floating Tools */}
          {leftIntegrations.map((tool, idx) => (
            <div
              key={`left-${idx}`}
              className="absolute -translate-x-1/2 -translate-y-1/2 z-10 transition-transform duration-300 hover:scale-110 hover:z-30 cursor-pointer"
              style={{ left: `${tool.xPercent}%`, top: `${tool.yPercent}%` }}
              title={`${tool.name} • ${tool.category}`}
            >
              <div className="w-11 h-11 sm:w-13 sm:h-13 md:w-14 md:h-14 relative drop-shadow-[0_8px_18px_rgba(0,0,0,0.28)]">
                <Image
                  src={tool.icon}
                  alt={tool.name}
                  width={56}
                  height={56}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          ))}

          {/* Right Floating Tools */}
          {rightIntegrations.map((tool, idx) => (
            <div
              key={`right-${idx}`}
              className="absolute -translate-x-1/2 -translate-y-1/2 z-10 transition-transform duration-300 hover:scale-110 hover:z-30 cursor-pointer"
              style={{ left: `${tool.xPercent}%`, top: `${tool.yPercent}%` }}
              title={`${tool.name} • ${tool.category}`}
            >
              <div className="w-11 h-11 sm:w-13 sm:h-13 md:w-14 md:h-14 relative drop-shadow-[0_8px_18px_rgba(0,0,0,0.28)]">
                <Image
                  src={tool.icon}
                  alt={tool.name}
                  width={56}
                  height={56}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
