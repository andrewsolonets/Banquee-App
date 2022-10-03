import { Hero } from "./Hero";
import { Feature, Tile1 } from "./Feature";

import FeaturesList from "./FeaturesList";
import { AllInOneBank } from "./AllInOne";

const Features = () => {
  return (
    <div>
      <Hero />
      <div className=" px-8 pb-40  lg:px-40 lg:pt-40 2xl:px-60">
        <FeaturesList />
        <AllInOneBank />
      </div>
    </div>
  );
};

export default Features;
