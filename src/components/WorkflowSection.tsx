'use client';

import React from 'react';
import Image from 'next/image';

interface IntegrationTool {
  name: string;
  icon: string;
  category: string;
  xPercent: number; // For desktop orbital layout
  yPercent: number;
  svgX: number;
  svgY: number;
}

const leftIntegrations: IntegrationTool[] = [
  { 
    name: 'Google Meet', 
    icon: '/images/integrations/google-meet.png', 
    category: 'Kelas Online & Privat', 
    xPercent: 23, 
    yPercent: 12,
    svgX: 230,
    svgY: 48
  },
  { 
    name: 'WhatsApp', 
    icon: '/images/integrations/whatsapp.png', 
    category: 'Broadcast & Notifikasi', 
    xPercent: 10, 
    yPercent: 30,
    svgX: 100,
    svgY: 120
  },
  { 
    name: 'Google Calendar', 
    icon: '/images/integrations/google-calendar.png', 
    category: 'Jadwal Sesi & Ujian', 
    xPercent: 22, 
    yPercent: 50,
    svgX: 220,
    svgY: 200
  },
  { 
    name: 'Mailchimp', 
    icon: '/images/integrations/mailchimp.png', 
    category: 'Email Broadcast Siswa', 
    xPercent: 9, 
    yPercent: 70,
    svgX: 90,
    svgY: 280
  },
  { 
    name: 'Microsoft Excel', 
    icon: '/images/integrations/excel.png', 
    category: 'Rekonsiliasi & Impor Data', 
    xPercent: 23, 
    yPercent: 88,
    svgX: 230,
    svgY: 352
  },
];

const rightIntegrations: IntegrationTool[] = [
  { 
    name: 'Telegram', 
    icon: '/images/integrations/telegram.png', 
    category: 'Grup Pengajar & Tugas', 
    xPercent: 77, 
    yPercent: 12,
    svgX: 770,
    svgY: 48
  },
  { 
    name: 'Google Ads', 
    icon: '/images/integrations/google-ads.png', 
    category: 'Tracking Akuisisi Siswa', 
    xPercent: 90, 
    yPercent: 30,
    svgX: 900,
    svgY: 120
  },
  { 
    name: 'Zoom', 
    icon: '/images/integrations/zoom.png', 
    category: 'Webinar & Kelas Interaktif', 
    xPercent: 78, 
    yPercent: 50,
    svgX: 780,
    svgY: 200
  },
  { 
    name: 'Gmail', 
    icon: '/images/integrations/gmail.png', 
    category: 'Invoice & Surat Resmi', 
    xPercent: 91, 
    yPercent: 70,
    svgX: 910,
    svgY: 280
  },
  { 
    name: 'Notion', 
    icon: '/images/integrations/notion.png', 
    category: 'Silabus & Bank Materi', 
    xPercent: 77, 
    yPercent: 88,
    svgX: 770,
    svgY: 352
  },
];

