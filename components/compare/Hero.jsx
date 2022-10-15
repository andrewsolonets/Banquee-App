import { CardsCompare } from "../CardStack";

export const HeroCompare = () => {
  return (
    <section className="relative flex  max-h-[26rem] items-start justify-between overflow-hidden bg-primary-light px-5 py-32 sm:px-36">
      <div className="flex flex-col items-center gap-8">
        <div className="flex flex-col items-center justify-start gap-4">
          <div className="flex  flex-col items-center justify-center text-6xl lg:items-start xl:gap-6 2xl:gap-2">
            <p className="text-center leading-relaxed md:text-xl 2xl:text-2xl">
              Compare Cards
            </p>
            <h1 className="font-heading  text-[2.5rem] leading-tight tracking-tight sm:text-5xl md:text-7xl">
              The ideal <br></br>card for you
            </h1>
          </div>
        </div>
      </div>
      <CardsCompare />
    </section>
  );
};
