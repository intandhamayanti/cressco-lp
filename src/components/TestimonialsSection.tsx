'use client';

import React from 'react';
import Image from 'next/image';
import { Star } from 'lucide-react';

interface Testimonial {
  name: string;
  role: string;
  avatar: string;
  quote: string;
  stars: number;
}

// Column 1 (Kiri - Bergerak ke Bawah)
const column1: Testimonial[] = [
  {
    name: 'Albert Pratama',
    role: 'CFO di LoopAcademy Bandung',
    avatar: '/images/avatars/avatar-1.jpg',
    quote: 'Cressco benar-benar menata rapi sistem honor tentor dan penagihan siswa kami. Kami sekarang menghemat lebih dari 70% waktu administrasi operasional dan merasa 100% lebih yakin dengan rekonsiliasi data tiap cabang.',
    stars: 5,
  },
  {
    name: 'Ronald Richards',
    role: 'Co-Founder di Bimbel EduSmart',
    avatar: '/images/avatars/avatar-6.jpg',
    quote: 'Dulu kami butuh tiga tools berbeda dan dua staf full-time hanya untuk rekap absensi dan tagihan SPP. Sekarang semua beres di satu dashboard terpadu. Cressco membantu kami bergerak lebih cepat, rapi, dan tenang tanpa takut data hilang.',
    stars: 5,
  },
  {
    name: 'Darrell Steward',
    role: 'Head of Tech di Prestasi Mandiri',
    avatar: '/images/avatars/avatar-8.jpg',
    quote: 'Sangat simpel untuk bimbel rintisan baru, namun cukup powerful untuk kebutuhan enterprise multi-cabang. Role-based access dan kestabilan sistemnya sangat memuaskan.',
    stars: 5,
  },
];

// Column 2 (Tengah - Bergerak ke Atas, dengan card panjang seperti Leslie Alexander di contoh)
const column2: Testimonial[] = [
  {
    name: 'Leslie Alexander',
    role: 'Co-Founder di KlarPay Learning Hub',
    avatar: '/images/avatars/avatar-5.jpg',
    quote: 'Sebagai bimbel yang terus berkembang menangani ratusan siswa dan data privat yang sensitif, kepatuhan dan keakuratan keuangan selalu jadi tantangan besar. Dukungan audit data, invoice otomatis, dan pencatatan kas di Cressco menghemat puluhan jam kerja staf kami. Namun yang paling membuat kami kagum adalah betapa intuitif dan indahnya tampilan platform ini. Bukan cuma aman—tapi sangat menyenangkan dipakai setiap hari oleh tentor maupun admin. Kami bisa go-live dalam waktu kurang dari seminggu, dan rasanya kami berharap sudah menemukannya lebih awal.',
    stars: 5,
  },
  {
    name: 'Cameron Williamson',
    role: 'Co-Founder di Bimbel Akselerasi',
    avatar: '/images/avatars/avatar-3.jpg',
    quote: 'Sejak hari pertama, Cressco terasa seperti dibangun khusus untuk alur kerja bimbel di Indonesia. Ini adalah salah satu keputusan investasi operasional terbaik yang pernah kami buat.',
    stars: 5,
  },
  {
    name: 'Brooklyn Simmons',
    role: 'Founder di Backstack Learning',
    avatar: '/images/avatars/avatar-2.jpg',
    quote: 'Beralih ke Cressco memotong beban kerja tim finance hingga lebih dari 60%. Notifikasi penagihan otomatis ke wali murid berjalan mulus tanpa perlu kami follow-up manual satu per satu.',
    stars: 5,
  },
];

// Column 3 (Kanan - Bergerak ke Bawah, dengan card bervariasi)
const column3: Testimonial[] = [
  {
    name: 'Kathryn Murphy',
    role: 'Finance Lead di Coinverse Academy',
    avatar: '/images/avatars/avatar-7.jpg',
    quote: 'Tim Cressco benar-benar mengerti seluk-beluk operasional bimbel & kursus. Onboarding support mereka sangat sigap dan migrasi ratusan data siswa dari Excel lama kami selesai dalam sekejap.',
    stars: 5,
  },
  {
    name: 'Floyd Miles',
    role: 'Head of Operations di Capframe Bimbel',
    avatar: '/images/avatars/avatar-4.jpg',
    quote: 'Kami beralih dari tumpukan spreadsheet dan proses kerja manual yang tercecer ke satu single source of truth. Cressco membuat manajemen operasional bimbel terasa seperti superpower.',
    stars: 5,
  },
  {
    name: 'Kristin Watson',
    role: 'Finance & Academic Lead di Cendekia Nusantara',
    avatar: '/images/avatars/avatar-1.jpg',
    quote: 'Dulu kami menggunakan tiga aplikasi berbeda untuk mengelola presensi siswa, honor mengajar tentor, dan laporan laba rugi bulanan—dan semuanya sering selisih. Cressco menyatukan seluruh workflow ke dalam satu tempat. Sekarang, saya cukup buka dashboard dan langsung tahu posisi arus kas, absensi sesi kelas, hingga jadwal tentor secara realtime. Benar-benar memangkas biaya dan mengeliminasi human error.',
    stars: 5,
  },
];

