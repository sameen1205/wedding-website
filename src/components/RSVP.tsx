'use client';

import React, { useState, useRef, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Heart, Send, CheckCircle2, Users, Sparkles, RefreshCw, Phone } from 'lucide-react';
import { getTierConfig } from '@/data/weddingData';

const ALL_RSVP_FUNCTIONS = [
  { id: 'haldi', name: 'The Haldi', date: '20 Nov • 9:30 AM – 12:30 PM' },
  { id: 'sangeet', name: 'Sangeet Night', date: '20 Nov • 6:00 PM Onwards' },
  { id: 'nikah', name: 'Mehfil-e-Nikah', date: '21 Nov • 11:00 AM Onwards' },
  { id: 'muhurat', name: 'The Auspicious Muhurat', date: '21 Nov • 6:00 PM – 9:00 PM' },
  { id: 'reception', name: 'The Wedding Reception', date: '22 Nov • 6:30 PM Onwards' },
];

const ATTENDING_OPTION = 'Yes, Excited! to attend.....';
const DECLINE_OPTION = 'Sending love from Afar';

function RSVPContent() {
  const searchParams = useSearchParams();
  const currentTier = searchParams.get('tier');
  const tierConfig = getTierConfig(currentTier);
  const normalizedTier = tierConfig.tier;
  const allowedIds = tierConfig.allowedEventIds;

  const visibleFunctions = ALL_RSVP_FUNCTIONS.filter((fn) =>
    allowedIds.includes(fn.id)
  );

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    attendance: ATTENDING_OPTION,
    guests: '1',
    events: visibleFunctions.map((fn) => fn.name),
  });

  useEffect(() => {
    const validIds = getTierConfig(currentTier).allowedEventIds;
    const validEvents = ALL_RSVP_FUNCTIONS.filter((fn) =>
      validIds.includes(fn.id)
    ).map((fn) => fn.name);
    setFormData((prev) => ({
      ...prev,
      events: prev.attendance === ATTENDING_OPTION ? validEvents : [],
    }));
  }, [currentTier]);

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

  const toggleFunctionAttending = (eventName: string) => {
    if (!visibleFunctions.some((fn) => fn.name === eventName)) return;
    if (formData.events.includes(eventName)) {
      setFormData({
        ...formData,
        events: formData.events.filter((f) => f !== eventName),
      });
    } else {
      setFormData({
        ...formData,
        events: [...formData.events, eventName],
      });
    }
  };

  const fireIndianCelebrationConfetti = () => {
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Format the data to match the Apps Script expectations
    const payload = {
      name: formData.name,
      phone: formData.phone,
      attendance: formData.attendance,
      events: formData.events.join(', '), // Convert array to comma-separated string
      guests: formData.guests,
      tier: currentTier || 'all', // Pass the URL tier parameter if available
    };

    try {
      await fetch(
        'https://script.google.com/macros/s/AKfycbxMQwhL4xO-5XWgRy5J2Z3RMPZuImobFIV7JhQoEqkF29jWk0AS9yCuYc3hak54pwU/exec',
        {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        }
      );

      // Because 'no-cors' makes the response opaque, we assume success if no error is thrown
      setIsSubmitted(true);
      if (formData.attendance === ATTENDING_OPTION) {
        fireIndianCelebrationConfetti();
      }
    } catch (error) {
      console.error('Error submitting RSVP:', error);
      alert('Something went wrong. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setIsSubmitted(false);
  };

  return (
    <section
      id="rsvp"
      className="relative py-28 sm:py-36 bg-gradient-to-b from-[#240612] via-[#36091E] to-[#1F030E] text-[#F3F4F6] overflow-hidden border-t border-[#D4AF37]/30"
    >
      {/* Background Ambience */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(212, 175, 55, 0.08) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <span className="w-10 h-[1.5px] bg-gradient-to-r from-transparent to-[#D4AF37]" />
            <span className="text-xs uppercase tracking-luxury font-sans text-[#E2C799] font-bold">
              Kripya Pratigya Karein • Kindly Respond
            </span>
            <span className="w-10 h-[1.5px] bg-gradient-to-l from-transparent to-[#D4AF37]" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-[#F5E6C8] tracking-tight"
          >
            {normalizedTier === 'reception'
              ? 'Will You Join Us For The Reception?'
              : 'Will You Grace Our Celebrations?'}
          </motion.h2>
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
                    {normalizedTier === 'reception'
                      ? 'Reception Attendance Status (22 Nov)'
                      : 'Attendance Status'}
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <button
                      type="button"
                      onClick={() =>
                        setFormData({
                          ...formData,
                          attendance: ATTENDING_OPTION,
                          events:
                            formData.events.length > 0
                              ? formData.events
                              : visibleFunctions.map((fn) => fn.name),
                        })
                      }
                      className={`p-4 rounded-xl border text-sm font-sans tracking-wider transition-all duration-300 flex items-center justify-center gap-2.5 ${
                        formData.attendance === ATTENDING_OPTION
                          ? 'border-gold-metallic bg-gold/15 text-charcoal font-bold shadow-md ring-2 ring-gold/40'
                          : 'border-sand-dark bg-ivory text-charcoal-soft/70 hover:border-gold/50'
                      }`}
                    >
                      <Sparkles className="w-4 h-4 text-gold-metallic" />
                      <span>Yes, Excited! to attend.....</span>
                    </button>

                    <button
                      type="button"
                      onClick={() =>
                        setFormData({
                          ...formData,
                          attendance: DECLINE_OPTION,
                          events: [],
                        })
                      }
                      className={`p-4 rounded-xl border text-sm font-sans tracking-wider transition-all duration-300 flex items-center justify-center gap-2.5 ${
                        formData.attendance === DECLINE_OPTION
                          ? 'border-crimson bg-crimson/10 text-crimson font-bold shadow-md ring-2 ring-crimson/30'
                          : 'border-sand-dark bg-ivory text-charcoal-soft/70 hover:border-crimson/40'
                      }`}
                    >
                      <Heart className="w-4 h-4 text-crimson" />
                      <span>Sending love from Afar</span>
                    </button>
                  </div>
                </div>

                {/* Tier-Filtered Functions Selector (If Attending) */}
                {formData.attendance === ATTENDING_OPTION && (
                  <motion.div
                    layout
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35 }}
                    className="p-5 rounded-2xl bg-amber-500/10 border border-gold/40 space-y-3"
                  >
                    <label className="block text-xs font-sans tracking-luxury uppercase text-charcoal font-bold">
                      {normalizedTier === 'reception'
                        ? 'Confirm Your Reception Attendance'
                        : 'Which Functions Will You Attend?'}
                    </label>
                    <div
                      className={`grid grid-cols-1 ${
                        visibleFunctions.length === 1 ? 'sm:grid-cols-1' : 'sm:grid-cols-2'
                      } gap-3`}
                    >
                      <AnimatePresence mode="popLayout">
                        {visibleFunctions.map((fn) => {
                          const isChecked = formData.events.includes(fn.name);
                          return (
                            <motion.button
                              key={fn.id}
                              layout
                              initial={{ opacity: 0, scale: 0.95 }}
                              animate={{ opacity: 1, scale: 1 }}
                              exit={{ opacity: 0, scale: 0.95 }}
                              transition={{ duration: 0.25 }}
                              type="button"
                              onClick={() => toggleFunctionAttending(fn.name)}
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
                              <div
                                className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                                  isChecked
                                    ? 'bg-gold border-gold text-charcoal'
                                    : 'border-sand-dark'
                                }`}
                              >
                                {isChecked && <CheckCircle2 className="w-4 h-4 text-charcoal" />}
                              </div>
                            </motion.button>
                          );
                        })}
                      </AnimatePresence>
                    </div>
                  </motion.div>
                )}

                {/* Inputs Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div className="relative">
                    <input
                      type="text"
                      id="fullName"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder=" "
                      className="peer w-full px-4 pt-6 pb-2 bg-ivory border-2 border-sand-dark rounded-xl text-charcoal font-sans text-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all"
                    />
                    <label
                      htmlFor="fullName"
                      className="absolute left-4 top-2 text-[10px] font-sans tracking-luxury uppercase text-crimson font-semibold transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-xs peer-placeholder-shown:text-charcoal-soft/60 peer-focus:top-2 peer-focus:text-[10px] peer-focus:text-crimson"
                    >
                      Full Name (Guest Name) *
                    </label>
                  </div>

                  {/* Phone Number / WhatsApp */}
                  <div className="relative">
                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder=" "
                      className="peer w-full px-4 pt-6 pb-2 bg-ivory border-2 border-sand-dark rounded-xl text-charcoal font-sans text-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all"
                    />
                    <label
                      htmlFor="phone"
                      className="absolute left-4 top-2 text-[10px] font-sans tracking-luxury uppercase text-crimson font-semibold transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-xs peer-placeholder-shown:text-charcoal-soft/60 peer-focus:top-2 peer-focus:text-[10px] peer-focus:text-crimson flex items-center gap-1.5"
                    >
                      <Phone className="w-3 h-3 text-gold" />
                      <span>Phone Number / WhatsApp</span>
                    </label>
                  </div>

                  {/* Guest Count */}
                  <div className="relative sm:col-span-2">
                    <div className="flex items-center gap-2 mb-2 text-xs font-sans tracking-luxury uppercase text-charcoal font-bold">
                      <Users className="w-3.5 h-3.5 text-gold" />
                      <span>Number of Guests</span>
                    </div>
                    <div className="grid grid-cols-4 gap-3">
                      {['1', '2', '3', '4+'].map((count) => (
                        <button
                          key={count}
                          type="button"
                          onClick={() => setFormData({ ...formData, guests: count })}
                          className={`py-2.5 rounded-lg border-2 text-xs font-sans tracking-wider uppercase transition-all font-semibold ${
                            formData.guests === count
                              ? 'bg-crimson text-ivory border-crimson'
                              : 'bg-ivory text-charcoal-soft border-sand-dark hover:border-gold'
                          }`}
                        >
                          {count === '1' ? 'Just Me (1)' : `${count} Guests`}
                        </button>
                      ))}
                    </div>
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
                          <span>Confirm RSVP</span>
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

                <span className="font-script text-4xl text-crimson mb-1">Shukriya &amp; Dhanyawad</span>

                <h3 className="font-serif text-3xl sm:text-4xl text-charcoal font-light leading-snug">
                  Thank You, {formData.name || 'Beloved Guest'}!
                </h3>

                <p className="font-sans text-sm sm:text-base text-charcoal-soft/85 mt-4 max-w-md leading-relaxed">
                  {formData.attendance === ATTENDING_OPTION
                    ? "We are overjoyed and blessed to celebrate this sacred journey with you in Bangalore! A confirmation with your itinerary and hospitality details has been dispatched."
                    : "We will dearly miss your presence by our side in Bangalore, but your heartfelt love and blessings will remain with us throughout our sacred rituals."}
                </p>

                <div className="mt-8 pt-6 border-t border-gold/30 w-full max-w-md flex flex-col items-center gap-3">
                  <p className="text-xs uppercase tracking-luxury text-crimson font-sans font-semibold">
                    {tierConfig.dateDisplay} • {tierConfig.locationDisplay}
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

export default function RSVP() {
  return (
    <Suspense fallback={<div>Loading celebrations...</div>}>
      <RSVPContent />
    </Suspense>
  );
}
