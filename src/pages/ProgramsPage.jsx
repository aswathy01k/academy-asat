import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ProgramCard from '../components/ProgramCard';
import { programsData } from '../data/programsData';
import { ArrowLeft, BookOpen, Compass, CheckCircle2, ShieldCheck, Filter } from 'lucide-react';

export default function ProgramsPage({ onOpenEnquiryWithProgram }) {
  const [filterClass, setFilterClass] = useState('all');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredPrograms = filterClass === 'all' 
    ? programsData 
    : programsData.filter(p => p.id === filterClass);

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
        <span className="px-3.5 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-widest bg-blue-50 text-brand-blue-700 border border-blue-200">
          Academic Structure &bull; Classes 6 to 12
        </span>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-display">
          Academic Programs at Calmbytes
        </h1>
        <p className="text-base text-slate-600">
          Our three-tier educational progression builds strong cognitive models, problem-solving prowess, and peer communication skills across secondary and senior secondary school.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center justify-center gap-2">
        <div className="bg-slate-100 p-1 rounded-2xl flex flex-wrap items-center gap-1 border border-slate-200">
          <button
            onClick={() => setFilterClass('all')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              filterClass === 'all' 
                ? 'bg-white text-slate-900 shadow-sm' 
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            All Programs (Classes 6–12)
          </button>
          <button
            onClick={() => setFilterClass('foundation')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              filterClass === 'foundation' 
                ? 'bg-white text-blue-600 shadow-sm' 
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Foundation (Classes 6–8)
          </button>
          <button
            onClick={() => setFilterClass('academic-development')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              filterClass === 'academic-development' 
                ? 'bg-white text-indigo-600 shadow-sm' 
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Academic Dev (Classes 9–10)
          </button>
          <button
            onClick={() => setFilterClass('advanced-learning')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              filterClass === 'advanced-learning' 
                ? 'bg-white text-violet-600 shadow-sm' 
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Advanced Learning (Classes 11–12)
          </button>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {filteredPrograms.map((prog) => (
          <ProgramCard 
            key={prog.id}
            program={prog}
            onSelectProgram={(p) => {
              if (onOpenEnquiryWithProgram) onOpenEnquiryWithProgram(p.title, p.classes);
              else window.location.href = '/enquiry';
            }}
          />
        ))}
      </div>

      {/* Board Agnostic Note */}
      <div className="bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-200/80 max-w-3xl mx-auto space-y-3">
        <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-brand-blue-600" />
          <span>Universal Board Agnostic Philosophy</span>
        </h4>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          Calmbytes Academy does not lock students into one narrow textbook pattern. Because we teach from first principles and fundamental concept blueprints, our students excel equally well across <strong>CBSE, ICSE, Cambridge (IGCSE), and State Board</strong> evaluations.
        </p>
      </div>

    </div>
  );
}

