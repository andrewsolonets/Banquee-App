import AppleIcon from "../assets/Apple";
import { BadgeTrans } from "./Badge";

export const TransactionCard = ({ icon, heading, descr, price }) => {
  return (
    <div className="flex gap-4 p-4 bg-white rounded-xl w-96 items-center justify-start ">
      <BadgeTrans>{icon}</BadgeTrans>
      <div className="flex flex-col items-start w-3/5">
        <h6 className="font-heading font-bold text-xl font-medium ">
          {heading}
        </h6>
        <p className="text-black-txt/50">{descr}</p>
      </div>
      <span className="font-heading text-lg ml-auto">{price}</span>
    </div>
  );
};
