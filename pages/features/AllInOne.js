import Image from "next/image";
import screen3 from "../../assets/app3.png";
import ClientLogos, { LogosSmall } from "../../components/client-logos";
import { NotificationCard } from "../../components/NotificationCard";
import { ShoppingItems } from "../../components/ShoppingItems";
import { TransactionCard } from "../../components/TransactionCard";
import { transactions } from "../../utils/content";
import { CardsFeatures2 } from "./CardsFeatures";

export const AllInOneBank = () => {
  return (
    <section className="flex w-full flex-col items-center gap-24 pt-40">
      <div className="flex flex-col gap-4 text-center">
        <h2 className="font-heading text-6xl leading-tight tracking-tight">
          All in one bank. Really.
        </h2>
        <p className="text-xl">
          Senectus et netus et malesuada fames ac turpis. <br></br> Sagittis
          vitae et leo duis ut diam.
        </p>
      </div>
      <div className="flex flex-col items-center gap-8">
        <div className="flex w-full items-center justify-between gap-8">
          <div className="flex  max-h-[31rem] flex-col items-center gap-20 overflow-hidden rounded-3xl bg-white-bgMuted px-24 pt-16">
            <div className="flex flex-col items-center gap-2 text-center">
              <h3 className="font-heading text-4xl leading-tight tracking-tight">
                Statistics
              </h3>
              <p className="text-lg text-black-txt/50">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            <div className="w-max">
              <Image src={screen3} alt={"Screen"} />
            </div>
          </div>
          <div className="relative flex h-[31rem]  flex-col items-center gap-20 overflow-hidden rounded-3xl bg-white-bgMuted px-24 pt-16 ">
            <div className="flex flex-col items-center gap-2 text-center">
              <h3 className="font-heading text-4xl leading-tight tracking-tight">
                Cards
              </h3>
              <p className="text-lg text-black-txt/50">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
              </p>
            </div>
            <CardsFeatures2 />
          </div>
        </div>
        <div className="flex items-start gap-8">
          <div className="flex max-h-[34.5rem]   w-1/3 max-w-sm flex-col items-center gap-14 overflow-hidden rounded-3xl bg-white-bgMuted px-12 pb-20 pt-14">
            <div className="flex flex-col  gap-2">
              <h3 className="font-heading text-4xl leading-tight tracking-tight">
                Easy <br></br> integration
              </h3>
              <p className="text-lg text-black-txt/50">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            <div className="w-max">
              <LogosSmall />
            </div>
          </div>
          <div className="flex max-h-[34.5rem]  w-1/3 max-w-sm flex-col items-center gap-14 overflow-hidden rounded-3xl bg-white-bgMuted px-12 py-14">
            <div className="flex flex-col  gap-2">
              <h3 className="font-heading text-4xl leading-tight tracking-tight">
                Saving <br></br>accounts
              </h3>
              <p className="text-lg text-black-txt/50">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            <div className="w-max">
              <ShoppingItems
                special={"gap-6 items-start"}
                cardSize={"w-40 h-40"}
              />
            </div>
          </div>
          <div className="flex  max-h-[34.5rem]  w-1/3  max-w-sm flex-col items-center gap-14 overflow-hidden rounded-3xl bg-white-bgMuted px-12 py-14">
            <div className="flex flex-col  gap-2">
              <h3 className="font-heading text-4xl leading-tight tracking-tight">
                Instant transactions
              </h3>
              <p className="text-lg text-black-txt/50">
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
          </div>
        </div>
      </div>
    </section>
  );
};
