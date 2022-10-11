import Image from "next/image";
import { Card } from "../../core/Card";
import screen1 from "../../assets/app1.png";

import { cardContent } from "../../utils/content";
import { AnimationContainer } from "../../core/AnimationContainer";

export const MainSection2 = () => {
  return (
    <section className="flex flex-col items-center justify-center py-32 font-medium text-black-txt ">
      <div className="flex w-full flex-col-reverse items-center justify-between gap-7 md:flex-row md:items-start md:gap-0 ">
        <div className="flex w-full flex-col gap-16 md:w-1/2">
          <AnimationContainer>
            <h2 className="text-center font-heading text-[2.5rem] leading-tight tracking-tight sm:text-5xl md:text-left lg:text-6xl 2xl:text-7xl ">
              One app.<br></br> One banking.
            </h2>
          </AnimationContainer>
          <div className="grid w-full grid-cols-1 gap-8 lg:w-5/6 lg:grid-cols-2">
            {cardContent.map((el, i) => (
              <Card
                icon={el.icon}
                heading={el.heading}
                text={el.text}
                key={i}
              />
            ))}
          </div>
        </div>
        <AnimationContainer className="w-[18rem] lg:w-max " delay={0.1}>
          <Image src={screen1} alt="app demo" />
        </AnimationContainer>
      </div>
    </section>
  );
};
