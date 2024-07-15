import React, { useState } from "react";
import { motion } from "framer-motion";

function TextAnimation({ text, className, viewProp }) {
  const defaultAnimation = {
    hidden: {
      opacity: 0.2,
    },
    visible: {
      opacity: 1,

      transition: {
        duration: 0.1,
      },
    },
  };

  return (
    <div className={className}>
      <span className="sr-only">{text}</span>
      <motion.span
        initial="hidden"
        animate={viewProp ? "visible" : "hidden"}
        transition={{ staggerChildren: 0.1 }}
        className="aria-hidden flex flex-wrap"
      >
        {text.split("").map((char, index) => (
          <motion.span
            className=" inline-block"
            key={index}
            variants={defaultAnimation}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </motion.span>
    </div>
  );
}

export default TextAnimation;
