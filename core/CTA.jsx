import Image from "next/image";
import TickIcon from "../assets/TickIcon";
import { BadgeS } from "./Badge";
import screen1 from "../assets/app1.png";
import GstoreIcon from "../assets/GStoreIcon";
import AppleStoreIcon from "../assets/AppleStoreIcon";

export const Cta = () => {
  return (
    <section className="isolate flex w-full flex-col items-center justify-between gap-44 overflow-hidden pt-40 lg:flex-row  ">
      <div className="flex w-full flex-col items-center gap-16 rounded-3xl bg-primary px-6 py-8 md:items-start md:py-20 md:px-24 lg:flex-row">
        <div className="relative flex max-w-xl flex-col gap-8">
          <div className="flex flex-col gap-4 text-center text-white md:text-left">
            <h2 className=" text-center font-heading text-[2.5rem] leading-tight tracking-tight sm:text-5xl md:text-left lg:text-6xl 2xl:text-7xl ">
              One app. <br></br>One banking.
            </h2>
            <p className="text-lg leading-relaxed md:text-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br></br>{" "}
              sed do eiusmod tempor incididunt ut labore et.
            </p>
          </div>
          <div className="flex flex-col items-center gap-4 text-white md:flex-row md:items-start md:gap-20 md:text-lg">
            <div className="flex flex-col gap-4 ">
              <div className="flex items-center gap-4">
                <BadgeS bg="bg-white/20">
                  <TickIcon className="w-5 fill-white" />
                </BadgeS>
                <span>Instant Transfer</span>
              </div>
              <div className="flex items-center gap-4 ">
                <BadgeS bg="bg-white/20">
                  <TickIcon className="w-5 fill-white" />
                </BadgeS>
                <span>Saving accounts</span>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <BadgeS bg="bg-white/20">
                  <TickIcon className="w-5 fill-white" />
                </BadgeS>
                <span>Payments worldwide</span>
              </div>
              <div className="flex items-center gap-4">
                <BadgeS bg="bg-white/20">
                  <TickIcon className="w-5 fill-white" />
                </BadgeS>
                <span>100% mobile banking</span>
              </div>
            </div>
          </div>
          <div className="flex w-full flex-wrap justify-center gap-4 md:justify-start">
            <GstoreIcon />
            <AppleStoreIcon />
          </div>
        </div>
        <div className="max-h-96 ">
          <Image src={screen1} alt="app demo" className="h-max" />
        </div>
      </div>
    </section>
  );
};
