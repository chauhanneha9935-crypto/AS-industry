import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; 
import { Database, Cpu, Server, ShieldCheck, Share2 } from 'lucide-react';

const Hero = () => {
  // Helper to ensure the window scrolls back to the top when navigating
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    // min-h-screen ensures it takes full height, py-12 adds space on mobile
    <div className="relative bg-[#334155] min-h-screen lg:h-[90vh] overflow-hidden flex items-center py-12 lg:py-0">
      {/* Background Decorative Circle */}
      <div className="absolute top-[-30px] left-[-70px] w-64 h-64 bg-[#f26522] rounded-full opacity-50 hidden lg:block"></div>

      <div className="container mx-auto px-6 lg:px-20 relative z-10">
        {/* flex-col for mobile, flex-row for desktop */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-0">
          
          {/* LEFT SIDE: Text Content */}
          <div className="w-full lg:w-1/2 text-white text-center lg:text-left z-20 lg:pl-24">
            <h4 className="text-[#f26522] font-bold mb-3 tracking-[0.25em] uppercase text-xs lg:text-sm">Digital Agency</h4>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-[1.1]">
              AS Industry <br /> group <br className="hidden md:block" /> with us
            </h1>
            <p className="text-gray-300 text-base lg:text-lg mb-10 max-w-md mx-auto lg:mx-0 leading-relaxed opacity-90">
              Lucknow ki apni digital agency. Now is the right time to take your business online. We provide top-notch digital solutions to help you thrive in the online world.
            </p>
            
            {/* Interactive Link Integration with Scroll Behavior */}
            <div className="flex items-center justify-center lg:justify-start space-x-5">
              <Link to="/about" onClick={handleScrollToTop} className="block w-full sm:w-auto">
                <button className="w-full bg-[#f26522] border-2 border-[#f26522] px-8 py-4 rounded-sm font-bold hover:bg-transparent text-white hover:text-[#f26522] transition-all duration-300 uppercase tracking-widest text-xs shadow-xl shadow-orange-500/20">
                  More About →
                </button>
              </Link>
            </div>
          </div>

          {/* RIGHT SIDE: DFD Diagram */}
          <div className="w-full lg:w-1/2 relative flex justify-center items-center transform md:translate-y-6 lg:translate-y-10">
            {/* Wrapper size adjusted for better fit on all screens */}
            <div className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[450px] md:h-[450px] lg:w-[550px] lg:h-[550px] flex items-center justify-center">
              
              {/* Technical Grid Overlay */}
              <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:30px_30px]"></div>

              {/* DFD Connection Lines */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
                {["M200 200 L80 80", "M200 200 L320 80", "M200 200 L80 320", "M200 200 L320 320"].map((path, i) => (
                  <g key={i}>
                    <path d={path} stroke="white" strokeWidth="1" strokeOpacity="0.1" fill="none" />
                    <motion.circle r="3" fill="#f26522">
                      <animateMotion dur="3s" repeatCount="indefinite" path={path} keyPoints="0;1" keyTimes="0;1" />
                    </motion.circle>
                  </g>
                ))}
              </svg>

              {/* Central Processing Core */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 border-2 border-dashed border-white/10 rounded-full"
              />
              <div className="absolute w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 bg-[#334155] border-4 border-[#f26522] rounded-full flex flex-col items-center justify-center z-20 shadow-[0_0_40px_rgba(242,101,34,0.3)]">
                <Cpu className="text-[#f26522] w-6 h-6 md:w-8 md:h-8" />
                <span className="text-[7px] md:text-[8px] text-white/60 font-black tracking-widest uppercase mt-1">Processor</span>
              </div>

              {/* Nodes - Top Left */}
              <div className="absolute top-[0%] left-[0%] md:top-[5%] md:left-[5%]">
                <CircularTechNode Icon={Database} label="Storage" />
              </div>
              {/* Nodes - Top Right */}
              <div className="absolute top-[0%] right-[0%] md:top-[5%] md:right-[5%]">
                <CircularTechNode Icon={Server} label="Cloud" />
              </div>
              {/* Nodes - Bottom Left */}
              <div className="absolute bottom-[0%] left-[0%] md:bottom-[5%] md:left-[5%]">
                <CircularTechNode Icon={ShieldCheck} label="Security" />
              </div>
              {/* Nodes - Bottom Right */}
              <div className="absolute bottom-[0%] right-[0%] md:bottom-[5%] md:right-[5%]">
                <CircularTechNode Icon={Share2} label="Network" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

const CircularTechNode = ({ Icon, label }) => (
  <motion.div whileHover={{ scale: 1.1, y: -5 }} className="flex flex-col items-center">
    <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 bg-[#1e293b]/60 backdrop-blur-xl border border-white/10 rounded-full flex items-center justify-center shadow-2xl overflow-hidden group">
      <div className="absolute inset-0 rounded-full bg-gradient-to-b from-white/5 to-transparent opacity-50"></div>
      <Icon className="text-[#f26522] group-hover:animate-pulse relative z-10 w-5 h-5 md:w-6 md:h-6" />
      <div className="absolute inset-1 rounded-full border border-dashed border-white/5 animate-[spin_10s_linear_infinite]"></div>
    </div>
    <span className="text-[7px] md:text-[9px] text-gray-400 font-black uppercase tracking-[0.2em] mt-3">{label}</span>
    <div className="w-8 md:w-10 h-[1px] bg-[#f26522]/30 mt-1"></div>
  </motion.div>
);

export default Hero;