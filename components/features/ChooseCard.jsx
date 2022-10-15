import CardImage from "../../assets/Card";
import Card1 from "../../assets/Card1";
import ImageCard2 from "../../assets/Card2";
import { AnimationContainer } from "../../core/AnimationContainer";
import { ChooseCardItem } from "../ChooseCardItem";

export const ChooseCards = () => {
  return (
    <section className="flex w-full flex-col flex-wrap items-center gap-24 pt-40">
      <div className="flex flex-col  items-center gap-4 text-center">
        <AnimationContainer>
          <h5 className="font-heading text-xl tracking-tight">Account</h5>
        </AnimationContainer>
        <AnimationContainer>
          <h2 className=" text-center font-heading text-[2.5rem] leading-tight tracking-tight sm:text-5xl  md:text-7xl">
            Perfect card<br></br> for your needs.
          </h2>
        </AnimationContainer>
        <AnimationContainer>
          <p className="text-center leading-relaxed  md:text-xl 2xl:text-2xl">
            Senectus et netus et malesuada fames ac turpis. <br></br>Sagittis
            vitae et leo duis ut diam.
          </p>
        </AnimationContainer>
      </div>
      <AnimationContainer className="flex flex-wrap justify-center gap-16 lg:flex-nowrap lg:justify-start">
        <ChooseCardItem
          image={<CardImage className="w-[19rem] 2xl:w-[22rem]" />}
          badge={true}
          title={"Basic"}
          badgeName={"Popular"}
          price={"Free"}
          descr={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
        />
        <ChooseCardItem
          image={<Card1 className="w-[19rem] 2xl:w-[22rem]" />}
          badge={false}
          title={"Premium"}
          price={"$5"}
          descr={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
        />
        <ChooseCardItem
          image={<ImageCard2 className="w-[19rem] 2xl:w-[22rem]" />}
          badge={false}
          title={"Gold"}
          price={"$10"}
          descr={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
        />
      </AnimationContainer>
    </section>
  );
};
