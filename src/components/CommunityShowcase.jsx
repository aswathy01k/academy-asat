import React, { useState } from 'react';
import { communityData } from '../data/communityData';
import { 
  FileText, 
  MessageSquareQuote, 
  HelpCircle, 
  Users, 
  Sparkles, 
  Award, 
  ThumbsUp, 
  MessageSquare, 
  CheckCircle2, 
  ShieldAlert,
  ArrowRight,
  TrendingUp,
  Bookmark
} from 'lucide-react';

export default function CommunityShowcase() {
  const [selectedExchangeIndex, setSelectedExchangeIndex] = useState(0);
  const [likedPosts, setLikedPosts] = useState({});

  const toggleLike = (idx) => {
    setLikedPosts((prev) => ({
      ...prev,
      [idx]: !prev[idx]
    }));
  };

  const getPillarIcon = (name) => {
    switch (name) {
      case 'FileText': return <FileText className="w-5 h-5 text-blue-500" />;
      case 'MessageSquareQuote': return <MessageSquareQuote className="w-5 h-5 text-indigo-500" />;
      case 'HelpCircle': return <HelpCircle className="w-5 h-5 text-cyan-500" />;
      case 'Users': return <Users className="w-5 h-5 text-emerald-500" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-amber-500" />;
      case 'Award': return <Award className="w-5 h-5 text-violet-500" />;
      default: return <Sparkles className="w-5 h-5 text-blue-500" />;
    }
  };

  return (
    <div className="w-full space-y-16">
      
      {/* 6 Core Pillars of Knowledge Sharing */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {communityData.pillars.map((pillar) => (
          <div 
            key={pillar.id}
            className="bg-white rounded-2xl p-6 border border-slate-200 shadow-soft hover:shadow-card hover:border-brand-blue-300 transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                  {getPillarIcon(pillar.icon)}
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 border border-slate-200">
                  {pillar.badge}
                </span>
              </div>
              <h4 className="text-base font-bold text-slate-900 font-display">
                {pillar.title}
              </h4>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                {pillar.description}
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center text-xs font-semibold text-brand-blue-600 group-hover:text-brand-blue-700">
              <span>Empowered by LTSER</span>
            </div>
          </div>
        ))}
      </div>

      {/* Visual Demonstration: Digital Collaborative Classroom */}
      <div className="bg-gradient-to-br from-brand-navy-950 via-slate-900 to-brand-navy-900 rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-800 shadow-2xl text-white">
        
        <div className="max-w-3xl mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-bold uppercase tracking-wider mb-3">
            <Users className="w-3.5 h-3.5" />
            <span>Digital Classroom in Action</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold font-display">
            Live Peer Knowledge Exchange
          </h3>
          <p className="mt-2 text-sm text-slate-300 leading-relaxed">
            Students don't just consume lectures; they post intuitive explanations, question each other's reasoning, and turn abstract textbook theorems into shared creative breakthroughs.
          </p>
        </div>

        {/* Tab Selector between Student Posts */}
        <div className="flex flex-wrap gap-2 mb-6">
          {communityData.sampleStudentExchanges.map((exchange, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedExchangeIndex(idx)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                selectedExchangeIndex === idx
                  ? 'bg-brand-blue-600 text-white shadow-glow'
                  : 'bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700'
              }`}
            >
              {exchange.author} &bull; {exchange.grade} ({exchange.topic.split(':')[0]})
            </button>
          ))}
        </div>

        {/* Active Student Exchange Board */}
        {(() => {
          const current = communityData.sampleStudentExchanges[selectedExchangeIndex];
          const isLiked = likedPosts[selectedExchangeIndex];
          const currentUpvotes = current.upvotes + (isLiked ? 1 : 0);

          return (
            <div className="bg-slate-900/90 rounded-2xl border border-slate-700/80 p-5 sm:p-7 backdrop-blur-md">
              
              {/* Header with Student Info */}
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-4 mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-cyan-400 to-blue-600 flex items-center justify-center text-white font-extrabold text-sm shadow-md">
                    {current.author.charAt(0)}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h5 className="text-sm sm:text-base font-bold text-white">
                        {current.author}
                      </h5>
                      <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-blue-500/20 text-cyan-300 border border-blue-500/30">
                        {current.grade}
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 font-mono mt-0.5">
                      Subject Topic: {current.topic}
                    </p>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {current.tags.map((t, i) => (
                    <span key={i} className="text-[10px] bg-slate-800 text-slate-300 px-2.5 py-1 rounded-md border border-slate-700">
                      #{t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Message Content */}
              <div className="bg-slate-950/60 rounded-xl p-4 sm:p-5 border border-slate-800 text-sm text-slate-200 leading-relaxed font-sans">
                <p className="italic text-slate-100">
                  "{current.message}"
                </p>
                <div className="mt-3 flex items-center gap-2 text-xs text-cyan-400 font-medium">
                  <Sparkles className="w-4 h-4" />
                  <span>Includes student-drawn visual diagram & intuition walkthrough</span>
                </div>
              </div>

              {/* Interaction Bar */}
              <div className="mt-5 pt-3 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400">
                <div className="flex items-center gap-4">
                  <button 
                    onClick={() => toggleLike(selectedExchangeIndex)}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border transition-all ${
                      isLiked 
                        ? 'bg-brand-blue-600/30 text-cyan-300 border-cyan-400' 
                        : 'bg-slate-800 hover:bg-slate-700 text-slate-300 border-slate-700'
                    }`}
                  >
                    <ThumbsUp className={`w-3.5 h-3.5 ${isLiked ? 'fill-cyan-400 text-cyan-400' : ''}`} />
                    <span>{currentUpvotes} Helpful Reactions</span>
                  </button>

                  <div className="flex items-center gap-1.5 text-slate-400">
                    <MessageSquare className="w-3.5 h-3.5 text-slate-500" />
                    <span>{current.responses} Peer Discussion Comments</span>
                  </div>
                </div>

                <div className="text-[11px] text-emerald-400 font-mono flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Peer Verified by Mentor Circle</span>
                </div>
              </div>

            </div>
          );
        })()}

      </div>

      {/* Sample Contribution-Points System (Explicitly labeled as illustrative) */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-200 shadow-card">
        
        {/* Prominent Mandatory Disclaimer Alert Box */}
        <div className="mb-8 p-4 rounded-2xl bg-amber-50/80 border border-amber-200/90 flex items-start gap-3">
          <ShieldAlert className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm text-amber-900 leading-relaxed">
            <span className="font-bold uppercase tracking-wider block mb-0.5">
              Illustrative Framework Notice:
            </span>
            {communityData.illustrativePointsModel.disclaimer}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Sample Activity Points */}
          <div className="lg:col-span-7 space-y-4">
            <div>
              <h4 className="text-xl font-extrabold text-slate-900 font-display">
                How Academic Value is Acknowledged
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                At Calmbytes, intellectual generosity is celebrated just like exam scores. Here is an example of how student contributions create ripple effects:
              </p>
            </div>

            <div className="space-y-3 pt-2">
              {communityData.illustrativePointsModel.categories.map((cat, idx) => (
                <div 
                  key={idx}
                  className="p-4 rounded-xl border border-slate-200 bg-slate-50/80 hover:bg-white hover:shadow-soft transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                >
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-2">
                      <span className="text-xs sm:text-sm font-bold text-slate-900">
                        {cat.activity}
                      </span>
                    </div>
                    <p className="text-xs text-slate-500">
                      Impact: {cat.impact}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 flex-shrink-0">
                    <span className="px-2.5 py-1 rounded-md text-xs font-mono font-bold bg-brand-blue-50 text-brand-blue-700 border border-brand-blue-200">
                      {cat.points}
                    </span>
                    <span className="text-[10px] font-semibold text-slate-500 bg-slate-100 px-2 py-1 rounded-md">
                      {cat.badge}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Sample Tier Progression */}
          <div className="lg:col-span-5 bg-slate-900 text-white rounded-2xl p-6 border border-slate-800 space-y-5">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-400">
                Sample Recognition Ladder
              </span>
              <h5 className="text-lg font-bold text-white mt-1">
                From Learner to Community Fellow
              </h5>
              <p className="text-xs text-slate-400 mt-1">
                Recognising consistent contribution and growth over time.
              </p>
            </div>

            <div className="space-y-3">
              {communityData.illustrativePointsModel.sampleTiers.map((tier, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-slate-800/80 border border-slate-700 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-slate-700 flex items-center justify-center text-xs font-bold font-mono text-cyan-300">
                      {idx + 1}
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white">{tier.name}</div>
                      <div className="text-[10px] text-slate-400">{tier.desc}</div>
                    </div>
                  </div>
                  <span className="text-xs font-mono font-bold text-amber-400 bg-slate-900 px-2 py-1 rounded">
                    {tier.threshold}
                  </span>
                </div>
              ))}
            </div>

            <div className="text-[11px] text-slate-400 pt-2 border-t border-slate-800 text-center italic">
              "Every Student Has a Thought. Every Thought Has Value."
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}

