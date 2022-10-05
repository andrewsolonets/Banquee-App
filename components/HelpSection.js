import SupportIcon from "../assets/SupportIcon";
import { Accordion } from "./Accordion";
import { BadgeL } from "./Badge";

export const HelpSection = ({ heading, items, icon, id }) => {
  return (
    <div className="flex w-full flex-col items-start gap-16" id={id}>
      <div className="flex items-center gap-4">
        <BadgeL>{icon}</BadgeL>
        <h4 className="font-heading text-2xl leading-tight tracking-tight">
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
