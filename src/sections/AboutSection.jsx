import React from 'react';
import { Zap, Heart, Camera } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export const AboutSection = () => {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section id="about" className="w-full py-32 px-4 md:px-8">
      <div 
        ref={ref}
        className={`max-w-6xl w-full mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Bio Text */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            <div className="flex items-center gap-4 text-indigo-500">
              <div className="h-px w-12 bg-indigo-500/50"></div>
              <span className="text-sm font-black uppercase tracking-[0.3em]">The Narrative</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white leading-tight">
              Beyond the Code: <br/>
              <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-500 to-indigo-500">A Story of Curiosity</span>
            </h2>
            <div className="space-y-6 text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
              <p>
                My journey into the digital realm started with a broken calculator and a persistent "why?". That curiosity evolved into a deep-seated passion for programming, leading me through the intricate landscapes of algorithmic logic and the expressive freedom of UI design. I don't just write code; I architect experiences that feel human.
              </p>
              <p>
                I thrive on the intersection of <span className="text-indigo-500 font-bold">Performance</span> and <span className="text-purple-500 font-bold">Poetry</span>. Whether it's optimizing a React render cycle or perfecting a 60fps micro-interaction, I enjoy work that challenges the status quo of what a "website" can be. 
              </p>
              <p>
                I believe that great developers are built by their lives outside the terminal. When the lid is closed, you'll likely find me capturing urban geometry through my vintage camera lens, playing high-tempo badminton, or getting lost in the rhythmic complexity of jazz-fusion records.
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
                <h4 className="text-slate-900 dark:text-white font-black text-xl mb-2">Philosophy</h4>
                <p className="text-slate-500 dark:text-slate-400 text-sm">Design with intent, build with resilience. Efficiency is the ultimate form of elegance.</p>
              </div>
            </div>

            <div className="p-6 rounded-[2.5rem] bg-white/30 dark:bg-white/5 border border-white/40 dark:border-white/10 backdrop-blur-xl flex flex-col gap-4 hover:-translate-y-2 transition-all shadow-lg">
              <div className="size-10 rounded-xl bg-pink-500/20 text-pink-500 flex items-center justify-center">
                <Heart size={20} />
              </div>
              <p className="text-slate-900 dark:text-white font-bold text-sm">Loves</p>
              <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed italic">Open source, Matcha, Dark mode, Clean folders.</p>
            </div>

            <div className="p-6 rounded-[2.5rem] bg-white/30 dark:bg-white/5 border border-white/40 dark:border-white/10 backdrop-blur-xl flex flex-col gap-4 hover:-translate-y-2 transition-all shadow-lg">
              <div className="size-10 rounded-xl bg-cyan-500/20 text-cyan-500 flex items-center justify-center">
                <Camera size={20} />
              </div>
              <p className="text-slate-900 dark:text-white font-bold text-sm">Hobbies</p>
              <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed italic">Photography, Badminton, Cooking, Vinyl.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
