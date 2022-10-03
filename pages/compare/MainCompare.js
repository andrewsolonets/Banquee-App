import CardImage from "../../assets/Card";
import Card1 from "../../assets/Card1";
import Card2 from "../../assets/Card2";
import { ChooseCardItem } from "../../components/ChooseCardItem";
import { ComparingTable } from "../../components/ComparingTable";
import {
  compareTable1,
  compareTable2,
  compareTable3,
} from "../../utils/content";

export const MainCompare = () => {
  return (
    <div className="flex flex-col items-end gap-24 px-36 py-9">
      <div className="flex gap-16 xl:max-w-[48rem] 2xl:max-w-[62.5rem]">
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
          image={<Card2 className="w-[13rem] 2xl:w-[17rem]" />}
          badge={false}
          title={"Gold"}
          price={"10"}
          descr={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
        />
      </div>
      <ComparingTable heading={"Credit Cards"} data={compareTable1} />
      <ComparingTable heading={"Bank Account"} data={compareTable2} />
      <ComparingTable heading={"Extra Features"} data={compareTable3} />
    </div>
  );
};
