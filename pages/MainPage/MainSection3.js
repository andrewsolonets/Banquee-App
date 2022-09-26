import AmazonIcon from "../../assets/AmazonIcon";
import AppleIcon from "../../assets/Apple";
import FacebookIcon from "../../assets/FacebookIcon";
import TickIcon from "../../assets/TickIcon";
import TwitterIcon from "../../assets/TwitterIcon";
import { BadgeS } from "../../components/Badge";
import { TransactionCard } from "../../components/TransactionCard";

export const MainSection3 = () => {
  return (
    <section className="flex py-32 px-40 2xl:px-60 bg-primary-light isolate items-center justify-between gap-44 font-medium overflow-hidden">
      <div className="relative flex flex-col max-w-xl gap-8">
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
      <div className="flex flex-col gap-4 max-h-96 ">
        <TransactionCard
          icon={<AppleIcon className="w-6 fill-white" />}
          heading={"Apple"}
          descr={"Macbook"}
          price={"-999€"}
        />
        <TransactionCard
          icon={<AmazonIcon className="w-6 fill-white" />}
          heading={"Amazon"}
          descr={"Electronics"}
          price={"-49€"}
        />
        <TransactionCard
          icon={<FacebookIcon className="w-6 fill-white" />}
          heading={"Facebook"}
          descr={"Ads"}
          price={"-29€"}
        />
        <TransactionCard
          icon={<TwitterIcon className="w-6 fill-white" />}
          heading={"Twitter"}
          descr={"Ads"}
          price={"-149€"}
        />
        <TransactionCard
          icon={<AppleIcon className="w-6 fill-white" />}
          heading={"Apple"}
          descr={"Cable"}
          price={"-14€"}
        />
        <TransactionCard
          icon={<AppleIcon className="w-6 fill-white" />}
          heading={"Apple"}
          descr={"Macbook"}
          price={"-250€"}
        />
      </div>
    </section>
  );
};
