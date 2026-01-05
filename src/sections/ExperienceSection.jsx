import React from 'react';
import { ExperienceItem } from '../components/ExperienceItem';
import { experience } from '../data/experience';

export const ExperienceSection = () => (
  <section id="experience" className="w-full py-32 px-4 md:px-8">
    <div className="max-w-4xl w-full mx-auto">
      <h2 className="text-4xl font-black text-slate-900 dark:text-white mb-24 text-center tracking-tighter uppercase italic">Career Trajectory</h2>
      <div className="relative border-l-2 border-slate-200 dark:border-white/10 ml-6 md:ml-12 space-y-20">
        {experience.map((item) => (
          <ExperienceItem key={item.company} {...item} />
        ))}
      </div>
    </div>
  </section>
);
