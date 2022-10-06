import { ButtonInvertM, ButtonM, ButtonTextM } from "../../components/Button";
import { CardStack } from "../../components/CardStack";

export const PerfectCard = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-4 pt-20 font-medium text-black-txt md:gap-14 md:pt-40 ">
      <div className="flex flex-col items-center gap-4 text-center">
        <h5 className="font-heading text-xl tracking-tight">Account</h5>
        <h2 className=" text-center font-heading text-[2.5rem] leading-tight tracking-tight sm:text-5xl  lg:text-6xl 2xl:text-7xl ">
          Perfect card<br></br> for your needs.
        </h2>
        <p className="leading-relaxed md:text-xl 2xl:text-2xl">
          Senectus et netus et malesuada fames ac turpis. <br></br>Sagittis
          vitae et leo duis ut diam.
        </p>
      </div>
      <CardStack />
      <div className="flex">
        <div className="box-border flex grow-0 flex-col items-center gap-8 sm:flex-row">
          <ButtonM>Open Account</ButtonM>
          <ButtonInvertM>Compare Cards</ButtonInvertM>
        </div>
      </div>
    </section>
  );
};
