"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { icons } from "@/lib";

// Feature icon mapping
const featureIcons: Record<string, any> = {
  interface: icons.notely_voice_icon_white,
  background: icons.microphone_rounded,
  lock: icons.check_filled_white,
  ondevice: icons.microphone_blue,
  import: icons.copy,
  languages: icons.language,
  bluetooth: icons.voice_blue,
};

const androidFeatures = [
  {
    title: "On-device background transcription",
    description: "Transcribe audio even when the app is in the background",
    icon: featureIcons.background,
  },
  {
    title: "Brand new interface",
    description: "Completely redesigned user experience for better usability",
    icon: featureIcons.interface,
  },
  {
    title: "Lock notes feature",
    description: "Secure your private notes with password protection",
    icon: featureIcons.lock,
  },
  {
    title: "On-device Summarization for english",
    description: "Fast, private summarization without internet connection",
    icon: featureIcons.ondevice,
  },
  {
    title: "Import Notes",
    description: "Easily import your existing notes into Notely Voice",
    icon: featureIcons.import,
  },
  {
    title: "100+ Added Transcription languages",
    description: "Support for over 100 languages for transcription",
    icon: featureIcons.languages,
  },
  {
    title: "Bluetooth mic feature",
    description: "Connect and use Bluetooth microphones for recording",
    icon: featureIcons.bluetooth,
  },
];

const iosFeatures = [
  {
    title: "On-device background transcription",
    description: "Transcribe audio even when the app is in the background",
    icon: featureIcons.background,
  },
  {
    title: "Brand new interface",
    description: "Completely redesigned user experience for better usability",
    icon: featureIcons.interface,
  },
  {
    title: "Lock notes feature",
    description: "Secure your private notes with password protection",
    icon: featureIcons.lock,
  },
  {
    title: "Import Notes",
    description: "Easily import your existing notes into Notely Voice",
    icon: featureIcons.import,
  },
  {
    title: "100+ Added Transcription languages",
    description: "Support for over 100 languages for transcription",
    icon: featureIcons.languages,
  },
  {
    title: "Bluetooth mic feature",
    description: "Connect and use Bluetooth microphones for recording",
    icon: featureIcons.bluetooth,
  },
];

const MoreInfoContent = () => {
  const [activeSection, setActiveSection] = useState(0);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const sections = [
    { id: "android", title: "Android Features", icon: icons.android },
    { id: "ios", title: "iOS Features", icon: icons.apple_white },
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
    <div className="bg-black px-4 sm:px-[36px] pb-10 sm:pb-16">
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
              <div className="absolute top-full mt-2 left-0 right-0 bg-white border-2 border-white rounded-lg overflow-hidden z-50 shadow-lg">
                {sections.map((section, index) => (
                  <button
                    key={section.id}
                    onClick={() => handleSectionClick(index)}
                    className={`w-full px-4 sm:px-5 py-2 sm:py-3 text-left font-bold text-sm sm:text-base transition-all duration-300 flex items-center gap-3 ${
                      activeSection === index
                        ? "bg-black text-white"
                        : "text-black hover:bg-gray-200"
                    } ${index !== sections.length - 1 ? "border-b border-gray-300" : ""}`}
                  >
                    <Image src={section.icon} alt={section.title} width={20} height={20} />
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
                  className={`w-full text-left px-4 py-3 rounded-lg font-medium transition-all duration-200 text-xs sm:text-sm lg:text-xs xl:text-base flex items-center gap-3 ${
                    activeSection === index
                      ? "bg-[#F0FEFF] text-black"
                      : "text-[#F0FEFF] hover:bg-[#F0FEFF]/10"
                  }`}
                >
                  <Image src={section.icon} alt={section.title} width={24} height={24} />
                  {section.title}
                </button>
              ))}
            </div>
          </div>

          {/* Right Content Area */}
          <div className="lg:col-span-3">
            {/* Android Features */}
            <div id="section-android" className="mb-12">
              <div className="flex items-center gap-4 mb-6">
                <Image src={icons.android} alt="Android" width={40} height={40} />
                <h2 className="text-2xl md:text-3xl xl:text-4xl font-bold text-white">
                  Android Features
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                {androidFeatures.map((feature, index) => (
                  <div
                    key={index}
                    className="bg-[#1a1a1a] rounded-2xl p-6 hover:bg-[#222222] transition-all duration-300 border border-gray-800 hover:border-[#F0FEFF]/30"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-[#F0FEFF]/10 rounded-xl flex items-center justify-center">
                        <Image
                          src={feature.icon}
                          alt={feature.title}
                          width={24}
                          height={24}
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-[#F0FEFF] font-bold text-base sm:text-lg mb-2">
                          {feature.title}
                        </h3>
                        <p className="text-gray-400 text-sm sm:text-base">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* iOS Features */}
            <div id="section-ios">
              <div className="flex items-center gap-4 mb-6">
                <Image src={icons.apple_white} alt="iOS" width={40} height={40} />
                <h2 className="text-2xl md:text-3xl xl:text-4xl font-bold text-white">
                  iOS Features
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                {iosFeatures.map((feature, index) => (
                  <div
                    key={index}
                    className="bg-[#1a1a1a] rounded-2xl p-6 hover:bg-[#222222] transition-all duration-300 border border-gray-800 hover:border-[#F0FEFF]/30"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-[#F0FEFF]/10 rounded-xl flex items-center justify-center">
                        <Image
                          src={feature.icon}
                          alt={feature.title}
                          width={24}
                          height={24}
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-[#F0FEFF] font-bold text-base sm:text-lg mb-2">
                          {feature.title}
                        </h3>
                        <p className="text-gray-400 text-sm sm:text-base">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Download CTA */}
            <div className="mt-12 bg-gradient-to-r from-[#F0FEFF]/10 to-transparent rounded-2xl p-8 border border-[#F0FEFF]/20">
              <h3 className="text-2xl font-bold text-white mb-4">
                Ready to experience Notely Voice?
              </h3>
              <p className="text-gray-300 mb-6">
                Download now and start transcribing with the power of AI
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://play.google.com/store/apps/details?id=com.notelyvoice"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 bg-white hover:bg-gray-100 text-black font-bold py-3 px-6 rounded-full transition-all duration-300"
                >
                  <Image src={icons.playstore_black} alt="Play Store" width={20} height={20} />
                  <span>Play Store</span>
                </a>
                <a
                  href="https://apps.apple.com/app/notely-voice/id6738048309"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 bg-white hover:bg-gray-100 text-black font-bold py-3 px-6 rounded-full transition-all duration-300"
                >
                  <Image src={icons.apple_black} alt="App Store" width={20} height={20} />
                  <span>App Store</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreInfoContent;
