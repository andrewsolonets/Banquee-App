import CardImage from "../assets/Card";
import { ButtonS } from "./Button";

export const ChooseCardItem = ({
  image,
  badge = false,
  badgeName,
  price,
  descr,
  title,
  small = false,
}) => {
  return (
    <div className="flex flex-col items-center gap-6 font-medium">
      <div className="flex items-center gap-2">
        <h5 className="text-lg ">{title}</h5>
        {badge && (
          <span className="rounded bg-primary-light px-2 py-1 text-xs text-primary">
            {badgeName}
          </span>
        )}
      </div>
      <div className="flex flex-col gap-4 text-center">
        <div className="flex items-center justify-center gap-2">
          <h4 className="font-heading  text-4xl font-bold leading-tight tracking-tight">
            {price}
          </h4>
          {price !== "Free" && (
            <span className="self-end py-1 text-black-txt/50">per month</span>
          )}
        </div>

        <p className={`${small ? "text-sm" : "text-lg"} text-black-txt/50`}>
          {descr}
        </p>
      </div>

      {image}
      <ButtonS special="w-full">Get started</ButtonS>
    </div>
  );
};
