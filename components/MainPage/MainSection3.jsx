import TickIcon from "../../assets/TickIcon";
import { AnimationContainer } from "../../core/AnimationContainer";
import { BadgeS } from "../../core/Badge";
import { TransactionCard } from "../../core/TransactionCard";
import { transactions } from "../../utils/content";

export const MainSection3 = () => {
  return (
    <section className=" isolate flex flex-col items-center justify-between gap-14 overflow-hidden bg-primary-light  py-32  px-5 font-medium text-black-txt md:px-20 lg:flex-row lg:gap-44 2xl:px-60 ">
      <div className="relative flex max-w-xl flex-col items-center gap-8 lg:items-start">
        <AnimationContainer className="flex flex-col gap-4 ">
          <h2 className="text-center font-heading text-[2.5rem] leading-tight tracking-tight  sm:text-5xl lg:text-left lg:text-6xl 2xl:text-7xl ">
            Send & receive <br></br> money instantly
          </h2>
          <p className="text-center  leading-relaxed md:text-lg  lg:text-left 2xl:text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br></br>{" "}
            sed do eiusmod tempor incididunt ut labore et.
          </p>
        </AnimationContainer>

        <div className="flex flex-col gap-3">
          <AnimationContainer className="flex items-center gap-4 md:text-xl 2xl:text-2xl">
            <BadgeS bg="bg-primary">
              <TickIcon className="w-5 fill-white" />
            </BadgeS>
            <span>Malesuada Ipsum</span>
          </AnimationContainer>
          <AnimationContainer className="flex items-center gap-4 md:text-xl 2xl:text-2xl">
            <BadgeS bg="bg-primary">
              <TickIcon className="w-5 fill-white" />
            </BadgeS>
            <span>Vestibulum</span>
          </AnimationContainer>
          <AnimationContainer className="flex items-center gap-4 md:text-xl 2xl:text-2xl">
            <BadgeS bg="bg-primary">
              <TickIcon className="w-5 fill-white" />
            </BadgeS>
            <span>Parturient Lorem</span>
          </AnimationContainer>
        </div>
      </div>
      <div className="flex max-h-96 w-full flex-col gap-4 sm:w-fit ">
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
