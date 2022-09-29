import { useState } from "react";
import Cross from "../assets/Cross";
import Plus1 from "../assets/Plus1";

export const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="flex w-full flex-col border-b border-grey  last:border-0">
      <div
        className="flex items-center justify-between pb-7"
        onClick={() => setIsActive((pevState) => !pevState)}
      >
        <h5 className="font-heading text-xl font-medium">{title}</h5>
        <div className="">
          {isActive ? (
            <Cross className="w-[0.9rem]" />
          ) : (
            <Plus1 className="w-[0.9rem]" />
          )}
        </div>
      </div>
      {isActive && (
        <p className="pb-7 font-medium text-black-txt/50">{content}</p>
      )}
    </div>
  );
};
