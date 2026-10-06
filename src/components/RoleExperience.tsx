'use client';

import React, { useState } from 'react';
import { 
  ShieldCheck, 
  UserCheck, 
  GraduationCap, 
  Building2, 
  ArrowRight, 
  ChevronRight,
  CheckCircle2,
  Layers,
  Sparkles
} from 'lucide-react';

const roleCards = [
  {
    role: 'OWNER',
    title: 'Kendali Penuh & Laporan Strategis',
    description: 'Pantau seluruh cabang, arus kas, pertumbuhan siswa, dan performa bimbel.',
    icon: ShieldCheck,
    tag: 'Executive Suite',
    keyPoints: [
      'Konsolidasi laporan keuangan multi-cabang',
      'Ringkasan eksekutif laba bersih & tagihan',
      'Kontrol lisensi dan ekspansi operasional',
    ],
    highlight: 'Akses penuh seluruh cabang & data strategis',
  },
  {
    role: 'ADMIN',
    title: 'Operasional Harian Lebih Teratur',
    description: 'Kelola siswa, jadwal kelas, penagihan SPP, dan administrasi harian.',
    icon: UserCheck,
    tag: 'Operations Console',
    keyPoints: [
      'Penerimaan pendaftaran & plotting kelas',
      'Pencatatan invoice & verifikasi bukti bayar',
      'Manajemen presensi dan jadwal ruang belajar',
    ],
    highlight: 'Kelola operasional harian bebas hambatan',
  },
  {
    role: 'TUTOR',
    title: 'Fokus Mendidik Tanpa Beban Admin',
    description: 'Catat kehadiran, sesi mengajar, materi, dan transparansi honor tentor.',
    icon: GraduationCap,
    tag: 'Teacher Hub',
    keyPoints: [
      'Presensi digital & jurnal materi kelas',
      'Daftar jadwal mengajar mingguan terstruktur',
      'Perhitungan honor mengajar transparan',
    ],
    highlight: 'Fokus mendidik tanpa beban administratif',
  },
];

export default function RoleExperience() {
  const [activeTab, setActiveTab] = useState<number>(0);

  return (
    <section id="roles" className="py-24 sm:py-32 bg-white relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="font-mono text-xs uppercase tracking-wider font-bold text-brand-600 mb-3 inline-block">
            /02 SOLUSI PERAN
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-charcoal-900 mb-4">
            Satu Platform untuk Setiap Peran
          </h2>
          <p className="text-base sm:text-lg text-charcoal-100 font-normal leading-relaxed">
            Owner, Admin, dan Tentor mendapatkan dashboard yang sesuai dengan tanggung jawabnya masing-masing.
          </p>
        </div>

        {/* Visual Relationship Hierarchy Flow (Owner → Branch → Admin → Tutor) */}
        <div className="mb-14 p-6 sm:p-8 rounded-2xl bg-surface-50 border border-black/[0.06] shadow-soft-sm">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-bold uppercase tracking-wider text-charcoal-50 flex items-center gap-1.5">
              <Layers size={14} className="text-brand-500" /> Alur Akses Terintegrasi
            </span>
            <span className="text-xs text-brand-600 font-semibold bg-brand-50 px-2.5 py-1 rounded-md border border-brand-200">
              Role-Based Access Control (RBAC)
            </span>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-3 md:gap-2">
            
            {/* Step 1: Owner */}
            <div className="flex-1 w-full flex items-center gap-3 p-3.5 rounded-xl bg-white border border-brand-200/80 shadow-soft-sm">
              <div className="w-9 h-9 rounded-lg bg-brand-500 text-white flex items-center justify-center font-bold">
                <ShieldCheck size={18} />
              </div>
              <div className="min-w-0">
                <span className="text-[10px] font-bold text-brand-600 uppercase tracking-wide block">Tingkat 1</span>
                <span className="text-sm font-bold text-charcoal-900">Owner</span>
                <span className="text-xs text-charcoal-100 block truncate">Strategis & Finansial</span>
              </div>
            </div>

            {/* Arrow */}
            <div className="hidden md:flex text-charcoal-50">
              <ChevronRight size={20} />
            </div>

            {/* Step 2: Branch */}
            <div className="flex-1 w-full flex items-center gap-3 p-3.5 rounded-xl bg-white border border-black/[0.06] shadow-soft-sm">
              <div className="w-9 h-9 rounded-lg bg-surface-200 text-charcoal-900 flex items-center justify-center font-bold">
                <Building2 size={18} />
              </div>
              <div className="min-w-0">
                <span className="text-[10px] font-bold text-charcoal-50 uppercase tracking-wide block">Tingkat 2</span>
                <span className="text-sm font-bold text-charcoal-900">Branch</span>
                <span className="text-xs text-charcoal-100 block truncate">Pusat / Unit Cabang</span>
              </div>
            </div>

            {/* Arrow */}
            <div className="hidden md:flex text-charcoal-50">
              <ChevronRight size={20} />
            </div>

            {/* Step 3: Admin */}
            <div className="flex-1 w-full flex items-center gap-3 p-3.5 rounded-xl bg-white border border-black/[0.06] shadow-soft-sm">
              <div className="w-9 h-9 rounded-lg bg-surface-200 text-charcoal-900 flex items-center justify-center font-bold">
                <UserCheck size={18} />
              </div>
              <div className="min-w-0">
                <span className="text-[10px] font-bold text-charcoal-50 uppercase tracking-wide block">Tingkat 3</span>
                <span className="text-sm font-bold text-charcoal-900">Admin</span>
                <span className="text-xs text-charcoal-100 block truncate">Operasional & Tagihan</span>
              </div>
            </div>

            {/* Arrow */}
            <div className="hidden md:flex text-charcoal-50">
              <ChevronRight size={20} />
            </div>

            {/* Step 4: Tutor */}
            <div className="flex-1 w-full flex items-center gap-3 p-3.5 rounded-xl bg-white border border-black/[0.06] shadow-soft-sm">
              <div className="w-9 h-9 rounded-lg bg-surface-200 text-charcoal-900 flex items-center justify-center font-bold">
                <GraduationCap size={18} />
              </div>
              <div className="min-w-0">
                <span className="text-[10px] font-bold text-charcoal-50 uppercase tracking-wide block">Tingkat 4</span>
                <span className="text-sm font-bold text-charcoal-900">Tutor</span>
                <span className="text-xs text-charcoal-100 block truncate">Kelas & Presensi Siswa</span>
              </div>
            </div>

          </div>
        </div>

        {/* 3 Role Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {roleCards.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="card-hover-effect rounded-2xl bg-surface-50 border border-black/[0.07] p-7 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-xs font-bold px-2.5 py-1 rounded bg-white text-brand-600 border border-brand-200/80 uppercase tracking-wider">
                      {item.role}
                    </span>
                    <div className="w-9 h-9 rounded-xl bg-white border border-black/[0.06] flex items-center justify-center text-brand-600">
                      <Icon size={18} />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-charcoal-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-charcoal-100 leading-relaxed mb-6">
                    {item.description}
                  </p>

                  <div className="space-y-2.5 pt-4 border-t border-black/[0.06]">
                    {item.keyPoints.map((point, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2.5 text-xs text-charcoal-200 font-medium">
                        <CheckCircle2 size={15} className="text-brand-500 shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-black/[0.05] text-xs font-semibold text-brand-700 bg-brand-50/60 p-3 rounded-xl border border-brand-100/60">
                  {item.highlight}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
