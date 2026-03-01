import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Into Build | Quality Building Services in Brighton & Sussex",
    template: "%s | Into Build",
  },
  description:
    "Into Build provides quality house extensions, loft conversions, renovations and building services across Brighton, East Sussex, West Sussex and London. Trusted, accredited builders.",
  keywords: [
    "builders Brighton",
    "house extensions Sussex",
    "loft conversions Brighton",
    "building services East Sussex",
    "property renovations Brighton",
    "residential building Sussex",
    "trusted builders Brighton",
    "Federation of Master Builders",
  ],
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "Into Build",
    title: "Into Build | Quality Building Services in Brighton & Sussex",
    description:
      "House extensions, loft conversions, renovations and building services across Brighton, Sussex and London.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
