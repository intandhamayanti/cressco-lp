'use client';

import React from 'react';
import { 
  X, 
  Check, 
  Users, 
  DollarSign, 
  MessageSquare, 
  Calendar, 
  Building2 
} from 'lucide-react';

const comparisonRows = [
  {
    category: 'Database & Data Siswa',
    icon: Users,
    manual: 'Data siswa terpisah di puluhan file Excel. Rawan hilang atau duplikasi saat pergantian admin.',
    cressco: 'Satu database cloud terpusat. Profil, riwayat kelas, dan kontak wali murid selalu tersinkronisasi rapi.',
  },
  {
    category: 'Perhitungan Honor Tentor',
    icon: DollarSign,
    manual: 'Mengumpulkan kertas presensi di akhir bulan, menghitung rumus manual berjam-jam & rawan salah hitung.',
    cressco: 'Akumulasi honor mengajar terhitung otomatis dari presensi riil per sesi. Transparan dan siap unduh slip.',
  },
  {
    category: 'Penagihan SPP & Kwitansi',
    icon: MessageSquare,
    manual: 'Admin mengetik pesan tagihan satu-satu via WhatsApp. Pembayaran menunggak sering tidak terpantau.',
    cressco: 'Invoice digital dan pengingat jatuh tempo otomatis terkirim terjadwal via WhatsApp ke wali murid.',
  },
  {
    category: 'Plotting Jadwal & Ruang',
    icon: Calendar,
    manual: 'Mencatat di kalender manual/buku. Sering terjadi jadwal bentrok antar tentor maupun ruang belajar.',
    cressco: 'Smart scheduling otomatis mendeteksi ketersediaan ruang dan waktu mengajar tutor dengan 0 konflik.',
  },
  {
    category: 'Kontrol & Laporan Multi-Cabang',
    icon: Building2,
    manual: 'Owner harus menunggu rekap manual admin tiap cabang. Sulit memantau laba/rugi secara realtime.',
    cressco: 'Dashboard konsolidasi omzet, arus kas, dan performa seluruh cabang terpantau langsung dari HP owner.',
  },
];

export default function RealOperations() {
  return (
    <section id="operations" className="py-20 sm:py-28 bg-[#FAFAF9] border-t border-black/[0.05] relative overflow-hidden font-sans">
      
      {/* Subtle Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[850px] h-[400px] bg-brand-500/[0.025] rounded-full blur-[140px]" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 font-sans">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="font-mono text-xs uppercase tracking-wider font-bold text-brand-600 mb-3 inline-block">
            /04 TRANSFORMASI OPERASIONAL
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-charcoal-900 mb-4">
            Tinggalkan Cara Lama yang Menguras Waktu
          </h2>
          <p className="text-sm sm:text-base text-charcoal-100 font-normal leading-relaxed max-w-2xl mx-auto">
            Bandingkan repotnya mengelola bimbel secara manual dengan efisiensi sistem operasional terpadu bersama Cressco.
          </p>
        </div>

        {/* High-Craft Comparison Matrix (Clean, Human SaaS) */}
        <div className="bg-white rounded-3xl border border-black/[0.08] shadow-[0_12px_40px_-8px_rgba(0,0,0,0.06)] overflow-hidden">
          
          {/* Table Column Headers */}
          <div className="grid grid-cols-1 md:grid-cols-12 border-b border-black/[0.06] bg-surface-50/80">
            <div className="hidden md:block md:col-span-3 p-5 sm:p-6 text-xs font-bold uppercase tracking-wider text-charcoal-50">
              Aspek Operasional
            </div>
            
            <div className="md:col-span-4 p-5 sm:p-6 border-t md:border-t-0 md:border-l border-black/[0.06] bg-rose-50/30">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-rose-500" />
                <span className="text-xs font-bold uppercase tracking-wider text-rose-700">
                  Cara Manual & Spreadsheet
                </span>
              </div>
              <p className="text-xs text-charcoal-50 font-normal mt-1 hidden sm:block">
                Tersebar di banyak file, rawan selisih & human-error
              </p>
            </div>

            <div className="md:col-span-5 p-5 sm:p-6 border-t md:border-t-0 md:border-l border-black/[0.06] bg-brand-50/40">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-brand-500" />
                <span className="text-xs font-bold uppercase tracking-wider text-brand-700">
                  Bersama Platform Cressco
                </span>
              </div>
              <p className="text-xs text-brand-800/80 font-normal mt-1 hidden sm:block">
                Otomatis, tersentralisasi, dan hemat 90% waktu kerja
              </p>
            </div>
          </div>

          {/* Table Comparison Rows */}
          <div className="divide-y divide-black/[0.06]">
            {comparisonRows.map((row, idx) => {
              const Icon = row.icon;
              return (
                <div 
                  key={idx} 
                  className="grid grid-cols-1 md:grid-cols-12 items-center transition-colors hover:bg-surface-50/50"
                >
                  {/* Aspect Category (Left col) */}
                  <div className="md:col-span-3 p-4 sm:p-6 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-surface-100 border border-black/[0.05] text-charcoal-700 flex items-center justify-center shrink-0">
                      <Icon size={16} />
                    </div>
                    <span className="font-bold text-sm text-charcoal-900">
                      {row.category}
                    </span>
                  </div>

                  {/* Manual Pain Point (Center col) */}
                  <div className="md:col-span-4 p-4 sm:p-6 md:border-l border-black/[0.06] flex items-start gap-3 bg-rose-50/10">
                    <div className="w-5 h-5 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center shrink-0 mt-0.5">
                      <X size={12} strokeWidth={3} />
                    </div>
                    <p className="text-xs sm:text-[13px] text-charcoal-100 font-normal leading-relaxed">
                      {row.manual}
                    </p>
                  </div>

                  {/* Cressco Solution (Right col) */}
                  <div className="md:col-span-5 p-4 sm:p-6 md:border-l border-black/[0.06] flex items-start gap-3 bg-brand-50/20">
                    <div className="w-5 h-5 rounded-full bg-brand-500 text-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                      <Check size={12} strokeWidth={3} />
                    </div>
                    <p className="text-xs sm:text-[13px] text-charcoal-900 font-medium leading-relaxed">
                      {row.cressco}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
