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

const testimonialsRow1: Testimonial[] = [
  {
    name: 'Budi Pratama, M.Ed.',
    role: 'Founder & Owner di Prime Academy Bandung',
    avatar: '/images/avatars/avatar-1.jpg',
    quote: 'Cressco mengubah total cara kami mengelola 3 cabang bimbel. Sekarang saya bisa memantau omzet harian, tagihan SPP yang tertunda, dan kehadiran tentor secara realtime tanpa rekap manual.',
    stars: 5,
  },
  {
    name: 'Sarah Nabila, S.Pd.',
    role: 'Head of Operations di Prestasi Insani Jakarta',
    avatar: '/images/avatars/avatar-5.jpg',
    quote: 'Dulu kami pusing dengan spreadsheet yang berantakan dan jadwal kelas yang sering bentrok. Dengan Cressco, penagihan invoice otomatis via WhatsApp dan presensi siswa beres dalam hitungan menit.',
    stars: 5,
  },
  {
    name: 'Rian Hidayat, M.Si.',
    role: 'Koordinator Tutor di Akselerasi Mandiri',
    avatar: '/images/avatars/avatar-6.jpg',
    quote: 'Sebagai tentor, mengisi jurnal mengajar dan absensi siswa lewat smartphone sangat praktis. Perhitungan honor mengajar otomatis dan transparan setiap akhir bulan.',
    stars: 5,
  },
  {
    name: 'drg. Anindita Putri',
    role: 'Managing Director di MedEdu Academy Malang',
    avatar: '/images/avatars/avatar-7.jpg',
    quote: 'Sistem multi-cabangnya juara. Admin cabang fokus melayani siswa, sementara jajaran direksi memantau seluruh performa cabang dari satu dashboard eksekutif terpusat.',
    stars: 5,
  },
];

const testimonialsRow2: Testimonial[] = [
  {
    name: 'Drs. Hendra Setiawan',
    role: 'Ketua Yayasan di Bintang Cerdas Surabaya',
    avatar: '/images/avatars/avatar-8.jpg',
    quote: 'Investasi terbaik untuk operasional bimbel kami. Notifikasi tagihan otomatis ke orang tua murid terasa sangat profesional dan mengurangi angka tunggakan hingga 85%.',
    stars: 5,
  },
  {
    name: 'Maya Kusuma Wardani',
    role: 'Finance Lead di Cendekia Nusantara',
    avatar: '/images/avatars/avatar-2.jpg',
    quote: 'Hemat waktu kerja tim admin lebih dari 70%! Tidak ada lagi drama selisih hitungan kas masuk atau honor guru yang telat dicairkan. Cressco benar-benar game changer.',
    stars: 5,
  },
  {
    name: 'Faisal Ramadhan, S.Kom.',
    role: 'Academic Manager di EduSpark Yogyakarta',
    avatar: '/images/avatars/avatar-3.jpg',
    quote: 'Platformnya sangat bersih dan responsif. Guru-guru senior yang awalnya gaptek pun bisa langsung lancar menggunakannya tanpa perlu training berhari-hari.',
    stars: 5,
  },
  {
    name: 'Dewi Anggraini, S.Si.',
    role: 'Founder di Sigma Learning Hub Semarang',
    avatar: '/images/avatars/avatar-4.jpg',
    quote: 'Dulu kami menggunakan 3 aplikasi berbeda untuk absensi, keuangan, dan data siswa. Cressco menggabungkan semuanya jadi satu. Simpel, powerful, dan terbukti andal.',
    stars: 5,
  },
];

