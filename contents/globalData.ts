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
    { label: "Contact", href: "/contact" },
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Service", href: "/terms-of-service" },
  ]},
  {heading: "RESOURCES", navList: [
    { label: "Help Center", href: "/help" },
    { label: "Blog", href: "/blog" },
    { label: "Tutorials", href: "/tutorials" },
  { label: "System Status", href: "/system-status" },
  { label: "Changelog", href: "/changelog" },
  ]},
  {heading: "PRODUCT", navList: [
    { label: "Features", href: "/features" },
    { label: "Pricing", href: "/pricing" },
    { label: "API Documentation", href: "/api-docs" },
    { label: "Mobile Apps", href: "/mobile-apps" },
  ]},
]

export const socialMediaLinks: Array<{ icon: string; href: string, width: number, height: number }> = [
  { icon: icons.linkedin, href: "https://www.linkedin.com/company/notelyvoice", width: 59, height: 59 },
  { icon: icons.twitter, href: "https://x.com/notelyvoice", width: 41, height: 41 },
  { icon: icons.instagram, href: "https://www.instagram.com/notelyvoice", width: 60, height: 60 },
];