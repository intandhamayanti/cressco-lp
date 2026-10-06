'use client';

import React, { useState } from 'react';
import { Check, Sparkles, ArrowRight } from 'lucide-react';

const APP_LOGIN_URL = 'https://app-cressco.vercel.app/login';

type BillingPeriod = '3months' | '6months' | '12months';

interface PricingPlan {
  id: string;
  name: string;
  description: string;
  popular?: boolean;
  pricing: {
    [key in BillingPeriod]: {
      monthlyRate: string;
      billedTotal: string;
      periodLabel: string;
      savings?: string;
    };
  };
  features: string[];
  ctaLabel: string;
}

const plans: PricingPlan[] = [
  {
    id: 'starter',
    name: 'STARTER',
    description: 'Untuk bimbel yang baru mulai beralih ke sistem digital terpadu.',
    popular: false,
    pricing: {
      '3months': {
        monthlyRate: 'Rp 299.000',
        billedTotal: 'Ditagih Rp 897.000 / 3 bulan',
        periodLabel: '/bulan',
      },
      '6months': {
        monthlyRate: 'Rp 269.000',
        billedTotal: 'Ditagih Rp 1.614.000 / 6 bulan',
        periodLabel: '/bulan',
        savings: 'Hemat 10%',
      },
      '12months': {
        monthlyRate: 'Rp 239.000',
        billedTotal: 'Ditagih Rp 2.868.000 / tahun',
        periodLabel: '/bulan',
        savings: 'Hemat 20%',
      },
    },
    features: [
      'Manajemen data siswa',
      'Jadwal & pembagian kelas',
      'Presensi siswa digital',
      'Pencatatan tagihan & SPP',
      'Dashboard ringkasan harian',
    ],
    ctaLabel: 'Pilih Starter',
  },
  {
    id: 'growth',
    name: 'GROWTH',
    description: 'Untuk bimbel berkembang yang ingin operasional lebih terstruktur.',
    popular: true,
    pricing: {
      '3months': {
        monthlyRate: 'Rp 599.000',
        billedTotal: 'Ditagih Rp 1.797.000 / 3 bulan',
        periodLabel: '/bulan',
      },
      '6months': {
        monthlyRate: 'Rp 539.000',
        billedTotal: 'Ditagih Rp 3.234.000 / 6 bulan',
        periodLabel: '/bulan',
        savings: 'Hemat 10%',
      },
      '12months': {
        monthlyRate: 'Rp 479.000',
        billedTotal: 'Ditagih Rp 5.748.000 / tahun',
        periodLabel: '/bulan',
        savings: 'Hemat 20%',
      },
    },
    features: [
      'Semua fitur Starter',
      'Manajemen tentor & jadwal mengajar',
      'Perhitungan honor tentor otomatis',
      'Dashboard analitik lanjutan',
      'Pengelolaan multi-cabang',
      'Rekap laporan keuangan bulanan',
    ],
    ctaLabel: 'Mulai dengan Growth',
  },
  {
    id: 'custom',
    name: 'CUSTOM',
    description: 'Untuk jaringan bimbel besar dengan kebutuhan kustom skala luas.',
    popular: false,
    pricing: {
      '3months': {
        monthlyRate: 'Hubungi Kami',
        billedTotal: 'Kustomisasi skala & multi-cabang',
        periodLabel: '',
      },
      '6months': {
        monthlyRate: 'Hubungi Kami',
        billedTotal: 'Kustomisasi skala & multi-cabang',
        periodLabel: '',
      },
      '12months': {
        monthlyRate: 'Hubungi Kami',
        billedTotal: 'Kustomisasi skala & multi-cabang',
        periodLabel: '',
      },
    },
    features: [
      'Kapasitas cabang tak terbatas',
      'Hak akses & kontrol kustom',
      'Laporan analitik eksekutif terpusat',
      'Konfigurasi sistem tailored',
      'Dedicated support WhatsApp prioritas',
    ],
    ctaLabel: 'Konsultasi Tim',
  },
];

