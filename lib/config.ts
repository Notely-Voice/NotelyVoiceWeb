/**
 * Site Configuration
 * Manages base URL based on environment
 */

export function getBaseUrl(): string {
  // 1. Check for explicit environment variable
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL;
  }

  // 2. Auto-detect based on Vercel/Netlify environment
  if (process.env.NEXT_PUBLIC_VERCEL_URL) {
    return `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`;
  }

  if (process.env.NETLIFY && process.env.URL) {
    return process.env.URL;
  }

  // 3. Development environment
  if (process.env.NODE_ENV === "development") {
    return "http://localhost:3000";
  }

  // 4. Default to production domain
  return "https://notelyvoice.com";
}

export const siteConfig = {
  name: "Notely Voice",
  description:
    "Transform your voice into text instantly with 100% private, on-device AI transcription. Perfect for students, professionals & accessibility needs.",
  url: getBaseUrl(),
  ogImage: "/notely_voice_logo_white.png",
  twitter: "@NotelyVoice",
  links: {
    twitter: "https://x.com/notelyvoice",
    linkedin: "https://www.linkedin.com/company/notelyvoice",
    instagram: "https://www.instagram.com/notelyvoice",
  },
} as const;
