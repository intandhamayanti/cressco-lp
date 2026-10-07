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
  mobXPercent: number; // For mobile orbital layout
  mobYPercent: number;
  mobSvgX: number;
  mobSvgY: number;
}

const leftIntegrations: IntegrationTool[] = [
  { 
    name: 'WhatsApp', 
    icon: '/images/integrations/whatsapp.png', 
    category: 'Broadcast & Notifikasi', 
    xPercent: 8, 
    yPercent: 32,
    svgX: 80,
    svgY: 128,
    mobXPercent: 14,
    mobYPercent: 18,
    mobSvgX: 50,
    mobSvgY: 65,
  },
  { 
    name: 'Google Calendar', 
    icon: '/images/integrations/google-calendar.png', 
    category: 'Jadwal Sesi & Ujian', 
    xPercent: 22, 
    yPercent: 50,
    svgX: 220,
    svgY: 200,
    mobXPercent: 8,
    mobYPercent: 50,
    mobSvgX: 28,
    mobSvgY: 180,
  },
  { 
    name: 'Google Meet', 
    icon: '/images/integrations/google-meet.png', 
    category: 'Kelas Online & Privat', 
    xPercent: 20, 
    yPercent: 14,
    svgX: 200,
    svgY: 56,
    mobXPercent: 14,
    mobYPercent: 82,
    mobSvgX: 50,
    mobSvgY: 295,
  },
  { 
    name: 'Mailchimp', 
    icon: '/images/integrations/mailchimp.png', 
    category: 'Email Broadcast Siswa', 
    xPercent: 8, 
    yPercent: 68,
    svgX: 80,
    svgY: 272,
    mobXPercent: 0,
    mobYPercent: 0,
    mobSvgX: 0,
    mobSvgY: 0,
  },
  { 
    name: 'Microsoft Excel', 
    icon: '/images/integrations/excel.png', 
    category: 'Rekonsiliasi & Impor Data', 
    xPercent: 20, 
    yPercent: 86,
    svgX: 200,
    svgY: 344,
    mobXPercent: 0,
    mobYPercent: 0,
    mobSvgX: 0,
    mobSvgY: 0,
  },
];

const rightIntegrations: IntegrationTool[] = [
  { 
    name: 'Zoom', 
    icon: '/images/integrations/zoom.png', 
    category: 'Webinar & Kelas Interaktif', 
    xPercent: 78, 
    yPercent: 50,
    svgX: 780,
    svgY: 200,
    mobXPercent: 86,
    mobYPercent: 18,
    mobSvgX: 310,
    mobSvgY: 65,
  },
  { 
    name: 'Telegram', 
    icon: '/images/integrations/telegram.png', 
    category: 'Grup Pengajar & Tugas', 
    xPercent: 80, 
    yPercent: 14,
    svgX: 800,
    svgY: 56,
    mobXPercent: 92,
    mobYPercent: 50,
    mobSvgX: 332,
    mobSvgY: 180,
  },
  { 
    name: 'Gmail', 
    icon: '/images/integrations/gmail.png', 
    category: 'Invoice & Surat Resmi', 
    xPercent: 92, 
    yPercent: 68,
    svgX: 920,
    svgY: 272,
    mobXPercent: 86,
    mobYPercent: 82,
    mobSvgX: 310,
    mobSvgY: 295,
  },
  { 
    name: 'Google Ads', 
    icon: '/images/integrations/google-ads.png', 
    category: 'Tracking Akuisisi Siswa', 
    xPercent: 92, 
    yPercent: 32,
    svgX: 920,
    svgY: 128,
    mobXPercent: 0,
    mobYPercent: 0,
    mobSvgX: 0,
    mobSvgY: 0,
  },
  { 
    name: 'Notion', 
    icon: '/images/integrations/notion.png', 
    category: 'Silabus & Bank Materi', 
    xPercent: 80, 
    yPercent: 86,
    svgX: 800,
    svgY: 344,
    mobXPercent: 0,
    mobYPercent: 0,
    mobSvgX: 0,
    mobSvgY: 0,
  },
];

