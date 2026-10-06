'use client';

import React from 'react';
import { 
  ShieldCheck, 
  KeyRound, 
  Database, 
  Network, 
  Lock, 
  Check, 
  Server, 
  Users,
  Building
} from 'lucide-react';

const trustPoints = [
  {
    title: 'Role-based access',
    desc: 'Setiap peran (Owner, Admin, Tutor) hanya melihat dan mengedit data sesuai hak wewenang.',
    icon: Users,
  },
  {
    title: 'Secure authentication',
    desc: 'Proteksi login aman dengan enkripsi standar industri dan pemantauan sesi aktif.',
    icon: KeyRound,
  },
  {
    title: 'Centralized data',
    desc: 'Satu sumber data tunggal yang tersinkronisasi otomatis tanpa risiko duplikasi atau data hilang.',
    icon: Database,
  },
  {
    title: 'Branch-level access control',
    desc: 'Admin cabang terisolasi hanya pada cabangnya, sementara Owner memegang kendali penuh seluruh cabang.',
    icon: Network,
  },
];

export default function SecuritySection() {
  return (
    <section className="py-24 sm:py-32 bg-surface-50/70 border-t border-black/[0.05] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Copy and 4 Trust Points */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-50 border border-brand-200 text-brand-700 text-xs font-semibold uppercase tracking-wider mb-4">
              Security & Access Control
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-charcoal-900 mb-4">
              Your Bimbel Data. Protected.
            </h2>
            
            <p className="text-base sm:text-lg text-charcoal-100 font-normal leading-relaxed mb-8">
              Data operasional bimbel disimpan dalam sistem terpusat dengan akses berdasarkan role.
            </p>

            {/* 4 Trust Points List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {trustPoints.map((point, idx) => {
                const Icon = point.icon;
                return (
                  <div key={idx} className="p-4 rounded-xl bg-white border border-black/[0.06] shadow-soft-sm">
                    <div className="w-8 h-8 rounded-lg bg-brand-50 border border-brand-100 flex items-center justify-center text-brand-600 mb-2.5">
                      <Icon size={16} />
                    </div>
                    <h3 className="text-sm font-bold text-charcoal-900 mb-1">
                      {point.title}
                    </h3>
                    <p className="text-xs text-charcoal-100 leading-relaxed">
                      {point.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Security Architecture Visual (Shield + DB + Users + Branch Nodes) */}
          <div className="lg:col-span-6">
            <div className="relative p-6 sm:p-8 rounded-3xl bg-white border border-black/[0.08] shadow-soft-lg overflow-hidden">
              
              {/* Subtle background mesh/grid */}
              <div className="absolute inset-0 bg-grid-pattern opacity-40" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-brand-500/[0.06] rounded-full blur-2xl pointer-events-none" />

              <div className="relative z-10 flex flex-col items-center justify-center py-6">
                
                {/* Central Security Shield & Database Node */}
                <div className="relative mb-8">
                  <div className="w-24 h-24 rounded-2xl bg-brand-500 text-white flex flex-col items-center justify-center shadow-brand-glow border-2 border-brand-400">
                    <ShieldCheck size={36} className="mb-0.5" />
                    <span className="text-[11px] font-bold tracking-wider">CRESSCO CORE</span>
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-lg bg-charcoal-900 text-white flex items-center justify-center border border-white shadow-sm">
                    <Database size={15} />
                  </div>
                </div>

                {/* Satellite Nodes in Orbit / Grid */}
                <div className="grid grid-cols-3 gap-3 sm:gap-4 w-full">
                  
                  {/* Node 1: Role-Based Users */}
                  <div className="p-3 bg-surface-50 rounded-xl border border-black/[0.06] text-center">
                    <div className="w-7 h-7 mx-auto mb-1.5 rounded-lg bg-white border border-black/[0.06] flex items-center justify-center text-brand-600">
                      <Users size={14} />
                    </div>
                    <div className="text-xs font-bold text-charcoal-900">User Roles</div>
                    <div className="text-[10px] text-charcoal-50 font-medium">Owner • Admin • Tutor</div>
                  </div>

                  {/* Node 2: Branch Isolation */}
                  <div className="p-3 bg-surface-50 rounded-xl border border-black/[0.06] text-center">
                    <div className="w-7 h-7 mx-auto mb-1.5 rounded-lg bg-white border border-black/[0.06] flex items-center justify-center text-brand-600">
                      <Building size={14} />
                    </div>
                    <div className="text-xs font-bold text-charcoal-900">Branch Nodes</div>
                    <div className="text-[10px] text-charcoal-50 font-medium">Multi-Unit Isolation</div>
                  </div>

                  {/* Node 3: Encrypted Cloud Data */}
                  <div className="p-3 bg-surface-50 rounded-xl border border-black/[0.06] text-center">
                    <div className="w-7 h-7 mx-auto mb-1.5 rounded-lg bg-white border border-black/[0.06] flex items-center justify-center text-brand-600">
                      <Lock size={14} />
                    </div>
                    <div className="text-xs font-bold text-charcoal-900">Data Vault</div>
                    <div className="text-[10px] text-charcoal-50 font-medium">AES-256 Cloud Backup</div>
                  </div>

                </div>

                {/* Status Bar */}
                <div className="mt-6 w-full py-2 px-3 rounded-lg bg-surface-100 border border-black/[0.05] flex items-center justify-between text-xs text-charcoal-100">
                  <span className="flex items-center gap-1.5 font-medium">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    Sistem Keamanan & Akses Aktif
                  </span>
                  <span className="font-mono text-[11px] text-charcoal-50">99.9% Uptime</span>
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
