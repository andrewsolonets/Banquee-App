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
        <ShoppingItems />
      </div>
    </section>
  );
};
