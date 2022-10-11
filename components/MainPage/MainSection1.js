import TickIcon from "../../assets/TickIcon";
import { BadgeS } from "../../core/Badge";
import { ButtonM, ButtonTextM } from "../../core/Button";
import { pinPoints } from "../../utils/content";
import { CardsMain } from "../CardStack";

export const MainSection1 = () => {
  return (
    <section className="flex w-full  flex-col items-center  font-medium text-black-txt md:py-20 md:pb-32  ">
      <div className="flex w-full flex-col-reverse items-center justify-between font-medium md:flex-row">
        <div className="flex w-full flex-col items-center gap-8 md:w-1/2 md:items-start">
          <div className="flex flex-col gap-4 text-center md:text-left xl:gap-6 2xl:gap-2">
            <h1 className="font-heading text-[2.5rem] leading-tight tracking-tight sm:text-5xl md:text-7xl 2xl:text-8xl">
              Banking<br></br> starts here.
            </h1>
            <p className="leading-relaxed md:text-xl 2xl:text-2xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore.
            </p>
          </div>

          <div className="flex w-fit flex-col justify-center gap-6 text-lg md:justify-start lg:flex-row  lg:gap-20">
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
          <div className="flex grow-0 flex-col items-center gap-8 md:flex-row">
            <ButtonM>Open Account</ButtonM>
            <ButtonTextM>Compare Cards</ButtonTextM>
          </div>
        </div>
        <CardsMain />
      </div>
    </section>
  );
};
