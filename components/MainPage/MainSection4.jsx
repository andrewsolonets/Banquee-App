import AirplaneIcon from "../../assets/Airplane";
import BicycleIcon from "../../assets/Bicycle";
import CameraIcon from "../../assets/Camera";
import LaptopIcon from "../../assets/Laptop";
import PlusIcon from "../../assets/PlusIcon";
import { AnimationContainer } from "../../core/AnimationContainer";
import { ButtonTextM } from "../../core/Button";
import { Card2 } from "../../core/Card";
import { ShoppingItems } from "../ShoppingItems";

export const MainSection4 = () => {
  return (
    <section className="flex flex-col items-center pt-40 font-medium text-black-txt ">
      <div className="flex flex-col items-start gap-16 ">
        <div className="flex flex-col items-end justify-between gap-4 md:flex-row md:gap-0">
          <div className="flex w-full flex-col items-center gap-4 md:w-1/2 md:items-start">
            <AnimationContainer>
              <h5 className="font-heading text-xl tracking-tight">
                Saving Accounts
              </h5>
            </AnimationContainer>
            <AnimationContainer>
              <h2 className="text-center font-heading text-[2.5rem] leading-tight tracking-tight  sm:text-5xl md:text-left lg:text-6xl 2xl:text-7xl ">
                Organize your <br></br>money the right way
              </h2>
            </AnimationContainer>
            <AnimationContainer>
              <p className="text-center md:text-left md:text-xl 2xl:text-2xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </AnimationContainer>
          </div>
          <AnimationContainer>
            <ButtonTextM> All Features</ButtonTextM>
          </AnimationContainer>
        </div>
        <ShoppingItems />
      </div>
    </section>
  );
};
