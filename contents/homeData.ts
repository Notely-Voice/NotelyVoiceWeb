import CreateNotesTool from "@/components/ui/CreateNotesTool";
import {icons, images} from "@/lib";
import {JSX} from "react";

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
    name: "Dr. Chris Webster",
    role: "Medical Professional",
    comment:
      "Recording issues fixed within days! Support team is incredibly responsive. This app is now essential for my medical practice.",
  },
  {
    image: images.person2,
    name: "Rashesh Kamdar",
    role: "Spiritual Teacher",
    comment:
      "Hindi support for transcribing spiritual teachings is perfect. Large file handling and PDF export make sharing so easy!",
  },
  {
    image: images.person3,
    name: "Somit Biswas",
    role: "Business Consultant",
    comment:
      "Complete privacy with 100% on-device processing. No data leaves my phone. Exactly what I needed for sensitive client work!",
  },
  {
    image: images.person4,
    name: "Afnane Trab",
    role: "Language Educator",
    comment:
      "Auto-detect language feature saves so much time! Seamlessly handles multilingual conversations without manual switching.",
  },
  {
    image: images.person5,
    name: "Nicholas Stockton",
    role: "Content Creator",
    comment:
      "The summarize feature and import functionality are game changers. Updates keep making the app better and better!",
  },
];

export const numberStatsData = [
  {
    number: "~85–95%",
    label: "Transcription Accuracy, varies by audio quality, language & model.",
    isRounded: true,
  },
  {
    number: "100k+",
    label: "Downloads on Google Play",
    isRounded: false,
  },
  {
    number: "10M+",
    label: "Minutes Transcribed",
    isRounded: true,
  },
  {
    number: "100+",
    label: "Languages Supported",
    isRounded: false,
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
  {btnText: "create notes", showTool: true},
  {btnText: "rich text editing", showTool: false},
  {btnText: "transcribe audio", showTool: false},
  {btnText: "Transcription Languages", showTool: false},
  {btnText: "Audio Recorder & Share", showTool: false},
  {btnText: "Custom theme", showTool: false},
];


export const useCaseButtons: { btnText: string; showTool?: boolean }[] = [
  {btnText: "Students", showTool: true},
  {btnText: "Creators & Podcasters", showTool: false},
  {btnText: "Teams & Business Meetings", showTool: false},
  {btnText: "Accessibility", showTool: false},
  {btnText: "Journalists", showTool: false},
];

