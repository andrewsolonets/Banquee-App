import TickIcon from "../../assets/TickIcon";
import { AnimationContainer } from "../../core/AnimationContainer";
import { BadgeL } from "../../core/Badge";
import ClientLogos from "../../core/client-logos";

export const Integration = () => {
  return (
    <section className="flex flex-col items-center gap-16 overflow-hidden py-20  font-medium md:py-40 ">
      <div className="flex w-full flex-col gap-4 overflow-hidden">
        <ClientLogos />
      </div>

      <div className="flex flex-col items-center gap-16 overflow-hidden font-medium md:flex-row md:gap-40">
        <AnimationContainer className="flex w-full flex-col items-center gap-4 md:w-1/2 md:items-start ">
          <AnimationContainer>
            <h5 className="font-heading text-xl leading-tight tracking-tight">
              Tools
            </h5>
          </AnimationContainer>
          <AnimationContainer>
            <h2 className="text-center font-heading text-[2.5rem] leading-tight tracking-tight sm:text-5xl md:text-left lg:text-6xl 2xl:text-7xl">
              Seemless<br></br> integration
            </h2>
          </AnimationContainer>

          <p className="text-center md:text-left md:text-xl 2xl:text-2xl">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit.
          </p>
        </AnimationContainer>
        <div className="flex w-max flex-col gap-3">
          <AnimationContainer className="flex items-center gap-4 md:text-xl 2xl:text-2xl">
            <BadgeL>
              <TickIcon className="w-6 fill-primary" />
            </BadgeL>
            <span>Malesuada Ipsum</span>
          </AnimationContainer>
          <AnimationContainer className="flex items-center gap-4 md:text-xl 2xl:text-2xl">
            <BadgeL>
              <TickIcon className="w-6 fill-primary" />
            </BadgeL>
            <span>Vestibulum</span>
          </AnimationContainer>
          <AnimationContainer className="flex items-center gap-4 md:text-xl 2xl:text-2xl">
            <BadgeL>
              <TickIcon className="w-6 fill-primary" />
            </BadgeL>
            <span>Parturient Lorem</span>
          </AnimationContainer>
        </div>
      </div>
    </section>
  );
};
