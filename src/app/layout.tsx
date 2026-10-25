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
  title: "Sameen & Anula | Wedding Celebrations — Bengaluru",
  description:
    "Together with their families, Sameen and Anula invite you to celebrate their sacred wedding festivities in Bengaluru, India.",
  keywords: [
    "Sameen and Anula Wedding",
    "Indian Wedding Website",
    "Bengaluru Wedding",
    "Sameen Anula Vivah",
    "Luxury Wedding Website",
  ],
  openGraph: {
    title: "Sameen & Anula Wedding Celebration",
    description: "Dwapara Convention Centre & Ebisu Convention Centre, Bengaluru",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Sameen & Anula Wedding Celebration",
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
      className={`${cormorant.variable} ${montserrat.variable} ${pinyon.variable} scroll-smooth overflow-x-hidden`}
    >
      <body className="bg-[#240612] text-[#F3F4F6] font-sans antialiased selection:bg-[#D4AF37] selection:text-[#240612] relative overflow-x-hidden">
        <SmoothScroll>
          <FloatingPetals />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}

