import { Hero } from "../../components/features/Hero";
import { AllInOneBank } from "../../components/features/AllInOne";
import FeaturesList from "../../components/features/FeaturesList";
import { ChooseCards } from "../../components/features/ChooseCard";
import { Cta } from "../../core/CTA";
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
