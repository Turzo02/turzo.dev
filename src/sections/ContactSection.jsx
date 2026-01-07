import React from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";

export const ContactSection = () => (
  <section id="contact" className="w-full py-40 px-4 md:px-8 relative">
    <div className="max-w-7xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 bg-white/40 dark:bg-white/5 border border-white dark:border-white/10 backdrop-blur-3xl p-10 md:p-20 rounded-[4rem] shadow-2xl">
      <div className="flex flex-col justify-between py-4">
        <div>
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-8 leading-tight tracking-tighter">
            LET'S BUILD <br /> THE FUTURE
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-xl font-medium mb-12 max-w-sm leading-relaxed italic tracking-tight">
            Open to collaborations and visionary web development roles.
          </p>
        </div>



<div className="space-y-6">
  {/* Email Item */}
  <a
    className="group flex items-center gap-5 text-slate-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-all"
    href="mailto:turzoyt198650@gmail.com"
  >
    <div className="size-14 rounded-2xl border-2 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 flex items-center justify-center transition-all duration-300 group-hover:bg-indigo-600 group-hover:border-transparent group-hover:text-white group-hover:rotate-12 group-hover:shadow-xl group-hover:shadow-indigo-500/30">
      <Mail size={24} />
    </div>
    <span className="text-xl font-black italic tracking-tight uppercase">TURZO@DEV.IO</span>
  </a>

  {/* Phone Item */}
  <a
    className="group flex items-center gap-5 text-slate-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-all"
    href="tel:+8801730278947"
  >
    <div className="size-14 rounded-2xl border-2 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 flex items-center justify-center transition-all duration-300 group-hover:bg-indigo-600 group-hover:border-transparent group-hover:text-white group-hover:rotate-12 group-hover:shadow-xl group-hover:shadow-indigo-500/30">
      <Phone size={24} />
    </div>
    <span className="text-xl font-black italic tracking-tight">+8801730-278947</span>
  </a>

  {/* Location Item */}
  <div className="group flex items-center gap-5 text-slate-900 dark:text-white transition-all">
    <div className="size-14 rounded-2xl border-2 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 flex items-center justify-center transition-all duration-300 group-hover:bg-indigo-600 group-hover:border-transparent group-hover:text-white group-hover:rotate-12 group-hover:shadow-xl group-hover:shadow-indigo-500/30">
      <MapPin size={24} />
    </div>
    <span className="text-xl font-black italic tracking-tight uppercase">RANGPUR, BANGLADESH</span>
  </div>
</div>

      </div>

      <form
        className="flex flex-col gap-6"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-2">
            <input
              className="bg-white/50 dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-2xl px-6 py-4 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all backdrop-blur-xl"
              placeholder="Full Name"
              type="text"
            />
          </div>
          <div className="flex flex-col gap-2">
            <input
              className="bg-white/50 dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-2xl px-6 py-4 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all backdrop-blur-xl"
              placeholder="Email Address"
              type="email"
            />
          </div>
        </div>
        <textarea
          className="bg-white/50 dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-2xl px-6 py-4 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all resize-none min-h-45 backdrop-blur-xl"
          placeholder="Describe your vision..."
        ></textarea>
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-black py-5 px-10 rounded-2xl transition-all shadow-2xl shadow-indigo-500/40 flex items-center justify-center gap-3 active:scale-95 text-lg uppercase tracking-widest">
          Transmit <Send size={20} />
        </button>
      </form>
    </div>
  </section>
);
