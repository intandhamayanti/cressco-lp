'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Plus, Minus, Asterisk, Calendar, ArrowUpRight } from 'lucide-react';

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
    q: 'Berapa lama proses implementasi dan migrasi data dari Excel?',
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
    a: 'Ya, setiap paket berlangganan sudah mencakup sesi onboarding intensif 1-on-1, video tutorial lengkap, serta tim dedicated support via WhatsApp untuk mendampingi tim Anda hingga lancar.',
  },
];

export default function FaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0); // First item open by default like the reference

  const toggleFaq = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 sm:py-28 bg-[#FAFAF9] border-t border-black/[0.05]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with FAQ Badge and Large Heading */}
        <div className="mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold text-brand-600 bg-brand-50 border border-brand-200/60 mb-4">
            <Asterisk size={14} className="text-brand-500" />
            <span>FAQ</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-charcoal-900">
            Question? Answer
          </h2>
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
                    <div className="px-6 pb-6 pt-1 text-sm sm:text-[14.5px] text-charcoal-100 leading-relaxed">
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
              <div className="absolute top-0 right-0 w-48 h-48 bg-brand-500/15 rounded-full blur-3xl pointer-events-none" />

              <div>
                {/* Consultant Avatar */}
                <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-white/20 shadow-lg mb-6 bg-zinc-800">
                  <Image
                    src="/images/avatars/avatar-1.jpg"
                    alt="Konsultan Cressco"
                    width={56}
                    height={56}
                    className="object-cover w-full h-full"
                  />
                </div>

                {/* Card Message */}
                <p className="text-lg sm:text-xl font-medium text-white/95 leading-snug tracking-tight">
                  Feel free to reach out whenever you have questions.
                </p>
                <p className="text-xs sm:text-sm text-zinc-400 font-normal leading-relaxed mt-2.5">
                  Diskusikan alur operasional, simulasi harga, atau kebutuhan khusus bimbel Anda bersama tim ahli kami.
                </p>
              </div>

              {/* Book 1:1 Call Button */}
              <div className="mt-8 pt-4">
                <a
                  href="https://wa.me/6281234567890?text=Halo%20tim%20Cressco,%20saya%20ingin%20jadwalkan%20konsultasi%201:1%20mengenai%20platform%20bimbel."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-white/10 hover:bg-white/20 active:bg-white/15 text-white font-semibold text-sm transition-all duration-200 border border-white/15 backdrop-blur-md shadow-lg group hover:border-white/30"
                >
                  <Calendar size={16} className="text-brand-400 group-hover:scale-110 transition-transform" />
                  <span>Book 1:1 call</span>
                  <ArrowUpRight size={15} className="text-white/60 group-hover:text-white transition-colors" />
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
