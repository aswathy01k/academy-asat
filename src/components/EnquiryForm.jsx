import React, { useState } from 'react';
import { triggerEnquiryConfetti } from '../utils/confetti';
import { 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  User, 
  Users, 
  Mail, 
  Phone, 
  BookOpen, 
  GraduationCap, 
  MessageSquare, 
  ShieldCheck,
  Sparkles,
  ArrowRight,
  Clock,
  Printer
} from 'lucide-react';

export default function EnquiryForm({ preselectedClass = '', preselectedSubject = '', onSuccess }) {
  const [formData, setFormData] = useState({
    studentName: '',
    parentName: '',
    email: '',
    phone: '',
    grade: preselectedClass || '',
    preferredSubject: preselectedSubject || '',
    message: '',
    parentConsent: false,
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);

  const gradeOptions = [
    { value: 'Class 6', label: 'Class 6 (Foundation)' },
    { value: 'Class 7', label: 'Class 7 (Foundation)' },
    { value: 'Class 8', label: 'Class 8 (Foundation)' },
    { value: 'Class 9', label: 'Class 9 (Academic Development)' },
    { value: 'Class 10', label: 'Class 10 (Academic Development)' },
    { value: 'Class 11', label: 'Class 11 (Advanced Learning)' },
    { value: 'Class 12', label: 'Class 12 (Advanced Learning)' },
  ];

  const subjectOptions = [
    'All Core Subjects (Integrated Program)',
    'Mathematics & Analytical Logic',
    'Physics & Conceptual Sciences',
    'Chemistry & Molecular Sciences',
    'Biology & Living Systems',
    'Computer Science & Algorithmic Thinking',
    'Social Sciences & Critical Expression',
  ];

  const validate = () => {
    const errs = {};
    if (!formData.studentName.trim()) {
      errs.studentName = 'Student name is required';
    } else if (formData.studentName.trim().length < 2) {
      errs.studentName = 'Name must be at least 2 characters';
    }

    if (!formData.parentName.trim()) {
      errs.parentName = 'Parent or Guardian name is required for student registration';
    }

    if (!formData.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address';
    }

    if (!formData.phone.trim()) {
      errs.phone = 'Contact number is required';
    } else if (!/^[0-9+-\s]{8,15}$/.test(formData.phone)) {
      errs.phone = 'Please enter a valid contact phone number';
    }

    if (!formData.grade) {
      errs.grade = 'Please select student current class/grade';
    }

    if (!formData.preferredSubject) {
      errs.preferredSubject = 'Please select preferred subject area';
    }

    if (!formData.parentConsent) {
      errs.parentConsent = 'Parent/guardian consent acknowledgement is required for students under 18.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate reliable API submission and local persistence
    setTimeout(() => {
      const refId = `ASAT-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
      const result = {
        ...formData,
        refId,
        date: new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }),
        timestamp: new Date().toISOString()
      };

      // Persist to localStorage for local record keeping
      try {
        const existing = JSON.parse(localStorage.getItem('calmbytes_enquiries') || '[]');
        existing.unshift(result);
        localStorage.setItem('calmbytes_enquiries', JSON.stringify(existing));
      } catch (err) {
        console.warn('Failed to persist enquiry:', err);
      }

      setSubmittedData(result);
      setIsSubmitting(false);
      triggerEnquiryConfetti();
      if (onSuccess) onSuccess(result);
    }, 800);
  };

  const handleReset = () => {
    setSubmittedData(null);
    setFormData({
      studentName: '',
      parentName: '',
      email: '',
      phone: '',
      grade: '',
      preferredSubject: '',
      message: '',
      parentConsent: false,
    });
    setErrors({});
  };

  const downloadReceipt = () => {
    if (!submittedData) return;
    const content = `CALMBYTES ACADEMY – ASAT
Student Admission & Academic Enquiry Receipt
--------------------------------------------------
Enquiry Reference ID : ${submittedData.refId}
Date Registered      : ${submittedData.date}
Student Name         : ${submittedData.studentName}
Parent / Guardian    : ${submittedData.parentName}
Class / Grade        : ${submittedData.grade}
Subject Area         : ${submittedData.preferredSubject}
Email Contact        : ${submittedData.email}
Phone Contact        : ${submittedData.phone}
Parent Consent       : Verified (Student under 18)
Message / Goals      : ${submittedData.message || 'N/A'}
--------------------------------------------------
Admissions Desk: admissions@calmbytes.edu
Calmbytes Academy – "Every Student Has a Thought. Every Thought Has Value."
Philosophy: Learn. Think. Share. Engage. Earn.
--------------------------------------------------`;
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Calmbytes-Enquiry-${submittedData.refId}.txt`;
    link.click();
    URL.revokeObjectURL(url);
  };

  if (submittedData) {
    return (
      <div className="bg-white rounded-3xl p-6 sm:p-10 border border-emerald-200 shadow-card text-center max-w-2xl mx-auto space-y-6">
        <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-md">
          <CheckCircle2 className="w-8 h-8" />
        </div>

        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
            Enquiry Registered Successfully
          </span>
          <h3 className="mt-3 text-2xl sm:text-3xl font-extrabold text-slate-900 font-display">
            Welcome to Calmbytes Academy!
          </h3>
          <p className="mt-2 text-sm text-slate-600 max-w-lg mx-auto">
            Thank you, <strong className="text-slate-800">{submittedData.parentName}</strong> and <strong className="text-slate-800">{submittedData.studentName}</strong>. Your enquiry has been received by our academic admissions council.
          </p>
        </div>

        {/* Enquiry Reference Card */}
        <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 text-left text-xs sm:text-sm space-y-3">
          <div className="flex items-center justify-between border-b border-slate-200 pb-2">
            <span className="text-slate-500 font-medium">Enquiry Reference ID:</span>
            <span className="font-mono font-bold text-brand-blue-600">{submittedData.refId}</span>
          </div>
          <div className="flex items-center justify-between border-b border-slate-200 pb-2">
            <span className="text-slate-500 font-medium">Selected Class:</span>
            <span className="font-semibold text-slate-800">{submittedData.grade}</span>
          </div>
          <div className="flex items-center justify-between border-b border-slate-200 pb-2">
            <span className="text-slate-500 font-medium">Subject Interest:</span>
            <span className="font-semibold text-slate-800">{submittedData.preferredSubject}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-slate-500 font-medium">Confirmation Contact:</span>
            <span className="font-semibold text-slate-800">{submittedData.email} | {submittedData.phone}</span>
          </div>
        </div>

        {/* Next Steps Guidance */}
        <div className="p-4 rounded-xl bg-blue-50/70 border border-blue-100 flex items-start gap-3 text-left">
          <Clock className="w-5 h-5 text-brand-blue-600 flex-shrink-0 mt-0.5" />
          <div className="text-xs text-slate-700 leading-relaxed">
            <span className="font-bold text-blue-900 block mb-0.5">What Happens Next:</span>
            Our academic coordinator will reach out to the registered parent/guardian within <strong>24 business hours</strong> to discuss the student's learning profile and schedule a complimentary conceptual orientation.
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <button
            onClick={downloadReceipt}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors"
          >
            <Printer className="w-4 h-4 text-brand-blue-600" />
            <span>Download Receipt (.txt)</span>
          </button>

          <button
            onClick={() => window.print()}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors"
          >
            <span>Print View</span>
          </button>
          
          <button
            onClick={handleReset}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl text-xs font-bold text-white bg-brand-blue-600 hover:bg-brand-blue-700 shadow-sm transition-colors"
          >
            <span>Submit Another Enquiry</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      
      {/* Informative Header Note for Parents */}
      <div className="p-4 rounded-2xl bg-blue-50/80 border border-blue-200/80 flex items-start gap-3">
        <ShieldCheck className="w-5 h-5 text-brand-blue-600 flex-shrink-0 mt-0.5" />
        <div className="text-xs text-slate-700 leading-relaxed">
          <span className="font-bold text-blue-950 block mb-0.5">
            Student-Centred Academic Registration (Classes 6 to 12)
          </span>
          To safeguard young learners and tailor educational pathways accurately, parent or guardian participation is integral to all Calmbytes Academy registrations.
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        
        {/* Student Name */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
            Student Full Name <span className="text-rose-500">*</span>
          </label>
          <div className="relative">
            <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              name="studentName"
              value={formData.studentName}
              onChange={handleChange}
              placeholder="e.g. Aarav Sharma"
              className={`w-full pl-10 pr-4 py-2.5 rounded-xl text-sm border bg-white focus:outline-none focus:ring-2 transition-all ${
                errors.studentName 
                  ? 'border-rose-400 focus:ring-rose-200 bg-rose-50/30' 
                  : 'border-slate-300 focus:border-brand-blue-500 focus:ring-brand-blue-100'
              }`}
            />
          </div>
          {errors.studentName && (
            <p className="mt-1 text-xs text-rose-500 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5" />
              <span>{errors.studentName}</span>
            </p>
          )}
        </div>

        {/* Parent / Guardian Name */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
            Parent / Guardian Name <span className="text-rose-500">*</span>
          </label>
          <div className="relative">
            <Users className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              name="parentName"
              value={formData.parentName}
              onChange={handleChange}
              placeholder="e.g. Dr. Rajesh Sharma"
              className={`w-full pl-10 pr-4 py-2.5 rounded-xl text-sm border bg-white focus:outline-none focus:ring-2 transition-all ${
                errors.parentName 
                  ? 'border-rose-400 focus:ring-rose-200 bg-rose-50/30' 
                  : 'border-slate-300 focus:border-brand-blue-500 focus:ring-brand-blue-100'
              }`}
            />
          </div>
          {errors.parentName && (
            <p className="mt-1 text-xs text-rose-500 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5" />
              <span>{errors.parentName}</span>
            </p>
          )}
        </div>

        {/* Email Address */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
            Email Address <span className="text-rose-500">*</span>
          </label>
          <div className="relative">
            <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="parent.or.student@example.com"
              className={`w-full pl-10 pr-4 py-2.5 rounded-xl text-sm border bg-white focus:outline-none focus:ring-2 transition-all ${
                errors.email 
                  ? 'border-rose-400 focus:ring-rose-200 bg-rose-50/30' 
                  : 'border-slate-300 focus:border-brand-blue-500 focus:ring-brand-blue-100'
              }`}
            />
          </div>
          {errors.email && (
            <p className="mt-1 text-xs text-rose-500 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5" />
              <span>{errors.email}</span>
            </p>
          )}
        </div>

        {/* Contact Phone Number */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
            Contact Number <span className="text-rose-500">*</span>
          </label>
          <div className="relative">
            <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+91 98765 43210"
              className={`w-full pl-10 pr-4 py-2.5 rounded-xl text-sm border bg-white focus:outline-none focus:ring-2 transition-all ${
                errors.phone 
                  ? 'border-rose-400 focus:ring-rose-200 bg-rose-50/30' 
                  : 'border-slate-300 focus:border-brand-blue-500 focus:ring-brand-blue-100'
              }`}
            />
          </div>
          {errors.phone && (
            <p className="mt-1 text-xs text-rose-500 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5" />
              <span>{errors.phone}</span>
            </p>
          )}
        </div>

        {/* Class / Grade Selector */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
            Class / Grade Level <span className="text-rose-500">*</span>
          </label>
          <div className="relative">
            <GraduationCap className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
            <select
              name="grade"
              value={formData.grade}
              onChange={handleChange}
              className={`w-full pl-10 pr-4 py-2.5 rounded-xl text-sm border bg-white focus:outline-none focus:ring-2 transition-all appearance-none ${
                errors.grade 
                  ? 'border-rose-400 focus:ring-rose-200 bg-rose-50/30' 
                  : 'border-slate-300 focus:border-brand-blue-500 focus:ring-brand-blue-100'
              }`}
            >
              <option value="">Select Student Class (6 to 12)...</option>
              {gradeOptions.map((g) => (
                <option key={g.value} value={g.value}>{g.label}</option>
              ))}
            </select>
          </div>
          {errors.grade && (
            <p className="mt-1 text-xs text-rose-500 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5" />
              <span>{errors.grade}</span>
            </p>
          )}
        </div>

        {/* Preferred Subject */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
            Preferred Subject Focus <span className="text-rose-500">*</span>
          </label>
          <div className="relative">
            <BookOpen className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
            <select
              name="preferredSubject"
              value={formData.preferredSubject}
              onChange={handleChange}
              className={`w-full pl-10 pr-4 py-2.5 rounded-xl text-sm border bg-white focus:outline-none focus:ring-2 transition-all appearance-none ${
                errors.preferredSubject 
                  ? 'border-rose-400 focus:ring-rose-200 bg-rose-50/30' 
                  : 'border-slate-300 focus:border-brand-blue-500 focus:ring-brand-blue-100'
              }`}
            >
              <option value="">Select Subject Interest...</option>
              {subjectOptions.map((sub, i) => (
                <option key={i} value={sub}>{sub}</option>
              ))}
            </select>
          </div>
          {errors.preferredSubject && (
            <p className="mt-1 text-xs text-rose-500 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5" />
              <span>{errors.preferredSubject}</span>
            </p>
          )}
        </div>

      </div>

      {/* Enquiry Message */}
      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
          Enquiry Message & Learning Goals <span className="text-slate-400 font-normal">(Optional)</span>
        </label>
        <div className="relative">
          <MessageSquare className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-400" />
          <textarea
            name="message"
            rows="3"
            value={formData.message}
            onChange={handleChange}
            placeholder="Share any specific learning questions, board (CBSE, ICSE, etc.), or goals you have for Calmbytes Academy..."
            className="w-full pl-10 pr-4 py-2.5 rounded-xl text-sm border border-slate-300 focus:border-brand-blue-500 focus:ring-2 focus:ring-brand-blue-100 bg-white focus:outline-none transition-all"
          />
        </div>
      </div>

      {/* Parent/Guardian Involvement Consent (Mandatory for students under 18) */}
      <div className="pt-1">
        <label className="flex items-start gap-3 cursor-pointer select-none">
          <input
            type="checkbox"
            name="parentConsent"
            checked={formData.parentConsent}
            onChange={handleChange}
            className="mt-1 w-4 h-4 text-brand-blue-600 rounded border-slate-300 focus:ring-brand-blue-500 cursor-pointer"
          />
          <div className="text-xs text-slate-700 leading-snug">
            <span className="font-semibold text-slate-900">
              Parent/Guardian Involvement Acknowledgement:
            </span>{' '}
            I confirm that parent/guardian details provided are accurate and that a parent/guardian is informed and involved in this educational enquiry for Calmbytes Academy – ASAT.
          </div>
        </label>
        {errors.parentConsent && (
          <p className="mt-1.5 text-xs text-rose-500 flex items-center gap-1">
            <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
            <span>{errors.parentConsent}</span>
          </p>
        )}
      </div>

      {/* Submit Button */}
      <div className="pt-2">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-brand-blue-600 via-indigo-600 to-brand-violet-600 hover:shadow-glow shadow-md transition-all duration-200 transform hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              <span>Registering Enquiry...</span>
            </>
          ) : (
            <>
              <Send className="w-4 h-4" />
              <span>Submit Academic Enquiry</span>
            </>
          )}
        </button>
        <p className="text-[11px] text-center text-slate-400 mt-2">
          Safe & Confidential &bull; Classes 6 to 12 &bull; No Spam Guarantee
        </p>
      </div>

    </form>
  );
}

