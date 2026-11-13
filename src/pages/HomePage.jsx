import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import HeroGraphic from '../components/HeroGraphic';
import LearningTimeline from '../components/LearningTimeline';
import ProgramCard from '../components/ProgramCard';
import CommunityShowcase from '../components/CommunityShowcase';
import FounderSection from '../components/FounderSection';
import EnquiryForm from '../components/EnquiryForm';
import { programsData } from '../data/programsData';
import { aboutFeatures, whyChooseFeatures } from '../data/featuresData';
import { 
  Sparkles, 
  ArrowRight, 
  BookOpen, 
  GraduationCap, 
  CheckCircle2, 
  Lightbulb, 
  Users, 
  Layers, 
  Award, 
  ShieldCheck, 
  Brain,
  Compass,
  UserCheck,
  BrainCircuit,
  MessageSquare,
  HelpCircle
} from 'lucide-react';

export default function HomePage({ onOpenEnquiryWithProgram }) {
  const [selectedProgramForEnquiry, setSelectedProgramForEnquiry] = useState(null);

  const handleProgramSelect = (program) => {
    if (onOpenEnquiryWithProgram) {
      onOpenEnquiryWithProgram(program.title, program.classes);
    } else {
      const el = document.getElementById('enquiry');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const getAboutIcon = (iconName) => {
    switch (iconName) {
      case 'Lightbulb': return <Lightbulb className="w-6 h-6 text-blue-500" />;
      case 'Layers': return <Layers className="w-6 h-6 text-indigo-500" />;
      case 'Sparkles': return <Sparkles className="w-6 h-6 text-violet-500" />;
      case 'Users2': return <Users className="w-6 h-6 text-cyan-500" />;
      default: return <Brain className="w-6 h-6 text-blue-500" />;
    }
  };

  const getWhyIcon = (iconName) => {
    switch (iconName) {
      case 'UserCheck': return <UserCheck className="w-5 h-5 text-blue-500" />;
      case 'Compass': return <Compass className="w-5 h-5 text-indigo-500" />;
      case 'BrainCircuit': return <BrainCircuit className="w-5 h-5 text-violet-500" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-cyan-500" />;
      case 'Share2': return <Users className="w-5 h-5 text-emerald-500" />;
      case 'Award': return <Award className="w-5 h-5 text-amber-500" />;
      default: return <Sparkles className="w-5 h-5 text-blue-500" />;
    }
  };

  return (
    <div className="space-y-24 sm:space-y-32">
      
      {/* ========================================================= */}
      {/* 3. HERO SECTION                                           */}
      {/* ========================================================= */}
      <section 
        id="hero" 
        className="relative pt-32 pb-16 sm:pt-40 sm:pb-24 overflow-hidden bg-brand-navy-950 text-white"
      >
        {/* Ambient background glow & radial gradient */}
        <div className="absolute top-0 inset-x-0 h-[600px] bg-gradient-to-b from-brand-blue-900/20 via-brand-navy-950/80 to-brand-navy-950 pointer-events-none" />
        <div className="absolute top-20 right-10 w-96 h-96 bg-brand-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-40 left-10 w-80 h-80 bg-brand-violet-500/10 rounded-full blur-3xl pointer-events-none" />
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              
              {/* Brand Pill / Tagline */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 shadow-inner">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                <span className="text-xs font-bold uppercase tracking-widest text-cyan-300 font-mono">
                  Calmbytes Academy &bull; ASAT
                </span>
                <span className="text-slate-500">|</span>
                <span className="text-xs text-slate-300 font-medium">Classes 6 to 12</span>
              </div>

              {/* Main Heading */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white font-display leading-[1.12]">
                Every Student Has a Thought.{' '}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-brand-blue-400 to-brand-violet-400">
                  Every Thought Has Value.
                </span>
              </h1>

              {/* Supporting Philosophy Badge */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-1">
                {['Learn', 'Think', 'Share', 'Engage', 'Earn'].map((item, idx) => (
                  <span 
                    key={item} 
                    className="text-xs sm:text-sm font-bold tracking-wider uppercase text-slate-300 bg-slate-800/80 px-2.5 py-1 rounded-lg border border-slate-700/60"
                  >
                    {item} {idx < 4 ? '•' : ''}
                  </span>
                ))}
              </div>

              {/* Supporting Description */}
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
                An innovative learning community empowering students to understand concepts, develop independent ideas, express their knowledge, and grow together.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
                <button
                  onClick={() => {
                    const el = document.getElementById('about');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl text-sm font-bold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 shadow-md hover:shadow-lg transition-all duration-200"
                >
                  <BookOpen className="w-4 h-4 text-cyan-400" />
                  <span>Explore Our Academy</span>
                </button>

                <button
                  onClick={() => {
                    const el = document.getElementById('enquiry');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-brand-blue-600 via-indigo-600 to-brand-violet-600 shadow-glow hover:shadow-hover transition-all duration-200 transform hover:-translate-y-0.5"
                >
                  <span>Become a Student</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Key Trust Highlights */}
              <div className="pt-8 border-t border-slate-800/80 grid grid-cols-3 gap-4 text-center lg:text-left">
                <div>
                  <div className="text-xl sm:text-2xl font-extrabold text-white font-display">6–12</div>
                  <div className="text-[11px] text-slate-400 font-medium">Academic Grades</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-extrabold text-cyan-400 font-display">LTSER</div>
                  <div className="text-[11px] text-slate-400 font-medium">5-Stage Model</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-extrabold text-brand-violet-400 font-display">100%</div>
                  <div className="text-[11px] text-slate-400 font-medium">Concept-First Pedagogy</div>
                </div>
              </div>

            </div>

            {/* Right Educational Illustration Animation */}
            <div className="lg:col-span-5 flex items-center justify-center">
              <HeroGraphic />
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 4. ABOUT CALMBYTES: Education Beyond Memorisation          */}
      {/* ========================================================= */}
      <section id="about" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="px-3.5 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-widest bg-blue-50 text-brand-blue-700 border border-blue-200">
            About Calmbytes Academy
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-display">
            Education Beyond Memorisation.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Calmbytes Academy encourages students to move beyond passive learning. We transform conventional tuition into an inspiring journey where original thoughts are cultivated, tested, and respected.
          </p>
        </div>

        {/* 4 Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {aboutFeatures.map((card, idx) => (
            <div 
              key={card.id}
              className="bg-white rounded-3xl p-7 border border-slate-200 shadow-soft hover:shadow-card hover:border-brand-blue-300 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                    {getAboutIcon(card.iconName)}
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-widest bg-slate-100 text-slate-600 px-2.5 py-1 rounded-full font-bold">
                    {card.badge}
                  </span>
                </div>

                <div className="text-xs font-mono font-bold text-brand-blue-600 uppercase tracking-wider mb-1">
                  Pillar 0{idx + 1}
                </div>

                <h3 className="text-lg font-bold text-slate-900 font-display">
                  {card.title}
                </h3>
                
                <p className="mt-2 text-xs font-semibold text-brand-blue-700 leading-snug">
                  {card.summary}
                </p>

                <p className="mt-2 text-xs sm:text-sm text-slate-500 leading-relaxed">
                  {card.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <span className="text-sm font-extrabold text-slate-900 font-display">{card.stat}</span>
                  <p className="text-[10px] text-slate-400">{card.statLabel}</p>
                </div>
                <div className="w-7 h-7 rounded-full bg-slate-100 group-hover:bg-brand-blue-50 flex items-center justify-center transition-colors">
                  <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-brand-blue-600" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </section>

      {/* ========================================================= */}
      {/* 5. OUR LEARNING MODEL – LTSER                              */}
      {/* ========================================================= */}
      <section id="ltser" className="bg-slate-100/70 py-20 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="px-3.5 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-widest bg-indigo-50 text-indigo-700 border border-indigo-200">
              Proprietary Pedagogy
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-display">
              Our Learning Model – LTSER
            </h2>
            <p className="text-base text-slate-600">
              A 5-stage interactive continuum engineered to move students from initial concept intuition to peer teaching and accredited academic value.
            </p>
          </div>

          {/* Interactive Visual Timeline */}
          <LearningTimeline />

        </div>
      </section>

      {/* ========================================================= */}
      {/* 6. ACADEMIC PROGRAMS (Classes 6 to 12)                    */}
      {/* ========================================================= */}
      <section id="programs" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="px-3.5 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-widest bg-cyan-50 text-cyan-800 border border-cyan-200">
            Curriculum Architecture
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-display">
            Tailored Academic Programs
          </h2>
          <p className="text-base text-slate-600">
            Three visually distinct stages engineered for student age, cognitive development, and academic requirements. Board-agnostic and fully syllabus-editable.
          </p>
        </div>

        {/* 3 Premium Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {programsData.map((prog) => (
            <ProgramCard 
              key={prog.id}
              program={prog}
              onSelectProgram={handleProgramSelect}
            />
          ))}
        </div>

        {/* Bottom Note on Curriculum Independence */}
        <div className="mt-12 p-5 rounded-2xl bg-white border border-slate-200 shadow-soft text-center max-w-2xl mx-auto text-xs text-slate-500">
          <strong className="text-slate-800">Universal Syllabus Architecture:</strong> All programs adapt seamlessly to CBSE, ICSE, Cambridge (IGCSE), and State Board frameworks through modular conceptual mastery.
        </div>

      </section>

      {/* ========================================================= */}
      {/* 7. KNOWLEDGE-SHARING COMMUNITY                            */}
      {/* ========================================================= */}
      <section id="community" className="bg-slate-50 py-20 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="px-3.5 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-widest bg-emerald-50 text-emerald-800 border border-emerald-200">
              Differentiating Innovation
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-display">
              "Your Knowledge Has Value. Share It. Grow With It."
            </h2>
            <p className="text-base text-slate-600">
              When students articulate what they know and collaborate with peers, concepts crystallize permanently. Explore our collaborative knowledge-sharing commons.
            </p>
          </div>

          {/* Demonstration + Sample Points Illustration */}
          <CommunityShowcase />

        </div>
      </section>

      {/* ========================================================= */}
      {/* 8. WHY CHOOSE CALMBYTES?                                  */}
      {/* ========================================================= */}
      <section id="why-us" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="px-3.5 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-widest bg-violet-50 text-violet-800 border border-violet-200">
            The Calmbytes Distinction
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-display">
            Why Choose Calmbytes?
          </h2>
          <p className="text-base text-slate-600">
            A comprehensive educational philosophy built to nurture confident thinkers, problem solvers, and lifelong learners.
          </p>
        </div>

        {/* 6 Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyChooseFeatures.map((item) => (
            <div 
              key={item.id}
              className="bg-white rounded-3xl p-7 border border-slate-200 shadow-soft hover:shadow-card hover:border-brand-blue-300 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className={`w-12 h-12 rounded-2xl ${item.bg} border ${item.border} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform shadow-sm`}>
                  {getWhyIcon(item.icon)}
                </div>
                
                <h3 className="text-lg font-bold text-slate-900 font-display">
                  {item.title}
                </h3>
                
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center text-xs font-bold text-brand-blue-600 group-hover:text-brand-blue-700">
                <span>Core Academy Standard</span>
              </div>
            </div>
          ))}
        </div>

      </section>

      {/* ========================================================= */}
      {/* 9. FOUNDER SECTION                                        */}
      {/* ========================================================= */}
      <section id="founder" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="px-3.5 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-widest bg-amber-50 text-amber-800 border border-amber-200">
            Academy Leadership
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-display">
            Founder's Vision & Inspiration
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            "An Idea to Transform the Way Students Learn."
          </p>
        </div>

        <FounderSection isStandalonePage={false} />

        <div className="mt-6 text-center">
          <Link 
            to="/founder"
            className="inline-flex items-center gap-2 text-sm font-bold text-brand-blue-600 hover:text-brand-blue-700 underline underline-offset-4"
          >
            <span>Read full Founder profile, aspirations & personal story</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </section>

      {/* ========================================================= */}
      {/* 10. CONTACT AND STUDENT ENQUIRY                           */}
      {/* ========================================================= */}
      <section id="enquiry" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <span className="px-3.5 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-widest bg-blue-50 text-brand-blue-700 border border-blue-200">
            Admissions & Student Enquiry
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-display">
            Begin Your Learning Journey
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Fill out the enquiry form below. Our academic counsellors will contact the parent/guardian to tailor the right learning pathway for Classes 6 to 12.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-card">
          <EnquiryForm />
        </div>

      </section>

    </div>
  );
}

