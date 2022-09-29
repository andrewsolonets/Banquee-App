import TickIcon from "../../assets/TickIcon";
import { BadgeS } from "../../components/Badge";
import { TransactionCard } from "../../components/TransactionCard";
import { transactions } from "../../utils/content";

export const MainSection3 = () => {
  return (
    <section className="isolate flex items-center justify-between gap-44 overflow-hidden bg-primary-light py-32 px-40 font-medium text-black-txt 2xl:px-60">
      <div className="relative flex max-w-xl flex-col gap-8">
        <div className="flex flex-col gap-4 ">
          <h2 className="font-heading text-6xl leading-tight tracking-tight">
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
