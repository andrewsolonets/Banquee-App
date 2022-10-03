import AppleIcon from "../assets/Apple";
import { BadgeTrans } from "./Badge";

export const TransactionCard = ({
  icon,
  heading,
  descr,
  price,
  w = "w-96",
}) => {
  return (
    <div
      className={`flex ${w} items-center justify-start gap-4 rounded-xl bg-white p-4 `}
    >
      <BadgeTrans>{icon}</BadgeTrans>
      <div className="flex w-3/5 flex-col items-start">
        <h6 className="font-heading text-xl  font-medium tracking-tight ">
          {heading}
        </h6>
        <p className="text-black-txt/50">{descr}</p>
      </div>
      <span className="ml-auto font-heading text-lg">{price}</span>
    </div>
  );
};
