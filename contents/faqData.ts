export interface FAQItem {
  question: string;
  answer: string | string[];
}

export interface FAQCategory {
  id: string;
  label: string;
  faqs: FAQItem[];
}

export const faqData: FAQCategory[] = [
  {
    id: "getting-started",
    label: "Getting Started",
    faqs: [
      {
        question: "What is Notely voice?",
        answer: "Notely voice is a voice-to-text transcription app that converts your spoken words into written notes instantly. Whether you're taking meeting notes, brainstorming ideas, or transcribing audio files, our app makes it easy to capture your thoughts without typing.",
      },
      {
        question: "How do I get started?",
        answer: "Simply download the app from the App Store or Google Play, create a free account, and you're ready to go. No credit card required for the free plan. Tap the microphone icon and start speaking.",
      },
      {
        question: "Which devices are supported?",
        answer: "Notely Voice works on iOS (iPhone and iPad), Android smartphones and tablets, and on macOS (Beta).",
      },
      {
        question: "Do I need an internet connection?",
        answer: "For Private AI transcription and English summaries, no internet connection is required after downloading on-device model. For Cloud AI transcriptions, you require internet connections.",
      }
    ],
  },
  {
    id: "transcription-accuracy",
    label: "Transcription & Accuracy",
    faqs: [
      {
        question: "How accurate is the transcription?",
        answer: "On-device private transcription delivers based on the AI model selected. Cloud transcription delivers up to 95% accuracy in optimal conditions. Accuracy depends on factors like audio quality, background noise, speaker accents, and clarity of speech. For best results, speak clearly in a quiet environment.",
      },
      {
        question: "Can I transcribe in different languages?",
        answer: "Yes! We support 100+ languages including English, Spanish, French, German, Chinese, Arabic, Hindi, and many more. You can easily switch between languages in the app settings.",
      },
      {
        question: "Can I improve transcription accuracy?",
        answer: ["Yes! Here are some tips:",
          "Speak clearly and at a moderate pace",
          "Use a good quality microphone",
          "Minimize background noise",
          "Add custom vocabulary for industry-specific terms or names",
          "Review and correct transcriptions to help the AI learn",]
      },
      {
        question: "Does the app understand different accents?",
        answer: "Absolutely. The AI model is trained on diverse speech patterns and handles a wide range of accents.",
      },
      {
        question: "How do I add punctuation?",
        answer: "Transcription are done with punctuations by default, but you can instruct the AI using custom prompts on cloud mode.",
      },
    ],
  },
  {
    id: "features-functionality",
    label: "Features & Functionality",
    faqs: [
      {
        question: "Can I transcribe pre-recorded audio files?",
        answer: "Yes! Upload audio or video files in formats like MP3, WAV, M4A, MP4, and more. The app will transcribe them automatically. This feature is available on Private AI and cloud AI Premium plans.",
      },
      {
        question: "How do I organize my notes?",
        answer: [
          "Use our organizational features:",
          "Search: Find any note instantly with keyword search",
          "Favorites: Pin important notes for quick access",
          "Recents: View your most recently edited notes",
          "Folders: Create custom folders to group related notes (coming soon)",
        ],
      },
      {
        question: "Can I improve transcription accuracy?",
        answer: [
          "Yes! Here are some tips:",
          "Speak clearly and at a moderate pace",
          "Use a good quality microphone",
          "Minimize background noise",
          "Add custom vocabulary for industry-specific terms or names",
          "Review and correct transcriptions to help the AI learn",
        ],
      },
      {
        question: "Can I edit my transcriptions?",
        answer: "Absolutely. After transcription, you can edit text, add formatting (bold, italics, headings, lists), highlight key points, and insert images or links. Changes are saved automatically.",
      },
      {
        question: "What are voice notes?",
        answer: "Voice notes preserve your original audio recording alongside the transcription. This is perfect when you want to capture the emotion, tone, or nuance of spoken words that text alone can't convey.",
      },
    ],
  },
  {
    id: "plans-billing",
    label: "Plans & Billing",
    faqs: [
      {
        question: "What's included in the paid plans?",
        answer: [
          "Pro Plan ($1.99/week or $17.99/year):",
          "1,200 minutes per month",
          "Rich text editing",
          "Multi-language support (50+ languages)",
          "Audio file transcription",
          "Append & summarize features",
          "Custom themes",
          "Priority support",
          "",
          "Premium Plan ($24.99/month or $239/year):",
          "Unlimited transcription minutes",
          "Everything in Pro, plus:",
          "Batch audio transcription",
          "Advanced AI features",
          "Real-time collaboration",
          "Custom vocabulary",
          "API access",
          "Dedicated account manager",
        ],
      },
      {
        question: "Can I try the paid plans before committing?",
        answer: "Yes! Pro includes a 7-day free trial, and Premium includes a 14-day free trial. No credit card required to start your trial.",
      },
      {
        question: "Do you offer refunds?",
        answer: "Yes! If you're not satisfied, kindly reach out to support@notelyvoice.ai",
      },
      {
        question: "Can I change or cancel my plan anytime?",
        answer: "Absolutely. Upgrade, downgrade, or cancel your subscription anytime from your Account Settings. Changes take effect immediately. If you cancel, you'll retain access until the end of your billing period.",
      },
      {
        question: "What happens if I exceed my monthly minutes?",
        answer: "You will have to use private AI transcription",
      },
    ],
  },
  {
    id: "privacy-security",
    label: "Privacy & Security",
    faqs: [
      {
        question: "Is my data secure?",
        answer: "Yes. For private AI, your audio remains on your device unless deleted. For Cloud AI, your audios are transcribed by open AI API.",
      },
      {
        question: "Does the app listen to me all the time?",
        answer: "No. The app only listens when you activate the microphone by tapping the record button. Your device does not listen passively.",
      },
      {
        question: "Who can see my transcriptions?",
        answer: "Only you. Your notes and audio are private unless you choose to share them. If you use Cloud AI, then you must consent to sharing your audio with Open AI",
      },
      {
        question: "Do you store my audio recordings?",
        answer: "Audio files are stored securely in your account for as long as you keep them. You can delete recordings anytime.",
      },
    ],
  },
  {
    id: "technical-support",
    label: "Technical Support",
    faqs: [
      {
        question: "What should I do if transcription isn't working?",
        answer: "First, check that you have a stable internet connection and the latest version of the app. Grant microphone permissions and try again. If the issue persists, contact support.",
      },
      {
        question: "The microphone icon isn't showing. Why?",
        answer: "Make sure you've granted microphone permissions and that your device has a functioning microphone. Restart the app and try again.",
      },
      {
        question: "How do I enable microphone permissions?",
        answer: [
          "iOS: Go to Settings > Privacy > Microphone > Enable Notely Voice",
          "Android: Go to Settings > Apps > Notely Voice > Permissions > Allow Microphone",
        ],
      },
      {
        question: "Can I use the app offline?",
        answer: "Private AI transcription works offline if you've downloaded language packs. However, features like cloud AI transcription & summarization, require an internet connection.",
      },
    ],
  },
  {
    id: "account-management",
    label: "Account Management",
    faqs: [
      {
        question: "How do I update my password?",
        answer: "Go to Account SignIn and use the \"Forgot Password.\" feature",
      },
      {
        question: "How do I delete my account?",
        answer: "Go to Account > Scroll to bottom > Delete Account. This will only delete your Login Details but preserve your local transcriptions and data.",
      },
      {
        question: "Can I have multiple accounts?",
        answer: "Yes, but you can only subscribe with accounts tied to your Gmail or Appled ID.",
      },
      {
        question: "How do I manage my subscription?",
        answer: "Go to Account > Plans to view your current plan, use manage button to cancel your subscription. Changes take effect at your next billing cycle.",
      },
    ],
  },
  {
    id: "refunds",
    label: "Refunds",
    faqs: [
      {
        question: "Do you offer refunds?",
        answer: "Yes! If you're not satisfied, kindly reach out to support@notelyvoice.ai",
      },
      {
        question: "How long does Refunds take from Google play or Apple pay?",
        answer: "Usually it depends on which payment method you used and whether the refund is already approved. For Google Play Credit/debit card: usually 3–5 working days Sometimes your bank can take up to 10 working days. For Apple / Apple Pay Refund decision usually comes in 24–48 hours",
      },
    ],
  },
  {
    id: "creating-voice-notes",
    label: "Creating Voice Notes",
    faqs: [
      {
        question: "Placeholder question for creating voice notes",
        answer: "Placeholder answer for creating voice notes. This will be filled in later.",
      },
    ],
  },
  {
    id: "exporting-notes",
    label: "Exporting Notes",
    faqs: [
      {
        question: "Placeholder question for exporting notes",
        answer: "Placeholder answer for exporting notes. This will be filled in later.",
      },
    ],
  },
  {
    id: "on-device-model",
    label: "On-device model",
    faqs: [
      {
        question: "Placeholder question for on-device model",
        answer: "Placeholder answer for on-device model. This will be filled in later.",
      },
    ],
  },
];
