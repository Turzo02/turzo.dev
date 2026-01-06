import React from "react";
import { Download, Github, Verified } from "lucide-react";
import CreativeProfile from "../components/CreativeProfile";
export const HeroSection = () => (
  <section
    id="home"
    className="min-h-screen w-full flex items-center justify-center pt-32 pb-12 px-4 md:px-8 overflow-hidden"
  >
    <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
      <div className="flex flex-col gap-8 order-2 md:order-1">
        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 dark:bg-indigo-500/5 w-fit backdrop-blur-xl">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
          </span>
          <span className="text-[10px] font-black text-indigo-600 dark:text-indigo-400 tracking-[0.2em] uppercase">
            Open for Innovation
          </span>
        </div>
        {/* Professional Designation Heading */}
        <h1 className="text-6xl md:text-8xl font-black leading-[0.95] tracking-tighter text-slate-900 dark:text-white">
          FRONTEND{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-500 via-purple-500 to-cyan-400">
            WEB
          </span>{" "}
          DEVELOPER
        </h1>

        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-lg leading-relaxed font-medium">
          I build high-performance, responsive web interfaces with a focus on
          clean design and seamless full-stack integration to deliver
          functional, user-centric applications.
        </p>

        <div className="flex flex-wrap gap-5 pt-4">
          <button className="flex items-center justify-center gap-3 h-14 px-8 bg-indigo-600 text-white  text-lg font-bold cursor-pointer rounded-2xl hover:bg-indigo-700 transition-all shadow-2xl shadow-indigo-500/40 active:scale-95">
            Resume <Download size={20} />
          </button>
          <button
            onClick={() => window.open("https://github.com/Turzo02", "_blank")}
            className="flex items-center justify-center gap-3 h-14 px-8 bg-white/20 dark:bg-white/5 border border-slate-300 dark:border-white/10 hover:border-indigo-500/50 text-slate-900 dark:text-white text-base font-bold cursor-pointer rounded-2xl transition-all backdrop-blur-xl"
          >
            GitHub <Github size={20} />
          </button>
        </div>
      </div>

      {/* <div className="order-1 md:order-2 flex justify-center relative group">
        <div className="absolute inset-0 bg-black/20 dark:bg-bg-black/50 blur-[100px] rounded-full scale-70 group-hover:scale-90 transition-transform duration-1000"></div>
        <div className="relative w-full max-w-112.5 aspect-4/5 rounded-[3rem] overflow-hidden border border-white/40 dark:border-white/10 bg-white/10 dark:bg-black/20 shadow-2xl transition-all duration-700 group-hover:rotate-1">
          <img
            src={"https://i.ibb.co.com/C3Dpp6p1/brown.jpg"}
            className="w-full h-full object-cover dark:opacity-80 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700"
            alt="Profile"
          />
          <div className="absolute bottom-8 left-8 right-8 p-6 bg-white/40 dark:bg-black/60 backdrop-blur-2xl rounded-3xl border border-white/40 dark:border-white/10 flex items-center justify-between shadow-2xl">
            <div>

              <p className="text-slate-800 dark:text-white font-black text-xl">
                Exploring Full-Stack
              </p>
            </div>
            <div className="size-12 bg-indigo-600 rounded-2xl flex items-center justify-center text-white shadow-lg">
              <Verified size={24} />
            </div>
          </div>
        </div>

      </div> */}
      <CreativeProfile></CreativeProfile>

    </div>
  </section>
);
