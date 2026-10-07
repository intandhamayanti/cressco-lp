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
  mobXPercent: number; // For mobile vertical orbital layout
  mobYPercent: number;
  mobSvgX: number;
  mobSvgY: number;
}

const leftIntegrations: IntegrationTool[] = [
  { 
    name: 'Google Meet', 
    icon: '/images/integrations/google-meet.png', 
    category: 'Kelas Online & Privat', 
    xPercent: 20, 
    yPercent: 14,
    svgX: 200,
    svgY: 56,
    mobXPercent: 18,
    mobYPercent: 8,
    mobSvgX: 65,
    mobSvgY: 38
  },
  { 
    name: 'WhatsApp', 
    icon: '/images/integrations/whatsapp.png', 
    category: 'Broadcast & Notifikasi', 
    xPercent: 8, 
    yPercent: 32,
    svgX: 80,
    svgY: 128,
    mobXPercent: 50,
    mobYPercent: 5,
    mobSvgX: 180,
    mobSvgY: 24
  },
  { 
    name: 'Google Calendar', 
    icon: '/images/integrations/google-calendar.png', 
    category: 'Jadwal Sesi & Ujian', 
    xPercent: 22, 
    yPercent: 50,
    svgX: 220,
    svgY: 200,
    mobXPercent: 82,
    mobYPercent: 8,
    mobSvgX: 295,
    mobSvgY: 38
  },
  { 
    name: 'Mailchimp', 
    icon: '/images/integrations/mailchimp.png', 
    category: 'Email Broadcast Siswa', 
    xPercent: 8, 
    yPercent: 68,
    svgX: 80,
    svgY: 272,
    mobXPercent: 28,
    mobYPercent: 24,
    mobSvgX: 100,
    mobSvgY: 115
  },
  { 
    name: 'Microsoft Excel', 
    icon: '/images/integrations/excel.png', 
    category: 'Rekonsiliasi & Impor Data', 
    xPercent: 20, 
    yPercent: 86,
    svgX: 200,
    svgY: 344,
    mobXPercent: 72,
    mobYPercent: 24,
    mobSvgX: 260,
    mobSvgY: 115
  },
];

