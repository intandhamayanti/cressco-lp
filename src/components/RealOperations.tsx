'use client';

import React from 'react';
import { Check, X } from 'lucide-react';

const comparisonData = [
  {
    feature: 'Data Siswa & Wali Murid',
    manual: 'Tersebar di banyak file Excel & grup chat yang rawan tercecer',
    cressco: 'Satu database cloud terpusat, aman, & mudah dicari instan',
  },
  {
    feature: 'Rekap Honor & Gaji Tentor',
    manual: 'Hitung rumus manual berjam-jam tiap akhir bulan',
    cressco: 'Otomatis terkalkulasi dari riil presensi mengajar per sesi',
  },
  {
    feature: 'Tagihan & Reminder SPP',
    manual: 'Ketik & tagih manual satu per satu ke nomor WhatsApp wali murid',
    cressco: 'Invoice digital & broadcast reminder otomatis via WhatsApp',
  },
  {
    feature: 'Plotting Jadwal & Alokasi Kelas',
    manual: 'Catatan manual di kalender, rawan bentrok antar tutor & ruang',
    cressco: 'Smart scheduler anti-bentrok ruang kelas & tutor',
  },
  {
    feature: 'Presensi & Jurnal Belajar',
    manual: 'Form absensi kertas fisik yang rawan rusak dan hilang',
    cressco: 'Presensi mobile & jurnal materi langsung dari HP tentor',
  },
  {
    feature: 'Monitoring Keuangan & Kas',
    manual: 'Tunggu kompilasi rekap bulanan admin tiap cabang',
    cressco: 'Dashboard omzet & arus kas multi-cabang terpantau realtime',
  },
  {
    feature: 'Kontrol Hak Akses Data',
    manual: 'File Excel rawan diubah, disalin, atau dihapus siapa saja',
    cressco: 'Role-based access control terproteksi (Owner, Admin, Tutor)',
  },
  {
    feature: 'Bukti Pembayaran & Kwitansi',
    manual: 'Tangkapan layar bukti transfer menumpuk di galeri HP admin',
    cressco: 'Arsip kwitansi digital terbit instan & tersimpan rapi per siswa',
  },
  {
    feature: 'Laporan Finansial & Laba Bersih',
    manual: 'Kompilasi laporan manual berhari-hari menjelang tutup buku',
    cressco: 'Unduh laporan laba bersih & neraca kas dalam 1 klik',
  },
  {
    feature: 'Dukungan & Pendampingan Sistem',
    manual: 'Harus setup mandiri tanpa bantuan teknis saat ada kendala',
    cressco: 'Dedicated support WhatsApp & pendampingan migrasi tuntas',
  },
];

export default function RealOperations() {
  return (
    <section id="operations" className="py-20 sm:py-28 bg-[#FAFAF9] border-t border-black/[0.05] relative overflow-hidden font-sans">
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 font-sans">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="font-mono text-xs uppercase tracking-wider font-bold text-brand-600 mb-3 inline-block">
            /04 PERBANDINGAN OPERASIONAL
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-charcoal-900 mb-4">
            Tinggalkan Cara Lama yang Menguras Waktu
          </h2>
          <p className="text-sm sm:text-base text-charcoal-100 font-normal leading-relaxed max-w-2xl mx-auto">
            Bandingkan efisiensi alur kerja modern Cressco dengan hambatan operasional manual berbasis spreadsheet dan grup WhatsApp.
          </p>
        </div>

        {/* Feature Comparison Table */}
        <div className="w-full bg-white rounded-2xl border border-stone-200/90 shadow-soft overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[700px]">
              
              {/* Header Row */}
              <thead>
                <tr className="border-b border-stone-200 bg-surface-100/80">
                  <th className="p-5 sm:p-6 text-sm sm:text-base font-bold text-charcoal-900 w-[34%] border-r border-stone-200/80">
                    Fitur & Alur Operasional
                  </th>
                  <th className="p-5 sm:p-6 text-sm sm:text-base font-semibold text-charcoal-800 w-[33%] border-r border-stone-200/80">
                    Cara Manual & Spreadsheet
                  </th>
                  <th className="p-5 sm:p-6 text-sm sm:text-base font-bold text-brand-700 w-[33%] bg-brand-50/70 border-l border-brand-200/60">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-brand-500 inline-block animate-pulse"></span>
                      Platform Cressco
                    </div>
                  </th>
                </tr>
              </thead>

              {/* Table Body */}
              <tbody className="divide-y divide-stone-100 text-xs sm:text-sm">
                {comparisonData.map((row, idx) => {
                  return (
                    <tr 
                      key={idx}
                      className="transition-colors hover:bg-stone-50/60"
                    >
                      {/* Feature Name */}
                      <td className="p-4 sm:p-5 font-semibold text-charcoal-900 border-r border-stone-200/60 align-top">
                        <div className="text-charcoal-900 font-medium">
                          {row.feature}
                        </div>
                      </td>

                      {/* Manual Side */}
                      <td className="p-4 sm:p-5 text-charcoal-100 border-r border-stone-200/60 align-top">
                        <div className="flex items-start gap-2.5">
                          <div className="w-5 h-5 rounded-full bg-stone-100 text-stone-400 flex items-center justify-center shrink-0 mt-0.5">
                            <X size={12} strokeWidth={2.5} />
                          </div>
                          <span className="text-xs sm:text-sm text-charcoal-100 leading-relaxed font-normal">
                            {row.manual}
                          </span>
                        </div>
                      </td>

                      {/* Cressco Side */}
                      <td className="p-4 sm:p-5 bg-brand-50/40 border-l border-brand-100/50 align-top">
                        <div className="flex items-start gap-2.5">
                          <div className="w-5 h-5 rounded-full bg-brand-500 text-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                            <Check size={12} strokeWidth={3} />
                          </div>
                          <span className="text-xs sm:text-sm font-semibold text-charcoal-900 leading-relaxed">
                            {row.cressco}
                          </span>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>

            </table>
          </div>
        </div>

      </div>
    </section>
  );
}
