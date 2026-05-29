"use client";

import { useState } from "react";
import ReactMarkdown from "react-markdown";
import { ChevronDown } from "lucide-react";

const whatsNewMD = `# What's New

## Version 1.0.0 - Launch

### Introducing Notely Talk

We're excited to launch Notely Talk, your intelligent AI voice keyboard that makes dictation effortless across all your favorite apps!

**Key Features:**

- **Universal Dictation** - Use your voice to type in any app - messages, notes, emails, social media, and more
- **Real-Time Transcription** - Powered by OpenAI's advanced AI, your speech is converted to text instantly with exceptional accuracy
- **Smart Keyboard Integration** - Works seamlessly as a keyboard replacement, appearing wherever you need to type
- **Privacy-First Design** - We don't store any of your voice data or transcriptions on our servers
- **Fast and Accurate** - Get your thoughts into text quickly with industry-leading speech recognition
- **Easy to Use** - Simply tap the microphone button and start speaking - it's that simple
- **Multi-Language Support** - Speak naturally in your preferred language
- **Punctuation Support** - Say "comma", "period", "question mark" and more for proper punctuation
- **Editing Tools** - Easily edit and refine your dictated text before sending

**Perfect For:**

- Quick text messages while on the go
- Writing long emails hands-free
- Taking notes during meetings
- Social media posts
- Accessibility needs
- Anyone who prefers speaking to typing

Start experiencing the future of mobile input with Notely Talk - where your voice becomes text effortlessly!

`;

const WhatsNewTalkContent = () => {
  const [activeSection, setActiveSection] = useState(0);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const sections = [
    { id: "1", title: "Version 1.0.0" },
  ];

  const handleSectionClick = (index: number) => {
    setActiveSection(index);
    setDropdownOpen(false);
    const sectionElement = document.getElementById(`section-${sections[index].id}`);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const currentSectionLabel = sections[activeSection].title;

  return (
    <div className="bg-black px-4 sm:px-[36px]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-6 xl:gap-12">
          {/* Dropdown for md: and below */}
          <div className="lg:hidden relative w-full mb-6">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="w-full px-4 sm:px-5 py-2 sm:py-3 rounded-lg font-bold text-sm sm:text-base bg-white text-black border-2 border-white flex items-center justify-between gap-3 hover:opacity-90 transition-opacity"
            >
              {currentSectionLabel}
              <ChevronDown
                className={`w-5 h-5 transition-transform duration-300 ${
                  dropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {dropdownOpen && (
              <div className="absolute top-full mt-2 left-0 right-0 bg-white border-2 border-white rounded-lg overflow-hidden z-50 shadow-lg max-h-72 overflow-y-auto">
                {sections.map((section, index) => (
                  <button
                    key={section.id}
                    onClick={() => handleSectionClick(index)}
                    className={`w-full px-4 sm:px-5 py-2 sm:py-3 text-left font-bold text-sm sm:text-base transition-all duration-300 ${
                      activeSection === index
                        ? "bg-black text-white"
                        : "text-black hover:bg-gray-200"
                    } ${index !== sections.length - 1 ? "border-b border-gray-300" : ""}`}
                  >
                    {section.title}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Left Sidebar Navigation - Hidden on md: and below */}
          <div className="hidden lg:block lg:col-span-1">
            <div className="sticky top-20 space-y-2">
              {sections.map((section, index) => (
                <button
                  key={section.id}
                  onClick={() => handleSectionClick(index)}
                  className={`w-full text-left px-4 py-2 rounded-lg font-medium transition-all duration-200 text-xs sm:text-sm lg:text-xs xl:text-base ${
                    activeSection === index
                      ? "bg-[#F0FEFF] text-black"
                      : "text-[#F0FEFF] hover:bg-[#F0FEFF]/10"
                  }`}
                >
                  {section.title}
                </button>
              ))}
            </div>
          </div>

          {/* Right Content Area */}
          <div className="lg:col-span-3">
            <div className="text-white prose prose-invert max-w-none">
              <ReactMarkdown
                components={{
                  h2: ({ children }: any) => {
                    const childrenStr = String(children);
                    const versionMatch = childrenStr.match(/Version ([\d.]+)/);

                    // Map version numbers to section IDs
                    const versionToId: Record<string, string> = {
                      '1.0.0': '1',
                    };

                    const version = versionMatch ? versionMatch[1] : '';
                    const id = versionToId[version] || '';

                    return (
                      <h2 id={`section-${id}`} className="text-xl md:text-2xl xl:text-3xl font-bold mt-8 sm:mt-10 mb-4 text-white">
                        {children}
                      </h2>
                    );
                  },
                  h3: ({ children }: any) => (
                    <h3 className="text-base md:text-lg lg:text-xl font-bold mt-6 mb-3 text-[#F0FEFF]">
                      {children}
                    </h3>
                  ),
                  p: ({ children }: any) => (
                    <p className="text-xs sm:text-sm md:text-base xl:text-lg leading-relaxed mb-4 text-gray-100">
                      {children}
                    </p>
                  ),
                  ul: ({ children }: any) => (
                    <ul className="list-none space-y-3 mb-6 text-gray-100">
                      {children}
                    </ul>
                  ),
                  ol: ({ children }: any) => (
                    <ol className="list-decimal list-inside space-y-2 mb-4 text-gray-100">
                      {children}
                    </ol>
                  ),
                  li: ({ children }: any) => (
                    <li className="text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed flex items-start gap-2 before:content-['✓'] before:text-[#F0FEFF] before:font-bold before:text-lg before:flex-shrink-0 before:mt-0.5">
                      <span className="flex-1">{children}</span>
                    </li>
                  ),
                  strong: ({ children }: any) => (
                    <strong className="font-bold text-white">
                      {children}
                    </strong>
                  ),
                }}
              >
                {whatsNewMD}
              </ReactMarkdown>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatsNewTalkContent;
