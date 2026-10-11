import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat, Pinyon_Script } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import FloatingPetals from "@/components/FloatingPetals";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const pinyon = Pinyon_Script({
  subsets: ["latin"],
  variable: "--font-pinyon",
  weight: ["400"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sameen & Anula | November 20 — 22, 2026 — Bangalore Palace",
  description:
    "Together with their families, Sameen and Anula invite you to three days of sacred rituals, music, and royal celebration at The Bangalore Palace, Karnataka, India.",
  keywords: [
    "Sameen and Anula Wedding",
    "Royal Indian Wedding Website",
    "Bangalore Palace Wedding",
    "Sameen Anula Vivah",
    "Luxury Wedding Website",
  ],
  openGraph: {
    title: "Sameen & Anula Royal Wedding Celebration",
    description: "November 20 — 22, 2026 • The Bangalore Palace, Karnataka",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Sameen & Anula Royal Wedding Celebration",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${montserrat.variable} ${pinyon.variable} scroll-smooth`}
    >
      <body className="bg-ivory text-charcoal font-sans antialiased selection:bg-champagne selection:text-charcoal relative overflow-x-hidden">
        <SmoothScroll>
          <FloatingPetals />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}

