export interface PricingFeature {
  text: string;
}

export interface PricingCard {
  type: "FREE" | "PRO" | "PREMIUM";
  description: string;
  priceMonthly: string;
  priceAnnually: string;
  features: PricingFeature[];
  buttonText: string;
}

export const pricingCards: PricingCard[] = [
  {
    type: "FREE",
    description: "Perfect for trying out voice-to-text and casual note-taking.",
    priceMonthly: "$0",
    priceAnnually: "$0",
    features: [
      { text: "300 minutes of transcription per month" },
      { text: "Basic notepad with voice input" },
      { text: "Search notes" },
      { text: "Recents and favorites" },
      { text: "Export to text" },
      { text: "1 language support" },
      { text: "Community support" },
    ],
    buttonText: "Get Started Free",
  },
  {
    type: "PRO",
    description: "For power users who need more capacity and advanced features.",
    priceMonthly: "$9.99",
    priceAnnually: "$99.90",
    features: [
      { text: "1,200 minutes of transcription per month" },
      { text: "Everything in Free, plus:" },
      { text: "Rich text editing (bold, italics, headings, lists)" },
      { text: "Unlimited voice notes" },
      { text: "Audio file transcription (upload recordings)" },
      { text: "Append & summarize features" },
      { text: "Multi-language support (50+ languages)" },
      { text: "Custom themes" },
      { text: "Priority support" },
      { text: "Export to multiple formats (PDF, DOCX, TXT)" },
    ],
    buttonText: "Start 7-Day Free Trial",
  },
  {
    type: "PREMIUM",
    description: "For professionals and teams who demand unlimited capacity and enterprise features.",
    priceMonthly: "$24.99",
    priceAnnually: "$249.90",
    features: [
      { text: "Unlimited transcription minutes" },
      { text: "Everything in Pro, plus:" },
      { text: "Batch audio transcription" },
      { text: "Advanced AI summarization" },
      { text: "Real-time collaboration (share & edit with teams)" },
      { text: "Custom vocabulary (industry terms & names)" },
      { text: "Priority processing" },
      { text: "API access" },
      { text: "Advanced export options" },
      { text: "Dedicated account manager" },
    ],
    buttonText: "Start 14-Day Free Trial",
  },
];



export interface FeatureRow {
  category?: string;
  feature: string;
  free: string | boolean;
  pro: string | boolean;
  premium: string | boolean;
  isCategoryHeader?: boolean;
}

export interface PlanInfo {
  type: "FREE" | "PRO" | "PREMIUM";
  subtitle: string;
  price: string;
  buttonText: string;
}

export const plansInfo: PlanInfo[] = [
  {
    type: "FREE",
    subtitle: "Free",
    price: " Forever",
    buttonText: "Get Started Free",
  },
  {
    type: "PRO",
    subtitle: "$9.99",
    price: "/month",
    buttonText: "Get Started",
  },
  {
    type: "PREMIUM",
    subtitle: "$24.99",
    price: "/month",
    buttonText: "Get Started",
  },
];

export const featuresData: FeatureRow[] = [
  {
    feature: "Device & platform",
    free: "Free",
    pro: "Pro",
    premium: "Premium",
    isCategoryHeader: true,
  },
  {
    feature: "iPhone (iOS)",
    free: true,
    pro: true,
    premium: true,
  },
  {
    feature: "Android",
    free: true,
    pro: true,
    premium: true,
  },
  {
    feature: "Effortless voice typing",
    free: "Free",
    pro: "Pro",
    premium: "Premium",
    isCategoryHeader: true,
  },
  {
    feature: "Create Notes",
    free: true,
    pro: true,
    premium: true,
  },
  {
    feature: "Word limit",
    free: "1,000/week",
    pro: "Unlimited",
    premium: "Unlimited",
  },
  {
    feature: "Create Notes",
    free: false,
    pro: true,
    premium: true,
  },
  {
    feature: "Support 100+ languages",
    free: true,
    pro: true,
    premium: true,
  },
];


export interface FAQItem {
  question: string;
  answer: string;
}

export const pricingFaqData: FAQItem[] = [
  {
    question: "How do I upgrade from Basic to Pro?",
    answer: "You can upgrade your plan directly from the app settings. Go to Plan & Billing, select the Pro plan, and follow the payment process. Your upgrade will be effective immediately.",
  },
  {
    question: "Is there a free trial or free plan available?",
    answer: "Yes! We offer a free Forever plan with 300 minutes of transcription per month. Additionally, Pro and Premium plans come with 7-day and 14-day free trials respectively.",
  },
  {
    question: "Can I change or cancel my subscription at any time?",
    answer: "Yes. You can manage your subscription under Plan & Billing in the Notely voice App.",
  },
  {
    question: "Do you offer discounts for specific groups?",
    answer: "We offer discounts for educational institutions, nonprofits, and large teams. Please contact our sales team for custom pricing options.",
  },
  {
    question: "Can I use Notely for my whole team?",
    answer: "Absolutely! Our Premium plan includes real-time collaboration features that allow you to share and edit notes with your team members in real-time.",
  },
];
