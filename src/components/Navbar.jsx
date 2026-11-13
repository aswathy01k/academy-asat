import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  Sparkles, 
  Menu, 
  X, 
  ArrowRight, 
  BookOpen, 
  Users, 
  Award, 
  GraduationCap, 
  Brain,
  Compass,
  PhoneCall
} from 'lucide-react';

export default function Navbar({ onOpenEnquiry }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (targetId, fallbackRoute) => {
    setMobileMenuOpen(false);
    if (location.pathname === '/' || location.pathname === fallbackRoute) {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    navigate(fallbackRoute || `/#${targetId}`);
  };

  const navLinks = [
    { name: 'About', targetId: 'about', route: '/about' },
    { name: 'LTSER Model', targetId: 'ltser', route: '/#ltser' },
    { name: 'Programs', targetId: 'programs', route: '/programs' },
    { name: 'Community', targetId: 'community', route: '/community' },
    { name: 'Why Us', targetId: 'why-us', route: '/#why-us' },
    { name: 'Founder', targetId: 'founder', route: '/founder' },
    { name: 'Contact', targetId: 'enquiry', route: '/enquiry' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-brand-navy-950/90 backdrop-blur-md border-b border-slate-800 shadow-lg py-3' 
          : 'bg-brand-navy-950/70 backdrop-blur-sm border-b border-slate-800/60 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo & Brand Identity */}
          <Link 
            to="/" 
            className="flex items-center gap-3 group focus:outline-none"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-blue-600 via-brand-violet-600 to-cyan-400 p-[2px] shadow-glow flex items-center justify-center transform group-hover:scale-105 transition-transform duration-200">
              <div className="w-full h-full bg-brand-navy-950 rounded-[10px] flex items-center justify-center">
                <Brain className="w-5 h-5 text-cyan-400 group-hover:text-white transition-colors" />
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

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.targetId, link.route)}
                className="px-3 py-1.5 text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/60 rounded-lg transition-all duration-150"
              >
                {link.name}
              </button>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => handleNavClick('enquiry', '/enquiry')}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-cyan-300 bg-cyan-950/40 hover:bg-cyan-900/60 border border-cyan-500/30 rounded-lg transition-colors"
            >
              <PhoneCall className="w-3.5 h-3.5 text-cyan-400" />
              <span>Enquire</span>
            </button>
            
            <button
              onClick={() => {
                if (onOpenEnquiry) onOpenEnquiry();
                else handleNavClick('enquiry', '/enquiry');
              }}
              className="relative group inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-brand-blue-600 via-indigo-600 to-brand-violet-600 rounded-lg shadow-md hover:shadow-glow transition-all duration-200 transform hover:-translate-y-0.5"
            >
              <span>Become a Student</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => {
                if (onOpenEnquiry) onOpenEnquiry();
                else handleNavClick('enquiry', '/enquiry');
              }}
              className="sm:hidden px-3 py-1.5 text-xs font-semibold text-white bg-brand-blue-600 rounded-md"
            >
              Enquire
            </button>
            
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-brand-navy-950/98 border-b border-slate-800 px-4 pt-3 pb-6 space-y-3 shadow-2xl backdrop-blur-xl">
          <div className="py-2 border-b border-slate-800/80">
            <p className="text-xs font-semibold text-brand-blue-400 tracking-wider uppercase mb-1">
              Calmbytes Academy – ASAT
            </p>
            <p className="text-xs text-slate-400 italic">
              "Every Student Has a Thought. Every Thought Has Value."
            </p>
          </div>

          <div className="grid grid-cols-2 gap-2 pt-2">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.targetId, link.route)}
                className="flex items-center justify-start px-3 py-2.5 text-sm font-medium text-slate-200 hover:text-white hover:bg-slate-800/80 rounded-lg transition-colors text-left"
              >
                {link.name}
              </button>
            ))}
          </div>

          <div className="pt-4 border-t border-slate-800 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                handleNavClick('enquiry', '/enquiry');
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-white bg-gradient-to-r from-brand-blue-600 to-brand-violet-600 rounded-lg shadow-lg"
            >
              <span>Become a Student &bull; Apply</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <p className="text-[11px] text-center text-slate-500">
              Classes 6 to 12 &bull; Learn. Think. Share. Engage. Earn.
            </p>
          </div>
        </div>
      )}
    </header>
  );
}

