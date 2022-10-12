import CardImage from "../assets/Card";
import Card1 from "../assets/Card1";
import Card1Rotated from "../assets/Card1Rotated";
import Card2 from "../assets/Card2";
import Card2Rotated from "../assets/Card2Rotated";
import CardRotated from "../assets/CardRotated";
import { motion } from "framer-motion";
import {
  AnimationChildContainer,
  AnimationParentContainer,
} from "../core/AnimationContainer";

export const CardStack = () => {
  return (
    <AnimationParentContainer
      direction={"y"}
      staggerChildren={0.3}
      amount={0.4}
      duration={0.1}
      className="relative flex h-[31.25rem] w-[100%]  flex-col items-center  sm:w-[25rem] md:w-[31.25rem]"
    >
      <AnimationChildContainer
        offsetY={120}
        className="absolute w-[100%] sm:w-[25rem] md:w-[31.25rem]"
      >
        <CardImage />
      </AnimationChildContainer>
      <AnimationChildContainer
        offsetY={120}
        className="absolute top-24  w-[100%] sm:w-[25rem] md:w-[31.25rem] "
      >
        <Card1 />
      </AnimationChildContainer>
      <AnimationChildContainer
        offsetY={120}
        className="absolute top-48  w-[100%] sm:w-[25rem] md:w-[31.25rem] "
      >
        <Card2 />
      </AnimationChildContainer>
    </AnimationParentContainer>
  );
};
export const CardsMain = () => {
  return (
    <div className="relative flex h-[25rem] w-full items-center justify-center sm:w-[25rem] lg:h-[36rem] 2xl:justify-start">
      <motion.div
        initial={{ y: 150, rotate: "-14deg", opacity: 0 }}
        animate={{ y: 0, rotate: "12deg", opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="absolute  xl:-top-12 xl:left-28 2xl:-top-8 2xl:left-12"
      >
        <CardRotated className="w-[11rem] md:w-[17rem] 2xl:w-[18.75rem]" />
      </motion.div>

      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, rotate: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="absolute"
      >
        <Card1Rotated className="w-[11rem] md:w-[17rem] 2xl:w-[18.75rem]" />
      </motion.div>
    </div>
  );
};

export const CardsCompare = () => {
  return (
    <motion.div className="relative flex h-[31.2rem] w-[20rem] items-start justify-center lg:w-[25rem]  2xl:h-[34rem]">
      <CardRotated
        initial={{ x: -40, y: 300, rotate: 0 }}
        animate={{ rotate: "10deg", x: 0, y: 0 }}
        transition={{ duration: 0.8 }}
        className="absolute -bottom-[10rem] right-0 w-[12rem] lg:bottom-0 xl:w-[17rem] 2xl:w-[18.75rem]"
      />

      <Card1Rotated
        initial={{ y: 300 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8 }}
        className="absolute z-10 w-[12rem] xl:w-[17rem] 2xl:w-[18.75rem]"
      />

      <Card2Rotated
        initial={{ x: 40, y: 300, rotate: 0 }}
        animate={{ rotate: "-10deg", x: 0, y: 0 }}
        transition={{ duration: 0.8 }}
        className="absolute -bottom-[10rem] left-0 w-[12rem]  lg:bottom-0 xl:w-[17rem] 2xl:w-[18.75rem]"
      />
    </motion.div>
  );
};
