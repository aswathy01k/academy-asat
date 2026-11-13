import React, { useState } from 'react';
import { 
  Compass, 
  Cpu, 
  GraduationCap, 
  CheckCircle2, 
  ArrowRight, 
  BookOpen, 
  Sparkles, 
  ChevronDown, 
  ChevronUp,
  Layers,
  Award
} from 'lucide-react';

export default function ProgramCard({ program, onSelectProgram }) {
  const [showDetails, setShowDetails] = useState(false);

  const getProgramIcon = (name) => {
    switch (name) {
      case 'Compass':
        return <Compass className="w-6 h-6 text-blue-500" />;
      case 'Cpu':
        return <Cpu className="w-6 h-6 text-indigo-500" />;
      case 'GraduationCap':
        return <GraduationCap className="w-6 h-6 text-violet-500" />;
      default:
        return <BookOpen className="w-6 h-6 text-blue-500" />;
    }
  };

  const getHeaderGradient = (id) => {
    switch (id) {
      case 'foundation':
        return 'from-blue-600 via-sky-500 to-indigo-600';
      case 'academic-development':
        return 'from-indigo-600 via-blue-600 to-violet-600';
      case 'advanced-learning':
        return 'from-violet-600 via-purple-600 to-indigo-700';
      default:
        return 'from-blue-600 to-indigo-600';
    }
  };

  return (
    <div className={`relative bg-white rounded-3xl border ${program.borderClass} shadow-card hover:shadow-hover transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:-translate-y-1`}>
      
      {/* Top Banner with visual theme */}
      <div className={`p-6 sm:p-7 bg-gradient-to-br ${getHeaderGradient(program.id)} text-white relative overflow-hidden`}>
        
        {/* Subtle decorative circles & grid in banner */}
        <div className="absolute -right-10 -bottom-10 w-40 h-40 rounded-full bg-white/10 blur-xl pointer-events-none" />
        <div className="absolute top-2 right-4 text-[9px] font-mono tracking-widest uppercase bg-white/15 px-2.5 py-1 rounded-full backdrop-blur-sm border border-white/20">
          {program.visualTheme.badge}
        </div>

        <div className="relative z-10">
          <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center mb-4 shadow-sm">
            {getProgramIcon(program.iconName)}
          </div>

          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-extrabold uppercase tracking-widest text-blue-200">
              {program.classes}
            </span>
            {program.isPopular && (
              <span className="bg-amber-400 text-slate-900 text-[10px] font-extrabold px-2 py-0.5 rounded-full uppercase tracking-wider shadow-sm">
                Most Popular
              </span>
            )}
          </div>

          <h3 className="text-2xl font-extrabold font-display tracking-tight text-white">
            {program.title}
          </h3>
          <p className="text-xs text-blue-100 mt-1 font-medium">
            {program.subtitle}
          </p>
        </div>
      </div>

      {/* Main Card Body */}
      <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-6">
        
        {/* Tagline */}
        <div className="border-l-2 border-brand-blue-500 pl-3">
          <p className="text-xs sm:text-sm text-slate-600 italic">
            "{program.tagline}"
          </p>
        </div>

        {/* Visual Theme Tag Chips */}
        <div>
          <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
            Visual Learning Themes:
          </p>
          <div className="flex flex-wrap gap-1.5">
            {program.visualTheme.items.map((item, idx) => (
              <span 
                key={idx} 
                className="text-[11px] font-medium bg-slate-100 text-slate-700 px-2.5 py-1 rounded-lg border border-slate-200/80"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Core Focus Points */}
        <div>
          <p className="text-[11px] font-bold uppercase tracking-wider text-slate-900 mb-3 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-brand-blue-600" />
            <span>Key Focus & Methodology:</span>
          </p>
          <ul className="space-y-2.5">
            {program.focusPoints.map((point, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-brand-blue-500 flex-shrink-0 mt-0.5" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Expandable Subjects & Curriculum Details */}
        <div className="border-t border-slate-100 pt-4">
          <button
            onClick={() => setShowDetails(!showDetails)}
            className="w-full flex items-center justify-between text-xs font-bold text-brand-blue-600 hover:text-brand-blue-700 transition-colors py-1"
          >
            <span className="flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5" />
              <span>{showDetails ? 'Hide Subject Blueprint' : 'View Sample Subject Blueprint & Outcomes'}</span>
            </span>
            {showDetails ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>

          {showDetails && (
            <div className="mt-4 space-y-4 text-xs bg-slate-50 p-4 rounded-2xl border border-slate-200/70 transition-all">
              
              <div>
                <p className="font-bold text-slate-800 uppercase tracking-wider text-[10px] mb-2">
                  Sample Subject Modules:
                </p>
                <div className="space-y-2">
                  {program.sampleSubjects.map((sub, i) => (
                    <div key={i} className="bg-white p-2.5 rounded-xl border border-slate-200/60 shadow-sm">
                      <div className="font-semibold text-slate-900">{sub.name}</div>
                      <div className="text-[11px] text-slate-500 mt-0.5">{sub.desc}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <p className="font-bold text-slate-800 uppercase tracking-wider text-[10px] mb-1.5">
                  Expected Learning Outcomes:
                </p>
                <ul className="space-y-1 text-slate-600">
                  {program.outcomes.map((out, i) => (
                    <li key={i} className="flex items-center gap-1.5 text-[11px]">
                      <Award className="w-3 h-3 text-amber-500 flex-shrink-0" />
                      <span>{out}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="text-[10px] text-slate-400 italic pt-2 border-t border-slate-200">
                {program.curriculumNote}
              </div>

            </div>
          )}
        </div>

        {/* Action Button */}
        <div className="pt-2">
          <button
            onClick={() => onSelectProgram(program)}
            className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-bold text-white bg-slate-900 hover:bg-brand-blue-600 shadow-sm hover:shadow-glow transition-all duration-200 group/btn"
          >
            <span>Enquire for {program.title}</span>
            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>

    </div>
  );
}

