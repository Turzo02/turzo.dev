import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ProjectCard } from '../components/ProjectCard';
import { projects } from '../data/projects';

const ProjectsSection = () => {
  return (
     <section id="projects" className="w-full py-32 bg-indigo-500/5 dark:bg-white/2">
    <div className="max-w-7xl w-full mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 px-4 md:px-12">
        <div className="max-w-xl">
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-6 leading-none">SIGNATURE WORKS</h2>
          <p className="text-slate-500 dark:text-slate-400 font-medium">Experimental builds and commercial projects that push the boundaries of frontend engineering.</p>
        </div>
        <div className="hidden md:flex gap-4">
          <button className="size-14 rounded-2xl border border-slate-300 dark:border-white/10 bg-white/40 dark:bg-white/5 hover:bg-indigo-500 hover:text-white flex items-center justify-center transition-all shadow-sm">
            <ChevronLeft />
          </button>
          <button className="size-14 rounded-2xl border border-slate-300 dark:border-white/10 bg-indigo-600 text-white flex items-center justify-center transition-all shadow-xl shadow-indigo-500/20 active:scale-90">
            <ChevronRight />
          </button>
        </div>
      </div>
      <div className="flex overflow-x-auto gap-8 pb-12 px-4 md:px-12 no-scrollbar snap-x snap-mandatory">
        {projects.map(p => <ProjectCard key={p.title} {...p} />)}
      </div>
    </div>
  </section>
  );
};

export default ProjectsSection;