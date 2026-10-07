'use client';

import React from 'react';
import Image from 'next/image';

interface IntegrationTool {
  name: string;
  icon: string;
  category: string;
  xPercent: number; // For responsive orbital layout
  yPercent: number;
  svgX: number;
  svgY: number;
}

const leftIntegrations: IntegrationTool[] = [
  { 
    name: 'Google Meet', 
    icon: '/images/integrations/google-meet.png', 
    category: 'Kelas Online & Sesi Privat', 
    xPercent: 18, 
    yPercent: 25,
    svgX: 180,
    svgY: 100
  },
  { 
    name: 'Mailchimp', 
    icon: '/images/integrations/mailchimp.png', 
    category: 'Email Broadcast & Newsletter', 
    xPercent: 12, 
    yPercent: 50,
    svgX: 120,
    svgY: 200
  },
  { 
    name: 'Microsoft Excel', 
    icon: '/images/integrations/excel.png', 
    category: 'Impor/Ekspor & Rekonsiliasi Kas', 
    xPercent: 18, 
    yPercent: 75,
    svgX: 180,
    svgY: 300
  },
];

const rightIntegrations: IntegrationTool[] = [
  { 
    name: 'Notion', 
    icon: '/images/integrations/notion.png', 
    category: 'Silabus & Bank Materi', 
    xPercent: 82, 
    yPercent: 32,
    svgX: 820,
    svgY: 128
  },
  { 
    name: 'Telegram', 
    icon: '/images/integrations/telegram.png', 
    category: 'Notifikasi Otomatis & Komunitas', 
    xPercent: 82, 
    yPercent: 68,
    svgX: 820,
    svgY: 272
  },
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
            {/* Left Connectors */}
            {leftIntegrations.map((tool, idx) => (
              <path 
                key={`line-left-${idx}`}
                d={`M ${tool.svgX} ${tool.svgY} C ${(tool.svgX + 500) / 2} ${tool.svgY}, ${(tool.svgX + 500) / 2} 200, 500 200`} 
                stroke="rgba(255,255,255,0.35)" 
                strokeWidth="1.5" 
                strokeDasharray="5 5" 
              />
            ))}

            {/* Right Connectors */}
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
              className="absolute -translate-x-1/2 -translate-y-1/2 z-10 transition-all duration-300 hover:scale-110 hover:z-30 cursor-pointer group"
              style={{ left: `${tool.xPercent}%`, top: `${tool.yPercent}%` }}
              title={`${tool.name} • ${tool.category}`}
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-2xl bg-white/95 backdrop-blur-md p-2 sm:p-2.5 flex items-center justify-center shadow-[0_10px_25px_rgba(0,0,0,0.25)] border border-white/40 group-hover:border-white transition-all">
                <Image
                  src={tool.icon}
                  alt={tool.name}
                  width={48}
                  height={48}
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
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-2xl bg-white/95 backdrop-blur-md p-2 sm:p-2.5 flex items-center justify-center shadow-[0_10px_25px_rgba(0,0,0,0.25)] border border-white/40 group-hover:border-white transition-all">
                <Image
                  src={tool.icon}
                  alt={tool.name}
                  width={48}
                  height={48}
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

      </div>
    </section>
  );
}
