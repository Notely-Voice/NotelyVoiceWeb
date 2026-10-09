"use client";

import { type ComponentType, useEffect, useRef, useState } from "react";
import {
  AskVisual,
  CreateVisual,
  JournalsVisual,
  KeyboardVisual,
  MeetingsVisual,
} from "./FeatureVisuals";

interface Feature {
  id: string;
  tab: string;
  title: string;
  text: string;
  Visual: ComponentType;
}

const FEATURES: Feature[] = [
  {
    id: "meetings",
    tab: "Meetings",
    title: "Private meeting transcriptions",
    text: "Secure meeting transcriptions & summaries using local models with an optional cloud option when extra processing power is needed.",
    Visual: MeetingsVisual,
  },
  {
    id: "voice-keyboard",
    tab: "Voice Keyboard",
    title: "Hands-free typing on any app.",
    text: "Dictate naturally into WhatsApp, Gmail, Telegram, and more to turn spoken words into text across any application.",
    Visual: KeyboardVisual,
  },
  {
    id: "ask",
    tab: "Ask",
    title: "AI queries using personal context.",
    text: "Connect via MCP to let ChatGPT, Claude, and Gemini query your app notes and transcripts for instant answers about your life.",
    Visual: AskVisual,
  },
  {
    id: "create",
    tab: "Create",
    title: "Bring your ideas to life",
    text: "Generate documents, decks, and messages directly inside your connected productivity apps through natural prompts.",
    Visual: CreateVisual,
  },
  {
    id: "journals",
    tab: "Journals",
    title: "Daily personal synthesis",
    text: "Record your personal journals daily with the option to keep them completely private or query them using your favorite AI apps.",
    Visual: JournalsVisual,
  },
];

const FeatureShowcase = () => {
  const [activeId, setActiveId] = useState(FEATURES[0].id);
  const tabRefs = useRef<Record<string, HTMLAnchorElement | null>>({});

  // Scroll-spy: the block crossing the middle band of the viewport is active.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveId(entry.target.id.replace("feature-", ""));
        }
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 },
    );
    for (const feature of FEATURES) {
      const el = document.getElementById(`feature-${feature.id}`);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);

  // Center a tab inside the horizontal (mobile) tab bar. Only the bar scrolls
  // horizontally, so the page itself is never moved by this.
  const centerTab = (id: string) => {
    const tab = tabRefs.current[id];
    const bar = tab?.closest("ul");
    if (!tab || !bar || bar.scrollWidth <= bar.clientWidth) return;
    const barRect = bar.getBoundingClientRect();
    const tabRect = tab.getBoundingClientRect();
    const offset =
      tabRect.left - barRect.left + tabRect.width / 2 - barRect.width / 2;
    bar.scrollTo({ left: bar.scrollLeft + offset, behavior: "smooth" });
  };

  // Keep the active pill centered as the user scrolls through the sections.
  // biome-ignore lint/correctness/useExhaustiveDependencies: centerTab only reads refs
  useEffect(() => {
    centerTab(activeId);
  }, [activeId]);

  return (
    <section
      aria-labelledby="features-heading"
      className="flex w-full justify-center px-3 sm:px-6 lg:px-8"
    >
      <div className="wrapper rounded-[26px] bg-black px-5 py-8 sm:rounded-[36px] sm:px-8 lg:rounded-[40px] lg:px-12 lg:py-16">
        <h2 id="features-heading" className="sr-only">
          What you can do with Notely Voice
        </h2>

        <div className="lg:grid lg:grid-cols-[minmax(190px,250px)_minmax(0,1fr)] lg:gap-10 xl:gap-16">
          {/* Tabs: horizontal & sticky on mobile, vertical & sticky on desktop */}
          <nav
            aria-label="Feature sections"
            className="sticky top-[64px] z-30 -mx-5 mb-8 bg-black/90 px-5 py-6 backdrop-blur sm:-mx-8 sm:px-8 lg:static lg:top-auto lg:mx-0 lg:mb-0 lg:bg-transparent lg:p-0 lg:backdrop-blur-none"
          >
            <ul className="no-scrollbar flex gap-5 overflow-x-auto lg:sticky lg:top-36 lg:flex-col lg:gap-6 lg:overflow-visible">
              {FEATURES.map((feature) => {
                const active = feature.id === activeId;
                return (
                  <li key={feature.id} className="shrink-0">
                    <a
                      ref={(el) => {
                        tabRefs.current[feature.id] = el;
                      }}
                      href={`#feature-${feature.id}`}
                      onClick={() => centerTab(feature.id)}
                      aria-current={active ? "true" : undefined}
                      className={`block whitespace-nowrap font-varien text-lg uppercase tracking-[-0.02em] transition-colors duration-300 sm:text-xl lg:text-[26px] ${
                        active
                          ? "text-white"
                          : "text-[#4a4a4a] hover:text-white/70 focus-visible:text-white/70"
                      }`}
                    >
                      {feature.tab}
                      <span className="mt-2 block h-px w-full bg-white/20 lg:mt-3">
                        <span
                          className={`block h-px bg-white transition-[width] duration-500 ease-out ${
                            active ? "w-full" : "w-0"
                          }`}
                        />
                      </span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Feature blocks */}
          <div className="flex flex-col gap-14 lg:gap-20">
            {FEATURES.map(({ id, title, text, Visual }) => (
              <article
                key={id}
                id={`feature-${id}`}
                className="scroll-mt-32 lg:scroll-mt-36 mx-auto lg:mx-0 sm:w-7/8"
              >
                <h3 className="font-varien text-[26px] uppercase leading-[1.05] tracking-[-0.03em] text-white sm:text-[34px] lg:text-[40px]">
                  {title}
                </h3>
                <p className="mb-6 mt-3 max-w-[560px] text-base font-normal leading-[1.6] text-white sm:text-lg lg:text-xl">
                  {text}
                </p>
                <Visual />
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureShowcase;
