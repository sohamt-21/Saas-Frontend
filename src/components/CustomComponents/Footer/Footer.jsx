import { Button } from "../../ui/button";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  InstagramLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import TextAnimation from "../../ui/TextAnimation";

function Footer() {
  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-400, 0]);

  return (
    <div
      className="relative bottom-0 w-11/12 border-t-2 mx-auto h-[40vh] overflow-hidden"
      ref={container}
    >
      <motion.div
        className=" h-full flex justify-center items-center gap-1"
        style={{ y }}
      >
        <div className="flex flex-col justify-center items-center mt-20">
          <p className="font-Soria text-7xl flex justify-center items-center">
            <TextAnimation text={"FinRock"}/>
          </p>
          <div className="flex flex-row gap-[1rem]">
            <Button variant="link">Home</Button>
            <Button variant="link">Price</Button>
            <Button variant="link">Courses</Button>
            <Button variant="link">Waitlist</Button>
          </div>
          <hr className="w-full bg-black mt-4 mb-2" />
          <p>All Rights Reserved @Never Selected</p>
          <div className="flex flex-row gap-14 pt-2">
            <motion.a href="" whileHover={{ scale: 1.3 }}>
              <TwitterLogoIcon className=" h-8 w-8" />
            </motion.a>
            <motion.a href="" whileHover={{ scale: 1.3 }}>
              <InstagramLogoIcon className=" h-8 w-8" />
            </motion.a>
            <motion.a href="" whileHover={{ scale: 1.3 }}>
              <LinkedInLogoIcon className=" h-8 w-8" />
            </motion.a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Footer;
