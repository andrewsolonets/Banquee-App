import Image from "next/image";
import TickIcon from "../../assets/TickIcon";
import { BadgeS } from "../../components/Badge";
import screen1 from "../../assets/app1.png";

export const FeatureContainer = ({ children }) => (
  <div className="flex h-auto min-h-screen w-full flex-col items-start justify-between lg:flex-row">
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
      className="relative flex h-[30vh] w-full max-w-xl flex-col gap-8 lg:h-auto lg:w-1/2"
      style={{ transform: `translateY(${translateY}px)` }}
    >
      <div className="flex flex-col items-start gap-4 ">
        <h5 className="font-heading text-xl tracking-tight ">
          {headingSecondary}
        </h5>
        <h2 className="font-heading text-6xl leading-tight tracking-tight">
          {heading}
        </h2>
        <p className="text-xl">{textMain}</p>
      </div>

      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-4 text-xl">
          <BadgeS>
            <TickIcon className="w-5 fill-primary" />
          </BadgeS>
          <span>Malesuada Ipsum</span>
        </div>
        <div className="flex items-center gap-4 text-xl">
          <BadgeS>
            <TickIcon className="w-5 fill-primary" />
          </BadgeS>
          <span>Vestibulum</span>
        </div>
        <div className="flex items-center gap-4 text-xl">
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
      className="flex h-screen  w-1/2 justify-center lg:items-center"
      style={{ transform: `translateY(${translateY}px)` }}
    >
      <div className="lg:w-max ">
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

export const Feature = ({ headingSecondary, heading, textMain, img }) => {
  return (
    <section className="flex w-full items-start justify-between">
      <div className="relative flex w-1/2 max-w-xl flex-col gap-8 ">
        <div className="flex flex-col items-start gap-4 ">
          <h5 className="font-heading text-xl tracking-tight">
            {headingSecondary}
          </h5>
          <h2 className="font-heading text-6xl">{heading}</h2>
          <p className="text-xl">{textMain}</p>
        </div>

        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-4 text-xl">
            <BadgeS>
              <TickIcon className="w-5 fill-primary" />
            </BadgeS>
            <span>Malesuada Ipsum</span>
          </div>
          <div className="flex items-center gap-4 text-xl">
            <BadgeS>
              <TickIcon className="w-5 fill-primary" />
            </BadgeS>
            <span>Vestibulum</span>
          </div>
          <div className="flex items-center gap-4 text-xl">
            <BadgeS>
              <TickIcon className="w-5 fill-primary" />
            </BadgeS>
            <span>Parturient Lorem</span>
          </div>
        </div>
      </div>
      <Image src={screen1} alt="app demo" />
    </section>
  );
};
