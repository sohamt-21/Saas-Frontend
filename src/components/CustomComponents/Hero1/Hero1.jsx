import { Button } from "../../ui/button";
import React, { useRef, useState } from "react";
import Tile from "./Tile";
import Landing from "../../../assets/landing.png";
import { MapPin } from "lucide-react";
import TextAnimation from "../../ui/TextAnimation";
import {
  motion,
  useInView,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";

function Hero1() {
  const [scroll, setScroll] = useState(false);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (y) => {
    setScroll(y > 50);
  });

  const viewRef = useRef(null);
  const isInView = useInView(viewRef, { amount: 0.5 });
  return (
    <>
      <div className="hero1-container w-full relative top-0 ">
        <div className="w-full h-fit grid grid-cols-12 gap-1 ">
          {Array.from(Array(12 * 9), (i) => (
            <Tile key={i} />
          ))}
        </div>

        <div className=" pointer-events-none py-14 absolute inset-0 font-Soria">
          <div className="flex justify-center items-center gap-3">
            <Button variant="hero">Finance</Button>
            <Button variant="hero">B2B</Button>
            <Button variant="hero">Secure</Button>
            <Button variant="hero">Some</Button>
            <Button variant="hero">Thing</Button>
          </div>
          <div className="hero-text mt-7">
            <p className="hero-text items-center flex justify-center text-8xl font-light ">
              <TextAnimation
                text="Animate This text for"
                viewProp={isInView ? false : true}
              />
            </p>
            <p className="hero-text items-center flex justify-center text-8xl font-light text-cyan-500">
              <TextAnimation
                text="Hero Section"
                viewProp={isInView ? false : true}
              />
            </p>
            <p className="hero-text text-lg my-2 font-light max-w-3xl mx-auto text-">
              I will add two lines here just to get some attraction, I will add
              two lines here just to get some attraction, I will add two lines
              here just to get some attraction
            </p>
            <p className="flex flex-row gap-1 justify-center">
              <MapPin />
              <span>Pune, India</span>
            </p>
          </div>
          <div className="hero1-img my-6">
            <motion.img
              src={Landing}
              alt=""
              className="w-2/3 mx-auto border-2 border-gray-400"
              initial={{ rotateX: 60 }}
              animate={scroll ? { rotateX: 0 } : {}}
              transition={{ duration: 4 }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero1;
