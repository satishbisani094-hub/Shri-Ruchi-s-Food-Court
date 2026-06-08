import { motion } from 'motion/react';
import * as Icons from 'lucide-react';
import { FEATURES } from '../data/menu';

export default function SpecialFeatures() {
  return (
    <section id="features" className="py-20 sm:py-28 bg-white relative overflow-hidden">
      {/* Visual background flourishes */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-orange-100/30 rounded-full filter blur-3xl" />
      <div className="absolute -bottom-10 right-0 w-96 h-96 bg-amber-50/40 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-mono text-xs uppercase tracking-widest text-orange-600 font-bold bg-orange-100 px-3.5 py-1.5 rounded-full inline-block mb-3">
            Why Dine With Us
          </span>
          <h2 className="font-sans font-extrabold text-slate-900 text-3xl sm:text-4xl md:text-5xl tracking-tight mb-4">
            The Golden Standards of Sri Ruchi's
          </h2>
          <p className="text-slate-500 text-sm sm:text-base">
            Behind every order is a strict commitment to hygiene, meticulous culinary craft, and outstanding hospitality values.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-full">
          {FEATURES.map((feature, idx) => {
            // Dynamically lookup the Lucide icon from string value
            const IconComponent = (Icons as any)[feature.iconName] || Icons.CheckCircle;

            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                id={`feature-card-${feature.id}`}
                className="bg-slate-50 rounded-3xl p-6 border border-slate-100 transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/5 hover:border-orange-100 flex flex-col group relative overflow-hidden"
              >
                {/* Decorative subtle background icon mask */}
                <div className="absolute -right-6 -bottom-6 text-slate-100 group-hover:text-orange-500/5 transition-colors duration-300">
                  <IconComponent className="h-32 w-32 stroke-[1.2]" />
                </div>

                {/* Main Icon Holder */}
                <div className="p-3.5 rounded-2xl bg-white text-orange-500 shadow-md shadow-slate-100 group-hover:bg-orange-500 group-hover:text-white transition-all duration-305 w-fit mb-5">
                  <IconComponent className="h-6 w-6 stroke-[2]" />
                </div>

                {/* Details */}
                <h3 className="font-sans font-extrabold text-slate-800 text-lg sm:text-xl tracking-tight mb-2 relative z-10">
                  {feature.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed relative z-10 flex-grow">
                  {feature.description}
                </p>

                {/* Animated status corner ribbon */}
                <div className="absolute top-0 right-0 w-1.5 h-full bg-transparent group-hover:bg-orange-500 transition-colors" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
