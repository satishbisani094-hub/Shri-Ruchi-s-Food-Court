import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronUp } from 'lucide-react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisible = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', toggleVisible);
    return () => window.removeEventListener('scroll', toggleVisible);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          id="scroll-to-top-floating-btn"
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0.8, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 15 }}
          className="fixed bottom-6 right-20 z-35 bg-white border border-slate-100 hover:border-orange-200 text-orange-600 p-3 rounded-full shadow-2xl cursor-pointer hover:bg-orange-50 hover:scale-106 transition-all"
          aria-label="Back to Top"
        >
          <ChevronUp className="h-5.5 w-5.5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
