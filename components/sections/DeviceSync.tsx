import Image from "next/image";
import type { ReactNode } from "react";
import { homeAssets } from "@/lib/newHomeAssets";

const { omniPendant, appleWatch } = homeAssets.devices;
const { phoneAppsGrid } = homeAssets.screens;

const DeviceCard = ({
  label,
  children,
}: {
  label: ReactNode;
  children: ReactNode;
}) => (
  <li className="relative h-[330px] w-[78%] shrink-0 snap-center overflow-hidden rounded-[24px] bg-[#F0FEFF] sm:w-[46%] md:h-[360px] lg:h-[400px] lg:w-auto lg:rounded-[28px]">
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
      className="flex w-full flex-col items-center px-3 pb-12 pt-10 sm:px-6 lg:px-8 lg:pb-20 lg:pt-16"
    >
      <h2
        id="device-sync-heading"
        className="mb-8 max-w-[900px] px-2 text-center font-varien text-[24px] uppercase leading-[1.05] tracking-[-0.03em] text-[#3E45FB] sm:text-[34px] lg:mb-12 lg:text-[44px]"
      >
        Capture &amp; sync across any device
      </h2>

      <div className="wrapper rounded-[26px] bg-black py-5 sm:rounded-[36px] sm:py-8 lg:rounded-[40px] lg:px-12 lg:py-14">
        {/* Swipeable row on small screens, 3-column grid on desktop */}
        <ul className="no-scrollbar flex snap-x snap-mandatory gap-3 overflow-x-auto px-5 sm:gap-4 sm:px-8 lg:grid lg:grid-cols-3 lg:gap-6 lg:overflow-visible lg:px-0">
          <DeviceCard
            label={
              <>
                OMNI
                <br />
                pendant
              </>
            }
          >
            <Image
              src={omniPendant}
              alt="OMNI pendant with a Notely Voice microphone button"
              className="absolute left-1/2 top-0 h-auto w-[92%] -translate-x-1/2"
            />
          </DeviceCard>

          <DeviceCard label="Apple Watch">
            <Image
              src={appleWatch}
              alt="Apple Watch running Notely Voice"
              className="absolute left-1/2 top-[24%] h-auto w-[52%] max-w-[190px] -translate-x-1/2"
            />
          </DeviceCard>

          <DeviceCard label="iPhone & Android">
            <Image
              src={phoneAppsGrid}
              alt="Phone home screen showing Notely Voice next to other apps"
              className="absolute left-[25%] top-[24%] h-auto w-[110%] max-w-none"
            />
          </DeviceCard>
        </ul>
      </div>
    </section>
  );
};

export default DeviceSync;
