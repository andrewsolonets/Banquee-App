import SupportIcon from "../assets/SupportIcon";
import { Accordion } from "./Accordion";
import { BadgeL } from "./Badge";

export const HelpSection = ({ heading, items, icon, id }) => {
  return (
    <div
      className="flex w-full flex-col items-center gap-16 md:items-start"
      id={id}
    >
      <div className="flex items-center gap-4">
        <BadgeL>{icon}</BadgeL>
        <h4 className=" text-center font-heading text-[2.5rem] leading-tight tracking-tight sm:text-5xl md:text-left md:text-7xl ">
          {heading}
        </h4>
      </div>
      <div className="flex w-full flex-col gap-8 ">
        {items.map((el, i) => (
          <Accordion title={el.title} content={el.content} key={i} />
        ))}
      </div>
    </div>
  );
};
