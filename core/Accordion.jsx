import { useState } from "react";

import Plus1 from "../assets/Plus1";
import { motion } from "framer-motion";

export const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <motion.div
      initial={{ height: "3.5rem" }}
      animate={{ height: `${isActive ? "12rem" : "3.5rem"}` }}
      transition={{ ease: "circOut", duration: 0.4 }}
      className="flex w-full flex-col  border-b border-grey last:border-0"
    >
      <div
        className="flex items-center justify-between pb-7"
        onClick={() => setIsActive((pevState) => !pevState)}
      >
        <h5 className="font-heading text-xl font-medium">{title}</h5>
        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: `${isActive ? "45deg" : "180deg"}` }}
          className=""
        >
          <Plus1 className="w-[0.9rem]" />
        </motion.div>
      </div>

      {isActive && (
        <motion.div className="overflow-hidden">
          <motion.p
            initial={{ y: -50, opacity: 0 }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            exit={{ y: -50, opacity: 0 }}
            transition={{ ease: "circOut", duration: 0.4, delay: 0.05 }}
            className="pb-7 font-medium text-black-txt/50"
          >
            {content}
          </motion.p>
        </motion.div>
      )}
    </motion.div>
  );
};
