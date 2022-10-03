import EmailIcon from "../assets/email";
import PhoneIcon from "../assets/PhoneIcon";
import { Accordion } from "./Accordion";
import { BadgeL } from "./Badge";
import { ButtonTextM } from "./Button";
import { faqContent } from "../utils/content";

export const Faq = () => {
  return (
    <section className="flex items-start justify-between px-40 py-40 text-black-txt 2xl:px-60">
      <div className="flex flex-col gap-12">
        <h2 className="font-heading text-6xl leading-tight tracking-tight">
          Need help?
        </h2>
        <div className=" flex flex-col items-start gap-6">
          <div className="flex gap-8">
            <BadgeL>
              <PhoneIcon className="w-7 fill-primary" />
            </BadgeL>
            <div className="flex flex-col items-start">
              <h6 className="font-heading text-lg font-bold ">
                +49 176 123 456
              </h6>
              <p className="text-sm text-black-txt/50">Support Hotline</p>
            </div>
          </div>
          <div className="flex gap-8">
            <BadgeL>
              <EmailIcon className="w-7 fill-primary" />
            </BadgeL>
            <div className="flex flex-col items-start">
              <h6 className="font-heading text-lg font-bold ">help@bank.com</h6>
              <p className="text-sm text-black-txt/50">Support Email</p>
            </div>
          </div>
        </div>
        <ButtonTextM>Support</ButtonTextM>
      </div>
      <div className="flex w-1/2 flex-col gap-8">
        {faqContent.map((el, i) => (
          <Accordion title={el.title} content={el.content} key={i} />
        ))}
      </div>
    </section>
  );
};
