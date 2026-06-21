"use client";

import type { Metadata } from "next";
import { icons } from "@/lib";
import Button from "@/components/ui/Button";
import { useRouter } from "next/navigation";

export default function OurApps() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-black py-20 px-4 sm:px-6 xl:px-9">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="font-varien text-[#F2FFFF] text-[48px] sm:text-[64px] lg:text-[80px] leading-[100%] tracking-[-3%] font-normal mb-6">
            Our <span className="text-[#3E45FB]">Apps</span>
          </h1>
          <p className="font-medium text-xl sm:text-2xl lg:text-3xl text-[#F2FFFF] max-w-3xl mx-auto">
            Discover our suite of AI-powered transcription tools
          </p>
        </div>

        {/* Two App Sections Side by Side */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* NotelyVoice Section */}
          <div className="bg-white rounded-[40px] p-8 lg:p-12 flex flex-col">
            <div className="mb-8">
              <h2 className="font-varien text-black text-[40px] lg:text-[48px] leading-[100%] tracking-[-3%] mb-6">
                Notely Voice
              </h2>
              <p className="font-medium text-lg lg:text-xl text-gray-700 mb-6">
                Transform your voice into text instantly with 100% private, on-device AI transcription.
                Perfect for students, professionals, and accessibility needs.
              </p>
              <ul className="space-y-3 text-gray-600 mb-8">
                <li className="flex items-start">
                  <span className="text-[#3E45FB] mr-2">✓</span>
                  <span>100% private, on-device transcription</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#3E45FB] mr-2">✓</span>
                  <span>No internet required</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#3E45FB] mr-2">✓</span>
                  <span>Support for 100+ languages</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#3E45FB] mr-2">✓</span>
                  <span>Rich text editing features</span>
                </li>
              </ul>
            </div>

            {/* Download Buttons for NotelyVoice */}
            <div className="mt-auto flex flex-col sm:flex-row gap-4">
              <Button
                storeIcon={icons.Playstore}
                downloadCta="Get It On"
                downloadStore="Google Play"
                isWhite
                isDownload
                className="w-full sm:w-fit"
                onClick={() =>
                  router.push(
                    "https://play.google.com/store/apps/details?id=com.module.notelycompose.android"
                  )
                }
              />
              <Button
                storeIcon={icons.apple}
                downloadCta="Download on the"
                downloadStore="App Store"
                isWhite
                isDownload
                className="w-full sm:w-fit"
                onClick={() =>
                  router.push(
                    "https://apps.apple.com/us/app/notely-voice-ai-voice-to-text/id6745835691"
                  )
                }
              />
            </div>
          </div>

          {/* NotelyTalk Section */}
          <div className="bg-white rounded-[40px] p-8 lg:p-12 flex flex-col">
            <div className="mb-8">
              <h2 className="font-varien text-black text-[40px] lg:text-[48px] leading-[100%] tracking-[-3%] mb-6">
                Notely Talk
              </h2>
              <p className="font-medium text-lg lg:text-xl text-gray-700 mb-6">
                Advanced voice dictation powered by AI. Dictate naturally and watch your words
                transform into perfectly formatted text in real-time.
              </p>
              <ul className="space-y-3 text-gray-600 mb-8">
                <li className="flex items-start">
                  <span className="text-[#3E45FB] mr-2">✓</span>
                  <span>Real-time voice dictation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#3E45FB] mr-2">✓</span>
                  <span>AI-powered accuracy</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#3E45FB] mr-2">✓</span>
                  <span>Smart formatting</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#3E45FB] mr-2">✓</span>
                  <span>Works across all your apps</span>
                </li>
              </ul>
              <div className="bg-[#FFF4E6] border border-[#FFB84D] rounded-2xl p-4 mb-6">
                <p className="text-sm text-gray-700">
                  <span className="font-bold text-[#FF8C00]">Coming Soon to iOS!</span> Currently available on Android.
                </p>
              </div>
            </div>

            {/* Download Button for NotelyTalk (PlayStore only) */}
            <div className="mt-auto flex flex-col sm:flex-row gap-4">
              <Button
                storeIcon={icons.Playstore}
                downloadCta="Get It On"
                downloadStore="Google Play"
                isWhite
                isDownload
                className="w-full sm:w-fit"
                onClick={() =>
                  router.push(
                    "https://play.google.com/store/apps/details?id=com.notelytalk.dictation"
                  )
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
