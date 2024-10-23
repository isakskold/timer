import React from "react";
import { motion } from "framer-motion";

const MotionWrapper = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }} // Start off-screen to the right
      animate={{ opacity: 1, x: 0 }} // Slide in from the right
      exit={{ opacity: 0, x: -100 }} // Slide out to the left
      transition={{ duration: 0.2 }} // Transition duration
    >
      {children}
    </motion.div>
  );
};

export default MotionWrapper;