const topMobileTools = leftIntegrations;
const bottomMobileTools = rightIntegrations;

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

        {/* ========================================================================= */}
        {/* DESKTOP & TABLET VIEW: Orbital Layout with curved connectors (md and up) */}
        {/* ========================================================================= */}
        <div className="hidden md:flex relative max-w-4xl mx-auto h-[400px] select-none items-center justify-center">
          
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
            <div className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-white text-brand-600 flex flex-col items-center justify-center shadow-[0_16px_40px_rgba(0,0,0,0.35)] border-4 border-white/40 group hover:scale-105 transition-transform duration-300">
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
              className="absolute -translate-x-1/2 -translate-y-1/2 z-10 transition-all duration-300 hover:scale-110 hover:z-30 cursor-pointer group"
              style={{ left: `${tool.xPercent}%`, top: `${tool.yPercent}%` }}
              title={`${tool.name} • ${tool.category}`}
            >
              <div className="w-13 h-13 md:w-15 md:h-15 rounded-2xl bg-white/95 backdrop-blur-md p-2.5 flex items-center justify-center shadow-[0_10px_25px_rgba(0,0,0,0.25)] border border-white/40 group-hover:border-white transition-all">
                <Image
                  src={tool.icon}
                  alt={tool.name}
                  width={44}
                  height={44}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="absolute left-1/2 -translate-x-1/2 top-full mt-1.5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-40">
                <span className="text-[11px] font-medium bg-stone-900/90 text-white px-2 py-0.5 rounded shadow">
                  {tool.name}
                </span>
              </div>
            </div>
          ))}

          {/* Right Floating Tools */}
          {rightIntegrations.map((tool, idx) => (
            <div
              key={`right-${idx}`}
              className="absolute -translate-x-1/2 -translate-y-1/2 z-10 transition-all duration-300 hover:scale-110 hover:z-30 cursor-pointer group"
              style={{ left: `${tool.xPercent}%`, top: `${tool.yPercent}%` }}
              title={`${tool.name} • ${tool.category}`}
            >
              <div className="w-13 h-13 md:w-15 md:h-15 rounded-2xl bg-white/95 backdrop-blur-md p-2.5 flex items-center justify-center shadow-[0_10px_25px_rgba(0,0,0,0.25)] border border-white/40 group-hover:border-white transition-all">
                <Image
                  src={tool.icon}
                  alt={tool.name}
                  width={44}
                  height={44}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="absolute left-1/2 -translate-x-1/2 top-full mt-1.5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-40">
                <span className="text-[11px] font-medium bg-stone-900/90 text-white px-2 py-0.5 rounded shadow">
                  {tool.name}
                </span>
              </div>
            </div>
          ))}

        </div>

        {/* ========================================================================= */}
        {/* MOBILE VIEW: Vertical Flow (Top Tools -> Cressco Core Hub -> Bottom Tools) */}
        {/* ========================================================================= */}
        <div className="flex md:hidden flex-col items-center gap-4 max-w-sm mx-auto">
          
          {/* Top 5 Tools Grid */}
          <div className="flex flex-wrap items-center justify-center gap-3 w-full">
            {topMobileTools.map((tool, idx) => (
              <div 
                key={`mob-top-${idx}`}
                className="flex items-center gap-2 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-xl shadow-sm border border-white/40 text-stone-900"
              >
                <div className="w-6 h-6 relative shrink-0">
                  <Image
                    src={tool.icon}
                    alt={tool.name}
                    width={24}
                    height={24}
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-xs font-semibold text-stone-800">{tool.name}</span>
              </div>
            ))}
          </div>

          {/* Vertical Connecting Pulse Line Down */}
          <div className="flex flex-col items-center justify-center my-1">
            <div className="w-0.5 h-6 bg-gradient-to-b from-white/20 via-white/80 to-white/20 border-l border-dashed border-white/60" />
            <div className="w-2 h-2 rounded-full bg-white animate-pulse -my-1" />
            <div className="w-0.5 h-6 bg-gradient-to-b from-white/20 via-white/80 to-white/20 border-l border-dashed border-white/60" />
          </div>

          {/* Central Mobile Cressco Hub */}
          <div className="relative">
            <div className="w-20 h-20 rounded-full bg-white text-brand-600 flex flex-col items-center justify-center shadow-[0_12px_30px_rgba(0,0,0,0.3)] border-4 border-white/40">
              <Image
                src="/images/cressco-logo.png"
                alt="Cressco Core"
                width={36}
                height={36}
                className="object-contain drop-shadow-sm"
              />
              <span className="text-[8px] font-black uppercase tracking-wider mt-0.5 text-brand-700">
                CRESSCO
              </span>
            </div>
            {/* Ambient ring glow */}
            <div className="absolute inset-0 -m-1.5 rounded-full border border-white/30 pointer-events-none animate-ping opacity-30" />
          </div>

          {/* Vertical Connecting Pulse Line Up */}
          <div className="flex flex-col items-center justify-center my-1">
            <div className="w-0.5 h-6 bg-gradient-to-b from-white/20 via-white/80 to-white/20 border-l border-dashed border-white/60" />
            <div className="w-2 h-2 rounded-full bg-white animate-pulse -my-1" />
            <div className="w-0.5 h-6 bg-gradient-to-b from-white/20 via-white/80 to-white/20 border-l border-dashed border-white/60" />
          </div>

          {/* Bottom 5 Tools Grid */}
          <div className="flex flex-wrap items-center justify-center gap-3 w-full">
            {bottomMobileTools.map((tool, idx) => (
              <div 
                key={`mob-bottom-${idx}`}
                className="flex items-center gap-2 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-xl shadow-sm border border-white/40 text-stone-900"
              >
                <div className="w-6 h-6 relative shrink-0">
                  <Image
                    src={tool.icon}
                    alt={tool.name}
                    width={24}
                    height={24}
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-xs font-semibold text-stone-800">{tool.name}</span>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
