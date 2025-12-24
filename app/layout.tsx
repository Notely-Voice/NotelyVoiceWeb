import type { Metadata } from "next";
import localFont from "next/font/local";
import { Inter, Instrument_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const satoshi = localFont({
  src: [
    {
      path: "../assets/fonts/Satoshi-Variable/Satoshi-Variable.ttf",
      style: "normal",
    },
  ],
  variable: "--font-satoshi",
  display: "swap",
});

const varien = localFont({
  src: [
    {
      path: "../assets/fonts/varien-modern/WOFF/Varien.woff2",
      style: "normal",
    },
    {
      path: "../assets/fonts/varien-modern/WOFF/Varien-Italic.woff2",
      style: "italic",
    },
  ],
  variable: "--font-varien",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Notely Voice",
    template: "%s · Notely Voice",
  },
  description:
    "100% private AI voice-to-text transcription, everything on-device. Perfect for students, pros & accessibility.",
  applicationName: "Notely Voice",
  authors: [{ name: "Notely Voice", url: "https://notelyvoice.com" }],
  keywords: [
    "voice to text",
    "transcription",
    "on-device",
    "privacy",
    "students",
    "accessibility",
    "Notely Voice",
  ],
  colorScheme: "light",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F2FFFF" },
    { media: "(prefers-color-scheme: dark)", color: "#1F2747" },
  ],
  icons: {
    icon: "/notely_voice_logo_white.png",
    shortcut: "/notely_voice_logo_white.png",
    apple: "/notely_voice_logo_white.png",
  },
  openGraph: {
    title: "Notely Voice — Private on-device voice-to-text",
    description:
      "100% private AI voice-to-text transcription, everything on-device. Perfect for students, pros & accessibility.",
    type: "website",
    siteName: "Notely Voice",
    images: [
      {
        url: "/notely_voice_logo_white.png",
        width: 1200,
        height: 630,
        alt: "Notely Voice logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Notely Voice — Private on-device voice-to-text",
    description:
      "100% private AI voice-to-text transcription, everything on-device.",
    images: ["/notely_voice_logo_white.png"],
    creator: "@NotelyVoice",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${satoshi.variable} ${varien.variable} ${instrumentSans.variable} ${inter.variable} bg-white flex justify-center`}
      >
        <div className="mx-auto flex flex-col justify-between min-h-screen w-full">
          <Navbar />
          {children}
          <Footer bgColor="bg-[#3E45FB]" />
        </div>
      </body>
    </html>
  );
}
