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
  title: "Sameen & Anula — Wedding Celebrations",
  description: "Celebrate with Sameen & Anula as they begin their forever.",
  metadataBase: new URL("https://samanulaweb.vercel.app"),
  openGraph: {
    title: "Sameen & Anula — Wedding Celebrations",
    description: "Celebrate with Sameen & Anula as they begin their forever.",
    url: "https://samanulaweb.vercel.app",
    siteName: "Sameen & Anula Wedding",
    images: [
      {
        url: "/images/story-3.jpg",
        width: 1200,
        height: 630,
        alt: "Sameen proposing to Anula",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sameen & Anula — Wedding Celebrations",
    images: ["/images/story-3.jpg"],
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

