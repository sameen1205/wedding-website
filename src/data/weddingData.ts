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
    groom: "Kabir",
    bride: "Zoya",
    groomFull: "Kabir Singhania",
    brideFull: "Zoya Mirza",
    monogram: "K & Z",
    blessing: "Shubh Vivah & Khushamdeed",
  },
  date: {
    formatted: "November 20 — 22, 2026",
    short: "20 . 11 . 2026",
    iso: "2026-11-20T10:30:00+05:30",
  },
  location: {
    venue: "The Jagmandir Island Palace",
    estate: "City Palace Complex, Lake Pichola",
    city: "Udaipur",
    state: "Rajasthan",
    country: "India",
    fullAddress: "Lake Pichola, Udaipur, Rajasthan 313001, India",
  },
  hero: {
    tagline: "Together with our families, we invite you to three days of sacred rituals, music, and royal celebration",
    backgroundImage: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=2400&q=85",
    ambientAudioUrl: "https://cdn.freesound.org/previews/415/415804_5121236-lq.mp3", // romantic instrumental melody
  },
  ourStory: [
    {
      year: "2021",
      title: "Chai & Conversations in Old Delhi",
      subtitle: "Chapter I — Where Traditions Met",
      description:
        "Over fragrant cups of ginger chai and quiet laughter amidst the heritage alleyways of Chandni Chowk, two souls from diverse worlds discovered a profound, shared rhythm.",
      quote: "Ishq wahi jo rooh se jud jaaye (True love is that which binds the soul).",
      image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1200&q=80",
      alt: "Couple in traditional Indian attire smiling together",
    },
    {
      year: "2023",
      title: "Across Horizons & Constellations",
      subtitle: "Chapter II — The Journey Together",
      description:
        "From spontaneous midnight drives through the monsoon rain to celebrating Diwali and Eid side by side, every milestone brought families together into one warm, harmonious tapestry.",
      quote: "Two traditions, one heartbeat.",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80",
      alt: "Intimate celebration of love",
    },
    {
      year: "2025",
      title: "The Sunset at Lake Pichola",
      subtitle: "Chapter III — The Royal Promise",
      description:
        "Aboard an antique wooden boat drifting upon the tranquil waters of Udaipur as the City Palace glowed gold in the twilight, Kabir asked Zoya to spend eternity with him.",
      quote: "Hazaaron mein kisi ek se judti hai taqdeer (Destiny unites us beyond thousands).",
      image: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1200&q=80",
      alt: "Heritage Indian palace sunset overlooking lake",
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
      timing: "10:30 AM — 2:30 PM",
      location: "Zanana Mahal Courtyard • City Palace",
      theme: "Radiant Turmeric Sunshine & Marigold Bandhani",
      dressCode: "Sunshine Yellows, Mustard, Floral Bandhani Kurtas & Lehengas",
      colorSwatches: [
        { name: "Haldi Yellow", hex: "#FBBF24" },
        { name: "Genda Orange", hex: "#F59E0B" },
        { name: "Kesar Mustard", hex: "#D97706" },
        { name: "Mogra Cream", hex: "#FFFDF9" },
      ],
      patternClass: "bg-bandhani-pattern",
      accentColor: "#F59E0B",
      badgeBg: "bg-amber-500/20 text-amber-200 border-amber-400/40",
      image: "https://images.unsplash.com/photo-1601055283742-8b27e81b5553?auto=format&fit=crop&w=1400&q=85",
      alt: "Indian wedding haldi and marigold flowers celebration",
      quote: "Rang barse tere naam ka, lage ubtan khushiyon ka.",
      description:
        "The festivities commence with the auspicious Haldi ceremony. Blessed turmeric paste made with sandalwood, rosewater, and saffron will be lovingly applied to the bride and groom, followed by an exhilarating 'Phoolon ki Holi' where thousands of fresh yellow and orange marigold petals shower the courtyard to the thunderous beats of live dholaks.",
      highlights: [
        "Auspicious Turmeric & Saffron Ubtan blessing",
        "Thousands of fresh marigold petal showers (Phoolon ki Holi)",
        "Live Nashik & Punjabi Dhol face-off",
        "Bangle-making & custom floral jewelry stall",
      ],
      cuisine: "Authentic Rajasthani Haldi Brunch: Dal Baati Churma, Pyaaz Kachoris, Jalebi-Rabdi & Spiced Thandai.",
    },
    {
      id: "sangeet",
      dayNumber: "DAY 01 NIGHT",
      dayDate: "Friday, 20th November 2026",
      title: "The Royal Sangeet & Mehendi",
      subtitle: "A Night of Rhythm, Henna & Bollywood Beats",
      timing: "7:00 PM onwards",
      location: "The Manek Chowk • Illuminated City Palace",
      theme: "Peacock Teal, Royal Emerald & Leheriya Silk",
      dressCode: "Glamorous Indo-Western, Royal Emerald Sherwanis, Mirror-work Lehengas",
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
      alt: "Sangeet night celebrations with colorful lights and music",
      quote: "Sur, taal aur sangeet se saji ek yaadgaar shaam.",
      description:
        "As the sun sets over Lake Pichola, the illuminated palace transforms into a royal amphitheater. Master mehendi artisans weave intricate bridal henna tales, while families clash in joyous choreographed Bollywood dance battles. With a live celebrity fusion band and DJ spinning till the early hours, get ready to set the dance floor on fire!",
      highlights: [
        "Artisanal bridal Mehendi with organic sojat henna",
        "Singhania vs Mirza Bollywood Family Dance Face-off",
        "Live Sufi-Rock Band performance by the lake",
        "Royal Hookah & Cocktails lounge under the stars",
      ],
      cuisine: "Chandni Chowk Live Street Food Carts, Galouti Kebabs, Wood-fired Naans, Chaat Bazaar & Signature Cocktails.",
    },
    {
      id: "nikah-muhurat",
      dayNumber: "DAY 02",
      dayDate: "Saturday, 21st November 2026",
      title: "Nikah & Auspicious Muhurat",
      subtitle: "The Sacred Vows, Baraat & Holy Union",
      timing: "11:00 AM — 4:30 PM",
      location: "The Promenade & Durbar Hall • Jagmandir Island",
      theme: "Royal Crimson, Sindoor Red & Pure Banarasi Zari Silk",
      dressCode: "Regal Indian Traditional: Crimson & Ivory Banarasi Sarees, Embroidered Sherwanis with Safas (Turbans)",
      colorSwatches: [
        { name: "Sindoor Crimson", hex: "#881337" },
        { name: "Rani Magenta", hex: "#BE123C" },
        { name: "Zari Pure Gold", hex: "#FFD700" },
        { name: "Ivory Silk", hex: "#FFFDF9" },
      ],
      patternClass: "bg-banarasi-pattern",
      accentColor: "#BE123C",
      badgeBg: "bg-rose-500/20 text-rose-200 border-rose-400/40",
      image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1400&q=85",
      alt: "Traditional Indian wedding Nikah and sacred rituals ceremony",
      quote: "Qubool Hai, aur saat janmon ka pavitra vachan.",
      description:
        "The sacred zenith of our wedding journey. Guests arrive via decorated royal heritage boats across Lake Pichola. A grand royal Baraat with brass bands and royal horses precedes Zoya's ethereal entrance under a fragrant floral chadar of tuberoses and red roses. In a majestic pavilion framed by carved marble arches, Kabir and Zoya solemnize their holy Nikah and Auspicious Muhurat rituals.",
      highlights: [
        "Royal Heritage Boat arrival across Lake Pichola",
        "Grand Baraat procession with Rajasthani Brass Band & Safa tying",
        "Phoolon ki Chaadar bridal entrance with classical Shehnai",
        "Sacred Nikah & Muhurat vows in historic marble pavilions",
      ],
      cuisine: "Imperial Dawat-e-Khaas: Awadhi Dum Biryani, Shahi Paneer, Raan Musallam, Zafrani Pulao, Phirni & Malai Kulfi.",
    },
    {
      id: "reception",
      dayNumber: "DAY 03 NIGHT",
      dayDate: "Sunday, 22nd November 2026",
      title: "The Grand Royal Reception",
      subtitle: "An Evening of Imperial Elegance & Celebrations",
      timing: "8:00 PM onwards",
      location: "The Courtyard of Kings & Lake Garden Terrace",
      theme: "Imperial Velvet, Starlight Midnight & Champagne Gold",
      dressCode: "Black Tie / Royal Velvet Tuxedos, Heavy Designer Lehengas & Gowns",
      colorSwatches: [
        { name: "Imperial Velvet", hex: "#3B0764" },
        { name: "Midnight Sky", hex: "#160228" },
        { name: "Antique Gold", hex: "#D4AF37" },
        { name: "Champagne Silk", hex: "#F4EBE1" },
      ],
      patternClass: "bg-velvet-reception",
      accentColor: "#D4AF37",
      badgeBg: "bg-purple-500/20 text-purple-200 border-purple-400/40",
      image: "https://images.unsplash.com/photo-1519225438128-66236b2f7336?auto=format&fit=crop&w=1400&q=85",
      alt: "Grand luxury wedding reception with candlelit banquet and fireworks",
      quote: "Nayi shuruat, hazaaron duaaon ke saath.",
      description:
        "The grand finale celebration welcoming Kabir & Zoya as a newly wedded couple. An enchanting gala under thousands of floating crystal chandeliers and candlelit royal tablescapes. Featuring an address by the families, a multi-tiered royal cake cutting, a 40-piece live Indo-Western fusion orchestra, and a breathtaking coastal fireworks display illuminating the Udaipur skyline.",
      highlights: [
        "Red Carpet arrival with royal guard of honor",
        "Grand champagne tower & 5-tier royal cake cutting",
        "40-piece live Indo-Western Symphony Orchestra",
        "Synchronized Lake Pichola Palace Fireworks show",
      ],
      cuisine: "Grand Global Culinary Banquet: Live Mediterranean Stations, Truffle Risottos, Royal Mughlai Delicacies & Artisanal Dessert Bar.",
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
