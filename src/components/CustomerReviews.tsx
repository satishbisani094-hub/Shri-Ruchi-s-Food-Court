import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, MessageSquarePlus, MessageSquareDashed, Quote } from 'lucide-react';
import { REVIEWS } from '../data/menu';
import { Review } from '../types';

export default function CustomerReviews() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [showForm, setShowForm] = useState(false);
  
  // Form States
  const [reviewerName, setReviewerName] = useState('');
  const [userRating, setUserRating] = useState(5);
  const [userComment, setUserComment] = useState('');
  const [userDish, setUserDish] = useState('Veg Manchurian');
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    // Load reviews, merging predefined static ones from data/menu with any custom submissions
    const stored = localStorage.getItem('sriruchi_reviews');
    if (stored) {
      try {
        const parsed = JSON.parse(stored) as Review[];
        setReviews([...parsed, ...REVIEWS]);
      } catch (e) {
        setReviews(REVIEWS);
      }
    } else {
      setReviews(REVIEWS);
    }
  }, []);

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!reviewerName.trim() || !userComment.trim()) return;

    const newReview: Review = {
      id: `custom-rev-${Date.now()}`,
      name: reviewerName,
      rating: userRating,
      comment: userComment,
      date: 'Just now',
      dishName: userDish,
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80' // placeholder avatar
    };

    const updatedCustomList = [newReview, ...reviews.filter(r => r.id.startsWith('custom-rec'))];
    
    // Save only custom ones to local storage
    const customOnly = [newReview, ...reviews.filter(r => r.id.startsWith('custom-rev'))];
    localStorage.setItem('sriruchi_reviews', JSON.stringify(customOnly));

    // Update state directly (custom prepended, static kept)
    setReviews([newReview, ...reviews]);
    
    // Reset form
    setReviewerName('');
    setUserRating(5);
    setUserComment('');
    setIsSubmitted(true);
    
    setTimeout(() => {
      setIsSubmitted(false);
      setShowForm(false);
    }, 2500);
  };

  return (
    <section id="reviews" className="py-20 sm:py-28 bg-white relative overflow-hidden">
      {/* Decorative Warm Elements */}
      <div className="absolute top-10 left-12 w-64 h-64 bg-amber-100/30 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-12 w-80 h-80 bg-orange-100/20 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with "Write Review" toggle */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-xl">
            <span className="font-mono text-xs uppercase tracking-widest text-orange-600 font-bold bg-orange-100 px-3.5 py-1.5 rounded-full inline-block mb-3">
              Words of Satisfaction
            </span>
            <h2 className="font-sans font-extrabold text-slate-900 text-3xl sm:text-4xl md:text-5xl tracking-tight leading-tight">
              Customer Love & Honest Tastings
            </h2>
          </div>
          
          <button
            id="reviews-write-review-toggle-btn"
            onClick={() => setShowForm(!showForm)}
            className="flex items-center gap-2 border border-orange-500 text-orange-650 hover:bg-orange-50 font-bold px-6 py-3 rounded-full transition-colors shrink-0 max-w-fit"
          >
            {showForm ? <MessageSquareDashed className="h-4.5 w-4.5" /> : <MessageSquarePlus className="h-4.5 w-4.5" />}
            <span>{showForm ? 'Cancel Review' : 'Write a Review'}</span>
          </button>
        </div>

        {/* Animated Slide-in Review writing form */}
        <AnimatePresence>
          {showForm && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mb-12 overflow-hidden max-w-2xl mx-auto"
            >
              <div className="bg-orange-50/50 border border-orange-100 p-6 sm:p-8 rounded-3xl relative">
                {isSubmitted ? (
                  <div className="text-center py-8">
                    <div className="h-12 w-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 mx-auto mb-3">
                      <Star className="h-6 w-6 fill-current" />
                    </div>
                    <span className="font-extrabold text-slate-950 block text-lg mb-1">Feedback Submitted Successfully!</span>
                    <span className="text-slate-500 text-sm">Thank you for sharing your love with Sri Ruchi's Food Court!</span>
                  </div>
                ) : (
                  <form onSubmit={handleReviewSubmit} className="space-y-4">
                    <h3 className="font-sans font-extrabold text-slate-900 text-lg sm:text-xl">
                      Share Your Dining Experience
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Name input */}
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-widest mb-1.5">
                          Your Name
                        </label>
                        <input
                          id="review-form-name-input"
                          type="text"
                          required
                          placeholder="e.g. Satish Rao"
                          value={reviewerName}
                          onChange={(e) => setReviewerName(e.target.value)}
                          className="w-full text-sm font-medium text-slate-800 placeholder-slate-400 px-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:border-orange-500"
                        />
                      </div>

                      {/* Tagged dish selection */}
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-widest mb-1.5">
                          Favorite Dish
                        </label>
                        <select
                          id="review-form-dish-select"
                          value={userDish}
                          onChange={(e) => setUserDish(e.target.value)}
                          className="w-full text-sm font-medium text-slate-800 px-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:border-orange-500"
                        >
                          <option value="Veg Manchurian">Veg Manchurian</option>
                          <option value="Veg Noodles">Veg Noodles</option>
                          <option value="Chicken Manchurian">Chicken Manchurian</option>
                          <option value="Veg Fried Rice">Veg Fried Rice</option>
                          <option value="Gobi Manchurian">Gobi Manchurian</option>
                        </select>
                      </div>
                    </div>

                    {/* Star selection */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-widest mb-1.5">
                        Your Rating
                      </label>
                      <div className="flex items-center gap-1">
                        {[1, 2, 3, 4, 5].map((num) => (
                          <button
                            id={`review-form-star-btn-${num}`}
                            key={num}
                            type="button"
                            onClick={() => setUserRating(num)}
                            className="p-1 focus:outline-none"
                          >
                            <Star className={`h-7 w-7 transition-colors ${
                              userRating >= num ? 'text-amber-500 fill-amber-500' : 'text-slate-300'
                            }`} />
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Review text */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-widest mb-1.5">
                        Your Honest Comments
                      </label>
                      <textarea
                        id="review-form-comments-input"
                        rows={3}
                        required
                        placeholder="Write details about the taste, textures, service velocity, or spice levels..."
                        value={userComment}
                        onChange={(e) => setUserComment(e.target.value)}
                        className="w-full text-sm font-medium text-slate-800 placeholder-slate-400 px-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:border-orange-500"
                      />
                    </div>

                    {/* Submit */}
                    <button
                      id="review-form-submit-btn"
                      type="submit"
                      className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-xl text-sm transition-colors cursor-pointer w-full"
                    >
                      Publish Online Review
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Display Reviews Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {reviews.map((review, idx) => (
            <motion.div
              layout
              key={review.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              id={`customer-review-card-${review.id}`}
              className="bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-100 flex flex-col relative group hover:shadow-xl hover:border-orange-100 transition-all duration-300"
            >
              {/* Giant quote decorator mark */}
              <div className="absolute right-6 top-6 text-slate-250 group-hover:text-orange-500/10 transition-colors pointer-events-none">
                <Quote className="h-10 w-10 rotate-180 fill-current opacity-30" />
              </div>

              {/* Star Rating display */}
              <div className="flex items-center gap-1 text-amber-500 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4.5 w-4.5 ${
                      i < review.rating ? 'fill-current text-amber-500' : 'text-slate-300'
                    }`}
                  />
                ))}
              </div>

              {/* Review Comment Text */}
              <p className="text-slate-650 text-sm sm:text-base leading-relaxed mb-6 flex-grow font-medium italic">
                "{review.comment}"
              </p>

              {/* Reviewer Meta Row */}
              <div className="flex items-center gap-3.5 border-t border-slate-200/60 pt-4 mt-auto">
                {review.avatar ? (
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="w-10 h-10 rounded-full object-cover border border-slate-200"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <div className="w-10 h-10 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center font-bold text-sm border border-orange-200">
                    {review.name.charAt(0)}
                  </div>
                )}
                <div>
                  <span className="font-sans font-extrabold text-sm text-slate-900 block leading-tight">
                    {review.name}
                  </span>
                  
                  {/* Tagged selection indicator */}
                  <div className="flex items-center gap-1.5 mt-0.5">
                    {review.dishName && (
                      <span className="text-[10px] uppercase font-bold text-orange-600 bg-orange-100/50 px-1.5 py-0.5 rounded">
                        {review.dishName}
                      </span>
                    )}
                    <span className="text-[10px] text-slate-400 font-medium">
                      {review.date}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