function TestimonialCard({ item }: { item: Testimonial }) {
  return (
    <div className="w-[360px] md:w-[410px] shrink-0 bg-white rounded-2xl p-6 sm:p-7 border border-zinc-200/90 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.07)] hover:border-zinc-300 transition-all duration-300 flex flex-col justify-between select-none">
      <div>
        {/* Header: Avatar + Name + Role */}
        <div className="flex items-center gap-3.5 mb-4">
          <div className="relative w-11 h-11 rounded-full overflow-hidden shrink-0 border border-zinc-200 shadow-sm bg-zinc-100">
            <Image
              src={item.avatar}
              alt={item.name}
              width={44}
              height={44}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="min-w-0">
            <h4 className="text-[15px] font-bold text-zinc-900 leading-snug truncate">
              {item.name}
            </h4>
            <p className="text-xs text-zinc-500 font-medium leading-tight truncate">
              {item.role}
            </p>
          </div>
        </div>

        {/* Quote text */}
        <p className="text-[13.5px] leading-relaxed text-zinc-600 font-normal mb-5">
          &ldquo;{item.quote}&rdquo;
        </p>
      </div>

      {/* 5 Stars at bottom matching Trackio style */}
      <div className="flex items-center gap-1 text-zinc-900 pt-3 border-t border-zinc-100">
        {[...Array(item.stars)].map((_, i) => (
          <Star key={i} size={15} className="fill-zinc-900 text-zinc-900" />
        ))}
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section id="testimoni" className="py-20 sm:py-28 bg-[#FAFAF9] border-t border-zinc-200/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 leading-tight mb-4">
            Loved by Modern Bimbel Teams
          </h2>
          <p className="text-sm sm:text-base text-zinc-500 font-normal leading-relaxed">
            Lihat bagaimana pengelola, tim admin, dan tentor bimbel di seluruh Indonesia meningkatkan efisiensi operasional bersama Cressco.
          </p>
        </div>

        {/* DESKTOP VIEW: Dual Opposing Moving Marquee Rows (Row 1 Left, Row 2 Right) */}
        <div className="hidden md:block relative w-full overflow-hidden space-y-6 select-none py-2">
          
          {/* Edge gradient fade masks */}
          <div className="absolute top-0 bottom-0 left-0 w-28 lg:w-40 bg-gradient-to-r from-[#FAFAF9] to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 bottom-0 right-0 w-28 lg:w-40 bg-gradient-to-l from-[#FAFAF9] to-transparent z-10 pointer-events-none" />

          {/* Row 1: Moves to the LEFT */}
          <div className="animate-marquee-left flex items-stretch gap-6">
            {/* Set 1 */}
            {testimonialsRow1.map((item, idx) => (
              <TestimonialCard key={`r1-1-${idx}`} item={item} />
            ))}
            {/* Set 2 (for continuous infinite loop) */}
            {testimonialsRow1.map((item, idx) => (
              <TestimonialCard key={`r1-2-${idx}`} item={item} />
            ))}
          </div>

          {/* Row 2: Moves in OPPOSITE direction (to the RIGHT) */}
          <div className="animate-marquee-right flex items-stretch gap-6">
            {/* Set 1 */}
            {testimonialsRow2.map((item, idx) => (
              <TestimonialCard key={`r2-1-${idx}`} item={item} />
            ))}
            {/* Set 2 (for continuous infinite loop) */}
            {testimonialsRow2.map((item, idx) => (
              <TestimonialCard key={`r2-2-${idx}`} item={item} />
            ))}
          </div>

        </div>

        {/* MOBILE VIEW: Clean standard responsive cards (Biasa aja sesuai request) */}
        <div className="md:hidden space-y-4">
          {[...testimonialsRow1.slice(0, 2), ...testimonialsRow2.slice(0, 2)].map((item, idx) => (
            <div
              key={`mob-${idx}`}
              className="bg-white rounded-2xl p-5 border border-zinc-200/90 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden shrink-0 border border-zinc-200 shadow-sm">
                    <Image
                      src={item.avatar}
                      alt={item.name}
                      width={40}
                      height={40}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-sm font-bold text-zinc-900 leading-snug truncate">
                      {item.name}
                    </h4>
                    <p className="text-[11px] text-zinc-500 font-medium truncate">
                      {item.role}
                    </p>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed mb-4">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              <div className="flex items-center gap-1 text-zinc-900 pt-2.5 border-t border-zinc-100">
                {[...Array(item.stars)].map((_, i) => (
                  <Star key={i} size={14} className="fill-zinc-900 text-zinc-900" />
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
