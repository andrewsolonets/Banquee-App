import Image from "next/image";
import { Card } from "../../components/Card";
import screen1 from "../../assets/app1.png";
import Lightning from "../../assets/Lightning";
import SafeIcon from "../../assets/SafeIcon";
import SmartPhone from "../../assets/SmartPhone";
import WifiIcon from "../../assets/WifiIcon";
import ChartIcon from "../../assets/ChartIcon";

export const MainSection2 = () => {
  return (
    <section className="flex flex-col items-center justify-center py-32 font-medium px-40 2xl:px-60 ">
      <div className="flex items-start justify-between w-full ">
        <div className="flex flex-col gap-16">
          <h2 className="font-heading text-6xl tracking-tight leading-tight">
            One app.<br></br> One banking.
          </h2>
          <div className="flex flex-col gap-8">
            <div className="flex gap-8">
              <Card
                icon={<Lightning className="w-7 fill-primary" />}
                heading={"Instant transactions"}
                text={
                  "Odio euismod lacinia at quis. Amet purus gravida quis blandit turpis."
                }
              />
              <Card
                icon={<SafeIcon className="w-7 fill-primary" />}
                heading={"Saving accounts"}
                text={
                  "Odio euismod lacinia at quis. Amet purus gravida quis blandit turpis."
                }
              />
            </div>
            <div className="flex gap-8">
              <Card
                icon={<SmartPhone className="w-7 fill-primary" />}
                heading={"Mobile banking"}
                text={
                  "Odio euismod lacinia at quis. Amet purus gravida quis blandit turpis."
                }
              />
              <Card
                icon={<ChartIcon className="w-7 fill-primary" />}
                heading={"Advanced statistics"}
                text={
                  "Odio euismod lacinia at quis. Amet purus gravida quis blandit turpis."
                }
              />
            </div>
            <div className="flex gap-8">
              <Card
                icon={<SmartPhone className="w-7 fill-primary" />}
                heading={"Mobile banking"}
                text={
                  "Odio euismod lacinia at quis. Amet purus gravida quis blandit turpis."
                }
              />
              <Card
                icon={<WifiIcon className="w-7 fill-primary" />}
                heading={"Advanced statistics"}
                text={
                  "Odio euismod lacinia at quis. Amet purus gravida quis blandit turpis."
                }
              />
            </div>
          </div>
        </div>
        <Image src={screen1} alt="app demo" />
      </div>
    </section>
  );
};
