import { CardsCompare } from "../../components/CardStack";

import { HeroCompare } from "../../components/compare/Hero";
import { HeroSection } from "../../components/Hero";
import { MainCompare } from "../../components/compare/MainCompare";
import { CtaMini } from "../../core/CtaMini";

const Compare = () => {
  return (
    <div>
      <HeroSection
        smallText={"Compare Cards"}
        heading={
          <span>
            The ideal <br /> card for you
          </span>
        }
        rightContent={<CardsCompare />}
      />
      <MainCompare />
      <div className=" px-8 pb-40  lg:px-36">
        <CtaMini />
      </div>
    </div>
  );
};

export default Compare;
