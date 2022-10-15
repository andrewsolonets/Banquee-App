import SupportIcon from "../assets/SupportIcon";
import { Accordion } from "../core/Accordion";
import { AnimationContainer } from "../core/AnimationContainer";
import { BadgeL } from "../core/Badge";

export const HelpSection = ({ heading, items, icon, id }) => {
  return (
    <AnimationContainer
      className="flex w-full flex-col  items-center gap-10 md:items-start lg:gap-16"
      id={id}
    >
      <div className="flex w-full items-center  gap-4 lg:justify-start">
        <BadgeL>{icon}</BadgeL>
        <h4 className=" font-heading text-2xl leading-tight tracking-tight  md:text-3xl  ">
          {heading}
        </h4>
      </div>
      <div className="flex w-full flex-col gap-8 ">
        {items.map((el, i) => (
          <Accordion title={el.title} content={el.content} key={i} />
        ))}
      </div>
    </AnimationContainer>
  );
};
