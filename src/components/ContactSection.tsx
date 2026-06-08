import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, MessageSquare, Compass, Send } from 'lucide-react';
import { CONTACT_INFO } from '../data/menu';

export default function ContactSection() {
  const [senderName, setSenderName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [senderPhone, setSenderPhone] = useState('');
  const [senderMessage, setSenderMessage] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    // Simulate simple successful network transit
    setTimeout(() => {
      setIsSending(false);
      setIsSent(true);
      setSenderName('');
      setSenderEmail('');
      setSenderPhone('');
      setSenderMessage('');

      setTimeout(() => {
        setIsSent(false);
      }, 4000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-slate-55 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-mono text-xs uppercase tracking-widest text-orange-600 font-bold bg-orange-100 px-3.5 py-1.5 rounded-full inline-block mb-3">
            Get In Touch
          </span>
          <h2 className="font-sans font-extrabold text-slate-900 text-3xl sm:text-4xl md:text-5xl tracking-tight mb-4">
            Visit Our Food Paradise
          </h2>
          <p className="text-slate-500 text-sm sm:text-base">
            Have a catering request, query about our spice customizers, or want to host a private party? Reach out directly!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto">
          
          {/* Left Column: Coordinates details & timinds */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Quick Contact coordinates cards block */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-xl shadow-slate-200/40 flex flex-col gap-5 sm:gap-6">
              <h3 className="font-sans font-extrabold text-slate-900 text-xl tracking-tight mb-2 border-b border-orange-50 pb-4">
                Sri Ruchi's Food Court
              </h3>

              {/* Address card */}
              <div className="flex gap-4">
                <div className="p-2.5 rounded-xl bg-orange-50 text-orange-500 shrink-0 h-fit">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <span className="font-sans font-extrabold text-xs text-slate-700 uppercase tracking-widest block mb-1">
                    Store Location
                  </span>
                  <p className="text-slate-600 text-sm sm:text-base font-semibold leading-relaxed">
                    {CONTACT_INFO.address}
                  </p>
                </div>
              </div>

              {/* Phone card */}
              <div className="flex gap-4">
                <div className="p-2.5 rounded-xl bg-orange-50 text-orange-500 shrink-0 h-fit">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <span className="font-sans font-extrabold text-xs text-slate-700 uppercase tracking-widest block mb-1">
                    Call & Order
                  </span>
                  <a
                    id="contact-call-link"
                    href={`tel:${CONTACT_INFO.phoneSearch}`}
                    className="text-slate-900 text-base sm:text-lg font-black hover:text-orange-600 transition-colors"
                  >
                    {CONTACT_INFO.phone}
                  </a>
                </div>
              </div>

              {/* Timings card */}
              <div className="flex gap-4">
                <div className="p-2.5 rounded-xl bg-orange-50 text-orange-500 shrink-0 h-fit">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <span className="font-sans font-extrabold text-xs text-slate-700 uppercase tracking-widest block mb-1">
                    Dine-In & Delivery Hours
                  </span>
                  <div className="flex flex-col gap-1 mt-1 text-slate-650 text-sm font-semibold">
                    {CONTACT_INFO.openingHours.map((itm, i) => (
                      <div key={i}>
                        <span className="text-slate-900 font-extrabold block">{itm.days}</span>
                        <span className="text-xs text-slate-500 block -mt-0.5">{itm.hours}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Embed Map Card */}
            <div className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-xl shadow-slate-200/40 aspect-[4/3] flex flex-col relative group">
              <iframe
                title="Sri Ruchi Food Court Google Maps Coordinates Location"
                src={CONTACT_INFO.gmapsEmbedUrl}
                className="w-full h-full border-0 absolute inset-0"
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              {/* Compass floating button */}
              <a
                id="contact-gmaps-direction-btn"
                href="https://maps.google.com"
                target="_blank"
                rel="noreferrer"
                className="absolute bottom-4 right-4 bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-full shadow-lg transition-transform hover:scale-106 flex items-center justify-center gap-1.5 font-bold text-xs px-4"
              >
                <Compass className="h-4.5 w-4.5 animate-spin-slow" />
                <span>Get Directions</span>
              </a>
            </div>
          </div>

          {/* Right Column: Contact Enquiry form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-xl shadow-slate-200/40 relative">
              <h3 className="font-sans font-extrabold text-slate-900 text-2xl tracking-tight mb-2">
                Send Us a Fast Message
              </h3>
              <p className="text-slate-500 text-sm sm:text-base mb-6">
                Fill the details below, and our food court coordinator will get back to you within 30 minutes!
              </p>

              {isSent ? (
                <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-6 text-center py-12">
                  <div className="h-12 w-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Send className="h-5 w-5 fill-current" />
                  </div>
                  <span className="font-extrabold text-slate-950 block text-lg mb-1">Message Sent Successfully!</span>
                  <p className="text-slate-500 text-sm max-w-sm mx-auto">
                    We received your queries and are reviewing details. We will notify you via callback or email.
                  </p>
                </div>
              ) : (
                <form id="contact-coordinates-form" onSubmit={handleContactSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-widest mb-1.5">
                      Full Name
                    </label>
                    <input
                      id="contact-form-name-input"
                      type="text"
                      required
                      placeholder="e.g. Ramesh Kumar"
                      value={senderName}
                      onChange={(e) => setSenderName(e.target.value)}
                      className="w-full text-sm font-medium text-slate-800 placeholder-slate-400 px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl focus:outline-none focus:border-orange-500 focus:bg-white transition-all duration-200"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-widest mb-1.5">
                        Email Address
                      </label>
                      <input
                        id="contact-form-email-input"
                        type="email"
                        required
                        placeholder="e.g. ramesh@gmail.com"
                        value={senderEmail}
                        onChange={(e) => setSenderEmail(e.target.value)}
                        className="w-full text-sm font-medium text-slate-800 placeholder-slate-400 px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl focus:outline-none focus:border-orange-500 focus:bg-white transition-all duration-200"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-widest mb-1.5">
                        Phone Number
                      </label>
                      <input
                        id="contact-form-phone-input"
                        type="tel"
                        required
                        placeholder="e.g. +91 91234 56789"
                        value={senderPhone}
                        onChange={(e) => setSenderPhone(e.target.value)}
                        className="w-full text-sm font-medium text-slate-800 placeholder-slate-400 px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl focus:outline-none focus:border-orange-500 focus:bg-white transition-all duration-200"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-widest mb-1.5">
                      Your Message or Inquiry
                    </label>
                    <textarea
                      id="contact-form-message-textarea"
                      rows={4}
                      required
                      placeholder="Tell us what you need. (e.g. 'Do you offer catering for 50 people on Sundays?', or details about spice limits...)"
                      value={senderMessage}
                      onChange={(e) => setSenderMessage(e.target.value)}
                      className="w-full text-sm font-medium text-slate-800 placeholder-slate-400 px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl focus:outline-none focus:border-orange-500 focus:bg-white transition-all duration-200 animate-fade-in"
                    />
                  </div>

                  <button
                    id="contact-form-submit-btn"
                    type="submit"
                    disabled={isSending}
                    className="w-full bg-orange-500 hover:bg-orange-600 disabled:bg-orange-300 text-white font-extrabold py-4 px-6 text-sm rounded-xl transition-colors cursor-pointer flex items-center justify-center gap-2"
                  >
                    <span>{isSending ? 'Sending Inquiry...' : 'Submit Message'}</span>
                    <Send className="h-4 w-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
