'use client';

import React from 'react';
import { 
  CreditCard, 
  BarChart3, 
  Users2, 
  Building2, 
  CheckCircle2, 
  Clock, 
  ArrowUpRight, 
  TrendingUp,
  Wallet,
  CalendarCheck,
  Sparkles
} from 'lucide-react';

export default function CoreFeatures() {
  return (
    <section id="features" className="py-24 sm:py-32 bg-surface-50/60 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <span className="font-mono text-xs uppercase tracking-wider font-bold text-brand-600 mb-3 inline-block">
            /01 FITUR UTAMA
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-charcoal-900 mb-4">
            Semua Kebutuhan Operasional Bimbel Anda
          </h2>
          <p className="text-base sm:text-lg text-charcoal-100 font-normal leading-relaxed max-w-2xl mx-auto">
            Satu sistem terpadu untuk membantu owner, admin, dan tentor bekerja lebih teratur setiap hari.
          </p>
        </div>

        {/* 2x2 Feature Grid (Trackio style card composition) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          
          {/* Card 1: Smart Payment Tracking */}
          <div className="card-hover-effect rounded-2xl bg-white border border-black/[0.07] p-6 sm:p-8 flex flex-col justify-between overflow-hidden relative">
            <div className="mb-8">
              <div className="w-10 h-10 rounded-xl bg-brand-50 border border-brand-100 flex items-center justify-center text-brand-600 mb-4">
                <CreditCard size={20} />
              </div>
              <h3 className="text-xl font-bold text-charcoal-900 mb-2">
                Pelacakan Pembayaran & SPP
              </h3>
              <p className="text-sm text-charcoal-100 leading-relaxed">
                Pantau pembayaran siswa, status tagihan, dan riwayat transaksi tanpa spreadsheet yang berantakan.
              </p>
            </div>

            {/* Visual Micro-UI */}
            <div className="bg-surface-50 rounded-xl p-4 border border-black/[0.05] space-y-2.5">
              <div className="flex items-center justify-between text-xs pb-2 border-b border-black/[0.04]">
                <span className="font-semibold text-charcoal-900">Tagihan Siswa (Okt 2026)</span>
                <span className="text-brand-600 font-semibold">78% Lunas</span>
              </div>
              
              {/* Payment Row 1 */}
              <div className="flex items-center justify-between bg-white p-2.5 rounded-lg border border-black/[0.04] text-xs">
                <div className="flex items-center gap-2.5">
                  <div className="w-2 h-2 rounded-full bg-emerald-500" />
                  <div>
                    <p className="font-semibold text-charcoal-900">Ahmad Fauzi</p>
                    <p className="text-[11px] text-charcoal-50">Kelas 12 IPA Intensif</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="font-semibold text-charcoal-900">Rp 1.250.000</span>
                  <span className="block text-[10px] text-emerald-600 font-medium">Lunas (BCA TF)</span>
                </div>
              </div>

              {/* Payment Row 2 */}
              <div className="flex items-center justify-between bg-white p-2.5 rounded-lg border border-black/[0.04] text-xs">
                <div className="flex items-center gap-2.5">
                  <div className="w-2 h-2 rounded-full bg-amber-500" />
                  <div>
                    <p className="font-semibold text-charcoal-900">Nabila Putri</p>
                    <p className="text-[11px] text-charcoal-50">Kelas 9 SMP Reguler</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="font-semibold text-charcoal-900">Rp 850.000</span>
                  <span className="block text-[10px] text-amber-600 font-medium">Menunggu Verifikasi</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Real-Time Bimbel Dashboard */}
          <div className="card-hover-effect rounded-2xl bg-white border border-black/[0.07] p-6 sm:p-8 flex flex-col justify-between overflow-hidden relative">
            <div className="mb-8">
              <div className="w-10 h-10 rounded-xl bg-brand-50 border border-brand-100 flex items-center justify-center text-brand-600 mb-4">
                <BarChart3 size={20} />
              </div>
              <h3 className="text-xl font-bold text-charcoal-900 mb-2">
                Dashboard Analitik Real-Time
              </h3>
              <p className="text-sm text-charcoal-100 leading-relaxed">
                Lihat pendapatan, kehadiran siswa, sesi kelas, hingga performa seluruh cabang dalam satu dashboard.
              </p>
            </div>

            {/* Visual Micro-UI */}
            <div className="bg-surface-50 rounded-xl p-4 border border-black/[0.05]">
              <div className="grid grid-cols-2 gap-2.5 mb-3">
                <div className="bg-white p-3 rounded-lg border border-black/[0.04]">
                  <span className="text-[11px] text-charcoal-50 font-medium block">Total Siswa Aktif</span>
                  <div className="flex items-baseline gap-1.5 mt-0.5">
                    <span className="text-xl font-bold text-charcoal-900">84</span>
                    <span className="text-[11px] text-emerald-600 font-semibold flex items-center">
                      <ArrowUpRight size={12} /> +12%
                    </span>
                  </div>
                </div>
                <div className="bg-white p-3 rounded-lg border border-black/[0.04]">
                  <span className="text-[11px] text-charcoal-50 font-medium block">Revenue Terverifikasi</span>
                  <div className="flex items-baseline gap-1.5 mt-0.5">
                    <span className="text-sm font-bold text-charcoal-900">Rp 41.6M</span>
                    <span className="text-[10px] text-brand-600 font-medium">Bulan Ini</span>
                  </div>
                </div>
              </div>

              {/* Mini Bar Graph Representation */}
              <div className="bg-white p-3 rounded-lg border border-black/[0.04]">
                <div className="flex justify-between items-center text-[11px] text-charcoal-50 mb-2 font-medium">
                  <span>Tren Pendapatan Bulanan</span>
                  <span className="text-brand-600 font-semibold">Konsolidasi</span>
                </div>
                <div className="flex items-end gap-1.5 h-12 pt-1">
                  {[40, 65, 50, 75, 60, 85, 90, 100, 80, 95, 70, 88].map((h, i) => (
                    <div key={i} className="flex-1 bg-brand-100 rounded-t-sm relative group" style={{ height: `${h}%` }}>
                      <div className="absolute inset-0 bg-brand-500 rounded-t-sm opacity-80 group-hover:opacity-100 transition-opacity" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: Flexible Tutor Management */}
          <div className="card-hover-effect rounded-2xl bg-white border border-black/[0.07] p-6 sm:p-8 flex flex-col justify-between overflow-hidden relative">
            <div className="mb-8">
              <div className="w-10 h-10 rounded-xl bg-brand-50 border border-brand-100 flex items-center justify-center text-brand-600 mb-4">
                <Users2 size={20} />
              </div>
              <h3 className="text-xl font-bold text-charcoal-900 mb-2">
                Manajemen Tentor & Honor Mengajar
              </h3>
              <p className="text-sm text-charcoal-100 leading-relaxed">
                Atur jadwal mengajar, presensi kehadiran, sesi kelas, materi, dan perhitungan honor tentor secara transparan.
              </p>
            </div>

            {/* Visual Micro-UI */}
            <div className="bg-surface-50 rounded-xl p-4 border border-black/[0.05] space-y-2">
              <div className="flex items-center justify-between text-xs pb-1.5 border-b border-black/[0.04]">
                <span className="font-semibold text-charcoal-900">Jadwal Sesi Tentor Hari Ini</span>
                <span className="text-xs text-charcoal-50">3 Sesi Berjalan</span>
              </div>

              <div className="bg-white p-2.5 rounded-lg border border-black/[0.04] flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-brand-50 text-brand-600 font-bold flex items-center justify-center text-xs">
                    BP
                  </div>
                  <div>
                    <p className="font-semibold text-charcoal-900">Budi Pratama, M.Ed.</p>
                    <p className="text-[11px] text-charcoal-50">Fisika SBMPTN • 16.00 - 17.30</p>
                  </div>
                </div>
                <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-semibold border border-emerald-200">
                  Presensi Terverifikasi
                </span>
              </div>

              <div className="bg-white p-2.5 rounded-lg border border-black/[0.04] flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-surface-200 text-charcoal-200 font-bold flex items-center justify-center text-xs">
                    SN
                  </div>
                  <div>
                    <p className="font-semibold text-charcoal-900">Siti Nurhaliza, S.Si.</p>
                    <p className="text-[11px] text-charcoal-50">Matematika Wajib • 18.00 - 19.30</p>
                  </div>
                </div>
                <span className="px-2 py-0.5 rounded-full bg-surface-100 text-charcoal-100 text-[10px] font-medium border border-black/[0.06]">
                  Akan Datang
                </span>
              </div>
            </div>
          </div>

          {/* Card 4: Multi-Branch Management */}
          <div className="card-hover-effect rounded-2xl bg-white border border-black/[0.07] p-6 sm:p-8 flex flex-col justify-between overflow-hidden relative">
            <div className="mb-8">
              <div className="w-10 h-10 rounded-xl bg-brand-50 border border-brand-100 flex items-center justify-center text-brand-600 mb-4">
                <Building2 size={20} />
              </div>
              <h3 className="text-xl font-bold text-charcoal-900 mb-2">
                Pengelolaan Multi-Cabang Terpusat
              </h3>
              <p className="text-sm text-charcoal-100 leading-relaxed">
                Kelola beberapa cabang dari satu akun dengan hak akses yang terisolasi dan terkontrol rapi.
              </p>
            </div>

            {/* Visual Micro-UI */}
            <div className="bg-surface-50 rounded-xl p-4 border border-black/[0.05]">
              <div className="flex items-center justify-between text-xs pb-2 border-b border-black/[0.04] mb-2.5">
                <span className="font-semibold text-charcoal-900">Konsolidasi Multi-Cabang</span>
                <span className="text-[11px] font-medium text-brand-600">3 Cabang Aktif</span>
              </div>

              <div className="space-y-2">
                {[
                  { name: 'Prime Academy — Cabang Pusat (Dago)', students: '142 Siswa', status: 'Optimal' },
                  { name: 'Prime Academy — Cabang Buah Batu', students: '98 Siswa', status: 'Optimal' },
                  { name: 'Prime Academy — Cabang Cimahi', students: '64 Siswa', status: 'Stabil' }
                ].map((branch, i) => (
                  <div key={i} className="flex items-center justify-between bg-white p-2.5 rounded-lg border border-black/[0.04] text-xs">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-brand-500" />
                      <span className="font-medium text-charcoal-900">{branch.name}</span>
                    </div>
                    <div className="flex items-center gap-2 text-charcoal-100">
                      <span>{branch.students}</span>
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-surface-100 text-charcoal-200">
                        {branch.status}
                      </span>
                    </div>
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
