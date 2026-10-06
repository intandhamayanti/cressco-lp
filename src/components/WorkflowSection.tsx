'use client';

import React from 'react';
import Image from 'next/image';

// Authentic Brand Logos (SVG Vector Components)
function WhatsAppIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2Z" fill="#25D366"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M17.5 14.33C17.2 14.18 15.73 13.45 15.45 13.35C15.18 13.25 14.98 13.2 14.78 13.5C14.58 13.8 14.02 14.47 13.85 14.67C13.68 14.87 13.5 14.89 13.2 14.74C12.9 14.59 11.94 14.28 10.8 13.27C9.92 12.48 9.32 11.51 9.15 11.21C8.98 10.91 9.13 10.75 9.28 10.6C9.42 10.47 9.58 10.25 9.73 10.07C9.88 9.9 9.93 9.77 10.03 9.57C10.13 9.37 10.08 9.2 10.01 9.05C9.93 8.9 9.33 7.42 9.08 6.82C8.83 6.22 8.58 6.3 8.4 6.3C8.23 6.29 8.03 6.29 7.83 6.29C7.63 6.29 7.3 6.36 7.03 6.66C6.75 6.96 6 7.66 6 9.09C6 10.51 7.03 11.89 7.18 12.09C7.33 12.29 9.2 15.16 12.07 16.39C12.75 16.69 13.29 16.86 13.7 17C14.39 17.21 15.02 17.18 15.52 17.11C16.07 17.02 17.2 16.42 17.44 15.77C17.67 15.11 17.67 14.56 17.6 14.44C17.53 14.33 17.35 14.26 17.05 14.11L17.5 14.33Z" fill="white"/>
    </svg>
  );
}

function GoogleDriveIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7.71 3.5L1.15 15L4.58 21L11.14 9.5L7.71 3.5Z" fill="#0066DA"/>
      <path d="M16.29 3.5H7.71L11.14 9.5H22.85L19.42 3.5H16.29Z" fill="#00AC47"/>
      <path d="M22.85 9.5L19.42 3.5L12.86 15H6.01L9.43 21H19.72L22.85 9.5Z" fill="#EA4335" opacity="0"/>
      <path d="M12.86 15L9.43 21H19.72L23.14 15H12.86Z" fill="#FFBA00"/>
    </svg>
  );
}

function GoogleCalendarIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M19 4H18V2H16V4H8V2H6V4H5C3.89 4 3.01 4.9 3.01 6L3 20C3 21.1 3.89 22 5 22H19C20.1 22 21 21.1 21 20V6C21 4.9 20.1 4 19 4ZM19 20H5V9H19V20Z" fill="#1A73E8"/>
      <path d="M11 11H7V15H11V11Z" fill="#4285F4"/>
      <path d="M17 11H13V15H17V11Z" fill="#EA4335"/>
      <path d="M11 16H7V19H11V16Z" fill="#FBBC04"/>
      <path d="M17 16H13V19H17V16Z" fill="#34A853"/>
    </svg>
  );
}

function GoogleSheetsIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14.5 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V7.5L14.5 2Z" fill="#0F9D58"/>
      <path d="M14 2V8H20L14 2Z" fill="#87CEAC"/>
      <path d="M8 13H16V14.5H8V13ZM8 16H16V17.5H8V16ZM8 10H12V11.5H8V10Z" fill="white"/>
    </svg>
  );
}

function ZoomIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="24" height="24" rx="6" fill="#2D8CFF"/>
      <path d="M4.5 8C4.5 6.89543 5.39543 6 6.5 6H13.5C14.6046 6 15.5 6.89543 15.5 8V16C15.5 17.1046 14.6046 18 13.5 18H6.5C5.39543 18 4.5 17.1046 4.5 16V8Z" fill="white"/>
      <path d="M16.5 10.2L19.5 8.2V15.8L16.5 13.8V10.2Z" fill="white"/>
    </svg>
  );
}

function ExcelIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="24" height="24" rx="5" fill="#107C41"/>
      <path d="M14.5 7H18V17H14.5V7Z" fill="white" fillOpacity="0.8"/>
      <path d="M6 8.5L9.2 12L6 15.5H8.2L10.2 13.2L12.2 15.5H14.4L11.2 12L14.4 8.5H12.2L10.2 10.8L8.2 8.5H6Z" fill="white"/>
    </svg>
  );
}

function GmailIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2 6.5V17.5C2 18.6 2.9 19.5 4 19.5H6V10.5L12 15L18 10.5V19.5H20C21.1 19.5 22 18.6 22 17.5V6.5C22 5.07 20.37 4.24 19.23 5.1L12 10.5L4.77 5.1C3.63 4.24 2 5.07 2 6.5Z" fill="#EA4335"/>
      <path d="M6 19.5H4C2.9 19.5 2 18.6 2 17.5V6.5L6 9.5V19.5Z" fill="#C5221F"/>
      <path d="M18 19.5H20C21.1 19.5 22 18.6 22 17.5V6.5L18 9.5V19.5Z" fill="#4285F4"/>
    </svg>
  );
}

function NotionIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="24" height="24" rx="5" fill="#000000"/>
      <path d="M6.5 6.5L9 6.8V17L7 17.3V8.2L6.5 8.2V6.5ZM17.5 17.5L15 17.2V7L17 6.7V15.8L17.5 15.8V17.5ZM9 7.5L15 16.5H16V6.5L10 15.5H9V7.5Z" fill="white"/>
    </svg>
  );
}

function QrisIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="24" height="24" rx="5" fill="#EE2737"/>
      <path d="M5 5H10V10H5V5Z" fill="white"/>
      <path d="M6.5 6.5H8.5V8.5H6.5V6.5Z" fill="#EE2737"/>
      <path d="M14 5H19V10H14V5Z" fill="white"/>
      <path d="M15.5 6.5H17.5V8.5H15.5V6.5Z" fill="#EE2737"/>
      <path d="M5 14H10V19H5V14Z" fill="white"/>
      <path d="M6.5 15.5H8.5V17.5H6.5V15.5Z" fill="#EE2737"/>
      <path d="M14 14H16.5V16.5H14V14ZM16.5 16.5H19V19H16.5V16.5ZM16.5 14H19V16.5H16.5V14ZM14 16.5H16.5V19H14V16.5Z" fill="white"/>
    </svg>
  );
}

function TelegramIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="12" fill="#2AABEE"/>
      <path d="M5.5 11.8L16.8 7.2C17.3 7 17.8 7.3 17.6 7.8L15.7 16.8C15.5 17.3 15 17.4 14.6 17.1L11.8 15L10.5 16.2C10.3 16.4 10.1 16.5 9.9 16.5L10.1 13.5L15.6 8.5C15.8 8.3 15.6 8.1 15.3 8.3L8.5 12.6L5.6 11.7C5 11.5 5 11 5.5 11.8Z" fill="white"/>
    </svg>
  );
}

