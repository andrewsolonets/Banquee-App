import Image from "next/image";
import screen3 from "../../assets/app3.png";

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
        <div className="flex items-center justify-between gap-8">
          <div className="flex  max-h-[31rem] flex-col items-center gap-20 overflow-hidden rounded-3xl bg-white-bgMuted px-24 pt-16">
            <div className="flex flex-col items-center gap-2">
              <h3 className="font-heading text-4xl leading-tight tracking-tight">
                Statistics
              </h3>
              <p className="text-lg text-black-txt/50">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
              </p>
            </div>
            <div className="w-max">
              <Image src={screen3} alt={"Screen"} />
            </div>
          </div>
          <div className="flex  max-h-[31rem] flex-col items-center gap-20 overflow-hidden rounded-3xl bg-white-bgMuted px-24 pt-16">
            <div className="flex flex-col items-center gap-2">
              <h3 className="font-heading text-4xl leading-tight tracking-tight">
                Cards
              </h3>
              <p className="text-lg text-black-txt/50">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
              </p>
            </div>
            <div className="w-max">
              <Image src={screen3} alt={"Screen"} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
