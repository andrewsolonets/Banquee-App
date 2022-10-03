import { CardsCompare } from "../../components/CardStack";

export const HeroCompare = () => {
  return (
    <section className="relative flex  max-h-[26rem] items-start justify-between overflow-hidden bg-primary-light px-36 py-32">
      <div className="flex flex-col items-center gap-8">
        <div className="flex flex-col items-center justify-start gap-4">
          <div className="flex flex-col items-start justify-center text-6xl xl:gap-6 2xl:gap-2">
            <p className="text-xl">Compare Cards</p>
            <h1 className="font-heading leading-tight tracking-tight xl:text-7xl">
              The ideal <br></br>card for you
            </h1>
          </div>
        </div>
      </div>
      <CardsCompare />
    </section>
  );
};