const mobileLeftTools = leftIntegrations.slice(0, 3);
const mobileRightTools = rightIntegrations.slice(0, 3);

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
            {/* Left 5 Connectors to Center (500, 200) */}
            {leftIntegrations.map((tool, idx) => (
              <path 
                key={`line-left-${idx}`}
                d={`M ${tool.svgX} ${tool.svgY} C ${(tool.svgX + 500) / 2} ${tool.svgY}, ${(tool.svgX + 500) / 2} 200, 500 200`} 
                stroke="rgba(255,255,255,0.38)" 
                strokeWidth="2" 
                strokeDasharray="5 5" 
              />
            ))}

            {/* Right 5 Connectors to Center (500, 200) */}
            {rightIntegrations.map((tool, idx) => (
              <path 
                key={`line-right-${idx}`}
                d={`M ${tool.svgX} ${tool.svgY} C ${(tool.svgX + 500) / 2} ${tool.svgY}, ${(tool.svgX + 500) / 2} 200, 500 200`} 
                stroke="rgba(255,255,255,0.38)" 
                strokeWidth="2" 
                strokeDasharray="5 5" 
              />
            ))}
          </svg>

          {/* Central Cressco Core Hub (Static) */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none">
            <div className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-white text-brand-600 flex flex-col items-center justify-center shadow-[0_16px_40px_rgba(0,0,0,0.35)] border-4 border-white/40 select-none">
              <Image
                src="/images/cressco-logo.png"
                alt="Cressco Core"
                width={44}
                height={44}
                className="object-contain drop-shadow-sm"
              />
              <span className="text-[10px] md:text-xs font-black uppercase tracking-wider mt-1 text-brand-700">
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
        {/* MOBILE VIEW: Exact Curved Orbital Connectors (Mirrors Desktop Layout)     */}
        {/* ========================================================================= */}
        <div className="block md:hidden">
          
          <div className="relative max-w-[360px] mx-auto h-[360px] select-none">
            
            {/* Mobile Curved SVG Connectors: Curved lines branching from left/right into center (180, 180) */}
            <svg 
              className="absolute inset-0 w-full h-full pointer-events-none z-0" 
              viewBox="0 0 360 360" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Left 3 Curved Lines to Center (180, 180) */}
              {mobileLeftTools.map((tool, idx) => (
                <path 
                  key={`mob-curve-left-${idx}`}
                  d={`M ${tool.mobSvgX} ${tool.mobSvgY} C ${(tool.mobSvgX + 180) / 2} ${tool.mobSvgY}, ${(tool.mobSvgX + 180) / 2} 180, 180 180`} 
                  stroke="rgba(255,255,255,0.4)" 
                  strokeWidth="1.5" 
                  strokeDasharray="4 4" 
                />
              ))}

              {/* Right 3 Curved Lines to Center (180, 180) */}
              {mobileRightTools.map((tool, idx) => (
                <path 
                  key={`mob-curve-right-${idx}`}
                  d={`M ${tool.mobSvgX} ${tool.mobSvgY} C ${(tool.mobSvgX + 180) / 2} ${tool.mobSvgY}, ${(tool.mobSvgX + 180) / 2} 180, 180 180`} 
                  stroke="rgba(255,255,255,0.4)" 
                  strokeWidth="1.5" 
                  strokeDasharray="4 4" 
                />
              ))}
            </svg>

            {/* Central Mobile Cressco Hub */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none">
              <div className="w-20 h-20 rounded-full bg-white text-brand-600 flex flex-col items-center justify-center shadow-[0_14px_35px_rgba(0,0,0,0.35)] border-4 border-white/40 select-none">
                <Image
                  src="/images/cressco-logo.png"
                  alt="Cressco Core"
                  width={34}
                  height={34}
                  className="object-contain drop-shadow-sm"
                />
                <span className="text-[8px] font-black uppercase tracking-wider mt-0.5 text-brand-700">
                  CRESSCO
                </span>
              </div>
            </div>

            {/* Mobile Left Floating Tools (3 Tools on Left Arc) */}
            {mobileLeftTools.map((tool, idx) => (
              <div
                key={`mob-tool-left-${idx}`}
                className="absolute -translate-x-1/2 -translate-y-1/2 z-10 cursor-pointer active:scale-110 transition-transform"
                style={{ left: `${tool.mobXPercent}%`, top: `${tool.mobYPercent}%` }}
              >
                <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-white shadow-[0_8px_20px_rgba(0,0,0,0.22)] border border-white/60 flex items-center justify-center p-2.5 shrink-0">
                  <div className="w-6 h-6 sm:w-7 sm:h-7 relative flex items-center justify-center shrink-0">
                    <Image
                      src={tool.icon}
                      alt={tool.name}
                      width={28}
                      height={28}
                      className="w-full h-full object-contain max-h-full max-w-full"
                    />
                  </div>
                </div>
              </div>
            ))}

            {/* Mobile Right Floating Tools (3 Tools on Right Arc) */}
            {mobileRightTools.map((tool, idx) => (
              <div
                key={`mob-tool-right-${idx}`}
                className="absolute -translate-x-1/2 -translate-y-1/2 z-10 cursor-pointer active:scale-110 transition-transform"
                style={{ left: `${tool.mobXPercent}%`, top: `${tool.mobYPercent}%` }}
              >
                <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-white shadow-[0_8px_20px_rgba(0,0,0,0.22)] border border-white/60 flex items-center justify-center p-2.5 shrink-0">
                  <div className="w-6 h-6 sm:w-7 sm:h-7 relative flex items-center justify-center shrink-0">
                    <Image
                      src={tool.icon}
                      alt={tool.name}
                      width={28}
                      height={28}
                      className="w-full h-full object-contain max-h-full max-w-full"
                    />
                  </div>
                </div>
              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}
