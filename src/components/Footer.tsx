import { Utensils, MessageCircle, MapPin, Phone, Mail, Instagram, Facebook, Twitter } from 'lucide-react';
import { CONTACT_INFO } from '../data/menu';

interface FooterProps {
  onOpenEnquiry: () => void;
}

export default function Footer({ onOpenEnquiry }: FooterProps) {
  const handleScrollToSection = (id: string) => {
    const section = document.querySelector(id);
    if (section) {
      const navHeight = 84;
      const targetPos = section.getBoundingClientRect().top + window.scrollY - navHeight;
      window.scrollTo({
        top: targetPos,
        behavior: 'smooth',
      });
    }
  };

  return (
    <footer className="bg-slate-950 text-slate-400 py-16 border-t border-slate-900 overflow-hidden shrink-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12 border-b border-slate-900 pb-12">
          
          {/* Logo & Narrative */}
          <div className="md:col-span-1.5 flex flex-col gap-4">
            <div className="flex items-center gap-2 group cursor-pointer" onClick={() => handleScrollToSection('#home')}>
              <div className="p-2 rounded-xl bg-orange-500 text-white">
                <Utensils className="h-5.5 w-5.5" />
              </div>
              <div>
                <span className="font-sans font-extrabold text-xl sm:text-2xl tracking-tight text-white block">
                  Sri Ruchi's
                </span>
                <span className="text-[9px] uppercase font-bold letter tracking-widest text-orange-400 block -mt-1">
                  Food Court
                </span>
              </div>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm mt-2">
              Serving unmatched authentic Indo-Chinese stir-fries, crispy manchurian sizzles, and robust wok recipes in Telangana. Made to demand with 100% premium ingredients.
            </p>

            {/* Social Coordinates row */}
            <div className="flex items-center gap-3.5 mt-2">
              <a
                id="footer-social-instagram"
                href={CONTACT_INFO.socials.instagram}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 bg-slate-900 hover:bg-orange-500 text-slate-300 hover:text-white rounded-xl transition-all hover:scale-106 border border-slate-800"
                aria-label="Follow Sri Ruchi's Food Court on Instagram"
              >
                <Instagram className="h-4.5 w-4.5" />
              </a>
              <a
                id="footer-social-facebook"
                href={CONTACT_INFO.socials.facebook}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 bg-slate-900 hover:bg-orange-500 text-slate-300 hover:text-white rounded-xl transition-all hover:scale-106 border border-slate-800"
                aria-label="Follow Sri Ruchi's Food Court on Facebook"
              >
                <Facebook className="h-4.5 w-4.5" />
              </a>
              <a
                id="footer-social-twitter"
                href={CONTACT_INFO.socials.twitter}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 bg-slate-900 hover:bg-orange-500 text-slate-300 hover:text-white rounded-xl transition-all hover:scale-106 border border-slate-800"
                aria-label="Follow Sri Ruchi's Food Court on Twitter"
              >
                <Twitter className="h-4.5 w-4.5" />
              </a>
            </div>
          </div>

          {/* Quick Nav Limits */}
          <div>
            <h4 className="font-sans font-extrabold text-white text-sm uppercase tracking-wider mb-5">
              Explore Links
            </h4>
            <div className="flex flex-col gap-3 text-sm">
              <button onClick={() => handleScrollToSection('#home')} className="hover:text-orange-400 transition-colors cursor-pointer text-left">
                Home Banner
              </button>
              <button onClick={() => handleScrollToSection('#about')} className="hover:text-orange-400 transition-colors cursor-pointer text-left">
                Our Story
              </button>
              <button onClick={() => handleScrollToSection('#menu')} className="hover:text-orange-400 transition-colors cursor-pointer text-left">
                Gourmet Menu
              </button>
              <button onClick={() => handleScrollToSection('#features')} className="hover:text-orange-400 transition-colors cursor-pointer text-left">
                Core Assets
              </button>
              <button onClick={() => handleScrollToSection('#gallery')} className="hover:text-orange-400 transition-colors cursor-pointer text-left">
                Sights Gallery
              </button>
            </div>
          </div>

          {/* Core Menu categories */}
          <div>
            <h4 className="font-sans font-extrabold text-white text-sm uppercase tracking-wider mb-5">
              Menu Highlights
            </h4>
            <div className="flex flex-col gap-3 text-sm">
              <button onClick={() => handleScrollToSection('#menu')} className="hover:text-orange-400 transition-colors cursor-pointer text-left">
                Sizzling Veg Manchurian
              </button>
              <button onClick={() => handleScrollToSection('#menu')} className="hover:text-orange-400 transition-colors cursor-pointer text-left">
                Gobi Manchurian Dry
              </button>
              <button onClick={() => handleScrollToSection('#menu')} className="hover:text-orange-400 transition-colors cursor-pointer text-left">
                Indo-Chinese Noodles
              </button>
              <button onClick={() => handleScrollToSection('#menu')} className="hover:text-orange-400 transition-colors cursor-pointer text-left">
                Wok-Flipped Fried Rice
              </button>
            </div>
          </div>

          {/* Contact Details floating box */}
          <div className="flex flex-col gap-4">
            <h4 className="font-sans font-extrabold text-white text-sm uppercase tracking-wider mb-1">
              Store Support
            </h4>
            <div className="flex flex-col gap-3 text-sm">
              <div className="flex items-start gap-2 text-slate-400">
                <MapPin className="h-4.5 w-4.5 text-orange-500 shrink-0 mt-0.5" />
                <span className="leading-relaxed">Plot No. 42, Food Street, City Center, Hyderabad</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-orange-500 shrink-0" />
                <a href={`tel:${CONTACT_INFO.phoneSearch}`} className="text-white font-bold hover:text-orange-400">
                  {CONTACT_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2 text-slate-400">
                <Mail className="h-4 w-4 text-orange-500 shrink-0" />
                <span>{CONTACT_INFO.email}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Copywrite notice metadata bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-semibold text-slate-500 mt-8">
          <div>
            Copyright © 2026 Sri Ruchi's Food Court. All rights reserved.
          </div>
          <div className="flex items-center gap-4 text-slate-600">
            <span>Powered by Smart Woks</span>
            <span>•</span>
            <button onClick={onOpenEnquiry} className="hover:text-orange-400 transition-colors font-bold shrink-0 cursor-pointer">
              Place Custom Enquiry
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
