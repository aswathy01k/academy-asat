import React, { useState } from 'react';
import { ltserStages } from '../data/ltserData';
import { 
  BookOpen, 
  Brain, 
  Share2, 
  Users, 
  Award, 
  ArrowRight, 
  ChevronRight, 
  Sparkles,
  CheckCircle2,
  HelpCircle,
  Lightbulb
} from 'lucide-react';

export default function LearningTimeline() {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const activeStage = ltserStages[activeStepIndex];

  const getIcon = (name) => {
    switch (name) {
      case 'BookOpen': return <BookOpen className="w-5 h-5" />;
      case 'Brain': return <Brain className="w-5 h-5" />;
      case 'Share2': return <Share2 className="w-5 h-5" />;
      case 'Users': return <Users className="w-5 h-5" />;
      case 'Award': return <Award className="w-5 h-5" />;
      default: return <Sparkles className="w-5 h-5" />;
    }
  };

  return (
    <div className="w-full">
      
      {/* Interactive Horizontal Timeline Bar */}
      <div className="relative mb-10 pb-4">
        
        {/* Background track line */}
        <div className="hidden md:block absolute top-1/2 left-8 right-8 h-1 bg-slate-200 -translate-y-1/2 z-0" />
        
        {/* Active progress fill line */}
        <div 
          className="hidden md:block absolute top-1/2 left-8 h-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-amber-500 -translate-y-1/2 z-0 transition-all duration-500"
          style={{ width: `${(activeStepIndex / (ltserStages.length - 1)) * 90}%` }}
        />

        {/* 5 Stage Node Buttons */}
        <div className="grid grid-cols-5 gap-2 relative z-10">
          {ltserStages.map((stage, idx) => {
            const isActive = idx === activeStepIndex;
            const isPassed = idx < activeStepIndex;

            return (
              <button
                key={stage.key}
                onClick={() => setActiveStepIndex(idx)}
                className="flex flex-col items-center group focus:outline-none"
              >
                {/* Circle Indicator */}
                <div 
                  className={`w-12 h-12 sm:w-16 sm:h-16 rounded-2xl flex flex-col items-center justify-center transition-all duration-300 transform ${
                    isActive 
                      ? 'bg-slate-900 text-white shadow-hover scale-110 ring-4 ring-brand-blue-500/30 border-2 border-brand-blue-400' 
                      : isPassed
                        ? 'bg-blue-600 text-white shadow-sm hover:scale-105'
                        : 'bg-white text-slate-500 border border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                  }`}
                >
                  <span className="text-base sm:text-lg font-extrabold font-display leading-none">
                    {stage.letter}
                  </span>
                  <span className="text-[9px] sm:text-[10px] tracking-wider uppercase font-semibold mt-0.5 opacity-80">
                    Step {stage.step}
                  </span>
                </div>

                {/* Text Label */}
                <span 
                  className={`mt-2 text-xs sm:text-sm font-bold uppercase tracking-wider transition-colors duration-200 text-center ${
                    isActive ? 'text-brand-blue-600 font-extrabold' : 'text-slate-600 group-hover:text-slate-900'
                  }`}
                >
                  {stage.name}
                </span>
                
                {/* Subtle active indicator dot */}
                {isActive && (
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-blue-600 mt-1 animate-ping" />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Active Stage Detailed Card */}
      <div className="bg-white rounded-3xl border border-slate-200/90 shadow-card overflow-hidden transition-all duration-300">
        
        {/* Top colored accent stripe */}
        <div className={`h-2.5 w-full bg-gradient-to-r ${activeStage.color}`} />

        <div className="p-6 sm:p-8 lg:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Stage description & actions */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="flex flex-wrap items-center gap-3">
                <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${activeStage.bgLight} ${activeStage.textColor} border ${activeStage.borderColor}`}>
                  {getIcon(activeStage.icon)}
                  <span>Stage {activeStage.step} &bull; {activeStage.name}</span>
                </span>
                <span className="text-xs font-semibold text-slate-400">
                  LTSER Framework
                </span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display">
                  {activeStage.title}
                </h3>
                <p className="mt-2 text-base text-slate-600 leading-relaxed font-medium">
                  {activeStage.shortDescription}
                </p>
                <p className="mt-2 text-sm text-slate-500 leading-relaxed">
                  {activeStage.description}
                </p>
              </div>

              {/* Action items in this stage */}
              <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200/70">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>{activeStage.actionHeader}</span>
                </h4>
                <ul className="space-y-2.5">
                  {activeStage.actions.map((act, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-slate-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-blue-500 mt-2 flex-shrink-0" />
                      <span>{act}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Student benefit card */}
              <div className="flex items-start gap-3 p-4 rounded-xl bg-gradient-to-r from-blue-50/60 to-indigo-50/60 border border-blue-100">
                <Lightbulb className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-blue-900">
                    Why This Matters For Students:
                  </p>
                  <p className="text-xs sm:text-sm text-slate-700 font-medium mt-0.5">
                    {activeStage.studentBenefit}
                  </p>
                </div>
              </div>

              {/* Step Navigation Controls */}
              <div className="flex items-center justify-between pt-2 border-t border-slate-100">
                <button
                  onClick={() => setActiveStepIndex((prev) => Math.max(0, prev - 1))}
                  disabled={activeStepIndex === 0}
                  className={`px-4 py-2 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors ${
                    activeStepIndex === 0 
                      ? 'text-slate-300 cursor-not-allowed' 
                      : 'text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  &larr; Previous Stage
                </button>

                <div className="flex gap-1.5">
                  {ltserStages.map((_, i) => (
                    <span 
                      key={i} 
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        i === activeStepIndex ? 'w-6 bg-brand-blue-600' : 'w-1.5 bg-slate-200'
                      }`}
                    />
                  ))}
                </div>

                <button
                  onClick={() => setActiveStepIndex((prev) => Math.min(ltserStages.length - 1, prev + 1))}
                  disabled={activeStepIndex === ltserStages.length - 1}
                  className={`px-4 py-2 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors ${
                    activeStepIndex === ltserStages.length - 1 
                      ? 'text-slate-300 cursor-not-allowed' 
                      : 'text-white bg-slate-900 hover:bg-brand-blue-600 shadow-sm'
                  }`}
                >
                  <span>Next Stage</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>

            {/* Right Column: Visual demonstration & Artifact preview */}
            <div className="lg:col-span-5 bg-gradient-to-b from-slate-900 to-brand-navy-950 rounded-2xl p-6 text-white shadow-lg border border-slate-800 flex flex-col justify-between h-full min-h-[380px]">
              
              <div>
                <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-[11px] font-mono uppercase tracking-wider text-slate-300">
                      Live Classroom Simulation
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-cyan-400">
                    STAGE {activeStage.step}/05
                  </span>
                </div>

                {/* Simulated Student Activity Badge */}
                <div className="bg-slate-800/80 rounded-xl p-4 border border-slate-700/80 mb-4 backdrop-blur-sm">
                  <div className="flex items-center gap-2 text-xs font-bold text-cyan-300 uppercase tracking-wider mb-1">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Sample Learning Artifact</span>
                  </div>
                  <h5 className="text-sm font-semibold text-white">
                    {activeStage.exampleArtifact.title}
                  </h5>
                  <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                    "{activeStage.exampleArtifact.snippet}"
                  </p>
                  <div className="mt-3 inline-block px-2 py-0.5 rounded bg-slate-700/80 text-[10px] text-slate-300 font-mono">
                    Type: {activeStage.exampleArtifact.type}
                  </div>
                </div>

                {/* LTSER Progressive Pipeline Graphic */}
                <div className="space-y-2">
                  <p className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold">
                    The 5-Stage Progression:
                  </p>
                  <div className="flex items-center justify-between gap-1 text-[11px] font-bold">
                    {ltserStages.map((s, idx) => (
                      <div 
                        key={s.key} 
                        className={`flex-1 py-1 px-1.5 text-center rounded text-[10px] transition-all ${
                          idx === activeStepIndex 
                            ? 'bg-brand-blue-500 text-white font-extrabold shadow' 
                            : idx < activeStepIndex 
                              ? 'bg-slate-800 text-slate-300' 
                              : 'bg-slate-900 text-slate-600'
                        }`}
                      >
                        {s.name}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Quote inside Graphic Box */}
              <div className="mt-6 pt-4 border-t border-slate-800/80 text-xs text-slate-300 italic">
                "When students teach and collaborate, learning becomes permanent."
              </div>

            </div>

          </div>
        </div>

      </div>

    </div>
  );
}

