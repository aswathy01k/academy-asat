import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import EnquiryForm from '../components/EnquiryForm';
import { ArrowLeft, ShieldCheck, HelpCircle, Phone, Mail, Clock } from 'lucide-react';

export default function EnquiryPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const faqs = [
    {
      q: 'Why is parent or guardian involvement required?',
      a: 'Calmbytes Academy mentors students from Classes 6 to 12 (ages 11 to 18). We adhere to strict child safety and educational privacy standards. Academic pathways are most successful when parents and students partner closely with our faculty.'
    },
    {
      q: 'Does Calmbytes support my school board (CBSE, ICSE, Cambridge, State)?',
      a: 'Yes. Our curriculum is concept-first and board-agnostic. We focus on core principles and problem-solving, which translates into academic top marks across any board syllabus.'
    },
    {
      q: 'What is the LTSER model and how do classes operate?',
      a: 'LTSER stands for Learn, Think, Share, Engage, Earn. Students attend interactive concept sessions, participate in peer discussion circles, author study notes, and receive recognition for educational contributions.'
    },
    {
      q: 'How soon will an academic coordinator get in touch?',
      a: 'Our admissions desk responds to parent enquiries within 24 business hours to schedule a 1-on-1 orientation discussion.'
    }
  ];

  return (
    <div className="pt-28 pb-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      
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
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="px-3.5 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-widest bg-blue-50 text-brand-blue-700 border border-blue-200">
          Admissions & Student Registration
        </span>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-display">
          Begin Your Calmbytes Journey
        </h1>
        <p className="text-base text-slate-600">
          Submit your academic enquiry below for Classes 6 to 12. Our academic counsellors look forward to connecting with the parent/guardian.
        </p>
      </div>

      {/* Form Container */}
      <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-card">
        <EnquiryForm />
      </div>

      {/* Parent FAQs */}
      <div className="space-y-6 pt-6">
        <div className="text-center">
          <h3 className="text-xl font-bold text-slate-900 font-display">
            Frequently Asked Questions for Parents & Students
          </h3>
          <p className="text-xs text-slate-500 mt-1">
            Key details about admission, curriculum, and safety.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {faqs.map((faq, i) => (
            <div key={i} className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
              <h4 className="text-xs sm:text-sm font-bold text-slate-900 flex items-start gap-2">
                <HelpCircle className="w-4 h-4 text-brand-blue-600 flex-shrink-0 mt-0.5" />
                <span>{faq.q}</span>
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed pl-6">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

