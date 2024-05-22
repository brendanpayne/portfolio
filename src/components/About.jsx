import React, { useEffect, useState, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import TextDecode from '../utils/reveal.jsx';

import { styles } from "../style";

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
        controls.start({ y: 0, opacity: 1 });
        setReveal(true);
      } else if (scrollY < aboutTop && !reveal) {
        controls.start({ y: 100, opacity: 0 });
      }
    }
  }, [scrollY, controls, reveal]);

  return (
    <section
      id='about'
      ref={aboutRef}
      className={`relative w-full h-screen mx-auto flex justify-center items-center bg-primary rounded-t-3xl`}
    >
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={controls}
        transition={{ duration: 0.5 }}
        className={`max-w-7xl mx-auto flex flex-col justify-center items-start gap-10 px-4 sm:px-0`}
      >
        <h1 className={`${styles.heroHeadText} text-white`}>
          <TextDecode text='About' />
        </h1>
        <p className={`${styles.heroSubText} mt-2 text-white-100`}>
          <TextDecode text='I am a software developer based in the United States.' />
        </p>
      </motion.div>
    </section>
  );
};


export default About