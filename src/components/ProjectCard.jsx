import React from 'react';
import { ExternalLink, Code2 } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Link } from 'react-router';

export const ProjectCard = ({ id, title, description, tags, image, demoUrl, codeUrl }) => {
  const [ref, isVisible] = useScrollReveal();
  console.log(id)
  return (
    <div 
      ref={ref}
      className={`snap-center shrink-0 w-[85vw] md:w-150 bg-white/30 dark:bg-white/5 border border-white/40 dark:border-white/10 rounded-3xl overflow-hidden hover:border-indigo-500/40 transition-all duration-700 group shadow-lg hover:shadow-indigo-500/10 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}
    >
      <div className="h-80 w-full overflow-hidden relative">
        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
        />
        <div className="absolute top-4 right-4 z-20 flex gap-2">
          {tags.map(tag => (
            <span key={tag} className="px-3 py-1 bg-white/20 dark:bg-black/40 backdrop-blur-xl rounded-full text-[10px] font-bold text-slate-800 dark:text-white border border-white/20 uppercase tracking-widest">
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="p-8">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-indigo-500 transition-colors">{title}</h3>
        <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">{description}</p>
        <div className="flex gap-6">
          <Link to={`/project/${id}`} className="text-indigo-600 dark:text-indigo-400 font-bold hover:gap-2 transition-all flex items-center gap-1">
            Live Demo <ExternalLink size={16} />
          </Link>

        </div>
      </div>
    </div>
  );
};


