"use client";

import { useState, useEffect } from "react";
import {
  COUNTRY_PRICING,
  TIMEZONE_TO_COUNTRY,
  DEFAULT_PRICING,
  getCurrencySymbol,
  type CountryPrice,
} from "@/lib/pricingLocalization";

interface UseLocalPriceReturn {
  currency: string;
  currencySymbol: string;
  weeklyPrice: number;
  isLoading: boolean;
}

export function useLocalPrice(): UseLocalPriceReturn {
  const [pricing, setPricing] = useState<CountryPrice>(DEFAULT_PRICING);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    try {
      // Get user's timezone using Intl API
      const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

      // Map timezone to country
      const country = TIMEZONE_TO_COUNTRY[timezone];

      if (country && COUNTRY_PRICING[country]) {
        // Found matching country pricing
        setPricing(COUNTRY_PRICING[country]);
      } else {
        // Fallback to default USD pricing
        setPricing(DEFAULT_PRICING);
      }
    } catch (error) {
      // If any error occurs, use default pricing
      console.error("Error detecting timezone:", error);
      setPricing(DEFAULT_PRICING);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return {
    currency: pricing.currency,
    currencySymbol: getCurrencySymbol(pricing.currency),
    weeklyPrice: pricing.price,
    isLoading,
  };
}
