import AirplaneIcon from "../../assets/Airplane";
import BicycleIcon from "../../assets/Bicycle";
import CameraIcon from "../../assets/Camera";
import LaptopIcon from "../../assets/Laptop";
import PlusIcon from "../../assets/PlusIcon";
import { ButtonTextM } from "../../components/Button";
import { Card2 } from "../../components/Card";

export const MainSection4 = () => {
  return (
    <section className="flex flex-col items-center px-40 pt-40 font-medium text-black-txt 2xl:px-60">
      <div className="flex flex-col items-start gap-16 ">
        <div className="flex items-end justify-between">
          <div className="flex w-1/2 flex-col items-start gap-4">
            <h5 className="font-heading text-xl tracking-tight">
              Saving Accounts
            </h5>
            <h2 className="font-heading text-6xl">
              Organize your <br></br>money the right way
            </h2>
            <p className="text-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <ButtonTextM>All Features</ButtonTextM>
        </div>
        <div className="flex w-full justify-between">
          <Card2
            icon={<LaptopIcon />}
            bg={"bg-primary-light"}
            heading={"New Laptop"}
            price={"400$"}
          />
          <Card2
            icon={<BicycleIcon />}
            bg={"bg-[#F1DFDF]"}
            heading={"Dream bike"}
            price={"200$"}
          />
          <Card2
            icon={<AirplaneIcon />}
            bg={"bg-[#DFE1F1]"}
            heading={"Holiday"}
            price={"14000$"}
          />
          <Card2
            icon={<CameraIcon />}
            bg={"bg-[#DFEBF1]"}
            heading={"Camera"}
            price={"100$"}
          />
          <div
            className={`flex h-44 w-44 items-center justify-center rounded-2xl bg-white-bgMuted 2xl:h-52 2xl:w-52`}
          >
            <PlusIcon />
          </div>
        </div>
      </div>
    </section>
  );
};
