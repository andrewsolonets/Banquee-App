import Image from "next/image";
import TickIcon from "../../assets/TickIcon";

import screen1 from "../../assets/app1.png";
import { BadgeS } from "../../core/Badge";

export const FeatureContainer = ({ children }) => (
  <div className="flex h-auto min-h-screen w-full flex-col items-center justify-start gap-16 md:flex-row  md:items-start  md:justify-between md:gap-20 lg:gap-0">
    {children}
  </div>
);

export const FeatureLeft = ({
  headingSecondary,
  heading,
  textMain,
  children,
  progress,
}) => {
  let translateY = Math.max(0, 50 - progress * 3 * 50);
  if (progress > 0.85) translateY = Math.max(-50, -(progress - 0.85) * 2 * 50);

  return (
    <div
      className="relative flex h-[30vh] w-full max-w-xl flex-col gap-8 md:w-1/2 lg:h-auto"
      style={{ transform: `translateY(${translateY}px)` }}
    >
      <div className="flex flex-col items-center gap-4 md:items-start ">
        <h5 className="font-heading text-xl tracking-tight ">
          {headingSecondary}
        </h5>
        <h2 className="text-center font-heading text-[2.5rem] leading-tight tracking-tight sm:text-5xl md:text-start  ">
          {heading}
        </h2>
        <p className="text-center leading-relaxed md:text-left md:text-lg lg:text-xl 2xl:text-2xl">
          {textMain}
        </p>
      </div>

      <div className="flex flex-col items-center gap-3 md:items-start">
        <div className="flex items-center gap-4 md:text-xl 2xl:text-2xl">
          <BadgeS>
            <TickIcon className="w-5 fill-primary" />
          </BadgeS>
          <span>Malesuada Ipsum</span>
        </div>
        <div className="flex items-center gap-4 md:text-xl 2xl:text-2xl">
          <BadgeS>
            <TickIcon className="w-5 fill-primary" />
          </BadgeS>
          <span>Vestibulum</span>
        </div>
        <div className="flex items-center gap-4 md:text-xl 2xl:text-2xl">
          <BadgeS>
            <TickIcon className="w-5 fill-primary" />
          </BadgeS>
          <span>Parturient Lorem</span>
        </div>
      </div>
    </div>
  );
};

export const FeatureRight = ({ children, progress, picture }) => {
  let translateY = Math.max(-50, -(progress - 0.5) * 50);
  return (
    <div
      className="flex  h-screen  w-full justify-center md:w-1/2 lg:items-center"
      style={{ transform: `translateY(${translateY}px)` }}
    >
      <div className=" overflow-hidden md:h-auto lg:w-max ">
        {/* {children} */}
        <Image src={picture} alt="app demo" style={{ width: "50rem" }} />
      </div>
    </div>
  );
};

// export const WorkBackground = () => (
//   <div className="sticky top-0 flex min-h-screen w-full flex-col items-start justify-between lg:flex-row">
//     <div className="h-[30vh] w-1/2 bg-white lg:h-auto"></div>
//     <div className="h-[70vh] w-1/2 bg-black-bg lg:min-h-screen"></div>
//   </div>
// );