const rightIntegrations: IntegrationTool[] = [
  { 
    name: 'Telegram', 
    icon: '/images/integrations/telegram.png', 
    category: 'Grup Pengajar & Tugas', 
    xPercent: 80, 
    yPercent: 14,
    svgX: 800,
    svgY: 56,
    mobXPercent: 28,
    mobYPercent: 76,
    mobSvgX: 100,
    mobSvgY: 365
  },
  { 
    name: 'Google Ads', 
    icon: '/images/integrations/google-ads.png', 
    category: 'Tracking Akuisisi Siswa', 
    xPercent: 92, 
    yPercent: 32,
    svgX: 920,
    svgY: 128,
    mobXPercent: 72,
    mobYPercent: 76,
    mobSvgX: 260,
    mobSvgY: 365
  },
  { 
    name: 'Zoom', 
    icon: '/images/integrations/zoom.png', 
    category: 'Webinar & Kelas Interaktif', 
    xPercent: 78, 
    yPercent: 50,
    svgX: 780,
    svgY: 200,
    mobXPercent: 18,
    mobYPercent: 92,
    mobSvgX: 65,
    mobSvgY: 442
  },
  { 
    name: 'Gmail', 
    icon: '/images/integrations/gmail.png', 
    category: 'Invoice & Surat Resmi', 
    xPercent: 92, 
    yPercent: 68,
    svgX: 920,
    svgY: 272,
    mobXPercent: 50,
    mobYPercent: 95,
    mobSvgX: 180,
    mobSvgY: 456
  },
  { 
    name: 'Notion', 
    icon: '/images/integrations/notion.png', 
    category: 'Silabus & Bank Materi', 
    xPercent: 80, 
    yPercent: 86,
    svgX: 800,
    svgY: 344,
    mobXPercent: 82,
    mobYPercent: 92,
    mobSvgX: 295,
    mobSvgY: 442
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
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 font-sans">
          <span className="font-mono text-xs uppercase tracking-wider font-bold text-white/80 mb-3 inline-block">
            /05 INTEGRASI & ALUR KERJA
          </span>
          
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white mb-3">
            Integrasi Mulus dengan Tools Bimbel Anda
          </h2>
          
          <p className="text-sm sm:text-base text-brand-100 font-normal leading-relaxed max-w-xl mx-auto font-sans">
            Hubungkan seluruh operasional bimbel Anda dengan tools harian dalam satu sistem terpusat.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* DESKTOP & TABLET VIEW: Orbital Layout with curved connectors (md and up) */}
        {/* ========================================================================= */}
        <div className="hidden md:flex relative max-w-4xl mx-auto h-[420px] select-none items-center justify-center">
          
          {/* Curved SVG Connectors */}
          <svg 
            className="absolute inset-0 w-full h-full pointer-events-none z-0" 
            viewBox="0 0 1000 400" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Center at x=500, y=200 */}
            {/* Left Connectors into Central Hub */}
            {leftIntegrations.map((tool, idx) => (
              <path 
                key={`line-left-${idx}`}
                d={`M ${tool.svgX} ${tool.svgY} C ${(tool.svgX + 500) / 2} ${tool.svgY}, ${(tool.svgX + 500) / 2} 200, 500 200`} 
                stroke="rgba(255,255,255,0.35)" 
                strokeWidth="1.5" 
                strokeDasharray="5 5" 
              />
            ))}

            {/* Right Connectors from Central Hub */}
            {rightIntegrations.map((tool, idx) => (
              <path 
                key={`line-right-${idx}`}
                d={`M 500 200 C ${(500 + tool.svgX) / 2} 200, ${(500 + tool.svgX) / 2} ${tool.svgY}, ${tool.svgX} ${tool.svgY}`} 
                stroke="rgba(255,255,255,0.35)" 
                strokeWidth="1.5" 
                strokeDasharray="5 5" 
              />
            ))}
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
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-white shadow-[0_10px_25px_rgba(0,0,0,0.22)] border border-white/60 group-hover:border-white transition-all flex items-center justify-center p-3 shrink-0">
                <div className="w-8 h-8 md:w-9 md:h-9 relative flex items-center justify-center shrink-0">
                  <Image
                    src={tool.icon}
                    alt={tool.name}
                    width={36}
                    height={36}
                    className="w-full h-full object-contain max-h-full max-w-full"
                  />
                </div>
              </div>
              <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-40">
                <span className="text-[11px] font-semibold bg-stone-900/90 text-white px-2.5 py-1 rounded-lg shadow-md">
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
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-white shadow-[0_10px_25px_rgba(0,0,0,0.22)] border border-white/60 group-hover:border-white transition-all flex items-center justify-center p-3 shrink-0">
                <div className="w-8 h-8 md:w-9 md:h-9 relative flex items-center justify-center shrink-0">
                  <Image
                    src={tool.icon}
                    alt={tool.name}
                    width={36}
                    height={36}
                    className="w-full h-full object-contain max-h-full max-w-full"
                  />
                </div>
              </div>
              <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-40">
                <span className="text-[11px] font-semibold bg-stone-900/90 text-white px-2.5 py-1 rounded-lg shadow-md">
                  {tool.name}
                </span>
              </div>
            </div>
          ))}

        </div>

        {/* ========================================================================= */}
        {/* MOBILE VIEW: Vertical Flow with full curved connectors (top-to-bottom)    */}
        {/* ========================================================================= */}
        <div className="flex md:hidden relative max-w-[340px] xs:max-w-[360px] mx-auto h-[480px] select-none items-center justify-center">
          
          {/* Vertical Curved SVG Connectors on Mobile */}
          <svg 
            className="absolute inset-0 w-full h-full pointer-events-none z-0" 
            viewBox="0 0 360 480" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Center at x=180, y=240 */}
            {/* Top 5 connectors curving down into Cressco Hub */}
            {topMobileTools.map((tool, idx) => (
              <path 
                key={`mob-line-top-${idx}`}
                d={`M ${tool.mobSvgX} ${tool.mobSvgY} C ${tool.mobSvgX} ${(tool.mobSvgY + 240) / 2}, 180 ${(tool.mobSvgY + 240) / 2}, 180 240`} 
                stroke="rgba(255,255,255,0.4)" 
                strokeWidth="1.5" 
                strokeDasharray="4 4" 
              />
            ))}

            {/* Bottom 5 connectors curving down from Cressco Hub */}
            {bottomMobileTools.map((tool, idx) => (
              <path 
                key={`mob-line-bottom-${idx}`}
                d={`M 180 240 C 180 ${(240 + tool.mobSvgY) / 2}, ${tool.mobSvgX} ${(240 + tool.mobSvgY) / 2}, ${tool.mobSvgX} ${tool.mobSvgY}`} 
                stroke="rgba(255,255,255,0.4)" 
                strokeWidth="1.5" 
                strokeDasharray="4 4" 
              />
            ))}
          </svg>

          {/* Central Mobile Cressco Hub */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
            <div className="w-20 h-20 rounded-full bg-white text-brand-600 flex flex-col items-center justify-center shadow-[0_12px_32px_rgba(0,0,0,0.35)] border-4 border-white/40">
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
          </div>

          {/* Top 5 Floating Tools */}
          {topMobileTools.map((tool, idx) => (
            <div
              key={`mob-top-${idx}`}
              className="absolute -translate-x-1/2 -translate-y-1/2 z-10 cursor-pointer active:scale-105 transition-transform"
              style={{ left: `${tool.mobXPercent}%`, top: `${tool.mobYPercent}%` }}
            >
              <div className="w-12 h-12 rounded-2xl bg-white shadow-[0_8px_20px_rgba(0,0,0,0.22)] border border-white/60 flex items-center justify-center p-2.5 shrink-0">
                <div className="w-6 h-6 relative flex items-center justify-center shrink-0">
                  <Image
                    src={tool.icon}
                    alt={tool.name}
                    width={26}
                    height={26}
                    className="w-full h-full object-contain max-h-full max-w-full"
                  />
                </div>
              </div>
            </div>
          ))}

          {/* Bottom 5 Floating Tools */}
          {bottomMobileTools.map((tool, idx) => (
            <div
              key={`mob-bottom-${idx}`}
              className="absolute -translate-x-1/2 -translate-y-1/2 z-10 cursor-pointer active:scale-105 transition-transform"
              style={{ left: `${tool.mobXPercent}%`, top: `${tool.mobYPercent}%` }}
            >
              <div className="w-12 h-12 rounded-2xl bg-white shadow-[0_8px_20px_rgba(0,0,0,0.22)] border border-white/60 flex items-center justify-center p-2.5 shrink-0">
                <div className="w-6 h-6 relative flex items-center justify-center shrink-0">
                  <Image
                    src={tool.icon}
                    alt={tool.name}
                    width={26}
                    height={26}
                    className="w-full h-full object-contain max-h-full max-w-full"
                  />
                </div>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
