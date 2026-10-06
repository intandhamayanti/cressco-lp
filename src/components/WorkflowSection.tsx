'use client';

import React from 'react';
import Image from 'next/image';

// Authentic Brand Logos (SVG Vector Components styled as clean floating icons)
function WhatsAppIcon({ className = "w-9 h-9 sm:w-11 sm:h-11 md:w-12 md:h-12" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="24" r="24" fill="#25D366" />
      <path fillRule="evenodd" clipRule="evenodd" d="M34.5 28.33C33.9 28.03 30.96 26.57 30.4 26.37C29.86 26.17 29.46 26.07 29.06 26.67C28.66 27.27 27.54 28.61 27.2 29.01C26.86 29.41 26.5 29.45 25.9 29.15C25.3 28.85 23.38 28.23 21.1 26.21C19.34 24.63 18.14 22.69 17.8 22.09C17.46 21.49 17.76 21.17 18.06 20.87C18.34 20.61 18.66 20.17 18.96 19.81C19.26 19.47 19.36 19.21 19.56 18.81C19.76 18.41 19.66 18.07 19.52 17.77C19.36 17.47 18.16 14.51 17.66 13.31C17.16 12.11 16.66 12.27 16.3 12.27C15.96 12.25 15.56 12.25 15.16 12.25C14.76 12.25 14.1 12.39 13.56 12.99C13 13.59 11.5 14.99 11.5 17.85C11.5 20.69 13.56 23.45 13.86 23.85C14.16 24.25 17.9 29.99 23.64 32.45C25 33.05 26.08 33.39 26.9 33.67C28.28 34.09 29.54 34.03 30.54 33.89C31.64 33.71 33.9 32.51 34.38 31.21C34.84 29.89 34.84 28.79 34.7 28.55C34.56 28.33 34.2 28.19 33.6 27.89L34.5 28.33Z" fill="white"/>
    </svg>
  );
}

function GoogleDriveIcon({ className = "w-9 h-9 sm:w-11 sm:h-11 md:w-12 md:h-12" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="48" height="48" rx="12" fill="white" />
      <g transform="translate(6, 6) scale(1.5)">
        <path d="M7.71 3.5L1.15 15L4.58 21L11.14 9.5L7.71 3.5Z" fill="#0066DA"/>
        <path d="M16.29 3.5H7.71L11.14 9.5H22.85L19.42 3.5H16.29Z" fill="#00AC47"/>
        <path d="M12.86 15L9.43 21H19.72L23.14 15H12.86Z" fill="#FFBA00"/>
      </g>
    </svg>
  );
}

function GoogleSheetsIcon({ className = "w-9 h-9 sm:w-11 sm:h-11 md:w-12 md:h-12" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="48" height="48" rx="12" fill="white" />
      <g transform="translate(7, 7) scale(1.4)">
        <path d="M14.5 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V7.5L14.5 2Z" fill="#0F9D58"/>
        <path d="M14 2V8H20L14 2Z" fill="#87CEAC"/>
        <path d="M8 13H16V14.5H8V13ZM8 16H16V17.5H8V16ZM8 10H12V11.5H8V10Z" fill="white"/>
      </g>
    </svg>
  );
}

function GoogleCalendarIcon({ className = "w-9 h-9 sm:w-11 sm:h-11 md:w-12 md:h-12" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="48" height="48" rx="12" fill="white" />
      <g transform="translate(6, 6) scale(1.5)">
        <path d="M19 4H18V2H16V4H8V2H6V4H5C3.89 4 3.01 4.9 3.01 6L3 20C3 21.1 3.89 22 5 22H19C20.1 22 21 21.1 21 20V6C21 4.9 20.1 4 19 4ZM19 20H5V9H19V20Z" fill="#1A73E8"/>
        <path d="M11 11H7V15H11V11Z" fill="#4285F4"/>
        <path d="M17 11H13V15H17V11Z" fill="#EA4335"/>
        <path d="M11 16H7V19H11V16Z" fill="#FBBC04"/>
        <path d="M17 16H13V19H17V16Z" fill="#34A853"/>
      </g>
    </svg>
  );
}

