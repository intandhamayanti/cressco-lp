'use client';

import React from 'react';
import Image from 'next/image';
import { 
  CalendarDays, 
  UserCheck, 
  CreditCard, 
  FileText, 
  MessageSquare,
} from 'lucide-react';

const workflowNodes = [
  {
    name: 'Schedule',
    subtitle: 'Plotting Jadwal & Kelas',
    icon: CalendarDays,
    desc: 'Atur sesi kelas, mata pelajaran, dan penugasan tentor tanpa bentrok jadwal.',
  },
  {
    name: 'Attendance',
    subtitle: 'Presensi Siswa & Tentor',
    icon: UserCheck,
    desc: 'Rekap kehadiran harian otomatis terhubung ke laporan dan perhitungan honor.',
  },
  {
    name: 'Payment',
    subtitle: 'Tagihan & Verifikasi',
    icon: CreditCard,
    desc: 'Pencatatan uang les, status lunas/tertunda, dan kwitansi digital rapi.',
  },
  {
    name: 'Reports',
    subtitle: 'Laporan Konsolidasi',
    icon: FileText,
    desc: 'Rekapitulasi keuangan, akademik, dan performa siswa siap cetak & ekspor.',
  },
  {
    name: 'WhatsApp',
    subtitle: 'Komunikasi Operasional',
    icon: MessageSquare,
    desc: 'Kirim notifikasi tagihan dan update kelas kepada wali siswa secara teratur.',
  },
];

export default function WorkflowSection() {
  return (
    <section id="workflow" className="py-24 sm:py-32 bg-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-50 border border-brand-200 text-brand-700 text-xs font-semibold uppercase tracking-wider mb-4">
            Workflow Organization
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-charcoal-900 mb-4">
            Works With the Way Your Bimbel Works
          </h2>
          <p className="text-base sm:text-lg text-charcoal-100 font-normal leading-relaxed">
            Cressco membantu merapikan workflow yang sudah Anda gunakan sehari-hari.
          </p>
        </div>

        {/* Central Hub & Surrounding Workflow Nodes */}
        <div className="relative max-w-4xl mx-auto p-6 sm:p-12 rounded-3xl bg-surface-50 border border-black/[0.06] shadow-soft-sm">
          
          {/* Subtle concentric orbital rings */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40">
            <div className="w-[300px] h-[300px] sm:w-[420px] sm:h-[420px] rounded-full border border-dashed border-brand-300/40" />
            <div className="w-[480px] h-[480px] sm:w-[620px] sm:h-[620px] rounded-full border border-black/[0.04]" />
          </div>

          {/* Central Cressco Core Badge */}
          <div className="relative z-10 flex flex-col items-center justify-center mb-12 sm:mb-16">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-white p-3 shadow-brand-glow border-2 border-brand-200 flex flex-col items-center justify-center">
              <Image
                src="/images/cressco-logo.png"
                alt="Cressco Core"
                width={48}
                height={48}
                className="object-contain mb-1"
              />
              <span className="text-[10px] font-bold tracking-wider uppercase text-brand-700">Cressco</span>
            </div>
            <span className="text-xs font-semibold text-charcoal-900 mt-2.5 bg-white px-3 py-1 rounded-full border border-black/[0.06] shadow-soft-sm">
              Central Operating Hub
            </span>
          </div>

          {/* Surrounding Workflow Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 relative z-10">
            {workflowNodes.map((node, idx) => {
              const Icon = node.icon;
              return (
                <div
                  key={idx}
                  className={`card-hover-effect p-4 sm:p-5 rounded-xl bg-white border border-black/[0.06] shadow-soft-sm flex flex-col justify-between ${
                    idx === 4 ? 'sm:col-span-2 lg:col-span-1' : ''
                  }`}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-lg bg-brand-50 border border-brand-100 flex items-center justify-center text-brand-600 shrink-0">
                      <Icon size={18} />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-charcoal-900">
                        {node.name}
                      </h3>
                      <p className="text-[11px] text-charcoal-50 font-medium">
                        {node.subtitle}
                      </p>
                    </div>
                  </div>
                  <p className="text-xs text-charcoal-100 leading-relaxed">
                    {node.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Clarifying banner regarding workflow alignment */}
          <div className="mt-8 text-center text-xs text-charcoal-50">
            Mengatur seluruh alur administrasi bimbel Anda ke dalam satu standar operasional yang teratur.
          </div>

        </div>

      </div>
    </section>
  );
}
