
import React from "react";
import { motion } from "framer-motion";

const BackgroundShapes = () => (
  <>
    <motion.div
      className="absolute w-40 h-40 bg-pink-200 rounded-full top-10 left-20 opacity-30"
      animate={{ y: [0, 20, 0] }}
      transition={{ duration: 6, repeat: Infinity }}
    />
    <motion.div
      className="absolute w-60 h-60 bg-pink-100 rounded-full bottom-20 right-10 opacity-30"
      animate={{ x: [0, -20, 0] }}
      transition={{ duration: 8, repeat: Infinity }}
    />
  </>
);

export default BackgroundShapes;
