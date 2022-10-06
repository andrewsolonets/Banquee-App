import SupportMobile from "../../assets/SupportMobile";
import { CardsCompare } from "../../components/CardStack";
import { CtaMini } from "../../components/CtaMini";
import { HeroSection } from "../../components/Hero";
import { MainSupport } from "./MainSupport";

const SupportPage = () => {
  return (
    <div>
      <HeroSection
        smallText={"Support"}
        heading={
          <span>
            How can <br /> we help you?
          </span>
        }
        rightContent={<SupportMobile />}
        special={"pt-20 items-center lg:items-start  max-h-[35rem]"}
        headingStyles={"mt-5"}
      />
      <div className="px-8 pb-40 pt-24   2xl:px-60">
        <div className="pb-24">
          <CtaMini />
        </div>
        <MainSupport />
      </div>
    </div>
  );
};

export default SupportPage;
