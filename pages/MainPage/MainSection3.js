import TickIcon from "../../assets/TickIcon";
import { BadgeS } from "../../components/Badge";
import { TransactionCard } from "../../components/TransactionCard";
import { transactions } from "../../utils/content";

export const MainSection3 = () => {
  return (
    <section className=" isolate flex flex-col items-center justify-between gap-20 overflow-hidden bg-primary-light  py-32  px-5 font-medium text-black-txt md:flex-row md:gap-44 md:px-20 2xl:px-60 ">
      <div className="relative flex max-w-xl flex-col gap-8">
        <div className="flex flex-col gap-4 ">
          <h2 className="text-center font-heading text-[2.5rem] leading-tight tracking-tight sm:text-5xl md:text-left md:text-7xl ">
            Send & receive <br></br> money instantly
          </h2>
          <p className="leading-relaxed md:text-xl 2xl:text-2xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br></br>{" "}
            sed do eiusmod tempor incididunt ut labore et.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-4 md:text-xl 2xl:text-2xl">
            <BadgeS bg="bg-primary">
              <TickIcon className="w-5 fill-white" />
            </BadgeS>
            <span>Malesuada Ipsum</span>
          </div>
          <div className="flex items-center gap-4 md:text-xl 2xl:text-2xl">
            <BadgeS bg="bg-primary">
              <TickIcon className="w-5 fill-white" />
            </BadgeS>
            <span>Vestibulum</span>
          </div>
          <div className="flex items-center gap-4 md:text-xl 2xl:text-2xl">
            <BadgeS bg="bg-primary">
              <TickIcon className="w-5 fill-white" />
            </BadgeS>
            <span>Parturient Lorem</span>
          </div>
        </div>
      </div>
      <div className="flex max-h-96 flex-col gap-4 ">
        {transactions.map((el, i) => (
          <TransactionCard
            icon={el.icon}
            heading={el.heading}
            descr={el.descr}
            price={el.price}
            key={i}
          />
        ))}
      </div>
    </section>
  );
};
