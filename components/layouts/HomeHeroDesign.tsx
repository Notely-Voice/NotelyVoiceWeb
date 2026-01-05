'use client';

import { icons } from "@/lib";
import Image from "next/image";
import HomeVoiceBox from "../ui/HomeVoiceBox";
import HomeTextBox from "../ui/HomeTextBox";
import { useResponsive } from "@/hooks/useResponsive";

const HomeHeroDesign = () => {
  const screenSize = useResponsive();

  // Helper function to get style with fallback
  const getStyle = <T extends object>(styles: Record<string, T>, defaultValue: T): T => {
    return (styles[screenSize] as T) || defaultValue;
  };

  // Arrow icon styles - Optional per breakpoint
  const arrowStyles = {
    xxs: { top: '-12px', right: '-12px', width: '200px' },
    xs: { top: '-12px', right: '30px', width: '240px' },
    sm: { top: '-20px', right: '24px', width: '400px' },
    md: { top: '-12px', right: '64px', width: '400px' },
    lmd: { top: '-12px', right: '64px', width: '400px' },
    lg: { top: '0px', right: '0px', width: '380px' },
    xl: { top: '0px', right: '0px', width: '420px' },
  } as Record<string, { top: string; right: string; width: string }>;

  // Phone image styles - Optional per breakpoint
  const phoneStyles = {
    xxs: { marginTop: '-40px', marginBottom: '40px', minHeight: '280px', maxHeight: '280px', minWidth: '220px', maxWidth: '220px', marginLeft: '-24px', marginRight: '-16px' },
    xs: { marginTop: '-40px', marginBottom: '34px', minHeight: '320px', maxHeight: '320px', minWidth: '280px', maxWidth: '280px', marginLeft: '-45px', marginRight: '-16px' },
    sm: { marginTop: '-40px', marginBottom: '64px', minHeight: '400px', maxHeight: '400px', minWidth: '400px', maxWidth: '400px', marginLeft: '-80px', marginRight: '-16px' },
    md: { marginTop: '-8px', marginBottom: '64px', minHeight: '400px', maxHeight: '400px', minWidth: '400px', maxWidth: '400px', marginLeft: '-40px', marginRight: '-40px' },
    lmd: { marginTop: '-8px', marginBottom: '64px', minHeight: '400px', maxHeight: '400px', minWidth: '400px', maxWidth: '400px', marginLeft: '-40px', marginRight: '-40px' },
    lg: { marginTop: '-8px', marginBottom: '32px', minHeight: '400px', maxHeight: '400px', minWidth: '400px', maxWidth: '400px', marginLeft: '-40px', marginRight: '-16px' },
    xl: { marginTop: '40px', marginBottom: '60px', minHeight: '380px', maxHeight: '380px', minWidth: '480px', maxWidth: '480px', marginLeft: '-40px', marginRight: '-40px' },
  } as Record<string, { marginTop: string; marginBottom: string; minHeight: string; maxHeight: string; minWidth: string; maxWidth: string; marginLeft: string; marginRight: string }>;

  // Dotted line styles - Optional per breakpoint
  const dottedLineStyles = {
    xxs: { bottom: '64px', right: '-12px', width: '200px' },
    xs: { bottom: '64px', right: '30px', width: '240px' },
    sm: { bottom: '64px', right: '24px', width: '400px' },
    md: { bottom: '64px', right: '64px', width: '400px' },
    lmd: { bottom: '64px', right: '64px', width: '400px' },
    lg: { bottom: '40px', right: '0px', width: '380px' },
    xl: { bottom: '16px', right: '0px', width: '420px' },
  } as Record<string, { bottom: string; right: string; width: string }>;

  // Voice box positioning - Optional per breakpoint
  const voiceBoxStyles = {
    xxs: { top: '40px', left: '20%', transform: 'translateX(-50%)' },
    xs: { top: '50px', left: '18%', transform: 'translateX(-50%)' },
    sm: { top: '90px', left: '20%', transform: 'translateX(-50%)' },
    md: { top: '90px', left: '20%', transform: 'translateX(-50%)' },
    lmd: { top: '90px', left: '20%', transform: 'translateX(-50%)' },
    lg: { top: '100px', left: '30%', transform: 'translateX(-50%)' },
    xl: { top: '100px', left: '30%', transform: 'translateX(-50%)' },
  } as Record<string, { top: string; left: string; transform: string }>;

  // Text box positioning - Optional per breakpoint
  const textBoxStyles = {
    xxs: { top: '100px', left: '76%', transform: 'translateX(-50%)' },
    xs: { top: '130px', left: '62%', transform: 'translateX(-50%)' },
    sm: { top: '200px', left: '62%', transform: 'translateX(-50%)' },
    md: { top: '220px', left: '66%', transform: 'translateX(-50%)' },
    lmd: { top: '220px', left: '66%', transform: 'translateX(-50%)' },
    lg: { top: '220px', left: '72%', transform: 'translateX(-50%)' },
    xl: { top: '250px', left: '76%', transform: 'translateX(-50%)' },
  } as Record<string, { top: string; left: string; transform: string }>;

  // Get current styles with defaults
  const currentArrowStyles = getStyle(arrowStyles, arrowStyles.sm!);
  const currentPhoneStyles = getStyle(phoneStyles, phoneStyles.sm!);
  const currentDottedLineStyles = getStyle(dottedLineStyles, dottedLineStyles.sm!);
  const currentVoiceBoxStyles = getStyle(voiceBoxStyles, voiceBoxStyles.sm!);
  const currentTextBoxStyles = getStyle(textBoxStyles, textBoxStyles.sm!);

  return (
    <div className="relative w-full flex-1 flex flex-col items-center justify-center">
      <Image
        src={icons.up_arrow_icon}
        alt="Up Arrow Line"
        style={{
          position: 'absolute',
          top: currentArrowStyles.top,
          right: currentArrowStyles.right,
          width: currentArrowStyles.width,
          height: 'auto',
        }}
      />
      <div className="relative">
        <Image
          src={icons.slanted_phone}
          alt="Slant Phone"
          style={{
            marginTop: currentPhoneStyles.marginTop,
            marginBottom: currentPhoneStyles.marginBottom,
            minHeight: currentPhoneStyles.minHeight,
            maxHeight: currentPhoneStyles.maxHeight,
            minWidth: currentPhoneStyles.minWidth,
            maxWidth: currentPhoneStyles.maxWidth,
            marginLeft: currentPhoneStyles.marginLeft,
            marginRight: currentPhoneStyles.marginRight,
            zIndex: 10,
          }}
        />
      </div>
      <Image   
        src={icons.down_dotted_icon}
        alt="Down Dotted Line"
        style={{
          position: 'absolute',
          bottom: currentDottedLineStyles.bottom,
          right: currentDottedLineStyles.right,
          width: currentDottedLineStyles.width,
          height: 'auto',
        }}
      />

      <div style={{
        position: 'absolute',
        top: currentVoiceBoxStyles.top,
        left: currentVoiceBoxStyles.left,
        transform: currentVoiceBoxStyles.transform,
        zIndex: 20,
      }}>
        <HomeVoiceBox />
      </div>

      <div style={{
        position: 'absolute',
        top: currentTextBoxStyles.top,
        left: currentTextBoxStyles.left,
        transform: currentTextBoxStyles.transform,
        zIndex: 20,
      }}>
        <HomeTextBox />
      </div>
    </div>
  );
};

export default HomeHeroDesign;
