import React from 'react';
import { SkillChip } from '../components/SkillChip';
import { skills } from '../data/skills';

export const SkillsSection = () => (
  <section id="skills" className="w-full py-32 px-4 md:px-8">
    <div className="max-w-7xl w-full mx-auto">
      <div className="flex flex-col items-center mb-20">
        <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">Technical Expertise</h2>
        <div className="h-1.5 w-24 bg-linear-to-r from-indigo-500 to-cyan-400 rounded-full"></div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {skills.map(s => <SkillChip key={s.name} {...s} />)}
      </div>
    </div>
  </section>
);
