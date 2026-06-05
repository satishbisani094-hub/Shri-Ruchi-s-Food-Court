import { motion } from 'motion/react';
import { ChevronDown, MessageCircle, ArrowRight } from 'lucide-react';
import { heroBg, CONTACT_INFO } from '../data/menu';

interface HeroProps {
  onOpenEnquiry: () => void;
}

export default function Hero({ onOpenEnquiry }: HeroProps) {
  const scrollToMenu = () => {
    const menuSection = document.querySelector('#menu');
    if (menuSection) {
      const navHeight = 80;
      const targetPosition = menuSection.getBoundingClientRect().top + window.scrollY - navHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth',
      });
    }
  };

  const handleWhatsAppEnquiry = () => {
    const text = encodeURIComponent(`Hello Sri Ruchi's Food Court! I would like to make an enquiry about your delicious food menu.`);
    window.open(`https://wa.me/${CONTACT_INFO.phoneSearch}?text=${text}`, '_blank');
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-900"
    >
      {/* Background Image with Dark Vignette overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Sri Ruchi Food Court Gourmet Background Cover"
          className="w-full h-full object-cover object-center scale-102 filter brightness-[0.45] contrast-[1.05]"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/45 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/70 via-transparent to-slate-950/30" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/15 border border-orange-500/20 backdrop-blur-md mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
          <span className="text-orange-400 font-mono text-xs uppercase tracking-widest font-semibold">
            Authentic Indo-Chinese Gastronomy
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
          className="font-sans font-extrabold text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-none mb-6"
        >
          Sri Ruchi's{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-400 to-red-500 block sm:inline">
            Food Court
          </span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.35 }}
          className="text-slate-200 text-lg sm:text-xl md:text-2xl max-w-2xl mx-auto font-medium tracking-normal mb-10 leading-relaxed drop-shadow"
        >
          "Delicious Taste, Fresh Ingredients, Unforgettable Experience"
        </motion.p>

        {/* Call to Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto"
        >
          <button
            id="hero-view-menu-btn"
            onClick={scrollToMenu}
            className="w-full sm:w-auto flex items-center justify-center gap-2 group bg-orange-500 hover:bg-orange-600 text-white font-extrabold px-8 py-4 rounded-full shadow-xl shadow-orange-500/20 hover:scale-[1.03] transition-all duration-300"
          >
            <span>View Our Menu</span>
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            id="hero-whatsapp-enquiry-btn"
            onClick={handleWhatsAppEnquiry}
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-slate-100 border border-slate-700 font-bold px-8 py-4 rounded-full transition-all duration-300 hover:border-slate-500 hover:scale-[1.03] shadow-md"
          >
            <MessageCircle className="h-5 w-5 text-emerald-400 fill-emerald-400/20" />
            <span>Chat via WhatsApp</span>
          </button>
        </motion.div>

        {/* Badge Indicators for trust */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="mt-16 grid grid-cols-3 gap-4 max-w-xl mx-auto border-t border-white/10 pt-8"
        >
          <div>
            <div className="font-sans font-extrabold text-2xl sm:text-3xl text-orange-400">100%</div>
            <div className="text-slate-400 text-xs sm:text-sm font-medium">Fresh Ingredients</div>
          </div>
          <div>
            <div className="font-sans font-extrabold text-2xl sm:text-3xl text-orange-400">4.9★</div>
            <div className="text-slate-400 text-xs sm:text-sm font-medium">Customer Reviews</div>
          </div>
          <div>
            <div className="font-sans font-extrabold text-2xl sm:text-3xl text-orange-400">Blazing</div>
            <div className="text-slate-400 text-xs sm:text-sm font-medium">Fast Wok Service</div>
          </div>
        </motion.div>
      </div>

      {/* Floating Animated Scroll Down Mouse */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        <motion.button
          id="hero-scroll-scroll-down-btn"
          onClick={scrollToMenu}
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          className="p-2 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors"
        >
          <ChevronDown className="h-5 w-5" />
        </motion.button>
      </div>
    </section>
  );
}
