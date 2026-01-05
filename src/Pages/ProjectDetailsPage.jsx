import React from 'react';
import { 
  ArrowLeft, 
  ExternalLink, 
  Github, 
  Zap, 
  Compass, 
  Cpu, 
  Monitor, 
  Code2, 
  CheckCircle2 
} from 'lucide-react';

const ProjectDetails = ({ project, onBack }) => {
  // If no project is selected (e.g., direct URL access or state loss), return nothing or a loader
  if (!project) return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-spin size-8 border-4 border-indigo-500 border-t-transparent rounded-full"></div>
    </div>
  );

  return (
    <div className="min-h-screen pt-32 pb-20 px-4 md:px-8 max-w-6xl mx-auto animate-in fade-in slide-in-from-bottom-6 duration-700">
      
      {/* Navigation Header */}
      <button 
        onClick={onBack}
        className="group mb-12 flex items-center gap-3 text-slate-500 dark:text-slate-400 hover:text-indigo-500 dark:hover:text-white transition-all font-black uppercase tracking-[0.2em] text-xs"
      >
        <div className="size-10 rounded-2xl bg-white/10 dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-all shadow-lg group-hover:rotate-[-10deg]">
          <ArrowLeft size={18} />
        </div>
        Back to Gallery
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        
        {/* Left Column: Visuals & Tech Summary */}
        <div className="lg:col-span-7 space-y-10">
          {/* Main Visual */}
          <div className="relative rounded-[3rem] overflow-hidden border border-white/40 dark:border-white/10 shadow-2xl group">
            <div className="absolute inset-0 bg-linear-to-tr from-indigo-500/20 to-transparent mix-blend-overlay z-10 pointer-events-none" />
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover aspect-16/10 group-hover:scale-105 transition-transform duration-3000"
            />
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <a 
              href={project.demoUrl} 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 h-16 bg-indigo-600 text-white rounded-2xl font-black uppercase tracking-widest hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-500/20 active:scale-95"
            >
              Launch Live Site <ExternalLink size={20} />
            </a>
            <a 
              href={project.codeUrl} 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 h-16 bg-white/20 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white rounded-2xl font-black uppercase tracking-widest hover:border-indigo-500/50 transition-all backdrop-blur-xl active:scale-95"
            >
              Client GitHub <Github size={20} />
            </a>
          </div>

          {/* Mobile visible description (hidden on desktop) */}
          <div className="lg:hidden">
             <h2 className="text-sm font-black text-indigo-500 uppercase tracking-widest mb-4">Summary</h2>
             <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">{project.description}</p>
          </div>
        </div>

        {/* Right Column: Deep Dive Content */}
        <div className="lg:col-span-5 flex flex-col gap-8">
          
          {/* Header Info */}
          <div>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map(tag => (
                <span key={tag} className="px-4 py-1.5 bg-indigo-500/10 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-400 text-[11px] font-black uppercase tracking-widest rounded-full border border-indigo-500/20 backdrop-blur-md">
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white tracking-tighter mb-8 leading-[0.9]">
              {project.title}
            </h1>
            <p className="hidden lg:block text-xl text-slate-600 dark:text-slate-400 leading-relaxed font-medium mb-4">
              {project.description}
            </p>
          </div>

          {/* Challenges Section */}
          <section className="p-8 rounded-[2.5rem] bg-white/40 dark:bg-white/5 border border-white/40 dark:border-white/10 backdrop-blur-2xl shadow-xl group hover:border-orange-500/30 transition-all duration-500">
            <div className="flex items-center gap-4 mb-6 text-orange-500">
              <div className="size-12 rounded-2xl bg-orange-500/10 flex items-center justify-center group-hover:rotate-12 transition-transform">
                <Zap size={24} />
              </div>
              <h3 className="font-black uppercase tracking-[0.2em] text-xs">Technical Challenges</h3>
            </div>
            <div className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed space-y-4">
              {project.challenges ? (
                <p>{project.challenges}</p>
              ) : (
                <p>Navigating the complexities of distributed state management and real-time synchronization using IPFS nodes. The primary hurdle was ensuring a seamless UI update cycle during heavy audio packet decryption.</p>
              )}
            </div>
          </section>

          {/* Roadmap Section */}
          <section className="p-8 rounded-[2.5rem] bg-white/40 dark:bg-white/5 border border-white/40 dark:border-white/10 backdrop-blur-2xl shadow-xl group hover:border-emerald-500/30 transition-all duration-500">
            <div className="flex items-center gap-4 mb-6 text-emerald-500">
              <div className="size-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center group-hover:-rotate-12 transition-transform">
                <Compass size={24} />
              </div>
              <h3 className="font-black uppercase tracking-[0.2em] text-xs">Future Roadmap</h3>
            </div>
            <div className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6">
              {project.potentialImprovements ? (
                 <p>{project.potentialImprovements}</p>
              ) : (
                 <p>Implementing a custom caching layer to reduce peer lookup latency and adding native mobile push notifications for community curation alerts.</p>
              )}
            </div>
            <ul className="grid grid-cols-1 gap-3">
              {["PWA Implementation", "Enhanced Analytics", "Multi-chain Support"].map((step, idx) => (
                <li key={idx} className="flex items-center gap-3 text-xs font-bold text-slate-500 dark:text-slate-400">
                  <CheckCircle2 size={14} className="text-emerald-500" /> {step}
                </li>
              ))}
            </ul>
          </section>

          {/* Bottom Badge */}
          <div className="p-6 bg-indigo-500/5 dark:bg-white/3 border border-dashed border-indigo-500/30 rounded-3xl flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Cpu className="text-indigo-500" size={20} />
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Status: Optimized</span>
            </div>
            <div className="flex items-center gap-3">
              <Code2 className="text-indigo-500" size={20} />
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Stack: Verified</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;