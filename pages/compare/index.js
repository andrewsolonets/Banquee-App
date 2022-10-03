import { CtaMini } from "../../components/CtaMini";
import { HeroCompare } from "./Hero";
import { MainCompare } from "./MainCompare";

const Compare = () => {
  return (
    <div>
      <HeroCompare />
      <MainCompare />
      <div className=" px-8 pb-40  lg:px-36">
        <CtaMini />
      </div>
    </div>
  );
};

export default Compare;
