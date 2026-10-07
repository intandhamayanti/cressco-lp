'use client';

import React, { useState } from 'react';
import { Check, ArrowRight, Zap } from 'lucide-react';

const APP_LOGIN_URL = 'https://app-cressco.vercel.app/login';

type BillingPeriod = '3months' | '6months' | '12months';

interface PricingPlan {
  id: string;
  name: string;
  description: string;
  isHighlighted?: boolean;
  pricing: {
    [key in BillingPeriod]: {
      monthlyRate: string;
      billedTotal: string;
      periodLabel: string;
    };
  };
  features: string[];
  ctaLabel: string;
}

const plans: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Starter',
    description: 'Cocok untuk bimbel rintisan yang ingin mendigitalkan absensi dan tagihan siswa tanpa biaya operasional tinggi.',
    isHighlighted: false,
    pricing: {
      '3months': {
        monthlyRate: 'Rp 299.000',
        billedTotal: 'Ditagih Rp 897.000 / 3 bulan',
        periodLabel: '/ Bulan',
      },
      '6months': {
        monthlyRate: 'Rp 269.000',
        billedTotal: 'Ditagih Rp 1.614.000 / 6 bulan',
        periodLabel: '/ Bulan',
      },
      '12months': {
        monthlyRate: 'Rp 239.000',
        billedTotal: 'Ditagih Rp 2.868.000 / tahun',
        periodLabel: '/ Bulan',
      },
    },
    features: [
      '1 Cabang Bimbel',
      'Hingga 150 Siswa Aktif',
      'Manajemen Kelas & Jadwal Belajar',
      'Presensi Digital Siswa (1-Tap)',
      'Invoice & Pencatatan SPP Otomatis',
      'Reminder Tagihan via WhatsApp',
      'Dashboard Kas Masuk Harian',
      'Dukungan Standar (Email & WA)',
    ],
    ctaLabel: 'Get Started Now',
  },
  {
    id: 'professional',
    name: 'Professional',
    description: 'Dirancang untuk bimbel berkembang yang butuh kontrol multi-cabang, rekap honor tentor, dan otomasi WhatsApp.',
    isHighlighted: true,
    pricing: {
      '3months': {
        monthlyRate: 'Rp 599.000',
        billedTotal: 'Ditagih Rp 1.797.000 / 3 bulan',
        periodLabel: '/ Bulan',
      },
      '6months': {
        monthlyRate: 'Rp 539.000',
        billedTotal: 'Ditagih Rp 3.234.000 / 6 bulan',
        periodLabel: '/ Bulan',
      },
      '12months': {
        monthlyRate: 'Rp 479.000',
        billedTotal: 'Ditagih Rp 5.748.000 / tahun',
        periodLabel: '/ Bulan',
      },
    },
    features: [
      'Hingga 3 Cabang Bimbel',
      'Hingga 600 Siswa Aktif',
      'Manajemen Tentor & Honor Otomatis',
      'Broadcast WhatsApp Otomatis ke Wali',
      'Deteksi Jadwal Bentrok Otomatis',
      'Rekap Laporan Keuangan Bulanan',
      'Akses Multi-Role (Owner, Admin, Tutor)',
      'Dukungan Prioritas WhatsApp (12h Respon)',
    ],
    ctaLabel: 'Get Started Now',
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    description: 'Solusi komprehensif untuk jaringan bimbel skala besar yang memerlukan custom RBAC, integrasi API, dan dedicated support.',
    isHighlighted: false,
    pricing: {
      '3months': {
        monthlyRate: 'Rp 999.000',
        billedTotal: 'Kustomisasi skala multi-cabang',
        periodLabel: '/ Bulan',
      },
      '6months': {
        monthlyRate: 'Rp 899.000',
        billedTotal: 'Kustomisasi skala multi-cabang',
        periodLabel: '/ Bulan',
      },
      '12months': {
        monthlyRate: 'Rp 799.000',
        billedTotal: 'Kustomisasi skala multi-cabang',
        periodLabel: '/ Bulan',
      },
    },
    features: [
      'Cabang Bimbel Tanpa Batas',
      'Kapasitas Siswa Tanpa Batas',
      'Custom Role-Based Access Control (RBAC)',
      'Integrasi Payment Gateway & Multi-Rekening',
      'Ekspor Laporan Excel & PDF Kustom',
      'Migrasi Data Massal dari Spreadsheet Lama',
      'Dedicated Account Manager Khusus',
      'Jaminan Uptime 99.9% & SLA Support',
    ],
    ctaLabel: 'Get Started Now',
  },
];

