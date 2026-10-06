'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: 'Apakah data bimbel kami aman dan terisolasi dari bimbel lain?',
    a: 'Sangat aman. Cressco menggunakan arsitektur multi-tenant dengan enkripsi dan pemisahan basis data yang ketat. Setiap bimbel dan cabang memiliki kontrol akses role-based (RBAC) yang terisolasi.',
  },
  {
    q: 'Berapa lama proses implementasi dan migrasi data dari Excel?',
    a: 'Tim Cressco menyediakan template migrasi data instan untuk siswa, kelas, dan tutor. Rata-rata bimbel dapat beroperasi penuh dalam kurun waktu kurang dari 24-48 jam.',
  },
  {
    q: 'Bagaimana cara perhitungan honor tentor di Cressco?',
    a: 'Honor tentor dihitung secara otomatis berdasarkan presensi sesi mengajar yang terverifikasi, tarif per jam / per sesi, serta mata pelajaran yang diampu.',
  },
  {
    q: 'Apakah Cressco mendukung bimbel yang memiliki beberapa cabang fisik?',
    a: 'Ya, Cressco dirancang dengan modul multi-cabang. Owner dapat melihat konsolidasi finansial seluruh cabang, sementara admin tiap cabang hanya mengakses data cabangnya masing-masing.',
  },
];

export default function FaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 sm:py-28 bg-white border-t border-black/[0.05]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="font-mono text-xs uppercase tracking-wider font-bold text-brand-600 mb-3 inline-block">
            /07 TANYA JAWAB (FAQ)
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-charcoal-900 mb-4">
            Pertanyaan yang Sering Diajukan
          </h2>
          <p className="text-sm sm:text-base text-charcoal-100">
            Segala hal yang perlu Anda ketahui sebelum mulai menggunakan platform Cressco.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="rounded-xl border border-black/[0.07] bg-surface-50 overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 font-semibold text-sm sm:text-base text-charcoal-900 hover:text-brand-600 transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    size={18}
                    className={`shrink-0 text-charcoal-50 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-brand-600' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-charcoal-100 leading-relaxed border-t border-black/[0.04] animate-in fade-in duration-150">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
