import type { Metadata } from "next";
import { Instrument_Sans, Inter } from "next/font/google";
import "./globals.css";

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
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
        className={`${instrumentSans.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
