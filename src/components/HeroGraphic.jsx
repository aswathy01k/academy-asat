import React from 'react';
import { 
  BookOpen, 
  Lightbulb, 
  Atom, 
  Sparkles, 
  Share2, 
  MessageSquare, 
  CheckCircle2, 
  Compass, 
  GraduationCap,
  FlaskConical,
  Binary
} from 'lucide-react';

export default function HeroGraphic() {
  return (
    <div className="relative w-full max-w-xl mx-auto aspect-square lg:aspect-[5/4] flex items-center justify-center select-none">
      
      {/* Background ambient glow circles */}
      <div className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-brand-blue-500/15 blur-3xl animate-pulse-subtle -top-10 -right-10 pointer-events-none" />
      <div className="absolute w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-brand-violet-500/15 blur-3xl -bottom-10 -left-10 pointer-events-none" />

      {/* SVG Canvas for collaboration network lines & orbital paths */}
      <svg 
        className="absolute inset-0 w-full h-full pointer-events-none overflow-visible" 
        viewBox="0 0 500 500" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="orbitGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#8B5CF6" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.4" />
          </linearGradient>
          <linearGradient id="lineGrad1" x1="120" y1="140" x2="380" y2="340" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.2" />
          </linearGradient>
          <linearGradient id="lineGrad2" x1="380" y1="130" x2="140" y2="370" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.3" />
          </linearGradient>
        </defs>

        {/* Outer orbital rings */}
        <circle cx="250" cy="250" r="190" stroke="url(#orbitGrad)" strokeWidth="1.5" strokeDasharray="6 8" opacity="0.6" />
        <circle cx="250" cy="250" r="130" stroke="rgba(255,255,255,0.08)" strokeWidth="1.2" />

        {/* Dynamic connection lines linking student nodes */}
        <path d="M 120 180 Q 250 140 370 170" stroke="url(#lineGrad1)" strokeWidth="2" strokeDasharray="4 4" className="animate-pulse" />
        <path d="M 140 330 Q 250 360 360 320" stroke="url(#lineGrad2)" strokeWidth="2" strokeDasharray="4 4" />
        <path d="M 250 120 L 250 380" stroke="rgba(139, 92, 246, 0.2)" strokeWidth="1.5" />
        
        {/* Pulsing collaboration network nodes */}
        <circle cx="250" cy="120" r="4" fill="#38BDF8" className="animate-ping" style={{ animationDuration: '3s' }} />
        <circle cx="120" cy="180" r="4" fill="#818CF8" />
        <circle cx="370" cy="170" r="4" fill="#A78BFA" />
        <circle cx="140" cy="330" r="4" fill="#38BDF8" />
        <circle cx="360" cy="320" r="4" fill="#34D399" />
      </svg>

      {/* Center Core: The Collaborative Thought Hub */}
      <div className="relative z-10 w-48 sm:w-56 aspect-square rounded-3xl bg-slate-900/80 border border-slate-700/80 backdrop-blur-xl shadow-card flex flex-col items-center justify-center p-5 text-center group hover:border-brand-blue-400/60 transition-all duration-300">
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-brand-blue-600 via-brand-violet-600 to-cyan-400 p-[2px] shadow-glow mb-3">
          <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center">
            <Lightbulb className="w-7 h-7 text-amber-300 group-hover:scale-110 transition-transform" />
          </div>
        </div>
        <h4 className="text-sm font-bold text-white tracking-wide">
          Student Thought Core
        </h4>
        <p className="text-[11px] text-slate-400 mt-1 leading-snug">
          "Every thought has value & grows with inquiry"
        </p>
        <div className="mt-2.5 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-brand-blue-500/10 border border-brand-blue-400/20 text-[10px] font-semibold text-brand-blue-300">
          <Sparkles className="w-3 h-3 text-cyan-400 animate-spin" style={{ animationDuration: '6s' }} />
          <span>LTSER Active</span>
        </div>
      </div>

      {/* Floating Element 1: Student Discussion Node - Left Top */}
      <div className="absolute top-4 left-0 sm:left-4 z-20 animate-float-slow">
        <div className="bg-slate-900/90 border border-slate-700/80 rounded-2xl p-3 shadow-card backdrop-blur-md max-w-[190px]">
          <div className="flex items-center gap-2 mb-1.5">
            <div className="w-7 h-7 rounded-full bg-gradient-to-br from-blue-400 to-indigo-600 flex items-center justify-center text-xs font-bold text-white">
              S1
            </div>
            <div>
              <p className="text-xs font-semibold text-white leading-tight">Aarav (Cl. 10)</p>
              <p className="text-[10px] text-cyan-400 font-medium">Concept Explainer</p>
            </div>
          </div>
          <div className="bg-slate-800/80 rounded-lg p-2 text-[10px] text-slate-300 border border-slate-700/50 flex items-start gap-1.5">
            <MessageSquare className="w-3.5 h-3.5 text-blue-400 flex-shrink-0 mt-0.5" />
            <span>"Why does momentum conserve during collisions?"</span>
          </div>
        </div>
      </div>

      {/* Floating Element 2: Student Discussion Node - Right Bottom */}
      <div className="absolute bottom-4 right-0 sm:right-4 z-20 animate-float-delayed">
        <div className="bg-slate-900/90 border border-slate-700/80 rounded-2xl p-3 shadow-card backdrop-blur-md max-w-[200px]">
          <div className="flex items-center gap-2 mb-1.5">
            <div className="w-7 h-7 rounded-full bg-gradient-to-br from-violet-400 to-purple-600 flex items-center justify-center text-xs font-bold text-white">
              S2
            </div>
            <div>
              <p className="text-xs font-semibold text-white leading-tight">Priya (Cl. 12)</p>
              <p className="text-[10px] text-emerald-400 font-medium">Peer Tutor &bull; +50 Pts</p>
            </div>
          </div>
          <div className="bg-slate-800/80 rounded-lg p-2 text-[10px] text-slate-300 border border-slate-700/50 flex items-start gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
            <span>"Drew a 3-step vector diagram to simplify it!"</span>
          </div>
        </div>
      </div>

      {/* Floating Educational Symbol 1: Mathematical Formula Card */}
      <div className="absolute top-10 right-4 sm:right-10 z-20 animate-float-medium">
        <div className="bg-slate-900/85 border border-indigo-500/30 rounded-xl px-3 py-2 shadow-hover backdrop-blur-md flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-indigo-500/20 flex items-center justify-center text-indigo-400">
            <span className="font-mono font-bold text-sm">∑</span>
          </div>
          <div>
            <span className="text-[11px] font-mono font-semibold text-indigo-200">
              ∫ f(x)dx &bull; E = mc²
            </span>
            <p className="text-[9px] text-slate-400">First-principles Math</p>
          </div>
        </div>
      </div>

      {/* Floating Educational Symbol 2: Science & Laboratory Item */}
      <div className="absolute bottom-12 left-4 sm:left-10 z-20 animate-float-slow">
        <div className="bg-slate-900/85 border border-cyan-500/30 rounded-xl px-3 py-2 shadow-hover backdrop-blur-md flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-cyan-500/20 flex items-center justify-center text-cyan-400">
            <Atom className="w-4 h-4 animate-spin" style={{ animationDuration: '10s' }} />
          </div>
          <div>
            <span className="text-[11px] font-semibold text-cyan-200">
              Orbital Models & Optics
            </span>
            <p className="text-[9px] text-slate-400">Integrated STEM Inquiry</p>
          </div>
        </div>
      </div>

      {/* Floating Educational Symbol 3: Books & Knowledge Hub */}
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20 animate-float-delayed">
        <div className="bg-slate-900/90 border border-amber-500/30 rounded-xl px-3.5 py-1.5 shadow-lg backdrop-blur-md flex items-center gap-2">
          <BookOpen className="w-3.5 h-3.5 text-amber-400" />
          <span className="text-[11px] font-semibold text-amber-200">
            Curated Subject Blueprints
          </span>
        </div>
      </div>

      {/* Floating Educational Symbol 4: Value Recognition Badge */}
      <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 z-20 animate-float-medium">
        <div className="bg-slate-900/90 border border-emerald-500/30 rounded-xl px-3 py-1.5 shadow-lg backdrop-blur-md flex items-center gap-2">
          <Share2 className="w-3.5 h-3.5 text-emerald-400" />
          <span className="text-[11px] font-semibold text-emerald-200">
            Learn &bull; Think &bull; Share &bull; Engage &bull; Earn
          </span>
        </div>
      </div>

    </div>
  );
}

