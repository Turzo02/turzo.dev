import React from "react";
import { Command, Sparkles } from "lucide-react";

const CreativeProfileExtreme = () => {
  return (
    <>
      <style>
        {`
          @keyframes fluid-morph-extreme {
            0%, 100% { border-radius: 63% 37% 54% 46% / 55% 48% 52% 45%; }
            25% { border-radius: 40% 60% 35% 65% / 60% 35% 65% 40%; }
            50% { border-radius: 73% 27% 45% 55% / 37% 67% 33% 63%; }
            75% { border-radius: 28% 72% 62% 38% / 68% 41% 59% 32%; }
          }


          .animate-fluid-extreme {
            animation: fluid-morph-extreme 12s linear infinite;
            transform: translateZ(0);
            will-change: border-radius;
          }
        `}
      </style>

      <div className="order-1 md:order-2 flex justify-center relative group w-full py-10">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-indigo-500/10 dark:bg-indigo-900/30 blur-[100px] rounded-full scale-75 group-hover:scale-100 transition-transform duration-700" />

        <div className="relative w-full max-w-md aspect-4/5">
          <div className="absolute inset-0 w-full h-full overflow-hidden animate-fluid-extreme border-2 border-white/20 dark:border-white/80 shadow-2xl bg-white/5  backdrop-blur-sm z-10 transition-all duration-300 group-hover:border-white/80 dark:group-hover:border-white/90">
            <img
              src="https://i.ibb.co/C3Dpp6p1/brown.jpg"
              className="w-full h-full object-cover rotate-2 group-hover:scale-[1.005]  transition-transform duration-700 ease-out dark:opacity-90 mix-blend-luminosity group-hover:mix-blend-normal"
              alt="Profile"
            />

            <div className="absolute inset-0  pointer-events-none" />
          </div>

          <div className="absolute bottom-6 right-4 z-20 pointer-events-none ">
            <div className="flex items-center gap-2 pl-3 pr-4 py-2 bg-white/70 dark:bg-black/60 backdrop-blur-xl border border-white/40 dark:border-white/20 rounded-full shadow-lg transform -rotate-4 origin-bottom-right transition-all duration-500 ease-out group-hover:-translate-y-3 group-hover:-translate-x-1 group-hover:rotate-0 group-hover:shadow-indigo-500/20 ">
              <div className="size-8 cursor-pointer flex items-center justify-center overflow-hidden rounded-xl bg-neutral-900 dark:bg-white text-white dark:text-black shadow-2xl transition-transform duration-300 rotate-45 group-hover:-rotate-135">
                <Command size={18} strokeWidth={2.5} />
              </div>

              <p className="text-slate-800 dark:text-white font-bold text-sm whitespace-nowrap cursor-pointer">
                SyeD TurzO 
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreativeProfileExtreme;
