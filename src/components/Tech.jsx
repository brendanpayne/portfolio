import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import TextDecode from '../utils/reveal.jsx';
import { BallCanvas } from './canvas';
import { styles } from "../style";
import { textVariant, fadeIn } from '../utils/motion';
import { SectionWrapper } from '../hoc/index.js';

const Tech = () => {
  return (
    <div className="relative w-full h-screen mx-auto flex flex-col justify-center items-center bg-primary">
      <motion.div
        variants={textVariant()}
        className="relative z-10 flex flex-col justify-center items-center px-24 md:px-8 w-full md:w-1/2 h-full pt-24 max-w-3xl pointer-events-none"
      >
        <p className={`${styles.sectionSubText} text-secondary pointer-events-none`}>Technologies</p>
        <h2 className={`${styles.sectionHeadText} text-white pointer-events-none`}>
          <TextDecode text='My Tech Stack' />
        </h2>
        <p className={`${styles.sectionBodyText} text-secondary pointer-events-none`}>
          <TextDecode text='Some of the technologies I have worked with.' />
        </p>
      </motion.div>
      <div className="absolute inset-0 w-full h-full flex justify-center items-center">
        <motion.div
          variants={fadeIn('down', 'spring', 0.5, 1)}
          className="relative z-0 w-full h-full bg-primary flex justify-center items-center"
        >
          <BallCanvas />
        </motion.div>
      </div>
    </div>
  );
}

export default SectionWrapper(Tech, "tech");