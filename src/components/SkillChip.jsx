import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export const SkillChip = ({ icon: Icon, name, colorClass }) => {
  const [ref, isVisible] = useScrollReveal();
  return (
    <div 
      ref={ref}
      className={`group relative flex items-center gap-3 px-6 py-4 rounded-2xl bg-white/40 dark:bg-white/5 border border-white/40 dark:border-white/10 backdrop-blur-md hover:border-indigo-500/50 hover:bg-white/60 dark:hover:bg-indigo-500/10 transition-all duration-500 cursor-default shadow-sm hover:shadow-xl hover:-translate-y-1 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
    >
      <Icon className={`${colorClass} transition-transform duration-500 group-hover:scale-110`} size={24} />
      <span className="text-slate-800 dark:text-white font-semibold">{name}</span>
    </div>
  );
};
