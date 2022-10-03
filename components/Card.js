import Image from "next/image";
import { BadgeL } from "./Badge";

export const Card = ({ icon, heading, text }) => {
  return (
    <div className="flex flex-col gap-4 rounded-2xl border-2 border-grey p-8 ">
      <BadgeL>{icon}</BadgeL>
      <div className="flex flex-col gap-2 self-stretch xl:w-40 2xl:w-[13.75rem]">
        <h5 className="font-heading text-xl font-medium tracking-tight">
          {heading}
        </h5>
        <p>{text}</p>
      </div>
    </div>
  );
};

export const Card2 = ({
  icon,
  bg,
  heading,
  price,
  special = "w-44 h-44 2xl:w-52 2xl:h-52",
}) => {
  return (
    <div className="flex flex-col items-center gap-4">
      <div
        className={`flex items-center justify-center ${special} ${bg} rounded-2xl`}
      >
        {icon}
      </div>
      <div className="flex w-full flex-col items-start gap-1">
        <h5 className="font-heading text-xl font-medium tracking-tight  ">
          {heading}
        </h5>
        <p className="text-black-txt/50">{price}</p>
      </div>
    </div>
  );
};
