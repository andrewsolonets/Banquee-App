import { ButtonM, ButtonTextM } from "../../components/Button";
import cardsDemo from "../../assets/cardsmain.png";
import tickSvg from "../../assets/TickIcon.js";
import Image from "next/image";
import { BadgeS } from "../../components/Badge";
import TickIcon from "../../assets/TickIcon.js";

export const MainSection1 = () => {
  return (
    <section className="flex flex-col items-center py-32 font-medium">
      <div className="flex items-center font-medium gap-12 justify-center">
        <div className="flex flex-col w-1/2 gap-8">
          <div className="flex gap-2 flex-col w-3/4">
            <h1 className="font-heading text-8xl tracking-tight leading-tight">
              Banking<br></br> starts here.
            </h1>
            <p className="text-2xl leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore.
            </p>
          </div>

          <div className="flex gap-5 text-lg gap-20">
            <div className="flex flex-col gap-4 ">
              <div className="flex items-center gap-4">
                <BadgeS>
                  <TickIcon className="w-5 fill-primary" />
                </BadgeS>
                <span>Instant Transfer</span>
              </div>
              <div className="flex items-center gap-4 ">
                <BadgeS>
                  <TickIcon className="w-5 fill-primary" />
                </BadgeS>
                <span>Saving accounts</span>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <BadgeS>
                  <TickIcon className="w-5 fill-primary" />
                </BadgeS>
                <span>Payments worldwide</span>
              </div>
              <div className="flex items-center gap-4">
                <BadgeS>
                  <TickIcon className="w-5 fill-primary" />
                </BadgeS>
                <span>100% mobile banking</span>
              </div>
            </div>
          </div>
          <div className="flex items-center grow-0 gap-8">
            <ButtonM>Open Account</ButtonM>
            <ButtonTextM>Compare Cards</ButtonTextM>
          </div>
        </div>
        <div className="flex flex-col ">
          <Image src={cardsDemo} alt="CardsMain" />
        </div>
      </div>
    </section>
  );
};
