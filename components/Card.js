import Image from "next/image";
import { BadgeL } from "./Badge";

export const Card = ({ icon, heading, text }) => {
  return (
    <div className="flex flex-col gap-4 p-8 border-2 border-grey rounded-2xl ">
      <BadgeL>{icon}</BadgeL>
      <div className="flex self-stretch flex-col gap-2 xl:w-40 2xl:w-[13.75rem]">
        <h5 className="text-xl tracking-tight font-medium font-heading">
          {heading}
        </h5>
        <p>{text}</p>
      </div>
    </div>
  );
};

export const Card2 = ({ icon, bg, heading, price }) => {
  return (
    <div className="flex flex-col gap-4 items-center">
      <div
        className={`flex items-center justify-center w-44 h-44 2xl:w-52 2xl:h-52 ${bg} rounded-2xl`}
      >
        {icon}
      </div>
      <div className="flex items-start gap-1 w-full flex-col">
        <h5 className="font-heading text-xl tracking-tight font-medium  ">
          {heading}
        </h5>
        <p className="text-black-txt/50">{price}</p>
      </div>
    </div>
  );
};
