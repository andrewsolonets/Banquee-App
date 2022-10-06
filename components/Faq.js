import EmailIcon from "../assets/email";
import PhoneIcon from "../assets/PhoneIcon";
import { Accordion } from "./Accordion";
import { BadgeL } from "./Badge";
import { ButtonTextM } from "./Button";
import { faqContent } from "../utils/content";

export const Faq = () => {
  return (
    <section className="flex flex-col items-start justify-between gap-14 py-40 text-black-txt md:flex-row md:gap-0 ">
      <div className="flex  flex-col items-center gap-12 md:items-start">
        <h2 className="font-heading text-[2.5rem] leading-tight tracking-tight  sm:text-5xl md:text-left lg:text-6xl 2xl:text-7xl">
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
      <div className="flex w-full flex-col gap-8 md:w-1/2">
        {faqContent.map((el, i) => (
          <Accordion title={el.title} content={el.content} key={i} />
        ))}
      </div>
    </section>
  );
};
