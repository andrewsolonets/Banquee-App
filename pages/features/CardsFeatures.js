import Card1Rotated from "../../assets/Card1Rotated";
import Card2Rotated from "../../assets/Card2Rotated";
import CardRotated from "../../assets/CardRotated";

export const CardsFeatures = () => {
  return (
    <div className="absolute -bottom-[12rem] flex h-[28rem] justify-center  gap-16 md:-bottom-[22rem] md:h-[42rem]">
      <Card2Rotated className="w-[12rem] self-end md:w-[17rem] 2xl:w-[18.75rem] " />
      <Card1Rotated className="w-[12rem] self-center md:w-[17rem] 2xl:w-[18.75rem]" />
      <CardRotated className="w-[12rem] self-start md:w-[17rem] 2xl:w-[18.75rem]" />
      <Card1Rotated className="w-[12rem] self-center md:w-[17rem] 2xl:w-[18.75rem]" />
      <Card2Rotated className="w-[12rem] self-end md:w-[17rem] 2xl:w-[18.75rem]" />
    </div>
  );
};

export const CardsFeatures2 = () => {
  return (
    <div className="absolute  -bottom-40 flex h-[21.5rem] items-center justify-center gap-8 xl:h-[23.5rem] ">
      <Card1Rotated className="w-[11rem]  self-end  xl:w-[12rem] 2xl:w-[13rem]" />
      <CardRotated className="w-[11rem] self-start xl:w-[12rem] 2xl:w-[13rem]" />
      <Card2Rotated className="w-[11rem] self-end xl:w-[12rem] 2xl:w-[13rem]" />
    </div>
  );
};
