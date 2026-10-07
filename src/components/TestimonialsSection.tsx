'use client';

import React from 'react';
import Image from 'next/image';

interface TestimonialItem {
  name: string;
  role: string;
  avatar: string;
  quote: string;
  isTerracotta?: boolean;
  brandName?: string;
  brandIcon?: React.ReactNode;
}

// X (Twitter) Logo Component
function XIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

// Custom Top Brand Logos matching FrameFlow & IntelliSpark
function FrameFlowIcon() {
  return (
    <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="14" height="14" rx="4" transform="rotate(-6 10 10)" />
      <rect x="7" y="7" width="14" height="14" rx="4" strokeOpacity="0.6" />
    </svg>
  );
}

function IntelliSparkIcon() {
  return (
    <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2L14.2 9.8L22 12L14.2 14.2L12 22L9.8 14.2L2 12L9.8 9.8L12 2Z" />
    </svg>
  );
}

// Column 1 Data (Top Terracotta Featured Card + Supporting Cards)
const column1Data: TestimonialItem[] = [
  {
    isTerracotta: true,
    brandName: 'FrameFlow Bimbel',
    brandIcon: <FrameFlowIcon />,
    name: 'David Kim',
    role: 'CEO at Spectrum Edu',
    avatar: '/images/avatars/avatar-1.jpg',
    quote: 'Fitur otomatisasi Cressco menghemat puluhan jam kerja tim kami setiap pekannya untuk rekap absensi dan prioritas follow-up tagihan. Sebuah platform wajib bagi bimbel yang ingin scale-up secara rapi.',
  },
  {
    isTerracotta: false,
    name: 'Mahfuz Rahman',
    role: 'Project & Academic Manager',
    avatar: '/images/avatars/avatar-2.jpg',
    quote: 'Cressco benar-benar mentransformasi alur manajemen operasional harian kami. Fitur-fiturnya yang intuitif membuat koordinasi jadwal dan pembagian tugas staf menjadi sangat mudah.',
  },
  {
    isTerracotta: false,
    name: 'Darrell Steward',
    role: 'Head of Tech di Prestasi Mandiri',
    avatar: '/images/avatars/avatar-8.jpg',
    quote: 'Sangat simpel untuk bimbel rintisan baru, namun powerful untuk enterprise multi-cabang. Role-based access dan kestabilan sistemnya sangat memuaskan.',
  },
];

// Column 2 Data (3 Standard Cards)
const column2Data: TestimonialItem[] = [
  {
    isTerracotta: false,
    name: 'James Parker',
    role: 'Operations Lead',
    avatar: '/images/avatars/avatar-3.jpg',
    quote: 'Sistem kolaborasi di Cressco meningkatkan efektivitas kerja tim kami secara signifikan di berbagai proyek kelas intensif dan bimbingan privat.',
  },
  {
    isTerracotta: false,
    name: 'Ethan Carter',
    role: 'Product Designer di EduVentures',
    avatar: '/images/avatars/avatar-4.jpg',
    quote: 'Saya sangat menyukai fitur dashboard analytics Cressco yang memberikan ringkasan instan tentang performa kehadiran siswa dan kesehatan arus kas secara realtime.',
  },
  {
    isTerracotta: false,
    name: 'Carlos Rivera',
    role: 'Global Branch Manager',
    avatar: '/images/avatars/avatar-5.jpg',
    quote: 'Fitur broadcast pesan otomatis ke wali murid menjadi game-changer bagi komunikasi kami yang cepat, transparan, dan terstruktur dengan rapi.',
  },
  {
    isTerracotta: false,
    name: 'Cameron Williamson',
    role: 'Co-Founder Bimbel Akselerasi',
    avatar: '/images/avatars/avatar-3.jpg',
    quote: 'Sejak hari pertama, Cressco terasa seperti dibangun khusus untuk alur kerja bimbel di Indonesia. Salah satu investasi terbaik kami.',
  },
];

