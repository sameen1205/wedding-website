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
  title: "Julian & Genevieve | September 19, 2026 — Villa Cimbrone, Ravello",
  description:
    "Together with their families, Julian Montgomery Vance and Genevieve Aurelia Rossi invite you to celebrate their wedding at Villa Cimbrone, Ravello, Amalfi Coast, Italy.",
  keywords: [
    "Julian and Genevieve Wedding",
    "Luxury Wedding Website",
    "Villa Cimbrone",
    "Ravello Wedding",
    "Amalfi Coast Wedding",
  ],
  openGraph: {
    title: "Julian & Genevieve Wedding Celebration",
    description: "September 19, 2026 • Villa Cimbrone, Ravello, Amalfi Coast",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Julian & Genevieve Wedding",
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

