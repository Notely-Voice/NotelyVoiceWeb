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
    description: "Perfect for trying out voice recording and casual note-taking.",
    priceWeekly: "$0",
    priceYearly: "$0",
    features: [
      { text: "Basic notepad with voice input" },
      { text: "Import Audio and Video" },
      { text: "Search notes" },
      { text: "Recent and favourites" },
      { text: "Bulk Export Audio" },
      { text: "Export to text, PDF" },
      { text: "Create Folders" },
      { text: "Rich text editing (bold, italics, headings, lists)" },
    ],
    buttonText: "Get Started Free",
  },
  {
    type: "PRIVATE AI",
    description: "For privacy-first users who prefer on-device local audio processing.",
    priceWeekly: "$1.99",
    priceYearly: "$17.99",
    features: [
      { text: "Unlimited On-device private AI transcription in 100+ languages" },
      { text: "On-device summaries in English" },
      { text: "Audio & video transcription (upload recordings)" },
      { text: "Bluetooth microphones in recording" },
      { text: "Custom themes" },
      { text: "Priority support" },
      { text: "Bulk Export Audio" },
      { text: "Import Audios" },
      { text: "Export to multiple formats (PDF, DOCX, TXT)" },
      { text: "Rich text editing (bold, italics, headings, lists)" },
      { text: "Create Folders" },
    ],
    buttonText: "Start 3-Day Free Trial",
  },
  {
    type: "CLOUD AI",
    description: "For professionals who demand Cloud transcription, enhanced accuracy and smart formatting.",
    priceWeekly: "$6.99",
    priceYearly: "$69.99",
    features: [
      { text: "Custom Prompts for AI transcription" },
      { text: "150 minutes of advanced AI cloud transcription in 100+ languages" },
      { text: "Summarisation in 100+ languages" },
      { text: "Unlimited on-device private transcription" },
      { text: "Super fast cloud transcription & summaries" },
      { text: "Bluetooth microphones in recording" },
      { text: "Priority support" },
      { text: "Bulk Export Audios" },
      { text: "Import Audios" },
      { text: "Export to multiple formats (PDF, DOCX, TXT)" },
      { text: "Rich text editing (bold, italics, headings, lists)" },
      { text: "Create Folders" },
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
    feature: "",
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
    feature: "Export & Import Notes",
    free: true,
    privateAi: true,
    cloudAi: true,
  },
  {
    feature: "Transcription limit",
    free: false,
    privateAi: "On-device unlimited",
    cloudAi: "150 minutes of cloud AI + On-device unlimited",
  },
  {
    feature: "Summaries",
    free: false,
    privateAi: "Supports English",
    cloudAi: "Supports Summaries in 100+ languages",
  },
  {
    feature: "Transcription Speed",
    free: false,
    privateAi: "Medium",
    cloudAi: "Super Fast",
  },
  {
    feature: "Custom prompt",
    free: false,
    privateAi: false,
    cloudAi: true,
  },
];


export interface FAQItem {
  question: string;
  answer: string;
}

export const pricingFaqData: FAQItem[] = [
  {
    question: "How do I upgrade from Private AI to Cloud AI?",
    answer: "You can upgrade your plan directly from the app account page. Tap on \"Go Premium\" and select the Premium plan, and follow the payment process. Your upgrade will be effective when your current subscription is over.",
  },
  {
    question: "Is there a free trial or free plan available?",
    answer: "There is a 3-day free trial which allows you to test both unlimited on-device Private AI, then Cloud AI transcription, with restriction to 10 minutes of cloud AI transcripts.",
  },
  {
    question: "Can I change or cancel my subscription at any time?",
    answer: "Yes and you have to allow your current subscription to expire",
  },
  {
    question: "Do you offer discounts for specific groups?",
    answer: "Not yet, but we plan to roll out discounts for students to use",
  },
  {
    question: "Can I use Notely for my whole team?",
    answer: "The feature will come very soon",
  },
];
