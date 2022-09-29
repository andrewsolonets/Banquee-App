import { ButtonInvertM, ButtonM, ButtonTextM } from "../../components/Button";
import { CardStack } from "../../components/CardStack";

export const PerfectCard = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-14 px-40 pt-40 font-medium text-black-txt 2xl:px-60">
      <div className="flex flex-col items-center gap-4 text-center">
        <h5 className="font-heading text-xl tracking-tight">Account</h5>
        <h2 className=" font-heading text-6xl leading-tight tracking-tight">
          Perfect card<br></br> for your needs.
        </h2>
        <p className="text-xl">
          Senectus et netus et malesuada fames ac turpis. <br></br>Sagittis
          vitae et leo duis ut diam.
        </p>
      </div>
      <CardStack />
      <div className="flex">
        <div className="box-border flex grow-0 items-center gap-8">
          <ButtonM>Open Account</ButtonM>
          <ButtonInvertM>Compare Cards</ButtonInvertM>
        </div>
      </div>
    </section>
  );
};
