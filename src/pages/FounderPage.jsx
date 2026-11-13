import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import FounderSection from '../components/FounderSection';
import { ArrowLeft, Sparkles, BookOpen } from 'lucide-react';

export default function FounderPage() {
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

      {/* Main Founder Section in Standalone mode */}
      <FounderSection isStandalonePage={true} />

      {/* Pedagogical Manifesto */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl p-8 sm:p-12 border border-blue-100 max-w-4xl mx-auto text-center space-y-4">
        <Sparkles className="w-8 h-8 text-brand-blue-600 mx-auto" />
        <h3 className="text-2xl font-extrabold text-slate-900 font-display">
          "Education becomes more powerful when we learn, grow, and succeed together."
        </h3>
        <p className="text-sm text-slate-600 max-w-2xl mx-auto leading-relaxed">
          At Calmbytes Academy – ASAT, we are committed to building an educational space where every student from Class 6 to 12 feels empowered to speak their mind, share what they understand, and receive the guidance they deserve.
        </p>
        <div className="pt-4">
          <Link
            to="/enquiry"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-bold text-white bg-brand-blue-600 hover:bg-brand-blue-700 shadow-md transition-colors"
          >
            <span>Connect with our Academic Admissions</span>
          </Link>
        </div>
      </div>

    </div>
  );
}

