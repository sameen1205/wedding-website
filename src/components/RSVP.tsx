'use client';

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Heart, Send, CheckCircle2, Music, Utensils, Users, Sparkles, RefreshCw, Sun, Moon } from 'lucide-react';
import { weddingDetails } from '@/data/weddingData';

export default function RSVP() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    attending: 'yes',
    guestCount: '1',
    functionsAttending: ['haldi', 'sangeet', 'nikah', 'reception'],
    dietary: 'vegetarian',
    songRequest: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Magnetic button physics
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const [btnPos, setBtnPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    setBtnPos({ x: x * 0.25, y: y * 0.25 });
  };

  const handleMouseLeave = () => {
    setBtnPos({ x: 0, y: 0 });
  };

  const toggleFunctionAttending = (id: string) => {
    if (formData.functionsAttending.includes(id)) {
      setFormData({
        ...formData,
        functionsAttending: formData.functionsAttending.filter((f) => f !== id),
      });
    } else {
      setFormData({
        ...formData,
        functionsAttending: [...formData.functionsAttending, id],
      });
    }
  };

  const fireIndianCelebrationConfetti = () => {
    // Vibrant Indian marigold yellow, crimson, emerald & gold zari explosion
    const count = 250;
    const defaults = {
      origin: { y: 0.7 },
      colors: ['#FFD700', '#F59E0B', '#BE123C', '#0F766E', '#FFFDF9', '#E11D48'],
    };

    function fire(particleRatio: number, opts: confetti.Options) {
      confetti({
        ...defaults,
        ...opts,
        particleCount: Math.floor(count * particleRatio),
      });
    }

    fire(0.25, {
      spread: 26,
      startVelocity: 55,
    });
    fire(0.2, {
      spread: 60,
    });
    fire(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.9,
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 30,
      decay: 0.92,
      scalar: 1.2,
    });
    fire(0.1, {
      spread: 130,
      startVelocity: 45,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      if (formData.attending === 'yes') {
        fireIndianCelebrationConfetti();
      }
    }, 1000);
  };

  const resetForm = () => {
    setIsSubmitted(false);
  };

  return (
    <section id="rsvp" className="relative py-28 sm:py-36 bg-ivory text-charcoal overflow-hidden bg-raw-silk border-t border-gold/30">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[850px] rounded-full bg-gradient-to-br from-marigold-light/50 via-crimson-light/30 to-peacock-light/30 blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <span className="w-10 h-[1.5px] bg-gradient-to-r from-transparent to-gold" />
            <span className="text-xs uppercase tracking-luxury font-sans text-crimson font-bold">
              Kripya Pratigya Karein • Kindly Respond
            </span>
            <span className="w-10 h-[1.5px] bg-gradient-to-l from-transparent to-gold" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-charcoal tracking-tight"
          >
            Will You Grace Our Celebrations?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="mt-4 text-charcoal-soft/80 font-sans text-sm sm:text-base leading-relaxed"
          >
            Please confirm your presence by October 15, 2026 so we may prepare your royal hospitality in Bangalore.
          </motion.p>
        </div>

        {/* Floating Card Container */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            type: 'spring',
            stiffness: 50,
            damping: 18,
            delay: 0.2,
          }}
          className="relative rounded-3xl bg-ivory border-2 border-gold/50 p-8 sm:p-14 shadow-2xl backdrop-blur-xl overflow-hidden"
        >
          {/* Golden Brocade Crest Border Top Accent */}
          <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-marigold via-gold-metallic to-crimson" />

          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.form
                key="rsvp-form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                onSubmit={handleSubmit}
                className="space-y-8"
              >
                {/* Attendance Radio Pills */}
                <div>
                  <label className="block text-xs font-sans tracking-luxury uppercase text-crimson font-bold mb-3 text-center">
                    Attendance Status
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, attending: 'yes' })}
                      className={`p-4 rounded-xl border text-sm font-sans tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-2.5 ${
                        formData.attending === 'yes'
                          ? 'border-gold-metallic bg-gold/15 text-charcoal font-bold shadow-md ring-2 ring-gold/40'
                          : 'border-sand-dark bg-ivory text-charcoal-soft/70 hover:border-gold/50'
                      }`}
                    >
                      <Sparkles className="w-4 h-4 text-gold-metallic" />
                      <span>Joyfully Accepts with Blessings</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, attending: 'no' })}
                      className={`p-4 rounded-xl border text-sm font-sans tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-2.5 ${
                        formData.attending === 'no'
                          ? 'border-crimson bg-crimson/10 text-crimson font-bold shadow-md ring-2 ring-crimson/30'
                          : 'border-sand-dark bg-ivory text-charcoal-soft/70 hover:border-crimson/40'
                      }`}
                    >
                      <Heart className="w-4 h-4 text-crimson" />
                      <span>Sending Love From Afar</span>
                    </button>
                  </div>
                </div>

                {/* Multiday Functions Selector (If Attending) */}
                {formData.attending === 'yes' && (
                  <div className="p-5 rounded-2xl bg-amber-500/10 border border-gold/40 space-y-3">
                    <label className="block text-xs font-sans tracking-luxury uppercase text-charcoal font-bold">
                      Which Functions Will You Attend?
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {[
                        { id: 'haldi', name: 'Haldi Ceremony', date: '20 Nov Morning' },
                        { id: 'sangeet', name: 'Sangeet & Mehendi', date: '20 Nov Night' },
                        { id: 'nikah', name: 'Nikah & Muhurat', date: '21 Nov Union' },
                        { id: 'reception', name: 'Grand Reception', date: '22 Nov Night' },
                      ].map((fn) => {
                        const isChecked = formData.functionsAttending.includes(fn.id);
                        return (
                          <button
                            key={fn.id}
                            type="button"
                            onClick={() => toggleFunctionAttending(fn.id)}
                            className={`p-3 rounded-xl border text-xs font-sans text-left flex items-center justify-between transition-all ${
                              isChecked
                                ? 'bg-ivory border-gold font-semibold text-charcoal shadow-sm'
                                : 'bg-transparent border-sand-dark text-charcoal-soft/60 hover:border-gold/50'
                            }`}
                          >
                            <div>
                              <strong className="block text-charcoal">{fn.name}</strong>
                              <span className="text-[11px] text-amber-700">{fn.date}</span>
                            </div>
                            <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                              isChecked ? 'bg-gold border-gold text-charcoal' : 'border-sand-dark'
                            }`}>
                              {isChecked && <CheckCircle2 className="w-4 h-4 text-charcoal" />}
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Inputs Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div className="relative">
                    <input
                      type="text"
                      id="fullName"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder=" "
                      className="peer w-full px-4 pt-6 pb-2 bg-ivory border-2 border-sand-dark rounded-xl text-charcoal font-sans text-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all"
                    />
                    <label
                      htmlFor="fullName"
                      className="absolute left-4 top-2 text-[10px] font-sans tracking-luxury uppercase text-crimson font-semibold transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-xs peer-placeholder-shown:text-charcoal-soft/60 peer-focus:top-2 peer-focus:text-[10px] peer-focus:text-crimson"
                    >
                      Full Name(s) *
                    </label>
                  </div>

                  {/* Email */}
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder=" "
                      className="peer w-full px-4 pt-6 pb-2 bg-ivory border-2 border-sand-dark rounded-xl text-charcoal font-sans text-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all"
                    />
                    <label
                      htmlFor="email"
                      className="absolute left-4 top-2 text-[10px] font-sans tracking-luxury uppercase text-crimson font-semibold transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-xs peer-placeholder-shown:text-charcoal-soft/60 peer-focus:top-2 peer-focus:text-[10px] peer-focus:text-crimson"
                    >
                      Email Address *
                    </label>
                  </div>

                  {/* Guest Count */}
                  <div className="relative sm:col-span-2">
                    <div className="flex items-center gap-2 mb-2 text-xs font-sans tracking-luxury uppercase text-charcoal font-bold">
                      <Users className="w-3.5 h-3.5 text-gold" />
                      <span>Total Traveling Party Size</span>
                    </div>
                    <div className="grid grid-cols-4 gap-3">
                      {['1', '2', '3', '4+'].map((count) => (
                        <button
                          key={count}
                          type="button"
                          onClick={() => setFormData({ ...formData, guestCount: count })}
                          className={`py-2.5 rounded-lg border-2 text-xs font-sans tracking-wider uppercase transition-all font-semibold ${
                            formData.guestCount === count
                              ? 'bg-crimson text-ivory border-crimson'
                              : 'bg-ivory text-charcoal-soft border-sand-dark hover:border-gold'
                          }`}
                        >
                          {count === '1' ? 'Just Me' : `${count} Guests`}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Dietary Preferences (Indian Culinary Specializations) */}
                  <div className="relative sm:col-span-2">
                    <div className="flex items-center gap-2 mb-2 text-xs font-sans tracking-luxury uppercase text-charcoal font-bold">
                      <Utensils className="w-3.5 h-3.5 text-gold" />
                      <span>Dietary Preference for Royal Feasts</span>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                      {[
                        { id: 'vegetarian', label: 'Vegetarian' },
                        { id: 'jain', label: 'Jain (No Onion/Garlic)' },
                        { id: 'halal', label: 'Halal / Non-Veg' },
                        { id: 'vegan', label: 'Vegan' },
                      ].map((diet) => (
                        <button
                          key={diet.id}
                          type="button"
                          onClick={() => setFormData({ ...formData, dietary: diet.id })}
                          className={`py-2 px-3 rounded-lg border text-xs font-sans text-center transition-all ${
                            formData.dietary === diet.id
                              ? 'bg-gold-metallic text-charcoal font-bold border-gold-metallic shadow-sm'
                              : 'bg-ivory text-charcoal border-sand-dark hover:border-gold'
                          }`}
                        >
                          {diet.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Song Request for the Sangeet Night */}
                  <div className="relative sm:col-span-2">
                    <input
                      type="text"
                      id="songRequest"
                      value={formData.songRequest}
                      onChange={(e) => setFormData({ ...formData, songRequest: e.target.value })}
                      placeholder=" "
                      className="peer w-full px-4 pt-6 pb-2 bg-ivory border-2 border-sand-dark rounded-xl text-charcoal font-sans text-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all"
                    />
                    <label
                      htmlFor="songRequest"
                      className="absolute left-4 top-2 text-[10px] font-sans tracking-luxury uppercase text-crimson font-semibold transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-xs peer-placeholder-shown:text-charcoal-soft/60 peer-focus:top-2 peer-focus:text-[10px] peer-focus:text-crimson flex items-center gap-1.5"
                    >
                      <Music className="w-3 h-3 text-gold" />
                      The Bollywood track that will get you on the Sangeet dance floor
                    </label>
                  </div>
                </div>

                {/* Magnetic Submit Button */}
                <div className="pt-4 flex justify-center">
                  <motion.button
                    ref={buttonRef}
                    type="submit"
                    disabled={isSubmitting}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    animate={{ x: btnPos.x, y: btnPos.y }}
                    transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                    className="relative group px-12 py-4 rounded-full bg-gradient-to-r from-crimson via-rani-vibrant to-crimson text-ivory text-xs font-sans tracking-luxury uppercase font-bold overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 disabled:opacity-60 flex items-center gap-3 border border-gold"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-gold-metallic via-amber-400 to-gold-metallic opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <span className="relative z-10 flex items-center gap-2 group-hover:text-charcoal transition-colors duration-300">
                      {isSubmitting ? (
                        <>
                          <RefreshCw className="w-4 h-4 animate-spin" />
                          <span>Sending Blessings...</span>
                        </>
                      ) : (
                        <>
                          <span>Confirm Royal RSVP</span>
                          <Send className="w-3.5 h-3.5" />
                        </>
                      )}
                    </span>
                  </motion.button>
                </div>
              </motion.form>
            ) : (
              /* Success State */
              <motion.div
                key="rsvp-thankyou"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="text-center py-8 sm:py-12 flex flex-col items-center"
              >
                <div className="w-16 h-16 rounded-full bg-gold/20 border-2 border-gold-metallic flex items-center justify-center text-gold-metallic mb-6">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <span className="font-script text-4xl text-crimson mb-1">Shukriya & Dhanyawad</span>

                <h3 className="font-serif text-3xl sm:text-4xl text-charcoal font-light leading-snug">
                  Thank You, {formData.fullName || 'Beloved Guest'}!
                </h3>

                <p className="font-sans text-sm sm:text-base text-charcoal-soft/85 mt-4 max-w-md leading-relaxed">
                  {formData.attending === 'yes'
                    ? "We are overjoyed and blessed to celebrate this sacred journey with you in Bangalore! A confirmation with your itinerary and hospitality details has been dispatched."
                    : "We will dearly miss your presence by our side in Bangalore, but your heartfelt love and blessings will remain with us throughout our sacred rituals."}
                </p>

                <div className="mt-8 pt-6 border-t border-gold/30 w-full max-w-md flex flex-col items-center gap-3">
                  <p className="text-xs uppercase tracking-luxury text-crimson font-sans font-semibold">
                    November 20 — 22, 2026 • Bangalore, Karnataka
                  </p>

                  <button
                    onClick={resetForm}
                    className="text-xs text-gold-dark hover:text-crimson uppercase tracking-wider font-sans underline underline-offset-4 mt-2 font-bold"
                  >
                    Edit your response
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
