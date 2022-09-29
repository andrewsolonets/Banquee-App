import { Hero } from "./Hero";
import { Tile1 } from "./Tile1";

const Features = () => {
  return (
    <div>
      <Hero />
      <div className="px-40 py-40 2xl:px-60">
        <Tile1 />
      </div>
    </div>
  );
};

export default Features;
