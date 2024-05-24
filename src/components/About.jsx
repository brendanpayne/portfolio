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
      className="relative w-full h-screen mx-auto flex flex-col-reverse md:flex-row justify-between items-center bg-primary"     >
      <motion.div
        initial='hidden'
        animate={controls}
        variants={fadeIn('right', 'spring', 0.5, 1)}
        className="w-full md:w-1/2 h-full bg-primary flex justify-center items-center"
      >
        <Card3DCanvas imageUrl={'https://i.imgur.com/RcAfYhF.jpeg'} />
      </motion.div>
      <motion.div
        initial='hidden'
        animate={controls}
        variants={textVariant()}
        className="flex flex-col justify-center items-start px-24 md:px-8 w-full md:w-1/2 h-full bg-primary pt-24" 
      > 
        <p className={`${styles.sectionSubText} text-white-100`}>
          <TextDecode text='Introduction' />
        </p>
        <h2 className={`${styles.sectionHeadText} text-white`}>
          <TextDecode text="Hey, I'm Brendan" />
        </h2>
          <p
          initial='hidden'
          variants={fadeIn('left', 'spring', 0.1, 1)}
          animate={controls}
          className='flex flex-col mt-4 text-secondary text-[18px] font-medium max-w-3xl leading-[30px]'
        >
          <TextDecode text={`
            I'm a software developer soon-to-be based in the Greater Boston Area. My expertise lies
            in full-stack development, with most of my experience being in mobile application development leveraging
            technologies like Kotlin, Swift, and React Native. I'm passionate about creating innovative solutions
            to complex problems and I'm always looking to learn new things. Let's innovate and create something
            amazing together!
          `} />
        </p>
      </motion.div>
    </section>
  );
}

export default About;