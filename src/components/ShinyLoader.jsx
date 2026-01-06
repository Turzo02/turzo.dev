import React, { useState, useEffect } from "react";

const ShinyLoader = ({ text = "PORTFOLIO" }) => {
  const [isMounted, setIsMounted] = useState(true);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    // 1. Wait 1 second (blocking interaction period)
    const timer = setTimeout(() => {
      // 2. Trigger the fade-out animation
      setIsFading(true);
      
      // 3. Unmount completely after fade transition (e.g., 700ms fade)
      const unmountTimer = setTimeout(() => {
        setIsMounted(false);
      }, 500);
      
      return () => clearTimeout(unmountTimer);
    }, 700);

    return () => clearTimeout(timer);
  }, []);

  if (!isMounted) return null;

  return (
    <div
      className={`fixed inset-0 z-999 flex items-center justify-center bg-black transition-opacity duration-700 ease-in-out ${
        isFading ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <style>{`
        @keyframes shine {
          0% { background-position: 200% center; }
          100% { background-position: -200% center; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) scale(1); opacity: 0.8; }
          50% { transform: translateY(-10px) scale(1.2); opacity: 1; }
        }
        @keyframes pulse-glow {
          0%, 100% { text-shadow: 0 0 20px rgba(192, 132, 252, 0.5), 0 0 40px rgba(192, 132, 252, 0.3); }
          50% { text-shadow: 0 0 30px rgba(192, 132, 252, 0.8), 0 0 60px rgba(192, 132, 252, 0.5); }
        }
        .shiny-text {
          background: linear-gradient(
            120deg, 
            #4f46e5 0%,     /* Indigo */
            #c084fc 20%,    /* Purple */
            #ffffff 50%,    /* White (The Shine) */
            #c084fc 80%,    /* Purple */
            #4f46e5 100%    /* Indigo */
          );
          background-size: 200% auto;
          color: #000;
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shine 2.5s linear infinite;
        }
        .neon-glow {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: -1;
          filter: blur(15px);
          opacity: 0.6;
          background: linear-gradient(
            120deg, 
            #4f46e5 0%, 
            #c084fc 100%
          );
          background-clip: text;
          -webkit-background-clip: text;
          animation: pulse-glow 3s ease-in-out infinite alternate;
        }
      `}</style>

      <div className="relative flex flex-col items-center justify-center p-4">
        {/* Main Text Container */}
        <div className="relative">
          {/* Sparkle Top Left */}
          <Sparkle className="absolute -top-8 -left-8 animate-[float_3s_ease-in-out_infinite]" delay="0s" />
          
          {/* The Text */}
          <h1 className="shiny-text font-sans text-5xl md:text-7xl lg:text-9xl font-extrabold tracking-tighter cursor-default select-none p-4">
            {text}
          </h1>
          
          {/* Duplicate text behind for neon glow effect */}
          <h1 className="neon-glow font-sans text-5xl md:text-7xl lg:text-9xl font-extrabold tracking-tighter absolute inset-0 select-none p-4" aria-hidden="true">
            {text}
          </h1>

          {/* Sparkle Bottom Right */}
          <Sparkle className="absolute -bottom-6 -right-6 animate-[float_4s_ease-in-out_infinite]" delay="1.5s" />
        </div>
      </div>
    </div>
  );
};

// Helper component for the little stars
const Sparkle = ({ className, delay }) => (
  <svg
    className={`w-6 h-6 md:w-8 md:h-8 text-white ${className}`}
    style={{ animationDelay: delay }}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
  </svg>
);

export default ShinyLoader;