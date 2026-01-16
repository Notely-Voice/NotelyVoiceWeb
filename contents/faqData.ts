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
        answer: "Simply download the app from the App Store or Google Play, create a free account, and you're ready to go. No credit card required for the free plan. Tap the microphone icon and start speaking—your words will appear as text in real time.",
      },
      {
        question: "Which devices are supported?",
        answer: "Notely Voice works on iOS (iPhone and iPad), Android smartphones and tablets, and through web browsers on desktop computers (Chrome, Safari, Edge, Firefox).",
      },
      {
        question: "Do I need an internet connection?",
        answer: "For best accuracy, we recommend an internet connection. However, basic transcription features work offline once you've downloaded the language packs for your device.",
      },
      // {
      //   question: "Can I use Notely on multiple devices?",
      //   answer: "Yes, you can use Notely voice on any iOS or Android device. Your notes sync across all your devices when you're logged into your account.",
      // },
    ],
  },
  {
    id: "transcription-accuracy",
    label: "Transcription & Accuracy",
    faqs: [
      {
        question: "How accurate is the transcription?",
        answer: "Our AI-powered transcription delivers up to 95% accuracy in optimal conditions. Accuracy depends on factors like audio quality, background noise, speaker accents, and clarity of speech. For best results, speak clearly in a quiet environment.",
      },
      {
        question: "Can I transcribe in different languages?",
        answer: "Yes! We support 50+ languages including English, Spanish, French, German, Mandarin, Arabic, Hindi, and many more. You can easily switch between languages in the app settings.",
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
        answer: "Absolutely. Our AI is trained on diverse speech patterns and handles a wide range of accents. The more you use the app, the better it adapts to your unique voice.",
      },
      {
        question: "How do I add punctuation?",
        answer: "You can add punctuation by speaking it aloud. Just say \"comma,\" \"period,\" \"question mark,\" or \"exclamation point\" and the app will insert them. You can also manually edit punctuation after transcription.",
      },
    ],
  },
  {
    id: "features-functionality",
    label: "Features & Functionality",
    faqs: [
      {
        question: "Can I transcribe pre-recorded audio files?",
        answer: "Yes! Upload audio or video files in formats like MP3, WAV, M4A, MP4, and more. The app will transcribe them automatically. This feature is available on Pro and Premium plans.",
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
        question: "Is there a free plan?",
        answer: [
          "Yes! Our free plan includes:",
          "300 minutes of transcription per month",
          "Basic notepad with voice input",
          "Search, favorites, and recents",
          "1 language support",
          "Export to text format",
        ],
      },
      {
        question: "What's included in the paid plans?",
        answer: [
          "Pro Plan ($9.99/month or $99/year):",
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
        answer: "Yes! If you're not satisfied, we offer a 30-day money-back guarantee, no questions asked.",
      },
      {
        question: "Can I change or cancel my plan anytime?",
        answer: "Absolutely. Upgrade, downgrade, or cancel your subscription anytime from your Account Settings. Changes take effect immediately. If you cancel, you'll retain access until the end of your billing period.",
      },
      {
        question: "What happens if I exceed my monthly minutes?",
        answer: "Free users will need to wait until the next month or upgrade to a paid plan. Pro users can purchase additional minutes at $0.10/minute or upgrade to Premium for unlimited transcription.",
      },
    ],
  },
  {
    id: "privacy-security",
    label: "Privacy & Security",
    faqs: [
      {
        question: "Is my data secure?",
        answer: "Yes. We use bank-level encryption (256-bit SSL) to protect your data. All transcriptions are stored securely on encrypted servers, and we're SOC 2 compliant.",
      },
      {
        question: "Does the app listen to me all the time?",
        answer: "No. The app only listens when you activate the microphone by tapping the record button. Your device does not listen passively.",
      },
      {
        question: "Who can see my transcriptions?",
        answer: "Only you. Your notes and audio are private unless you choose to share them. We never sell or share your personal data with third parties.",
      },
      {
        question: "Do you store my audio recordings?",
        answer: "Audio files are stored securely in your account for as long as you keep them. You can delete recordings anytime, and they'll be permanently removed from our servers.",
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
        question: "The app isn't transcribing accurately. What should I do?",
        answer: [
          "Try these troubleshooting steps:",
          "Check your internet connection",
          "Ensure microphone permissions are enabled",
          "Update the app to the latest version",
          "Clear the app cache (Settings > Apps > Notely Voice > Clear Cache)",
          "Make sure no other apps are using the microphone",
          "Verify that the correct language is selected",
        ],
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
        answer: "Basic transcription works offline if you've downloaded language packs. However, features like AI summarization, cloud sync, and audio file uploads require an internet connection.",
      },
    ],
  },
  {
    id: "account-management",
    label: "Account Management",
    faqs: [
      {
        question: "How do I update my profile or password?",
        answer: "Go to Account Settings (tap your profile icon) and select \"Edit Profile\" or \"Change Password.\"",
      },
      {
        question: "How do I delete my account?",
        answer: "Go to Account Settings > Delete Account. Please note this action is permanent and will erase all your transcriptions and data.",
      },
      {
        question: "Can I use my account on multiple devices?",
        answer: "Yes! Your account syncs automatically across all your devices. Log in with the same credentials on any device to access your notes.",
      },
      {
        question: "Can I have multiple accounts?",
        answer: "Yes, you can create separate accounts with different email addresses. Log out and use a different email to create another account.",
      },
      {
        question: "How do I manage my subscription?",
        answer: "Go to Settings > Plan & Billing to view your current plan, upgrade, downgrade, or cancel your subscription. Changes take effect at your next billing cycle.",
      },
    ],
  },
];
