import EmailIcon from "../assets/email";
import PhoneIcon from "../assets/PhoneIcon";
import { Accordion } from "../core/Accordion";
import { BadgeL } from "../core/Badge";
import { ButtonTextM } from "../core/Button";
import { motion, LayoutGroup } from "framer-motion";
import { faqContent } from "../utils/content";
import { AnimationContainer } from "../core/AnimationContainer";

export const Faq = () => {
  return (
    <section className="flex flex-col items-start justify-between gap-14 py-40 text-black-txt md:flex-row md:gap-0 ">
      <div className="flex  flex-col items-center gap-12 md:items-start">
        <AnimationContainer>
          <h2 className="font-heading text-[2.5rem] leading-tight tracking-tight  sm:text-5xl md:text-left lg:text-6xl 2xl:text-7xl">
            Need help?
          </h2>
        </AnimationContainer>
        <div className=" flex flex-col items-start gap-6">
          <div className="flex gap-8">
            <AnimationContainer>
              <BadgeL>
                <PhoneIcon className="w-7 fill-primary" />
              </BadgeL>
            </AnimationContainer>
            <div className="flex flex-col items-start">
              <AnimationContainer>
                <h6 className="font-heading text-lg font-bold ">
                  +49 176 123 456
                </h6>
              </AnimationContainer>
              <AnimationContainer>
                <p className="text-sm text-black-txt/50">Support Hotline</p>
              </AnimationContainer>
            </div>
          </div>
          <div className="flex gap-8">
            <AnimationContainer>
              <BadgeL>
                <EmailIcon className="w-7 fill-primary" />
              </BadgeL>
            </AnimationContainer>
            <div className="flex flex-col items-start">
              <AnimationContainer>
                <h6 className="font-heading text-lg font-bold ">
                  help@bank.com
                </h6>
              </AnimationContainer>
              <AnimationContainer>
                <p className="text-sm text-black-txt/50">Support Email</p>
              </AnimationContainer>
            </div>
          </div>
        </div>
        <AnimationContainer>
          <ButtonTextM>Support</ButtonTextM>
        </AnimationContainer>
      </div>
      <AnimationContainer className="flex w-full flex-col gap-8 md:w-1/2">
        <LayoutGroup>
          {faqContent.map((el, i) => (
            <Accordion title={el.title} content={el.content} key={i} />
          ))}
        </LayoutGroup>
      </AnimationContainer>
    </section>
  );
};
