'use client';

import React, { useState } from 'react';
import { Check, ArrowRight, Zap, Sparkles } from 'lucide-react';

const APP_LOGIN_URL = 'https://app-cressco.vercel.app/login';

type BillingPeriod = '3months' | '6months' | '12months';

interface PricingPlan {
  id: string;
  name: string;
  tagline: string;
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
    tagline: 'Untuk Bimbel Rintisan',
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
      '1 Cabang Bimbel Aktif',
      'Hingga 150 Siswa Terdaftar',
      'Manajemen Kelas & Jadwal Belajar',
      'Presensi Digital Siswa (1-Tap)',
      'Invoice & Pencatatan SPP Otomatis',
      'Reminder Tagihan via WhatsApp',
      'Dashboard Kas Masuk Harian',
      'Dukungan Standar (Email & WA)',
    ],
    ctaLabel: 'Mulai dengan Starter',
  },
  {
    id: 'professional',
    name: 'Professional',
    tagline: 'Paling Banyak Dipilih',
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
      'Hingga 600 Siswa Terdaftar',
      'Manajemen Tentor & Honor Otomatis',
      'Broadcast WhatsApp Otomatis ke Wali',
      'Deteksi Jadwal Bentrok Otomatis',
      'Rekap Laporan Keuangan Bulanan',
      'Akses Multi-Role (Owner, Admin, Tutor)',
      'Dukungan Prioritas WhatsApp (12h Respon)',
    ],
    ctaLabel: 'Mulai dengan Professional',
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    tagline: 'Skala Multi-Cabang',
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
    ctaLabel: 'Hubungi Tim Enterprise',
  },
];

export default function PricingSection() {
  const [period, setPeriod] = useState<BillingPeriod>('12months');

  return (
    <section id="pricing" className="py-24 sm:py-32 bg-[#FAF9F6] border-t border-black/[0.05] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 font-sans">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="font-mono text-xs uppercase tracking-wider font-bold text-brand-600 mb-3 inline-block">
            /03 PAKET HARGA
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-charcoal-900 mb-4">
            Pilihan Paket Sederhana & Transparan
          </h2>
          <p className="text-base sm:text-lg text-charcoal-100 font-normal leading-relaxed">
            Mulai dari satu bimbel hingga puluhan cabang, pilih paket investasi yang paling tepat untuk pertumbuhan bisnis Anda.
          </p>
        </div>

        {/* Pricing Period Toggle with 3, 6, 12 Month Badges in Cressco Theme */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex p-1.5 rounded-2xl bg-white border border-black/[0.08] shadow-soft-sm">
            <button
              onClick={() => setPeriod('3months')}
              className={`px-5 sm:px-7 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                period === '3months'
                  ? 'bg-brand-500 text-white shadow-sm'
                  : 'text-charcoal-100 hover:text-charcoal-900'
              }`}
            >
              3 Bulan
            </button>
            <button
              onClick={() => setPeriod('6months')}
              className={`px-5 sm:px-7 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
                period === '6months'
                  ? 'bg-brand-500 text-white shadow-sm'
                  : 'text-charcoal-100 hover:text-charcoal-900'
              }`}
            >
              <span>6 Bulan</span>
              <span
                className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
                  period === '6months'
                    ? 'bg-white text-brand-600'
                    : 'bg-brand-50 text-brand-600 border border-brand-200'
                }`}
              >
                Hemat 10%
              </span>
            </button>
            <button
              onClick={() => setPeriod('12months')}
              className={`px-5 sm:px-7 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
                period === '12months'
                  ? 'bg-brand-500 text-white shadow-sm'
                  : 'text-charcoal-100 hover:text-charcoal-900'
              }`}
            >
              <span>12 Bulan</span>
              <span
                className={`text-[10px] px-2 py-0.5 rounded-full font-bold shadow-sm ${
                  period === '12months'
                    ? 'bg-white text-brand-600'
                    : 'bg-emerald-500 text-white'
                }`}
              >
                Hemat 20%
              </span>
            </button>
          </div>
        </div>

        {/* 3 Pricing Cards: "Card dalam Card" Architecture in Cressco Terracotta Theme */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan) => {
            const currentPricing = plan.pricing[period];
            return (
              <div
                key={plan.id}
                className={`group relative bg-white rounded-[28px] p-3.5 sm:p-4 border transition-all duration-300 flex flex-col justify-between ${
                  plan.isHighlighted
                    ? 'border-brand-500/30 shadow-xl shadow-brand-500/10 lg:-translate-y-2'
                    : 'border-black/[0.08] shadow-[0_4px_24px_-4px_rgba(0,0,0,0.04)] hover:shadow-soft-lg hover:border-black/[0.14]'
                }`}
              >
                <div>
                  {/* INNER TOP CARD (Card di dalam Card) */}
                  <div
                    className={`rounded-2xl p-6 sm:p-7 flex flex-col justify-between min-h-[310px] sm:min-h-[330px] transition-all duration-300 ${
                      plan.isHighlighted
                        ? 'bg-gradient-to-b from-[#E05334] via-[#CE482A] to-[#B33519] text-white shadow-lg shadow-brand-500/25 border border-white/20'
                        : 'bg-[#FDF6F4] border border-[#F5DBD4] text-charcoal-900'
                    }`}
                  >
                    <div>
                      {/* Plan Header & Tagline */}
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <h3
                          className={`font-bold text-2xl sm:text-3xl tracking-tight ${
                            plan.isHighlighted ? 'text-white' : 'text-charcoal-900'
                          }`}
                        >
                          {plan.name}
                        </h3>
                        {plan.isHighlighted && (
                          <span className="px-2.5 py-0.5 rounded-full bg-white/20 backdrop-blur-sm text-white text-[11px] font-bold tracking-wide border border-white/30 flex items-center gap-1">
                            <Sparkles size={11} /> Populer
                          </span>
                        )}
                      </div>

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
                          className={`font-bold text-3xl sm:text-4xl tracking-tight ${
                            plan.isHighlighted ? 'text-white' : 'text-charcoal-900'
                          }`}
                        >
                          {currentPricing.monthlyRate}
                        </span>
                        {currentPricing.periodLabel && (
                          <span
                            className={`text-xs sm:text-sm font-normal ${
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
                        className={`w-full py-3.5 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 flex items-center justify-center gap-2 shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 cursor-pointer ${
                          plan.isHighlighted
                            ? 'bg-white text-brand-700 hover:bg-surface-50 shadow-md'
                            : 'bg-charcoal-900 hover:bg-black text-white'
                        }`}
                      >
                        <Zap size={14} className={plan.isHighlighted ? 'fill-brand-600 text-brand-600' : 'fill-white text-white'} />
                        <span>{plan.ctaLabel}</span>
                      </a>
                    </div>
                  </div>

                  {/* BOTTOM FEATURE LIST (Checklist with Cressco warm circular badges) */}
                  <div className="px-3 pt-6 pb-4 space-y-3.5">
                    {plan.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-3 text-xs sm:text-[13px] text-charcoal-200">
                        <div className="w-5 h-5 rounded-full bg-brand-50 text-brand-600 border border-brand-200/70 flex items-center justify-center shrink-0">
                          <Check size={12} strokeWidth={3} />
                        </div>
                        <span className="font-medium text-charcoal-900">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer note */}
                <div className="px-3 pt-2 text-[11px] text-charcoal-50 border-t border-black/[0.04]">
                  Mendukung aktivasi instan & isolasi basis data.
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
