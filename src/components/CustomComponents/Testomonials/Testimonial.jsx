import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ScrollingTestimonials from "../../animata/container/scrolling-testimonials";

function Testimonial() {
  const testi = useRef();
  const { scrollYProgress } = useScroll({
    target: testi,
    offset: ["start end", "end end"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-200, 50]);

  return (
    <div className=" bg-black text-white h-screen">
      <div className=" w-fit mx-auto mt-24 overflow-hidden dark pb-32" ref={testi}>
        <motion.div className=" " style={{ y }}>
          <p className=" text-6xl font-Soria text-center">
            See what out cutomers say about us
          </p>
          <p className=" text-xl font-Soria text-center mb-24">
            Our very own wall of love. Or complaints. Whatever you want to call
            it.
          </p>
          <ScrollingTestimonials
            data={[
              {
                description:
                  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa nostrum labore dolor facilis, nesciunt facere mollitia nam aspernatur!",
                image:
                  "https://plus.unsplash.com/premium_photo-1717529137991-510ad3be15d9?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                name: "John Doe.",
              },
              {
                description:
                  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa nostrum labore dolor facilis, nesciunt facere mollitia nam aspernatur!",
                image:
                  "https://images.unsplash.com/photo-1566753323558-f4e0952af115?q=80&w=1921&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                name: "Paul A",
              },
              {
                description:
                  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa nostrum labore dolor facilis, nesciunt facere mollitia nam aspernatur!",
                image:
                  "https://images.unsplash.com/photo-1560298803-1d998f6b5249?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                name: "Jeff Roe",
              },
              {
                description:
                  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa nostrum labore dolor facilis, nesciunt facere mollitia nam aspernatur!",
                image:
                  "https://images.unsplash.com/photo-1518287010730-4386819bf3e9?q=80&w=2020&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                name: "Mex Q",
              },
              {
                description:
                  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa nostrum labore dolor facilis, nesciunt facere mollitia nam aspernatur!",
                image:
                  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                name: "Cristina W",
              },
              {
                description:
                  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. ",
                image:
                  "https://images.unsplash.com/photo-1581092916357-5896ebc48073?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                name: "Lanna Del Rey",
              },
              {
                description:
                  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. ",
                image:
                  "https://images.unsplash.com/photo-1483389127117-b6a2102724ae?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                name: "Paul Logan",
              },
            ]}
          />
        </motion.div>
      </div>
    </div>
  );
}

export default Testimonial;
