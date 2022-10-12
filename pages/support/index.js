import SupportMobile from "../../assets/SupportMobile";
import { CardsCompare } from "../../components/CardStack";
import { CtaMini } from "../../core/CtaMini";
import { HeroSection } from "../../components/Hero";
import { MainSupport } from "../../components/support/MainSupport";

import { motion } from "framer-motion";
import { useRouter } from "next/router";

const SupportPage = () => {
  return (
    <div>
      <HeroSection
        smallText={"Support"}
        heading={
          <span>
            How can <br /> we help you?
          </span>
        }
        rightContent={
          <motion.div
            initial={{ y: 300 }}
            animate={{ y: 0 }}
            transition={{ ease: "easeOut", duration: 0.8 }}
          >
            <SupportMobile className=" w-[100%] sm:w-96" />
          </motion.div>
        }
        special={"pt-20 items-center lg:items-start  max-h-[35rem]"}
        headingStyles={"mt-5"}
      />
      <div className="px-8 pb-40 pt-24   2xl:px-60">
        <div className="pb-24">
          <CtaMini />
        </div>
        <MainSupport />
      </div>
    </div>
  );
};

export default SupportPage;
