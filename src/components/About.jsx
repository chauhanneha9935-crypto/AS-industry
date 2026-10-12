import React, { useState } from 'react';
// Fixed: Added AnimatePresence to the framer-motion import
import { motion, AnimatePresence } from "framer-motion"; 
import atifImage from '../assets/5eab1b49-4e2d-47a2-b38c-7dfd025f0f37.jpeg';
import coFounderImage from '../assets/co-founder.png'; 

// Imported edited photo
import editedPhoto from '../assets/edited-photo.png';

// Technical team image assets
import Member1 from '../assets/img.2.jpeg';
import Member2 from '../assets/img.1.jpeg';
import Member3 from '../assets/img.3.jpeg';

const owners = [
  {
    name: "Md Atif",
    role: "FOUNDER AND CEO",
    desc: "Leading innovation and digital transformation for businesses.",
    img: atifImage,
  },
  {
    name: "Shivangi",
    role: "CO-FOUNDER",
    desc: "Scaling robust server-side systems and digital ecosystems.",
    img: coFounderImage,
  }
];

const teamMembers = [
  { 
    name:"Amit Singh", 
    role: "Project manager", 
    img: Member1,
    quote: "Building seamless digital interfaces with high operational efficiency and modern clean architectures."
  },
  { 
    name: "Abhishek Chaudhary", 
    role: "Project Manager", 
    img: Member2,
    quote: "Crafting beautiful digital journeys that match minimal aesthetic values with peak user interactions."
  },
  { 
    name: "Aditya gaur", 
    role: "Project Manager", 
    img: Member3,
    quote: "Bridging the gap between raw backend capabilities and target business metrics to deliver products on schedule."
  }
];

