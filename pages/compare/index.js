import { CardsCompare } from "../../components/CardStack";
import { CtaMini } from "../../components/CtaMini";
import { HeroSection } from "../../components/Hero";
import { HeroCompare } from "./Hero";
import { MainCompare } from "./MainCompare";

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
