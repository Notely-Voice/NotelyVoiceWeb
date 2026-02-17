import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Inter, Instrument_Sans, Noto_Serif_Tamil } from "next/font/google";
import "./globals.css";
import NavbarWrapper from "@/components/layouts/NavbarWrapper";
import FooterWrapper from "@/components/layouts/FooterWrapper";
import { DownloadModalProvider } from "@/contexts/DownloadModalContext";
import DownloadModalWrapper from "@/components/ui/DownloadModalWrapper";
import StructuredData from "@/components/seo/StructuredData";
import { siteConfig } from "@/lib/config";

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const notoSerifTamil = Noto_Serif_Tamil({
  variable: "--font-noto-serif-tamil",
  subsets: ["tamil"],
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

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F2FFFF" },
    { media: "(prefers-color-scheme: dark)", color: "#1F2747" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Notely Voice — Private AI Voice-to-Text Transcription",
    template: "%s · Notely Voice",
  },
  description:
    "Transform your voice into text instantly with 100% private, on-device AI transcription. Perfect for students, professionals & accessibility needs. No internet required.",
  applicationName: "Notely Voice",
  authors: [{ name: "Notely Voice", url: siteConfig.url }],
  keywords: [
    "voice to text",
    "transcription",
    "on-device",
    "privacy",
    "students",
    "accessibility",
    "Notely Voice",
    "ai transcription",
    "speech to text",
    "voice notes",
    "dictation app",
    "offline transcription",
  ],
  icons: {
    icon: "/notely_voice_logo_blue.png",
    shortcut: "/notely_voice_logo_blue.png",
    apple: "/notely_voice_logo_blue.png",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Notely Voice — Private AI Voice-to-Text Transcription",
    description:
      "Transform your voice into text instantly with 100% private, on-device AI transcription. Perfect for students, professionals & accessibility needs.",
    type: "website",
    siteName: "Notely Voice",
    url: siteConfig.url,
    locale: "en_US",
    images: [
      {
        url: "/notely_voice_logo_blue.png",
        width: 1200,
        height: 630,
        alt: "Notely Voice logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Notely Voice — Private AI Voice-to-Text Transcription",
    description:
      "Transform your voice into text instantly with 100% private, on-device AI transcription.",
    images: ["/notely_voice_logo_blue.png"],
    creator: "@NotelyVoice",
    site: "@NotelyVoice",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteConfig.url,
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="custom-scrollbar scroll-smooth">
      <head>
        <StructuredData />
      </head>
      <body
        suppressHydrationWarning
        className={`${satoshi.variable} ${varien.variable} ${instrumentSans.variable} ${inter.variable} ${notoSerifTamil.variable} bg-white flex justify-center`}
      >
        <DownloadModalProvider>
          <div className="mx-auto flex flex-col justify-between min-h-screen w-full relative">
            <NavbarWrapper />
            {children}
            <FooterWrapper />
          </div>
          <DownloadModalWrapper />
        </DownloadModalProvider>
      </body>
    </html>
  );
}
