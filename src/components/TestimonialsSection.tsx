'use client';

import React from 'react';
import Image from 'next/image';
import { Star, CheckCircle2 } from 'lucide-react';

interface TestimonialItem {
  name: string;
  role: string;
  bimbel: string;
  avatar: string;
  quote: string;
  isFeatured?: boolean;
}

// Column 1 Data
const column1Data: TestimonialItem[] = [
  {
    isFeatured: true,
    name: 'Budi Santoso',
    role: 'Owner & Direktur',
    bimbel: 'Bimbel Prestasi Mandiri',
    avatar: '/images/avatars/avatar-1.jpg',
    quote: 'Fitur otomatisasi Cressco menghemat puluhan jam kerja tim kami setiap pekannya untuk rekap absensi dan follow-up tagihan. Platform wajib bagi bimbel yang ingin scale-up secara rapi.',
  },
  {
    isFeatured: false,
    name: 'Mahfuz Rahman',
    role: 'Manajer Akademik',
    bimbel: 'Insan Cerdas Course',
    avatar: '/images/avatars/avatar-2.jpg',
    quote: 'Cressco benar-benar mentransformasi alur manajemen operasional harian kami. Fitur-fiturnya sangat intuitif membuat plotting jadwal tentor menjadi sangat mudah.',
  },
  {
    isFeatured: false,
    name: 'Dina Rahmawati',
    role: 'Co-Founder',
    bimbel: 'EduCenter Indonesia',
    avatar: '/images/avatars/avatar-8.jpg',
    quote: 'Sangat simpel untuk bimbel rintisan baru, namun powerful untuk enterprise multi-cabang. Kontrol hak akses per cabang dan kestabilan sistemnya sangat memuaskan.',
  },
];

// Column 2 Data
const column2Data: TestimonialItem[] = [
  {
    isFeatured: false,
    name: 'Rian Hidayat',
    role: 'Head Tutor & Operasional',
    bimbel: 'Ganesha Edu Class',
    avatar: '/images/avatars/avatar-3.jpg',
    quote: 'Sistem presensi dan honor tutor otomatis di Cressco meningkatkan efektivitas kerja tim kami secara signifikan di berbagai kelas intensif dan bimbingan privat.',
  },
  {
    isFeatured: false,
    name: 'Siti Nurhaliza',
    role: 'Admin Cabang Utama',
    bimbel: 'Bintang Pelajar Mandiri',
    avatar: '/images/avatars/avatar-4.jpg',
    quote: 'Saya sangat menyukai fitur dashboard analytics Cressco yang memberikan ringkasan instan tentang performa kehadiran siswa dan kesehatan arus kas secara realtime.',
  },
  {
    isFeatured: false,
    name: 'Hendra Wijaya',
    role: 'Branch Manager',
    bimbel: 'Bimbel Juara Surabaya',
    avatar: '/images/avatars/avatar-5.jpg',
    quote: 'Pencatatan uang les dan rekap SPP siswa tidak lagi tercecer di buku manual. Rekapitulasi bulanan jadi jauh lebih transparan dan minim komplain dari orang tua.',
  },
];

// Column 3 Data
const column3Data: TestimonialItem[] = [
  {
    isFeatured: false,
    name: 'Dewi Lestari',
    role: 'Koordinator Cabang Bandung',
    bimbel: 'Smart Kids Academy',
    avatar: '/images/avatars/avatar-6.jpg',
    quote: 'Aksi massal di Cressco menyederhanakan pengelolaan ratusan data siswa baru dan perhitungan honor tentor, mendorong efisiensi operasional tim kami ke level tertinggi.',
  },
  {
    isFeatured: true,
    name: 'Agus Setiawan',
    role: 'Founder & CEO',
    bimbel: 'Cendekia Learning Center',
    avatar: '/images/avatars/avatar-7.jpg',
    quote: 'Cressco merevolusi total cara tim kami mengelola operasional bimbel. Fitur-fiturnya yang dirancang presisi memastikan kami tidak pernah melewatkan satu pun sesi bimbingan.',
  },
  {
    isFeatured: false,
    name: 'Nurul Aini',
    role: 'Finance Lead',
    bimbel: 'Bimbel Sahabat Prestasi',
    avatar: '/images/avatars/avatar-1.jpg',
    quote: 'Sekarang saya cukup buka dashboard dan langsung tahu posisi arus kas serta jadwal tentor secara realtime. Benar-benar memangkas beban administrasi keuangan kami.',
  },
];

function TestimonialCard({ item }: { item: TestimonialItem }) {
  if (item.isFeatured) {
    return (
      <div className="group relative w-full bg-gradient-to-b from-[#E05334] via-[#CE482A] to-[#B33519] rounded-2xl sm:rounded-3xl p-6 sm:p-7 text-white shadow-xl shadow-brand-500/20 border border-white/20 flex flex-col justify-between mb-6 transition-all duration-300 hover:shadow-2xl hover:shadow-brand-500/30 select-none">
        
        {/* Rating Stars */}
        <div className="flex items-center gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={15} className="fill-amber-300 text-amber-300" />
          ))}
        </div>

        {/* Testimonial Quote */}
        <p className="text-[14px] sm:text-[14.5px] leading-relaxed text-white/95 font-normal mb-6">
          &ldquo;{item.quote}&rdquo;
        </p>

        {/* Footer: Avatar + Name + Role + Verified Tag */}
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
              <div className="flex items-center gap-1.5">
                <h4 className="text-[14px] font-bold text-white leading-snug truncate">
                  {item.name}
                </h4>
                <CheckCircle2 size={14} className="text-white shrink-0 fill-emerald-500 text-white" />
              </div>
              <p className="text-xs text-white/80 font-normal leading-tight truncate mt-0.5">
                {item.role} • {item.bimbel}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="group relative w-full bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-7 border border-black/[0.08] shadow-[0_4px_20px_-2px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_32px_-4px_rgba(0,0,0,0.08)] hover:border-black/[0.14] transition-all duration-300 flex flex-col justify-between mb-6 select-none">
      
      {/* Rating Stars */}
      <div className="flex items-center gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={15} className="fill-amber-400 text-amber-400" />
        ))}
      </div>

      {/* Testimonial Quote */}
      <p className="text-[13.5px] sm:text-[14px] leading-relaxed text-charcoal-200 font-normal mb-5">
        &ldquo;{item.quote}&rdquo;
      </p>

      {/* Footer: Avatar + Name + Role + Verified Tag */}
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
            <div className="flex items-center gap-1.5">
              <h4 className="text-[14px] font-bold text-charcoal-900 leading-snug truncate">
                {item.name}
              </h4>
              <CheckCircle2 size={14} className="text-emerald-600 shrink-0 fill-emerald-100" />
            </div>
            <p className="text-xs text-charcoal-50 font-normal leading-tight truncate mt-0.5">
              {item.role} • {item.bimbel}
            </p>
          </div>
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

        {/* DESKTOP VIEW: 3-Column Vertical Infinite Marquee */}
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

        {/* MOBILE VIEW: Horizontal Smooth Scroll */}
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
