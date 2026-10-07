'use client';

import React, { useState } from 'react';
import { 
  ShieldCheck, 
  UserCheck, 
  GraduationCap, 
  Check, 
  Building2, 
  Calendar, 
  CreditCard, 
  TrendingUp, 
  MessageSquare,
  Clock,
  ArrowRight
} from 'lucide-react';

interface RoleContent {
  id: string;
  tabLabel: string;
  roleTitle: string;
  roleBadge: string;
  headline: string;
  description: string;
  highlights: {
    title: string;
    desc: string;
  }[];
  preview: {
    title: string;
    badge: string;
    metrics: { label: string; value: string; subtext?: string }[];
    rows: { title: string; subtitle: string; status: string; statusType: 'success' | 'warning' | 'brand' }[];
  };
}

const rolesData: RoleContent[] = [
  {
    id: 'owner',
    tabLabel: 'Untuk Owner',
    roleTitle: 'Owner & Manajemen',
    roleBadge: 'Executive Suite',
    headline: 'Visibilitas Penuh ke Seluruh Cabang dalam Satu Dashboard',
    description: 'Pantau arus kas gabungan, pertumbuhan siswa baru per unit, performa keuangan, dan operasional seluruh cabang bimbel secara realtime tanpa perlu menunggu rekap manual dari masing-masing admin.',
    highlights: [
      {
        title: 'Konsolidasi Keuangan Multi-Cabang',
        desc: 'Laporan pemasukan, tunggakan SPP, dan margin laba bersih semua cabang dalam satu layar.',
      },
      {
        title: 'Kontrol Hak Akses Terpusat',
        desc: 'Atur wewenang admin cabang dan tutor secara presisi untuk menjaga keamanan data bimbel.',
      },
      {
        title: 'Analisis Pertumbuhan & Retensi',
        desc: 'Evaluasi tren jumlah siswa aktif dan efektivitas program kelas secara berkala.',
      },
    ],
    preview: {
      title: 'Konsolidasi Performa Bimbel',
      badge: 'Semua Cabang • Bulan Ini',
      metrics: [
        { label: 'Total Omzet', value: 'Rp 184.500.000', subtext: '+18.4% vs bulan lalu' },
        { label: 'Siswa Aktif', value: '1.240 Siswa', subtext: 'Tersebar di 4 Cabang' },
        { label: 'Kolektibilitas SPP', value: '96.8%', subtext: 'Tersinkron otomatis' },
      ],
      rows: [
        { title: 'Cabang Dago — Bandung', subtitle: '420 Siswa • 28 Tutor Aktif', status: 'Rp 68.200.000', statusType: 'success' },
        { title: 'Cabang BSD — Tangerang Selatan', subtitle: '380 Siswa • 24 Tutor Aktif', status: 'Rp 59.400.000', statusType: 'success' },
        { title: 'Cabang Merr — Surabaya', subtitle: '260 Siswa • 18 Tutor Aktif', status: 'Rp 34.800.000', statusType: 'brand' },
        { title: 'Cabang Kaliurang — Yogyakarta', subtitle: '180 Siswa • 14 Tutor Aktif', status: 'Rp 22.100.000', statusType: 'brand' },
      ],
    },
  },
  {
    id: 'admin',
    tabLabel: 'Untuk Admin',
    roleTitle: 'Admin Cabang',
    roleBadge: 'Operations Hub',
    headline: 'Jadwal Rapi, Tagihan Terkontrol, dan Administrasi Bebas Hambatan',
    description: 'Sederhanakan pekerjaan harian admin mulai dari plotting jadwal sesi kelas bebas bentrok, verifikasi pembayaran SPP, absensi harian, hingga kirim tagihan WhatsApp otomatis.',
    highlights: [
      {
        title: 'Plotting Jadwal Bebas Bentrok',
        desc: 'Sistem otomatis mendeteksi ketersediaan ruang belajar dan waktu mengajar tentor.',
      },
      {
        title: 'Manajemen Tagihan & Invoice',
        desc: 'Pantau riwayat pembayaran siswa dan kirim invoice digital langsung via WhatsApp.',
      },
      {
        title: 'Presensi & Database Terpadu',
        desc: 'Kelola data siswa, riwayat kehadiran, dan perpindahan kelas tanpa tercecer di spreadsheet.',
      },
    ],
    preview: {
      title: 'Operasional Harian Cabang',
      badge: 'Cabang Utama Bandung • Hari Ini',
      metrics: [
        { label: 'Sesi Berjalan Hari Ini', value: '18 Sesi', subtext: '0 Konflik ruang/tutor' },
        { label: 'Tagihan SPP Menunggu', value: '6 Siswa', subtext: 'Siap follow-up WA' },
        { label: 'Kehadiran Siswa', value: '94.2%', subtext: 'Realtime check-in' },
      ],
      rows: [
        { title: 'Kelas 12 IPA — Fisika UTBK', subtitle: 'Ruang Einstein • Tutor: Kak Farhan (14:00 - 15:30)', status: 'Sedang Berlangsung', statusType: 'success' },
        { title: 'Kelas 10 Reguler — Matematika Wajib', subtitle: 'Ruang Gauss • Tutor: Kak Sarah (15:45 - 17:15)', status: 'Sesi Berikutnya', statusType: 'brand' },
        { title: 'Verifikasi Pembayaran — Clarissa (Kls 12)', subtitle: 'Paket Intensif 3 Bulan • Bank Transfer BCA', status: 'Siap Konfirmasi', statusType: 'warning' },
        { title: 'Tagihan SPP Oktober — Dimas Arya (Kls 11)', subtitle: 'Pengingat otomatis terkirim via WhatsApp', status: 'Invoice Terkirim', statusType: 'brand' },
      ],
    },
  },
  {
    id: 'tutor',
    tabLabel: 'Untuk Tutor',
    roleTitle: 'Tutor & Pengajar',
    roleBadge: 'Teaching Portal',
    headline: 'Fokus Mengajar Sepenuhnya Tanpa Beban Rekap Administrasi',
    description: 'Pengajar dapat langsung melihat jadwal kelas mingguan di smartphone, mengisi presensi dan materi belajar dalam hitungan detik, serta melihat perhitungan honor mengajar secara transparan.',
    highlights: [
      {
        title: 'Jadwal Mengajar di Smartphone',
        desc: 'Akses agenda mengajar mingguan dan materi kelas tanpa perlu menanyakan ke admin.',
      },
      {
        title: 'Presensi & Jurnal Kelas 1-Klik',
        desc: 'Input kehadiran siswa dan topik bahasan langsung setelah sesi bimbingan selesai.',
      },
      {
        title: 'Transparansi Honor Mengajar',
        desc: 'Akumulasi honor terhitung otomatis berdasarkan sesi riil yang telah tervalidasi.',
      },
    ],
    preview: {
      title: 'Ringkasan Tutor & Pengajar',
      badge: 'Portal Tentor • Sesi Aktif',
      metrics: [
        { label: 'Estimasi Honor Bulan Ini', value: 'Rp 4.250.000', subtext: '26 Sesi terverifikasi' },
        { label: 'Jadwal Hari Ini', value: '3 Sesi', subtext: 'Mulai 15:30 WIB' },
        { label: 'Rata-rata Rating Mengajar', value: '4.9 / 5.0', subtext: 'Dari 84 ulasan siswa' },
      ],
      rows: [
        { title: 'Matematika Intensif SNBT (15:30 - 17:00)', subtitle: 'Ruang Galileo • 12 Siswa Terdaftar', status: 'Siap Presensi', statusType: 'brand' },
        { title: 'Fisika Dasar — Kelas 11 (17:15 - 18:45)', subtitle: 'Ruang Newton • 8 Siswa Terdaftar', status: 'Jadwal Hari Ini', statusType: 'brand' },
        { title: 'Kalkulus & Trigonometri (Kemarin)', subtitle: 'Jurnal Materi: Sifat Turunan Fungsi Trigonometri', status: 'Sesi Selesai • Honor +Rp 150rb', statusType: 'success' },
        { title: 'Aljabar Linear — Privat (Kemarin)', subtitle: 'Siswa: Naufal Pratama • 90 Menit', status: 'Sesi Selesai • Honor +Rp 175rb', statusType: 'success' },
      ],
    },
  },
];

