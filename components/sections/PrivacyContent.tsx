"use client";

import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { ChevronDown } from "lucide-react";

const privacyPolicyMD = `# Privacy Policy

## 1. What Information We Collect

### Account Information
- Name, email address, username, and password
- Your voice recordings, audio files, transcriptions, and notes are stored locally on your device. We do not store your audio or transcription data on external servers. Account and payment information is handled securely through Apple Pay and Google Pay.
- Profile preferences and settings

### Audio & Transcription Data
- Voice recordings when you use transcription features
- Audio files you upload (MP3, WAV, M4A, MP4, etc.)
- Text transcriptions and notes you create
- Voice notes you choose to save

**Important:** All data collected by the Application is stored locally on your device's database. We do not save any information on external servers.

### Usage Information
- App performance data and error logs

### Cookies
The Application does not use cookies or similar tracking technologies.

## 2. How We Use Your Information

All data collected by the Application is stored locally on your device's database. We do not save any information on external servers. Your notes and recordings remain on your device and are under your control at all times. The AI model files are also stored locally on your device.

## 3. Third Party Services

The Application utilizes the following third-party services that have their own Privacy Policies:

- Google Play Services
- Apple App Store
- OpenAI Whisper (open-source speech recognition model) - operates entirely offline on your device
- **Gemma 3 (Google):** The Application uses Google's Gemma 3B, a generative AI model developed by Google. The model runs entirely locally on your device — no data is sent to Google's servers during use. However, your use of Gemma 3 is subject to the Google Gemma Terms of Use (https://ai.google.dev/gemma/terms). Before the Gemma model is downloaded to your device, you will be presented with these terms and must explicitly accept them. This acceptance is required for every user and is enforced prior to any AI features being accessible.
- **OpenAI:** Cloud mode uses OpenAI's servers to transcribe your audio, delivering faster and more accurate results. Audio is processed by OpenAI and not retained by this app. OpenAI does not use API data to train their models by default.

## 4. Your Audio is Private

All data collected by the Application is stored locally on your device's database. We do not save any information on external servers. Your notes and recordings remain on your device and are under your control at all times. The Whisper AI model files are also stored locally on your device.

## 5. Data Security

Your data is stored on your device until you choose to delete it. The Service Provider does not have access to this data and cannot delete it remotely.

## 6. Children's Privacy

The Application does not address anyone under the age of 13. The Service Provider does not knowingly collect personally identifiable information from children under 13 years of age. If you are a parent or guardian and you are aware that your child has provided personal information, please contact the Service Provider so that necessary actions can be taken.

## 7. Changes to This Policy

We may update this Privacy Policy occasionally. We'll notify you of significant changes via:
- Email notification
- In-app notice
- Website announcement

Continued use of the app after changes means you accept the updated policy.

## 8. Contact Us

Questions or concerns? We're here to help.

- **General Inquiries:** support@notelyvoice.ai

By using Notely Voice you acknowledge that you've read and understood this Privacy Policy.
`;

const PrivacyContent = () => {
  const [activeSection, setActiveSection] = useState(0);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const sections = [
    { id: "1", title: "1. What Information We Collect" },
    { id: "2", title: "2. How We Use Your Information" },
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
                  li: ({ children, node }: any) => {
                    // Extract text content recursively
                    const getTextContent = (child: any): string => {
                      if (typeof child === 'string') return child;
                      if (Array.isArray(child)) return child.map(getTextContent).join('');
                      if (child?.props?.children) return getTextContent(child.props.children);
                      return '';
                    };
                    const content = getTextContent(children);
                    const isGemma = content.includes('Gemma 3 (Google)');
                    const isOpenAI = content.includes('OpenAI:');
                    const anchorId = isGemma ? 'gemma' : isOpenAI ? 'openai' : undefined;
                    return (
                      <li
                        id={anchorId}
                        className="text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed"
                        style={(isGemma || isOpenAI) ? { scrollMarginTop: '130px' } : undefined}
                      >
                        {children}
                      </li>
                    );
                  },
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

export default PrivacyContent;