const About = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? teamMembers.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === teamMembers.length - 1 ? 0 : prev + 1));
  };

  const activeMember = teamMembers[activeIndex];

  return (
    <div className="bg-[#f4f3f0] text-[#1a1a1a] font-sans antialiased selection:bg-[#f26522]/20">
      
      {/* --- SECTION 1: HERO COMPANY OVERVIEW --- */}
      <section className="container mx-auto px-6 lg:px-20 pt-36 pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          <div className="lg:col-span-5 space-y-8">
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-[0.85] text-slate-900">
              ABOUT <br /> US
            </h1>
            <div className="space-y-4 max-w-sm pt-4">
              <p className="text-xs font-bold uppercase tracking-widest text-[#f26522]">
                Luxurious Digital Solutions & Architecture
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Modern Elegance: Designs featuring clean lines, neutral palettes, and high-quality digital materials. Khalilabad ki apni digital agency.
              </p>
            </div>
          </div>

          {/* Updated Image container displaying edited-photo_3.jpg */}
          <div className="lg:col-span-5 w-full">
            <div className="overflow-hidden rounded-[2.5rem] shadow-sm bg-white p-3">
              <img 
                src={editedPhoto}
                className="rounded-[2rem] w-full object-cover aspect-[4/3]" 
                alt="Digital Workspace" 
              />
            </div>
          </div>

          <div className="lg:col-span-2 space-y-4 lg:pt-24">
            <h4 className="text-lg font-bold tracking-tight text-slate-900">Our Philosophy</h4>
            <p className="text-xs text-gray-500 leading-relaxed">
              We believe in creating luxurious, personalized environments that reflect our clients' unique business values, styles, and distinct local lifestyles.
            </p>
          </div>
        </div>
      </section>

      {/* --- SECTION 2: PRINCIPALS PANEL --- */}
      <section className="bg-[#e8e6e1] py-20 border-y border-black/5">
        <div className="container mx-auto px-6 lg:px-20">
          
          <div className="bg-[#f4f3f0] rounded-[3rem] p-8 md:p-16 shadow-sm max-w-6xl mx-auto">
            <div className="flex flex-col lg:grid lg:grid-cols-3 gap-12 items-center">
              
              {/* Header Title Block */}
              <div className="text-center px-4 space-y-6 order-1 lg:order-2 w-full">
                <div className="border-y lg:border-y-0 lg:border-x border-black/10 py-4 px-2">
                  <h2 className="text-3xl md:text-4xl font-black tracking-tight text-slate-900 uppercase leading-none">
                    MEET THE <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-gray-700 to-slate-900">OWNERS</span>
                  </h2>
                </div>
                
                <div className="flex justify-center gap-2 py-2">
                  <div className="w-16 h-6 rounded-full bg-stone-300/60 overflow-hidden"></div>
                  <div className="w-20 h-6 rounded-full bg-stone-400/60 overflow-hidden"></div>
                  <div className="w-12 h-6 rounded-full bg-stone-300/60 overflow-hidden"></div>
                </div>

                <p className="text-[11px] text-gray-500 leading-relaxed max-w-xs mx-auto">
                  As owners and licensed operators, the leadership team oversees the day-to-day operations and the custom strategy architectures of our local agency.
                </p>
              </div>

              {/* Owner 1 Card Slot: Md Atif */}
              <div className="flex flex-col items-center text-center group order-2 lg:order-1 w-full">
                <div className="overflow-hidden rounded-3xl w-full aspect-[4/5] bg-gray-200 shadow-md">
                  <img 
                    src={owners[0].img} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                    alt={owners[0].name} 
                  />
                </div>
                <div className="mt-5 flex flex-col items-center">
                  <h3 className="text-2xl font-bold tracking-tight text-slate-900">{owners[0].name}</h3>
                  <p className="text-[10px] font-black text-[#f26522] tracking-wider mt-1 uppercase">
                    {owners[0].role}
                  </p>
                </div>
              </div>

              {/* Owner 2 Card Slot: Co-Founder */}
              <div className="flex flex-col items-center text-center group order-3 w-full">
                <div className="overflow-hidden rounded-3xl w-full aspect-[4/5] bg-gray-200 shadow-md">
                  <img 
                    src={owners[1].img} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                    alt={owners[1].name} 
                  />
                </div>
                <div className="mt-5 flex flex-col items-center">
                  <h3 className="text-2xl font-bold tracking-tight text-slate-900">{owners[1].name}</h3>
                  <p className="text-[10px] font-black text-[#f26522] tracking-wider mt-1 uppercase">
                    {owners[1].role}
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* --- SECTION 3: TECHNICAL TEAMS --- */}
      <section className="container mx-auto px-6 lg:px-20 py-24">
        
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-serif text-slate-900 font-medium tracking-tight">
            Technical teams <span className="font-sans italic font-light text-gray-500">=</span> CodewebX
          </h2>
          <p className="text-xs text-gray-500 leading-relaxed tracking-wide">
            Our professionals represent leading minds with a passion for innovation, holding credentials from elite institutions and possessing a deep dedication to scaling businesses.
          </p>
        </div>

        {/* Responsive dual column flow configuration on mobile layouts */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 justify-center items-end pb-8 max-w-4xl mx-auto">
          {teamMembers.map((member, index) => {
            const isFeatured = index === activeIndex;
            
            return (
              <motion.div 
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-full cursor-pointer rounded-[1.75rem] overflow-hidden border transition-all duration-500 flex flex-col ${
                  isFeatured 
                    ? 'bg-[#0f172a] text-white border-[#0f172a] shadow-2xl scale-[1.03] z-10' 
                    : 'bg-white text-slate-800 border-stone-200 hover:border-stone-300'
                }`}
                whileHover={{ y: isFeatured ? -4 : -2 }}
              >
                <div className="aspect-[1/1.1] overflow-hidden relative w-full bg-stone-100">
                  <img 
                    src={member.img} 
                    className={`w-full h-full object-cover transition-all duration-500 ${!isFeatured && 'grayscale opacity-85'}`} 
                    alt={member.name} 
                  />
                </div>

                <div className="p-4 md:p-5 text-center min-h-[85px] flex flex-col justify-center items-center">
                  <h5 className={`font-bold text-xs md:text-sm tracking-tight ${isFeatured ? 'text-white' : 'text-slate-800'}`}>
                    {member.name}
                  </h5>
                  <p className={`text-[7px] md:text-[9px] font-black tracking-widest uppercase mt-1 ${isFeatured ? 'text-[#f26522]' : 'text-gray-400'}`}>
                    {member.role}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* --- CAROUSEL NAVIGATION CONTROLS --- */}
        <div className="flex justify-center items-center gap-4 mt-8 mb-12">
          <button 
            onClick={handlePrev}
            className="w-12 h-12 rounded-full border border-stone-300 bg-transparent flex items-center justify-center text-slate-700 hover:bg-stone-200/50 transition-all text-lg font-light"
          >
            ‹
          </button>
          
          <div className="flex items-center gap-2">
            {teamMembers.map((_, idx) => (
              <div 
                key={idx} 
                className={`h-1.5 transition-all duration-300 rounded-full ${idx === activeIndex ? 'w-8 bg-[#8c6d23]' : 'w-1.5 bg-stone-300'}`}
              />
            ))}
          </div>

          <button 
            onClick={handleNext}
            className="w-12 h-12 rounded-full border border-stone-300 bg-transparent flex items-center justify-center text-slate-700 hover:bg-stone-200/50 transition-all text-lg font-light"
          >
            ›
          </button>
        </div>

        {/* --- DETAILS OVERVIEW EXPANSION BOARD --- */}
        <div className="max-w-4xl mx-auto px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="bg-white/80 backdrop-blur-md border border-stone-200/60 rounded-3xl p-8 md:p-12 text-center shadow-sm"
            >
              <h3 className="text-3xl md:text-4xl font-serif text-slate-900 font-medium tracking-tight">
                {activeMember.name}
              </h3>
              <p className="text-sm text-gray-600 italic max-w-2xl mx-auto mt-4">
                "{activeMember.quote}"
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

      </section>

    </div>
  );
};

export default About;