// Column 3 Data (Standard Cards + Bottom Terracotta Featured Card)
const column3Data: TestimonialItem[] = [
  {
    isTerracotta: false,
    name: 'Liam Scott',
    role: 'Operations Director',
    avatar: '/images/avatars/avatar-6.jpg',
    quote: 'Aksi massal di Cressco menyederhanakan manajemen ratusan data siswa dan rekap honor tentor, mendorong efisiensi operasional tim kami ke level tertinggi.',
  },
  {
    isTerracotta: true,
    brandName: 'IntelliSpark',
    brandIcon: <IntelliSparkIcon />,
    name: 'Liam Anderson',
    role: 'CEO at Apex Learning',
    avatar: '/images/avatars/avatar-7.jpg',
    quote: 'Cressco merevolusi total cara tim kami mengelola operasional bimbel. Fitur-fiturnya yang dirancang presisi serta kolaborasi mulus memastikan kami tidak pernah melewatkan satu pun sesi bimbingan.',
  },
  {
    isTerracotta: false,
    name: 'Kristin Watson',
    role: 'Finance Lead di Cendekia',
    avatar: '/images/avatars/avatar-1.jpg',
    quote: 'Sekarang saya cukup buka dashboard dan langsung tahu posisi arus kas serta jadwal tentor secara realtime. Benar-benar memangkas biaya operasional.',
  },
];

