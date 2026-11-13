import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import CommunityShowcase from '../components/CommunityShowcase';
import { ArrowLeft, Users, Sparkles, MessageSquareQuote } from 'lucide-react';

export default function CommunityPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      
      {/* Back button */}
      <div>
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500 hover:text-brand-blue-600 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Academy Overview</span>
        </Link>
      </div>

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="px-3.5 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-widest bg-emerald-50 text-emerald-800 border border-emerald-200">
          The Knowledge Commons
        </span>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-display">
          Your Knowledge Has Value. Share It. Grow With It.
        </h1>
        <p className="text-base text-slate-600">
          Education becomes permanent when students communicate, synthesize, and teach. Explore how Calmbytes Academy transforms students into active knowledge creators.
        </p>
      </div>

      {/* Main Showcase Component */}
      <CommunityShowcase />

      {/* Community FAQ / Philosophy note */}
      <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 border border-slate-800 text-center max-w-3xl mx-auto space-y-4">
        <MessageSquareQuote className="w-8 h-8 text-cyan-400 mx-auto" />
        <h3 className="text-2xl font-bold font-display">
          "When you explain a thought to someone else, you understand it twice."
        </h3>
        <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
          The Calmbytes LTSER framework ensures every student receives the platform, encouragement, and respectful audience needed to become a confident voice in academia.
        </p>
        <div className="pt-2">
          <Link
            to="/enquiry"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-brand-blue-600 to-brand-violet-600 hover:shadow-glow shadow-md transition-all"
          >
            <span>Join Our Knowledge Community</span>
          </Link>
        </div>
      </div>

    </div>
  );
}

