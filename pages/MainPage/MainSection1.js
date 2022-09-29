import { ButtonM, ButtonTextM } from "../../components/Button";
import cardsDemo from "../../assets/cardsmain.png";
import tickSvg from "../../assets/TickIcon.js";
import Image from "next/image";
import { BadgeS } from "../../components/Badge";
import TickIcon from "../../assets/TickIcon.js";
import { CardsMain } from "../../components/CardStack";
import { pinPoints } from "../../utils/content";

export const MainSection1 = () => {
  return (
    <section className="flex flex-col items-center py-20 px-40 pb-32 font-medium text-black-txt 2xl:px-60 ">
      <div className="flex w-full items-center justify-between font-medium ">
        <div className="flex w-1/2 flex-col gap-8">
          <div className="flex flex-col xl:gap-6 2xl:gap-2">
            <h1 className="font-heading leading-tight tracking-tight xl:text-7xl 2xl:text-8xl">
              Banking<br></br> starts here.
            </h1>
            <p className="leading-relaxed xl:text-xl 2xl:text-2xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore.
            </p>
          </div>

          <div className="flex gap-20 text-lg">
            <div className="flex flex-col gap-4 ">
              {pinPoints.map(
                (el, i) =>
                  el.col === 1 && (
                    <div className="flex items-center gap-4" key={i}>
                      <BadgeS>
                        <TickIcon className="w-5 fill-primary" />
                      </BadgeS>
                      <span>{el.text}</span>
                    </div>
                  )
              )}
            </div>
            <div className="flex flex-col gap-4">
              {pinPoints.map(
                (el, i) =>
                  el.col === 2 && (
                    <div className="flex items-center gap-4" key={i}>
                      <BadgeS>
                        <TickIcon className="w-5 fill-primary" />
                      </BadgeS>
                      <span>{el.text}</span>
                    </div>
                  )
              )}
            </div>
          </div>
          <div className="flex grow-0 items-center gap-8">
            <ButtonM>Open Account</ButtonM>
            <ButtonTextM>Compare Cards</ButtonTextM>
          </div>
        </div>
        <CardsMain />
      </div>
    </section>
  );
};
