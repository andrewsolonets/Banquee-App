import EmailIcon from "../assets/email";
import PhoneIcon from "../assets/PhoneIcon";
import TickIcon from "../assets/TickIcon";
import { BadgeL, BadgeS } from "./Badge";
import { ButtonM } from "./Button";

export const CtaMini = () => {
  return (
    <div className="flex justify-between rounded-lg  bg-primary p-8">
      <div className="relative flex max-w-xl  gap-8 ">
        <div className="flex flex-col  text-white">
          <h5 className="font-heading text-3xl leading-tight tracking-tight">
            Still have questions?
          </h5>
          <p className="text-lg leading-relaxed text-primary-light">
            We are here to help.
          </p>
        </div>
      </div>
      <div className="flex  gap-20 text-lg  text-white">
        <div className="flex items-center gap-4">
          <BadgeL bg="bg-white/20">
            <PhoneIcon className="w-7 fill-white" />
          </BadgeL>
          <div className="flex flex-col items-start">
            <h6 className="font-heading text-lg font-bold ">+49 176 123 456</h6>
            <p className="text-sm text-primary-light">Support Hotline</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <BadgeL bg="bg-white/20">
            <EmailIcon className="w-7 fill-white" />
          </BadgeL>
          <div className="flex flex-col items-start">
            <h6 className="font-heading text-lg font-bold ">help@bank.com</h6>
            <p className="text-sm text-primary-light">Support Email</p>
          </div>
        </div>
      </div>
      <ButtonM bgColor={"bg-black-bg"}>Chat with us</ButtonM>
    </div>
  );
};
