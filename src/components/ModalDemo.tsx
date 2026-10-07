'use client';

import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, Lock, Mail, Building2, User, Phone, ArrowRight, ArrowUpRight } from 'lucide-react';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialMode?: 'login' | 'register';
  selectedPlan?: string;
}

export default function ModalDemo({ isOpen, onClose, initialMode = 'register', selectedPlan }: AuthModalProps) {
  const [mode, setMode] = useState<'login' | 'register'>(initialMode);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    bimbelName: '',
    email: '',
    phone: '',
    password: '',
  });

  useEffect(() => {
    if (initialMode) {
      setMode(initialMode);
    }
  }, [initialMode, isOpen]);

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
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal-900/60 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-md bg-white rounded-2xl shadow-soft-xl border border-black/[0.08] overflow-hidden animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-black/[0.06] bg-surface-50">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-brand-500" />
            <h3 className="text-base font-bold text-charcoal-900">
              {mode === 'login' ? 'Masuk ke Akun Cressco' : selectedPlan ? `Daftar Paket ${selectedPlan.toUpperCase()}` : 'Mulai Coba Gratis Cressco'}
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
                {mode === 'login' ? 'Berhasil Masuk!' : 'Pendaftaran Berhasil!'}
              </h4>
              <p className="text-sm text-charcoal-100 leading-relaxed max-w-sm mx-auto mb-6">
                {mode === 'login' 
                  ? 'Mengarahkan Anda ke console dashboard bimbel...' 
                  : `Akun platform bimbel Anda untuk ${formData.bimbelName || 'lembaga Anda'} sedang diinisialisasi.`}
              </p>
              <button
                onClick={handleReset}
                className="px-6 py-2.5 rounded-full bg-brand-500 hover:bg-brand-600 text-white font-semibold text-sm shadow-sm transition-all"
              >
                Tutup
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Tab Switcher between Login & Register */}
              <div className="flex p-1 bg-surface-100 rounded-xl mb-4 border border-black/[0.05]">
                <button
                  type="button"
                  onClick={() => setMode('register')}
                  className={`flex-1 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                    mode === 'register' ? 'bg-white text-charcoal-900 shadow-soft-sm' : 'text-charcoal-100'
                  }`}
                >
                  Daftar Akun Baru
                </button>
                <button
                  type="button"
                  onClick={() => setMode('login')}
                  className={`flex-1 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                    mode === 'login' ? 'bg-white text-charcoal-900 shadow-soft-sm' : 'text-charcoal-100'
                  }`}
                >
                  Login
                </button>
              </div>

              {mode === 'register' && (
                <>
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

                  <div>
                    <label className="block text-xs font-semibold text-charcoal-900 mb-1">
                      Nama Bimbel / Lembaga
                    </label>
                    <div className="relative">
                      <Building2 size={16} className="absolute left-3 top-3 text-charcoal-50" />
                      <input
                        type="text"
                        required
                        value={formData.bimbelName}
                        onChange={(e) => setFormData({ ...formData, bimbelName: e.target.value })}
                        placeholder="Contoh: Prime Academy"
                        className="w-full pl-9 pr-3 py-2.5 text-sm bg-surface-50 border border-black/[0.08] rounded-xl focus:outline-none focus:border-brand-500 focus:bg-white transition-colors"
                      />
                    </div>
                  </div>
                </>
              )}

              <div>
                <label className="block text-xs font-semibold text-charcoal-900 mb-1">
                  Email Akun
                </label>
                <div className="relative">
                  <Mail size={16} className="absolute left-3 top-3 text-charcoal-50" />
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="nama@bimbel.id"
                    className="w-full pl-9 pr-3 py-2.5 text-sm bg-surface-50 border border-black/[0.08] rounded-xl focus:outline-none focus:border-brand-500 focus:bg-white transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-charcoal-900 mb-1">
                  Kata Sandi
                </label>
                <div className="relative">
                  <Lock size={16} className="absolute left-3 top-3 text-charcoal-50" />
                  <input
                    type="password"
                    required
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    placeholder="••••••••"
                    className="w-full pl-9 pr-3 py-2.5 text-sm bg-surface-50 border border-black/[0.08] rounded-xl focus:outline-none focus:border-brand-500 focus:bg-white transition-colors"
                  />
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 px-4 rounded-full bg-brand-500 hover:bg-brand-600 text-white font-semibold text-sm shadow-soft hover:shadow-brand-glow transition-all flex items-center justify-center gap-2"
                >
                  <span>{mode === 'login' ? 'Masuk ke Dashboard' : 'Mulai Coba Gratis'}</span>
                  {mode !== 'login' && <ArrowUpRight size={16} />}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
