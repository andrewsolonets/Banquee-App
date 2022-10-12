import { motion } from "framer-motion";
import Link from "next/link";

export const MobileNav = ({ setOpen }) => {
  return (
    <motion.ul
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ ease: "easeOut", duration: 0.4 }}
      exit={{ opacity: 0, y: -50 }}
      onClick={() => setOpen()}
      className="absolute top-16 left-0 right-0 z-30 flex flex-col bg-white py-2 px-5 "
    >
      <Link href="/features">
        <li className="border-b border-grey py-3 ">Features</li>
      </Link>
      <Link href="/compare">
        <li className="border-b border-grey py-3 ">Compare</li>
      </Link>
      <Link href="/support">
        <li className="border-b border-grey py-3 ">Support</li>
      </Link>
      <Link href="/blog">
        <li className="  py-3 ">Blog</li>
      </Link>
    </motion.ul>
  );
};

export const MobileOverlay = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed top-0 bottom-0 right-0 left-0 z-50 bg-black-txt/30"
    ></motion.div>
  );
};
