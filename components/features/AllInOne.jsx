import Image from "next/image";
import screen3 from "../../assets/app3.png";
import { AnimationContainer } from "../../core/AnimationContainer";
import { LogosSmall } from "../../core/client-logos";
import { ShoppingItems } from "../ShoppingItems";
import { TransactionCard } from "../../core/TransactionCard";
import { transactions } from "../../utils/content";
import { CardsFeatures2 } from "./CardsFeatures";

export const AllInOneBank = () => {
  return (
    <section className="flex w-full flex-col items-center gap-24 pt-20 md:pt-40">
      <div className="flex flex-col gap-4 text-center md:text-left">
        <AnimationContainer>
          <h2 className="text-center font-heading text-[2.5rem] leading-tight tracking-tight sm:text-5xl md:text-start md:text-6xl ">
            All in one bank. Really.
          </h2>
        </AnimationContainer>
        <AnimationContainer>
          <p className="text-center leading-relaxed md:text-xl 2xl:text-2xl">
            Senectus et netus et malesuada fames ac turpis. <br></br> Sagittis
            vitae et leo duis ut diam.
          </p>
        </AnimationContainer>
      </div>
      <div className="flex w-full  flex-col flex-wrap items-center gap-8 lg:flex-nowrap">
        <div className="flex w-full flex-wrap  items-center justify-center gap-8 md:justify-between lg:flex-nowrap">
          <AnimationContainer className="flex  max-h-[31rem] w-full flex-col items-center gap-20 overflow-hidden rounded-3xl bg-white-bgMuted px-4 pt-16 md:px-24">
            <div className="flex flex-col items-center gap-2 text-center">
              <h3 className="text-center font-heading text-[2.5rem] leading-tight tracking-tight sm:text-3xl md:text-left md:text-4xl ">
                Statistics
              </h3>
              <p className="text-center leading-relaxed text-black-txt/50  md:text-lg 2xl:text-xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            <div className="flex w-3/4 justify-center md:w-max">
              <Image src={screen3} alt={"Screen"} />
            </div>
          </AnimationContainer>
          <AnimationContainer className="relative flex h-[25rem] w-full flex-col flex-wrap  items-center gap-20 overflow-hidden rounded-3xl bg-white-bgMuted px-4 pt-16  md:px-24 lg:h-[31rem] ">
            <div className="flex flex-col items-center gap-2 text-center">
              <h3 className="text-center font-heading text-[2.5rem] leading-tight tracking-tight sm:text-3xl  md:text-4xl ">
                Cards
              </h3>
              <p className="text-center leading-relaxed text-black-txt/50  md:text-lg 2xl:text-xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
              </p>
            </div>
            <CardsFeatures2 />
          </AnimationContainer>
        </div>
        <div className="flex w-full flex-wrap items-center justify-center gap-8  md:items-start md:justify-start lg:flex-nowrap">
          <AnimationContainer className=" flex max-h-[34.5rem] w-full flex-col   items-center gap-14 overflow-hidden  rounded-3xl bg-white-bgMuted px-2 pb-20 pt-14 sm:px-12 lg:w-1/3 lg:max-w-sm ">
            <div className="flex flex-col  gap-2">
              <h3 className="text-center font-heading text-[2.5rem] leading-tight tracking-tight sm:text-3xl  md:text-4xl ">
                Easy <br></br> integration
              </h3>
              <p className="text-center leading-relaxed text-black-txt/50  md:text-lg 2xl:text-xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            <div className="w-max">
              <LogosSmall />
            </div>
          </AnimationContainer>
          <AnimationContainer className="flex max-h-[34.5rem] w-full flex-col items-center gap-14 overflow-hidden rounded-3xl bg-white-bgMuted py-14  px-2 sm:px-12 lg:w-1/3 lg:max-w-sm">
            <div className="flex flex-col  gap-2">
              <h3 className="text-center font-heading text-[2.5rem] leading-tight tracking-tight sm:text-3xl  md:text-4xl ">
                Saving <br></br>accounts
              </h3>
              <p className="text-center leading-relaxed text-black-txt/50  md:text-lg 2xl:text-xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            <div className="w-max">
              <ShoppingItems
                special={"gap-6 items-start"}
                cardSize={"w-40 h-40"}
              />
            </div>
          </AnimationContainer>
          <AnimationContainer className="flex  max-h-[34.5rem] w-full   flex-col  items-center gap-14 overflow-hidden rounded-3xl bg-white-bgMuted  px-2 py-14 sm:px-12 lg:w-1/3 lg:max-w-sm">
            <div className="flex flex-col  gap-2">
              <h3 className="text-center font-heading text-[2.5rem] leading-tight tracking-tight sm:text-3xl  md:text-4xl ">
                Instant transactions
              </h3>
              <p className="text-center leading-relaxed text-black-txt/50  md:text-lg 2xl:text-xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            <div className="flex w-full flex-col gap-4">
              {transactions.map((el, i) => {
                if (i <= 2)
                  return (
                    <TransactionCard
                      icon={el.icon}
                      heading={el.heading}
                      descr={el.descr}
                      price={el.price}
                      key={i}
                      w={"w-full"}
                    />
                  );
              })}
            </div>
          </AnimationContainer>
        </div>
      </div>
    </section>
  );
};
