import React, { useState, useEffect } from 'react';
import { Menu, X, Utensils, Phone } from 'lucide-react';
import WegManjuryaImg from '../assets/images/weg_manjurya.png';
import { CONTACT_INFO } from '../data/menu';

interface NavbarProps {
  onOpenEnquiry: () => void;
  activeSection: string;
}

export default function Navbar({ onOpenEnquiry, activeSection }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About Us', href: '#about', id: 'about' },
    { name: 'Menu', href: '#menu', id: 'menu' },
    { name: 'Features', href: '#features', id: 'features' },
    { name: 'Gallery', href: '#gallery', id: 'gallery' },
    { name: 'Reviews', href: '#reviews', id: 'reviews' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const navHeight = 80;
      const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - navHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <nav
      id="navbar"
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md py-3 text-slate-800 border-b border-orange-50'
          : 'bg-gradient-to-b from-black/60 to-transparent py-5 text-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a
            id="nav-logo"
            href="#home"
            onClick={(e) => handleLinkClick(e, '#home')}
            className="flex items-center gap-2 group"
          >
            <div className={`p-2 rounded-xl transition-colors duration-300 ${isScrolled ? 'bg-orange-500 text-white' : 'bg-white/15 text-orange-400 group-hover:bg-orange-500 group-hover:text-white'}`}>
              <img
                src={WegManjuryaImg}
                alt="Weg Manjurya"
                className="h-6 w-6 object-cover rounded-full"
              />
            </div>
            <div>
              <span className="font-sans font-extrabold text-xl sm:text-2xl tracking-tight block">
                Sri Ruchi's
              </span>
              <span className={`text-[10px] uppercase font-semibold letter tracking-widest block -mt-1 ${isScrolled ? 'text-orange-600' : 'text-orange-300'}`}>
                Food Court
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-8">
            <div className="flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    id={`nav-link-${link.id}`}
                    key={link.id}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className={`px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 relative group`}
                  >
                    <span className={isActive ? 'text-orange-500 font-semibold' : (isScrolled ? 'text-slate-600 hover:text-orange-500' : 'text-slate-100 hover:text-orange-300')}>
                      {link.name}
                    </span>
                    {/* Hover indicator */}
                    <span
                      className={`absolute bottom-0 left-3 right-3 h-0.5 bg-orange-500 transition-transform duration-300 origin-left ${
                        isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                      }`}
                    />
                  </a>
                );
              })}
            </div>

            {/* Quick Action Buttons */}
            <div className="flex items-center gap-3">
              <a
                id="navbar-call-btn"
                href={`tel:${CONTACT_INFO.phoneSearch}`}
                className={`flex items-center gap-2 border px-4 py-2 text-sm font-semibold rounded-full transition-all duration-300 ${
                  isScrolled
                    ? 'border-orange-500 text-orange-600 hover:bg-orange-550 hover:bg-orange-50'
                    : 'border-white/40 text-white hover:bg-white/10'
                }`}
              >
                <Phone className="h-4 w-4" />
                <span>Call Now</span>
              </a>
              <button
                id="navbar-enquiry-btn"
                onClick={onOpenEnquiry}
                className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 text-sm font-bold rounded-full transition-all duration-300 transform hover:scale-[1.03] shadow-lg shadow-orange-500/20"
              >
                Order Enquiry
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden items-center gap-3">
            <a
              id="nav-mobile-call-icon"
              href={`tel:${CONTACT_INFO.phoneSearch}`}
              className={`p-2 rounded-full border transition-colors duration-205 ${
                isScrolled ? 'border-orange-200 text-orange-500 bg-orange-50' : 'border-white/20 text-orange-300'
              }`}
            >
              <Phone className="h-5 w-5" />
            </a>

            <button
              id="nav-hamburger-toggle"
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-lg focus:outline-none transition-colors duration-200 ${
                isScrolled ? 'text-slate-800 hover:bg-slate-100' : 'text-white hover:bg-white/10'
              }`}
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu panel */}
      {isOpen && (
        <div
          id="mobile-nav-panel"
          className="lg:hidden bg-white shadow-xl max-w-full absolute top-20 left-0 w-full animate-fade-in border-b border-orange-50"
        >
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  id={`mobile-nav-link-${link.id}`}
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`block px-4 py-3 rounded-xl text-base font-semibold transition-all duration-150 ${
                    isActive
                      ? 'bg-orange-50 text-orange-600 font-bold'
                      : 'text-slate-700 hover:bg-slate-50 hover:text-orange-500'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
            <div className="pt-4 flex flex-col gap-3 px-4">
              <a
                id="mobile-nav-call-btn"
                href={`tel:${CONTACT_INFO.phoneSearch}`}
                className="flex items-center justify-center gap-2 border border-orange-500 text-orange-600 font-bold py-3 px-4 rounded-xl hover:bg-orange-50 transition-colors"
              >
                <Phone className="h-5 w-5" />
                <span>Call Us To Order ({CONTACT_INFO.phone})</span>
              </a>
              <button
                id="mobile-nav-enquiry-btn"
                onClick={() => {
                  setIsOpen(false);
                  onOpenEnquiry();
                }}
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-extrabold py-3 px-4 rounded-xl text-center shadow-md shadow-orange-500/10 transition-colors"
              >
                Place Custom Enquiry
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
