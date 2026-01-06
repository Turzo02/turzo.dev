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

const ProjectDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const project = projects.find((p) => p.id === Number(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project)
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950 text-slate-500 dark:text-slate-400">
        Project not found
      </div>
    );

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-200 selection:bg-cyan-500/30 relative overflow-hidden font-sans transition-colors duration-500">
      {/* 1. Dynamic Background Orbs (Adjusted for Light/Dark) */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-125 h-12 bg-violet-400/30 dark:bg-violet-600/20 rounded-full blur-[80px] dark:blur-[120px]" />
        <div className="absolute bottom-[10%] right-[-5%] w-150 h-150 bg-cyan-400/20 dark:bg-cyan-600/10 rounded-full blur-[80px] dark:blur-[120px]" />
        <div className="absolute top-[40%] left-[30%] h-75 w-75 bg-fuchsia-400/20 dark:bg-fuchsia-600/10 rounded-full blur-[60px] dark:blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-30 ">
        {/* 2. Navigation */}
        <button
          onClick={() => navigate("/")}
          className="group mb-12 flex items-center gap-3 text-sm font-bold text-slate-600 cursor-pointer dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-all uppercase tracking-widest"
        >
          <div className="p-2 rounded-full border  border-slate-200 dark:border-white/10 bg-white/50 dark:bg-white/5 group-hover:bg-cyan-50 dark:group-hover:bg-cyan-500/20 group-hover:border-cyan-200 dark:group-hover:border-cyan-500/50 transition-all shadow-sm">
            <ArrowLeft size={16} />
          </div>
          Back to HomePage
        </button>

        {/* 3. Hero Section (Title & Image) */}
        <div className="space-y-10 mb-20 animate-in fade-in slide-in-from-bottom-8 duration-700">
          <div className="max-w-4xl">
            <div className="flex flex-wrap gap-3 mb-6">
              {project.tags.map((tag, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-xs font-bold uppercase tracking-widest text-cyan-700 dark:text-cyan-300 bg-cyan-100 dark:bg-cyan-900/20 border border-cyan-200 dark:border-cyan-500/20 rounded-full shadow-sm dark:shadow-[0_0_10px_rgba(34,211,238,0.1)]"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white leading-tight tracking-tight mb-6">
              {project.title}
            </h1>
          </div>

          {/* Cinematic Image Container with Floating Dock */}
          <div className="relative w-full rounded-4xl overflow-hidden border border-slate-200 dark:border-white/10 shadow-2xl shadow-slate-200/50 dark:shadow-black/50 group bg-white dark:bg-slate-900">
            {/* Glass Overlay on Image Hover */}
            <div className="absolute inset-0 bg-linear-to-t from-slate-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

            <img
              src={project.image}
              alt={project.title}
              className="w-full object-cover aspect-video md:aspect-21/9 transform group-hover:scale-105 transition-transform duration-1000 ease-out"
            />

            {/* Floating Glass Dock for Links */}
            <div className="absolute z-20 bottom-6 left-1/2 -translate-x-1/2 md:left-auto md:right-6 md:translate-x-0 flex items-center gap-4 p-2 rounded-2xl bg-white/80 dark:bg-slate-950/40 backdrop-blur-xl border border-slate-200 dark:border-white/10 shadow-xl dark:shadow-2xl">
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-white dark:text-slate-950 rounded-xl font-bold transition-all shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40"
              >
                <ExternalLink size={18} />
                <span className="hidden sm:inline">Live Demo</span>
              </a>
              <a
                href={project.codeUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 text-slate-900 dark:text-white border border-slate-200 dark:border-white/10 rounded-xl font-bold transition-all"
              >
                <Github size={18} />
                <span className="hidden sm:inline">Source Code</span>
              </a>
            </div>
          </div>
        </div>

        {/* 4. Bento Grid Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content (2 Columns) */}
          <div className="lg:col-span-2 space-y-8">
            {/* Description Card */}
            <div className="p-8 rounded-3xl bg-white/60 dark:bg-white/5 backdrop-blur-md border border-slate-200 dark:border-white/10 shadow-sm dark:shadow-none">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                <Layers className="text-violet-600 dark:text-violet-400" />
                Overview
              </h2>
              <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Features Grid */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3 px-2">
                <Cpu className="text-cyan-600 dark:text-cyan-400" />
                Key Features
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.features?.map((feature, idx) => (
                  <div
                    key={idx}
                    className="group p-5 rounded-2xl bg-white/40 dark:bg-white/3 hover:bg-white/80 dark:hover:bg-white/[0.07] border border-slate-200 dark:border-white/5 hover:border-cyan-500/30 transition-all duration-300 shadow-sm hover:shadow-md dark:shadow-none"
                  >
                    <div className="flex items-start gap-4">
                      <div className="mt-1 min-w-2 h-2 rounded-full bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.6)] group-hover:scale-150 transition-transform" />
                      <p className="text-slate-700 dark:text-slate-300 text-sm font-medium leading-relaxed group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                        {feature}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar Content (1 Column) */}
          <div className="space-y-8">
            {/* Challenges Card */}
            <div className="p-8 rounded-3xl bg-orange-50/50 dark:bg-linear-to-br dark:from-orange-500/10 dark:to-transparent border border-orange-200 dark:border-orange-500/20 backdrop-blur-md relative overflow-hidden group shadow-sm dark:shadow-none">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity text-orange-500">
                <Zap size={80} />
              </div>
              <h3 className="text-xl font-bold text-orange-600 dark:text-orange-400 mb-4 flex items-center gap-2">
                <AlertCircle size={20} /> Challenges
              </h3>
              <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
                {project.challenges}
              </p>
            </div>

            {/* Improvements Card */}
            <div className="p-8 rounded-3xl bg-emerald-50/50 dark:bg-linear-to-br dark:from-emerald-500/10 dark:to-transparent border border-emerald-200 dark:border-emerald-500/20 backdrop-blur-md relative overflow-hidden group shadow-sm dark:shadow-none">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity text-emerald-500">
                <Rocket size={80} />
              </div>
              <h3 className="text-xl font-bold text-emerald-600 dark:text-emerald-400 mb-4 flex items-center gap-2">
                <Code2 size={20} /> Future Plans
              </h3>
              <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
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
