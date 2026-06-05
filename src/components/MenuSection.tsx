import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Flame, Clock, Star, Info, Plus, Sparkles, AlertCircle } from 'lucide-react';
import { MENU_ITEMS } from '../data/menu';
import { MenuItem } from '../types';

interface MenuSectionProps {
  onAddItemToTray: (item: MenuItem) => void;
  trayQuantities: Record<string, number>;
  onOpenEnquiry: () => void;
}

export default function MenuSection({ onAddItemToTray, trayQuantities, onOpenEnquiry }: MenuSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { id: 'all', label: 'All Delicacies ✨' },
    { id: 'manchurian', label: 'Manchurian Specials 🌶️' },
    { id: 'noodles', label: 'Wok Noodles 🍜' },
    { id: 'rice', label: 'Aromatic Rice 🍚' },
    { id: 'veg', label: '100% Pure Veg 🌱' },
  ];

  const handleCategoryChange = (catId: string) => {
    setSelectedCategory(catId);
  };

  const filteredItems = MENU_ITEMS.filter((item) => {
    // Category match
    const categoryMatch =
      selectedCategory === 'all' ||
      item.category === selectedCategory ||
      (selectedCategory === 'veg' && item.isVeg);

    // Search match
    const searchMatch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());

    return categoryMatch && searchMatch;
  });

  // Calculate total tray items
  const trayTotalCount = Object.values(trayQuantities).reduce((acc, qty) => acc + qty, 0);

  return (
    <section id="menu" className="py-20 sm:py-28 bg-slate-50 relative">
      {/* Background Graphic elements */}
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-orange-50/20 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Elements */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="font-mono text-xs uppercase tracking-widest text-orange-600 font-bold bg-orange-100 px-3.5 py-1.5 rounded-full inline-block mb-3">
            Gourmet Selection
          </span>
          <h2 className="font-sans font-extrabold text-slate-900 text-3xl sm:text-4xl md:text-5xl tracking-tight mb-4">
            Explore Our Wok & Pan Masterpieces
          </h2>
          <p className="text-slate-500 text-sm sm:text-base">
            Every dish is made-to-order, customized to your chosen heat level, and sizzling with authentic Indo-Chinese wok flavor.
          </p>
        </div>

        {/* Search and Filters Controls Block */}
        <div className="bg-white p-4 sm:p-6 rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50 mb-10 sm:mb-12 max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            
            {/* Filter Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-3 md:pb-0 scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0">
              {categories.map((cat) => (
                <button
                  id={`filter-pill-${cat.id}`}
                  key={cat.id}
                  onClick={() => handleCategoryChange(cat.id)}
                  className={`px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 shrink-0 select-none ${
                    selectedCategory === cat.id
                      ? 'bg-orange-500 text-white shadow-md shadow-orange-500/20'
                      : 'bg-slate-50 text-slate-650 hover:bg-slate-100'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Nice Search Input */}
            <div className="relative w-full md:max-w-xs shrink-0">
              <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                <Search className="h-4.5 w-4.5 text-slate-400" />
              </span>
              <input
                id="menu-search-input"
                type="text"
                placeholder="Search dishes... (e.g. Gobi)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full text-sm font-medium text-slate-800 placeholder-slate-400 pl-10 pr-4 py-3 bg-slate-50 border border-slate-100 rounded-full focus:outline-none focus:border-orange-500 focus:bg-white transition-all duration-200"
              />
            </div>
          </div>
        </div>

        {/* Sizzling Menu Grid */}
        <AnimatePresence mode="popLayout">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
          >
            {filteredItems.map((item) => {
              const qtyInTray = trayQuantities[item.id] || 0;
              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  key={item.id}
                  id={`menu-card-${item.id}`}
                  className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col group relative"
                >
                  {/* Veg / Non-Veg Badge over image */}
                  <div className="absolute top-4 left-4 z-20 flex gap-2">
                    <span className={`px-2.5 py-1 text-[10px] sm:text-xs font-extrabold uppercase rounded-full tracking-wider flex items-center gap-1 shadow-md ${
                      item.isVeg
                        ? 'bg-emerald-500 text-white'
                        : 'bg-rose-500 text-white'
                    }`}>
                      <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                      {item.isVeg ? 'Veg 🌱' : 'Chicken 🍗'}
                    </span>

                    {item.isPopular && (
                      <span className="bg-amber-500 text-slate-900 px-2.5 py-1 text-[10px] sm:text-xs font-extrabold uppercase rounded-full tracking-wider flex items-center gap-1 shadow-md">
                        <Sparkles className="h-3 w-3 fill-slate-900" />
                        Popular Choice
                      </span>
                    )}
                  </div>

                  {/* Thumbnail Cover */}
                  <div className="relative aspect-[4/3] bg-slate-100 overflow-hidden shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover transform scale-100 group-hover:scale-106 transition-all duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>

                  {/* Card Content body */}
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-sans font-extrabold text-slate-900 text-xl tracking-tight group-hover:text-orange-600 transition-colors">
                        {item.name}
                      </h3>
                      {/* Price Badge */}
                      <span className="font-sans font-black text-xl text-orange-500 shrink-0">
                        ₹{item.price}
                      </span>
                    </div>

                    {/* Meta stats line */}
                    <div className="flex items-center gap-4 text-xs font-medium text-slate-500 mb-4 bg-slate-50 p-2.5 rounded-xl border border-dashed border-slate-200">
                      <div className="flex items-center gap-1 text-slate-600">
                        <Clock className="h-3.5 w-3.5 text-slate-400" />
                        <span>{item.preparationTime}</span>
                      </div>
                      
                      {/* Spiciness Level Flames */}
                      <div className="flex items-center gap-1 text-red-500">
                        <Flame className="h-3.5 w-3.5 fill-current" />
                        <span className="text-[10px] uppercase font-bold tracking-wider">
                          {item.spiciness === 1 ? 'Mild' : item.spiciness === 2 ? 'Spice' : 'Fiery'}
                        </span>
                      </div>

                      {/* Ratings stars */}
                      <div className="flex items-center gap-1 ml-auto text-amber-500 font-bold shrink-0">
                        <Star className="h-3.5 w-3.5 fill-current" />
                        <span>{item.rating}</span>
                        <span className="text-[10px] text-slate-400 font-medium">({item.reviewsCount})</span>
                      </div>
                    </div>

                    {/* Description Paragraph */}
                    <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">
                      {item.description}
                    </p>

                    {/* Order enquiry trigger button */}
                    <div className="mt-auto flex items-center gap-2 pt-4 border-t border-slate-100">
                      <button
                        id={`menu-card-add-btn-${item.id}`}
                        onClick={() => onAddItemToTray(item)}
                        className="flex-grow flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-extrabold text-sm py-3.5 px-4 rounded-xl shadow-lg shadow-orange-500/10 transition-colors"
                      >
                        <Plus className="h-4.5 w-4.5" />
                        <span>Add to Enquiry Tray</span>
                        {qtyInTray > 0 && (
                          <span className="bg-white text-orange-600 text-xs font-black h-5 px-1.5 rounded-full flex items-center justify-center ml-1 scale-102">
                            {qtyInTray}
                          </span>
                        )}
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {/* Empty Search Fallback */}
        {filteredItems.length === 0 && (
          <div className="text-center py-16 bg-white border border-dashed border-slate-200 rounded-3xl max-w-md mx-auto">
            <AlertCircle className="h-10 w-10 text-slate-400 mx-auto mb-3" />
            <span className="font-bold text-slate-900 block text-lg mb-1">No Dishes Found</span>
            <span className="text-slate-500 text-sm">We couldn't find items matches "{searchQuery}". Try selecting another category!</span>
            <button
              id="menu-reset-filter-btn"
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="mt-4 bg-orange-600 hover:bg-orange-700 text-white text-xs font-bold px-4 py-2 rounded-lg transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Sticky floating bottom summary tray action when user adds at least one item */}
        {trayTotalCount > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-30 max-w-md w-[calc(100%-2rem)] bg-slate-900 text-white py-4 px-6 rounded-2xl shadow-2xl flex items-center justify-between border border-slate-800 pointer-events-auto"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 bg-orange-500 rounded-xl relative">
                <span className="absolute -top-1.5 -right-1.5 bg-red-500 text-white font-black text-[10px] w-5 h-5 rounded-full flex items-center justify-center">
                  {trayTotalCount}
                </span>
                <Clock className="h-5 w-5 text-white" />
              </div>
              <div>
                <span className="font-extrabold text-sm block">Custom Tray Selected</span>
                <span className="text-xs text-orange-400 font-medium">Ready to place enquiry now</span>
              </div>
            </div>
            
            <button
              id="menu-sticky-submit-enquiry-btn"
              onClick={onOpenEnquiry}
              className="bg-orange-500 hover:bg-orange-600 text-white font-black text-xs uppercase tracking-wider py-2.5 px-4 rounded-xl transition-all shadow-md shadow-orange-500/20"
            >
              Enquire Now
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
