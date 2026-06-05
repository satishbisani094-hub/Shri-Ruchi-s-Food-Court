import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import MenuSection from './components/MenuSection';
import SpecialFeatures from './components/SpecialFeatures';
import GallerySection from './components/GallerySection';
import CustomerReviews from './components/CustomerReviews';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import EnquiryModal from './components/EnquiryModal';
import ScrollToTop from './components/ScrollToTop';
import WhatsAppButton from './components/WhatsAppButton';
import { MenuItem } from './types';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [trayQuantities, setTrayQuantities] = useState<Record<string, number>>({});

  // handle adding items to tray
  const handleAddItemToTray = (item: MenuItem) => {
    setTrayQuantities((prev) => ({
      ...prev,
      [item.id]: (prev[item.id] || 0) + 1,
    }));
  };

  // handle updating item qty
  const handleUpdateQuantity = (itemId: string, newQty: number) => {
    if (newQty <= 0) {
      const temp = { ...trayQuantities };
      delete temp[itemId];
      setTrayQuantities(temp);
    } else {
      setTrayQuantities((prev) => ({
        ...prev,
        [itemId]: newQty,
      }));
    }
  };

  // clear tray items completely
  const handleClearTray = () => {
    setTrayQuantities({});
  };

  useEffect(() => {
    const sections = ['home', 'about', 'menu', 'features', 'gallery', 'reviews', 'contact'];
    
    // Fallback simple window scroll listener if IntersectionObserver is restricted or resized inside iframe
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-orange-500 selection:text-white">
      {/* Navbar header section */}
      <Navbar
        onOpenEnquiry={() => setIsEnquiryOpen(true)}
        activeSection={activeSection}
      />

      <main>
        {/* Hero Section Banner */}
        <Hero onOpenEnquiry={() => setIsEnquiryOpen(true)} />

        {/* About section narrative description layout */}
        <AboutUs />

        {/* Menu Grid Cards Section */}
        <MenuSection
          onAddItemToTray={handleAddItemToTray}
          trayQuantities={trayQuantities}
          onOpenEnquiry={() => setIsEnquiryOpen(true)}
        />

        {/* Five pillars special features checklist cards */}
        <SpecialFeatures />

        {/* Portfolio gallery section displays */}
        <GallerySection />

        {/* Interactive customer feedback testimonials slider */}
        <CustomerReviews />

        {/* Timings, Address contact locator card block */}
        <ContactSection />
      </main>

      {/* Structured Site footer links block */}
      <Footer onOpenEnquiry={() => setIsEnquiryOpen(true)} />

      {/* Floating Action Utilities */}
      <ScrollToTop />
      <WhatsAppButton />

      {/* Sticky Interactive checkout overlay modal */}
      <EnquiryModal
        isOpen={isEnquiryOpen}
        onClose={() => setIsEnquiryOpen(false)}
        trayQuantities={trayQuantities}
        onUpdateQuantity={handleUpdateQuantity}
        onClearTray={handleClearTray}
      />
    </div>
  );
}

