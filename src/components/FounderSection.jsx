import React from 'react';
import { founderData } from '../data/founderData';
import { 
  Sparkles, 
  Quote, 
  GraduationCap, 
  Lightbulb, 
  Compass, 
  Target, 
  HeartHandshake,
  CheckCircle2,
  Brain
} from 'lucide-react';

export default function FounderSection({ isStandalonePage = false }) {
  return (
    <div className="w-full">
      
      {/* Top Header if standalone */}
      {isStandalonePage && (
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="px-3.5 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-widest bg-blue-50 text-brand-blue-700 border border-blue-200">
            Founder &bull; Leadership
          </span>
          <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-display">
            {founderData.heading}
          </h1>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            The pedagogical philosophy and human story behind Calmbytes Academy – ASAT.
          </p>
        </div>
      )}

      {/* Main Founder Card & Message Grid */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-card overflow-hidden">
        
        <div className="grid grid-cols-1 lg:grid-cols-12">
          
          {/* Left Column: Portrait & Credentials */}
          <div className="lg:col-span-5 bg-gradient-to-br from-brand-navy-950 via-slate-900 to-brand-navy-900 p-8 sm:p-10 text-white flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-slate-800 relative">
            
            {/* Ambient glow in background */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-blue-600/10 rounded-full blur-3xl pointer-events-none" />

            <div>
              {/* Premium Portrait Frame */}
              <div className="relative mx-auto w-48 h-48 sm:w-56 sm:h-56 rounded-3xl p-1 bg-gradient-to-tr from-brand-blue-500 via-brand-violet-500 to-cyan-400 shadow-glow mb-6">
                <div className="w-full h-full rounded-[22px] bg-slate-950 flex flex-col items-center justify-center overflow-hidden border border-slate-800 relative">
                  
                  {founderData.photoUrl ? (
                    <img 
                      src={founderData.photoUrl} 
                      alt={founderData.name} 
                      className="w-full h-full object-cover" 
                    />
                  ) : (
                    <div className="flex flex-col items-center justify-center p-4 text-center">
                      <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-blue-600 to-violet-600 flex items-center justify-center mb-3 shadow-md">
                        <Brain className="w-10 h-10 text-white" />
                      </div>
                      <span className="text-xs font-semibold text-slate-400">
                        Calmbytes Founder
                      </span>
                      <span className="text-[10px] text-slate-500 mt-1 italic">
                        [Editable Portrait Placeholder]
                      </span>
                    </div>
                  )}

                  {/* Active Status Badge */}
                  <div className="absolute bottom-2 inset-x-2 bg-slate-900/90 backdrop-blur-md py-1 px-2 rounded-lg border border-slate-700/80 flex items-center justify-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-300">
                      Academic Director
                    </span>
                  </div>

                </div>
              </div>

              {/* Founder Information & Editable Tags */}
              <div className="text-center space-y-2">
                <h3 className="text-xl sm:text-2xl font-extrabold text-white font-display">
                  {founderData.name}
                </h3>
                <p className="text-xs sm:text-sm text-cyan-400 font-medium">
                  {founderData.roleTitle}
                </p>
                
                <div className="inline-block mt-1 px-3 py-1 rounded-full bg-slate-800 text-[11px] text-slate-300 border border-slate-700">
                  <span className="font-semibold">{founderData.credentials}</span>
                </div>
                
                <p className="text-[11px] text-slate-400 pt-1">
                  {founderData.location}
                </p>
              </div>

              {/* Core Pillars */}
              <div className="mt-8 pt-6 border-t border-slate-800 space-y-3">
                <p className="text-[10px] font-mono uppercase tracking-widest text-slate-400 text-center">
                  Foundational Pedagogy
                </p>
                <div className="space-y-2">
                  {founderData.corePillars.map((p, i) => (
                    <div key={i} className="flex items-center justify-between p-2 rounded-lg bg-slate-900/60 border border-slate-800/80 text-xs">
                      <span className="text-slate-300 font-medium">{p.label}</span>
                      <span className="text-[11px] text-cyan-400 font-semibold">{p.value}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            <div className="mt-8 pt-4 border-t border-slate-800 text-center text-[11px] text-slate-500 italic">
              "Every student has a thought. Every thought has value."
            </div>

          </div>

          {/* Right Column: Founder Message & Vision */}
          <div className="lg:col-span-7 p-8 sm:p-10 lg:p-12 flex flex-col justify-between space-y-8">
            
            {/* Founder Heading */}
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-blue-600 mb-2">
                <Lightbulb className="w-4 h-4 text-amber-500" />
                <span>Founder's Message to Students & Parents</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display">
                "{founderData.heading}"
              </h2>
            </div>

            {/* The verbatim Founder Message with styled quotation marks */}
            <div className="relative pl-6 border-l-4 border-brand-blue-600 space-y-4">
              <Quote className="absolute -top-3 -left-3.5 w-6 h-6 text-brand-blue-400/30" />
              
              {founderData.messageParagraphs.map((paragraph, idx) => (
                <p 
                  key={idx} 
                  className={`text-slate-700 leading-relaxed ${
                    idx === 0 
                      ? 'text-base sm:text-lg font-semibold text-slate-900' 
                      : idx === founderData.messageParagraphs.length - 1
                        ? 'text-base font-bold text-brand-blue-700 pt-1'
                        : 'text-sm sm:text-base'
                  }`}
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Inspiration Behind the Academy */}
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200/80 space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 flex items-center gap-2">
                <Compass className="w-4 h-4 text-indigo-600" />
                <span>{founderData.inspiration.title}</span>
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {founderData.inspiration.text}
              </p>
            </div>

            {/* Future Aspirations */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3 flex items-center gap-2">
                <Target className="w-4 h-4 text-emerald-600" />
                <span>Future Aspirations for Calmbytes Academy</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {founderData.futureAspirations.map((asp, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-white border border-slate-200/90 shadow-sm flex flex-col justify-between">
                    <span className="text-xs font-bold text-slate-900 font-display">
                      {asp.title}
                    </span>
                    <p className="text-[11px] text-slate-500 mt-1 leading-snug">
                      {asp.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

