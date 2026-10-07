'use client';

import React, { useState } from 'react';
import { 
  X, 
  Check, 
  Users, 
  DollarSign, 
  MessageSquare, 
  Calendar, 
  Building2,
  Clock,
  Sparkles,
  ArrowRight,
  TrendingDown,
  TrendingUp,
  Zap
} from 'lucide-react';

const comparisonRows = [
  {
    category: 'Database & Data Siswa',
    icon: Users,
    manual: 'Data siswa terpisah di puluhan file Excel. Rawan hilang, duplikasi, atau format rusak saat pergantian admin.',
    cressco: 'Satu database cloud terpusat. Profil, riwayat kelas, dan kontak wali murid tersinkronisasi otomatis.',
    impact: '0 Data Hilang',
  },
  {
    category: 'Perhitungan Honor Tentor',
    icon: DollarSign,
    manual: 'Mengumpulkan kertas presensi di akhir bulan, menghitung rumus manual berjam-jam & rawan salah hitung.',
    cressco: 'Akumulasi honor mengajar terhitung otomatis dari presensi riil per sesi. Transparan dan siap unduh slip.',
    impact: '10x Lebih Cepat',
  },
  {
    category: 'Penagihan SPP & Kwitansi',
    icon: MessageSquare,
    manual: 'Admin mengetik pesan tagihan satu-satu via WhatsApp. Pembayaran menunggak sering tidak terpantau.',
    cressco: 'Invoice digital dan pengingat jatuh tempo otomatis terkirim terjadwal via WhatsApp ke wali murid.',
    impact: 'Kolektibilitas 98%',
  },
  {
    category: 'Plotting Jadwal & Ruang',
    icon: Calendar,
    manual: 'Mencatat di kalender manual/buku. Sering terjadi jadwal bentrok antar tentor maupun ruang belajar.',
    cressco: 'Smart scheduling otomatis memvalidasi ketersediaan ruang dan waktu mengajar tutor dengan 0 konflik.',
    impact: '0 Ruang Bentrok',
  },
  {
    category: 'Kontrol & Laporan Multi-Cabang',
    icon: Building2,
    manual: 'Owner harus menunggu rekap manual admin tiap cabang. Sulit memantau laba/rugi secara realtime.',
    cressco: 'Dashboard konsolidasi omzet, arus kas, dan performa seluruh cabang terpantau langsung dari HP owner.',
    impact: 'Realtime Sync',
  },
];