export default function PricingSection() {
  const [period, setPeriod] = useState<BillingPeriod>('12months');

  return (
    <section id="pricing" className="py-24 sm:py-32 bg-white relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
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

        {/* Pricing Period Toggle */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex p-1 rounded-xl bg-surface-100 border border-black/[0.06] shadow-soft-sm">
            <button
              onClick={() => setPeriod('3months')}
              className={`px-4 sm:px-6 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                period === '3months'
                  ? 'bg-white text-charcoal-900 shadow-soft-sm'
                  : 'text-charcoal-100 hover:text-charcoal-900'
              }`}
            >
              3 Bulan
            </button>
            <button
              onClick={() => setPeriod('6months')}
              className={`px-4 sm:px-6 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all flex items-center gap-1.5 ${
                period === '6months'
                  ? 'bg-white text-charcoal-900 shadow-soft-sm'
                  : 'text-charcoal-100 hover:text-charcoal-900'
              }`}
            >
              <span>6 Bulan</span>
              <span className="text-[10px] bg-brand-50 text-brand-600 px-1.5 py-0.5 rounded font-bold border border-brand-200/60 hidden sm:inline">
                Hemat 10%
              </span>
            </button>
            <button
              onClick={() => setPeriod('12months')}
              className={`px-4 sm:px-6 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all flex items-center gap-1.5 ${
                period === '12months'
                  ? 'bg-white text-charcoal-900 shadow-soft-sm'
                  : 'text-charcoal-100 hover:text-charcoal-900'
              }`}
            >
              <span>12 Bulan</span>
              <span className="text-[10px] bg-brand-500 text-white px-1.5 py-0.5 rounded font-bold">
                Hemat 20%
              </span>
            </button>
          </div>
        </div>

        {/* 3 Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan) => {
            const currentPricing = plan.pricing[period];
            return (
              <div
                key={plan.id}
                className={`relative rounded-2xl flex flex-col justify-between transition-all duration-300 p-7 sm:p-8 ${
                  plan.popular
                    ? 'bg-white border-2 border-brand-500 shadow-brand-glow md:-translate-y-2'
                    : 'bg-surface-50 border border-black/[0.08] shadow-soft-sm hover:border-black/[0.15]'
                }`}
              >
                {/* Popular Pill */}
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-brand-500 text-white text-xs font-bold uppercase tracking-wider shadow-sm flex items-center gap-1">
                    <Sparkles size={12} />
                    <span>Most Popular</span>
                  </div>
                )}

                <div>
                  {/* Plan Name & Tagline */}
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-bold tracking-wider text-charcoal-900 uppercase">
                      {plan.name}
                    </span>
                    {currentPricing.savings && (
                      <span className="text-[11px] font-bold text-brand-600 bg-brand-50 px-2 py-0.5 rounded-full border border-brand-200">
                        {currentPricing.savings}
                      </span>
                    )}
                  </div>

                  <p className="text-xs text-charcoal-100 mb-6 leading-relaxed">
                    {plan.description}
                  </p>

                  {/* Price */}
                  <div className="mb-6 pb-6 border-b border-black/[0.06]">
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl sm:text-4xl font-bold tracking-tight text-charcoal-900">
                        {currentPricing.monthlyRate}
                      </span>
                      {currentPricing.periodLabel && (
                        <span className="text-xs text-charcoal-50 font-medium">
                          {currentPricing.periodLabel}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-charcoal-50 mt-1 font-medium">
                      {currentPricing.billedTotal}
                    </p>
                  </div>

                  {/* Feature Checklist */}
                  <div className="space-y-3 mb-8">
                    <span className="text-xs font-bold text-charcoal-900 uppercase tracking-wider block">
                      Fitur Utama:
                    </span>
                    {plan.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-xs text-charcoal-200">
                        <div className="w-4 h-4 rounded-full bg-brand-50 text-brand-600 flex items-center justify-center shrink-0 mt-0.5 border border-brand-200">
                          <Check size={11} strokeWidth={3} />
                        </div>
                        <span className="font-medium">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button -> Link to Laravel App */}
                <div>
                  <a
                    href={APP_LOGIN_URL}
                    className={`w-full py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center justify-center gap-2 ${
                      plan.popular
                        ? 'bg-brand-500 hover:bg-brand-600 text-white shadow-soft hover:shadow-brand-glow hover:-translate-y-0.5 active:translate-y-0'
                        : 'bg-white hover:bg-surface-100 text-charcoal-900 border border-black/[0.09] shadow-soft-sm hover:-translate-y-0.5 active:translate-y-0'
                    }`}
                  >
                    <span>{plan.ctaLabel}</span>
                    <ArrowRight size={14} />
                  </a>
                </div>

              </div>
            );
          })}
        </div>

        {/* Note under pricing */}
        <p className="text-center text-xs text-charcoal-50 mt-10">
          * Seluruh paket mencakup update berkala, backup cloud, dan panduan implementasi.
        </p>

      </div>
    </section>
  );
}
