"use client";

import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { ChevronDown } from "lucide-react";

const privacyPolicyMD = `# Privacy Policy

## 1. Information Collection

Notely Talk is designed with your privacy as the top priority. We do not collect, store, or transmit any personal information or user data.

### What We Don't Collect
- No voice recordings or audio data is stored on our servers
- No text transcriptions or dictated content is stored on our servers
- No usage statistics or analytics is stored on our servers
- No device identifiers or location data is stored on our servers
- No cookies or tracking technologies is stored on our servers

**Your privacy is absolute:** Everything you dictate stays on your device and is never transmitted to our servers.

## 2. How the App Works

Notely Talk is an AI Voice Keyboard that operates as a dictation app. When you use the app:

- Your voice is processed in real-time
- Transcription is handled through OpenAI's API. OpenAI does not use API data to train their models by default. For more information, please review OpenAI's privacy policy at https://openai.com/privacy
- No data is stored by Notely Talk servers
- All dictated text goes directly to the app you're using (messages, notes, etc.)

## 3. Third Party Services

The Application utilizes the following third-party service:

- **OpenAI:** Notely Talk uses OpenAI's Whisper API to transcribe your voice to text in real-time. Audio is sent to OpenAI's servers for processing and is not retained by Notely Talk. OpenAI does not use API data to train their models by default. For more information, please review OpenAI's privacy policy at https://openai.com/privacy

## 4. Your Audio is Private

Your voice input is processed by OpenAI's servers for transcription purposes only. Notely Talk does not store, record, or have access to your audio data. The transcription is delivered directly to you and is not retained by our application.

## 5. Data Security

Since we don't collect or store any data, there is no user data to secure on our end. Your dictated text exists only in the applications where you choose to use it (messaging apps, notes apps, etc.).

## 6. Children's Privacy

Notely Talk does not knowingly collect any information from anyone, including children under the age of 13. Since no data is collected, the app can be used by individuals of any age.

## 7. Changes to This Policy

We may update this Privacy Policy occasionally. We'll notify you of significant changes via:
- In-app notice
- Website announcement

Continued use of the app after changes means you accept the updated policy.

## 8. Contact Us

Questions or concerns? We're here to help.

- **General Inquiries:** support@notelyvoice.ai

By using Notely Talk you acknowledge that you've read and understood this Privacy Policy.
`;

const PrivacyTalkContent = () => {
  const [activeSection, setActiveSection] = useState(0);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const sections = [
    { id: "1", title: "1. Information Collection" },
    { id: "2", title: "2. How the App Works" },
    { id: "3", title: "3. Third Party Services" },
    { id: "4", title: "4. Your Audio is Private" },
    { id: "5", title: "5. Data Security" },
    { id: "6", title: "6. Children's Privacy" },
    { id: "7", title: "7. Changes to This Policy" },
    { id: "8", title: "8. Contact Us" },
  ];

  const handleSectionClick = (index: number) => {
    setActiveSection(index);
    setDropdownOpen(false);
    const sectionElement = document.getElementById(`section-${sections[index].id}`);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      }, 300);
    }
  }, []);

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
                  h2: ({ node, children }: any) => {
                    const sectionNum = String(children).match(/^(\d+)/)?.[1] || '';
                    return (
                      <h2 id={`section-${sectionNum}`} className="text-xl md:text-2xl xl:text-3xl font-bold mt-8 sm:mt-10 mb-4 text-white">
                        {children}
                      </h2>
                    );
                  },
                  h3: ({ children }: any) => (
                    <h3 className="text-base md:text-lg lg:text-xl font-bold mt-6 mb-3 text-white">
                      {children}
                    </h3>
                  ),
                  p: ({ children }: any) => (
                    <p className="text-xs sm:text-sm md:text-base xl:text-lg leading-relaxed mb-4 text-gray-100">
                      {children}
                    </p>
                  ),
                  ul: ({ children }: any) => (
                    <ul className="list-disc list-inside space-y-2 mb-4 text-gray-100">
                      {children}
                    </ul>
                  ),
                  ol: ({ children }: any) => (
                    <ol className="list-decimal list-inside space-y-2 mb-4 text-gray-100">
                      {children}
                    </ol>
                  ),
                  li: ({ children }: any) => (
                    <li className="text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed">
                      {children}
                    </li>
                  ),
                  strong: ({ children }: any) => (
                    <strong className="font-bold text-white">
                      {children}
                    </strong>
                  ),
                }}
              >
                {privacyPolicyMD}
              </ReactMarkdown>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyTalkContent;
