"use client";

import { useState } from "react";
import ReactMarkdown from "react-markdown";
import { ChevronDown } from "lucide-react";

const whatsNewMD = `# What's New

## Version 1.5.3 - Latest

### What is new on NotelyVoice?

- **Delete multiple notes at once** - Clean up your notes library faster by selecting and deleting several voice notes at the same time

---

## Version 1.5.2

### What is new on NotelyVoice?

- **App improvements** - Behind-the-scenes updates to keep your app running smoothly

---

## Version 1.5.1

### What is new on NotelyVoice?

- **Fixed duplicate recordings** - Solved an issue where some recordings were being saved twice
- **Improved welcome screens** - Refreshed design when you first set up the app

---

## Version 1.5.0

### What is new on NotelyVoice?

- **Automatic saving** - Your notes now save automatically while you work, so you never lose your thoughts (available on iPhone and Android)
- **Better reliability** - Various improvements to make your experience smoother

---

## Version 1.4.9

### What is new on NotelyVoice?

- **Instant text conversion** - Your voice recordings turn into written text as soon as you finish recording
- **Cleaner transcriptions** - Better text processing makes your transcriptions easier to read
- **Summary progress updates** - Now you can see how far along your AI summary is as it's being created
- **Improved text quality on Android** - Enhanced text processing for more accurate results
- **Cleaner account screen** - Removed unnecessary messages for a simpler experience
- **Better feedback** - More helpful messages when creating transcriptions and summaries

---

## Version 1.4.8

### What is new on NotelyVoice?

- **iPhone background recording fixed** - You can now record voice notes while using other apps on your iPhone without any issues

---

## Version 1.4.7

### What is new on NotelyVoice?

- **Subscription improvements** - Fixed issues with checking your subscription status

---

## Version 1.4.6

### What is new on NotelyVoice?

- **Choose your account type** - Select the account type that's right for you during setup
- **Recordings always saved** - Fixed an issue to make sure your recordings are never lost, even if you go back during recording
- **Summary status** - See at a glance whether your summaries are ready or still being created
- **Smoother subscription flow on iPhone** - Better experience when managing your subscription
- **App improvements** - Various updates to make the app work better

---

## Version 1.4.5

### What is new on NotelyVoice?

- **Performance improvements** - General updates to keep your app running smoothly

---

## Version 1.4.4

### What is new on NotelyVoice?

- **Bug fixes and improvements** - Various updates to enhance your experience

---

## Version 1.4.3

### What is new on NotelyVoice?

- **Better quality summaries** - Improved AI summaries that are clearer and more useful
- **AI summaries on iPhone** - iPhone users can now get AI-generated summaries of their notes
- **Fixed Android issues** - Resolved text processing problems on Android devices
- **Better word count display** - Improved how we show the number of words in your notes
- **Cleaner experience** - Removed unnecessary pop-up messages
- **Helpful error messages** - Better explanations when something goes wrong with summaries

---

## Version 1.4.2

### What is new on NotelyVoice?

- **Faster setup** - Streamlined the welcome experience so you can start using the app quicker
- **Simplified onboarding** - Removed extra steps to get you started faster

---

## Version 1.4.1

### What is new on NotelyVoice?

- **Better welcome screens** - Improved design and layout when you first open the app
- **Easier free trial** - New button makes it simple to start your free trial
- **Swipe through screens** - Swipe left and right to navigate welcome screens
- **More languages** - Added support for Turkish, Ukrainian, Urdu, Vietnamese, and Chinese

---

## Version 1.4.0

### What is new on NotelyVoice?

- **More languages** - Added Polish, Portuguese, Russian, Swedish, Thai, Tagalog, and Ukrainian
- **Fixed login issues** - Resolved problems some users had signing in
- **Improved summaries** - Better limits and formatting for AI-generated summaries
- **Focused summaries** - Summaries now show only the most important parts: key points, action items, and main summary
- **Enhanced transcription and AI** - Improved accuracy and reliability
- **View text while summarizing** - You can now see your transcription while the summary is being created

---

## Version 1.3.6

### What is new on NotelyVoice?

- **Updated terms for iPhone** - Added terms of use for iPhone users
- **Clear cloud feature information** - Better explanations about cloud-based features
- **Easy subscription management** - Convenient access to manage your subscription
- **Better Chinese support** - Improved experience for Simplified Chinese users
- **Fixed iPhone recording issues** - Resolved problems with saving recordings on iPhone
- **Updated app description** - New tagline that better describes the app

---

## Version 1.3.4

### What is new on NotelyVoice?

- **Brand new interface** - Completely redesigned user experience for better usability
- **Cloud Transcription** - Enhanced cloud-based transcription for improved accuracy
- **Cloud Summarization for 100+ languages** - Get summaries in over 100 languages
- **On-device background transcription** - Transcribe audio even when the app is in the background
- **On-device Summarization for english** - Fast, private summarization without internet connection
- **Import Notes** - Easily import your existing notes into Notely Voice
- **100+ Added Transcription languages** - Support for over 100 languages for transcription
- **Bluetooth mic feature** - Connect and use Bluetooth microphones for recording

`;

const WhatsNewContent = () => {
  const [activeSection, setActiveSection] = useState(0);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const sections = [
    { id: "1", title: "Version 1.5.3" },
    { id: "2", title: "Version 1.5.2" },
    { id: "3", title: "Version 1.5.1" },
    { id: "4", title: "Version 1.5.0" },
    { id: "5", title: "Version 1.4.9" },
    { id: "6", title: "Version 1.4.8" },
    { id: "7", title: "Version 1.4.7" },
    { id: "8", title: "Version 1.4.6" },
    { id: "9", title: "Version 1.4.5" },
    { id: "10", title: "Version 1.4.4" },
    { id: "11", title: "Version 1.4.3" },
    { id: "12", title: "Version 1.4.2" },
    { id: "13", title: "Version 1.4.1" },
    { id: "14", title: "Version 1.4.0" },
    { id: "15", title: "Version 1.3.6" },
    { id: "16", title: "Version 1.3.4" },
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
                  h2: ({ node, children }: any) => {
                    const childrenStr = String(children);
                    const versionMatch = childrenStr.match(/Version ([\d.]+)/);

                    // Map version numbers to section IDs
                    const versionToId: Record<string, string> = {
                      '1.5.3': '1',
                      '1.5.2': '2',
                      '1.5.1': '3',
                      '1.5.0': '4',
                      '1.4.9': '5',
                      '1.4.8': '6',
                      '1.4.7': '7',
                      '1.4.6': '8',
                      '1.4.5': '9',
                      '1.4.4': '10',
                      '1.4.3': '11',
                      '1.4.2': '12',
                      '1.4.1': '13',
                      '1.4.0': '14',
                      '1.3.6': '15',
                      '1.3.4': '16',
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

export default WhatsNewContent;
