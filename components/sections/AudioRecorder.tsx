"use client";

import Image from "next/image";
import { icons } from "@/lib";
import EditingToolCanvas from "@/components/ui/EditingToolCanvas";
import Button from "@/components/ui/Button";
import HomeVoiceBox from "@/components/ui/HomeVoiceBox";
import Voice from "@/components/ui/Voice";
import { useEffect, useState } from "react";
import { Play, Pause, Square } from "lucide-react";
import {useResponsive} from "@/hooks/useResponsive";

interface TimerState {
  isRunning: boolean;
  isPaused: boolean;
  minutes: number;
  seconds: number;
  totalSeconds: number;
  initialTotalSeconds: number;
}

const AudioRecorder = () => {
  const TIMER_DURATION_MINUTES = 1; // Easy to edit
  const [timerState, setTimerState] = useState<TimerState>({
    isRunning: true,
    isPaused: false,
    minutes: TIMER_DURATION_MINUTES,
    seconds: 0,
    totalSeconds: TIMER_DURATION_MINUTES * 60,
    initialTotalSeconds: TIMER_DURATION_MINUTES * 60,
  });

  useEffect(() => {
    if (!timerState.isRunning || timerState.isPaused) return;

    const interval = setInterval(() => {
      setTimerState((prev) => {
        let newTotalSeconds = prev.totalSeconds - 1;

        if (newTotalSeconds < 0) {
          newTotalSeconds = prev.initialTotalSeconds;
        }

        const newMinutes = Math.floor(newTotalSeconds / 60);
        const newSeconds = newTotalSeconds % 60;

        return {
          ...prev,
          totalSeconds: newTotalSeconds,
          minutes: newMinutes,
          seconds: newSeconds,
        };
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [timerState.isRunning, timerState.isPaused]);

  const handlePause = () => {
    setTimerState((prev) => ({
      ...prev,
      isPaused: !prev.isPaused,
    }));
  };

  const handleStop = () => {
    setTimerState({
      isRunning: false,
      isPaused: false,
      minutes: TIMER_DURATION_MINUTES,
      seconds: 0,
      totalSeconds: TIMER_DURATION_MINUTES * 60,
      initialTotalSeconds: TIMER_DURATION_MINUTES * 60,
    });
  };

  const handlePlay = () => {
    setTimerState((prev) => ({
      ...prev,
      isRunning: true,
      isPaused: false,
    }));
  };

  // Calculate the circumference and stroke-dashoffset for circular progress
  const circumference = 2 * Math.PI * 70; // radius ~70px
  const progress = (timerState.totalSeconds / timerState.initialTotalSeconds) * 100;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  const displayMinutes = String(timerState.minutes).padStart(2, "0");
  const displaySeconds = String(timerState.seconds).padStart(2, "0");

  const screenSize = useResponsive();

// Dynamic bar dimensions based on screen size
  const barWidth = {
    xxs: 4,
    xs: 4,
    sm: 4,
    md: 7,
    lmd: 9,
    lg: 10,
    xl: 11,
  }[screenSize];

  const barHeight = {
    xxs: 'h-6',
    xs: 'h-6',
    sm: 'h-6',
    md: 'h-10',
    lmd: 'h-13',
    lg: 'h-14',
    xl: 'h-16',
  }[screenSize];

  return (
    <div
      id="audio-recorder"
      className="pt-3.5 px-4 sm:px-6 xl:px-9 flex flex-col justify-center items-center relative"
    >
      <div className="wrapper px-4 sm:px-6 md:px-2 lg:px-10 xl:px-14 rounded-3xl sm:rounded-[40px] md:grid lg:grid-rows-1 md:grid-cols-2 flex flex-col-reverse gap-10 md:gap-6 lg:gap-10 justify-center items-center z-20 relative">
        <div className="border-4 sm:border-5 border-dashed border-black bg-[#F0FEFF] w-full sm:w-fit sm:min-w-120 md:min-w-85 lg:min-w-110 xl:min-w-130 min-h-90 sm:min-h-110 md:min-h-100 lg:min-h-120 xl:min-h-150 flex flex-col justify-center items-center gap-12 rounded-[40px] sm:rounded-[70px] mt-8 md:mt-0 py-8 md:py-8 lg:py-12 xl:py-16 px-4 sm:px-6 md:px-8 lg:px-8 xl:px-14 mx-auto relative">

          <div className="inline-block md:hidden absolute -top-[12%] sm:-top-[15%] right-[30%] py-1 sm:py-2 px-1.5 sm:px-3 rounded-3xl border-2 border-dashed border-[#3E45FB] h-fit">
            <div
              className={`border-black min-h-[70px] bg-black py-3 sm:py-6 px-5 sm:px-8 rounded-2xl sm:rounded-3xl flex items-center justify-center`}
            >
              <Voice color="white" className="gap-0" barWidth={barWidth} barHeight={barHeight} />
            </div>
          </div>

          <div className="hidden md:inline-block absolute top-[10%] -right-[20%] py-1 sm:py-2 px-1.5 sm:px-3 rounded-[30px] xl:rounded-[50px] border-2 border-dashed border-[#3E45FB] h-fit">
            <div
              className={`border-black min-h-[100px] bg-black  py-4 sm:py-8 md:py-6 lg:py-8 lg:px-8 px-7 sm:px-8 md:px-6 xl:px-12 rounded-4xl md:rounded-3xl lg:rounded-4xl xl:rounded-[40px] flex items-center justify-center`}
            >
              <Voice color="white" className="gap-0" barWidth={barWidth} barHeight={barHeight} />
            </div>
          </div>


            <div className="relative font-black text-2xl sm:text-3xl md:text-2xl lg:text-4xl text-black mt-3 sm:mt-12 text-center rounded-full size-32 md:size-26 lg:size-40 flex items-center justify-center">
            <svg className="absolute -top-3.5 -left-3.5 inset-0 w-[120%] h-[120%]"  viewBox="0 0 160 160" style={{ transform: "rotate(270deg)" }} >
              <circle
                cx="80"
                cy="80"
                r="70"
                fill="none"
                stroke="#000000"
                strokeWidth="10"
              />
              <circle
                cx="80"
                cy="80"
                r="70"
                fill="none"
                stroke="#3E45FB"
                strokeWidth="10"
                strokeLinecap="round"
                style={{
                  strokeDasharray: circumference,
                  strokeDashoffset: strokeDashoffset,
                  transition: "stroke-dashoffset 1s linear",
                }}
              />
            </svg>
              {displayMinutes}:{displaySeconds}
            </div>

          <div className="flex justify-between items-end gap-3 sm:gap-4 lg:gap-6 bg-black py-2 lg:py-3 px-2 sm:px-3.5 lg:px-4 rounded-2xl w-fit mx-auto">
            {!timerState.isRunning || timerState.isPaused ? (
              <button
                onClick={handlePlay}
                className="cursor-pointer hover:opacity-80 transition-opacity"
                aria-label="play"
              >
                <Play
                  className="w-8 h-8 sm:w-12 sm:h-12 md:w-10 md:h-10 lg:w-12 lg:h-12 text-white"
                  fill="white"
                />
              </button>
            ) : (
              <button
                onClick={handlePause}
                className="cursor-pointer hover:opacity-80 transition-opacity"
                aria-label="pause"
              >
                <Pause
                  className="w-8 h-8 sm:w-12 sm:h-12 md:w-10 md:h-10 lg:w-12 lg:h-12 text-white"
                  fill="white"
                />
              </button>
            )}
            <button
              onClick={handleStop}
              className="cursor-pointer hover:opacity-80 transition-opacity"
              aria-label="stop"
            >
              <Square
                className="w-8 h-8 sm:w-12 sm:h-12 md:w-10 md:h-10 lg:w-12 lg:h-12 text-white"
                fill="white"
              />
            </button>
          </div>
        </div>

        <div className="flex flex-col items-start md:items-end gap-6 ml-0 md:ml-5">
          <Button
            btnText="Audio Recorder & Share"
            isRounded
            className={`px-6 sm:px-12 md:px-4 py-3.5 lg:px-6 w-fit font-varien font-regular text-xs sm:text-sm lg:text-base border-4! border-[#3E45FB]! bg-[#F0FEFF]! text-[#3E45FB]! hover:text-[#3E45FB]! hover:bg-[#F0FEFF]! focus:text-[#3E45FB]! focus:bg-[#F0FEFF]! cursor-text transition-all`}
          />

          <h1
            className={`font-varien leading-[100%] tracking-[-3%] font-normal text-left md:text-right text-black lg:max-w-100 xl:max-w-110 text-[40px] sm:text-[68px] md:text-[48px] lg:text-[52px] xl:text-[72px]`}
          >
            Record and Share Seamlessly
          </h1>
          <p
            className={`font-medium text-lg md:text-base lg:text-2xl xl:text-3xl xl:leading-9 tracking-[-3%] text-left md:text-right text-black max-w-[80%]  lg:max-w-100 xl:max-w-108 md:mb-8 lg:mb-7`}
          >
            Built-in audio recording lets you capture conversations on the spot.
            share your notes or original audio in just a few taps.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AudioRecorder;
