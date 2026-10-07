'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Plus, Minus, ArrowUpRight } from 'lucide-react';

interface FaqItem {
  q: string;
  a: string;
}

const faqs: FaqItem[] = [
  {
    q: 'Apakah data bimbel kami aman dan terisolasi dari bimbel lain?',
    a: 'Sangat aman. Cressco menggunakan arsitektur multi-tenant dengan enkripsi data standar industri dan isolasi basis data yang ketat. Setiap cabang memiliki kontrol akses role-based (RBAC) yang terproteksi penuh.',
  },
  {
    q: 'Berapa lama proses implementasi dan migrasi data dari Excel / sistem lama?',
    a: 'Tim Cressco menyediakan template migrasi data instan untuk siswa, kelas, dan tutor. Rata-rata bimbel dapat mengimpor seluruh data historis dan siap beroperasi penuh dalam kurun waktu kurang dari 24-48 jam.',
  },
  {
    q: 'Bagaimana cara perhitungan honor tentor & rekonsiliasi SPP di Cressco?',
    a: 'Honor tentor dihitung secara otomatis berdasarkan presensi sesi mengajar yang terverifikasi serta tarif per sesi. Tagihan SPP juga langsung terintegrasi dengan invoice otomatis dan notifikasi reminder ke wali murid.',
  },
  {
    q: 'Apakah Cressco mendukung bimbel yang memiliki beberapa cabang fisik?',
    a: 'Ya, Cressco dirancang khusus dengan modul multi-cabang. Owner dapat melihat konsolidasi finansial dan operasional seluruh cabang dari satu dashboard, sementara admin tiap cabang hanya mengakses data cabangnya.',
  },
  {
    q: 'Apakah wali murid dan tentor mendapatkan akses portal tersendiri?',
    a: 'Tentu. Tentor memiliki dashboard untuk melihat jadwal mengajar dan input presensi, sementara wali murid dapat memantau progres belajar anak serta riwayat pembayaran SPP.',
  },
  {
    q: 'Apakah ada pendampingan atau pelatihan saat tim kami pertama kali menggunakan Cressco?',
    a: 'Ya, setiap paket berlangganan sudah mencakup sesi onboarding intensif 1-on-1, panduan lengkap, serta tim dedicated support via WhatsApp untuk mendampingi tim Anda hingga lancar.',
  },
];

export default function FaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0); // First item open by default

  const toggleFaq = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 sm:py-28 bg-[#FAFAF9] border-t border-black/[0.05]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-10 sm:mb-14">
          <span className="font-mono text-xs uppercase tracking-wider font-bold text-brand-600 mb-3 inline-block">
            /07 TANYA JAWAB (FAQ)
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-charcoal-900 mb-4">
            Pertanyaan Seputar Cressco
          </h2>
          <p className="text-sm sm:text-base text-charcoal-100 max-w-2xl font-normal leading-relaxed">
            Segala hal yang perlu Anda ketahui tentang implementasi, keamanan data, dan kemudahan operasional bimbel Anda bersama Cressco.
          </p>
        </div>

        {/* 2-Column Grid Layout: Accordion (Left) + Consultation Card (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: FAQ Accordion Cards */}
          <div className="lg:col-span-8 space-y-3.5">
            {faqs.map((faq, idx) => {
              const isOpen = openIdx === idx;
              return (
                <div
                  key={idx}
                  className={`rounded-2xl transition-all duration-200 overflow-hidden ${
                    isOpen
                      ? 'bg-[#F2F2F0] border border-black/[0.06] shadow-sm'
                      : 'bg-[#F6F6F4] hover:bg-[#F0F0EE] border border-black/[0.03]'
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 font-semibold text-[15px] sm:text-base text-charcoal-900 transition-colors"
                  >
                    <span className="leading-snug">{faq.q}</span>
                    <div className="w-8 h-8 rounded-full bg-black/[0.04] text-charcoal-700 flex items-center justify-center shrink-0 transition-transform duration-200">
                      {isOpen ? (
                        <Minus size={16} className="text-charcoal-900" />
                      ) : (
                        <Plus size={16} className="text-charcoal-700" />
                      )}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-1 text-sm sm:text-[14.5px] text-charcoal-100 leading-relaxed border-t border-black/[0.04]">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Column: Sticky 1:1 Consultation Card */}
          <div className="lg:col-span-4 lg:sticky lg:top-28">
            <div className="w-full bg-[#121214] rounded-3xl p-7 sm:p-8 text-white shadow-2xl border border-white/10 relative overflow-hidden flex flex-col justify-between min-h-[360px]">
              
              {/* Subtle Ambient Glow */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-brand-500/20 rounded-full blur-3xl pointer-events-none" />

              <div>
                {/* Consultant Avatar with Online Status */}
                <div className="relative w-14 h-14 mb-6">
                  <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-white/20 shadow-lg bg-zinc-800">
                    <Image
                      src="/images/avatars/avatar-1.jpg"
                      alt="Konsultan Cressco"
                      width={56}
                      height={56}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-emerald-500 border-2 border-[#121214] rounded-full" />
                </div>

                {/* Card Message */}
                <h3 className="text-lg sm:text-xl font-bold text-white leading-snug tracking-tight">
                  Punya pertanyaan spesifik seputar bimbel Anda?
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 font-normal leading-relaxed mt-2.5">
                  Diskusikan alur kerja cabang, skema honor tentor, atau simulasi kebutuhan sistem bimbel Anda langsung bersama tim spesialis kami.
                </p>
              </div>

              {/* Konsultasi Sekarang CTA Button */}
              <div className="mt-8 pt-4">
                <a
                  href="https://wa.me/6281234567890?text=Halo%20tim%20Cressco,%20saya%20ingin%20konsultasi%20mengenai%20platform%20manajemen%20bimbel."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-brand-500 to-brand-600 hover:from-brand-600 hover:to-brand-700 active:from-brand-700 text-white font-semibold text-sm transition-all duration-200 shadow-lg shadow-brand-500/25 group border border-brand-400/30"
                >
                  <span>Konsultasi Sekarang</span>
                  <ArrowUpRight size={16} className="text-white/80 group-hover:text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
