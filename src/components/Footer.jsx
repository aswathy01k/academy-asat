import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Sparkles, 
  Mail, 
  Phone, 
  MapPin, 
  ArrowRight, 
  ShieldCheck, 
  Heart,
  CheckCircle2
} from 'lucide-react';

export default function Footer({ onOpenEnquiry }) {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-brand-navy-950 text-white border-t border-slate-800/80 pt-16 pb-12 overflow-hidden relative">
      
      {/* Ambient background glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-blue-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-brand-violet-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Banner / Brand Vision Header */}
        <div className="bg-gradient-to-r from-slate-900 to-brand-navy-900 rounded-3xl p-8 sm:p-10 border border-slate-800 mb-16 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-[11px] font-mono tracking-widest uppercase text-cyan-400 bg-cyan-950/60 px-3 py-1 rounded-full border border-cyan-800/40">
              Transforming Education for Classes 6 to 12
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-white font-display">
              Ready to give your thoughts the value they deserve?
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 max-w-xl">
              Join a vibrant community of thinkers, learners, and future scholars. Move beyond memorisation today.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3">
            <button
              onClick={() => {
                if (onOpenEnquiry) onOpenEnquiry();
                else scrollTo('enquiry');
              }}
              className="px-6 py-3 rounded-xl text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-brand-blue-600 to-brand-violet-600 hover:shadow-glow shadow-md transition-all duration-200 transform hover:-translate-y-0.5"
            >
              Become a Student &bull; Enquire
            </button>
          </div>
        </div>

        {/* 4 Navigation Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Brand Info (Span 2) */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-blue-600 via-brand-violet-600 to-cyan-400 p-[2px] shadow-glow flex items-center justify-center">
                <div className="w-full h-full bg-brand-navy-950 rounded-[10px] flex items-center justify-center">
                  <Brain className="w-5 h-5 text-cyan-400" />
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="text-xl font-extrabold tracking-tight text-white font-display">
                    CALMBYTES
                  </span>
                  <span className="px-1.5 py-0.5 text-[10px] font-bold tracking-wider uppercase bg-brand-blue-500/20 text-brand-blue-400 border border-brand-blue-500/30 rounded">
                    ASAT
                  </span>
                </div>
                <span className="text-[10px] tracking-wider text-slate-400 uppercase font-medium">
                  Academy &bull; Classes 6–12
                </span>
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              <strong className="text-slate-200">"Every Student Has a Thought. Every Thought Has Value."</strong>
              <br />
              An innovative learning community empowering students from Classes 6 to 12 to understand concepts deeply, explore independent ideas, and share knowledge.
            </p>

            <div className="pt-2">
              <p className="text-xs font-mono uppercase tracking-widest text-brand-blue-400">
                Core Philosophy:
              </p>
              <div className="flex flex-wrap gap-1.5 mt-2">
                {['Learn', 'Think', 'Share', 'Engage', 'Earn'].map((step, i) => (
                  <span key={step} className="text-[11px] font-bold bg-slate-900 border border-slate-800 px-2 py-0.5 rounded text-slate-300">
                    {step} {i < 4 ? '→' : '★'}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Academic Programs */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-200 font-mono">
              Academic Programs
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <button onClick={() => scrollTo('programs')} className="hover:text-cyan-400 transition-colors">
                  Foundation (Classes 6–8)
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('programs')} className="hover:text-cyan-400 transition-colors">
                  Academic Dev (Classes 9–10)
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('programs')} className="hover:text-cyan-400 transition-colors">
                  Advanced Learning (Classes 11–12)
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('programs')} className="hover:text-cyan-400 transition-colors">
                  STEM & Mathematics Logic
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('programs')} className="hover:text-cyan-400 transition-colors">
                  Critical Writing & Expression
                </button>
              </li>
            </ul>
          </div>

          {/* Academy & Philosophy */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-200 font-mono">
              Academy & Model
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <button onClick={() => scrollTo('about')} className="hover:text-cyan-400 transition-colors">
                  About Calmbytes
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('ltser')} className="hover:text-cyan-400 transition-colors">
                  The LTSER Framework
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('community')} className="hover:text-cyan-400 transition-colors">
                  Knowledge-Sharing Commons
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('why-us')} className="hover:text-cyan-400 transition-colors">
                  Why Choose Calmbytes
                </button>
              </li>
              <li>
                <Link to="/founder" className="hover:text-cyan-400 transition-colors">
                  Founder's Message & Vision
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Parent Desk */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-200 font-mono">
              Admissions & Contact
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-brand-blue-400 flex-shrink-0" />
                <span>admissions@calmbytes.edu</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                <span>+91 98765 43210 (Parent Desk)</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-brand-violet-400 flex-shrink-0 mt-0.5" />
                <span>Online Academy &bull; Interactive Digital Classrooms Across India</span>
              </li>
              <li className="pt-2">
                <button 
                  onClick={() => scrollTo('enquiry')}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-400 hover:text-cyan-300"
                >
                  <span>Open Student Enquiry Form</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Board Agnostic & Child Protection Disclaimers */}
        <div className="py-6 border-b border-slate-800/80 text-[11px] text-slate-400 space-y-2">
          <p>
            <strong className="text-slate-300">Board Independence & Curriculum Notice:</strong> Calmbytes Academy – ASAT focuses on first-principles conceptual mastery. Our modular academic syllabus is fully compatible with CBSE, ICSE, Cambridge (IGCSE), and State Board standards, allowing students to excel irrespective of their school affiliation.
          </p>
          <p>
            <strong className="text-slate-300">Parental Involvement & Minor Safety:</strong> Calmbytes Academy complies with ethical educational guidelines for students under 18 years of age. All admission queries and registrations require verified parent or guardian acknowledgment.
          </p>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} CALMBYTES ACADEMY – ASAT. All rights reserved.
          </p>
          <p className="flex items-center gap-1 text-[11px]">
            <span>Crafted with</span>
            <Heart className="w-3 h-3 text-rose-500 fill-rose-500 inline" />
            <span>for independent thinkers & future scholars</span>
          </p>
        </div>

      </div>

    </footer>
  );
}

