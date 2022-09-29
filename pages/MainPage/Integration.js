import TickIcon from "../../assets/TickIcon";
import { BadgeL } from "../../components/Badge";
import ClientLogos from "../../components/client-logos";

export const Integration = () => {
  return (
    <section className="flex flex-col items-center gap-16 overflow-hidden border-b border-grey px-40 py-40 font-medium 2xl:px-60">
      <div className="flex w-full flex-col gap-4 overflow-hidden">
        <ClientLogos />
      </div>

      <div className="flex items-center gap-40 overflow-hidden font-medium">
        <div className="flex w-1/2 flex-col items-start gap-4 ">
          <h5 className="font-heading text-xl leading-tight tracking-tight">
            Tools
          </h5>
          <h2 className="font-heading text-6xl">
            Seemless<br></br> integration
          </h2>
          <p className="text-xl">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit.
          </p>
        </div>
        <div className="flex w-max flex-col gap-3">
          <div className="flex items-center gap-4 text-xl">
            <BadgeL>
              <TickIcon className="w-6 fill-primary" />
            </BadgeL>
            <span>Malesuada Ipsum</span>
          </div>
          <div className="flex items-center gap-4 text-xl">
            <BadgeL>
              <TickIcon className="w-6 fill-primary" />
            </BadgeL>
            <span>Vestibulum</span>
          </div>
          <div className="flex items-center gap-4 text-xl">
            <BadgeL>
              <TickIcon className="w-6 fill-primary" />
            </BadgeL>
            <span>Parturient Lorem</span>
          </div>
        </div>
      </div>
    </section>
  );
};
