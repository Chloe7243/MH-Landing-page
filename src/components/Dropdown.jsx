import { motion } from "framer-motion";
import { useState } from "react";

const Dropdown = ({ children, className, buttonText }) => {
  const [showMenu, setShowMenu] = useState(false);
  const borderStyle = showMenu ? "0" : "0.5rem";

  return (
    <motion.div
      className={`md:w-1/2 md:max-w-[25rem] w-full rounded-lg  ${className}`}
      initial={{ height: "3rem" }}
      animate={{ height: showMenu ? "auto" : "3rem" }}
      transition={{ duration: 0.5 }}
    >
      <motion.button
        className="bg-inherit relative rounded-lg w-full p-2 py-3 font-bold z-20"
        animate={{
          borderBottomRightRadius: borderStyle,
          borderBottomLeftRadius: borderStyle,
        }}
        transition={{ delay: showMenu ? 0.0 : 0.2, duration: 0.1 }}
        onClick={() => setShowMenu((prev) => !prev)}
      >
        {buttonText}
      </motion.button>

      <motion.div
        className={`w-full relative rounded-b-lg z-[1] opacity-0`}
        animate={{
          y: showMenu ? "0%" : "-100%",
          opacity: showMenu ? 1 : 0,
        }}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

export default Dropdown;
