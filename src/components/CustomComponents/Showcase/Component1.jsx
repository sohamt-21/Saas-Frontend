import React, { useRef, useState } from 'react';
import Vid1 from '../../../assets/C1.mp4';
import { motion } from 'framer-motion';

function Component1() {
  const videoRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    videoRef.current.pause();
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    videoRef.current.play();
    videoRef.current.currentTime = 0; 
    setIsHovered(false);
  };

  return (
    <motion.div 
      className='relative w-[49rem] h-[40rem] overflow-hidden'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <motion.video
        ref={videoRef}
        loop
        muted
        className='absolute top-0 left-0 w-full h-full object-cover'
        style={{ filter: isHovered ? 'brightness(0.5)' : 'none' }} // Dim with brightness
      >
        <source src={Vid1} type='video/mp4' />
        Your browser does not support the video tag.
      </motion.video>
      <div className='relative z-7 flex flex-col justify-end h-full pb-4 pl-3'>
        <h1 className="text-6xl font-bold mt-4 transition-all duration-300 transform text-white">Starter Course</h1>
        <motion.p
          className={`text-white text-lg md:text-xl mt-4 transition-all duration-300 transform ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          Get started with platform introduction and basics
        </motion.p>
        <motion.p
          className={`text-white transition-all duration-300 transform ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam consequuntur fugiat magnam beatae hic iure iusto sint possimus.
        </motion.p>
      </div>
    </motion.div>
  );
}

export default Component1;
