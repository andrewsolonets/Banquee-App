import Image from "next/image";
import TickIcon from "../assets/TickIcon";
import { BadgeS } from "./Badge";
import screen1 from "../assets/app1.png";
import GstoreIcon from "../assets/GStoreIcon";
import AppleStoreIcon from "../assets/AppleStoreIcon";

export const Cta = () => {
  return (
    <section className="isolate flex w-full items-center justify-between gap-44 overflow-hidden pt-40  ">
      <div className="flex w-full gap-16 rounded-3xl bg-primary px-24 py-20">
        <div className="relative flex max-w-xl flex-col gap-8">
          <div className="flex flex-col gap-4 text-white">
            <h2 className="font-heading text-6xl leading-tight tracking-tight">
              One app. <br></br>One banking.
            </h2>
            <p className="text-xl leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br></br>{" "}
              sed do eiusmod tempor incididunt ut labore et.
            </p>
          </div>
          <div className="flex gap-20 text-lg text-white">
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
          <div className="flex gap-4">
            <GstoreIcon />
            <AppleStoreIcon />
          </div>
        </div>
        <div className="max-h-96">
          <Image src={screen1} alt="app demo" className="h-max" />
        </div>
      </div>
    </section>
  );
};
