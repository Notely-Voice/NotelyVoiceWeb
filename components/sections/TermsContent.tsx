"use client";

import { useState } from "react";
import ReactMarkdown from "react-markdown";
import { ChevronDown } from "lucide-react";

const termsOfServiceMD = `# Terms of Service

## 1. Introduction

This agreement governs the use of Notely Voice, a mobile application created by Notely Voice, Inc. as a complimentary service, provided "AS IS".

By downloading, installing, or operating the Application, you consent to these conditions. If you disagree with any part of these terms, you should not use the Application.

## 2. License to Use

The Service Provider grants you a limited, non-exclusive, non-transferable, revocable license to use the Application for personal, non-commercial purposes only.

This license does not allow you to:
- Transfer or assign the license to others
- Use the Application for commercial purposes without permission
- Modify or create derivative works

## 3. User Responsibilities

By using Notely Voice, you agree to:

- **Protect your device security and stored data:** You are responsible for maintaining the security of your device and any data stored on it
- **Take accountability for all created, recorded, or stored content:** All content you create, record, or store using the Application is your responsibility
- **Comply with applicable legal requirements:** You must comply with all applicable laws and regulations when using the Application
- **Accept consequences from your usage:** You accept all consequences that may arise from your use of the Application

## 4. Prohibited Uses

You are prohibited from using the Application to:

- Engage in any unlawful purposes or activities
- Attempt to reverse engineer, decompile, or disassemble the Application
- Alter, remove, or obscure any proprietary notices or labels on the Application
- Damage, disable, or impair the Application or interfere with any other party's use of the Application

Violation of these prohibited uses may result in immediate termination of your license to use the Application.

## 5. Intellectual Property

The Application and its original content, features, and functionality are owned by Notely Voice, Inc. and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.

You may not:
- Copy, modify, or distribute any part of the Application
- Remove any copyright or proprietary notices from the Application
- Use our trademarks or branding without written permission

## 6. Disclaimer of Warranties

The Application is provided "AS IS" and "AS AVAILABLE" without warranties of any kind, either express or implied.

The Service Provider makes no warranties regarding:
- Uninterrupted or error-free service
- The accuracy, reliability, or completeness of any content
- The results that may be obtained from using the Application
- Freedom from viruses or other harmful components

You use the Application at your own risk.

## 7. Limitation of Liability

To the maximum extent permitted by law, the Service Provider shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses resulting from:

- Your use or inability to use the Application
- Any unauthorized access to or use of our servers and/or any personal information stored therein
- Any interruption or cessation of transmission to or from the Application
- Any bugs, viruses, or other harmful code that may be transmitted to or through the Application

## 8. Data Loss

You are solely responsible for backing up any voice recordings, transcriptions, and notes created using the Application.

The Service Provider assumes no liability for:
- Any loss of data or content
- Corruption of stored data
- Failure to store, transmit, or receive data
- Any costs or expenses associated with data recovery

We strongly recommend maintaining regular backups of all important data.

## 9. Changes to Terms

The Service Provider reserves the right to modify or replace these Terms of Service at any time. Changes will take effect immediately upon posting.

Your continued use of the Application after any changes to these Terms constitutes acceptance of those changes. It is your responsibility to review these Terms periodically.

## 10. Contact Information

If you have any questions or concerns about these Terms of Service, please contact us:

**Email:** support@notelyvoice.ai

---

**Effective Date:** Jan, 2026

**By using Notely Voice, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.**
`;

const TermsContent = () => {
  const [activeSection, setActiveSection] = useState(0);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const sections = [
    { id: "1", title: "1. Introduction" },
    { id: "2", title: "2. License to Use" },
    { id: "3", title: "3. User Responsibilities" },
    { id: "4", title: "4. Prohibited Uses" },
    { id: "5", title: "5. Intellectual Property" },
    { id: "6", title: "6. Disclaimer of Warranties" },
    { id: "7", title: "7. Limitation of Liability" },
    { id: "8", title: "8. Data Loss" },
    { id: "9", title: "9. Changes to Terms" },
    { id: "10", title: "10. Contact Information" },
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
                {termsOfServiceMD}
              </ReactMarkdown>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsContent;
