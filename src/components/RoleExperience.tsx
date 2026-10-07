'use client';

import React, { useState } from 'react';
import { 
  ShieldCheck, 
  UserCheck, 
  GraduationCap, 
  TrendingUp, 
  Building2, 
  Calendar, 
  CreditCard, 
  CheckCircle2, 
  ArrowRight,
  Clock,
  Sparkles,
  DollarSign,
  Users,
  Check
} from 'lucide-react';

interface RoleData {
  id: string;
  role: string;
  tabTitle: string;
  badge: string;
  icon: React.ElementType;
  headline: string;
  description: string;
  capabilities: string[];
  consoleTitle: string;
  consoleSubtitle: string;
}

const rolesData: RoleData[] = [
  {
    id: 'owner',
    role: 'OWNER',
    tabTitle: 'Owner & Manajemen',
    badge: 'Executive Dashboard',
    icon: ShieldCheck,
    headline: 'Kendali Penuh & Laporan Konsolidasi Multi-Cabang',
    description: 'Dapatkan visibilitas lengkap atas seluruh cabang bimbel, kesehatan arus kas, tren pendaftaran siswa baru, dan margin profit dalam satu layar tanpa perlu bertanya ke tiap admin.',
    capabilities: [
      'Konsolidasi laporan keuangan & laba bersih multi-cabang instan',
      'Pemantauan tren pertumbuhan siswa & retensi per unit',
      'Kontrol izin akses staf & keamanan basis data bimbel',
      'Audit log operasional menyeluruh dan rekap eksekutif',
    ],
    consoleTitle: 'Executive Control Hub',
    consoleSubtitle: 'Semua Cabang • Realtime Sync',
  },
  {
    id: 'admin',
    role: 'ADMIN',
    tabTitle: 'Admin Cabang',
    badge: 'Operations Console',
    icon: UserCheck,
    headline: 'Operasional Harian Bebas Repot & Minim Human-Error',
    description: 'Otomatisasi pendaftaran siswa, plotting jadwal kelas tanpa bentrok, verifikasi pembayaran SPP, dan pengiriman notifikasi invoice WhatsApp langsung ke orang tua.',
    capabilities: [
      'Plotting jadwal kelas, tentor, dan ruang belajar otomatis',
      'Pencatatan tagihan SPP & integrasi status bayar otomatis',
      'Broadcast pengumuman dan kwitansi ke WhatsApp wali murid',
      'Manajemen database siswa dan presensi harian per kelas',
    ],
    consoleTitle: 'Branch Operations Center',
    consoleSubtitle: 'Cabang Utama Bandung • Sesi Aktif',
  },
  {
    id: 'tutor',
    role: 'TUTOR',
    tabTitle: 'Tutor & Pengajar',
    badge: 'Teaching Portal',
    icon: GraduationCap,
    headline: 'Fokus Mengajar Maksimal Tanpa Beban Administrasi',
    description: 'Tutor dapat melihat jadwal mengajar mingguan, mengisi presensi dan jurnal kelas dalam hitungan detik via HP, serta memantau akumulasi honor mengajar secara transparan.',
    capabilities: [
      'Jadwal sesi mengajar mingguan langsung di smartphone',
      'Presensi siswa & input materi/jurnal belajar 1-klik',
      'Transparansi kalkulasi honor mengajar sesuai sesi riil',
      'Akses daftar siswa, riwayat belajar, dan catatan kelas',
    ],
    consoleTitle: 'Tutor Mobile Workspace',
    consoleSubtitle: 'Jadwal Hari Ini • 3 Sesi Tersedia',
  },
];

