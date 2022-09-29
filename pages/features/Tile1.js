import Image from "next/image";
import TickIcon from "../../assets/TickIcon";
import { BadgeS } from "../../components/Badge";
import screen1 from "../../assets/app1.png";

export const Tile1 = () => {
  return (
    <section className="flex w-full items-start justify-between">
      <div className="relative flex w-1/2 max-w-xl flex-col gap-8 ">
        <div className="flex flex-col items-start gap-4 ">
          <h5 className="font-heading text-xl tracking-tight">Transactions</h5>
          <h2 className="font-heading text-6xl">
            Send & receive money instantly
          </h2>
          <p className="text-xl">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
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
