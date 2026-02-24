import React, { useState, useEffect } from 'react';


const PortfolioLoader   = () => {
  const [statusIndex, setStatusIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  const statusPhrases = [
    "INITIALIZING_CORE_ENGINE",
    "MAPPING_SYSTEM_ARCHITECTURE",
    "PARSING_GRAPH_DATA",
    "OPTIMIZING_RENDER_PIPELINE",
    "READY_FOR_DEPLOYMENT"
  ];

  const techSubtext = [
    "0x882_LOAD_MODULE",
    "AWAITING_SIGNAL_STRENGTH",
    "BUFFERING_TEXTURE_MAPS",
    "SHADERS_COMPILING_102k"
  ];

  useEffect(() => {
    const statusInterval = setInterval(() => {
      setStatusIndex((prev) => (prev + 1) % statusPhrases.length);
    }, 2000);

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 0;
        return prev + 1;
      });
    }, 50);

    return () => {
      clearInterval(statusInterval);
      clearInterval(progressInterval);
    };
  }, [statusPhrases.length]);

  return (
    <div className="relative w-full h-screen bg-[#0a0a0b]  flex items-center justify-center overflow-hidden font-mono selection:bg-cyan-500/30">
      
      {/* Texture Layer: Film Grain  */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] z-50 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      <div className="absolute inset-0 pointer-events-none z-40 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.03),rgba(0,255,0,0.01),rgba(0,0,255,0.03))] bg-size-[100%_2px,3px_100%]"></div>

      {/* Main Loader Content */}
      <div className="relative z-10 flex flex-col items-center w-full max-w-lg px-8">
        
        {/* The Blueprint Canvas */}
        <div className="relative w-64 h-64 mb-12 group">
          
          {/* Outer Rotating Decals */}
          <div className="absolute inset-0 border border-zinc-800 rounded-full animate-[spin_10s_linear_infinite] opacity-20"></div>
          <div className="absolute inset-4 border border-zinc-700/50 rounded-full border-t-cyan-500 animate-[spin_3s_linear_infinite]"></div>

          {/* SVG UI Blueprint Assembly */}
          <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full drop-shadow-[0_0_15px_rgba(34,211,238,0.2)]">
            {/* Main Frame */}
            <rect 
              x="20" y="20" width="60" height="60" 
              fill="none" 
              stroke="currentColor" 
              className="text-zinc-800" 
              strokeWidth="0.5" 
            />
            
            {/* Animated Blueprint Strokes */}
            <path 
              d="M 25 35 H 75 M 25 45 H 55 M 25 55 H 45 M 65 45 V 75 M 75 75 H 25" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="1"
              className="text-cyan-400 animate-[draw_3s_ease-in-out_infinite]"
              style={{ strokeDasharray: 200, strokeDashoffset: 200 }}
            />

            {/* Corner Markers */}
            <path d="M 15 15 L 25 15 M 15 15 L 15 25" fill="none" stroke="#3f3f46" strokeWidth="1" />
            <path d="M 85 85 L 75 85 M 85 85 L 85 75" fill="none" stroke="#3f3f46" strokeWidth="1" />
          </svg>

          {/* Glitch Boxes */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-cyan-500/5 backdrop-blur-sm border border-cyan-500/20 flex items-center justify-center">
            <div className="text-cyan-400 text-xs tracking-widest font-bold">
              {progress}%
            </div>
          </div>
        </div>

        {/* Textual Interface */}
        <div className="w-full space-y-4">
          
          {/* Progress Bar (Brutalist style) */}
          <div className="h-1 w-full bg-zinc-900 overflow-hidden flex">
            <div 
              className="h-full bg-cyan-500 transition-all duration-300 ease-out shadow-[0_0_10px_#22d3ee]"
              style={{ width: `${progress}%` }}
            ></div>
          </div>

          <div className="flex justify-between items-start">
            <div className="space-y-1">
              <h2 className="text-zinc-100 text-sm font-display font-bold tracking-[0.3em] uppercase transition-all duration-500">
                {statusPhrases[statusIndex]}
              </h2>
              <p className="text-zinc-500 text-[10px] tracking-widest font-mono">
                {techSubtext[statusIndex % techSubtext.length]}
              </p>
            </div>

            <div className="text-right">
              <span className="text-zinc-700 text-[10px] block uppercase">Latent_State: OK</span>
              <span className="text-zinc-700 text-[10px] block uppercase">Node_V: 21.4.0</span>
            </div>
          </div>
        </div>

      </div>

      {/* Aesthetic Border Accents */}
      <div className="absolute top-8 left-8 w-12 h-12 border-t-2 border-l-2 border-zinc-800"></div>
      <div className="absolute bottom-8 right-8 w-12 h-12 border-b-2 border-r-2 border-zinc-800"></div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes draw {
          0% { stroke-dashoffset: 200; opacity: 0; }
          20% { opacity: 1; }
          50% { stroke-dashoffset: 0; }
          80% { opacity: 1; }
          100% { stroke-dashoffset: -200; opacity: 0; }
        }
        
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}} />
    </div>
  );
};

export default PortfolioLoader;