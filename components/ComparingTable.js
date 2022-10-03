import CardSmall from "../assets/CardSmall";
import PhoneIcon from "../assets/PhoneIcon";
import TickIcon from "../assets/TickIcon";
import { compareTable1 } from "../utils/content";
import { BadgeL, BadgeS } from "./Badge";
import { TableRow } from "./TableRow";

export const ComparingTable = ({ heading }) => {
  return (
    <div className="flex w-full flex-col items-start justify-start gap-8">
      <h5 className="font-heading text-xl leading-tight tracking-tight">
        Credit Card
      </h5>
      <div className="flex w-full flex-col gap-0">
        {compareTable1.map((el, i) => (
          <TableRow
            icon={el.icon}
            heading={el.heading}
            paragraph={el.paragraph}
            row1={el.row1}
            row2={el.row2}
            row3={el.row3}
            key={i}
          />
        ))}
      </div>
    </div>
  );
};
