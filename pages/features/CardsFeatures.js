import CardImage from "../../assets/Card";
import Card1 from "../../assets/Card1";
import Card1Rotated from "../../assets/Card1Rotated";
import Card2 from "../../assets/Card2";
import Card2Rotated from "../../assets/Card2Rotated";
import CardRotated from "../../assets/CardRotated";
import { Card } from "../../components/Card";

export const CardsFeatures = () => {
  return (
    <div className="absolute -bottom-[22rem] flex  h-[692px] justify-center gap-16">
      <Card2Rotated className="self-end xl:w-[17rem] 2xl:w-[18.75rem] " />
      <Card1Rotated className="self-center xl:w-[17rem] 2xl:w-[18.75rem]" />
      <CardRotated className="xl:w-[17rem] 2xl:w-[18.75rem]" />
      <Card1Rotated className="self-center xl:w-[17rem] 2xl:w-[18.75rem]" />
      <Card2Rotated className="self-end xl:w-[17rem] 2xl:w-[18.75rem]" />
    </div>
  );
};
