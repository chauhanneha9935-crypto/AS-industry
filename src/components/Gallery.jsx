import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Maximize2 } from 'lucide-react';

// Verbatim imports for all requested gallery images from your assets folder
import gallery1 from '../assets/gallery1.jpeg';
import gallery2 from '../assets/gallery2.jpeg';
import gallery3 from '../assets/gallery3.jpeg';
import gallery4 from '../assets/gallery4.jpeg';
import gallery5 from '../assets/gallery5.jpeg';
import gallery7 from '../assets/gallery7.jpeg';
import gallery8 from '../assets/gallery8.jpeg';

// Interactive filter categories
const categories = ["All", "Team Workspace", "Office Sessions"];

const galleryItems = [
  { id: 1, title: "Collaborative Sprint", category: "Team Workspace", img: gallery1 },
  { id: 2, title: "Executive Operations", category: "Office Sessions", img: gallery2 },
  { id: 3, title: "Leadership Team", category: "Office Sessions", img: gallery3 },
  { id: 4, title: "Project Sync", category: "Team Workspace", img: gallery4 },
  { id: 5, title: "Strategy Alignment", category: "Office Sessions", img: gallery5 },
  { id: 6, title: "Brainstorming Huddle", category: "Team Workspace", img: gallery7 },
  { id: 7, title: "Creative Pipeline", category: "Team Workspace", img: gallery8 },
];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [lightboxImage, setLightboxImage] = useState(null);

  // Filter items based on active category selection
  const filteredItems = selectedCategory === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <div className="bg-[#f4f3f0] text-[#1a1a1a] font-sans antialiased min-h-screen selection:bg-[#f26522]/20 pt-36 pb-24">
      <div className="container mx-auto px-6 lg:px-20">
        
        {/* --- HEADER --- */}
        <div className="max-w-2xl mb-16 space-y-4">
          <p className="text-xs font-bold uppercase tracking-widest text-[#f26522]">
            Inside our Agency
          </p>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-none text-slate-900">
            DIGITAL <br /> GALLERY
          </h1>
          <p className="text-sm text-gray-600 max-w-md leading-relaxed">
            Take a look into our day-to-day operations, strategic planning setups, and digital workspace infrastructure.
          </p>
        </div>

        {/* --- FILTER BUTTONS BAR --- */}
        <div className="flex flex-wrap items-center gap-2 mb-12 border-b border-black/5 pb-6">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2.5 text-xs font-bold uppercase tracking-wider rounded-full border transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-[#0f172a] text-white border-[#0f172a] shadow-md"
                  : "bg-white text-slate-700 border-stone-200 hover:border-stone-400"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* --- RESPONSIVE GRID LAYOUT --- 
            - grid-cols-1: stacked single items on small mobile screens
            - sm:grid-cols-2: pairs neatly into 2 columns on mobile/tablet viewports
            - lg:grid-cols-3: shifts smoothly to an inline trio layout across desktop screens
        */}
        <motion.div 
          layout 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="group relative bg-white border border-stone-200/60 rounded-[2rem] p-3 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden"
              >
                {/* Image Frame Wrapper */}
                <div className="overflow-hidden rounded-[1.65rem] relative aspect-[4/3] bg-stone-100">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  {/* Glassmorphic Hover Overlay */}
                  <div className="absolute inset-0 bg-[#0f172a]/40 opacity-0 group-hover:opacity-100 backdrop-blur-[2px] transition-all duration-400 flex items-center justify-center">
                    <button 
                      onClick={() => setLightboxImage(item)}
                      className="bg-white/90 p-4 rounded-full text-slate-900 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 hover:bg-[#f26522] hover:text-white shadow-lg"
                    >
                      <Maximize2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* Card Information Detail Footer */}
                <div className="pt-5 pb-2 px-3 flex justify-between items-center">
                  <div>
                    <h3 className="font-bold text-sm md:text-base text-slate-900 tracking-tight transition-colors duration-300 group-hover:text-[#f26522]">
                      {item.title}
                    </h3>
                    <p className="text-[10px] font-black tracking-widest text-gray-400 uppercase mt-1">
                      {item.category}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* --- LIGHTBOX MODAL IMAGE VIEWER --- */}
        <AnimatePresence>
          {lightboxImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex flex-col items-center justify-center p-4"
              onClick={() => setLightboxImage(null)}
            >
              {/* Close Button UI Trigger */}
              <button
                onClick={() => setLightboxImage(null)}
                className="absolute top-6 right-6 text-white/70 hover:text-white bg-white/10 p-3 rounded-full hover:scale-110 transition-all"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Central Lightbox Component Canvas */}
              <motion.div
                initial={{ scale: 0.95, y: 15 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 15 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="max-w-4xl w-full flex flex-col gap-4"
                onClick={(e) => e.stopPropagation()} // Stop overlay close trigger on image content click
              >
                <img
                  src={lightboxImage.img}
                  alt={lightboxImage.title}
                  className="rounded-2xl max-h-[75vh] w-full object-contain mx-auto shadow-2xl shadow-black/50"
                />
                
                {/* Information subtitle container */}
                <div className="text-center text-white space-y-1">
                  <h2 className="text-lg font-bold tracking-wide">{lightboxImage.title}</h2>
                  <p className="text-xs text-[#f26522] tracking-widest font-black uppercase">{lightboxImage.category}</p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
};

export default Gallery;