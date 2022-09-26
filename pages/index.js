import laptop from "../assets/laptopicon.png";
import bicycle from "../assets/bicycle.png";
import { ButtonTextM } from "../components/Button";
import { Card2 } from "../components/Card";

import { Header } from "../components/Header";
import { TransactionCard } from "../components/TransactionCard";

import { MainSection1 } from "./MainPage/MainSection1";
import { MainSection2 } from "./MainPage/MainSection2";
import { MainSection3 } from "./MainPage/MainSection3";
import BicycleIcon from "../assets/Bicycle";
import LaptopIcon from "../assets/Laptop";
import AirplaneIcon from "../assets/Airplane";
import CameraIcon from "../assets/Camera";
import PlusIcon from "../assets/PlusIcon";

export default function Home() {
  return (
    <>
      <Header />
      <MainSection1 />
      <MainSection2 />
      <MainSection3 />
      <section className="pt-40 flex flex-col items-center font-medium px-40 2xl:px-60">
        <div className="flex flex-col items-start gap-16 ">
          <div className="flex items-end justify-between">
            <div className="flex flex-col items-start gap-4 w-1/2">
              <h5 className="text-xl font-heading tracking-tight">
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
          <div className="flex justify-between w-full">
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
              className={`flex items-center justify-center w-44 h-44 2xl:w-52 2xl:h-52 bg-white-bgMuted rounded-2xl`}
            >
              <PlusIcon />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
