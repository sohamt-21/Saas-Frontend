import React, { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { BackgroundBeams } from "../../ui/background-beams";
import { Button } from "../../ui/button";

export function Waitlist() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1.5, 1]);

  const handleSubmit = () => {
    // Handle form submission logic here
    console.log("Hey");
  };

  return (
    <motion.div
      className="h-[50vh] w-11/12 mx-auto rounded-3xl bg-neutral-950 relative flex flex-col items-center justify-center antialiased mb-10 "
      ref={container}
     
    >
      <div className="max-w-2xl mx-auto p-4" >
        <h1 className="relative z-10 text-lg md:text-7xl text-gray-300 text-center font-sans font-bold">
          Join the waitlist
        </h1>
        <p className="text-neutral-400 max-w-lg mx-auto my-2 text-md text-center relative z-10">
          Welcome to MailJet, the best transactional email service on the web.
          We provide reliable, scalable, and customizable email solutions for
          your business.
        </p>
        <div className=" flex flec-row gap-2">
          <input
            type="text"
            placeholder="justSohamDoingStuff@gmail.com"
            className="rounded-lg border border-neutral-800 focus:ring-2 h-9 w-full relative z-10 bg-neutral-950 placeholder:text-neutral-700 text-white"
          />
          <Button
            type="submit"
            onClick={handleSubmit}
            variant="secondary"
            className="dark"
          >
            Join
          </Button>
        </div>
      </div>
      <BackgroundBeams />
    </motion.div>
  );
}