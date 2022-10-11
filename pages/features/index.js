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
      <div className="px-5 pt-20 md:px-20  2xl:px-60">
        <FeaturesList />
        <AllInOneBank />
        <ChooseCards />
        <Cta />
        <Faq />
      </div>
    </div>
  );
};

export default Features;
