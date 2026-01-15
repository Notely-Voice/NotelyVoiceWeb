"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { pricingFaqData } from "@/contents/pricingData";

const PricingFaq = () => {
  const [expandedIdx, setExpandedIdx] = useState<number | null>(2); // "Can I change or cancel my subscription at any time?" is expanded by default

  return (
    <div className="px-4 sm:px-9 flex flex-col justify-center items-center relative">
      <div className="wrapper bg-[#3E45FB] sm:px-8 lg:px-10 xl:px-12 border-4 border-[#3E45FB] rounded-[20px] sm:rounded-[40px] flex flex-col gap-8 lg:gap-10 z-20 relative w-full">
        
        {/* Heading */}
        <h1 className="font-varien text-white text-2xl sm:text-3xl lg:text-4xl xl:text-5xl tracking-[-3%] leading-tight max-w-115">
          FREQUENTLY ASKED QUESTIONS
        </h1>

        {/* FAQ Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          {pricingFaqData.map((faq, idx) => (
            <div
              key={idx}
              className={`h-fit max-h-fit rounded-xl sm:rounded-[20px] border-2 border-white overflow-hidden transition-all duration-300 ${
                expandedIdx === idx ? "bg-[#3E45FB]" : "bg-transparent"
              }`}
            >
              <button
                onClick={() =>
                  setExpandedIdx(expandedIdx === idx ? null : idx)
                }
                className="w-full px-3 sm:px-6 xl:px-8 py-2.5 sm:py-5 xl:py-6 flex justify-between items-center hover:bg-white/10 transition-colors duration-300"
              >
                <h3 className="text-[10px] sm:text-base md:text-sm xl:text-lg font-bold text-white text-left">
                  {faq.question}
                </h3>
                <ChevronDown
                  className={`w-6 h-6 text-white flex-shrink-0 transition-transform duration-300 ${
                    expandedIdx === idx ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Answer */}
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  expandedIdx === idx ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="px-3 sm:px-6 md:px-8 pb-5 sm:pb-6 border-t border-white/30">
                  <p className="text-[10px] sm:text-sm lg:text-base text-white/90 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingFaq;
