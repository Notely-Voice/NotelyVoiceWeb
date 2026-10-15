import Image from "next/image";
import type { ReactNode } from "react";
import { homeAssets } from "@/lib/newHomeAssets";

const { wearablePendant, appleWatch } = homeAssets.devices;
const { phoneAppsGrid } = homeAssets.screens;

const DeviceCard = ({
  label,
  children,
}: {
  label: ReactNode;
  children: ReactNode;
}) => (
  <li className="relative h-[340px] w-[78%] shrink-0 snap-center overflow-hidden rounded-[24px] bg-[#F0FEFF] sm:w-[46%] sm:h-[360px] md:h-[360px] lg:h-[400px] xl:h-[460px] lg:w-auto lg:rounded-[28px]">
    <h3 className="relative z-10 px-4 pt-6 text-center text-[22px] font-medium leading-[0.95] tracking-[-0.02em] text-black sm:text-2xl lg:pt-7 lg:text-[28px]">
      {label}
    </h3>
    {children}
  </li>
);

const DeviceSync = () => {
  return (
    <section
      aria-labelledby="device-sync-heading"
      className="flex w-full flex-col items-center px-4 pb-12 pt-10 sm:px-6 xl:px-9 lg:pb-20 lg:pt-16"
    >
      <h2
        id="device-sync-heading"
        className="mb-8 max-w-[900px] px-2 text-center font-varien text-[24px] uppercase leading-[1.05] tracking-[-0.03em] text-[#3E45FB] sm:text-[34px] lg:mb-12 lg:text-[44px]"
      >
        Capture &amp; sync across any device
      </h2>

      <div className="overflow-hidden wrapper rounded-[26px] bg-black px-5 py-5 sm:rounded-[36px] sm:px-8 sm:py-8 lg:rounded-[40px] lg:px-12 lg:py-14">
        {/* Swipeable row on small screens, 3-column grid on desktop */}
        <ul className="no-scrollbar flex snap-x snap-mandatory gap-3 overflow-x-auto sm:gap-4 lg:grid lg:grid-cols-3 lg:gap-6 lg:overflow-visible lg:px-0">
          <DeviceCard
            label={
              <>
                Wearable
                <br />
                pendant
              </>
            }
          >
            <Image
              src={wearablePendant}
              alt="Wearable pendant with a Notely Voice microphone button"
              className="absolute left-1/2 -top-[1%] md:-top-[10%] lg:-top-[2%] h-auto xl:h-[90%] w-full -translate-x-1/2"
            />
          </DeviceCard>

          <DeviceCard label="Apple Watch">
            <Image
              src={appleWatch}
              alt="Apple Watch running Notely Voice"
              className="absolute left-1/2 top-[20%] h-auto w-[50%] max-w-[180px] -translate-x-1/2"
            />
          </DeviceCard>

          <DeviceCard label="iPhone & Android">
            <Image
              src={phoneAppsGrid}
              alt="Phone home screen showing Notely Voice next to other apps"
              className="absolute left-[25%] md:left-[40%] lg:left-[20%] -bottom-[2%] h-auto w-[80%] md:w-[60%] lg:w-[80%] max-w-none"
            />
          </DeviceCard>
        </ul>
      </div>
    </section>
  );
};

export default DeviceSync;
