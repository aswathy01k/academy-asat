import React from 'react';
import { X } from 'lucide-react';
import EnquiryForm from './EnquiryForm';

export default function EnquiryModal({ isOpen, onClose, preselectedClass, preselectedSubject }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 sm:p-6 bg-slate-950/70 backdrop-blur-sm animate-fadeIn">
      <div 
        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="p-6 bg-gradient-to-r from-brand-navy-950 to-slate-900 text-white flex items-center justify-between">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-400">
              Calmbytes Academy – ASAT
            </span>
            <h3 className="text-xl font-bold font-display text-white mt-0.5">
              Student Admission & Academic Enquiry
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Form Body */}
        <div className="p-6 sm:p-8 max-h-[80vh] overflow-y-auto">
          <EnquiryForm 
            preselectedClass={preselectedClass}
            preselectedSubject={preselectedSubject}
            onSuccess={() => {}}
          />
        </div>
      </div>
    </div>
  );
}

