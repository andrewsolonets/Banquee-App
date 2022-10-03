import { Hero } from "./Hero";
import FeaturesList from "./FeaturesList";
import { AllInOneBank } from "./AllInOne";
import { ChooseCards } from "./ChooseCard";
import { Cta } from "../../components/CTA";
import { Faq } from "../../components/Faq";

const Features = () => {
  return (
    <div>
      <Hero />
      <div className=" px-8 pb-40  lg:px-40 lg:pt-40 2xl:px-60">
        <FeaturesList />
        <AllInOneBank />
        <ChooseCards />
      </div>
      <Cta />
      <Faq />
    </div>
  );
};

export default Features;
