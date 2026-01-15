"use client";

import { useState } from "react";
import { pricingCards } from "@/contents/pricingData";
import Button from "@/components/ui/Button";
import { Check } from "lucide-react";

const Subscription = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <div className="px-4 sm:px-9 flex flex-col justify-center items-center relative">
      <div className="wrapper bg-[#3E45FB] border-4 border-[#3E45FB] rounded-[20px] sm:rounded-[40px] flex flex-col justify-center items-center gap-8 lg:gap-12 z-20 relative w-full">
        
        {/* Tab Toggle */}
        <div className="p-0.5 sm:p-1 border sm:border-3 border-white rounded-full">

        <div className="grid grid-cols-2 items-center gap-1 bg-[#3E45FB] rounded-full p-1 w-fit">
          <button
            onClick={() => setIsAnnual(false)}
            className={`cursor-pointer px-2.5 sm:px-4 py-2 sm:py-3 rounded-full font-bold text-[10px] sm:text-lg transition-all duration-300 ${
              !isAnnual
                ? "bg-[#F0FEFF] text-[#3E45FB]"
                : "text-[#F0FEFF]"
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setIsAnnual(true)}
            className={`cursor-pointer px-2 sm:px-4 py-2 sm:py-3 rounded-full font-black text-[9px] sm:text-lg transition-all duration-300 ${
              isAnnual
                ? "bg-[#F0FEFF] text-[#3E45FB]"
                : "text-[#F0FEFF]"
            }`}
          >
            Annually <span className="font-semibold">
                Save up to 20%
              </span>
          </button>
        </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 w-full">
          {pricingCards.map((card, idx) => (
            <div
              key={card.type}
              className={`rounded-[20px] px-4 sm:px-8 py-4 sm:py-8 flex flex-col justify-between transition-all duration-300 ${
                idx === 0
                  ? "bg-[#3E45FB] border-3 border-white"
                  : "bg-[#F0FEFF] border-3 border-black"
              }`}
            >
              {/* Card Header */}
              <div className="mb-4 sm:mb-6">
                <h3
                  className={`font-varien text-3xl sm:text-4xl tracking-[-3%] mb-1.5 sm:mb-3 ${
                    idx === 0 ? "text-[#F0FEFF]" : "text-[#3E45FB]"
                  }`}
                >
                  {card.type}
                </h3>
                <p
                  className={`text-xs sm:text-lg md:text-sm font-medium mb-3 sm:mb-6 ${
                    idx === 0 ? "text-[#F0FEFF]" : "text-black"
                  }`}
                >
                  {card.description}
                </p>

                {/* Price */}
                <div className="flex items-baseline gap-1">
                  <span
                    className={`text-3xl sm:text-4xl tracking-[-3%] font-black ${
                      idx === 0 ? "text-[#F0FEFF]" : "text-[#3E45FB]"
                    }`}
                  >
                    {isAnnual ? card.priceAnnually : card.priceMonthly}
                  </span>
                  <span
                    className={`text-3xl sm:text-4xl tracking-[-3%] font-normal ${
                      idx === 0 ? "text-[#F0FEFF]" : "text-[#3E45FB]"
                    }`}
                  >
                    /month
                  </span>
                </div>
              </div>

              {/* Features List */}
              <div className="mb-8 flex-grow">
                <ul className="space-y-1.5 sm:space-y-3">
                  {card.features.map((feature, featureIdx) => (
                    <li
                      key={featureIdx}
                      className="flex items-start gap-3"
                    >
                      <Check
                        className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                          idx === 0 ? "text-white" : "text-[#3E45FB]"
                        }`}
                      />
                      <span
                        className={`text-[10px] sm:text-lg md::text-sm font-medium ${
                          idx === 0 ? "text-[#F0FEFF]" : "text-black"
                        }`}
                      >
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Button */}
              {/* <div>
                {idx === 0 ? (
                  <button
                    className="cursor-pointer w-full py-3 px-6 rounded-full font-bold text-center bg-[#F0FEFF] text-[#3E45FB] hover:bg-white transition-colors duration-300"
                  >
                    {card.buttonText}
                  </button>
                ) : (
                  <Button
                    btnText={card.buttonText}
                    isRounded
                    className="w-full"
                  />
                )}
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Subscription;
