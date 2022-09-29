import CardImage from "../assets/Card";
import Card1 from "../assets/Card1";
import Card2 from "../assets/Card2";

export const CardStack = () => {
  return (
    <div className="relative flex  h-[31.25rem] w-[31.25rem] flex-col">
      <div className="absolute ">
        <CardImage />
      </div>
      <div className="absolute top-24 ">
        <Card1 />
      </div>
      <div className="absolute top-48 ">
        <Card2 />
      </div>
    </div>
  );
};
export const CardsMain = () => {
  return (
    <div className="relative flex h-[36rem] w-[25rem] items-center justify-end">
      <div className="absolute rotate-[102deg] xl:top-20 xl:left-10 2xl:top-12 2xl:-left-12">
        <CardImage className=" xl:w-[25rem] 2xl:w-[31.25rem]" />
      </div>

      <div className="absolute rotate-90">
        <Card1 className=" xl:w-[25rem] 2xl:w-[31.25rem]" />
      </div>
    </div>
  );
};
