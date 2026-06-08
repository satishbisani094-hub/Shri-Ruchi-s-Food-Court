import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Plus, Minus, ShoppingBag, Send, CreditCard, MessageCircle, Heart, Calendar } from 'lucide-react';
import { MenuItem } from '../types';
import { MENU_ITEMS, CONTACT_INFO } from '../data/menu';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  trayQuantities: Record<string, number>;
  onUpdateQuantity: (itemId: string, newQty: number) => void;
  onClearTray: () => void;
}

export default function EnquiryModal({
  isOpen,
  onClose,
  trayQuantities,
  onUpdateQuantity,
  onClearTray
}: EnquiryModalProps) {
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [customerType, setCustomerType] = useState<'delivery' | 'pickup' | 'dinein'>('pickup');
  const [customInstructions, setCustomInstructions] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMode, setSuccessMode] = useState(false);

  // Filter items in the tray
  const trayItems = MENU_ITEMS.filter((item) => (trayQuantities[item.id] || 0) > 0);

  const calculateTotal = () => {
    return trayItems.reduce((acc, item) => {
      const qty = trayQuantities[item.id] || 0;
      return acc + item.price * qty;
    }, 0);
  };

  const calculateTotalItemsCount = () => {
    return Object.values(trayQuantities).reduce((a, b) => a + b, 0);
  };

  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    if (trayItems.length === 0) return;
    setIsSubmitting(true);

    // Formulate a beautiful WhatsApp order message
    let itemsText = '';
    trayItems.forEach((item, index) => {
      const qty = trayQuantities[item.id];
      itemsText += `\n*${index + 1}. ${item.name}* x ${qty} (₹${item.price * qty})`;
    });

    const typeLabel = customerType === 'delivery' ? '🚚 Home Delivery' : customerType === 'pickup' ? '🛍️ Self Pickup' : '🍽️ Dine-In';
    
    const wappMessage = `*SRI RUCHI'S FOOD COURT - FOOD INQUIRY*
---------------------------------------
*Customer Name:* ${customerName}
*Phone Number:* ${customerPhone}
*Order Type:* ${typeLabel}

*Requested Menu Items:* ${itemsText}

*Subtotal:* ₹${calculateTotal()}
*Special Instructions:* ${customInstructions || 'None'}
---------------------------------------
_This enquiry was submitted dynamically from the promotional website. Please confirm availability and timing._`;

    const encodedMessage = encodeURIComponent(wappMessage);
    const whatsappUrl = `https://wa.me/${CONTACT_INFO.phoneSearch}?text=${encodedMessage}`;

    // Wait a brief second to simulate and save state
    setTimeout(() => {
      setIsSubmitting(false);
      setSuccessMode(true);
      
      // Trigger opening WhatsApp
      window.open(whatsappUrl, '_blank');
    }, 1200);
  };

  const handleCustomFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (trayItems.length === 0) return;
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSuccessMode(true);
    }, 1200);
  };

  const handleDone = () => {
    onClearTray();
    setCustomerName('');
    setCustomerPhone('');
    setCustomInstructions('');
    setSuccessMode(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop mask layer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm pointer-events-auto"
          />

          {/* Modal Container Body */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="bg-white rounded-3xl w-full max-w-lg shadow-2xl relative z-60 max-h-[85vh] overflow-hidden flex flex-col pointer-events-auto border border-orange-50"
          >
            {/* Modal Header */}
            <div className="p-6 border-b border-orange-50 flex items-center justify-between shrink-0 bg-gradient-to-r from-orange-50 to-white">
              <div className="flex items-center gap-2">
                <div className="p-2 bg-orange-500 rounded-xl text-white">
                  <ShoppingBag className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-sans font-extrabold text-slate-900 text-lg sm:text-xl tracking-tight">
                    Your Cart
                  </h3>
                  <p className="text-[11px] font-semibold text-orange-600 uppercase tracking-widest leading-none mt-0.5">
                    {calculateTotalItemsCount()} items selected
                  </p>
                </div>
              </div>

              {/* Close Button Trigger */}
              <button
                id="enquiry-modal-close-btn"
                onClick={onClose}
                className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-50 rounded-full transition-colors focus:outline-none"
              >
                <X className="h-5.5 w-5.5" />
              </button>
            </div>

            {/* Modal Content container wrapper */}
            <div className="p-6 overflow-y-auto flex-grow">
              {successMode ? (
                /* Success Mode Page */
                <div className="text-center py-8">
                  <div className="h-16 w-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MessageCircle className="h-8 w-8 fill-current" />
                  </div>
                  <h4 className="font-sans font-extrabold text-slate-950 text-xl tracking-tight mb-2">
                    Enquiry Placed Successfully!
                  </h4>
                  <p className="text-slate-500 text-sm max-w-sm mx-auto leading-relaxed mb-8">
                    We have launched your Enquiry details straight to Sri Ruchi's Food Court WhatsApp coordinator! A representative will confirm your order availability shortly.
                  </p>

                  <div className="bg-slate-50 p-4 rounded-2xl max-w-xs mx-auto border border-dashed border-slate-200 mb-8 flex flex-col gap-2.5">
                    <div className="flex justify-between text-xs">
                      <span className="text-slate-400">Customer Name</span>
                      <span className="text-slate-800 font-bold">{customerName || 'Walk-In Guest'}</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-slate-400">Order Subtotal</span>
                      <span className="text-orange-600 font-extrabold">₹{calculateTotal()}</span>
                    </div>
                  </div>

                  <button
                    id="enquiry-success-done-btn"
                    onClick={handleDone}
                    className="bg-orange-500 hover:bg-orange-600 text-white font-extrabold px-8 py-3.5 rounded-xl transition-colors text-sm shadow-md"
                  >
                    Done & Clear Tray
                  </button>
                </div>
              ) : trayItems.length === 0 ? (
                /* Empty state warning inside Modal */
                <div className="text-center py-12">
                  <ShoppingBag className="h-12 w-12 text-slate-300 mx-auto mb-3" />
                  <span className="font-bold text-slate-800 block text-lg mb-1">Your Tray is Empty</span>
                  <p className="text-slate-500 text-sm max-w-xs mx-auto">
                    Go ahead and scan the menu list, tap "Add to Cart" to select food items before placing an enquiry!
                  </p>
                  <button
                    id="enquiry-empty-close-btn"
                    onClick={onClose}
                    className="mt-6 border border-orange-500 text-orange-600 font-bold px-5 py-2 rounded-xl text-xs"
                  >
                    Browse Dishes
                  </button>
                </div>
              ) : (
                /* Main Order Checkout and Form Page */
                <div className="space-y-6">
                  {/* Selected items summary list */}
                  <div>
                    <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">
                      Review Items in Tray
                    </h4>
                    <div className="space-y-3 shrink-0">
                      {trayItems.map((item) => {
                        const qty = trayQuantities[item.id] || 0;
                        return (
                          <div
                            key={item.id}
                            className="bg-slate-50 border border-slate-100 p-3 rounded-xl flex items-center justify-between"
                          >
                            <div className="flex items-center gap-3">
                              <img
                                src={item.image}
                                alt={item.name}
                                className="w-12 h-12 rounded-lg object-cover border border-slate-200"
                                referrerPolicy="no-referrer"
                              />
                              <div>
                                <span className="font-extrabold text-slate-900 text-sm block">
                                  {item.name}
                                </span>
                                <span className="text-orange-600 font-bold text-xs">
                                  ₹{item.price} each
                                </span>
                              </div>
                            </div>

                            {/* Increaser buttons */}
                            <div className="flex items-center gap-2 border bg-white rounded-lg p-1 shadow-sm">
                              <button
                                id={`tray-item-decrease-${item.id}`}
                                type="button"
                                onClick={() => onUpdateQuantity(item.id, qty - 1)}
                                className="p-1 rounded text-slate-500 hover:bg-slate-100"
                              >
                                <Minus className="h-3.5 w-3.5" />
                              </button>
                              <span className="font-extrabold text-sm text-slate-800 px-1 font-mono">
                                {qty}
                              </span>
                              <button
                                id={`tray-item-increase-${item.id}`}
                                type="button"
                                onClick={() => onUpdateQuantity(item.id, qty + 1)}
                                className="p-1 rounded text-slate-500 hover:bg-slate-100"
                              >
                                <Plus className="h-3.5 w-3.5" />
                              </button>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Calculations subtotal */}
                  <div className="flex items-center justify-between p-4 bg-orange-50/50 border border-orange-100 rounded-2xl shrink-0">
                    <div>
                      <span className="text-xs text-slate-500 font-semibold block">Estimated Subtotal</span>
                      <span className="text-[10px] text-orange-600 block -mt-0.5 font-medium">*Prices are exclusive of taxes</span>
                    </div>
                    <span className="font-sans font-black text-2xl text-slate-900">
                      ₹{calculateTotal()}
                    </span>
                  </div>

                  {/* Form Submission inputs */}
                  <form onSubmit={handleSendWhatsApp} className="space-y-4">
                    <h4 className="text-xs font-bold text-slate-550 uppercase tracking-widest border-t border-slate-100 pt-4 block">
                      Enquiry & Contact Information
                    </h4>

                    {/* Name input */}
                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Your Full Name
                      </label>
                      <input
                        id="enquiry-form-name-input"
                        type="text"
                        required
                        placeholder="e.g. Satish Rao"
                        value={customerName}
                        onChange={(e) => setCustomerName(e.target.value)}
                        className="w-full text-sm font-medium text-slate-850 px-4 py-2.5 bg-slate-50 border border-slate-100 rounded-xl focus:outline-none focus:border-orange-500 focus:bg-white"
                      />
                    </div>

                    {/* Phone input */}
                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Phone Number (WhatsApp Preferred)
                      </label>
                      <input
                        id="enquiry-form-phone-input"
                        type="tel"
                        required
                        placeholder="e.g. +91 98765 43210"
                        value={customerPhone}
                        onChange={(e) => setCustomerPhone(e.target.value)}
                        className="w-full text-sm font-medium text-slate-850 px-4 py-2.5 bg-slate-50 border border-slate-100 rounded-xl focus:outline-none focus:border-orange-500 focus:bg-white"
                      />
                    </div>

                    {/* Order Type Toggle Pills */}
                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Order Fulfilment Type
                      </label>
                      <div className="grid grid-cols-3 gap-2">
                        {(['pickup', 'delivery', 'dinein'] as const).map((type) => (
                          <button
                            id={`enquiry-type-btn-${type}`}
                            key={type}
                            type="button"
                            onClick={() => setCustomerType(type)}
                            className={`py-2 rounded-xl text-xs font-extrabold uppercase transition-all border ${
                              customerType === type
                                ? 'bg-orange-500 text-white border-orange-500 shadow-md shadow-orange-500/10'
                                : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
                            }`}
                          >
                            {type === 'pickup' ? '🛍️ Pickup' : type === 'delivery' ? '🚚 Delivery' : '🍽️ Dine-In'}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Instructions */}
                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Special Instructions
                      </label>
                      <textarea
                        id="enquiry-form-instructions-textarea"
                        rows={2}
                        placeholder="e.g. 'Make Veg noodles extra spicy and non-greasy...'"
                        value={customInstructions}
                        onChange={(e) => setCustomInstructions(e.target.value)}
                        className="w-full text-sm font-medium text-slate-850 px-4 py-2.5 bg-slate-50 border border-slate-100 rounded-xl focus:outline-none focus:border-orange-500 focus:bg-white"
                      />
                    </div>

                    {/* Submission button with WhatsApp logo */}
                    <button
                      id="enquiry-whatsapp-submit-btn"
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-emerald-500 hover:bg-emerald-600 disabled:bg-emerald-300 text-white font-extrabold py-3.5 rounded-xl text-sm transition-all shadow-md shadow-emerald-500/20 flex items-center justify-center gap-2 cursor-pointer mt-4"
                    >
                      <MessageCircle className="h-5 w-5 fill-current" />
                      <span>{isSubmitting ? 'Formulating Order Message...' : 'Submit Inquiry via WhatsApp'}</span>
                    </button>
                  </form>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
