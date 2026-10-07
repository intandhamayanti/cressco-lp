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

// 3 Spacious Tools on the Left (Arc distribution)
const leftIntegrations: IntegrationTool[] = [
  { 
    name: 'WhatsApp', 
    icon: '/images/integrations/whatsapp.png', 
    category: 'Broadcast & Notifikasi', 
    xPercent: 18, 
    yPercent: 22,
    svgX: 180,
    svgY: 88
  },
  { 
    name: 'Google Calendar', 
    icon: '/images/integrations/google-calendar.png', 
    category: 'Jadwal Sesi & Ujian', 
    xPercent: 10, 
    yPercent: 50,
    svgX: 100,
    svgY: 200
  },
  { 
    name: 'Microsoft Excel', 
    icon: '/images/integrations/excel.png', 
    category: 'Rekonsiliasi & Impor Data', 
    xPercent: 18, 
    yPercent: 78,
    svgX: 180,
    svgY: 312
  },
];

// 3 Spacious Tools on the Right (Arc distribution)
const rightIntegrations: IntegrationTool[] = [
  { 
    name: 'Zoom', 
    icon: '/images/integrations/zoom.png', 
    category: 'Webinar & Kelas Interaktif', 
    xPercent: 82, 
    yPercent: 22,
    svgX: 820,
    svgY: 88
  },
  { 
    name: 'Telegram', 
    icon: '/images/integrations/telegram.png', 
    category: 'Grup Pengajar & Notifikasi', 
    xPercent: 90, 
    yPercent: 50,
    svgX: 900,
    svgY: 200
  },
  { 
    name: 'Gmail', 
    icon: '/images/integrations/gmail.png', 
    category: 'Invoice & Surat Resmi', 
    xPercent: 82, 
    yPercent: 78,
    svgX: 820,
    svgY: 312
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
        {/* DESKTOP & TABLET VIEW: Spacious 3+3 Orbital Layout with curved connectors */}
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

          {/* Left Floating Tools (3 Icons with Generous Spacing) */}
          {leftIntegrations.map((tool, idx) => (
            <div
              key={`left-${idx}`}
              className="absolute -translate-x-1/2 -translate-y-1/2 z-10 transition-transform duration-300 hover:scale-110 hover:z-30 cursor-pointer group"
              style={{ left: `${tool.xPercent}%`, top: `${tool.yPercent}%` }}
              title={`${tool.name} • ${tool.category}`}
            >
              <div className="w-15 h-15 md:w-16 md:h-16 rounded-2xl bg-white shadow-[0_10px_25px_rgba(0,0,0,0.22)] border border-white/60 group-hover:border-white transition-all flex items-center justify-center p-3 shrink-0">
                <div className="w-9 h-9 relative flex items-center justify-center shrink-0">
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

          {/* Right Floating Tools (3 Icons with Generous Spacing) */}
          {rightIntegrations.map((tool, idx) => (
            <div
              key={`right-${idx}`}
              className="absolute -translate-x-1/2 -translate-y-1/2 z-10 transition-transform duration-300 hover:scale-110 hover:z-30 cursor-pointer group"
              style={{ left: `${tool.xPercent}%`, top: `${tool.yPercent}%` }}
              title={`${tool.name} • ${tool.category}`}
            >
              <div className="w-15 h-15 md:w-16 md:h-16 rounded-2xl bg-white shadow-[0_10px_25px_rgba(0,0,0,0.22)] border border-white/60 group-hover:border-white transition-all flex items-center justify-center p-3 shrink-0">
                <div className="w-9 h-9 relative flex items-center justify-center shrink-0">
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
        {/* MOBILE VIEW: Vertical Flow (Top Tools -> Cressco Core Hub -> Bottom Tools) */}
        {/* ========================================================================= */}
        <div className="flex md:hidden flex-col items-center gap-4 max-w-sm mx-auto">
          
          {/* Top Tools Grid */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 w-full">
            {topMobileTools.map((tool, idx) => (
              <div 
                key={`mob-top-${idx}`}
                className="flex items-center gap-2 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-xl shadow-sm border border-white/40 text-stone-900"
              >
                <div className="w-5 h-5 relative shrink-0 flex items-center justify-center">
                  <Image
                    src={tool.icon}
                    alt={tool.name}
                    width={20}
                    height={20}
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

          {/* Bottom Tools Grid */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 w-full">
            {bottomMobileTools.map((tool, idx) => (
              <div 
                key={`mob-bottom-${idx}`}
                className="flex items-center gap-2 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-xl shadow-sm border border-white/40 text-stone-900"
              >
                <div className="w-5 h-5 relative shrink-0 flex items-center justify-center">
                  <Image
                    src={tool.icon}
                    alt={tool.name}
                    width={20}
                    height={20}
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
