import CreateNotesTool from "@/components/ui/CreateNotesTool";
import { icons, images } from "@/lib";
import { JSX } from "react";

export const heroCommentsData = [
  {
    comment: `"Notely Voice is a fantastic productivity booster!"`,
    author: "bom blast",
  },
  {
    comment:
      `"I've been using Notely Voice – AI Voice to Text for a few weeks now, and it's truly impressive"`,
    author: "ashik rahim",
  },
  {
    comment: `"I have only tested it and it seems accurate in translation"`,
    author: "Marion Millikan",
  },
];

export const testimonialData = [
  {
    image: images.person1,
    name: "Solomon Femi",
    role: "Business Consultant",
    comment:
      "This app saved me 10+ hours a week. I record all my client meetings and have perfect notes instantly. Game changer for my consulting business.",
  },
  {
    image: images.person2,
    name: "Alex Rodriguez",
    role: "Software Developer",
    comment:
      "Amazing tool for documentation. I can now voice notes while coding and get transcribed text instantly. Productivity has skyrocketed!",
  },
  {
    image: images.person3,
    name: "Priya Sharma",
    role: "Content Creator",
    comment:
      "As a podcaster, this is incredible. Real-time transcription and perfect notes for my episodes. My workflow is 10x faster now.",
  },
  {
    image: images.person4,
    name: "Jordan Williams",
    role: "Student",
    comment:
      "Finally, I can focus on lectures instead of typing. Notely Voice captures everything accurately and I can study more effectively.",
  },
  {
    image: images.person5,
    name: "Emma Thompson",
    role: "Journalist",
    comment:
      "This has revolutionized my interview process. Perfect transcriptions instantly, and I can verify quotes without relistening to hours of tape.",
  },
];

export const socialsRowData = [
  icons.telegram,
  icons.slack,
  icons.messages,
  icons.whatsapp,
  icons.telegram,
  icons.slack,
  icons.messages,
  icons.whatsapp,
  icons.telegram,
  icons.slack,
  icons.messages,
  icons.whatsapp,
  icons.telegram,
  icons.slack,
  icons.messages,
  icons.whatsapp,
  icons.telegram,
  icons.slack,
  icons.messages,
  icons.whatsapp,
  icons.telegram,
  icons.slack,
  icons.messages,
  icons.whatsapp,
  icons.telegram,
  icons.slack,
  icons.messages,
  icons.whatsapp,
  icons.telegram,
  icons.slack,
  icons.messages,
  icons.whatsapp,
  icons.telegram,
  icons.slack,
  icons.messages,
  icons.whatsapp,
  icons.telegram,
  icons.slack,
  icons.messages,
  icons.whatsapp,
];

export const toolkitButtons: { btnText: string; showTool?: boolean }[] = [
  { btnText: "create notes", showTool: true },
  { btnText: "rich text editing", showTool: false },
  { btnText: "transcribe audio", showTool: false },
  { btnText: "Transcription Languages", showTool: false },
  { btnText: "Audio Recorder & Share", showTool: false },
  { btnText: "Custom theme", showTool: false },
];


export const useCaseButtons: { btnText: string; showTool?: boolean }[] = [
  { btnText: "Students", showTool: true },
  { btnText: "Creators & Podcasters", showTool: false },
  { btnText: "Teams & Business Meetings", showTool: false },
  { btnText: "Accessibility", showTool: false },
  { btnText: "Journalists", showTool: false },
];

