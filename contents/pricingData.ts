export interface PricingFeature {
  text: string;
}

export interface PricingCard {
  type: "FREE" | "PRIVATE AI" | "CLOUD AI";
  description: string;
  priceWeekly: string;
  priceYearly: string;
  features: PricingFeature[];
  buttonText: string;
}

export const pricingCards: PricingCard[] = [
  {
    type: "FREE",
    description: "Perfect for trying out voice-to-text and casual note-taking.",
    priceWeekly: "$0",
    priceYearly: "$0",
    features: [
      { text: "Voice recording & exporting" },
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
    type: "PRIVATE AI",
    description: "For power users who need more capacity and advanced features.",
    priceWeekly: "$1.99",
    priceYearly: "$17.99",
    features: [
      { text: "150 minutes of transcription per week" },
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
    buttonText: "Start 3-Day Free Trial",
  },
  {
    type: "CLOUD AI",
    description: "For professionals and teams who demand unlimited capacity and enterprise features.",
    priceWeekly: "$6.99",
    priceYearly: "$69.99",
    features: [
      { text: "Unlimited transcription minutes" },
      { text: "Everything in Private AI, plus:" },
      { text: "Batch audio transcription" },
      { text: "Advanced AI summarization" },
      { text: "Real-time collaboration (share & edit with teams)" },
      { text: "Custom vocabulary (industry terms & names)" },
      { text: "Priority processing" },
      { text: "API access" },
      { text: "Advanced export options" },
      { text: "Dedicated account manager" },
    ],
    buttonText: "Start 3-Day Free Trial",
  },
];



export interface FeatureRow {
  category?: string;
  feature: string;
  free: string | boolean;
  privateAi: string | boolean;
  cloudAi: string | boolean;
  isCategoryHeader?: boolean;
}

export interface PlanInfo {
  type: "FREE" | "PRIVATE AI" | "CLOUD AI";
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
    type: "PRIVATE AI",
    subtitle: "$9.99",
    price: "/week",
    buttonText: "Get Started",
  },
  {
    type: "CLOUD AI",
    subtitle: "$24.99",
    price: "/week",
    buttonText: "Get Started",
  },
];

export const featuresData: FeatureRow[] = [
  {
    feature: "Device & platform",
    free: "Free",
    privateAi: "Private AI",
    cloudAi: "Cloud AI",
    isCategoryHeader: true,
  },
  {
    feature: "iPhone (iOS)",
    free: true,
    privateAi: true,
    cloudAi: true,
  },
  {
    feature: "Android",
    free: true,
    privateAi: true,
    cloudAi: true,
  },
  {
    feature: "Effortless voice typing",
    free: "Free",
    privateAi: "Private AI",
    cloudAi: "Cloud AI",
    isCategoryHeader: true,
  },
  {
    feature: "Create Notes",
    free: true,
    privateAi: true,
    cloudAi: true,
  },
  {
    feature: "Word limit",
    free: "1,000/week",
    privateAi: "Unlimited",
    cloudAi: "Unlimited",
  },
  {
    feature: "Create Notes",
    free: false,
    privateAi: true,
    cloudAi: true,
  },
  {
    feature: "Support 100+ languages",
    free: true,
    privateAi: true,
    cloudAi: true,
  },
];


export interface FAQItem {
  question: string;
  answer: string;
}

export const pricingFaqData: FAQItem[] = [
  {
    question: "How do I upgrade from Basic to Private AI?",
    answer: "You can upgrade your plan directly from the app settings. Go to Plan & Billing, select the Private AI plan, and follow the payment process. Your upgrade will be effective immediately.",
  },
  {
    question: "Is there a free trial or free plan available?",
    answer: "Yes! We offer a free Forever plan with 300 minutes of transcription per week. Additionally, Private AI and Cloud AI plans come with 3-day free trials.",
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
    answer: "Absolutely! Our Cloud AI plan includes real-time collaboration features that allow you to share and edit notes with your team members in real-time.",
  },
];
