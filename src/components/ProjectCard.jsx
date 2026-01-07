import React from 'react';
import { ExternalLink, ArrowRight } from 'lucide-react'; // Added ArrowRight for style
import { Link } from 'react-router';

export const ProjectCard = ({ id, title, description, image }) => {

  return (
    <div
      className="
        group relative shrink-0  snap-center
        transition-all duration-700 ease-out
      "
    >
      {/* --- Glass Container --- */}
      <div className="
        relative overflow-hidden rounded-4xl
       
        backdrop-blur-xl shadow-lg dark:shadow-2xl
        border border-white/50 dark:border-white/10
        hover:shadow-indigo-500/20 dark:hover:shadow-indigo-900/30
        transition-all duration-500
      ">
        
        {/* Decorative linear Blob (Visible on Hover) */}
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

        {/* --- Image Section --- */}
        <div className="relative h-64 w-full overflow-hidden">
          {/* Dark Overlay linear */}
          <div className="absolute inset-0 bg-linear-to-t from-slate-900/60 to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
          
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover aspect-video transform group-hover:scale-100.5 transition-transform duration-300 ease-in-out"
          />
          
  
        </div>

        {/* --- Content Section --- */}
        <div className="relative p-6 pt-8 -mt-6 z-20">
          


          {/* Title with linear Text on Hover */}
          <h3 className="text-2xl font-extrabold mb-3 tracking-tight
            text-slate-800 dark:text-white 
            group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r group-hover:from-indigo-600 group-hover:to-indigo-600 dark:group-hover:from-indigo-400 dark:group-hover:to-indigo-400
            transition-all duration-300">
            {title}
          </h3>

          <p className="text-slate-600 dark:text-slate-300 mb-6 line-clamp-3 leading-relaxed text-sm font-medium text-justify italic tracking-tight">
            {description}
          </p>

          {/* --- Action Footer --- */}
          <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-200/50 dark:border-white/10">
            <Link 
              to={`/project/${id}`} 
              className="relative inline-flex items-center gap-2 group/btn"
            >
              <span className="text-slate-900 dark:text-white font-bold text-sm tracking-wide group-hover/btn:text-indigo-600 dark:group-hover/btn:text-indigo-400 transition-colors">
                View Project
              </span>
              <span className="bg-slate-100 p-2 rounded-full group-hover/btn:bg-indigo-500 group-hover/btn:text-white transition-all duration-300">
                <ExternalLink size={14} className="group-hover/btn:rotate-45 transition-transform duration-300" />
              </span>
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
};