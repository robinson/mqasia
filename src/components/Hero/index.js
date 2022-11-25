import React from 'react';
import { motion } from 'framer-motion';
import bgImg from '../../images/hero/main-bg.png';
import { StaticImage } from 'gatsby-plugin-image';

const Hero = () => {
  return (
    <div className="relative flex align-center h-screen">
      <div className="container">
        <div
            className="hero bg-fixed bg-cover bg-center absolute top-0 left-0 w-full h-full"
            style={{ backgroundImage: `url(${bgImg})` }}
        >
          <div className="h-screen flex flex-col justify-center items-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 4 }}
            >
              <StaticImage src="../../images/hero/tokio-main.png" alt="Tokio Ramen Logo" placeholder="tracedSVG" className="z-[5] max-w-screen-md" />
            </motion.div>
            <motion.div
              className="z-[5] pt-12 text-2xl md:text-3xl text-[#222] font-normal uppercase tracking-[.2em] drop-shadow"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3, duration: 3 }}
            >
              Ramen done right
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;