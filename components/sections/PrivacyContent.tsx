"use client";

import { useState } from "react";
import ReactMarkdown from "react-markdown";
import { ChevronDown } from "lucide-react";

const privacyPolicyMD = `# Privacy Policy

## 1. What Information We Collect

### Account Information
- Name, email address, username, and password
- Payment information (securely processed by third-party providers like Stripe or PayPal—we don't store credit card numbers)
- Profile preferences and settings

### Audio & Transcription Data
- Voice recordings when you use transcription features
- Audio files you upload (MP3, WAV, M4A, MP4, etc.)
- Text transcriptions and notes you create
- Voice notes you choose to save

**Important:** Your voice recordings contain biometric information under certain privacy laws. We handle this data with strict security measures.

### Usage Information
- Device type, operating system, unique device identifiers
- IP address, browser type
- Features you use and how often
- App performance data and error logs

### Cookies
We use cookies for authentication, preferences, and analytics. You can control cookies in your browser settings.

## 2. How We Use Your Information

We use your data to:
- ✓ **Provide Services:** Convert voice to text, store and sync your notes
- ✓ **Improve the App:** Enhance transcription accuracy and develop new features
- ✓ **Customer Support:** Respond to your questions and fix technical issues
- ✓ **Communication:** Send service updates and occasional promotional emails (you can opt out)
- ✓ **Security:** Prevent fraud, abuse, and protect user safety
- ✓ **Legal Compliance:** Meet legal obligations and enforce our Terms of Service

## 3. Your Audio is Private

- No humans listen to your recordings. All transcription is automated using AI.
- Audio recordings are encrypted during transmission and storage (AES-256 encryption)
- Temporary audio is automatically deleted within 7 days after transcription (unless you save it as a voice note)
- We never sell your data to third parties
- You can delete any audio file or transcription at any time
- We use third-party speech recognition services (Google Cloud, Microsoft Azure) under strict data protection agreements. These providers process your audio solely for transcription and do not use it for their own purposes.

## 4. How We Share Your Information

We do not sell your personal information. We only share data in these limited situations:

### Service Providers
We work with trusted companies that help us operate:
- Cloud hosting (AWS, Google Cloud)
- Speech recognition (Google, Microsoft)
- Payment processing (Stripe, PayPal)
- Analytics (Google Analytics)

These providers are contractually required to protect your data.

### Legal Requirements
We may disclose information if required by law, court order, subpoena, or to protect against fraud or illegal activity.

### Business Transfers
If our company is acquired or merged, your information may transfer to the new owner under this same Privacy Policy.

### With Your Consent
We share data when you explicitly direct us to (like sharing a note with someone).

## 5. Data Retention

- **Account data:** Kept while your account is active
- **Audio files:** Deleted within 7 days unless saved as voice notes
- **Transcriptions:** Kept until you delete them
- **Usage data:** Retained up to 2 years for analytics
- **After account deletion:** All data permanently deleted within 90 days (except where legally required)

## 6. Your Privacy Rights

You have the right to:
- ✓ Access your personal data
- ✓ Download all your transcriptions and notes
- ✓ Correct inaccurate information
- ✓ Delete your data or entire account
- ✓ Opt-out of marketing emails
- ✓ Object to certain data processing

To exercise these rights: Go to Account Settings or email privacy@notelyvoice.com. We'll respond within 30 days.

### Regional Rights

**For EU/UK Users (GDPR):**
- Right to data portability and restriction of processing
- Right to lodge a complaint with your data protection authority
- Contact our Data Protection Officer: dpo@notelyvoice.com

**For California Users (CCPA/CPRA):**
- Right to know what data we collect and how we use it
- Right to request deletion
- Right to opt-out of data sales (we don't sell your data)
- Right to non-discrimination for exercising your rights

**Other Regions:** If you're in Australia, Canada, Brazil, or other jurisdictions with privacy laws, contact us for information about your specific rights.

## 7. Data Security

We protect your information with:
- **Encryption:** TLS/SSL for data in transit, AES-256 for stored data
- **Secure servers:** SOC 2 certified data centers
- **Access controls:** Multi-factor authentication and role-based access
- **24/7 monitoring:** Continuous security monitoring and threat detection

While we use industry-standard security, no system is 100% secure. If a data breach occurs, we'll notify you within 72 hours as required by law.

## 8. Children's Privacy

Notely Voice is not intended for children under 13 (or 16 in the EU). We don't knowingly collect information from children. If you believe a child has used our app, contact us immediately at privacy@notelyvoice.com and we'll delete their data.

## 9. International Data Transfers

Your information may be transferred to and processed in countries outside your own. We ensure these transfers comply with data protection laws using:
- Standard Contractual Clauses (SCCs)
- Adequacy decisions
- Your explicit consent where required

## 10. Third-Party Links

Our app may link to third-party websites. We're not responsible for their privacy practices. Please review their privacy policies before sharing information.

## 11. Changes to This Policy

We may update this Privacy Policy occasionally. We'll notify you of significant changes via:
- Email notification
- In-app notice
- Website announcement

Continued use of the app after changes means you accept the updated policy.

## 12. Contact Us

Questions or concerns? We're here to help.

- **General Inquiries:** privacy@notelyvoice.com
- **Customer Support:** support@notelyvoice.com
- **Data Protection Officer (GDPR):** dpo@notelyvoice.com
- **Mailing Address:** [notelyvoice]

### Legal Notices

- **California "Shine the Light" Law:** We don't share personal information with third parties for their direct marketing.
- **Nevada Privacy Rights:** We don't sell personal information as defined under Nevada law.
- **Do Not Sell My Personal Information:** We do not sell your data. Period.

By using Notely Voice you acknowledge that you've read and understood this Privacy Policy.
`;

const PrivacyContent = () => {
  const [activeSection, setActiveSection] = useState(0);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const sections = [
    { id: "1", title: "1. What Information We Collect" },
    { id: "2", title: "2. How We Use Your Information" },
    { id: "3", title: "3. Your Audio is Private" },
    { id: "4", title: "4. How We Share Your Information" },
    { id: "5", title: "5. Data Retention" },
    { id: "6", title: "6. Your Privacy Rights" },
    { id: "7", title: "7. Data Security" },
    { id: "8", title: "8. Children's Privacy" },
    { id: "9", title: "9. International Data Transfers" },
    { id: "10", title: "10. Third-Party Links" },
    { id: "11", title: "11. Changes to This Policy" },
    { id: "12", title: "12. Contact Us" },
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
                  h2: ({ node, children }: any) => (
                    <h2 id={`section-${String(children).charAt(0)}`} className="text-xl md:text-2xl xl:text-3xl font-bold mt-8 sm:mt-10 mb-4 text-white">
                      {children}
                    </h2>
                  ),
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

export default PrivacyContent;