function TestimonialCard({ item }: { item: Testimonial }) {
  return (
    <div className="w-full bg-white/90 backdrop-blur-md rounded-2xl sm:rounded-3xl p-6 sm:p-7 border border-black/[0.08] shadow-[0_4px_20px_-2px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_32px_-4px_rgba(0,0,0,0.09)] hover:border-black/[0.15] transition-all duration-300 flex flex-col justify-between select-none mb-6">
      <div>
        {/* Header: Avatar + Name + Role */}
        <div className="flex items-center gap-3.5 mb-4">
          <div className="relative w-11 h-11 rounded-full overflow-hidden shrink-0 border border-black/[0.08] shadow-sm bg-zinc-100">
            <Image
              src={item.avatar}
              alt={item.name}
              width={44}
              height={44}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="min-w-0">
            <h4 className="text-[15px] font-bold text-charcoal-900 leading-snug truncate">
              {item.name}
            </h4>
            <p className="text-xs text-charcoal-50 font-normal leading-tight truncate mt-0.5">
              {item.role}
            </p>
          </div>
        </div>

        {/* Testimonial Quote */}
        <p className="text-[13.5px] leading-relaxed text-charcoal-100 font-normal mb-5">
          {item.quote}
        </p>
      </div>

      {/* 5 Dark Stars matching the reference */}
      <div className="flex items-center gap-1 text-charcoal-900 pt-3 border-t border-black/[0.04]">
        {[...Array(item.stars)].map((_, i) => (
          <Star key={i} size={15} className="fill-charcoal-900 text-charcoal-900" />
        ))}
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

        {/* DESKTOP VIEW: 3-Column Vertical Opposing Marquee (Kiri ke Bawah, Tengah ke Atas, Kanan ke Bawah) */}
        <div className="hidden md:block relative h-[720px] overflow-hidden">
          
          {/* Top & Bottom Gradient Fade Masks for smooth infinite loop entrance/exit */}
          <div className="absolute top-0 left-0 right-0 h-28 bg-gradient-to-b from-[#FAFAF9] via-[#FAFAF9]/90 to-transparent z-20 pointer-events-none" />
          <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-[#FAFAF9] via-[#FAFAF9]/90 to-transparent z-20 pointer-events-none" />

          {/* 3 Columns Grid */}
          <div className="grid grid-cols-3 gap-6 h-full">
            
            {/* Kolom 1 (Kiri): Bergerak ke BAWAH */}
            <div className="relative overflow-hidden">
              <div className="animate-marquee-down flex flex-col">
                {/* Loop set 1 */}
                {column1.map((item, idx) => (
                  <TestimonialCard key={`c1-1-${idx}`} item={item} />
                ))}
                {/* Loop set 2 */}
                {column1.map((item, idx) => (
                  <TestimonialCard key={`c1-2-${idx}`} item={item} />
                ))}
              </div>
            </div>

            {/* Kolom 2 (Tengah): Bergerak ke ATAS */}
            <div className="relative overflow-hidden">
              <div className="animate-marquee-up flex flex-col">
                {/* Loop set 1 */}
                {column2.map((item, idx) => (
                  <TestimonialCard key={`c2-1-${idx}`} item={item} />
                ))}
                {/* Loop set 2 */}
                {column2.map((item, idx) => (
                  <TestimonialCard key={`c2-2-${idx}`} item={item} />
                ))}
              </div>
            </div>

            {/* Kolom 3 (Kanan): Bergerak ke BAWAH */}
            <div className="relative overflow-hidden">
              <div className="animate-marquee-down flex flex-col">
                {/* Loop set 1 */}
                {column3.map((item, idx) => (
                  <TestimonialCard key={`c3-1-${idx}`} item={item} />
                ))}
                {/* Loop set 2 */}
                {column3.map((item, idx) => (
                  <TestimonialCard key={`c3-2-${idx}`} item={item} />
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* MOBILE VIEW: Clean standard card list (Biasa aja, tanpa scroll aneh2 di HP) */}
        <div className="md:hidden space-y-4">
          {[column1[0], column2[0], column3[1]].map((item, idx) => (
            <TestimonialCard key={`mob-${idx}`} item={item} />
          ))}
        </div>

      </div>
    </section>
  );
}
