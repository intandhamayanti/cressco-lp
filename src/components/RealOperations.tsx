'use client';

import React from 'react';
import { ShieldCheck, UserCheck, GraduationCap, CheckCircle2, TrendingUp, Clock, FileSpreadsheet } from 'lucide-react';

const operationCards = [
  {
    target: 'For Owners',
    roleTag: 'Executive Leadership',
    icon: ShieldCheck,
    quote: "Know what's happening across your bimbel without waiting for manual reports.",
    benefits: [
      'Visibilitas finansial & status tagihan realtime',
      'Pemantauan performa cabang dalam satu ringkasan',
      'Keputusan ekspansi berdasarkan data aktual',
    ],
  },
  {
    target: 'For Admins',
    roleTag: 'Daily Operations',
    icon: UserCheck,
    quote: "Spend less time managing spreadsheets and repetitive administrative tasks.",
    benefits: [
      'Otomasi invoice tagihan dan verifikasi pembayaran',
      'Plotting jadwal kelas & distribusi ruangan instan',
      'Database siswa terpusat tanpa takut file tercecer',
    ],
  },
  {
    target: 'For Tutors',
    roleTag: 'Teaching Staff',
    icon: GraduationCap,
    quote: "Spend less time on administration and more time teaching.",
    benefits: [
      'Presensi kelas dan jurnal materi dalam 2 klik',
      'Transparansi jadwal dan riwayat sesi mengajar',
      'Perhitungan honor terdata rapi dan akurat',
    ],
  },
];

export default function RealOperations() {
  return (
    <section className="py-24 sm:py-32 bg-surface-50/70 border-t border-black/[0.05] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-50 border border-brand-200 text-brand-700 text-xs font-semibold uppercase tracking-wider mb-4">
            Operational Focus
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-charcoal-900 mb-4">
            Built Around Real Bimbel Operations
          </h2>
          <p className="text-base sm:text-lg text-charcoal-100 font-normal leading-relaxed">
            Cressco dirancang berdasarkan kebutuhan operasional yang benar-benar terjadi di bimbel.
          </p>
        </div>

        {/* 3 Operational Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {operationCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className="card-hover-effect rounded-2xl bg-white border border-black/[0.07] p-7 sm:p-8 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-bold px-2.5 py-1 rounded bg-brand-50 text-brand-600 border border-brand-200 uppercase tracking-wider">
                      {card.roleTag}
                    </span>
                    <div className="w-9 h-9 rounded-xl bg-surface-100 border border-black/[0.05] flex items-center justify-center text-charcoal-900">
                      <Icon size={18} />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-charcoal-900 mb-3">
                    {card.target}
                  </h3>

                  <p className="text-sm font-medium text-charcoal-900 leading-relaxed mb-6 italic bg-surface-50 p-4 rounded-xl border border-black/[0.04]">
                    &ldquo;{card.quote}&rdquo;
                  </p>

                  <div className="space-y-2.5 pt-2">
                    {card.benefits.map((benefit, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-2.5 text-xs text-charcoal-100">
                        <CheckCircle2 size={15} className="text-brand-500 shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-black/[0.05] text-[11px] text-charcoal-50 font-medium">
                  Dirancang spesifik untuk alur kerja bimbingan belajar Indonesia.
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
