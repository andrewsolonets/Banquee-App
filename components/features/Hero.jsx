import { AnimationContainer } from "../../core/AnimationContainer";
import { ButtonM, ButtonTextM } from "../../core/Button";
import { CardsFeatures } from "./CardsFeatures";

export const Hero = () => {
  return (
    <section className="relative flex flex-col items-center gap-32 overflow-hidden bg-primary-light px-5 pt-20 pb-[20rem] sm:px-0 md:pt-32 md:pb-[28rem]">
      <AnimationContainer className="flex flex-col items-center gap-8">
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="flex flex-col items-center justify-center text-6xl xl:gap-6 2xl:gap-2">
            <p className="text-xl">Features</p>
            <h1 className="font-heading text-[2.5rem] leading-tight tracking-tight sm:text-5xl md:text-7xl 2xl:text-8xl">
              All in one card.
            </h1>
          </div>
          <p className="text-center leading-relaxed md:text-xl 2xl:text-2xl">
            Senectus et netus et malesuada fames ac turpis.<br></br> Sagittis
            vitae et leo duis ut diam.
          </p>
        </div>
        <div className="flex grow-0 flex-wrap items-center justify-center gap-8 sm:justify-start">
          <ButtonM>Open Account</ButtonM>
          <ButtonTextM>Compare Cards</ButtonTextM>
        </div>
      </AnimationContainer>
      <CardsFeatures />
    </section>
  );
};
