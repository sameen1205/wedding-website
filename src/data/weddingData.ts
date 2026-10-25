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
  mapUrl: string;
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
  cuisine?: string;
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
    blessing: "Sacred Wedding Celebrations",
  },
  date: {
    formatted: "20th – 22nd November 2026",
    short: "20 . 11 . 2026",
    iso: "2026-11-20T09:30:00+05:30",
  },
  location: {
    venue: "Dwapara Convention Centre & Ebisu Convention Centre",
    estate: "Bengaluru",
    city: "Bengaluru",
    state: "Karnataka",
    country: "India",
    fullAddress: "Dwapara Convention Centre & Ebisu Convention Centre, Bengaluru, Karnataka, India",
  },
  hero: {
    tagline: "Together with our families, we invite you to three days of sacred rituals, music, and celebration",
    backgroundImage: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1200&q=80",
    ambientAudioUrl: "https://cdn.freesound.org/previews/415/415804_5121236-lq.mp3",
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
      subtitle: "Chapter III — The Forever Promise",
      description:
        "Beneath the illuminated arches and glowing chandeliers of Bangalore, Sameen asked Anula to spend eternity with him.",
      quote: "Hazaaron mein kisi ek se judti hai taqdeer (Destiny unites us beyond thousands).",
      image: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1200&q=80",
      alt: "Heritage venue illuminated at twilight",
    },
  ] as StoryChapter[],

  // The Grand Multi-Day Indian Wedding Functions (The Centerpiece of the Site)
  functions: [
    {
      id: "haldi",
      dayNumber: "DAY 01",
      dayDate: "Friday, 20th November 2026",
      title: "The Haldi",
      subtitle: "Ubtan, Marigolds & Phoolon Ki Holi",
      timing: "9:30 AM – 12:30 PM",
      location: "Dwapara Convention Centre",
      mapUrl: "https://maps.app.goo.gl/ecJLEKXWBF5nQWD68",
      theme: "Radiant Turmeric Sunshine & Marigold Leheriya",
      dressCode: "Sunshine Yellows & Vibrant Festive",
      colorSwatches: [
        { name: "Sunshine Yellow", hex: "#FACC15" },
        { name: "Kesar Mustard", hex: "#D97706" },
        { name: "Ivory White", hex: "#FFFDF9" },
      ],
      patternClass: "bg-haldi-leheriya",
      accentColor: "#F59E0B",
      badgeBg: "bg-amber-500/20 text-amber-200 border-amber-400/40",
      image: "/images/haldi-invite.png",
      alt: "The Haldi Ceremony Official Card",
      quote: "Rang barse tere naam ka, lage ubtan khushiyon ka.",
      description:
        "A joyful morning of sacred turmeric blessings and fragrant marigold showers.",
      highlights: [
        "Auspicious Turmeric & Saffron Ubtan blessing",
        "Fresh marigold petal showers",
      ],
    },
    {
      id: "sangeet",
      dayNumber: "DAY 01 NIGHT",
      dayDate: "Friday, 20th November 2026",
      title: "Sangeet Night",
      subtitle: "A Starlit Night Garden of Music, Rhythm & Romance",
      timing: "6:00 PM Onwards",
      location: "Dwapara Convention Centre",
      mapUrl: "https://maps.app.goo.gl/ecJLEKXWBF5nQWD68",
      theme: "Nocturnal Garden Romance, Starlight & Oriental Floral Silk",
      dressCode: "Evening Glamour — Deep Emeralds, Navy & Metallics",
      colorSwatches: [
        { name: "Deep Emerald", hex: "#065F46" },
        { name: "Midnight Navy", hex: "#0B0F19" },
        { name: "Metallic Gold", hex: "#D4AF37" },
      ],
      patternClass: "bg-leheriya-pattern",
      accentColor: "#D4AF37",
      badgeBg: "bg-indigo-950/60 text-amber-200 border-amber-400/40",
      image: "/images/sangeet-invite.jpg",
      alt: "Sangeet Night Invitation Card",
      quote: "Sur, taal aur sangeet se saji ek yaadgaar shaam.",
      description:
        "An enchanting starlit garden evening of music, dance, and celebration.",
      highlights: [
        "Family dance performances",
        "Live music under starlight",
      ],
    },
    {
      id: "nikah",
      dayNumber: "DAY 02",
      dayDate: "Saturday, 21st November 2026",
      title: "Mehfil-e-Nikah",
      subtitle: "The Holy Union & Sacred Vows",
      timing: "11:00 AM Onwards",
      location: "Dwapara Convention Centre",
      mapUrl: "https://maps.app.goo.gl/ecJLEKXWBF5nQWD68",
      theme: "Crimson Brocade, Mughal Arch & Lotus Botanicals",
      dressCode: "Pastel Elegance / Traditional Festive",
      colorSwatches: [
        { name: "Pastel Pink", hex: "#F472B6" },
        { name: "Mint Sage", hex: "#6EE7B7" },
        { name: "Champagne Gold", hex: "#D4AF37" },
      ],
      patternClass: "bg-patola-pattern",
      accentColor: "#E11D48",
      badgeBg: "bg-rose-500/20 text-rose-200 border-rose-400/40",
      image: "/images/nikah-card-bg.png",
      alt: "Mehfil-e-Nikah wedding ceremony card",
      quote: "Bound by sacred vows, united by love.",
      description:
        "The solemnization of sacred Nikah vows surrounded by loved ones from 11:00 AM onwards at Dwapara Convention Centre.",
      highlights: [
        "Sacred Nikah ceremony",
        "Rose petal blessing shower",
      ],
    },
    {
      id: "muhurat",
      dayNumber: "DAY 02 EVENING",
      dayDate: "Saturday, 21st November 2026",
      title: "The Auspicious Muhurat",
      subtitle: "Sacred Vows & Traditional South Indian Rituals",
      timing: "6:00 PM – 9:00 PM",
      location: "Dwapara Convention Centre",
      mapUrl: "https://maps.app.goo.gl/ecJLEKXWBF5nQWD68",
      theme: "Kundan Gemstone Border, Temple Gold & Maroon Filigree",
      dressCode: "Traditional Ethnic / Kanjeevaram & Silk",
      colorSwatches: [
        { name: "Deep Maroon", hex: "#7F1D1D" },
        { name: "Temple Gold", hex: "#D4AF37" },
        { name: "Forest Green", hex: "#14532D" },
      ],
      patternClass: "bg-patola-pattern",
      accentColor: "#881337",
      badgeBg: "bg-amber-600/20 text-amber-200 border-amber-500/40",
      image: "/images/muhurat-card-bg.png",
      alt: "The Auspicious Muhurat sacred marriage card",
      quote: "Seven sacred steps, a lifetime of togetherness.",
      description:
        "Sacred marriage rituals under the auspicious evening muhurat.",
      highlights: [
        "Auspicious Muhurat ceremony",
        "Traditional garland exchange",
      ],
    },
    {
      id: "reception",
      dayNumber: "DAY 03",
      dayDate: "Sunday, 22nd November 2026",
      title: "The Wedding Reception",
      subtitle: "An Elegant Evening of Felicitations & Celebrations",
      timing: "6:30 PM Onwards",
      location: "Ebisu Convention Centre",
      mapUrl: "https://maps.app.goo.gl/paFszvpXDbi91AgJ8",
      theme: "Royal Purple Temple Ikat, Deep Burnt Terracotta Grid & Bougainvillea Arch",
      dressCode: "Formal Western / Modern Indo-Western",
      colorSwatches: [
        { name: "Royal Burnt Orange", hex: "#9E3205" },
        { name: "Deep Jewel Plum", hex: "#581C87" },
        { name: "Champagne Gold", hex: "#D4AF37" },
      ],
      patternClass: "bg-leheriya-pattern",
      accentColor: "#B43E08",
      badgeBg: "bg-amber-500/20 text-amber-200 border-amber-400/40",
      image: "/images/reception-card-bg.png",
      alt: "Wedding Reception celebration card",
      quote: "A toast to new beginnings and a lifetime of happiness.",
      description:
        "An elegant evening celebrating Sameen and Anula with family and friends from 6:30 PM onwards at Ebisu Convention Centre.",
      highlights: [
        "Grand couple entrance & felicitation stage",
        "Evening celebration & music",
      ],
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

export type GuestTier = "all" | "wedding" | "reception";

export interface TierConfig {
  tier: GuestTier;
  dateDisplay: string;
  locationDisplay: string;
  isoTarget: string;
  allowedEventIds: string[];
  heroTagline: string;
  heroCtaLabel: string;
}

export function getTierConfig(tierParam?: string | null): TierConfig {
  const normalized = tierParam?.toLowerCase().trim();
  if (normalized === "reception") {
    return {
      tier: "reception",
      dateDisplay: "Sunday, 22nd November 2026",
      locationDisplay: "Ebisu Convention Centre, Bengaluru",
      isoTarget: "2026-11-22T18:30:00+05:30",
      allowedEventIds: ["reception"],
      heroTagline:
        "Together with our families, we invite you to an enchanting evening of felicitations, music, and celebration at our Wedding Reception",
      heroCtaLabel: "Discover The Reception Celebration",
    };
  }
  if (normalized === "wedding") {
    return {
      tier: "wedding",
      dateDisplay: "21st – 22nd November 2026",
      locationDisplay:
        "Dwapara Convention Centre (21st Nov) & Ebisu Convention Centre (22nd Nov)",
      isoTarget: "2026-11-21T11:00:00+05:30",
      allowedEventIds: ["nikah", "muhurat", "reception"],
      heroTagline:
        "Together with our families, we invite you to celebrate our sacred wedding vows and reception festivities",
      heroCtaLabel: "Discover The Wedding Celebrations",
    };
  }
  return {
    tier: "all",
    dateDisplay: "20th – 22nd November 2026",
    locationDisplay:
      "Dwapara Convention Centre & Ebisu Convention Centre, Bengaluru",
    isoTarget: "2026-11-20T09:30:00+05:30",
    allowedEventIds: ["haldi", "sangeet", "nikah", "muhurat", "reception"],
    heroTagline:
      "Together with our families, we invite you to three days of sacred rituals, music, and celebration",
    heroCtaLabel: "Discover The 3-Day Celebrations",
  };
}

