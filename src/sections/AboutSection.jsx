import React from "react";
import { Zap, Heart, Camera } from "lucide-react";

export const AboutSection = () => {

  return (
    <section id="about" className="w-full py-32 px-4 md:px-8">
      <div
        className="max-w-7xl w-full mx-auto"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Bio Text */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            <div className="flex items-center gap-4 text-indigo-500">
              <div className="h-px w-12 bg-indigo-500/50"></div>
              <span className="text-sm font-black uppercase tracking-[0.3em]">
                The Narrative
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white leading-tight">
              Beyond the Code: <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-500 to-indigo-500">
                A Story of Curiosity
              </span>
            </h2>
            <div className="space-y-6 text-base md:text-lg text-slate-700 dark:text-slate-300 leading-relaxed font-sans tracking-wide max-w-3xl mx-auto px-4 md:px-0">
              <p className="text-lg md:text-xl text-slate-700 dark:text-slate-300 font-medium italic text-justify tracking-tight">
                My journey into programming began when I was fascinated by how
                websites could respond to user actions and create interactive
                experiences. This curiosity led me to master frontend
                development and explore basic backend integration, with plans to
                grow into full-stack development.
              </p>

              <p className="text-lg md:text-xl text-slate-700 dark:text-slate-300 font-medium italic text-justify tracking-tight">
                I focus on writing maintainable, high-performance code with
                thoughtful design, ensuring every project is functional,
                polished, and user-friendly.
              </p>

              <p className="text-lg md:text-xl text-slate-700 dark:text-slate-300 font-medium italic text-justify tracking-tight">
             My hobbies—traveling and gaming—keep me energized, sharpen my focus, and inspire new ways of thinking.
              </p>
            </div>
          </div>

          {/* Personality Cards */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            <div className="col-span-2 p-8 rounded-[2.5rem] bg-white/30 dark:bg-white/5 border border-white/40 dark:border-white/10 backdrop-blur-xl flex flex-col justify-between group hover:border-indigo-500/50 transition-all duration-500 shadow-xl">
              <div className="size-14 rounded-2xl bg-indigo-600/10 dark:bg-indigo-500/20 text-indigo-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Zap size={28} />
              </div>
              <div className="mt-12">
                <h4 className="text-slate-900 dark:text-white font-black text-xl mb-2">
                  Philosophy
                </h4>
                <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed italic">
                  Build with intention, design for clarity. Clean, maintainable
                  code and smooth performance define truly elegant solutions.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-[2.5rem] bg-white/30 dark:bg-white/5 border border-white/40 dark:border-white/10 backdrop-blur-xl flex flex-col gap-4 hover:-translate-y-2 transition-all shadow-lg">
              <div className="size-10 rounded-xl bg-pink-500/20 text-pink-500 flex items-center justify-center">
                <Heart size={20} />
              </div>
              <p className="text-slate-900 dark:text-white font-bold text-sm">
                Loves
              </p>
              <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed italic">
                Open Source, Dark Mode, React, Next.js, Tailwind, Clean Folders,
                Eye-Catching UI, Subtle Animations, Micro-Interactions
              </p>
            </div>

            <div className="p-6 rounded-[2.5rem] bg-white/30 dark:bg-white/5 border border-white/40 dark:border-white/10 backdrop-blur-xl flex flex-col gap-4 hover:-translate-y-2 transition-all shadow-lg">
              <div className="size-10 rounded-xl bg-cyan-500/20 text-cyan-500 flex items-center justify-center">
                <Camera size={20} />
              </div>
              <p className="text-slate-900 dark:text-white font-bold text-sm">
                Hobbies
              </p>
              <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed italic">
                Playing Cricket, Video Editing, Traveling
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
