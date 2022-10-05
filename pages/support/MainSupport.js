import SupportIcon from "../../assets/SupportIcon";
import { HelpSection } from "../../components/HelpSection";
import { faqContent1, faqContent2, faqContent3 } from "../../utils/content";
import { Link } from "react-scroll";

export const MainSupport = () => {
  return (
    <section className="row flex w-full items-start justify-start gap-32">
      <div className="sticky top-20 flex w-1/4 flex-col gap-8 rounded-xl bg-white-bgMuted p-8">
        <h6 className="font-heading text-lg leading-tight tracking-tight">
          Categories
        </h6>
        <div className="flex flex-col gap-4 font-medium">
          <div className="cursor-pointer text-black-txt/50 hover:text-primary">
            <Link
              activeClass="text-primary"
              to="cards"
              spy={true}
              smooth={true}
            >
              Cards
            </Link>
          </div>
          <div className="cursor-pointer text-black-txt/50 hover:text-primary">
            <Link
              to="account"
              spy={true}
              smooth={true}
              activeClass="text-primary"
            >
              Account
            </Link>
          </div>
          <div className="cursor-pointer text-black-txt/50 hover:text-primary">
            <Link
              to="personal"
              spy={true}
              smooth={true}
              activeClass="text-primary"
            >
              Personal Details
            </Link>
          </div>
        </div>
      </div>
      <div className="flex  flex-1 flex-col gap-32">
        <HelpSection
          icon={<SupportIcon className="w-7 fill-primary" />}
          items={faqContent1}
          heading={"Cards"}
          id={"cards"}
        />
        <HelpSection
          icon={<SupportIcon className="w-7 fill-primary" />}
          items={faqContent2}
          heading={"Account"}
          id={"account"}
        />
        <HelpSection
          icon={<SupportIcon className="w-7 fill-primary" />}
          items={faqContent3}
          heading={"Personal Details"}
          id={"personal"}
        />
      </div>
    </section>
  );
};
