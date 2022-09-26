import { BadgeL } from "./Badge";

export const Card = ({ icon, heading, text }) => {
  return (
    <div className="flex flex-col gap-4 p-8 border-2 border-grey rounded-2xl ">
      <BadgeL>{icon}</BadgeL>
      <div className="flex self-stretch flex-col gap-2 max-w-[13.75rem]">
        <h5 className="text-xl tracking-tight font-medium font-heading">
          {heading}
        </h5>
        <p>{text}</p>
      </div>
    </div>
  );
};
