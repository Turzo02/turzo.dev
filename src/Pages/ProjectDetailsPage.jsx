import React, { useEffect } from "react";
import {
  ArrowLeft,
  ExternalLink,
  Github,
  Zap,
  Rocket,
  Layers,
  Cpu,
  Code2,
  AlertCircle,
} from "lucide-react";
import { useNavigate, useParams } from "react-router";
import { projects } from "../data/projects";
import AmbientCursorHalo from "../components/Glow/AmbientCursorHalo";

const ProjectDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const project = projects.find((p) => p.id === Number(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project)
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950 text-slate-500 dark:text-slate-400 font-medium tracking-tight">
        Project not found
      </div>
    );

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-200 selection:bg-cyan-500/30 relative overflow-hidden font-sans transition-colors duration-500">
      <title>{project.title}</title>
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-125 h-12 bg-violet-400/30 dark:bg-violet-600/20 rounded-full blur-[80px] dark:blur-[120px]" />
        <div className="absolute bottom-[10%] right-[-5%] w-150 h-150 bg-cyan-400/20 dark:bg-cyan-600/10 rounded-full blur-[80px] dark:blur-[120px]" />
        <div className="absolute top-[40%] left-[30%] h-75 w-75 bg-fuchsia-400/20 dark:bg-fuchsia-600/10 rounded-full blur-[60px] dark:blur-[100px]" />
      </div>
      <AmbientCursorHalo></AmbientCursorHalo>

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-30 ">
        {/* 2. Navigation - Refined Tracking & Weight */}
        <button
          onClick={() => navigate("/")}
          className="group mb-12 flex items-center gap-3 text-[11px] font-black text-slate-500 cursor-pointer dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-all uppercase tracking-[0.2em]"
        >
          <div className="p-2 rounded-full border border-slate-200 dark:border-white/10 bg-white/50 dark:bg-white/5 group-hover:bg-cyan-50 dark:group-hover:bg-cyan-500/20 group-hover:border-cyan-200 dark:group-hover:border-cyan-500/50 transition-all shadow-sm">
            <ArrowLeft size={14} />
          </div>
          Back to HomePage
        </button>

        {/* 3. Hero Section - Ultra Bold Headline */}
        <div className="space-y-10 mb-20 animate-in fade-in slide-in-from-bottom-8 duration-700">
          <div className="max-w-4xl">
            <div className="flex flex-wrap gap-3 mb-8">
              {project.tags.map((tag, i) => (
                <span
                  key={i}
                  className="px-4 py-1 text-[10px] font-extrabold uppercase tracking-[0.15em] text-cyan-700 dark:text-cyan-300 bg-cyan-100 dark:bg-cyan-900/20 border border-cyan-200 dark:border-cyan-500/20 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="text-6xl md:text-8xl font-black text-slate-900 dark:text-white leading-[0.9] tracking-tighter mb-8 italic">
              {project.title}
            </h1>
          </div>

          <div className="relative w-full rounded-4xl overflow-hidden border border-slate-200 dark:border-white/10 shadow-2xl shadow-slate-200/50 dark:shadow-black/50 group bg-white dark:bg-slate-900">
            <div className="absolute inset-0 bg-linear-to-t from-slate-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

            <img
              src={project.image}
              alt={project.title}
              className="w-full object-cover aspect-video md:aspect-21/9 transform group-hover:scale-101 transition-transform duration-1000 ease-out"
            />

            <div className="absolute z-20 bottom-6 left-1/2 -translate-x-1/2 md:left-auto md:right-6 md:translate-x-0 flex items-center gap-4 p-2 rounded-2xl bg-white/80 dark:bg-slate-950/40 backdrop-blur-xl border border-slate-200 dark:border-white/10 shadow-xl dark:shadow-2xl">
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-white dark:text-slate-950 rounded-xl font-extrabold text-sm uppercase tracking-wider transition-all shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40"
              >
                <ExternalLink size={18} />
                <span className="hidden sm:inline">Live Demo</span>
              </a>
              <a
                href={project.codeUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 text-slate-900 dark:text-white border border-slate-200 dark:border-white/10 rounded-xl font-extrabold text-sm uppercase tracking-wider transition-all"
              >
                <Github size={18} />
                <span className="hidden sm:inline">Source Code</span>
              </a>
            </div>
          </div>
        </div>

        {/* 4. Bento Grid Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {/* Description Card - High Readability Body Text */}
            <div className="p-10 rounded-3xl bg-white/60 dark:bg-white/5 backdrop-blur-md border border-slate-200 dark:border-white/10 shadow-sm dark:shadow-none">
              <h2 className="text-xs font-black uppercase tracking-[0.3em] text-violet-600 dark:text-violet-400 mb-6 flex items-center gap-3">
                <Layers size={18} />
                Overview
              </h2>
              <p className="text-xl md:text-2xl font-medium text-slate-800 dark:text-slate-100 leading-tight tracking-tight text-justify italic">
                {project.description}
              </p>
            </div>

            {/* Features Grid */}
            <div>
              <h2 className="text-xs font-black uppercase tracking-[0.3em] text-cyan-600 dark:text-cyan-400 mb-6 flex items-center gap-3 px-2">
                <Cpu size={18} />
                Core Capabilities
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.features?.map((feature, idx) => (
                  <div
                    key={idx}
                    className="group p-6 rounded-2xl bg-white/40 dark:bg-white/3 hover:bg-white/80 dark:hover:bg-white/[0.07] border border-slate-200 dark:border-white/5 hover:border-cyan-500/30 transition-all duration-300 shadow-sm hover:shadow-md dark:shadow-none"
                  >
                    <div className="flex items-start gap-4">
                      <div className="mt-1.5 min-w-1.5 h-1.5 rounded-full bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.6)] group-hover:scale-150 transition-transform" />
                      <p className="text-slate-600 dark:text-slate-400 text-[15px] font-semibold leading-snug group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                        {feature}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar Content */}
          <div className="space-y-8">
            <div className="p-8 rounded-3xl bg-white/60 dark:bg-white/5 dark:bg-linear-to-br dark:from-orange-500/10 dark:to-transparent dark:border-orange-500/20 backdrop-blur-md relative overflow-hidden group shadow-sm dark:shadow-none">
              <h3 className="text-[11px] font-black uppercase tracking-[0.2em] text-orange-600 dark:text-orange-400 mb-6 flex items-center gap-2">
                <AlertCircle size={16} /> Technical Challenges
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm font-medium leading-relaxed italic tracking-tight text-justify">
                {project.challenges}
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white/60 dark:bg-white/5 dark:bg-linear-to-br dark:from-emerald-500/10 dark:to-transparent border border-emerald-200 dark:border-emerald-500/20 backdrop-blur-md relative overflow-hidden group shadow-sm dark:shadow-none">
              <h3 className="text-[11px] font-black uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-400 mb-6 flex items-center gap-2">
                <Code2 size={16} /> Roadmap
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm font-medium leading-relaxed italic tracking-tight text-justify">
                {project.potentialImprovements}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;