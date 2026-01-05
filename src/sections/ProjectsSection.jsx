import React from 'react';
import { ProjectCard } from '../components/ProjectCard';
import { projects } from '../data/projects';

const ProjectsSection = () => {
  return (
    <section id="projects" className="w-full py-20 md:py-32  px-4 lg:px-8">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16 md:mb-24">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-8 h-0.5 bg-indigo-500"></span>
              <span className="text-indigo-500 font-bold tracking-widest text-sm uppercase">Selected Portfolio</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white mb-6 tracking-tight leading-[0.9]">
              SIGNATURE <br className="hidden md:block" /> WORKS
            </h2>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
              Experimental builds and commercial projects that push the boundaries of frontend engineering.
            </p>
          </div>
          
          {/* Optional Counter for UI Polish */}
          <div className="hidden md:block">
            <span className="text-8xl font-black text-slate-400 dark:text-white/5 select-none">
              {projects.length.toString().padStart(2, '0')}
            </span>
          </div>
        </div>
        {/* Responsive Grid System */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-4 lg:gap-6">
          {projects.map((p, i) => (
            <div key={i} > 
              <ProjectCard {...p} />
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default ProjectsSection;