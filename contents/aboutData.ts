export interface AboutDetailsCard {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export const AboutDetailsData: AboutDetailsCard[] = [
  {
    id: "mission",
    icon: "arrow_target",
    title: "Our Mission",
    description: "To make note-taking effortless and accessible for everyone, empowering people to focus on what matters most, their ideas, not the mechanics of writing them down.",
  },
  {
    id: "why",
    icon: "big_question",
    title: "Why We Exist",
    description: "Every day, millions of people lose great ideas because they couldn't write them down fast enough. Students struggle to keep up in lectures. Professionals miss key points in meetings. Creative minds lose inspiration in the time it takes to find a pen. We built Notely Voice to change that.",
  },
];


export interface StandItem {
  id: string;
  title: string;
  description: string;
}

export const standData: StandItem[] = [
  {
    id: "accessibility",
    title: "Accessibility First",
    description: "Everyone deserves tools that work for them, regardless of typing speed, physical ability, or language.",
  },
  {
    id: "privacy",
    title: "Privacy Always",
    description: "Your words are yours. Notes remain on your device, and your notes are completely private.",
  },
  {
    id: "innovation",
    title: "Innovation Daily",
    description: "We're constantly improving our AI to understand you better, every accent, every language, every unique voice.",
  },
];

export interface CTAContent {
  joinUsHeading: string;
  joinUsDescription: string;
  joinUsSubheading: string;
  getInTouchHeading: string;
  getInTouchDescription: string;
  getInTouchEmail: string;
}

export const ctaData: CTAContent = {
  joinUsHeading: "JOIN US",
  joinUsDescription: "Whether you're a student, professional, creative, or just someone with a lot on their mind. Notely Voice is here to help you capture it all.",
  joinUsSubheading: "Ready to give your voice a platform?",
  getInTouchHeading: "GET IN TOUCH",
  getInTouchDescription: "Questions? Ideas? Just want to say hi?",
  getInTouchEmail: "support@notelyvoice.ai",
};
