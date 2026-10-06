'use client';

import React, { useState } from 'react';
import { X, CheckCircle2, Send, Sparkles, Building2, User, Mail, Phone } from 'lucide-react';

interface ModalDemoProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPlan?: string;
}

export default function ModalDemo({ isOpen, onClose, selectedPlan }: ModalDemoProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    bimbelName: '',
    phone: '',
    email: '',
    role: 'Owner',
    branches: '1',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-lg bg-white rounded-2xl shadow-soft-xl border border-black/[0.08] overflow-hidden animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-black/[0.06] bg-surface-50">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-brand-500" />
            <h3 className="text-base font-bold text-charcoal-900">
              {selectedPlan ? `Mulai Paket ${selectedPlan.toUpperCase()}` : 'Jadwalkan Live Demo Cressco'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-charcoal-50 hover:text-charcoal-900 hover:bg-black/5 transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          {submitted ? (
            <div className="text-center py-6">
              <div className="w-14 h-14 rounded-full bg-brand-50 text-brand-500 border border-brand-200 flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 size={32} />
              </div>
              <h4 className="text-xl font-bold text-charcoal-900 mb-2">
                Terima Kasih, {formData.name || 'Bapak/Ibu'}!
              </h4>
              <p className="text-sm text-charcoal-100 leading-relaxed max-w-sm mx-auto mb-6">
                Tim spesialis Cressco akan segera menghubungi Anda melalui WhatsApp ({formData.phone || 'nomor terdaftar'}) untuk mempersiapkan demo dan akses platform bimbel Anda.
              </p>
              <button
                onClick={handleReset}
                className="px-6 py-2.5 rounded-xl bg-brand-500 hover:bg-brand-600 text-white font-semibold text-sm shadow-sm"
              >
                Tutup
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <p className="text-xs text-charcoal-100 mb-2">
                Isi formulir singkat di bawah ini. Tim kami akan menyiapkan akses demonstrasi yang disesuaikan dengan struktur bimbel Anda.
              </p>

              <div>
                <label className="block text-xs font-semibold text-charcoal-900 mb-1">
                  Nama Lengkap
                </label>
                <div className="relative">
                  <User size={16} className="absolute left-3 top-3 text-charcoal-50" />
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Contoh: Budi Pratama"
                    className="w-full pl-9 pr-3 py-2.5 text-sm bg-surface-50 border border-black/[0.08] rounded-xl focus:outline-none focus:border-brand-500 focus:bg-white transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-charcoal-900 mb-1">
                    Nama Bimbel
                  </label>
                  <div className="relative">
                    <Building2 size={16} className="absolute left-3 top-3 text-charcoal-50" />
                    <input
                      type="text"
                      required
                      value={formData.bimbelName}
                      onChange={(e) => setFormData({ ...formData, bimbelName: e.target.value })}
                      placeholder="Nama Bimbel / Lembaga"
                      className="w-full pl-9 pr-3 py-2.5 text-sm bg-surface-50 border border-black/[0.08] rounded-xl focus:outline-none focus:border-brand-500 focus:bg-white transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-charcoal-900 mb-1">
                    Nomor WhatsApp
                  </label>
                  <div className="relative">
                    <Phone size={16} className="absolute left-3 top-3 text-charcoal-50" />
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="0812-xxxx-xxxx"
                      className="w-full pl-9 pr-3 py-2.5 text-sm bg-surface-50 border border-black/[0.08] rounded-xl focus:outline-none focus:border-brand-500 focus:bg-white transition-colors"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-charcoal-900 mb-1">
                    Peran di Bimbel
                  </label>
                  <select
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    className="w-full px-3 py-2.5 text-sm bg-surface-50 border border-black/[0.08] rounded-xl focus:outline-none focus:border-brand-500 focus:bg-white transition-colors"
                  >
                    <option value="Owner">Owner / Direktur Bimbel</option>
                    <option value="Admin">Admin / Manajer Operasional</option>
                    <option value="Tutor">Koordinator Tentor</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-charcoal-900 mb-1">
                    Jumlah Cabang
                  </label>
                  <select
                    value={formData.branches}
                    onChange={(e) => setFormData({ ...formData, branches: e.target.value })}
                    className="w-full px-3 py-2.5 text-sm bg-surface-50 border border-black/[0.08] rounded-xl focus:outline-none focus:border-brand-500 focus:bg-white transition-colors"
                  >
                    <option value="1">1 Cabang</option>
                    <option value="2-3">2 - 3 Cabang</option>
                    <option value="4+">Lebih dari 3 Cabang</option>
                  </select>
                </div>
              </div>

              <div className="pt-3">
                <button
                  type="submit"
                  className="w-full py-3 px-4 rounded-xl bg-brand-500 hover:bg-brand-600 text-white font-semibold text-sm shadow-soft hover:shadow-brand-glow transition-all flex items-center justify-center gap-2"
                >
                  <Send size={15} />
                  <span>Kirim & Dapatkan Akses Demo</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