function ZoomIcon({ className = "w-9 h-9 sm:w-11 sm:h-11 md:w-12 md:h-12" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="48" height="48" rx="12" fill="#2D8CFF"/>
      <path d="M9 16C9 13.7909 10.7909 12 13 12H27C29.2091 12 31 13.7909 31 16V32C31 34.2091 29.2091 36 27 36H13C10.7909 36 9 34.2091 9 32V16Z" fill="white"/>
      <path d="M33 20.4L39 16.4V31.6L33 27.6V20.4Z" fill="white"/>
    </svg>
  );
}

function QrisIcon({ className = "w-9 h-9 sm:w-11 sm:h-11 md:w-12 md:h-12" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="48" height="48" rx="12" fill="white"/>
      <g transform="translate(6, 6) scale(1.5)">
        <rect width="24" height="24" rx="4" fill="#EE2737"/>
        <path d="M5 5H10V10H5V5Z" fill="white"/>
        <path d="M6.5 6.5H8.5V8.5H6.5V6.5Z" fill="#EE2737"/>
        <path d="M14 5H19V10H14V5Z" fill="white"/>
        <path d="M15.5 6.5H17.5V8.5H15.5V6.5Z" fill="#EE2737"/>
        <path d="M5 14H10V19H5V14Z" fill="white"/>
        <path d="M6.5 15.5H8.5V17.5H6.5V15.5Z" fill="#EE2737"/>
        <path d="M14 14H16.5V16.5H14V14ZM16.5 16.5H19V19H16.5V16.5ZM16.5 14H19V16.5H16.5V14ZM14 16.5H16.5V19H14V16.5Z" fill="white"/>
      </g>
    </svg>
  );
}

function ExcelIcon({ className = "w-9 h-9 sm:w-11 sm:h-11 md:w-12 md:h-12" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="48" height="48" rx="12" fill="#107C41"/>
      <g transform="translate(6, 6) scale(1.5)">
        <path d="M14.5 7H18V17H14.5V7Z" fill="white" fillOpacity="0.85"/>
        <path d="M6 8.5L9.2 12L6 15.5H8.2L10.2 13.2L12.2 15.5H14.4L11.2 12L14.4 8.5H12.2L10.2 10.8L8.2 8.5H6Z" fill="white"/>
      </g>
    </svg>
  );
}

function GmailIcon({ className = "w-9 h-9 sm:w-11 sm:h-11 md:w-12 md:h-12" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="48" height="48" rx="12" fill="white"/>
      <g transform="translate(6, 6) scale(1.5)">
        <path d="M2 6.5V17.5C2 18.6 2.9 19.5 4 19.5H6V10.5L12 15L18 10.5V19.5H20C21.1 19.5 22 18.6 22 17.5V6.5C22 5.07 20.37 4.24 19.23 5.1L12 10.5L4.77 5.1C3.63 4.24 2 5.07 2 6.5Z" fill="#EA4335"/>
        <path d="M6 19.5H4C2.9 19.5 2 18.6 2 17.5V6.5L6 9.5V19.5Z" fill="#C5221F"/>
        <path d="M18 19.5H20C21.1 19.5 22 18.6 22 17.5V6.5L18 9.5V19.5Z" fill="#4285F4"/>
      </g>
    </svg>
  );
}

function NotionIcon({ className = "w-9 h-9 sm:w-11 sm:h-11 md:w-12 md:h-12" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="48" height="48" rx="12" fill="white"/>
      <g transform="translate(6, 6) scale(1.5)">
        <rect width="24" height="24" rx="4" fill="#000000"/>
        <path d="M6.5 6.5L9 6.8V17L7 17.3V8.2L6.5 8.2V6.5ZM17.5 17.5L15 17.2V7L17 6.7V15.8L17.5 15.8V17.5ZM9 7.5L15 16.5H16V6.5L10 15.5H9V7.5Z" fill="white"/>
      </g>
    </svg>
  );
}

