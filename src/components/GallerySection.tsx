import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Maximize2, X, ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/menu';

export default function GallerySection() {
  const [activeTab, setActiveTab] = useState<string>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filterTabs = [
    { id: 'all', label: 'All Photos' },
    { id: 'Starters', label: 'Vegetarian' },
    { id: 'Noodles', label: 'Woks' },
    { id: 'Main Course', label: 'Rice' },
  ];

  const filteredGallery = GALLERY_ITEMS.filter((item) => {
    return activeTab === 'all' || item.category === activeTab;
  });

  const handleNextPhoto = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % filteredGallery.length);
  };

  const handlePrevPhoto = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + filteredGallery.length) % filteredGallery.length);
  };

  return (
    <section id="gallery" className="py-20 sm:py-28 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="font-mono text-xs uppercase tracking-widest text-orange-600 font-bold bg-orange-100 px-3.5 py-1.5 rounded-full inline-block mb-3">
            Sights of Sizzle
          </span>
          <h2 className="font-sans font-extrabold text-slate-900 text-3xl sm:text-4xl md:text-5xl tracking-tight mb-4">
            Sri Ruchi's Gourmet Grid
          </h2>
          <p className="text-slate-500 text-sm sm:text-base">
            Take a visual tour through our signature creations, sizzling wok-flipes, and glossy, crisp coatings.
          </p>

          {/* Filtering Tabs inside Gallery */}
          <div className="flex items-center justify-center gap-1.5 mt-8 border border-slate-200/60 bg-white p-1 rounded-full w-fit mx-auto max-w-full overflow-x-auto scrollbar-none">
            {filterTabs.map((tab) => (
              <button
                id={`gallery-filter-tab-${tab.id}`}
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-350 shrink-0 select-none ${
                  activeTab === tab.id
                    ? 'bg-orange-500 text-white shadow-sm'
                    : 'text-slate-600 hover:text-orange-500 hover:bg-slate-50'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Photo Bento Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto"
        >
          {filteredGallery.map((item, idx) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              key={item.id}
              onClick={() => setLightboxIndex(idx)}
              id={`gallery-card-${item.id}`}
              className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl border border-slate-100 group cursor-pointer relative aspect-square"
            >
              {/* Image element */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-all duration-550"
                referrerPolicy="no-referrer"
              />

              {/* Hover overlay masking */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6" />

              {/* Decorative dynamic scale icons */}
              <div className="absolute top-4 right-4 p-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-white opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100 transition-all duration-300 shadow-md">
                <Maximize2 className="h-4.5 w-4.5" />
              </div>

              {/* Text content floating above hover */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white translate-y-3 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <span className="font-mono text-[10px] uppercase font-semibold text-orange-400 bg-orange-500/10 border border-orange-500/25 px-2 py-0.5 rounded-full">
                  {item.category}
                </span>
                <span className="font-sans font-extrabold text-lg block mt-2">
                  {item.title}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Full-Screen Lightbox Modal */}
        <AnimatePresence>
          {lightboxIndex !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setLightboxIndex(null)}
              className="fixed inset-0 bg-black/95 z-55 flex items-center justify-center p-4 backdrop-blur-md pointer-events-auto"
            >
              {/* Close Button */}
              <button
                id="gallery-lightbox-close-btn"
                onClick={() => setLightboxIndex(null)}
                className="absolute top-6 right-6 p-3 bg-white/5 hover:bg-white/10 rounded-full text-white border border-white/10 transition-colors cursor-pointer"
              >
                <X className="h-6 w-6" />
              </button>

              {/* Left Navigation Arrow */}
              <button
                id="gallery-lightbox-prev-btn"
                onClick={handlePrevPhoto}
                className="absolute left-4 sm:left-8 p-3 bg-white/5 hover:bg-white/10 rounded-full text-white border border-white/10 transition-colors cursor-pointer"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>

              {/* Main Image in Lightbox */}
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="max-w-4xl max-h-[80vh] flex flex-col items-center justify-center text-center relative"
              >
                <img
                  src={filteredGallery[lightboxIndex].image}
                  alt={filteredGallery[lightboxIndex].title}
                  className="max-w-full max-h-[70vh] rounded-2xl object-contain shadow-2xl"
                  referrerPolicy="no-referrer"
                />
                
                {/* Image Details */}
                <div className="mt-4 text-white">
                  <span className="font-mono text-xs uppercase tracking-widest text-orange-400 font-semibold mb-1 block">
                    {filteredGallery[lightboxIndex].category}
                  </span>
                  <span className="font-sans font-extrabold text-xl sm:text-2xl text-center block">
                    {filteredGallery[lightboxIndex].title}
                  </span>
                </div>
              </motion.div>

              {/* Right Navigation Arrow */}
              <button
                id="gallery-lightbox-next-btn"
                onClick={handleNextPhoto}
                className="absolute right-4 sm:right-8 p-3 bg-white/5 hover:bg-white/10 rounded-full text-white border border-white/10 transition-colors cursor-pointer"
              >
                <ChevronRight className="h-6 w-6" />
              </button>

              {/* Dynamic counter index */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 font-mono text-sm text-slate-400">
                {lightboxIndex + 1} / {filteredGallery.length}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
