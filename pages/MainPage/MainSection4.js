import AirplaneIcon from "../../assets/Airplane";
import BicycleIcon from "../../assets/Bicycle";
import CameraIcon from "../../assets/Camera";
import LaptopIcon from "../../assets/Laptop";
import PlusIcon from "../../assets/PlusIcon";
import { ButtonTextM } from "../../components/Button";
import { Card2 } from "../../components/Card";
import { ShoppingItems } from "../../components/ShoppingItems";

export const MainSection4 = () => {
  return (
    <section className="flex flex-col items-center pt-40 font-medium text-black-txt ">
      <div className="flex flex-col items-start gap-16 ">
        <div className="flex flex-col items-end justify-between md:flex-row">
          <div className="flex w-full flex-col items-center gap-4 md:w-1/2 md:items-start">
            <h5 className="font-heading text-xl tracking-tight">
              Saving Accounts
            </h5>
            <h2 className="text-center font-heading text-[2.5rem] leading-tight tracking-tight sm:text-5xl md:text-left md:text-7xl ">
              Organize your <br></br>money the right way
            </h2>
            <p className="text-center md:text-left md:text-xl 2xl:text-2xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <ButtonTextM> All Features</ButtonTextM>
        </div>
        <ShoppingItems />
      </div>
    </section>
  );
};