function TestimonialCard({ item }: { item: TestimonialItem }) {
  if (item.isTerracotta) {
    return (
      <div className="group relative w-full bg-gradient-to-b from-[#E05334] via-[#CE482A] to-[#B33519] rounded-2xl sm:rounded-3xl p-6 sm:p-7 text-white shadow-xl shadow-brand-500/20 border border-white/20 flex flex-col justify-between mb-6 transition-all duration-300 hover:shadow-2xl hover:shadow-brand-500/30 select-none">
        {/* Brand Header */}
        <div className="flex items-center gap-2.5 mb-5">
          {item.brandIcon}
          <span className="font-bold text-lg tracking-tight text-white">{item.brandName}</span>
        </div>

        {/* Testimonial Quote */}
        <p className="text-[14px] sm:text-[14.5px] leading-relaxed text-white/95 font-normal mb-6">
          {item.quote}
        </p>

        {/* Footer: Avatar + Name + Role + X Icon */}
        <div className="flex items-center justify-between pt-4 border-t border-white/15">
          <div className="flex items-center gap-3 min-w-0 pr-2">
            <div className="relative w-10 h-10 rounded-xl overflow-hidden shrink-0 border border-white/30 shadow-sm bg-white/15">
              <Image
                src={item.avatar}
                alt={item.name}
                width={40}
                height={40}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="min-w-0">
              <h4 className="text-[14px] font-bold text-white leading-snug truncate">
                {item.name}
              </h4>
              <p className="text-xs text-white/80 font-normal leading-tight truncate mt-0.5">
                {item.role}
              </p>
            </div>
          </div>
          <div className="w-8 h-8 rounded-xl bg-white/20 backdrop-blur-sm text-white flex items-center justify-center shrink-0 border border-white/25 shadow-sm transition-transform duration-200 group-hover:scale-105">
            <XIcon className="w-3.5 h-3.5" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="group relative w-full bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-7 border border-black/[0.08] shadow-[0_4px_20px_-2px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_32px_-4px_rgba(0,0,0,0.08)] hover:border-black/[0.14] transition-all duration-300 flex flex-col justify-between mb-6 select-none">
      {/* Testimonial Quote */}
      <p className="text-[13.5px] sm:text-[14px] leading-relaxed text-charcoal-200 font-normal mb-5">
        {item.quote}
      </p>

      {/* Footer: Avatar + Name + Role + X Icon */}
      <div className="flex items-center justify-between pt-4 border-t border-black/[0.04]">
        <div className="flex items-center gap-3 min-w-0 pr-2">
          <div className="relative w-10 h-10 rounded-xl overflow-hidden shrink-0 border border-black/[0.08] shadow-sm bg-zinc-100">
            <Image
              src={item.avatar}
              alt={item.name}
              width={40}
              height={40}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="min-w-0">
            <h4 className="text-[14px] font-bold text-charcoal-900 leading-snug truncate">
              {item.name}
            </h4>
            <p className="text-xs text-charcoal-50 font-normal leading-tight truncate mt-0.5">
              {item.role}
            </p>
          </div>
        </div>
        <div className="w-8 h-8 rounded-xl bg-black/[0.04] text-charcoal-800 flex items-center justify-center shrink-0 border border-black/[0.04] transition-transform duration-200 group-hover:scale-105">
          <XIcon className="w-3.5 h-3.5" />
        </div>
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section id="testimoni" className="py-20 sm:py-28 bg-[#FAFAF9] border-t border-black/[0.05] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
          <span className="font-mono text-xs uppercase tracking-wider font-bold text-brand-600 mb-3 inline-block">
            /06 TESTIMONI PENGGUNA
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-charcoal-900 mb-4">
            Dipercaya & Disukai Tim Bimbel Indonesia
          </h2>
          <p className="text-sm sm:text-base text-charcoal-100 font-normal leading-relaxed">
            Lihat bagaimana ratusan bimbel dan lembaga kursus di Indonesia menyederhanakan operasional harian mereka bersama Cressco.
          </p>
        </div>

        {/* DESKTOP VIEW: 3-Column Vertical Infinite Marquee (Opposing Directions + Pause on Hover) */}
        <div className="hidden md:block relative h-[700px] overflow-hidden">
          
          {/* Top & Bottom Gradient Fade Masks */}
          <div className="absolute top-0 left-0 right-0 h-28 bg-gradient-to-b from-[#FAFAF9] via-[#FAFAF9]/90 to-transparent z-20 pointer-events-none" />
          <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-[#FAFAF9] via-[#FAFAF9]/90 to-transparent z-20 pointer-events-none" />

          {/* 3 Columns Grid */}
          <div className="grid grid-cols-3 gap-6 h-full">
            
            {/* Column 1: Bergerak ke BAWAH */}
            <div className="relative overflow-hidden">
              <div className="animate-marquee-down flex flex-col">
                {column1Data.map((item, idx) => (
                  <TestimonialCard key={`c1-a-${idx}`} item={item} />
                ))}
                {column1Data.map((item, idx) => (
                  <TestimonialCard key={`c1-b-${idx}`} item={item} />
                ))}
              </div>
            </div>

            {/* Column 2: Bergerak ke ATAS */}
            <div className="relative overflow-hidden">
              <div className="animate-marquee-up flex flex-col">
                {column2Data.map((item, idx) => (
                  <TestimonialCard key={`c2-a-${idx}`} item={item} />
                ))}
                {column2Data.map((item, idx) => (
                  <TestimonialCard key={`c2-b-${idx}`} item={item} />
                ))}
              </div>
            </div>

            {/* Column 3: Bergerak ke BAWAH */}
            <div className="relative overflow-hidden">
              <div className="animate-marquee-down flex flex-col">
                {column3Data.map((item, idx) => (
                  <TestimonialCard key={`c3-a-${idx}`} item={item} />
                ))}
                {column3Data.map((item, idx) => (
                  <TestimonialCard key={`c3-b-${idx}`} item={item} />
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* MOBILE VIEW: Horizontal Smooth Scroll / List */}
        <div className="md:hidden relative overflow-hidden -mx-4 px-4">
          <div className="animate-marquee-left flex gap-4 w-max">
            {[...column1Data, ...column2Data, ...column3Data].map((item, idx) => (
              <div key={`mob-a-${idx}`} className="w-[300px] shrink-0">
                <TestimonialCard item={item} />
              </div>
            ))}
            {[...column1Data, ...column2Data, ...column3Data].map((item, idx) => (
              <div key={`mob-b-${idx}`} className="w-[300px] shrink-0">
                <TestimonialCard item={item} />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