export default function PricingSection() {
  const [period, setPeriod] = useState<BillingPeriod>('12months');

  return (
    <section id="pricing" className="py-24 sm:py-32 bg-[#FAFAF9] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="font-mono text-xs uppercase tracking-wider font-bold text-brand-600 mb-3 inline-block">
            /03 PAKET HARGA
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-charcoal-900 mb-4">
            Pilihan Paket Sederhana & Transparan
          </h2>
          <p className="text-base sm:text-lg text-charcoal-100 font-normal leading-relaxed">
            Mulai dari satu bimbel hingga beberapa cabang, pilih paket yang sesuai dengan kebutuhan operasional Anda.
          </p>
        </div>

        {/* Pricing Period Toggle with 3, 6, 12 Month Badges */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex p-1.5 rounded-2xl bg-white border border-black/[0.08] shadow-soft-sm">
            <button
              onClick={() => setPeriod('3months')}
              className={`px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                period === '3months'
                  ? 'bg-charcoal-900 text-white shadow-soft-sm'
                  : 'text-charcoal-100 hover:text-charcoal-900'
              }`}
            >
              3 Bulan
            </button>
            <button
              onClick={() => setPeriod('6months')}
              className={`px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-1.5 ${
                period === '6months'
                  ? 'bg-charcoal-900 text-white shadow-soft-sm'
                  : 'text-charcoal-100 hover:text-charcoal-900'
              }`}
            >
              <span>6 Bulan</span>
              <span className="text-[10px] bg-brand-50 text-brand-600 px-2 py-0.5 rounded-full font-bold border border-brand-200/60">
                Hemat 10%
              </span>
            </button>
            <button
              onClick={() => setPeriod('12months')}
              className={`px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-1.5 ${
                period === '12months'
                  ? 'bg-brand-500 text-white shadow-soft-sm'
                  : 'text-charcoal-100 hover:text-charcoal-900'
              }`}
            >
              <span>12 Bulan</span>
              <span className="text-[10px] bg-emerald-500 text-white px-2 py-0.5 rounded-full font-bold shadow-sm">
                Hemat 20%
              </span>
            </button>
          </div>
        </div>

        {/* 3 Pricing Cards: "Card dalam Card" Architecture matching reference */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan) => {
            const currentPricing = plan.pricing[period];
            return (
              <div
                key={plan.id}
                className="group relative bg-white rounded-[28px] p-3.5 sm:p-4 border border-black/[0.08] shadow-[0_4px_24px_-4px_rgba(0,0,0,0.05)] hover:shadow-soft-xl hover:border-black/[0.14] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* INNER TOP CARD (Card di dalam Card) */}
                  <div
                    className={`rounded-2xl p-6 sm:p-7 flex flex-col justify-between min-h-[300px] sm:min-h-[320px] transition-all duration-300 ${
                      plan.isHighlighted
                        ? 'bg-gradient-to-b from-[#4A85F6] via-[#3B82F6] to-[#2563EB] text-white shadow-lg shadow-blue-500/25'
                        : 'bg-[#EBF3FE]/80 border border-blue-100 text-charcoal-900'
                    }`}
                  >
                    <div>
                      {/* Plan Title (Serif Display Header) */}
                      <h3
                        className={`font-serif text-2xl sm:text-3xl font-medium tracking-tight mb-2.5 ${
                          plan.isHighlighted ? 'text-white' : 'text-charcoal-900'
                        }`}
                      >
                        {plan.name}
                      </h3>

                      {/* Plan Description */}
                      <p
                        className={`text-xs sm:text-[13px] leading-relaxed mb-6 font-normal ${
                          plan.isHighlighted ? 'text-white/90' : 'text-charcoal-100'
                        }`}
                      >
                        {plan.description}
                      </p>
                    </div>

                    <div>
                      {/* Price Section */}
                      <div className="flex items-baseline gap-1.5 mb-1">
                        <span
                          className={`font-serif text-3xl sm:text-4xl font-medium tracking-tight ${
                            plan.isHighlighted ? 'text-white' : 'text-charcoal-900'
                          }`}
                        >
                          {currentPricing.monthlyRate}
                        </span>
                        {currentPricing.periodLabel && (
                          <span
                            className={`text-xs sm:text-sm font-sans font-normal ${
                              plan.isHighlighted ? 'text-white/80' : 'text-charcoal-100'
                            }`}
                          >
                            {currentPricing.periodLabel}
                          </span>
                        )}
                      </div>

                      <p
                        className={`text-[11px] font-normal mb-5 ${
                          plan.isHighlighted ? 'text-white/75' : 'text-charcoal-50'
                        }`}
                      >
                        {currentPricing.billedTotal}
                      </p>

                      {/* CTA Button */}
                      <a
                        href={APP_LOGIN_URL}
                        className="w-full py-3.5 px-4 rounded-xl bg-[#18181B] hover:bg-black text-white text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center justify-center gap-2 shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0"
                      >
                        <Zap size={14} className="fill-white text-white" />
                        <span>{plan.ctaLabel}</span>
                      </a>
                    </div>
                  </div>

                  {/* BOTTOM FEATURE LIST (Checklist with clean circles, NO AI icons) */}
                  <div className="px-3 pt-6 pb-4 space-y-3.5">
                    {plan.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-3 text-xs sm:text-[13px] text-charcoal-200">
                        <div className="w-5 h-5 rounded-full bg-[#DCEBFE] text-[#2563EB] flex items-center justify-center shrink-0">
                          <Check size={12} strokeWidth={3} />
                        </div>
                        <span className="font-normal text-charcoal-900">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer small note */}
                <div className="px-3 pt-2 text-[11px] text-charcoal-50 border-t border-black/[0.04]">
                  Mendukung aktivasi instan & data terisolasi.
                </div>
              </div>
            );
          })}
        </div>

        {/* Note under pricing */}
        <p className="text-center text-xs text-charcoal-50 mt-10">
          * Seluruh paket mencakup update berkala, backup cloud harian, dan bantuan migrasi spreadsheet gratis.
        </p>

      </div>
    </section>
  );
}
