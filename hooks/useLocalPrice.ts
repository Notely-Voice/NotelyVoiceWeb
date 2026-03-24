"use client";

import { useState, useEffect } from "react";
import {
  COUNTRY_PRICING,
  CLOUD_AI_WEEKLY_PRICING,
  PRIVATE_AI_YEARLY_PRICING,
  TIMEZONE_TO_COUNTRY,
  DEFAULT_PRICING,
  getCurrencySymbol,
  type CountryPrice,
} from "@/lib/pricingLocalization";

interface UseLocalPriceReturn {
  currency: string;
  currencySymbol: string;
  privateAIWeeklyPrice: number;
  privateAIYearlyPrice: number;
  cloudAIWeeklyPrice: number;
  isLoading: boolean;
}

export function useLocalPrice(): UseLocalPriceReturn {
  const [privateAIWeeklyPricing, setPrivateAIWeeklyPricing] = useState<CountryPrice>(DEFAULT_PRICING);
  const [privateAIYearlyPricing, setPrivateAIYearlyPricing] = useState<CountryPrice>({ currency: "USD", price: 19.99 });
  const [cloudAIPricing, setCloudAIPricing] = useState<CountryPrice>({ currency: "USD", price: 6.99 });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    try {
      // Get user's timezone using Intl API
      const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

      // Map timezone to country
      const country = TIMEZONE_TO_COUNTRY[timezone];

      if (country) {
        // Set Private AI Weekly pricing
        if (COUNTRY_PRICING[country]) {
          setPrivateAIWeeklyPricing(COUNTRY_PRICING[country]);
        } else {
          setPrivateAIWeeklyPricing(DEFAULT_PRICING);
        }

        // Set Private AI Yearly pricing
        if (PRIVATE_AI_YEARLY_PRICING[country]) {
          setPrivateAIYearlyPricing(PRIVATE_AI_YEARLY_PRICING[country]);
        } else {
          setPrivateAIYearlyPricing({ currency: "USD", price: 19.99 });
        }

        // Set Cloud AI pricing
        if (CLOUD_AI_WEEKLY_PRICING[country]) {
          setCloudAIPricing(CLOUD_AI_WEEKLY_PRICING[country]);
        } else {
          setCloudAIPricing({ currency: "USD", price: 6.99 });
        }
      } else {
        // Fallback to default USD pricing
        setPrivateAIWeeklyPricing(DEFAULT_PRICING);
        setPrivateAIYearlyPricing({ currency: "USD", price: 19.99 });
        setCloudAIPricing({ currency: "USD", price: 6.99 });
      }
    } catch (error) {
      // If any error occurs, use default pricing
      console.error("Error detecting timezone:", error);
      setPrivateAIWeeklyPricing(DEFAULT_PRICING);
      setPrivateAIYearlyPricing({ currency: "USD", price: 19.99 });
      setCloudAIPricing({ currency: "USD", price: 6.99 });
    } finally {
      setIsLoading(false);
    }
  }, []);

  return {
    currency: privateAIWeeklyPricing.currency,
    currencySymbol: getCurrencySymbol(privateAIWeeklyPricing.currency),
    privateAIWeeklyPrice: privateAIWeeklyPricing.price,
    privateAIYearlyPrice: privateAIYearlyPricing.price,
    cloudAIWeeklyPrice: cloudAIPricing.price,
    isLoading,
  };
}
