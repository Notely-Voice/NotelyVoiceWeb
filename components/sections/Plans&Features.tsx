"use client";

import Button from "@/components/ui/Button";
import { plansInfo, featuresData } from "@/contents/pricingData";
import { Check, X } from "lucide-react";

const PlansFeatures = () => {
  return (
    <div className="px-4 md:px-9 flex flex-col justify-center items-center relative">
      <div className="wrapper bg-[#3E45FB] border-4 border-[#3E45FB] rounded-[20px] sm:rounded-[40px] flex flex-col justify-center items-center gap-8 lg:gap-12 z-20 w-full">

        {/* Center - Title */}
        <h1 className="font-varien text-white text-3xl sm:text-4xl lg:text-5xl xl:text-[52px] tracking-[-3%] text-center flex-1">
          PLANS & FEATURES
        </h1>
        {/* Header Section */}
        <div className="w-full grid md:grid-cols-4 justify-between items-start gap-5 px-10">
          {/* Left Text */}
          <h2 className="col-span-1 hidden md:inline-block font-varien text-[#F0FEFF] text-2xl sm:text-3xl lg:text-[34px] leading-tight tracking-[-3%] max-w-xs">
            GET STARTED WITH NOTELY TODAY
          </h2>


          {/* Right - Plan Cards */}
          <div className="col-span-3 grid grid-cols-2 sm:grid-cols-3 gap-4 w-full lg:w-auto">
            {plansInfo.map((plan) => (
              <div
                key={plan.type}
                className="flex flex-col items-center gap-3 flex-1 sm:flex-none"
              >
                <div className="text-center flex flex-col items-start">
                  <h3 className="font-varien text-[#F0FEFF] text-2xl sm:text-3xl lg:text-[34px] leading-tight tracking-[-3%] mb-3">
                    {plan.type}
                  </h3>
                  <p className="text-[#F0FEFF] text-base sm:text-lg font-black mb-5">
                    {plan.subtitle}
                    {plan.price && (
                      <span className="text-[#F0FEFF] font-normal">
                        {plan.price}
                      </span>
                    )}
                  </p>
                <Button
                  btnText={plan.buttonText}
                  isWhite
                  className={`w-full sm:w-fit px-4 sm:px-6 py-2 text-sm border-2! ${plan.type === "FREE" ? "bg-transparent! text-white! hover:bg-[#2702C2]! focus:bg-[#2702C2]!" : ""}`}
                />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Features Table */}
        <div className="w-full bg-white rounded-[30px] py-6 sm:py-8 md:py-10 lg:py-12 px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10 border-3 border-black overflow-hidden">
          <div className="hidden sm:block">
            <table className="w-full">
              <tbody>
                {featuresData.map((row, idx) => (
                  <tr
                    key={idx}
                    className={`border-[#D4D4D4] ${
                      idx === featuresData.length - 1 ? "border-b-0" : ""
                    } ${row.isCategoryHeader ? "border-b-3 " : "border-b"}`}
                  >
                    {/* Feature Name */}
                    <td
                      className={`px-2 sm:px-3 md:px-4 lg:px-5 xl:px-6 py-3 sm:py-4 md:py-5 lg:py-7 xl:py-8 ${
                        row.isCategoryHeader ? "font-bold text-base sm:text-xl lg:text-3xl" : "font-medium text-xs sm:text-base md:text-lg lg:text-xl"
                      } text-black min-w-[180px]`}
                    >
                      {row.feature}
                    </td>

                    {/* Free Column */}
                    <td className="px-6 py-4 text-center min-w-[120px]">
                      {typeof row.free === "boolean" ? (
                        row.free ? (
                          <Check className="w-5 h-5 text-teal-500 mx-auto" />
                        ) : (
                          <X className="w-5 h-5 text-[#DD2E44] mx-auto" />
                        )
                      ) : (
                        <span
                          className={`${
                            row.isCategoryHeader ? "font-bold text-base sm:text-xl lg:text-3xl" : "font-medium text-xs sm:text-base md:text-lg lg:text-xl"
                          } text-black`}
                        >
                          {row.free}
                        </span>
                      )}
                    </td>

                    {/* Pro Column */}
                    <td className="px-6 py-4 text-center min-w-[120px]">
                      {typeof row.pro === "boolean" ? (
                        row.pro ? (
                          <Check className="w-5 h-5 text-teal-500 mx-auto" />
                        ) : (
                          <X className="w-5 h-5 text-[#DD2E44] mx-auto" />
                        )
                      ) : (
                        <span
                          className={`${
                            row.isCategoryHeader ? "font-bold text-base sm:text-xl lg:text-3xl" : "font-medium text-xs sm:text-base md:text-lg lg:text-xl"
                          } text-black`}
                        >
                          {row.pro}
                        </span>
                      )}
                    </td>

                    {/* Premium Column */}
                    <td className="px-6 py-4 text-center min-w-[120px]">
                      {typeof row.premium === "boolean" ? (
                        row.premium ? (
                          <Check className="w-5 h-5 text-teal-500 mx-auto" />
                        ) : (
                          <X className="w-5 h-5 text-[#DD2E44] mx-auto" />
                        )
                      ) : (
                        <span
                          className={`${
                            row.isCategoryHeader ? "font-bold text-base sm:text-xl lg:text-3xl" : "font-medium text-xs sm:text-base md:text-lg lg:text-xl"
                          } text-black`}
                        >
                          {row.premium}
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div>
            {/* Mobile View */}
            <div className="sm:hidden flex flex-col gap-2.5">
              {featuresData.map((row, idx) => (
                <div
                  key={idx}
                  className={`border-[#D4D4D4] ${
                    idx === featuresData.length - 1 ? "border-b-0" : "border-b"
                  } ${row.isCategoryHeader ? "border-b-3 " : ""} px-2 sm:px-3 md:px-4 lg:px-5 xl:px-6 py-3 sm:py-4 md:py-5 lg:py-7 xl:py-8`}
                >
                  <div
                    className={`${
                      row.isCategoryHeader ? "font-bold text-base sm:text-xl lg:text-3xl" : "font-medium text-xs sm:text-base md:text-lg lg:text-xl"
                    } text-black mb-2`}
                  >
                    {row.feature}
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center">
                      {/*<div className="font-semibold mb-1">Free</div>*/}
                      {typeof row.free === "boolean" ? (
                        row.free ? (
                          <Check className="w-5 h-5 text-teal-500 mx-auto" />
                        ) : (
                          <X className="w-5 h-5 text-[#DD2E44] mx-auto" />
                        )
                      ) : (
                        <span
                          className={`${
                            row.isCategoryHeader ? "font-bold text-base sm:text-xl lg:text-3xl" : "font-medium text-xs sm:text-base md:text-lg lg:text-xl"
                          } text-black`}
                        >
                          {row.free}
                        </span>
                      )}
                    </div>
                    <div className="text-center">
                      {/*<div className="font-semibold mb-1">Pro</div>*/}
                      {typeof row.pro === "boolean" ? (
                        row.pro ? (
                          <Check className="w-5 h-5 text-teal-500 mx-auto" />
                        ) : (
                          <X className="w-5 h-5 text-[#DD2E44] mx-auto" />
                        )
                      ) : (
                        <span
                          className={`${
                            row.isCategoryHeader ? "font-bold text-base sm:text-xl lg:text-3xl" : "font-medium text-xs sm:text-base md:text-lg lg:text-xl"
                          } text-black`}
                        >
                          {row.pro}
                        </span>
                      )}
                    </div>
                    <div className="text-center">
                      {/*<div className="font-semibold mb-1">Premium</div>*/}
                      {typeof row.premium === "boolean" ? (
                        row.premium ? (
                          <Check className="w-5 h-5 text-teal-500 mx-auto" />
                        ) : (
                          <X className="w-5 h-5 text-[#DD2E44] mx-auto" />
                        )
                      ) : (
                        <span
                          className={`${
                            row.isCategoryHeader ? "font-bold text-base sm:text-xl lg:text-3xl" : "font-medium text-xs sm:text-base md:text-lg lg:text-xl"
                          } text-black`}
                        >
                          {row.premium}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlansFeatures;
