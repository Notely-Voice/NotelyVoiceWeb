"use client";

import { useState } from "react";
import { faqData } from "@/contents/faqData";
import { ChevronDown } from "lucide-react";

const FAQHero = () => {
  const [activeCategory, setActiveCategory] = useState("getting-started");
  const [expandedIdx, setExpandedIdx] = useState<number | null>(0);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const currentCategory = faqData.find((cat) => cat.id === activeCategory);
  const currentCategoryLabel = faqData.find((cat) => cat.id === activeCategory)?.label;

  return (
    <div className="mt-10 px-4 sm:px-9 flex flex-col justify-center items-center relative">
      <div className="wrapper bg-[#F0FEFF] py-6 sm:py-8 md:py-10 xl:py-16 px-4 sm:px-8 md:px-10 lg:px-12 xl:px-14 border-4 border-black rounded-[20px] sm:rounded-[40px] flex flex-col lg:flex-row justify-center lg:justify-between gap-5 lg:gap-12 z-20 relative">
        
        {/* Left Side - Heading and Category Buttons */}
        <div className="flex flex-col item-center justify-center lg:justify-start gap-8">
          {/* Heading */}
          <h1 className="font-varien text-black text-2xl sm:text-3xl lg:text-4xl xl:text-5xl tracking-[-3%] leading-tight max-w-115">
            FREQUENTLY ASKED QUESTIONS
          </h1>

          {/* Dropdown for md: and below */}
          <div className="lg:hidden relative w-full md:max-w-105 mx-auto lg:mx-0 lg:mx-0">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="w-fit px-3 sm:px-5 py-2 sm:py-3 rounded-full font-bold text-sm sm:text-base bg-black text-white border-2 border-black flex items-center justify-between gap-3 hover:opacity-90 transition-opacity"
            >
              {currentCategoryLabel}
              <ChevronDown
                className={`w-5 h-5 transition-transform duration-300 ${
                  dropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {dropdownOpen && (
              <div className="absolute top-full mt-2 left-0 right-0 bg-white border-2 border-black rounded-2xl sm:rounded-[20px] overflow-hidden z-50 shadow-lg">
                {faqData.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => {
                      setActiveCategory(category.id);
                      setExpandedIdx(0);
                      setDropdownOpen(false);
                    }}
                    className={`w-full px-5 py-3 text-left font-bold text-base transition-all duration-300 ${
                      activeCategory === category.id
                        ? "bg-black text-white"
                        : "text-[#3E45FB] hover:bg-[#F0FEFF]"
                    } ${!faqData[faqData.length - 1].id.includes(category.id) ? "border-b border-black/10" : ""}`}
                  >
                    {category.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Category Buttons Grid - Hidden on md: and below */}
          <div className="hidden lg:grid grid-cols-1 sm:grid-cols-2 gap-4 w-full lg:w-fit">
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
                  className={`text-[10px] sm:text-base lg:text-sm xl:text-base font-bold text-left ${
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
                  expandedIdx === idx ? "max-h-full" : "max-h-0"
                }`}
              >
                <div className="px-3 sm:px-5 pb-3 sm:pb-4">
                  {Array.isArray(faq.answer) ? (
                    <ul className="space-y-2 text-sm sm:text-base text-white/90">
                      {faq.answer.map((item, itemIdx) => (
                        <li key={itemIdx} className="leading-relaxed flex items-center">
                          {item !== "" && <div className="size-2 bg-white rounded-full mr-1.5"></div>}
                          {item.startsWith("•") ? (
                            <span>{item}</span>
                          ) : item === "" ? (
                            <br />
                          ) : (
                            <span className={item.includes(":") ? "font-semibold" : ""}>
                              {item}
                            </span>
                          )}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-sm sm:text-base text-white/90 leading-relaxed">
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
  );
};

export default FAQHero;
