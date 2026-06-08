import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';
import { CONTACT_INFO } from '../data/menu';

export default function WhatsAppButton() {
  const handleOpenWhatsAppMsg = () => {
    const defaultText = encodeURIComponent(`Hello Sri Ruchi's Food Court! I was browsing your gorgeous promotional website and would love to ask about your menu specialties.`);
    window.open(`https://wa.me/${CONTACT_INFO.phoneSearch}?text=${defaultText}`, '_blank');
  };

  return (
    <motion.button
      id="whatsapp-chat-floating-btn"
      onClick={handleOpenWhatsAppMsg}
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1 }}
      whileHover={{ scale: 1.06 }}
      className="fixed bottom-6 right-6 z-35 bg-emerald-550 bg-emerald-500 text-white p-4 rounded-full shadow-2xl hover:bg-emerald-600 transition-colors flex items-center justify-center cursor-pointer border border-emerald-400/20"
      aria-label="Direct WhatsApp Chat"
    >
      <MessageCircle className="h-6 w-6 fill-current text-white" />
      {/* Visual pulse glow trigger rings */}
      <span className="absolute inset-0 rounded-full border-4 border-emerald-500 animate-ping opacity-25 pointer-events-none" />
    </motion.button>
  );
}