export default function RoleExperience() {
  const [activeTab, setActiveTab] = useState<number>(0);
  const current = rolesData[activeTab];

  return (
    <section id="roles" className="py-20 sm:py-28 bg-[#FAFAF9] border-t border-black/[0.05] relative overflow-hidden font-sans">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand-500/[0.03] rounded-full blur-[140px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 font-sans">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <span className="font-mono text-xs uppercase tracking-wider font-bold text-brand-600 mb-3 inline-block">
            /02 SOLUSI PERAN
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-charcoal-900 mb-4">
            Satu Platform, Disesuaikan untuk Setiap Peran
          </h2>
          <p className="text-sm sm:text-base text-charcoal-100 font-normal leading-relaxed max-w-2xl mx-auto">
            Owner, Admin Cabang, dan Tutor memiliki fokus kerja yang berbeda. Cressco menyajikan pengalaman antarmuka yang tepat untuk masing-masing tanggung jawab.
          </p>
        </div>

        {/* Horizontal Segmented Pill Tab Switcher (Standardized with Pricing Section) */}
        <div className="flex items-center justify-center mb-10 sm:mb-14">
          <div className="inline-flex p-1 rounded-full bg-white border border-black/[0.07] shadow-sm max-w-full overflow-x-auto">
            {rolesData.map((tab, idx) => {
              const isActive = activeTab === idx;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(idx)}
                  className={`px-4 sm:px-6 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm transition-all duration-200 shrink-0 select-none ${
                    isActive
                      ? 'bg-brand-500 text-white shadow-sm font-semibold'
                      : 'text-charcoal-100 hover:text-charcoal-900 font-medium'
                  }`}
                >
                  {tab.tabLabel}
                </button>
              );
            })}
          </div>
        </div>

        {/* Full-Width Showcase Card for Active Role */}
        <div className="bg-white rounded-3xl border border-black/[0.08] shadow-[0_12px_40px_-8px_rgba(0,0,0,0.06)] p-6 sm:p-10 lg:p-12 transition-all duration-300">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Sub-Panel: Copywriting & Concrete Value Pillars (45%) */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-200 text-brand-700 text-xs font-bold uppercase tracking-wider mb-4">
                  <span>{current.roleBadge}</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-charcoal-900 leading-tight mb-4">
                  {current.headline}
                </h3>

                <p className="text-sm sm:text-[15px] text-charcoal-100 font-normal leading-relaxed mb-8">
                  {current.description}
                </p>

                {/* 3 Structured Concrete Pillars */}
                <div className="space-y-4 pt-2">
                  {current.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-brand-50 text-brand-600 flex items-center justify-center shrink-0 mt-0.5 border border-brand-200/80">
                        <Check size={12} strokeWidth={3} />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-charcoal-900">
                          {item.title}
                        </h4>
                        <p className="text-xs sm:text-[13px] text-charcoal-100 font-normal leading-relaxed mt-0.5">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Sub-Panel: Clean High-Fidelity Role UI Component (55%) */}
            <div className="lg:col-span-7 bg-surface-50 rounded-2xl sm:rounded-3xl border border-black/[0.06] p-5 sm:p-7 shadow-soft-sm">
              
              {/* Component Top Bar */}
              <div className="flex items-center justify-between pb-4 sm:pb-5 border-b border-black/[0.06] mb-5">
                <div>
                  <h4 className="text-sm sm:text-base font-bold text-charcoal-900">
                    {current.preview.title}
                  </h4>
                  <p className="text-xs text-charcoal-50 font-normal mt-0.5">
                    {current.preview.badge}
                  </p>
                </div>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Live Sync
                </span>
              </div>

              {/* 3 Metric Cards */}
              <div className="grid grid-cols-3 gap-2.5 sm:gap-3.5 mb-5">
                {current.preview.metrics.map((metric, mIdx) => (
                  <div key={mIdx} className="bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-black/[0.05] shadow-soft-sm">
                    <span className="text-[10px] sm:text-xs font-medium text-charcoal-50 block truncate">
                      {metric.label}
                    </span>
                    <div className="text-xs sm:text-base font-bold text-charcoal-900 mt-1 truncate">
                      {metric.value}
                    </div>
                    {metric.subtext && (
                      <span className="text-[9px] sm:text-[11px] text-charcoal-50 font-medium block truncate mt-0.5 text-emerald-600">
                        {metric.subtext}
                      </span>
                    )}
                  </div>
                ))}
              </div>

              {/* Data Row Table / Activity List */}
              <div className="space-y-2">
                {current.preview.rows.map((row, rIdx) => (
                  <div 
                    key={rIdx} 
                    className="flex items-center justify-between p-3 sm:p-3.5 rounded-xl bg-white border border-black/[0.04] shadow-soft-sm text-xs"
                  >
                    <div className="min-w-0 pr-3">
                      <div className="font-bold text-charcoal-900 text-xs sm:text-[13px] truncate">
                        {row.title}
                      </div>
                      <div className="text-[11px] text-charcoal-50 font-normal truncate mt-0.5">
                        {row.subtitle}
                      </div>
                    </div>
                    
                    <span 
                      className={`shrink-0 px-2.5 py-1 rounded-lg text-[11px] font-semibold ${
                        row.statusType === 'success' 
                          ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' 
                          : row.statusType === 'warning'
                          ? 'bg-amber-50 text-amber-800 border border-amber-200'
                          : 'bg-brand-50 text-brand-700 border border-brand-200'
                      }`}
                    >
                      {row.status}
                    </span>
                  </div>
                ))}
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
