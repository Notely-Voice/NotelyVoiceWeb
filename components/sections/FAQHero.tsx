"use client";

import { useState } from "react";
import { faqData } from "@/contents/faqData";
import { ChevronDown } from "lucide-react";

const FAQHero = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>("getting-started");
  const [expandedIdx, setExpandedIdx] = useState<number | null>(0);

  const currentCategory = faqData.find((cat) => cat.id === activeCategory);

  return (
    <div className="mt-10 px-4 sm:px-9 flex flex-col justify-center items-center relative">
      {/* Mobile Layout - Visible on sm: and below */}
      <div className="lg:hidden w-full">
        <div className="wrapper bg-[#F0FEFF] py-6 px-4 border-4 border-black rounded-[20px] flex flex-col gap-4 z-20 relative">
          {/* Heading */}
          <h1 className="font-varien text-black text-2xl tracking-[-3%] leading-tight">
            FREQUENTLY ASKED QUESTIONS
          </h1>

          {/* Mobile Category Buttons with Q&A */}
          <div className="flex flex-col gap-3">
            {faqData.map((category) => (
              <div
                key={category.id}
                className={`flex flex-col rounded-2xl pb-3 ${
                  activeCategory === category.id
                    ? "bg-black text-white"
                    : "bg-white border-2 border-black text-black hover:bg-[#F0FEFF]"
                }`}
              >
                {/* Category Button */}
                <button
                  onClick={() => {
                    setActiveCategory(activeCategory === category.id ? null : category.id);
                  }}
                  className={`w-full px-4 py-3 font-bold text-base transition-all duration-300 flex items-center justify-between`}
                >
                  <span>{category.label}</span>
                  <ChevronDown
                    className={`w-5 h-5 transition-transform duration-300 ${
                      activeCategory === category.id ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Q&A Items - Show when category is active */}
                {activeCategory === category.id && (
                  <div className="flex flex-col border-t-2 border-white/20">
                    {category.faqs.map((faq, idx) => (
                      <div
                        key={idx}
                        className={`bg-black overflow-hidden ${
                          idx !== category.faqs.length - 0 ? "border-b border-white/20" : ""
                        }`}
                      >
                        <div className="w-full px-4 py-3">
                          <h3 className="text-sm font-bold text-left text-white mb-2">
                            {faq.question}
                          </h3>

                          {/* Answer - Always visible */}
                          <div className="px-0">
                            {Array.isArray(faq.answer) ? (
                              <ul className="space-y-2 text-xs font-normal text-left text-white">
                                {faq.answer.map((item, itemIdx) => (
                                  <li
                                    key={itemIdx}
                                    className="leading-relaxed flex items-center"
                                  >
                                    {item !== "" && (
                                      <div className="size-2 min-w-2 min-h-2 bg-white rounded-full mr-1.5"></div>
                                    )}
                                    {item.startsWith("•") ? (
                                      <span>{item}</span>
                                    ) : item === "" ? (
                                      <br />
                                    ) : (
                                      <span
                                        className={
                                          item.includes(":")
                                            ? "font-semibold"
                                            : ""
                                        }
                                      >
                                        {item}
                                      </span>
                                    )}
                                  </li>
                                ))}
                              </ul>
                            ) : (
                              <p className="text-xs font-semibold text-left text-white">
                                {faq.answer}
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Desktop Layout - Visible on md: and above */}
      <div className="hidden lg:block w-full wrapper">
        <div className="bg-[#F0FEFF] py-6 sm:py-8 md:py-10 xl:py-16 px-4 sm:px-8 md:px-10 lg:px-12 xl:px-14 border-4 border-black rounded-[20px] sm:rounded-[40px] flex flex-col lg:flex-row justify-center lg:justify-between gap-5 lg:gap-12 z-20 relative">
          {/* Left Side - Heading and Category Buttons */}
          <div className="flex flex-col item-center justify-center lg:justify-start gap-8">
            {/* Heading */}
            <h1 className="font-varien text-black text-2xl sm:text-3xl lg:text-4xl xl:text-5xl tracking-[-3%] leading-tight max-w-115">
              FREQUENTLY ASKED QUESTIONS
            </h1>

            {/* Category Buttons Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full lg:w-fit">
              {faqData.map((category) => (
                <button
                  key={category.id}
                  onClick={() => {
                    setActiveCategory(category.id);
                    setExpandedIdx(0);
                  }}
                  className={`px-3 py-2 sm:px-5 sm:py-3 rounded-full font-bold text-sm lg:text-sm xl:text-base transition-all duration-300 whitespace-nowrap ${
                    activeCategory === category.id
                      ? "bg-black text-white"
                      : "bg-transparent border-2 border-[#3E45FB] text-[#3E45FB] hover:border-black hover:text-black"
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>

          {/* Right Side - FAQ Items */}
          <div className="flex-1 flex flex-col gap-4 mx-auto lg:mx-0 md:max-w-130 lg:max-w-95 xl:max-w-105 w-full">
            {currentCategory?.faqs.map((faq, idx) => (
              <div
                key={idx}
                className={`rounded-xl sm:rounded-2xl border-3 border-black overflow-hidden transition-all duration-300 ${
                  expandedIdx === idx ? "bg-black" : "bg-transparent"
                }`}
              >
                <button
                  onClick={() =>
                    setExpandedIdx(expandedIdx === idx ? null : idx)
                  }
                  className="w-full px-3 sm:px-5 py-2 sm:py-3 flex justify-between items-center hover:opacity-80 transition-opacity duration-300"
                >
                  <h3
                    className={`text-[11px] sm:text-base lg:text-sm xl:text-base font-bold text-left ${
                      expandedIdx === idx ? "text-white" : "text-black"
                    }`}
                  >
                    {faq.question}
                  </h3>
                  <ChevronDown
                    className={`w-6 h-6 flex-shrink-0 transition-transform duration-300 ${
                      expandedIdx === idx
                        ? "text-white rotate-180"
                        : "text-black"
                    }`}
                  />
                </button>

                {/* Answer */}
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    expandedIdx === idx
                      ? "max-h-160 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-3 sm:px-5 pb-3 sm:pb-4">
                    {Array.isArray(faq.answer) ? (
                      <ul
                        className={`space-y-2 text-xs sm:text-base lg:text-sm xl:text-base font-normal text-left ${
                          expandedIdx === idx ? "text-white" : "text-black"
                        }`}
                      >
                        {faq.answer.map((item, itemIdx) => (
                          <li
                            key={itemIdx}
                            className="leading-relaxed flex items-center"
                          >
                            {item !== "" && (
                              <div className="size-2 min-w-2 min-h-2 bg-white rounded-full mr-1.5"></div>
                            )}
                            {item.startsWith("•") ? (
                              <span>{item}</span>
                            ) : item === "" ? (
                              <br />
                            ) : (
                              <span
                                className={
                                  item.includes(":") ? "font-semibold" : ""
                                }
                              >
                                {item}
                              </span>
                            )}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p
                        className={`text-xs sm:text-base lg:text-sm xl:text-base font-semibold text-left ${
                          expandedIdx === idx ? "text-white" : "text-black"
                        }`}
                      >
                        {faq.answer}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQHero;