export default function RealOperations() {
  const [studentCount, setStudentCount] = useState<number>(200);

  // Dynamic Impact Calculations based on actual bimbel operational data
  const hoursManualPerMonth = Math.round((studentCount / 25) * 4.5);
  const hoursWithCressco = Math.max(1, Math.round(hoursManualPerMonth * 0.1));
  const hoursSaved = hoursManualPerMonth - hoursWithCressco;
  const estimatedAdminSavings = (hoursSaved * 35000).toLocaleString('id-ID');

  return (
    <section id="operations" className="py-20 sm:py-28 bg-[#FAFAF9] border-t border-black/[0.05] relative overflow-hidden font-sans">
      
      {/* Subtle Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[850px] h-[450px] bg-brand-500/[0.03] rounded-full blur-[140px]" />
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

        {/* Interactive Efficiency Simulator Widget */}
        <div className="mb-10 sm:mb-14 p-6 sm:p-8 rounded-3xl bg-white border border-brand-200/80 shadow-[0_10px_35px_-8px_rgba(206,72,42,0.1)] relative overflow-hidden">
          
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-black/[0.06]">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-50 border border-brand-200 text-brand-700 text-xs font-bold uppercase tracking-wider mb-2.5">
                <Zap size={13} className="text-brand-500" />
                <span>Kalkulator Efisiensi Operasional</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-charcoal-900">
                Berapa banyak waktu & biaya yang bisa Anda hemat?
              </h3>
              <p className="text-xs sm:text-sm text-charcoal-100 mt-1">
                Geser slider sesuai estimasi jumlah siswa aktif di seluruh cabang bimbel Anda:
              </p>
            </div>

            {/* Slider Counter Display */}
            <div className="flex items-center gap-3 bg-surface-50 px-5 py-3 rounded-2xl border border-black/[0.06] shrink-0 self-start lg:self-auto">
              <span className="text-xs text-charcoal-50 font-medium">Jumlah Siswa:</span>
              <span className="text-xl sm:text-2xl font-black text-brand-600 font-mono">
                {studentCount} <span className="text-xs font-normal text-charcoal-900">Siswa</span>
              </span>
            </div>
          </div>

          {/* Range Slider Input */}
          <div className="pt-6 pb-4">
            <input 
              type="range" 
              min="50" 
              max="1000" 
              step="25"
              value={studentCount}
              onChange={(e) => setStudentCount(Number(e.target.value))}
              className="w-full h-2.5 bg-surface-200 rounded-lg appearance-none cursor-pointer accent-brand-500 focus:outline-none"
            />
            <div className="flex justify-between text-[11px] text-charcoal-50 font-mono mt-2">
              <span>50 Siswa (Rintisan)</span>
              <span>250 Siswa</span>
              <span>500 Siswa</span>
              <span>1.000+ Siswa (Multi-Cabang)</span>
            </div>
          </div>

          {/* 3 Calculated Dynamic Impact Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-4 pt-4">
            <div className="p-4 rounded-2xl bg-surface-50 border border-black/[0.05]">
              <div className="flex items-center gap-2 text-xs font-semibold text-charcoal-50 mb-1">
                <Clock size={14} className="text-brand-500" /> Waktu Kerja Manual
              </div>
              <div className="text-lg sm:text-xl font-bold text-rose-600 font-mono line-through opacity-75">
                ~{hoursManualPerMonth} Jam / bln
              </div>
              <span className="text-[11px] text-charcoal-50">Untuk rekap Excel & kirim WA</span>
            </div>

            <div className="p-4 rounded-2xl bg-brand-50/70 border border-brand-200">
              <div className="flex items-center gap-2 text-xs font-bold text-brand-800 mb-1">
                <Sparkles size={14} className="text-brand-600" /> Bersama Cressco
              </div>
              <div className="text-lg sm:text-xl font-bold text-brand-700 font-mono">
                ~{hoursWithCressco} Jam / bln
              </div>
              <span className="text-[11px] font-semibold text-emerald-700">
                Hemat {hoursSaved} Jam kerja per bulan!
              </span>
            </div>

            <div className="p-4 rounded-2xl bg-surface-50 border border-black/[0.05]">
              <div className="flex items-center gap-2 text-xs font-semibold text-charcoal-50 mb-1">
                <TrendingUp size={14} className="text-emerald-600" /> Efisiensi Biaya Staf
              </div>
              <div className="text-lg sm:text-xl font-bold text-charcoal-900 font-mono">
                Rp {estimatedAdminSavings}
              </div>
              <span className="text-[11px] text-charcoal-50">Perkiraan nilai jam kerja terselamatkan</span>
            </div>
          </div>

        </div>

        {/* High-Craft Comparison Table (Side-by-Side Matrix) */}
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
                  Cara Manual (Spreadsheet & WA)
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
                Otomatis, tersentralisasi, dan terhubung real-time
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
                  <div className="md:col-span-3 p-4 sm:p-6 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-xl bg-surface-100 border border-black/[0.05] text-charcoal-700 flex items-center justify-center shrink-0">
                        <Icon size={16} />
                      </div>
                      <span className="font-bold text-sm text-charcoal-900">
                        {row.category}
                      </span>
                    </div>
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
                  <div className="md:col-span-5 p-4 sm:p-6 md:border-l border-black/[0.06] flex items-start justify-between gap-3 bg-brand-50/20">
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-brand-500 text-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                        <Check size={12} strokeWidth={3} />
                      </div>
                      <p className="text-xs sm:text-[13px] text-charcoal-900 font-medium leading-relaxed">
                        {row.cressco}
                      </p>
                    </div>
                    
                    <span className="hidden sm:inline-block shrink-0 px-2 py-0.5 rounded text-[10px] font-bold text-brand-700 bg-brand-50 border border-brand-200">
                      {row.impact}
                    </span>
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
