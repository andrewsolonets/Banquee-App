import Image from "next/image";
import { Card } from "../../components/Card";
import screen1 from "../../assets/app1.png";

import { cardContent } from "../../utils/content";

export const MainSection2 = () => {
  return (
    <section className="flex flex-col items-center justify-center py-32 px-40 font-medium text-black-txt 2xl:px-60">
      <div className="flex w-full items-start justify-between ">
        <div className="flex flex-col gap-16">
          <h2 className="font-heading text-6xl leading-tight tracking-tight">
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
