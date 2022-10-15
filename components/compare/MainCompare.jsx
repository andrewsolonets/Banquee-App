import CardImage from "../../assets/Card";
import Card1 from "../../assets/Card1";
import ImageCard2 from "../../assets/Card2";
import { AnimationContainer } from "../../core/AnimationContainer";
import { ChooseCardItem } from "../ChooseCardItem";
import { ComparingTable } from "../../core/ComparingTable";
import {
  compareTable1,
  compareTable2,
  compareTable3,
} from "../../utils/content";

export const MainCompare = () => {
  return (
    <div className="flex flex-col items-center gap-24 px-4 py-9 lg:items-end lg:px-36">
      <AnimationContainer className="flex flex-col gap-16 lg:flex-row xl:max-w-[48rem] 2xl:max-w-[62.5rem]">
        <ChooseCardItem
          small={true}
          image={<CardImage className="w-[13rem] 2xl:w-[17rem]" />}
          badge={true}
          title={"Basic"}
          badgeName={"Popular"}
          price={"Free"}
          descr={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
        />
        <ChooseCardItem
          small={true}
          image={<Card1 className="w-[13rem] 2xl:w-[17rem]" />}
          badge={false}
          title={"Premium"}
          price={"$5"}
          descr={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
        />
        <ChooseCardItem
          small={true}
          image={<ImageCard2 className="w-[13rem] 2xl:w-[17rem]" />}
          badge={false}
          title={"Gold"}
          price={"10"}
          descr={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
        />
      </AnimationContainer>
      <ComparingTable heading={"Credit Cards"} data={compareTable1} />
      <ComparingTable heading={"Bank Account"} data={compareTable2} />
      <ComparingTable heading={"Extra Features"} data={compareTable3} />
    </div>
  );
};