export default function RoleExperience() {
  const [activeTab, setActiveTab] = useState<number>(0);
  const currentRole = rolesData[activeTab];
  const CurrentIcon = currentRole.icon;

  return (
    <section id="roles" className="py-20 sm:py-28 bg-[#FAFAF9] border-t border-black/[0.05] relative overflow-hidden font-sans">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-brand-500/[0.03] rounded-full blur-[140px]" />
        <div className="absolute bottom-10 right-0 w-[500px] h-[500px] bg-brand-500/[0.02] rounded-full blur-[140px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 font-sans">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <span className="font-mono text-xs uppercase tracking-wider font-bold text-brand-600 mb-3 inline-block">
            /02 SOLUSI PERAN
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-charcoal-900 mb-4">
            Satu Platform, Disesuaikan untuk Setiap Peran
          </h2>
          <p className="text-sm sm:text-base text-charcoal-100 font-normal leading-relaxed max-w-2xl mx-auto">
            Owner, Admin Cabang, dan Tutor memiliki kebutuhan kerja yang berbeda. Cressco menyajikan tampilan khusus yang dioptimalkan untuk tanggung jawab masing-masing.
          </p>
        </div>

        {/* 2-Column Interactive Workspace: Left Tabs + Right Live Console Preview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Left Column: Interactive Role Tabs (40%) */}
          <div className="lg:col-span-5 flex flex-col gap-3.5 sm:gap-4">
            {rolesData.map((item, idx) => {
              const isActive = activeTab === idx;
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(idx)}
                  className={`text-left w-full rounded-2xl p-5 sm:p-6 transition-all duration-300 relative border ${
                    isActive
                      ? 'bg-white border-brand-300 shadow-[0_10px_30px_-5px_rgba(206,72,42,0.12)] ring-2 ring-brand-500/10'
                      : 'bg-white/60 hover:bg-white border-black/[0.06] hover:border-black/[0.12] shadow-sm'
                  }`}
                >
                  {/* Active Indicator Left Accent Bar */}
                  {isActive && (
                    <div className="absolute left-0 top-4 bottom-4 w-1.5 bg-brand-500 rounded-r-full" />
                  )}

                  <div className="flex items-start justify-between gap-3 mb-2.5">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                          isActive
                            ? 'bg-brand-500 text-white shadow-brand-glow'
                            : 'bg-surface-100 text-charcoal-200'
                        }`}
                      >
                        <Icon size={20} />
                      </div>
                      <div>
                        <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-brand-600 block">
                          {item.badge}
                        </span>
                        <h3 className="text-base sm:text-lg font-bold text-charcoal-900 leading-snug">
                          {item.tabTitle}
                        </h3>
                      </div>
                    </div>
                  </div>

                  <p className="text-xs sm:text-[13px] text-charcoal-100 font-normal leading-relaxed line-clamp-2 pl-0.5">
                    {item.headline}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Right Column: Live Tailored Role Dashboard Console (60%) */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl border border-black/[0.08] shadow-[0_12px_40px_-8px_rgba(0,0,0,0.08)] p-6 sm:p-8 lg:p-9 relative overflow-hidden transition-all duration-300">
              
              {/* Header of the Live Console */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-black/[0.06] gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-brand-50 border border-brand-200 text-brand-600 flex items-center justify-center font-bold shrink-0">
                    <CurrentIcon size={20} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-brand-700 bg-brand-50 px-2 py-0.5 rounded border border-brand-200">
                        {currentRole.role} VIEW
                      </span>
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    </div>
                    <h4 className="text-base sm:text-lg font-bold text-charcoal-900 mt-0.5">
                      {currentRole.consoleTitle}
                    </h4>
                  </div>
                </div>

                <div className="text-xs font-mono text-charcoal-50 bg-surface-50 px-3 py-1.5 rounded-lg border border-black/[0.05] self-start sm:self-auto">
                  {currentRole.consoleSubtitle}
                </div>
              </div>

              {/* Dynamic Role Mockup Visual Body */}
              <div className="py-6">
                
                {/* 1. OWNER CONSOLE VIEW */}
                {activeTab === 0 && (
                  <div className="space-y-5 animate-in fade-in duration-300">
                    {/* 3 Executive Stat Cards */}
                    <div className="grid grid-cols-3 gap-3 sm:gap-4">
                      <div className="p-3.5 sm:p-4 rounded-2xl bg-surface-50 border border-black/[0.06]">
                        <span className="text-[11px] font-medium text-charcoal-50 block mb-1">Total Omzet Bulan Ini</span>
                        <div className="text-sm sm:text-lg font-bold text-charcoal-900">Rp 184.500.000</div>
                        <span className="text-[10px] font-semibold text-emerald-600 flex items-center gap-0.5 mt-1">
                          <TrendingUp size={11} /> +18.4% vs bln lalu
                        </span>
                      </div>
                      
                      <div className="p-3.5 sm:p-4 rounded-2xl bg-surface-50 border border-black/[0.06]">
                        <span className="text-[11px] font-medium text-charcoal-50 block mb-1">Siswa Aktif</span>
                        <div className="text-sm sm:text-lg font-bold text-charcoal-900">1.240 Siswa</div>
                        <span className="text-[10px] font-medium text-charcoal-50 block mt-1">Tersebar di 4 Cabang</span>
                      </div>

                      <div className="p-3.5 sm:p-4 rounded-2xl bg-brand-50 border border-brand-200">
                        <span className="text-[11px] font-medium text-brand-800 block mb-1">Status Keuangan</span>
                        <div className="text-sm sm:text-lg font-bold text-brand-700">96.8% Lunas</div>
                        <span className="text-[10px] font-medium text-brand-600 block mt-1">Auto-reconciled</span>
                      </div>
                    </div>

                    {/* Branch Breakdown Row */}
                    <div className="p-4 rounded-2xl bg-surface-50 border border-black/[0.06]">
                      <div className="flex items-center justify-between text-xs font-bold text-charcoal-900 mb-3">
                        <span className="flex items-center gap-1.5">
                          <Building2 size={14} className="text-brand-500" /> Performa Cabang Utama
                        </span>
                        <span className="text-brand-600 font-mono text-[11px]">4/4 Online</span>
                      </div>
                      <div className="space-y-2 text-xs">
                        <div className="flex items-center justify-between p-2 rounded-lg bg-white border border-black/[0.04]">
                          <span className="font-semibold text-charcoal-900">Cabang Dago (Bandung)</span>
                          <span className="font-mono text-charcoal-100">420 Siswa • Rp 68.2 jt</span>
                        </div>
                        <div className="flex items-center justify-between p-2 rounded-lg bg-white border border-black/[0.04]">
                          <span className="font-semibold text-charcoal-900">Cabang BSD (Tangerang)</span>
                          <span className="font-mono text-charcoal-100">380 Siswa • Rp 59.4 jt</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* 2. ADMIN CONSOLE VIEW */}
                {activeTab === 1 && (
                  <div className="space-y-5 animate-in fade-in duration-300">
                    {/* Operational Task Row */}
                    <div className="grid grid-cols-2 gap-3 sm:gap-4">
                      <div className="p-3.5 sm:p-4 rounded-2xl bg-surface-50 border border-black/[0.06]">
                        <span className="text-[11px] font-medium text-charcoal-50 block mb-1">Verifikasi SPP Masuk</span>
                        <div className="text-sm sm:text-lg font-bold text-charcoal-900">14 Bukti Bayar</div>
                        <span className="text-[10px] font-semibold text-brand-600 flex items-center gap-1 mt-1">
                          <CreditCard size={12} /> Siap verifikasi 1-klik
                        </span>
                      </div>

                      <div className="p-3.5 sm:p-4 rounded-2xl bg-surface-50 border border-black/[0.06]">
                        <span className="text-[11px] font-medium text-charcoal-50 block mb-1">Plotting Jadwal Hari Ini</span>
                        <div className="text-sm sm:text-lg font-bold text-charcoal-900">18 Kelas Berjalan</div>
                        <span className="text-[10px] font-semibold text-emerald-600 flex items-center gap-1 mt-1">
                          <CheckCircle2 size={12} /> 0 Ruang bentrok
                        </span>
                      </div>
                    </div>

                    {/* Operational Queue Table */}
                    <div className="p-4 rounded-2xl bg-surface-50 border border-black/[0.06]">
                      <div className="flex items-center justify-between text-xs font-bold text-charcoal-900 mb-3">
                        <span className="flex items-center gap-1.5">
                          <Calendar size={14} className="text-brand-500" /> Antrean Kelas & Tagihan Aktif
                        </span>
                        <span className="text-[11px] text-emerald-600 font-semibold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                          Auto-Broadcast WA Aktif
                        </span>
                      </div>
                      <div className="space-y-2 text-xs">
                        <div className="flex items-center justify-between p-2 rounded-lg bg-white border border-black/[0.04]">
                          <div>
                            <span className="font-semibold text-charcoal-900 block">Kelas 12 IPA - Fisika UTBK</span>
                            <span className="text-[11px] text-charcoal-50">Ruang Einstein • Tutor: Kak Farhan</span>
                          </div>
                          <span className="px-2 py-1 rounded bg-emerald-50 text-emerald-700 font-medium text-[11px]">Presensi Lengkap</span>
                        </div>
                        <div className="flex items-center justify-between p-2 rounded-lg bg-white border border-black/[0.04]">
                          <div>
                            <span className="font-semibold text-charcoal-900 block">Tagihan SPP Oktober - Clarissa</span>
                            <span className="text-[11px] text-charcoal-50">Paket Reguler 3 Bulan</span>
                          </div>
                          <span className="px-2 py-1 rounded bg-brand-50 text-brand-700 font-medium text-[11px]">Invoice Terkirim</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* 3. TUTOR CONSOLE VIEW */}
                {activeTab === 2 && (
                  <div className="space-y-5 animate-in fade-in duration-300">
                    {/* Tutor Stats Row */}
                    <div className="grid grid-cols-2 gap-3 sm:gap-4">
                      <div className="p-3.5 sm:p-4 rounded-2xl bg-brand-50 border border-brand-200">
                        <span className="text-[11px] font-medium text-brand-800 block mb-1">Estimasi Honor Bulan Ini</span>
                        <div className="text-sm sm:text-lg font-bold text-brand-700">Rp 4.250.000</div>
                        <span className="text-[10px] font-medium text-brand-600 block mt-1">26 Sesi Kelas Tervalidasi</span>
                      </div>

                      <div className="p-3.5 sm:p-4 rounded-2xl bg-surface-50 border border-black/[0.06]">
                        <span className="text-[11px] font-medium text-charcoal-50 block mb-1">Sesi Mengajar Berikutnya</span>
                        <div className="text-sm sm:text-base font-bold text-charcoal-900">15:30 - Matematika Intensif</div>
                        <span className="text-[10px] font-semibold text-emerald-600 flex items-center gap-1 mt-1">
                          <Clock size={12} /> Mulai 45 menit lagi
                        </span>
                      </div>
                    </div>

                    {/* Tutor Quick Presensi Card */}
                    <div className="p-4 rounded-2xl bg-surface-50 border border-black/[0.06]">
                      <div className="flex items-center justify-between text-xs font-bold text-charcoal-900 mb-3">
                        <span className="flex items-center gap-1.5">
                          <GraduationCap size={14} className="text-brand-500" /> Jurnal & Presensi Digital
                        </span>
                        <span className="text-brand-600 font-semibold text-[11px]">Input 1-Klik</span>
                      </div>
                      <div className="p-3 rounded-xl bg-white border border-black/[0.04] space-y-2 text-xs">
                        <div className="flex items-center justify-between">
                          <span className="font-semibold text-charcoal-900">Presensi 12 Siswa Terdaftar</span>
                          <span className="text-[11px] font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">12/12 Hadir</span>
                        </div>
                        <p className="text-[11px] text-charcoal-50 leading-relaxed">
                          Materi: &ldquo;Trigonometri Lanjutan & Latihan Soal SNBT 2026&rdquo;
                        </p>
                      </div>
                    </div>
                  </div>
                )}

              </div>

              {/* Key Capabilities Checklist */}
              <div className="pt-6 border-t border-black/[0.06]">
                <h5 className="text-xs font-bold uppercase tracking-wider text-charcoal-50 mb-3">
                  Fitur Utama untuk {currentRole.role}:
                </h5>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {currentRole.capabilities.map((cap, cIdx) => (
                    <div key={cIdx} className="flex items-start gap-2 text-xs text-charcoal-200 font-medium">
                      <div className="w-4 h-4 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-200">
                        <Check size={11} strokeWidth={3} />
                      </div>
                      <span className="leading-snug">{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
