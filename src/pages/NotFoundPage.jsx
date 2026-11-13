import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, ArrowLeft } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 pt-28 pb-16">
      <div className="w-16 h-16 rounded-3xl bg-blue-50 border border-blue-200 flex items-center justify-center text-brand-blue-600 mb-4 shadow-sm">
        <Brain className="w-8 h-8" />
      </div>
      <h1 className="text-4xl font-extrabold text-slate-900 font-display">404</h1>
      <h2 className="text-xl font-bold text-slate-800 mt-2">Page Not Found</h2>
      <p className="text-sm text-slate-500 mt-1 max-w-sm">
        The educational page you are looking for does not exist or has been relocated.
      </p>
      <Link
        to="/"
        className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-brand-blue-600 hover:bg-brand-blue-700 transition-colors shadow-sm"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Return to Calmbytes Academy Home</span>
      </Link>
    </div>
  );
}

