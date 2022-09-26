import Image from "next/image";
import TickIcon from "../assets/TickIcon";
import { BadgeS } from "../components/Badge";

import { Header } from "../components/Header";
import { TransactionCard } from "../components/transactionCard";

import { MainSection1 } from "./MainPage/MainSection1";
import { MainSection2 } from "./MainPage/MainSection2";

export default function Home() {
  return (
    <>
      <Header />
      <MainSection1 />
      <MainSection2 />
      <section className="flex py-32 bg-primary-light isolate px-60 font-medium">
        <div className="flex flex-col max-w-xl gap-8">
          <div className="flex flex-col gap-4 ">
            <h2 className="font-heading text-6xl tracking-tight leading-tight">
              Send & receive <br></br> money instantly
            </h2>
            <p className="text-xl leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br></br>{" "}
              sed do eiusmod tempor incididunt ut labore et.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-4 text-xl">
              <BadgeS bg="bg-primary">
                <TickIcon className="w-5 fill-white" />
              </BadgeS>
              <span>Malesuada Ipsum</span>
            </div>
            <div className="flex items-center gap-4 text-xl">
              <BadgeS bg="bg-primary">
                <TickIcon className="w-5 fill-white" />
              </BadgeS>
              <span>Vestibulum</span>
            </div>
            <div className="flex items-center gap-4 text-xl">
              <BadgeS bg="bg-primary">
                <TickIcon className="w-5 fill-white" />
              </BadgeS>
              <span>Parturient Lorem</span>
            </div>
          </div>
        </div>
        <div>
          <TransactionCard />
        </div>
      </section>
    </>
  );
}