function TelegramIcon({ className = "w-9 h-9 sm:w-11 sm:h-11 md:w-12 md:h-12" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="24" r="24" fill="#2AABEE"/>
      <path d="M11 23.6L33.6 14.4C34.6 14 35.6 14.6 35.2 15.6L31.4 33.6C31 34.6 30 34.8 29.2 34.2L23.6 30L21 32.4C20.6 32.8 20.2 33 19.8 33L20.2 27L31.2 17C31.6 16.6 31.2 16.2 30.6 16.6L17 25.2L11.2 23.4C10 23 10 22 11 23.6Z" fill="white"/>
    </svg>
  );
}

export default function WorkflowSection() {
  return (
    <section id="workflow" className="py-14 sm:py-20 bg-[#CE482A] bg-gradient-to-b from-[#D44D2F] via-[#CE482A] to-[#B33519] text-white relative overflow-hidden font-sans border-t border-white/10">
      
      {/* Background Subtle Ambience & Warm Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[450px] bg-white/[0.08] rounded-full blur-[120px]" />
        <div className="absolute -bottom-20 right-10 w-[400px] h-[400px] bg-[#682213]/40 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-grid-pattern opacity-10 mix-blend-overlay" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 font-sans">
        
        {/* Section Header (Compact & 100% DM Sans) */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10 font-sans">
          <span className="font-mono text-xs uppercase tracking-wider font-bold text-white/80 mb-3 inline-block">
            /05 INTEGRASI & ALUR KERJA
          </span>
          
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            Integrasi Mulus untuk Alur Kerja Bimbel Anda
          </h2>
          
          <p className="text-sm sm:text-base text-brand-100 font-normal leading-relaxed max-w-xl mx-auto font-sans">
            Hubungkan seluruh operasional bimbel Anda dengan tools harian dalam satu sistem terpusat.
          </p>
        </div>

        {/* Compact Natural Orbital Visual (Single screen fit, 1 Circle, No central hub text, Static Image feel) */}
        <div className="relative max-w-4xl mx-auto h-[280px] sm:h-[340px] md:h-[370px] select-none pointer-events-none flex items-center justify-center">
          
          {/* Curved SVG Connectors */}
          <svg 
            className="absolute inset-0 w-full h-full pointer-events-none z-0" 
            viewBox="0 0 1000 380" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Left Connectors into Central Hub (Center at x=500, y=190) */}
            {/* 1. Google Drive (x=230, y=45) */}
            <path d="M 230 45 C 330 45, 400 150, 500 190" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5" strokeDasharray="5 5" />
            
            {/* 2. WhatsApp (x=100, y=115) */}
            <path d="M 100 115 C 260 115, 380 170, 500 190" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5" strokeDasharray="5 5" />
            
            {/* 3. Google Calendar (x=220, y=190) */}
            <path d="M 220 190 L 500 190" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" strokeDasharray="5 5" />
            
            {/* 4. Google Sheets (x=90, y=265) */}
            <path d="M 90 265 C 250 265, 380 210, 500 190" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5" strokeDasharray="5 5" />
            
            {/* 5. Zoom (x=230, y=335) */}
            <path d="M 230 335 C 330 335, 400 230, 500 190" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5" strokeDasharray="5 5" />

            {/* Right Connectors from Central Hub (x=500, y=190) to Right Logos */}
            {/* 6. Telegram (x=770, y=45) */}
            <path d="M 500 190 C 600 150, 670 45, 770 45" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5" strokeDasharray="5 5" />
            
            {/* 7. QRIS (x=900, y=115) */}
            <path d="M 500 190 C 620 170, 740 115, 900 115" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5" strokeDasharray="5 5" />
            
            {/* 8. Microsoft Excel (x=780, y=190) */}
            <path d="M 500 190 L 780 190" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" strokeDasharray="5 5" />
            
            {/* 9. Gmail (x=910, y=265) */}
            <path d="M 500 190 C 620 210, 750 265, 910 265" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5" strokeDasharray="5 5" />
            
            {/* 10. Notion (x=770, y=335) */}
            <path d="M 500 190 C 600 230, 670 335, 770 335" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5" strokeDasharray="5 5" />
          </svg>

          {/* Central Cressco Logo (Single Clean Circle, No outer extra halos, No text underneath) */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
            <div className="w-18 h-18 sm:w-22 sm:h-22 md:w-24 md:h-24 rounded-full bg-white text-brand-600 flex flex-col items-center justify-center shadow-[0_12px_36px_rgba(0,0,0,0.3)] border-2 border-white/50">
              <Image
                src="/images/cressco-logo.png"
                alt="Cressco"
                width={36}
                height={36}
                className="object-contain"
              />
              <span className="text-[8px] font-black uppercase tracking-wider mt-0.5 text-brand-700">
                CRESSCO
              </span>
            </div>
          </div>

          {/* Naturally Distributed Floating Logos (Left Side) */}
          {/* 1. Google Drive (Top Left Arc) */}
          <div className="absolute left-[23%] top-[12%] -translate-x-1/2 -translate-y-1/2 z-10 drop-shadow-[0_8px_18px_rgba(0,0,0,0.25)]">
            <GoogleDriveIcon />
          </div>

          {/* 2. WhatsApp (Mid-Left Far) */}
          <div className="absolute left-[10%] top-[30%] -translate-x-1/2 -translate-y-1/2 z-10 drop-shadow-[0_8px_18px_rgba(0,0,0,0.25)]">
            <WhatsAppIcon />
          </div>

          {/* 3. Google Calendar (Mid-Left Close) */}
          <div className="absolute left-[22%] top-[50%] -translate-x-1/2 -translate-y-1/2 z-10 drop-shadow-[0_8px_18px_rgba(0,0,0,0.25)]">
            <GoogleCalendarIcon />
          </div>

          {/* 4. Google Sheets (Bottom-Left Far) */}
          <div className="absolute left-[9%] top-[70%] -translate-x-1/2 -translate-y-1/2 z-10 drop-shadow-[0_8px_18px_rgba(0,0,0,0.25)]">
            <GoogleSheetsIcon />
          </div>

          {/* 5. Zoom (Bottom-Left Arc) */}
          <div className="absolute left-[23%] top-[88%] -translate-x-1/2 -translate-y-1/2 z-10 drop-shadow-[0_8px_18px_rgba(0,0,0,0.25)]">
            <ZoomIcon />
          </div>

          {/* Naturally Distributed Floating Logos (Right Side) */}
          {/* 6. Telegram (Top Right Arc) */}
          <div className="absolute left-[77%] top-[12%] -translate-x-1/2 -translate-y-1/2 z-10 drop-shadow-[0_8px_18px_rgba(0,0,0,0.25)]">
            <TelegramIcon />
          </div>

          {/* 7. QRIS (Mid-Right Far) */}
          <div className="absolute left-[90%] top-[30%] -translate-x-1/2 -translate-y-1/2 z-10 drop-shadow-[0_8px_18px_rgba(0,0,0,0.25)]">
            <QrisIcon />
          </div>

          {/* 8. Microsoft Excel (Mid-Right Close) */}
          <div className="absolute left-[78%] top-[50%] -translate-x-1/2 -translate-y-1/2 z-10 drop-shadow-[0_8px_18px_rgba(0,0,0,0.25)]">
            <ExcelIcon />
          </div>

          {/* 9. Gmail (Bottom-Right Far) */}
          <div className="absolute left-[91%] top-[70%] -translate-x-1/2 -translate-y-1/2 z-10 drop-shadow-[0_8px_18px_rgba(0,0,0,0.25)]">
            <GmailIcon />
          </div>

          {/* 10. Notion (Bottom-Right Arc) */}
          <div className="absolute left-[77%] top-[88%] -translate-x-1/2 -translate-y-1/2 z-10 drop-shadow-[0_8px_18px_rgba(0,0,0,0.25)]">
            <NotionIcon />
          </div>

        </div>

      </div>
    </section>
  );
}
