import AirplaneIcon from "../assets/Airplane";
import BicycleIcon from "../assets/Bicycle";
import CameraIcon from "../assets/Camera";
import LaptopIcon from "../assets/Laptop";
import PlusIcon from "../assets/PlusIcon";
import { Card2 } from "./Card";

export const ShoppingItems = ({ special, cardSize }) => {
  return (
    <div className={`flex w-full justify-between ${special}`}>
      <Card2
        icon={<LaptopIcon />}
        bg={"bg-primary-light"}
        heading={"New Laptop"}
        price={"400$"}
        special={cardSize}
      />
      <Card2
        icon={<BicycleIcon />}
        bg={"bg-[#F1DFDF]"}
        heading={"Dream bike"}
        price={"200$"}
        special={cardSize}
      />
      <Card2
        icon={<AirplaneIcon />}
        bg={"bg-[#DFE1F1]"}
        heading={"Holiday"}
        price={"14000$"}
        special={cardSize}
      />
      <Card2
        icon={<CameraIcon />}
        bg={"bg-[#DFEBF1]"}
        heading={"Camera"}
        price={"100$"}
        special={cardSize}
      />
      <div
        className={`flex h-44 w-44 items-center justify-center rounded-2xl bg-white-bgMuted 2xl:h-52 2xl:w-52`}
      >
        <PlusIcon />
      </div>
    </div>
  );
};
