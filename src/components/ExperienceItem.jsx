import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export const ExperienceItem = ({ role, company, period, description, skills, isLatest }) => {
  const [ref, isVisible] = useScrollReveal();
  return (
    <div ref={ref} className={`relative pl-8 md:pl-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
      <div className={`absolute -left-2.25 top-0 h-4.5 w-4.5 rounded-full bg-white dark:bg-slate-900 border-4 ${isLatest ? 'border-indigo-500 animate-pulse' : 'border-slate-400 dark:border-slate-600'}`}></div>
      <div className="flex flex-col md:flex-row gap-6 md:gap-12">
        <div className="md:w-1/3">
          <h4 className="text-slate-900 dark:text-white font-bold text-xl">{role}</h4>
          <p className="text-indigo-600 dark:text-indigo-400 font-bold mt-1 uppercase text-xs tracking-widest">{company}</p>
          <p className="text-slate-400 text-sm mt-2">{period}</p>
        </div>
        <div className="md:w-2/3 bg-white/20 dark:bg-white/5 border border-white/30 dark:border-white/10 p-8 rounded-4xl backdrop-blur-md hover:bg-white/40 dark:hover:bg-white/10 transition-all shadow-sm">
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">{description}</p>
          <div className="flex flex-wrap gap-2">
            {skills.map(skill => (
              <span key={skill} className="text-[10px] font-bold text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-white/10 px-3 py-1 rounded-full uppercase tracking-tighter bg-white/50 dark:bg-transparent">{skill}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
