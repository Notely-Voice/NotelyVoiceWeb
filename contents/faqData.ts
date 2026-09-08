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
        answer: "Notely Voice is a voice note and transcription app. Recording, organizing, and exporting your notes is completely free. Whether you're taking meeting notes, brainstorming ideas, or transcribing audio files, our app makes it easy to capture your thoughts. AI transcription (converting speech to text) is available through our Private AI or Cloud AI plans, with a 3-day free trial.",
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
          "Private AI Plan ($1.99/week or $19.99/year):",
          "Unlimited On-device private AI transcription in 100+ languages",
          "On-device summaries in English",
          "Audio & video transcription (upload recordings)",
          "Bluetooth microphones in recording & many more",
          "",
          "Cloud AI Plan ($6.99/week or $69.99/year):",
          "Custom Prompts for AI transcription",
          "150 minutes of advanced AI cloud transcription in 100+ languages",
          "Summarisation in 100+ languages",
          "Unlimited on-device private transcription",
          "Super fast cloud transcription & summaries",
          "Bluetooth microphones in recording",
          "Priority support",
        ],
      },
      {
        question: "Can I try the paid plans before committing?",
        answer: "Yes! There is a 3-day free trial which allows you to test both unlimited on-device Private AI, then Cloud AI transcription, with restriction to 10 minutes of cloud AI transcripts.",
      },
      {
        question: "How do I upgrade from Private AI to Cloud AI?",
        answer: "You can upgrade your plan directly from the app account page. Tap on \"Go Premium\" and select the Premium plan, and follow the payment process. Your upgrade will be effective when your current subscription is over.",
      },
      {
        question: "Do you offer refunds?",
        answer: "Yes! If you're not satisfied, kindly reach out to support@notelyvoice.ai",
      },
      {
        question: "Can I change or cancel my plan anytime?",
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
    id: "common-issues",
    label: "Common Issues",
    faqs: [
      {
        question: "Why don't I see all the features mentioned in this FAQ?",
        answer: "You may be using an older version of the app. Please update to the latest version through the app stores to access current features.",
      },
      {
        question: "Why is my model download stuck at 0%?",
        answer: "Check your internet connection stability and restart the download. Review firewall settings, as security software may be blocking it.",
      },
    ],
  },
  {
    id: "creating-text-notes",
    label: "Creating Text Notes",
    faqs: [
      {
        question: "How do I create some notes?",
        answer: "Simply tap on the Plus (+) on the bottom right corner of the home screen and begin writing.",
      },
      {
        question: "How to change the title of a note?",
        answer: "The first paragraph is the title of the note. Edit the opening line to modify it.",
      },
      {
        question: "How do I delete a note?",
        answer: "You can tap X on each note on the home screen to delete.",
      },
      {
        question: "Can I organize my voice notes into folders?",
        answer: "This capability is not available at this time, feature still to come very soon.",
      },
    ],
  },
  {
    id: "creating-voice-notes",
    label: "Creating Voice Notes",
    faqs: [
      {
        question: "How do I record a voice note?",
        answer: "Simply tap the microphone button on the text editing screen and begin speaking. Tap again to stop recording.",
      },
      {
        question: "How do I delete ONLY a voice note?",
        answer: "Open the text editing screen, swipe left to delete the voice note.",
      },
      {
        question: "How do I Import an audio file?",
        answer: "Simply tap the 3 dots(...) button at the top right of the editing screen and import your audio.",
      },
      {
        question: "Can I import large audio files?",
        answer: "Yes, though files exceeding 1GB should be divided into smaller segments for device processing.",
      },
    ],
  },
  {
    id: "exporting-notes",
    label: "Exporting Texts & Voice Notes",
    faqs: [
      {
        question: "How do I Export all my notes & audio all at once?",
        answer: "LONG PRESS any note card to enter selection mode, then export multiple notes at once.",
      },
      {
        question: "How do I Export a single audio?",
        answer: "Use the menu button and select export for your audio file.",
      },
      {
        question: "How do I Export a single text as a .Txt file?",
        answer: "Access the menu and choose the text file export option.",
      },
      {
        question: "How do I Export a single text as a PDF file?",
        answer: "Use the menu to export your note as a PDF.",
      },
      {
        question: "How do I share a voice note?",
        answer: "Click on the share icon on the top right of the note editor, a popup dialog opens up to share voice note.",
      },
      {
        question: "Where are my recordings stored?",
        answer: "All recordings are stored locally on your device. We don't upload your data to any external servers.",
      },
    ],
  },
  {
    id: "android-quick-settings",
    label: "Android Quick Settings Tile",
    faqs: [
      {
        question: "What is Android Quick Settings Tile?",
        answer: "The Android Quick Settings Tile gives you instant access to stop recordings directly from your notification panel.",
      },
      {
        question: "How to Setup Android Quick Settings Tile",
        answer: [
          "Setup Instructions:",
          "",
          "1. Swipe down twice from the top of your Android screen to open the full Quick Settings panel",
          "2. Tap the Edit button (usually a pencil icon) at the bottom of the Quick Settings panel to enter edit mode",
          "3. Find \"Notely Voice\" in the list of available tiles (scroll down if needed)",
          "4. Drag the Notely Voice tile from the \"Available tiles\" section up to the \"Active tiles\" section",
          "   - Or tap the + icon next to \"Notely Voice\" to add it",
          "5. Tap \"Done\" or swipe up to close the edit panel",
        ],
      },
    ],
  },
  {
    id: "home-screen-widgets",
    label: "Home Screen Widgets",
    faqs: [
      {
        question: "What are the Home Screen Widgets?",
        answer: [
          "Notely Voice provides two Android home screen widgets that bring voice note capturing and access directly to your home screen:",
          "",
          "Quick Capture Widget: A compact single-line widget showing your latest note with quick action buttons",
          "Recent Notes Dashboard: A full-featured widget displaying a scrollable list of your 15 most recent notes",
          "",
          "Both widgets update automatically whenever you create, update, or delete notes in the app.",
        ],
      },
      {
        question: "What does the Quick Capture Widget show?",
        answer: [
          "The Quick Capture Widget displays:",
          "- Latest note title with type indicator (Voice Note or Note)",
          "- Relative timestamp (e.g., \"10 minutes ago\")",
          "- Quick action buttons:",
          "  - Bell icon → Opens Daily Reminders",
          "  - Pencil icon → Create new text note",
          "  - Green mic icon → Start voice recording immediately",
          "- Tapping the note area opens that specific note in the app",
        ],
      },
      {
        question: "What can I do from the widgets?",
        answer: [
          "All Quick Actions Available:",
          "1. Open specific notes - Tap any note to view/edit it",
          "2. Start voice recording - Tap the green mic button",
          "3. Create text note - Tap the pencil icon",
          "4. Open Daily Reminders - Tap the bell icon",
          "5. Open app - Tap the logo (Dashboard widget)",
          "6. Scroll through notes - Swipe the notes list (Dashboard widget)",
        ],
      },
      {
        question: "Is this a premium feature?",
        answer: "No! Home Screen Widgets are completely free and available to all users. There are no premium requirements, paywalls, or subscription limitations.",
      },
    ],
  },
  {
    id: "internet-connectivity",
    label: "Internet Connectivity",
    faqs: [
      {
        question: "Do I need internet for voice transcriptions?",
        answer: "Transcriptions can run locally without internet dependency once model is downloaded.",
      },
      {
        question: "Does Notely Voice work offline?",
        answer: "Absolutely! Since all data is stored locally on your device, you can record and access your voice notes without an internet connection.",
      },
    ],
  },
  {
    id: "daily-reminders",
    label: "Daily Reminders",
    faqs: [
      {
        question: "What is the Daily Reminders feature?",
        answer: "Daily Reminders helps users build a consistent voice journaling habit by sending thoughtful, context-specific prompts at scheduled times throughout the day. Users receive rotating AI-curated prompts designed to capture reflections, priorities, and thoughts via voice notes.",
      },
      {
        question: "What types of reminders are available?",
        answer: [
          "The app offers four prompt themes:",
          "",
          "1. Morning Intention (5 rotating prompts)",
          "- Examples: \"What is your #1 priority for today?\", \"What would make today feel like a true success?\"",
          "",
          "2. Afternoon Check-in (4 rotating prompts)",
          "- Examples: \"How are you tracking toward your goals today?\", \"What needs adjusting before the day ends?\"",
          "",
          "3. Evening Reflection (5 rotating prompts)",
          "- Examples: \"What gave you energy today, and what drained it?\", \"What are you grateful for this evening?\"",
          "",
          "4. Custom/Reflection - Add unlimited number of reminders",
          "- Examples: \"Take a quick moment to record your thoughts\", \"What is on your mind right now?\"",
        ],
      },
      {
        question: "How do I set up Daily Reminders?",
        answer: [
          "1. Navigate to Settings → Daily Reminders",
          "2. Enable one or more reminder slots using the toggle switch",
          "3. Set your preferred time for each reminder",
          "4. Grant notification permissions when prompted",
          "5. On Android, allow \"Exact Alarm\" permission for precise timing",
          "",
          "The app includes two default slots (Morning at 8:00 AM and Evening at 9:00 PM), but you can add unlimited custom reminders.",
        ],
      },
    ],
  },
  {
    id: "sunday-weekly-review",
    label: "Sunday Weekly Review",
    faqs: [
      {
        question: "What is the Sunday Weekly Review?",
        answer: [
          "The Sunday Weekly Review is a special premium feature that:",
          "- Sends a notification every Sunday at 7:00 PM",
          "- Provides an AI-generated synthesis of your week's voice notes",
          "- Creates an \"editorial AI story\" of your weekly reflections",
          "- Must be enabled separately from daily reminders",
        ],
      },
      {
        question: "How do notifications work?",
        answer: [
          "- Each reminder displays a randomly selected prompt from its theme category",
          "- Notifications appear with sound and vibration (configurable via system settings)",
          "- Tapping a notification opens the app to start recording a voice note",
          "- Reminders automatically repeat daily at the scheduled time",
        ],
      },
    ],
  },
];
