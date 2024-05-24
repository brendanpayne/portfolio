import React, { useEffect, useState, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import TextDecode from '../utils/reveal.jsx';
import { Card3DCanvas } from "./canvas";
import { styles } from "../style";
import { textVariant, fadeIn } from '../utils/motion';

const About = () => {
  const [scrollY, setScrollY] = useState(0);
  const [reveal, setReveal] = useState(false);
  const controls = useAnimation();
  const aboutRef = useRef(null);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const aboutSection = aboutRef.current;
    if (aboutSection) {
      const aboutTop = aboutSection.getBoundingClientRect().top + window.scrollY;
      if (scrollY >= aboutTop && !reveal) {
        controls.start('show');
        setReveal(true);
      } else if (scrollY < aboutTop && !reveal) {
        controls.start('hidden');
      }
    }
  }, [scrollY, controls, reveal]);

  return (
    <section
      id='about'
      ref={aboutRef}
      className="relative w-full h-screen mx-auto flex justify-between items-center bg-primary" 
    >
      <motion.div
        initial='hidden'
        animate={controls}
        variants={fadeIn('right', 'spring', 0.5, 1)}
        className="w-1/2 h-full bg-primary flex justify-center items-center"
      >
        <Card3DCanvas imageUrl={'https://i.imgur.com/RcAfYhF.jpeg'} />
      </motion.div>
      <motion.div
        initial='hidden'
        animate={controls}
        variants={textVariant(0.5)}
        className=" flex flex-col justify-center items-start px-24 w-1/2 h-full bg-primary" 
      >
        <h1 className={`${styles.sectionHeadText} text-white`}>
          <TextDecode text='About Me' />
        </h1>
        <p className={`${styles.sectionSubText} mt-2 text-white-100`}>
          <TextDecode text='I am a software developer based in the United States.' />
        </p>
      </motion.div>
    </section>
  );
};

export default About;