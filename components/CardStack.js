import CardImage from "../assets/Card";
import Card1 from "../assets/Card1";
import Card1Rotated from "../assets/Card1Rotated";
import Card2 from "../assets/Card2";
import Card2Rotated from "../assets/Card2Rotated";
import CardRotated from "../assets/CardRotated";

export const CardStack = () => {
  return (
    <div className="relative flex  h-[31.25rem] w-[31.25rem] flex-col">
      <div className="absolute w-[31.25rem]">
        <CardImage />
      </div>
      <div className="absolute top-24 w-[31.25rem] ">
        <Card1 />
      </div>
      <div className="absolute top-48 w-[31.25rem] ">
        <Card2 />
      </div>
    </div>
  );
};
export const CardsMain = () => {
  return (
    <div className="relative flex h-[36rem] w-[25rem] items-center xl:justify-center 2xl:justify-start">
      <div className="absolute rotate-[12deg] xl:-top-12 xl:left-28 2xl:-top-8 2xl:left-12">
        <CardRotated className=" xl:w-[17rem] 2xl:w-[18.75rem]" />
      </div>

      <div className="absolute">
        <Card1Rotated className=" xl:w-[17rem] 2xl:w-[18.75rem]" />
      </div>
    </div>
  );
};

export const CardsCompare = () => {
  return (
    <div className="relative flex h-[31.2rem] w-[26rem] items-start justify-center 2xl:h-[34rem] ">
      <CardRotated className="absolute bottom-0 right-0 rotate-[10deg] xl:w-[17rem] 2xl:w-[18.75rem]" />
      <Card1Rotated className="absolute z-10 xl:w-[17rem] 2xl:w-[18.75rem]" />
      <Card2Rotated className="absolute bottom-0 left-0 rotate-[-10deg] xl:w-[17rem] 2xl:w-[18.75rem]" />
    </div>
  );
};
