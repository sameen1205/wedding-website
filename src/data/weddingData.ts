export interface StoryChapter {
  year: string;
  title: string;
  subtitle: string;
  description: string;
  quote?: string;
  image: string;
  alt: string;
}

export interface IndianFunction {
  id: string;
  dayNumber: string;
  dayDate: string;
  title: string;
  subtitle: string;
  timing: string;
  location: string;
  theme: string;
  dressCode: string;
  colorSwatches: { name: string; hex: string }[];
  patternClass: string;
  accentColor: string;
  badgeBg: string;
  image: string;
  alt: string;
  quote: string;
  description: string;
  highlights: string[];
  cuisine: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'haldi' | 'sangeet' | 'nikah' | 'reception' | 'details';
  aspect: 'tall' | 'wide' | 'square';
  src: string;
  alt: string;
  caption: string;
}

export const weddingDetails = {
  couple: {
    groom: "Sameen",
    bride: "Anula",
    groomFull: "Sameen",
    brideFull: "Anula",
    monogram: "S & A",
    blessing: "Shubh Vivah & Khushamdeed",
  },
  date: {
    formatted: "November 20 — 22, 2026",
    short: "20 . 11 . 2026",
    iso: "2026-11-20T10:30:00+05:30",
  },
  location: {
    venue: "The Bangalore Palace",
    estate: "Palace Grounds, Jayamahal",
    city: "Bangalore",
    state: "Karnataka",
    country: "India",
    fullAddress: "Palace Grounds, Jayamahal, Bengaluru, Karnataka 560006, India",
  },
  hero: {
    tagline: "Together with our families, we invite you to three days of sacred rituals, music, and royal celebration",
    backgroundImage: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=2400&q=85",
    ambientAudioUrl: "https://cdn.freesound.org/previews/415/415804_5121236-lq.mp3", // romantic instrumental melody
  },
  ourStory: [
    {
      year: "2021",
      title: "Conversations in Bangalore",
      subtitle: "Chapter I — Where Traditions Met",
      description:
        "Over fragrant cups of South Indian filter coffee and quiet laughter amidst the lush green canopies of Bangalore, two souls discovered a profound, shared rhythm.",
      quote: "Ishq wahi jo rooh se jud jaaye (True love is that which binds the soul).",
      image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1200&q=80",
      alt: "Couple in traditional Indian attire smiling together",
    },
    {
      year: "2023",
      title: "Across Horizons & Constellations",
      subtitle: "Chapter II — The Journey Together",
      description:
        "From spontaneous drives through the monsoon rain to celebrating festivals side by side with family, every milestone brought hearts together into one warm, harmonious tapestry.",
      quote: "Two traditions, one heartbeat.",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80",
      alt: "Intimate celebration of love",
    },
    {
      year: "2025",
      title: "A Starlit Palace Promise",
      subtitle: "Chapter III — The Royal Promise",
      description:
        "Beneath the illuminated Tudor arches and glowing chandeliers of Bangalore, Sameen asked Anula to spend eternity with him.",
      quote: "Hazaaron mein kisi ek se judti hai taqdeer (Destiny unites us beyond thousands).",
      image: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1200&q=80",
      alt: "Heritage palace illuminated at twilight",
    },
  ] as StoryChapter[],

  // The Grand Multi-Day Indian Wedding Functions (The Centerpiece of the Site)
  functions: [
    {
      id: "haldi",
      dayNumber: "DAY 01",
      dayDate: "Friday, 20th November 2026",
      title: "The Radiant Haldi",
      subtitle: "Ubtan, Marigolds & Phoolon Ki Holi",
      timing: "10:30 AM – 2:30 PM",
      location: "The Mango Grove Courtyard",
      theme: "Radiant Turmeric Sunshine & Marigold Bandhani",
      dressCode: "Sunshine Yellows & Vibrant Festive",
      colorSwatches: [
        { name: "Haldi Yellow", hex: "#FBBF24" },
        { name: "Genda Orange", hex: "#F59E0B" },
        { name: "Kesar Mustard", hex: "#D97706" },
        { name: "Mogra Cream", hex: "#FFFDF9" },
      ],
      patternClass: "bg-haldi-leheriya",
      accentColor: "#F59E0B",
      badgeBg: "bg-amber-500/20 text-amber-200 border-amber-400/40",
      image: "/images/haldi-invite.png",
      alt: "The Radiant Haldi Ceremony Official Card",
      quote: "Rang barse tere naam ka, lage ubtan khushiyon ka.",
      description:
        "The festivities commence with the auspicious Haldi ceremony. Blessed turmeric paste made with sandalwood, rosewater, and saffron will be lovingly applied to Sameen and Anula, followed by an exhilarating 'Phoolon ki Holi' where thousands of fresh yellow and orange marigold petals shower the courtyard to the thunderous beats of live dholaks.",
      highlights: [
        "Auspicious Turmeric & Saffron Ubtan blessing",
        "Thousands of fresh marigold petal showers (Phoolon ki Holi)",
        "Live Nashik & Punjabi Dhol face-off",
        "Bangle-making & custom floral jewelry stall",
      ],
      cuisine: "Royal South Indian & Festive Brunch: Bisi Bele Bath, Crisp Medu Vadas, Dal Baati Churma, Jalebi-Rabdi & Spiced Thandai.",
    },
    {
      id: "sangeet",
      dayNumber: "DAY 01 NIGHT",
      dayDate: "Friday, 20th November 2026",
      title: "The Grand Sangeet",
      subtitle: "A Night of Rhythm, Celebration & Bollywood Beats",
      timing: "6:00 PM Onwards",
      location: "Royal Ballroom",
      theme: "Peacock Teal, Royal Emerald & Leheriya Silk",
      dressCode: "Glamorous & Traditional Evening Wear",
      colorSwatches: [
        { name: "Peacock Blue", hex: "#0F766E" },
        { name: "Royal Emerald", hex: "#065F46" },
        { name: "Zari Gold", hex: "#D4AF37" },
        { name: "Midnight Teal", hex: "#042F2E" },
      ],
      patternClass: "bg-leheriya-pattern",
      accentColor: "#0D9488",
      badgeBg: "bg-teal-500/20 text-teal-200 border-teal-400/40",
      image: "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=1400&q=85",
      alt: "The Grand Sangeet evening of dance and music",
      quote: "Sur, taal aur sangeet se saji ek yaadgaar shaam.",
      description:
        "As twilight settles over the palace grounds, the Royal Ballroom transforms into a grand musical arena. Families clash in joyous choreographed Bollywood dance battles, backed by a live celebrity fusion band and dynamic DJ sets carrying the celebration into the midnight hours.",
      highlights: [
        "Sameen vs Anula Bollywood Family Dance Face-off",
        "Live Fusion Band & Dhol performance under starlight chandeliers",
        "Signature Royal Cocktails & Gourmet Tasting Lounge",
        "Midnight DJ celebration on the illuminated dance floor",
      ],
      cuisine: "Imperial Street Food Stations, Galouti Kebabs on Sheermal, Wood-fired Naans, Chaat Bazaar & Signature Cocktails.",
    },
    {
      id: "nikah",
      dayNumber: "DAY 02",
      dayDate: "Saturday, 21st November 2026",
      title: "The Sacred Nikah",
      subtitle: "The Holy Union, Sacred Vows & Royal Baraat",
      timing: "10:00 AM Onwards",
      location: "Main Palace Lawn",
      theme: "Pastel Royal, Rose Petals & Pure Banarasi Zari Silk",
      dressCode: "Pastel Royal / Traditional Elegance",
      colorSwatches: [
        { name: "Pastel Rose", hex: "#F43F5E" },
        { name: "Royal Ivory", hex: "#FFFDF9" },
        { name: "Zari Pure Gold", hex: "#FFD700" },
        { name: "Mint Sage", hex: "#10B981" },
      ],
      patternClass: "bg-patola-pattern",
      accentColor: "#E11D48",
      badgeBg: "bg-rose-500/20 text-rose-200 border-rose-400/40",
      image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1400&q=85",
      alt: "The Sacred Nikah wedding ceremony",
      quote: "Qubool Hai — Bound by sacred vows, united by love.",
      description:
        "The sacred zenith of our wedding journey. A grand royal Baraat with celebratory brass bands and horses precedes Anula's ethereal bridal entrance under a fragrant floral chadar of tuberoses and white roses. In a serene palace pavilion, Sameen and Anula solemnize their holy Nikah vows surrounded by loved ones.",
      highlights: [
        "Grand Baraat procession with Royal Brass Band & Safa tying",
        "Phoolon ki Chaadar bridal entrance with classical Shehnai",
        "Sacred Nikah ceremony and solemnization of vows",
        "Rose petal blessing shower and family felicitations",
      ],
      cuisine: "Imperial Royal Dawat: Awadhi Dum Biryani, Shahi Paneer, Zafrani Pulao, Elaneer Payasam & Malai Kulfi.",
    },
    {
      id: "muhurat",
      dayNumber: "DAY 02 EVENING",
      dayDate: "Saturday, 21st November 2026",
      title: "The Auspicious Muhurat",
      subtitle: "Vedic Mantras, Mangalsutra & Sacred Saat Phere",
      timing: "6:00 PM – 9:00 PM",
      location: "The Grand Courtyard",
      theme: "Deep Crimson, Vermilion Red & Temple Gold",
      dressCode: "Festive Ethnic",
      colorSwatches: [
        { name: "Sindoor Crimson", hex: "#881337" },
        { name: "Rani Magenta", hex: "#BE123C" },
        { name: "Temple Gold", hex: "#FFD700" },
        { name: "Sandalwood Cream", hex: "#FFFDF9" },
      ],
      patternClass: "bg-patola-pattern",
      accentColor: "#881337",
      badgeBg: "bg-amber-600/20 text-amber-200 border-amber-500/40",
      image: "/images/patola-card-full.png",
      alt: "The Auspicious Muhurat sacred marriage rituals",
      quote: "Saat pheron ke saat pavitra vachan, ek jeevan bhar ka saath.",
      description:
        "Under the twilight sky in the historic Grand Courtyard, sacred Vedic chants echo as Sameen and Anula circle the holy fire. With the tying of the mangalsutra, the exchange of garlands (Varmala), and the seven sacred steps (Saptapadi), their auspicious union is solemnized.",
      highlights: [
        "Auspicious Muhurat ceremony around the sacred Agni",
        "Traditional Varmala garland exchange",
        "Saptapadi (Seven Sacred Steps) & Mangalsutra blessing",
        "Classical Carnatic & Hindustani instrumental accompaniment",
      ],
      cuisine: "Traditional Festive Sattvic Thali: Badam Halwa, Mysore Pak, Puran Poli, Bisi Bele Bath & Filter Coffee.",
    },
  ] as IndianFunction[],

  gallery: [
    {
      id: "1",
      title: "Turmeric Glow & Flower Rain",
      category: "haldi",
      aspect: "tall",
      src: "https://images.unsplash.com/photo-1601055283742-8b27e81b5553?auto=format&fit=crop&w=1200&q=85",
      alt: "Vibrant yellow marigold and haldi moments",
      caption: "Laughter and flower showers at the Haldi ceremony",
    },
    {
      id: "2",
      title: "Intricate Mehendi Tales",
      category: "sangeet",
      aspect: "square",
      src: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=1200&q=85",
      alt: "Bridal hands with intricate henna patterns and bangles",
      caption: "Bridal Mehendi woven with initials and stories",
    },
    {
      id: "3",
      title: "Baraat & High Octane Dhol",
      category: "sangeet",
      aspect: "wide",
      src: "https://images.unsplash.com/photo-1545232979-8bf68ee9b1af?auto=format&fit=crop&w=1400&q=85",
      alt: "High energy celebratory dancing",
      caption: "Baraat dancing along the lakeside promenade",
    },
    {
      id: "4",
      title: "The Regal Vows",
      category: "nikah",
      aspect: "wide",
      src: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1400&q=85",
      alt: "Sacred vows and traditional rituals",
      caption: "The solemn and joyous moment of Nikah & Muhurat",
    },
    {
      id: "5",
      title: "Banarasi Silk & Jewels",
      category: "details",
      aspect: "tall",
      src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=85",
      alt: "Bridal jewelry, Kundan necklace, and Banarasi crimson lehenga",
      caption: "Heirloom polki diamonds and crimson silk details",
    },
    {
      id: "6",
      title: "Palace Starlight Gala",
      category: "reception",
      aspect: "square",
      src: "https://images.unsplash.com/photo-1519225438128-66236b2f7336?auto=format&fit=crop&w=1200&q=85",
      alt: "Candlelit reception tables and crystal chandelier",
      caption: "The Grand Reception celebration under illuminated arches",
    },
  ] as GalleryItem[],
};
