import { motion } from 'motion/react';
import { Award, Heart, ShieldCheck, UtensilsCrossed } from 'lucide-react';
import { MENU_ITEMS } from '../data/menu';
import chickenManchurianImg from '../assets/images/chicken_manchurian_1780663660184.png';
export default function AboutUs() {
  const stats = [
    { label: 'Signature Dishes', value: '5+', desc: 'Perfected gourmet options', icon: UtensilsCrossed },
    { label: 'Quality Standards', value: '100%', desc: 'Hygienic prep guarantee', icon: ShieldCheck },
    { label: 'Customer Love', value: '4.9★', desc: 'Over hundreds of reviews', icon: Heart },
    { label: 'Chef Expertise', value: '10+ Yrs', desc: 'Sizzling wok mastery', icon: Award },
  ];

  return (
    <section
      id="about"
      className="py-20 sm:py-28 bg-gradient-to-b from-white to-orange-50/20 relative overflow-hidden"
    >
      {/* Decorative Warm Shapes */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-orange-200/20 rounded-full filter blur-3xl z-0" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-amber-100/30 rounded-full filter blur-3xl z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Column: Artistic Visual Showcase (using existing noodle images cleanly) */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative">
              {/* Main Image Shield */}
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl relative border-4 border-white">
                <img
                  src={chickenManchurianImg} // Chicken Manchurian
                  alt="Sri Ruchi's Crispy Manchurian Preparation"
                  className="w-full h-full object-cover filter brightness-95 transform hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <p className="font-mono text-xs uppercase tracking-widest text-orange-400 font-semibold mb-1">Signature Delicacy</p>
                  <p className="font-sans font-bold text-lg">Sri Ruchi's Signature Manchurian Sauce</p>
                </div>
              </div>

              {/* Offset Image Card */}
              <div className="absolute -bottom-6 -right-6 w-3/5 aspect-square rounded-2xl overflow-hidden shadow-xl border-4 border-white hidden sm:block">
                <img
                  src={MENU_ITEMS[1].image} // Veg Noodles
                  alt="Aromatic stir noodles"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Decorative accent lines */}
              <div className="absolute -top-4 -left-4 w-12 h-12 border-t-4 border-l-4 border-orange-500 rounded-tl-xl" />
              <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-4 border-r-4 border-orange-500 rounded-br-col hidden sm:block" />
            </div>
          </div>

          {/* Right Column: Narrative */}
          <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
            >
              <span className="font-mono text-xs uppercase tracking-widest text-orange-600 font-bold bg-orange-100/60 px-3.5 py-1.5 rounded-full inline-block mb-4">
                Our Story & Philosophy
              </span>
              <h2 className="font-sans font-extrabold text-slate-900 text-3xl sm:text-4xl md:text-5xl tracking-tight leading-tight mb-6">
                Where Taste{' '}
                <span className="relative inline-block text-orange-600">
                  Meets Quality
                  {/* Scribble line aesthetic */}
                  <span className="absolute bottom-1 left-0 w-full h-1 bg-amber-400 rounded-full -rotate-1 transform" />
                </span>
              </h2>

              <p className="text-slate-650 text-base sm:text-lg mb-6 leading-relaxed">
                Welcome to <strong>Sri Ruchi's Food Court</strong>, where taste meets quality. We serve freshly prepared dishes made with high-quality ingredients and authentic flavors. Our mission is to provide delicious food and a memorable dining experience for every customer.
              </p>

              <p className="text-slate-600 text-sm sm:text-base mb-8 leading-relaxed">
                Whether you crave the fiery sizzle of our legendary Gobi Manchurian, the rich smoky savor of wok-cooked noodles, or aromatic golden fried rice, our culinary masters prepare each order fresh to demand. We bridge the rich traditions of Indo-Chinese gourmet street food with a welcoming, hygienic, and modern physical food court atmosphere.
              </p>
            </motion.div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 gap-4 lg:gap-6">
              {stats.map((stat, idx) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="p-4 rounded-2xl bg-white border border-slate-100 hover:border-orange-200 hover:shadow-lg hover:shadow-orange-500/5 transition-all duration-300 flex items-start gap-3.5 group"
                  >
                    <div className="p-2.5 rounded-xl bg-orange-50 text-orange-500 group-hover:bg-orange-550 group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300 shrink-0">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-sans font-extrabold text-xl sm:text-2xl text-slate-900 leading-none mb-1">
                        {stat.value}
                      </div>
                      <div className="font-medium text-slate-800 text-xs sm:text-sm">
                        {stat.label}
                      </div>
                      <div className="text-[11px] text-slate-500 leading-tight">
                        {stat.desc}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
