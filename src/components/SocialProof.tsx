'use client';

import React from 'react';
import { UserCheck, ShieldCheck, GraduationCap, Building2, ChevronRight } from 'lucide-react';

const roles = [
  {
    role: 'Owner',
    title: 'Executive Oversight',
    desc: 'Konsolidasi omzet & cabang',
    icon: ShieldCheck,
    tag: 'Owner Portal',
  },
  {
    role: 'Admin',
    title: 'Daily Operations',
    desc: 'Tagihan, kelas & jadwal',
    icon: UserCheck,
    tag: 'Admin Console',
  },
  {
    role: 'Tutor',
    title: 'Classroom & Attendance',
    desc: 'Presensi & honor otomatis',
    icon: GraduationCap,
    tag: 'Tutor Workspace',
  },
  {
    role: 'Branch',
    title: 'Multi-Unit Network',
    desc: 'Multi-cabang terintegrasi',
    icon: Building2,
    tag: 'Multi-Branch Hub',
  },
];

export default function SocialProof() {
  return (
    <section className="py-12 border-y border-black/[0.05] bg-white/70 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
          {/* Label / Headline */}
          <div className="text-center md:text-left shrink-0">
            <span className="text-xs font-semibold tracking-wider text-brand-600 uppercase">
              Ecosystem
            </span>
            <h3 className="text-lg sm:text-xl font-bold text-charcoal-900 mt-0.5">
              Built for bimbels ready to grow.
            </h3>
          </div>

          {/* Role indicators */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full md:w-auto">
            {roles.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl bg-surface-50 border border-black/[0.06] hover:border-brand-200 transition-colors"
                >
                  <div className="w-8 h-8 rounded-lg bg-brand-50 border border-brand-100 flex items-center justify-center shrink-0 text-brand-600">
                    <Icon size={16} />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs font-semibold text-charcoal-900 leading-tight">
                      {item.role}
                    </div>
                    <div className="text-[11px] text-charcoal-100 font-medium truncate">
                      {item.tag}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
