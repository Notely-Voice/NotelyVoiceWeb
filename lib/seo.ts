import type { Metadata } from "next";
import { siteConfig } from "./config";

export const baseUrl = siteConfig.url;

export interface SEOConfig {
  title: string;
  description: string;
  keywords?: string[];
  path: string;
  image?: string;
  type?: "website" | "article";
}

export function generatePageMetadata({
  title,
  description,
  keywords = [],
  path,
  image = "/notely_voice_logo_white.png",
  type = "website",
}: SEOConfig): Metadata {
  const url = `${baseUrl}${path}`;
  const fullTitle = path === "/" ? title : `${title} · Notely Voice`;

  // Common keywords for all pages
  const commonKeywords = [
    "voice to text",
    "transcription",
    "on-device",
    "privacy",
    "Notely Voice",
    "ai transcription",
    "speech to text",
  ];

  const allKeywords = [...new Set([...commonKeywords, ...keywords])];

  return {
    title: fullTitle,
    description,
    keywords: allKeywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: "Notely Voice",
      type,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: `${title} - Notely Voice`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image],
      creator: "@NotelyVoice",
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
  };
}

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Notely Voice",
    url: baseUrl,
    logo: `${baseUrl}/notely_voice_logo_white.png`,
    description:
      "100% private AI voice-to-text transcription, everything on-device. Perfect for students, professionals & accessibility.",
    sameAs: [
      "https://twitter.com/notelyvoice",
      "https://www.linkedin.com/company/notelyvoice",
      "https://www.instagram.com/notelyvoice",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Support",
      availableLanguage: ["English"],
    },
  };
}

export function generateWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Notely Voice",
    url: baseUrl,
    description:
      "100% private AI voice-to-text transcription, everything on-device.",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${baseUrl}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

export function generateSoftwareAppSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Notely Voice",
    applicationCategory: "ProductivityApplication",
    operatingSystem: ["Windows", "macOS", "Linux", "iOS", "Android"],
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      ratingCount: "1250",
      bestRating: "5",
      worstRating: "1",
    },
    description:
      "100% private AI voice-to-text transcription, everything on-device. Perfect for students, professionals & accessibility.",
    featureList: [
      "On-device transcription",
      "100% privacy",
      "Multi-language support",
      "Real-time transcription",
      "Offline mode",
      "Custom themes",
    ],
  };
}

export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${baseUrl}${item.url}`,
    })),
  };
}
