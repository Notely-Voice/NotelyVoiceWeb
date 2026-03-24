"use client";

import { useState, useEffect } from "react";
import {
  COUNTRY_PRICING,
  CLOUD_AI_WEEKLY_PRICING,
  TIMEZONE_TO_COUNTRY,
  DEFAULT_PRICING,
  getCurrencySymbol,
  type CountryPrice,
} from "@/lib/pricingLocalization";

interface UseLocalPriceReturn {
  currency: string;
  currencySymbol: string;
  privateAIWeeklyPrice: number;
  cloudAIWeeklyPrice: number;
  isLoading: boolean;
}

export function useLocalPrice(): UseLocalPriceReturn {
  const [privateAIPricing, setPrivateAIPricing] = useState<CountryPrice>(DEFAULT_PRICING);
  const [cloudAIPricing, setCloudAIPricing] = useState<CountryPrice>({ currency: "USD", price: 6.99 });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    try {
      // Get user's timezone using Intl API
      const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

      // Map timezone to country
      const country = TIMEZONE_TO_COUNTRY[timezone];

      if (country) {
        // Set Private AI pricing
        if (COUNTRY_PRICING[country]) {
          setPrivateAIPricing(COUNTRY_PRICING[country]);
        } else {
          setPrivateAIPricing(DEFAULT_PRICING);
        }

        // Set Cloud AI pricing
        if (CLOUD_AI_WEEKLY_PRICING[country]) {
          setCloudAIPricing(CLOUD_AI_WEEKLY_PRICING[country]);
        } else {
          setCloudAIPricing({ currency: "USD", price: 6.99 });
        }
      } else {
        // Fallback to default USD pricing
        setPrivateAIPricing(DEFAULT_PRICING);
        setCloudAIPricing({ currency: "USD", price: 6.99 });
      }
    } catch (error) {
      // If any error occurs, use default pricing
      console.error("Error detecting timezone:", error);
      setPrivateAIPricing(DEFAULT_PRICING);
      setCloudAIPricing({ currency: "USD", price: 6.99 });
    } finally {
      setIsLoading(false);
    }
  }, []);

  return {
    currency: privateAIPricing.currency,
    currencySymbol: getCurrencySymbol(privateAIPricing.currency),
    privateAIWeeklyPrice: privateAIPricing.price,
    cloudAIWeeklyPrice: cloudAIPricing.price,
    isLoading,
  };
}