export default function WorkflowSection() {
  const leftIntegrations = [
    { name: 'WhatsApp', desc: 'Notifikasi Wali', icon: WhatsAppIcon },
    { name: 'Google Drive', desc: 'Modul & Materi', icon: GoogleDriveIcon },
    { name: 'Google Sheets', desc: 'Import Data Siswa', icon: GoogleSheetsIcon },
    { name: 'Google Calendar', desc: 'Jadwal & Sesi', icon: GoogleCalendarIcon },
    { name: 'Zoom', desc: 'Kelas Online', icon: ZoomIcon },
  ];

  const rightIntegrations = [
    { name: 'QRIS & Payment', desc: 'Tagihan SPP', icon: QrisIcon },
    { name: 'Microsoft Excel', desc: 'Laporan Keuangan', icon: ExcelIcon },
    { name: 'Gmail', desc: 'Kwitansi Digital', icon: GmailIcon },
    { name: 'Notion', desc: 'Silabus Bimbel', icon: NotionIcon },
    { name: 'Telegram', desc: 'Broadcast Info', icon: TelegramIcon },
  ];

  return (
    <section id="workflow" className="py-24 sm:py-32 bg-[#FAF9F6] relative overflow-hidden">
      
      {/* Background Subtle Ambience */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-brand-500/[0.04] rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-grid-pattern opacity-15" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-50 border border-brand-200 text-brand-700 text-xs font-semibold uppercase tracking-wider mb-4 shadow-soft-sm">
            Integrations & Workflow
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-charcoal-900 leading-tight mb-5">
            Seamless Integrations That <br className="hidden sm:inline" />
            <span className="italic font-serif font-normal text-brand-600">Power Your Bimbel Workflow</span>
          </h2>
          
          <p className="text-base sm:text-lg text-charcoal-100 font-normal leading-relaxed max-w-2xl mx-auto">
            Hubungkan seluruh operasional bimbel Anda dengan tools harian. WhatsApp, Google Workspace, payment gateway, dan spreadsheet terintegrasi dalam satu sistem terpusat.
          </p>
        </div>

        {/* Hub & Spoke Connector Container */}
        <div className="relative max-w-5xl mx-auto bg-white/80 backdrop-blur-sm rounded-3xl border border-black/[0.07] p-6 sm:p-10 lg:p-14 shadow-soft-xl overflow-hidden">
          
          {/* Desktop Curved SVG Connectors (Radiating from Left and Right to Central Hub) */}
          <svg 
            className="hidden lg:block absolute inset-0 w-full h-full pointer-events-none z-0" 
            viewBox="0 0 1000 500" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="lineGradLeft" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#CBD5E1" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#CE482A" stopOpacity="0.8" />
              </linearGradient>
              <linearGradient id="lineGradRight" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#CE482A" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#CBD5E1" stopOpacity="0.4" />
              </linearGradient>
            </defs>

            {/* Left Connectors into Hub (Center at x=500, y=250) */}
            <path d="M 230 65 C 360 65, 410 220, 500 250" stroke="url(#lineGradLeft)" strokeWidth="1.5" strokeDasharray="5 5" className="animate-pulse" />
            <path d="M 230 155 C 340 155, 420 230, 500 250" stroke="url(#lineGradLeft)" strokeWidth="1.5" strokeDasharray="5 5" />
            <path d="M 230 250 L 500 250" stroke="url(#lineGradLeft)" strokeWidth="2" strokeDasharray="5 5" />
            <path d="M 230 345 C 340 345, 420 270, 500 250" stroke="url(#lineGradLeft)" strokeWidth="1.5" strokeDasharray="5 5" />
            <path d="M 230 435 C 360 435, 410 280, 500 250" stroke="url(#lineGradLeft)" strokeWidth="1.5" strokeDasharray="5 5" className="animate-pulse" />

            {/* Right Connectors from Hub to Right Pills */}
            <path d="M 500 250 C 590 220, 640 65, 770 65" stroke="url(#lineGradRight)" strokeWidth="1.5" strokeDasharray="5 5" className="animate-pulse" />
            <path d="M 500 250 C 580 230, 660 155, 770 155" stroke="url(#lineGradRight)" strokeWidth="1.5" strokeDasharray="5 5" />
            <path d="M 500 250 L 770 250" stroke="url(#lineGradRight)" strokeWidth="2" strokeDasharray="5 5" />
            <path d="M 500 250 C 580 270, 660 345, 770 345" stroke="url(#lineGradRight)" strokeWidth="1.5" strokeDasharray="5 5" />
            <path d="M 500 250 C 590 280, 640 435, 770 435" stroke="url(#lineGradRight)" strokeWidth="1.5" strokeDasharray="5 5" className="animate-pulse" />
          </svg>

          {/* Grid Layout: Left Column (5 Pills) - Center Hub - Right Column (5 Pills) */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center">
            
            {/* Left Side: 5 Integration Pills */}
            <div className="lg:col-span-4 flex flex-col gap-3.5 sm:gap-4">
              {leftIntegrations.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={idx}
                    className="group bg-white hover:bg-surface-50 border border-black/[0.08] hover:border-brand-300 rounded-2xl p-3 sm:py-3 sm:px-4 shadow-soft-sm hover:shadow-soft-md transition-all duration-200 flex items-center justify-between hover:-translate-x-1"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-xl bg-surface-100/80 border border-black/[0.04] flex items-center justify-center shrink-0 p-1 group-hover:scale-110 transition-transform">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <div className="text-left">
                        <div className="text-sm font-bold text-charcoal-900 group-hover:text-brand-600 transition-colors">
                          {item.name}
                        </div>
                        <div className="text-[11px] text-charcoal-50 font-medium">
                          {item.desc}
                        </div>
                      </div>
                    </div>
                    <span className="w-2 h-2 rounded-full bg-emerald-500/80" />
                  </div>
                );
              })}
            </div>

            {/* Central Cressco Core Hub (Concentric Glowing Rings) */}
            <div className="lg:col-span-4 flex flex-col items-center justify-center my-6 lg:my-0">
              
              <div className="relative flex items-center justify-center">
                {/* Outer Concentric Glowing Halo */}
                <div className="w-48 h-48 sm:w-60 sm:h-60 rounded-full bg-gradient-to-tr from-brand-100/50 via-brand-50/70 to-orange-100/40 border border-brand-200/50 flex items-center justify-center animate-pulse" />
                
                {/* Middle Translucent Layer */}
                <div className="absolute w-36 h-36 sm:w-44 sm:h-44 rounded-full bg-white/95 shadow-soft-lg border border-brand-100 flex items-center justify-center backdrop-blur-md" />
                
                {/* Center Core Button with Cressco Emblem */}
                <div className="absolute w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-brand-500 text-white flex flex-col items-center justify-center shadow-brand-glow border-4 border-white group hover:scale-105 transition-transform cursor-pointer">
                  <Image
                    src="/images/cressco-logo.png"
                    alt="Cressco Core Hub"
                    width={36}
                    height={36}
                    className="object-contain filter brightness-0 invert drop-shadow"
                  />
                  <span className="text-[9px] font-black uppercase tracking-wider mt-0.5 text-white/95">
                    CORE
                  </span>
                </div>
              </div>

              {/* Status Tagline below Hub */}
              <div className="mt-4 px-3.5 py-1 rounded-full bg-brand-50 border border-brand-200 text-[11px] font-bold text-brand-700 tracking-wide shadow-soft-sm text-center">
                Central Synchronization Hub
              </div>
            </div>

            {/* Right Side: 5 Integration Pills */}
            <div className="lg:col-span-4 flex flex-col gap-3.5 sm:gap-4">
              {rightIntegrations.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={idx}
                    className="group bg-white hover:bg-surface-50 border border-black/[0.08] hover:border-brand-300 rounded-2xl p-3 sm:py-3 sm:px-4 shadow-soft-sm hover:shadow-soft-md transition-all duration-200 flex items-center justify-between hover:translate-x-1"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-xl bg-surface-100/80 border border-black/[0.04] flex items-center justify-center shrink-0 p-1 group-hover:scale-110 transition-transform">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <div className="text-left">
                        <div className="text-sm font-bold text-charcoal-900 group-hover:text-brand-600 transition-colors">
                          {item.name}
                        </div>
                        <div className="text-[11px] text-charcoal-50 font-medium">
                          {item.desc}
                        </div>
                      </div>
                    </div>
                    <span className="w-2 h-2 rounded-full bg-emerald-500/80" />
                  </div>
                );
              })}
            </div>

          </div>

          {/* Bottom Clarifying Footer Banner */}
          <div className="mt-10 pt-6 border-t border-black/[0.05] flex flex-col sm:flex-row items-center justify-between text-xs text-charcoal-50 gap-3 text-center sm:text-left">
            <span>✨ Otomatisasi sync dua arah tanpa perlu input berulang</span>
            <span className="font-mono text-brand-600 font-semibold bg-brand-50 px-2.5 py-1 rounded-md border border-brand-100">
              Zero Manual Double-Entry
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}
