import FacebookIcon from "../assets/FacebookIcon";
import InstaIcon from "../assets/InstaIcon";
import TwitterIcon from "../assets/TwitterIcon";
import { BadgeL } from "./Badge";

export const ShareSection = () => {
  return (
    <div className="flex flex-col items-center gap-4">
      <h6 className="font-heading text-lg leading-tight tracking-tight">
        Share article
      </h6>
      <div className="flex items-start gap-4">
        <BadgeL bg="bg-white-bgMuted">
          <TwitterIcon className="w-6 fill-black-bg" />
        </BadgeL>
        <BadgeL bg="bg-white-bgMuted">
          <FacebookIcon className="w-6 fill-black-bg" />
        </BadgeL>
        <BadgeL bg="bg-white-bgMuted">
          <InstaIcon className="w-6 fill-black-bg" />
        </BadgeL>
      </div>
    </div>
  );
};
