import Image from "next/image";
import { Card } from "../../components/Card";
import screen1 from "../../assets/app1.png";

import { cardContent } from "../../utils/content";

export const MainSection2 = () => {
  return (
    <section className="flex flex-col items-center justify-center py-32 font-medium text-black-txt ">
      <div className="flex w-full flex-col-reverse items-center justify-between gap-7 md:flex-row md:items-start md:gap-0 ">
        <div className="flex w-full flex-col gap-16 md:w-1/2">
          <h2 className="text-center font-heading text-[2.5rem] leading-tight tracking-tight sm:text-5xl md:text-left md:text-7xl ">
            One app.<br></br> One banking.
          </h2>
          <div className="flex flex-col gap-8">
            <div className="flex gap-8">
              {cardContent.map(
                (el, i) =>
                  el.row === 1 && (
                    <Card
                      icon={el.icon}
                      heading={el.heading}
                      text={el.text}
                      key={i}
                    />
                  )
              )}
            </div>
            <div className="flex gap-8">
              {cardContent.map(
                (el, i) =>
                  el.row === 2 && (
                    <Card
                      icon={el.icon}
                      heading={el.heading}
                      text={el.text}
                      key={i}
                    />
                  )
              )}
            </div>
            <div className="flex gap-8">
              {cardContent.map(
                (el, i) =>
                  el.row === 3 && (
                    <Card
                      icon={el.icon}
                      heading={el.heading}
                      text={el.text}
                      key={i}
                    />
                  )
              )}
            </div>
          </div>
        </div>
        <Image src={screen1} alt="app demo" />
      </div>
    </section>
  );
};
