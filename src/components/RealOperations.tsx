'use client';

import React, { useState } from 'react';
import { 
  CheckCircle2, 
  ArrowUpRight, 
  Clock, 
  Calendar, 
  CreditCard, 
  Send, 
  FileText, 
  ShieldCheck, 
  Sparkles,
  Users,
  Building,
  Check,
  Smartphone,
  ChevronRight,
  TrendingUp,
  AlertCircle
} from 'lucide-react';

export default function RealOperations() {
  const [activeTab, setActiveTab] = useState<'pagi' | 'siang' | 'malam'>('pagi');

  return (
    <section id="operations" className="py-24 sm:py-32 bg-[#FAF9F6] border-t border-black/[0.05] relative overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-brand-500/[0.03] blur-[140px] rounded-full" />
        <div className="absolute inset-0 bg-grid-pattern opacity-15" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="font-mono text-xs uppercase tracking-wider font-bold text-brand-600 mb-3 inline-block">
            /04 OPERASIONAL HARIAN
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-charcoal-900 leading-tight mb-5">
            Satu Hari Operasional Bimbel, <br className="hidden sm:inline" />
            <span className="text-brand-500">Semua Berjalan Otomatis</span>
          </h2>
          <p className="text-base sm:text-lg text-charcoal-100 font-normal leading-relaxed max-w-2xl mx-auto">
            Dari penagihan SPP pagi hari, monitoring kelas siang, hingga rekap honor tentor malam hari—semuanya tercatat akurat dalam satu sistem.
          </p>
        </div>

        {/* 3-Pill Interactive Time-of-Day Filter (Pagi, Siang, Malam) */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1.5 rounded-2xl bg-white border border-black/[0.08] shadow-soft-sm">
            <button
              onClick={() => setActiveTab('pagi')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'pagi'
                  ? 'bg-brand-500 text-white shadow-sm'
                  : 'text-charcoal-100 hover:text-charcoal-900'
              }`}
            >
              <Clock size={15} />
              <span>08:00 • Pagi (Finance & SPP)</span>
            </button>
            <button
              onClick={() => setActiveTab('siang')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'siang'
                  ? 'bg-brand-500 text-white shadow-sm'
                  : 'text-charcoal-100 hover:text-charcoal-900'
              }`}
            >
              <Calendar size={15} />
              <span>14:00 • Siang (Kelas & Presensi)</span>
            </button>
            <button
              onClick={() => setActiveTab('malam')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'malam'
                  ? 'bg-brand-500 text-white shadow-sm'
                  : 'text-charcoal-100 hover:text-charcoal-900'
              }`}
            >
              <TrendingUp size={15} />
              <span>20:00 • Malam (Honor & Rekap)</span>
            </button>
          </div>
        </div>

        {/* Dynamic Bento Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Main Hero Card in Bento (7 cols on lg) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 md:p-10 border border-black/[0.08] shadow-[0_4px_24px_-2px_rgba(0,0,0,0.05)] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-3 mb-6">
                <div className="flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-mono uppercase tracking-wider text-charcoal-50 font-bold">
                    {activeTab === 'pagi' && 'MODUL KEUANGAN SISWA'}
                    {activeTab === 'siang' && 'MODUL JADWAL & RUANG KELAS'}
                    {activeTab === 'malam' && 'MODUL REKONSILIASI KAS & HONOR'}
                  </span>
                </div>
                <span className="text-[11px] font-semibold text-brand-600 bg-brand-50 px-3 py-1 rounded-full border border-brand-200">
                  Otomatisasi Realtime
                </span>
              </div>

              {activeTab === 'pagi' && (
                <>
                  <h3 className="text-2xl sm:text-3xl font-bold text-charcoal-900 mb-3 leading-tight">
                    Invoice & WhatsApp Reminder Otomatis
                  </h3>
                  <p className="text-sm text-charcoal-100 leading-relaxed mb-6">
                    Sistem otomatis mengirim rincian tagihan SPP dan QRIS langsung ke WhatsApp wali murid. Tidak perlu lagi mencatat manual di buku kas atau spreadsheet terpisah.
                  </p>

                  {/* Micro UI: Realistic Billing Management */}
                  <div className="bg-[#FAF9F6] rounded-2xl p-4 sm:p-5 border border-black/[0.06] space-y-3 mb-4">
                    <div className="flex items-center justify-between pb-3 border-b border-black/[0.05]">
                      <div>
                        <div className="text-xs text-charcoal-50 font-medium">Tagihan Bulan Ini (Oktober 2026)</div>
                        <div className="text-lg font-bold text-charcoal-900">Rp 48.750.000 <span className="text-xs font-normal text-emerald-600 font-semibold">• 92% Lunas</span></div>
                      </div>
                      <div className="px-3 py-1 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold flex items-center gap-1.5">
                        <Check size={13} /> 128 Terverifikasi
                      </div>
                    </div>

                    {/* Simulated Transaction Rows */}
                    <div className="space-y-2">
                      <div className="flex items-center justify-between bg-white p-3 rounded-xl border border-black/[0.05] text-xs">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-brand-50 text-brand-600 flex items-center justify-center font-bold">
                            AP
                          </div>
                          <div>
                            <div className="font-bold text-charcoal-900">Aditya Pratama (Kelas 12 UTBK)</div>
                            <div className="text-[11px] text-charcoal-50">Kwitansi #INV-2026-1082 • Terbayar via QRIS</div>
                          </div>
                        </div>
                        <span className="font-mono font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
                          LUNAS
                        </span>
                      </div>

                      <div className="flex items-center justify-between bg-white p-3 rounded-xl border border-black/[0.05] text-xs">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
                            CA
                          </div>
                          <div>
                            <div className="font-bold text-charcoal-900">Clarissa Aurelia (Kelas 9 SMP)</div>
                            <div className="text-[11px] text-charcoal-50">Reminder WhatsApp Terjadwal • H-2 Jatuh Tempo</div>
                          </div>
                        </div>
                        <span className="font-mono font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded">
                          REMINDER
                        </span>
                      </div>
                    </div>
                  </div>
                </>
              )}

              {activeTab === 'siang' && (
                <>
                  <h3 className="text-2xl sm:text-3xl font-bold text-charcoal-900 mb-3 leading-tight">
                    Plotting Kelas Bebas Bentrok & 1-Tap Presensi
                  </h3>
                  <p className="text-sm text-charcoal-100 leading-relaxed mb-6">
                    Deteksi jadwal bentrok otomatis antar tutor, siswa, dan ruangan kelas. Tentor cukup membuka ponsel untuk mencatat presensi dan jurnal mengajar harian.
                  </p>

                  {/* Micro UI: Room Scheduling Grid */}
                  <div className="bg-[#FAF9F6] rounded-2xl p-4 sm:p-5 border border-black/[0.06] space-y-3 mb-4">
                    <div className="flex items-center justify-between pb-3 border-b border-black/[0.05] text-xs">
                      <span className="font-bold text-charcoal-900">Jadwal Sesi Berjalan (14:00 - 15:30)</span>
                      <span className="text-emerald-600 font-semibold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                        0 Bentrok Terdeteksi
                      </span>
                    </div>

                    <div className="space-y-2">
                      <div className="bg-white p-3 rounded-xl border border-black/[0.05] flex items-center justify-between text-xs">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-brand-50 text-brand-600 font-bold flex items-center justify-center text-[11px] border border-brand-100">
                            R.01
                          </div>
                          <div>
                            <div className="font-bold text-charcoal-900">Matematika Wajib — Sesi Intensif</div>
                            <div className="text-[11px] text-charcoal-50">Tutor: Sarah Nabila, S.Pd. • 12/12 Siswa Hadir</div>
                          </div>
                        </div>
                        <span className="text-[11px] text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                          BERLANGSUNG
                        </span>
                      </div>

                      <div className="bg-white p-3 rounded-xl border border-black/[0.05] flex items-center justify-between text-xs">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-surface-100 text-charcoal-200 font-bold flex items-center justify-center text-[11px] border border-black/[0.06]">
                            R.02
                          </div>
                          <div>
                            <div className="font-bold text-charcoal-900">Fisika SBMPTN — Bedah Soal</div>
                            <div className="text-[11px] text-charcoal-50">Tutor: Budi Pratama, M.Ed. • Jurnal Materi Tersimpan</div>
                          </div>
                        </div>
                        <span className="text-[11px] text-charcoal-100 font-bold bg-surface-100 px-2 py-0.5 rounded border border-black/[0.05]">
                          SELESAI
                        </span>
                      </div>
                    </div>
                  </div>
                </>
              )}

              {activeTab === 'malam' && (
                <>
                  <h3 className="text-2xl sm:text-3xl font-bold text-charcoal-900 mb-3 leading-tight">
                    Kalkulasi Honor Guru & Arus Kas Transparan
                  </h3>
                  <p className="text-sm text-charcoal-100 leading-relaxed mb-6">
                    Sistem langsung merekap jumlah sesi yang diajarkan tiap guru dan menghitung total honor secara otomatis tanpa perlu spreadsheet terpisah di akhir bulan.
                  </p>

                  {/* Micro UI: Payroll Calculation */}
                  <div className="bg-[#FAF9F6] rounded-2xl p-4 sm:p-5 border border-black/[0.06] space-y-3 mb-4">
                    <div className="flex items-center justify-between pb-3 border-b border-black/[0.05] text-xs">
                      <div>
                        <span className="text-charcoal-50 font-medium">Rekap Honor Tentor Bulan Berjalan</span>
                        <div className="text-base font-bold text-charcoal-900">Rp 14.800.000 <span className="text-xs text-charcoal-50 font-normal">(8 Tentor Aktif)</span></div>
                      </div>
                      <span className="text-xs font-bold text-brand-600 bg-brand-50 px-2.5 py-1 rounded border border-brand-200">
                        Slip Otomatis
                      </span>
                    </div>

                    <div className="space-y-2 text-xs">
                      <div className="bg-white p-3 rounded-xl border border-black/[0.05] flex items-center justify-between">
                        <div>
                          <div className="font-bold text-charcoal-900">Rian Hidayat, M.Si.</div>
                          <div className="text-[11px] text-charcoal-50">24 Sesi Mengajar • Rp 125.000/sesi</div>
                        </div>
                        <div className="text-right font-mono font-bold text-charcoal-900">
                          Rp 3.000.000
                        </div>
                      </div>

                      <div className="bg-white p-3 rounded-xl border border-black/[0.05] flex items-center justify-between">
                        <div>
                          <div className="font-bold text-charcoal-900">Dewi Anggraini, S.Si.</div>
                          <div className="text-[11px] text-charcoal-50">18 Sesi Mengajar • Rp 125.000/sesi</div>
                        </div>
                        <div className="text-right font-mono font-bold text-charcoal-900">
                          Rp 2.250.000
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Bottom Proof Highlight */}
            <div className="pt-4 border-t border-black/[0.05] flex items-center justify-between text-xs text-charcoal-50">
              <span className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 size={14} className="text-emerald-500" /> Sinkronisasi data real-time antar staf
              </span>
              <span className="font-mono text-brand-600 font-bold">100% Zero-Error</span>
            </div>
          </div>

          {/* Right Column Stack (2 Supporting Visual Cards, 5 cols on lg) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Supporting Card 1: Multi-Branch Sync */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-black/[0.08] shadow-[0_4px_24px_-2px_rgba(0,0,0,0.04)] flex-1 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center mb-4 border border-brand-100">
                  <Building size={20} />
                </div>
                <h4 className="text-lg font-bold text-charcoal-900 mb-2">
                  Multi-Cabang Terpadu
                </h4>
                <p className="text-xs sm:text-sm text-charcoal-100 leading-relaxed mb-4">
                  Owner memegang laporan konsolidasi seluruh cabang, sementara kepala cabang hanya mengelola kelas di lokasinya.
                </p>

                <div className="bg-surface-50 p-3.5 rounded-xl border border-black/[0.04] space-y-2 text-xs">
                  <div className="flex justify-between items-center font-medium">
                    <span className="text-charcoal-900">Cabang Dago (Pusat)</span>
                    <span className="text-emerald-600 font-bold">142 Siswa • Aktif</span>
                  </div>
                  <div className="flex justify-between items-center font-medium">
                    <span className="text-charcoal-900">Cabang Buah Batu</span>
                    <span className="text-emerald-600 font-bold">98 Siswa • Aktif</span>
                  </div>
                  <div className="flex justify-between items-center font-medium">
                    <span className="text-charcoal-900">Cabang Cimahi</span>
                    <span className="text-emerald-600 font-bold">64 Siswa • Aktif</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-black/[0.04] mt-4 text-[11px] text-charcoal-50 font-medium">
                Pemisahan data & akses (RBAC) terjamin aman.
              </div>
            </div>

            {/* Supporting Card 2: WhatsApp Broadcast & Notification */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-black/[0.08] shadow-[0_4px_24px_-2px_rgba(0,0,0,0.04)] flex-1 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4 border border-emerald-100">
                  <Smartphone size={20} />
                </div>
                <h4 className="text-lg font-bold text-charcoal-900 mb-2">
                  Laporan Belajar ke Orang Tua
                </h4>
                <p className="text-xs sm:text-sm text-charcoal-100 leading-relaxed mb-4">
                  Wali murid menerima notifikasi kehadiran anak dan laporan perkembangan berkala secara otomatis lewat WhatsApp.
                </p>

                <div className="bg-emerald-50/60 p-3.5 rounded-xl border border-emerald-200/60 text-xs text-charcoal-900 space-y-1">
                  <div className="font-bold flex items-center gap-1.5 text-emerald-800">
                    <CheckCircle2 size={13} /> Notifikasi Kehadiran Terkirim
                  </div>
                  <p className="text-[11px] text-charcoal-100 italic">
                    &ldquo;Ananda Kevin telah hadir di kelas Matematika Sesi 1 (16:00 WIB). Terima kasih.&rdquo;
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-black/[0.04] mt-4 text-[11px] text-charcoal-50 font-medium">
                Meningkatkan kepercayaan dan kepuasan wali murid.
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
