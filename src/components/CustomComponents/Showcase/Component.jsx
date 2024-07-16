import React, { useRef } from 'react';
import Vid1 from '../../../assets/C1.mp4';
import {motion } from 'framer-motion'

function Component1() {
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    videoRef.current.play();
  };

  const handleMouseLeave = () => {
    videoRef.current.pause();
    videoRef.current.currentTime = 0; // Optional: reset the video to the start
  };

  return (
    <motion.div 
      className='relative w-[100vh] h-[600px] overflow-hidden'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      initial={{opacity:0}}
      whileHover={{opacity:1}}
    >
      <video
        ref={videoRef}
        loop
        muted
        className='absolute top-0 left-0 w-full h-full object-cover'
      >
        <source src={Vid1} type='video/mp4' />
        Your browser does not support the video tag.
      </video>
      <div className='relative z-10 flex items-center justify-center h-full'>
        <div className='text-center'>
          <h1 className='text-white text-4xl md:text-6xl font-bold'>Your Title Here</h1>
          <p className='text-white text-lg md:text-xl mt-4'>Your subtitle or description here.</p>
        </div>
      </div>
    </motion.div>
  );
}

export default Component1;
