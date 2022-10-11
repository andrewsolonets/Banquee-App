import { BadgeL } from "./Badge";

export const TableRow = ({ icon, heading, paragraph, row1, row2, row3 }) => {
  return (
    <div className="flex w-full flex-col items-center justify-between gap-8 border-t  border-grey py-6 lg:flex-row lg:gap-0">
      <div className="flex items-center gap-4">
        <BadgeL>{icon}</BadgeL>
        <div className=" flex max-w-[9rem] flex-col items-start">
          <h6 className=" font-heading font-bold 2xl:text-lg ">{heading}</h6>
          <p className="text-black-txt/50 xl:text-xs 2xl:text-sm">
            {paragraph}
          </p>
        </div>
      </div>
      <div className="flex  justify-center lg:w-[12.5rem]">{row1}</div>
      <div className="flex  justify-center lg:w-[12.5rem]">{row2}</div>
      <div className="flex  justify-center lg:w-[12.5rem]">{row3}</div>
    </div>
  );
};
