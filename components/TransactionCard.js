import AppleIcon from "../assets/Apple";
import { BadgeTrans } from "./Badge";

export const TransactionCard = () => {
  return (
    <div className="flex gap-4 p-4">
      <BadgeTrans>
        <AppleIcon className="w-6 fill-white" />
      </BadgeTrans>
      <div className="flex flex-col">
        <h6 className="font-heading font-bold text-xl font-medium">Apple</h6>
        <span>You made a 49$ purchase at Amazon!</span>
      </div>
    </div>
  );
};
