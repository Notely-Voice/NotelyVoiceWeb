import { icons } from "@/lib";

export const navbarItems: Array<{ label: string; href: string }> = [
  { label: "Features", href: "/features" },
  { label: "Pricing", href: "/pricing" },
  { label: "FAQ", href: "/faq" },
  { label: "Privacy", href: "/privacy" },
  { label: "About US", href: "/about" },
];

export const footerNavItems: Array<{ heading: string; navList: Array<{ label: string; href: string }> }> = [
  {heading: "COMPANY", navList: [
    { label: "About US", href: "/about" },
    { label: "Contact", href: "contact" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ]},
  {heading: "RESOURCES", navList: [
    { label: "Faq", href: "faq" },
    { label: "What is new", href: "whatisnew" },
  ]},
  {heading: "PRODUCT", navList: [
    { label: "Features", href: "/features" },
    { label: "Pricing", href: "/pricing" },
    { label: "Mobile Apps", href: "https://play.google.com/store/apps/developer?id=Notely+Voice,+Inc." },
  ]},
]

export const socialMediaLinks: Array<{ icon: string; href: string, width: number, height: number }> = [
  { icon: icons.linkedin, href: "https://www.linkedin.com/company/notely-voice-inc/", width: 40, height: 40 },
  { icon: icons.twitter, href: "https://x.com/notelyvoice", width: 32, height: 32 },
  { icon: icons.instagram, href: "https://www.instagram.com/notelyvoice", width: 40, height: 40 },
];

export const blueSocialMediaLinks: Array<{ icon: string; href: string, width: number, height: number }> = [
  { icon: icons.linkedin_blue, href: "https://www.linkedin.com/company/notelyvoice", width: 40, height: 40 },
  { icon: icons.twitter_blue, href: "https://x.com/notelyvoice", width: 32, height: 32 },
  { icon: icons.instagram_blue, href: "https://www.instagram.com/notelyvoiceai", width: 40, height: 40 },
];