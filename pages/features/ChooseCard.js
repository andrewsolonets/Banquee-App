import CardImage from "../../assets/Card";
import Card1 from "../../assets/Card1";
import Card2 from "../../assets/Card2";
import { ButtonM, ButtonS } from "../../components/Button";
import { ChooseCardItem } from "../../components/ChooseCardItem";

export const ChooseCards = () => {
  return (
    <section className="flex flex-col items-center gap-24 pt-40">
      <div className="flex flex-col items-center gap-4 text-center">
        <h5 className="font-heading text-xl tracking-tight">Account</h5>
        <h2 className=" font-heading text-6xl leading-tight tracking-tight">
          Perfect card<br></br> for your needs.
        </h2>
        <p className="text-xl">
          Senectus et netus et malesuada fames ac turpis. <br></br>Sagittis
          vitae et leo duis ut diam.
        </p>
      </div>
      <div className="flex gap-16">
        <ChooseCardItem
          image={<CardImage className="w-[22rem]" />}
          badge={true}
          title={"Basic"}
          badgeName={"Popular"}
          price={"Free"}
          descr={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
        />
        <ChooseCardItem
          image={<Card1 className="w-[22rem]" />}
          badge={false}
          title={"Premium"}
          price={"$5"}
          descr={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
        />
        <ChooseCardItem
          image={<Card2 className="w-[22rem]" />}
          badge={false}
          title={"Gold"}
          price={"10"}
          descr={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
        />
      </div>
    </section>
  );
};
