import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const Card = ({ className, children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  const slideControls = useAnimation();
  useEffect(() => {
    if (isInView) {
      slideControls.start("visible");
    }
  }, [isInView]);
  return (
    <motion.div
      ref={ref}
      exit={{ opacity: 0, y: 75 }}
      whileInView={{ opacity: 1, y: 0 }}
      variants={{
        hidden: { opacity: 0, y: 75 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={slideControls}
      transition={{ duration: .5, delay: 0.25 }}
      className={`p-4 bg-[#e5e5e580] rounded-lg lg:max-w-[25rem] ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default Card;
